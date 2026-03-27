const https = require('https');

https.get('https://powerwealth-advisory-153106838370.us-west1.run.app/assets/index-kTqQ2ac-.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const strings = data.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
    const unique = [...new Set(strings)].filter(s => s.length > 20 && !s.includes('function') && !s.includes('return') && !s.includes('react'));
    console.log(unique.slice(0, 100).join('\n'));
  });
});
