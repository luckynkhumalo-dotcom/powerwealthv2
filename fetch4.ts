import https from 'https';

https.get('https://powerwealth-advisory-153106838370.us-west1.run.app/assets/index-kTqQ2ac-.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Extract all strings enclosed in ', ", or `
    const regex = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
    const strings = data.match(regex) || [];
    const unique = [...new Set(strings)].map(s => s.slice(1, -1));
    
    const contentStrings = unique.filter(s => {
      if (s.length < 20) return false;
      const words = s.split(/\s+/);
      if (words.length < 4) return false;
      if (s.includes('function') || s.includes('return') || s.includes('react') || s.includes('Error')) return false;
      if (s.includes('!==') || s.includes('===') || s.includes('=>') || s.includes('&&') || s.includes('||')) return false;
      // Must contain mostly letters and spaces
      if (!s.match(/^[a-zA-Z0-9\s.,!?'’\-:]+$/)) return false;
      return true;
    });

    console.log(contentStrings.join('\n---\n'));
  });
});
