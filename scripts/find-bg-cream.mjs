import fs from "fs";
import path from "path";

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.tsx$/.test(e.name)) out.push(p);
  }
  return out;
}

for (const f of walk("src")) {
  const s = fs.readFileSync(f, "utf8");
  const re = /className="([^"]*bg-cream[^"]*)"/g;
  let m;
  while ((m = re.exec(s))) {
    const c = m[1];
    if (c.includes("bg-cream") && !c.includes("dark:bg-")) {
      console.log(f + "\n  " + c.slice(0, 140));
    }
  }
}
