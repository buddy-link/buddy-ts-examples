import axios from 'axios';

const handler = async (req: Request) => {
  const body = await req.json();
  const response = await axios({
    url: 'https://oauth2.googleapis.com/token',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: body.token,
    },
  });

  return Response.json({ token: response.data.id_token });
};

export { handler as POST };
