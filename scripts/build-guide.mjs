import './build-wiki.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadGuide, validateGuide, buildSearchData, searchDataJs, filename } from './guide-model.mjs';
import { pageShell, redirectPage } from './guide-shell-personal.mjs';
import { assertAssetsResolve } from './guide-verify.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'public/blog/guide');
const {manifest,all}=loadGuide(root);
const report=validateGuide(all,manifest);
// Old bookmarks still reach the corresponding current article.
const redirects={experiments:'reading.html',publishing:'writing.html#submission'};
for(const lang of ['zh','en']){
 const dir=path.join(out,lang);
 fs.mkdirSync(dir,{recursive:true});
 const expected=new Set([...all[lang].map(p=>filename(p.id)),...Object.keys(redirects).map(id=>id+'.html')]);
 for(const file of fs.readdirSync(dir))if(file.endsWith('.html')&&!expected.has(file))fs.unlinkSync(path.join(dir,file));
 for(const [index,p] of all[lang].entries())
  fs.writeFileSync(path.join(dir,filename(p.id)),pageShell({p,pages:all[lang],index,lang,assets:'../',skin:'../guide-personal.css?v=20261015'}));
 for(const [id,target] of Object.entries(redirects))fs.writeFileSync(path.join(dir,id+'.html'),`<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><title>AI Research Guide</title><a href="${target}">${lang==='zh'?'继续阅读':'Continue reading'}</a></html>`);
}
fs.writeFileSync(path.join(out,'search-data.js'),searchDataJs(buildSearchData(all)));
fs.writeFileSync(path.join(out,'index.html'),redirectPage);
for(const lang of ['zh','en'])assertAssetsResolve(path.join(out,lang),`personal ${lang}`);
fs.mkdirSync(path.join(root,'work/guide-review'),{recursive:true});
fs.writeFileSync(path.join(root,'work/guide-review/build.json'),JSON.stringify(report,null,2));
console.log(`Guide built: ${manifest.length} pages × 2 languages; 60 questions, shared presentation, and legacy redirects.`);
