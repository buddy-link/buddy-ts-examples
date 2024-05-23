import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';
import { NodeData, Position } from './types';

interface TeamPopoverProps {
  open: boolean;
  onClose: () => void;
  node: NodeData | null;
  position: Position;
}

export function TeamPopover({ open, onClose, node, position }: TeamPopoverProps) {
  if (!node) return null;

  return (
    <Popover open={open} onOpenChange={onClose}>
      {/* <PopoverTrigger asChild>
        <div className="hidden" style={{ position: 'fixed', left: 0, top: position.y }}>
          
        </div>
      </PopoverTrigger> */}
      <PopoverContent
        className="w-fit min-w-[240px] z-50 gap-3 py-8 shadow-none border-4 border-[#FCF4EE]"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={node.image} width={84} height={84} alt={node.label} />
            <h4 className="font-bold text-primary-dark">{node.label}</h4>
            <span className="flex items-center justify-center space-x-2 text-light font-normal">
              {node.members.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}{' '}
              members
            </span>
            <span className="flex items-center justify-center space-x-2 text-light font-semibold">
              {node.points.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}{' '}
              points
            </span>
          </div>

          <Button type="button" variant="primary" className="px-8 mt-4" onClick={onClose}>
            Join
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
