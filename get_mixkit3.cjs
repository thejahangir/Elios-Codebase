const https = require('https');
https.get('https://mixkit.co/free-stock-video/office/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const regex = /<a[^>]+href="(\/free-stock-video\/[^\"]+)"[^>]*>([^<]+)<\/a>/g;
    let m;
    let results = [];
    while ((m = regex.exec(data)) !== null) {
      if(m[1].includes('working') || m[1].includes('executive')) {
        results.push(m[1] + ' : ' + m[2]);
      }
    }
    console.log(Array.from(new Set(results)).slice(0, 10));
  });
});
