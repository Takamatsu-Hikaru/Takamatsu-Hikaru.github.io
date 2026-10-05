const fs=require('fs'),path=require('path'),assert=require('assert/strict'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
const root=path.resolve(__dirname,'..'),guide=path.join(root,'public/blog/guide'),out=path.join(root,'work/guide-review');
const b=await chromium.launch({channel:'msedge',headless:true});
try{
const p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
let count=0;for(const width of [1440,390]){await p.setViewportSize({width,height:1000});for(const lang of ['zh','en'])for(const name of fs.readdirSync(path.join(guide,lang)).filter(n=>n.endsWith('.html'))){
 await p.goto(pathToFileURL(path.join(guide,lang,name)).href);await p.waitForSelector('article h1');
 const state=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('article h1').length,nav:!!document.querySelector('#nav [aria-current=page]'),bad:document.body.textContent.includes('undefined')}));assert(!state.overflow,`${lang}/${name} overflow at ${width}`);assert.equal(state.h1,1);assert(state.nav);assert(!state.bad);count++;
}}
await p.setViewportSize({width:1440,height:1000});
const url=(lang,name='index.html')=>pathToFileURL(path.join(guide,lang,name)).href;
await p.goto(url('zh'));await p.screenshot({path:path.join(out,'guide-home-zh.png'),fullPage:true});
await p.goto(url('en'));await p.screenshot({path:path.join(out,'guide-home-en.png'),fullPage:true});
await p.goto(url('zh','research.html')+'#q25');await p.waitForSelector('#q25[open]');assert.equal(await p.locator('.qa').count(),60);await p.locator('#language').click();await p.waitForURL('**/en/research.html#q25');await p.waitForSelector('#q25[open]');
await p.locator('#expand').click();assert.equal(await p.locator('.qa[open]').count(),60);await p.locator('#expand').click();assert.equal(await p.locator('.qa[open]').count(),0);
await p.locator('#opensearch').click();await p.locator('#searchinput').fill('Scaling Ladder');await p.locator('.result').first().click();assert(p.url().includes('blogs.html#'));assert((await p.locator('article').textContent()).includes('Scaling Ladder'));
await p.goto(url('en','research.html')+'#q29');await p.locator('#theme').click();assert.equal(await p.locator('html').getAttribute('data-theme'),'dark');await p.screenshot({path:path.join(out,'guide-research-dark.png')});
await p.locator('#language').click();assert.equal(await p.locator('html').getAttribute('data-theme'),'dark');await p.locator('#theme').click();
await p.setViewportSize({width:390,height:844});await p.goto(url('zh'));await p.screenshot({path:path.join(out,'guide-mobile-zh.png'),fullPage:true});
await p.locator('#menu').click();await p.waitForFunction(()=>document.querySelector('#nav').getBoundingClientRect().left>=0);await p.locator('#nav a[href="start.html"]').click();await p.waitForURL('**/start.html');assert.equal(await p.locator('#menu').getAttribute('aria-expanded'),'false');await p.screenshot({path:path.join(out,'guide-mobile-start.png'),fullPage:true});
await p.locator('#mobile-search').click();await p.locator('#searchinput').fill('MNIST');assert(await p.locator('.result').count()>0);await p.locator('#closesearch').click();
await p.locator('#language').click();await p.screenshot({path:path.join(out,'guide-mobile-en.png')});
assert.deepEqual(errors,[]);console.log(`PASS ${count} page/viewport checks, bilingual deep links, 60 questions, search, mobile navigation, and persistent themes.`);
fs.writeFileSync(path.join(out,'browser-check.json'),JSON.stringify({checks:count,errors,features:['language deep links','question folding','search','mobile navigation','theme persistence']},null,2));
}finally{await b.close()}
})().catch(e=>{console.error(e);process.exit(1)});
