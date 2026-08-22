const https = require('https');
https.get('https://mixkit.co/free-stock-video/people-working-in-the-office-42617/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const m = data.match(/https:\/\/assets\.mixkit\.co\/videos\/[^\`"]+\.mp4/g);
    console.log(m ? m[0] : 'not found');
  });
});
