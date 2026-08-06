// Vercel Serverless Function - /api/subscribe
export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { email } = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});

      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ success: false, error: 'Email no válido' });
      }

      const subscriber = {
        id: Date.now(),
        email: email.trim().toLowerCase(),
        created_at: new Date().toISOString(),
        status: 'subscribed',
        source: 'Bonbon Flowers Landing Page'
      };

      console.log('Nuevo suscriptor registrado:', subscriber);

      return res.status(200).json({
        success: true,
        message: 'Suscriptor guardado correctamente',
        data: subscriber
      });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ success: false, error: 'Método no permitido' });
}
