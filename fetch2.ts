import https from 'https';

https.get('https://powerwealth-advisory-153106838370.us-west1.run.app/assets/index-kTqQ2ac-.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const strings = data.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
    const unique = [...new Set(strings)].map(s => s.replace(/"/g, ''));
    
    // Filter out code-like strings
    const contentStrings = unique.filter(s => {
      if (s.length < 15) return false;
      if (!s.includes(' ')) return false;
      if (s.includes('function') || s.includes('return') || s.includes('react') || s.includes('Error')) return false;
      if (s.includes('px') || s.includes('rem') || s.includes('em') || s.includes('vh')) return false;
      if (s.match(/^[a-z0-9_]+$/i)) return false;
      if (s.includes('!==') || s.includes('===') || s.includes('=>')) return false;
      return true;
    });

    // Sort by length descending to get the paragraphs
    contentStrings.sort((a, b) => b.length - a.length);
    console.log(contentStrings.slice(0, 30).join('\n---\n'));
  });
});
