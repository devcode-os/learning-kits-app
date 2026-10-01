const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'www', 'kits');
const out = [];
for (const f of fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.html')).sort()) {
  const h = fs.readFileSync(path.join(dir, f), 'utf8');
  const title = (h.match(/<title>([^<]*)<\/title>/i) || [])[1] || f.replace(/\.html$/i, '').replace(/[-_]/g, ' ');
  const desc = (h.match(/<meta\s+name="kit-desc"\s+content="([^"]*)"/i) || [])[1] || '';
  const color = (h.match(/<meta\s+name="kit-color"\s+content="([^"]*)"/i) || [])[1] || '';
  out.push({ file: f, title: title.trim(), desc, color });
}
fs.writeFileSync(path.join(__dirname, '..', 'www', 'kits.json'), JSON.stringify(out, null, 1));
console.log(out.length + ' kit(s) listed');
