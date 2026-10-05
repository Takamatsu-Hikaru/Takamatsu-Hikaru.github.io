import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const club=path.resolve(process.argv[2]||'');
if(!process.argv[2]||!fs.existsSync(path.join(club,'预览/template.html')))throw Error('Pass the existing AI club guide directory.');
const read=p=>fs.readFileSync(p,'utf8');
const write=(p,s)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s)};
const copy=(from,to)=>{fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to)};
const copyTree=(from,to)=>{fs.mkdirSync(to,{recursive:true});for(const e of fs.readdirSync(from,{withFileTypes:true})){const a=path.join(from,e.name),b=path.join(to,e.name);if(e.isDirectory())copyTree(a,b);else copy(a,b)}};
const replace=(s,a,b)=>{if(!s.includes(a))throw Error('Sync target changed: '+a.slice(0,100));return s.replace(a,b)};
const backup=path.join(root,'work/club-before-fieldnotes-sync');
if(!fs.existsSync(backup))copyTree(club,backup);
const source=path.join(root,'content/guide');
const stateFile=path.join(club,'编辑说明/正文同步状态.json');
const previous=fs.existsSync(stateFile)?JSON.parse(read(stateFile)):{};
const digest=s=>createHash('sha256').update(s.replace(/\r\n/g,'\n')).digest('hex');
const shared=fs.readdirSync(path.join(source,'zh')).filter(f=>!['home.md','about.md','welcome.md'].includes(f));
// Stop before copying if the club has independent edits since the last sync.
for(const file of shared){
 const target=path.join(club,'正文',file);
 if(previous[file]&&fs.existsSync(target)&&digest(read(target))!==previous[file]&&digest(read(target))!==digest(read(path.join(source,'zh',file))))throw Error('AI club has newer local edits; reconcile before sync: '+target);
}
const textBackup=path.join(club,'编辑说明','同步前正文-'+new Date().toISOString().replace(/[:.]/g,'-'));
const synced={};
for(const file of fs.readdirSync(path.join(source,'zh'))){
 if(shared.includes(file)){
  const target=path.join(club,'正文',file),incoming=path.join(source,'zh',file);
  if(fs.existsSync(target)&&digest(read(target))!==digest(read(incoming)))copy(target,path.join(textBackup,file));
  copy(incoming,target);synced[file]=digest(read(target));
 }
}
write(stateFile,JSON.stringify(synced,null,2)+'\n');
for(const file of fs.readdirSync(path.join(source,'fieldnotes')))copy(path.join(source,'fieldnotes',file),path.join(club,'数据/fieldnotes',file));
copy(path.join(source,'paper-figures.json'),path.join(club,'数据/paper-figures.json'));
const figures=JSON.parse(read(path.join(source,'paper-figures.json')));
for(const fig of Object.values(figures))copy(path.join(root,'public/blog/guide/figures',fig.file),path.join(club,'预览/figures',fig.file));
let renderer=read(path.join(root,'scripts/fieldnotes.mjs'))
 .replace("'content/guide/fieldnotes'","'数据/fieldnotes'")
 .replace("'../content/guide/paper-figures.json'","'../数据/paper-figures.json'")
 .replace("'../public/blog/guide/figures/'","'../预览/figures/'");
write(path.join(club,'模块/fieldnotes.mjs'),renderer);
copy(path.join(root,'scripts/ama-page.mjs'),path.join(club,'模块/ama-page.mjs'));
for(const file of ['guide-motion.mjs','guide-directory.mjs'])copy(path.join(root,'scripts',file),path.join(club,'模块',file));
for(const file of ['guide-motion.css','guide-motion.js'])copy(path.join(root,'public/blog/guide',file),path.join(club,'预览',file));
for(const folder of ['brands','motion'])copyTree(path.join(root,'public/blog/guide',folder),path.join(club,'预览',folder));
copy(path.join(root,'public/blog/guide/fieldnotes.css'),path.join(club,'预览/fieldnotes.css'));
let ama=read(path.join(root,'public/blog/guide/ama.js')).replace('(() => {','window.initGuideAMA = () => {').replace(/\}\)\(\);\s*$/,'};');
write(path.join(club,'预览/ama.js'),ama);
write(path.join(club,'预览/fieldnotes.js'),`(() => {
 let active=null,opener=null;
 const closePaper=d=>{if(!d.open||d.classList.contains('leaving'))return;if(matchMedia('(prefers-reduced-motion: reduce)').matches){d.close();return}d.classList.add('leaving');setTimeout(()=>{d.close();d.classList.remove('leaving')},180)};
 const base=()=> '#/'+(document.body.dataset.page||'home');
 window.openGuidePaper=id=>{
  const d=document.getElementById(id);if(!d||!d.classList.contains('paper-dialog'))return;
  if(active&&active!==d)active.close();
  if(!d.open){opener=document.activeElement;d.showModal();d.querySelector('[data-close-paper]').focus()}active=d;
 };
 window.closeGuidePaper=()=>{if(active)active.close()};
 window.initGuideFieldnotes=root=>{
  root.querySelectorAll('[data-paper]').forEach(b=>b.onclick=()=>{location.hash=base()+'/paper-'+b.dataset.paper});
  root.querySelectorAll('.paper-dialog').forEach(d=>{
   d.querySelector('[data-close-paper]').onclick=()=>closePaper(d);
   d.oncancel=e=>{e.preventDefault();closePaper(d)};
   d.onclick=e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePaper(d)}};
   d.onclose=()=>{if(active===d)active=null;if(location.hash.endsWith('/'+d.id))history.replaceState(null,'',base());if(opener?.isConnected)opener.focus()};
  });
  root.querySelectorAll('[data-check]').forEach(c=>{const key='guide-check-'+c.dataset.check;try{c.checked=localStorage.getItem(key)==='1'}catch{}c.onchange=()=>{try{localStorage.setItem(key,c.checked?'1':'0')}catch{}}});
  const filter=()=>{const domain=root.querySelector('#paper-domain')?.value||'',q=(root.querySelector('#paper-query')?.value||'').toLowerCase();let n=0;root.querySelectorAll('.paper-library .paper-item').forEach(el=>{const show=(!domain||el.dataset.domains.split(' ').includes(domain))&&el.dataset.find.toLowerCase().includes(q);el.hidden=!show;if(show)n++});const count=root.querySelector('#paper-count');if(count)count.textContent=n+' 篇代表作'};
  const domain=root.querySelector('#paper-domain'),query=root.querySelector('#paper-query');if(domain)domain.onchange=filter;if(query)query.oninput=filter;
 };
})();
`);
const manifestFile=path.join(club,'manifest.json'),manifest=JSON.parse(read(manifestFile));
if(!manifest.some(p=>p.id==='ama'))manifest.push(JSON.parse(read(path.join(source,'manifest.json'))).find(p=>p.id==='ama'));
write(manifestFile,JSON.stringify(manifest,null,2)+'\n');
let build=read(path.join(club,'build.mjs'));
if(!build.includes('loadFields')){
 build=replace(build,"const root = path.dirname(fileURLToPath(import.meta.url));","import {loadFields,fieldNotes,paperLibrary} from './模块/fieldnotes.mjs';\nimport {amaPage} from './模块/ama-page.mjs';\nconst root = path.dirname(fileURLToPath(import.meta.url));\nconst fields=loadFields(root);");
 const at=" page.plain=raw.replace";
 const pos=build.indexOf(at);if(pos<0)throw Error('Missing plain-text builder');
 const end=build.indexOf('\n',pos);
 build=build.slice(0,pos)+` const field=fields.find(f=>f.id===page.id);
 if(field){const parts=page.html.match(/^(<h1>[\\s\\S]*?<\\/h1>)([\\s\\S]*?)(<h2[\\s\\S]*)$/);if(!parts)throw Error('Missing introduction '+page.id);page.html=parts[1]+fieldNotes(field,'zh',parts[2],parts[3])}
 if(page.id==='papers')page.html=page.html.replace(/(<h1>[\\s\\S]*?<\\/h1>)/,m=>m+paperLibrary(fields,'zh'));
 if(page.id==='ama')page.html+=amaPage('zh');
 page.html=page.html.replace(/href="(?!https?:)([^"]+)\\.html(?:#([^"]+))?"/g,(_,id,a)=>'href="#/'+id+(a?'/'+a:'')+'"').replace(/href="#(paper-[^"]+)"/g,(_,id)=>'href="#/'+page.id+'/'+id+'"').replaceAll('../figures/','figures/');
 page.plain=page.html.replace(/<[^>]*>/g,' ').replace(/\\s+/g,' ').trim();`+build.slice(end);
}
if(!build.includes('enrichDirectory')){
 build=build.replace("import {amaPage}","import {enrichDirectory} from './模块/guide-directory.mjs';\nimport {amaPage}");
 build=build.replace(" if(page.id==='ama')", " page.html=enrichDirectory(page.id,'zh',page.html);\n if(page.id==='ama')");
 build=build.replace(".replaceAll('../figures/','figures/')", ".replaceAll('../figures/','figures/').replaceAll('../brands/','brands/')");
}
write(path.join(club,'build.mjs'),build);
let template=read(path.join(club,'预览/template.html'));
if(!template.includes('initGuideFieldnotes')){
 template=replace(template,'</style>','</style>\n<link rel="stylesheet" href="fieldnotes.css">\n<link rel="stylesheet" href="fieldnotes-green.css">');
 template=replace(template,'<body>','<body data-lang="zh">');
 template=replace(template,'<script>','<script src="fieldnotes.js"></script>\n<script src="ama.js"></script>\n<script>');
 template=replace(template,'  lastPage=p.id;','  window.closeGuidePaper();\n  document.body.dataset.page=p.id;\n  lastPage=p.id;');
 template=replace(template,"  toc.innerHTML='<b>这一页</b>'+[...article.querySelectorAll('h2')].map", "  window.initGuideFieldnotes(article);window.initGuideAMA();\n  toc.innerHTML='<b>这一页</b>'+[...article.querySelectorAll('h2')].filter(h=>!h.closest('dialog')).map");
 template=replace(template,' if(anchor){',' if(anchor.startsWith(\'paper-\')){window.openGuidePaper(anchor);return}\n window.closeGuidePaper();\n if(anchor){');
 template=replace(template," if(p.group==='资料总索引'){"," if(p.group==='资料总索引'||p.group==='研究方向'){");
 template=replace(template,"  for(const h of dom.querySelectorAll('h2,h3')){","  for(const d of dom.querySelectorAll('.paper-dialog')){searchIndex.push({id:p.id,title:d.querySelector('h2').textContent,body:d.textContent,anchor:d.id,label:p.title})}\n  for(const h of [...dom.querySelectorAll('h2,h3')].filter(h=>!h.closest('dialog'))){");
}
if(!template.includes('guide-motion.js')){
 template=template.replace('</head>','<link rel="stylesheet" href="guide-motion.css">\n</head>');
 template=template.replace('<script src="ama.js"></script>','<script src="ama.js"></script>\n<script src="guide-motion.js"></script>');
 template=template.replace('window.initGuideFieldnotes(article);window.initGuideAMA();','window.initGuideFieldnotes(article);window.initGuideAMA();window.initGuideMotion(article);');
}
template=template.replace('<script src="motion-photo.js"></script>','').replace(/guide-motion\.js(?:\?v=[^"']*)?(?=")/g,'guide-motion.js?v=20261006d').replace(/guide-motion\.css(?:\?v=[^"']*)?(?=")/g,'guide-motion.css?v=20261006d');
write(path.join(club,'预览/template.html'),template);
write(path.join(club,'预览/fieldnotes-green.css'),`:root{--blue:var(--accent);--orange:#74845c;--soft:var(--line);--card:var(--white);--paper-2:var(--wash);--serif:var(--display)}
.paper-card{color:var(--ink);border-color:var(--line-dark);border-top-color:var(--sage);border-radius:6px;box-shadow:0 2px 5px #26382c0a}.paper-card:hover{box-shadow:0 4px 12px #26382c12;transform:translateY(-2px)}.paper-card>strong{font:650 19px/1.5 var(--display);letter-spacing:0}.paper-art{border-color:var(--line);border-radius:3px}.concept-figure{border-color:var(--line-dark);box-shadow:none;border-radius:6px}.field-problems{border-radius:6px}.field-checklist{border-color:var(--line-dark);border-radius:6px}.paper-dialog{border-color:var(--line-dark)}.paper-dialog-head button{border:0;border-radius:4px;background:var(--wash);color:var(--ink)}.paper-dialog h2{font-family:var(--display)}.paper-full-figure{padding:8px}.paper-full-figure>a{border:0}.paper-filters input,.paper-filters select{border-radius:4px}.ama-filters button{border:1px solid var(--line-dark);border-radius:4px;color:var(--ink)}
@media(max-width:600px){.paper-card>strong{font-size:19px}.paper-dialog h2{font-size:23px}}
`);
write(path.join(club,'编辑说明/领域内容同步.json'),JSON.stringify({date:new Date().toISOString(),fields:10,papers:Object.keys(figures).length,source:'bofan-homepage/content/guide',preserved:['AI 社首页','社团简介','写给刚进大学的你中的社团内容','绿色前端风格'],includes:['双语源数据（AI 社展示中文）','原论文插图','论文小卡','阅读路线衔接','π0 与 π0.5','AMA 讨论区']},null,2));
console.log('Synced 10 fields and '+Object.keys(figures).length+' illustrated papers into AI club guide.');
