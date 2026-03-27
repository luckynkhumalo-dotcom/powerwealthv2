import https from 'https';

https.get('https://powerwealth-advisory-153106838370.us-west1.run.app/assets/index-kTqQ2ac-.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const strings = data.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
    const unique = [...new Set(strings)].map(s => s.replace(/"/g, '')).filter(s => 
      s.length > 30 && 
      s.includes(' ') && 
      !s.includes('function') && 
      !s.includes('return') && 
      !s.includes('react') &&
      !s.includes('Error') &&
      !s.includes('typeof') &&
      !s.includes('window') &&
      !s.includes('document') &&
      !s.match(/^[a-z0-9_]+$/i)
    );
    console.log(unique.join('\n'));
  });
});
