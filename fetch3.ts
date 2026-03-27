import https from 'https';

https.get('https://powerwealth-advisory-153106838370.us-west1.run.app/assets/index-kTqQ2ac-.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const strings = data.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
    const unique = [...new Set(strings)].map(s => s.replace(/"/g, ''));
    
    const contentStrings = unique.filter(s => {
      if (s.length < 10) return false;
      if (!s.includes(' ')) return false;
      if (s.includes('function') || s.includes('return') || s.includes('react') || s.includes('Error')) return false;
      if (s.match(/^[a-z0-9_]+$/i)) return false;
      if (s.includes('!==') || s.includes('===') || s.includes('=>') || s.includes('&&') || s.includes('||')) return false;
      // Must contain mostly letters and spaces
      if (!s.match(/^[a-zA-Z0-9\s.,!?'’-]+$/)) return false;
      return true;
    });

    console.log(contentStrings.join('\n'));
  });
});
