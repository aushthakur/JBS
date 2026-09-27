const http = require('http');
const https = require('https');

// Render sets the RENDER_EXTERNAL_URL environment variable to the public URL of the service
const url = process.env.RENDER_EXTERNAL_URL || 'http://localhost:3000';
const endpoint = `${url}/api/keepalive`;

console.log(`Starting keep-alive script targeting: ${endpoint}`);

setInterval(() => {
  const req = url.startsWith('https') ? https : http;
  req.get(endpoint, (res) => {
    // Consume response data to free up memory
    res.on('data', () => {});
    res.on('end', () => {
      console.log(`[Keep-Alive] Pinged ${endpoint} - Status: ${res.statusCode}`);
    });
  }).on('error', (err) => {
    console.error(`[Keep-Alive] Error: ${err.message}`);
  });
}, 60000); // 1 minute
