import Sigma from 'sigma';
import { floatColor } from 'sigma/utils';

import { RenderParams } from 'sigma/types';
import { AbstractNodeProgram, NodeHoverDrawingFunction, NodeLabelDrawingFunction } from 'sigma/rendering';
import { Attributes } from 'graphology-types';
import { NodeImageProgram } from '@sigma/node-image';

const vertexShaderSource = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute vec3 a_color;

  uniform float u_ratio;
  uniform float u_scale;
  uniform mat3 u_matrix;

  varying vec3 v_color;

  void main() {
    v_color = a_color;
    vec2 position = (u_matrix * vec3(a_position, 1)).xy;
    gl_Position = vec4(position * u_ratio, 0, 1);
    gl_PointSize = a_size * u_ratio * u_scale;
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  varying vec3 v_color;
  uniform sampler2D u_image;

  void main() {
    vec2 coords = gl_PointCoord;
    vec4 textureColor = texture2D(u_image, coords);
    if (textureColor.a < 0.1) discard;
    gl_FragColor = textureColor;
  }
`;

export default class CustomNodeProgram extends NodeImageProgram {
  texture: WebGLTexture | null = null;
  imageLoaded: boolean = false;
  array: Float32Array = new Float32Array([]);
  gl: WebGLRenderingContext = {} as WebGLRenderingContext; // Initialize the gl property
  buffer: WebGLBuffer = {} as WebGLBuffer;
  attributes: { a_position: number; a_size: number; a_color: number } = { a_position: 0, a_size: 0, a_color: 0 };
  nodesCount: number = 0;

  constructor(gl: WebGLRenderingContext) {
    super(gl, vertexShaderSource, fragmentShaderSource);

    const image = new Image();
    image.src = '/logo.webp';
    image.onload = () => {
      this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      this.imageLoaded = true;
    };
  }
  process(data: Attributes, hidden: boolean, offset: number): void {
    if (hidden) return;

    const { x, y, size, color } = data;
    const array = this.array;
    const i = offset * this.attributes;

    array[i] = x;
    array[i + 1] = y;
    array[i + 2] = size;
    array[i + 3] = floatColor(color);
  }

  render(params: RenderParams): void {
    const gl = this.gl;

    gl.useProgram(this.program);

    gl.uniform1f(this.uniforms.u_ratio, 1 / Math.sqrt(params.ratio));
    gl.uniform1f(this.uniforms.u_scale, params.scale);
    gl.uniformMatrix3fv(this.uniforms.u_matrix, false, params.matrix);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(this.attributes.a_position, 2, gl.FLOAT, false, 24, 0);
    gl.vertexAttribPointer(this.attributes.a_size, 1, gl.FLOAT, false, 24, 8);
    gl.vertexAttribPointer(this.attributes.a_color, 3, gl.FLOAT, false, 24, 12);

    gl.enableVertexAttribArray(this.attributes.a_position);
    gl.enableVertexAttribArray(this.attributes.a_size);
    gl.enableVertexAttribArray(this.attributes.a_color);

    if (this.imageLoaded && this.texture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.uniform1i(this.uniforms.u_image, 0);
    }

    gl.drawArrays(gl.POINTS, 0, this.nodesCount);
  }
}
