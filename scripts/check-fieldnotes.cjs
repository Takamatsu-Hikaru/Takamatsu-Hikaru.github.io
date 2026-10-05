const fs=require('fs'),path=require('path'),assert=require('assert/strict'),{pathToFileURL}=require('url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
(async()=>{
const root=path.resolve(__dirname,'..'),base=path.join(root,'public/blog/guide'),shots=path.join(root,'work/fieldnotes-review');fs.mkdirSync(shots,{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});try{
const p=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
const go=(lang,id)=>p.goto(pathToFileURL(path.join(base,lang,id+'.html')).href);
const fields=fs.readdirSync(path.join(root,'content/guide/fieldnotes')).map(f=>JSON.parse(fs.readFileSync(path.join(root,'content/guide/fieldnotes',f))));let checks=0;
for(const width of [1440,390]){await p.setViewportSize({width,height:1000});for(const lang of ['zh','en'])for(const f of fields){
 await go(lang,f.id);assert.equal(await p.locator('.paper-card').count(),f.papers.length);assert.equal(await p.locator('[data-check]').count(),3);assert.equal(await p.locator('.field-roadmap>li').count(),f[lang].roadmap.length);assert(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),f.id+' overflow');
 await p.locator('.paper-card').first().click();assert(await p.locator('.paper-dialog[open]').count()===1);assert(await p.locator('.paper-dialog[open] .paper-links a').first().getAttribute('href'));await p.keyboard.press('Escape');assert.equal(await p.locator('.paper-dialog[open]').count(),0);checks++;
}}
await p.setViewportSize({width:1440,height:1000});await go('zh','agent');await p.screenshot({path:path.join(shots,'agent-overview.png')});await p.locator('#field-roadmap').scrollIntoViewIfNeeded();await p.screenshot({path:path.join(shots,'agent-roadmap.png')});await p.locator('#field-papers').scrollIntoViewIfNeeded();await p.screenshot({path:path.join(shots,'agent-cards.png')});await p.locator('[data-paper="react-2023"]').click();await p.screenshot({path:path.join(shots,'react-card-open.png')});await p.keyboard.press('Escape');
await p.locator('[data-check]').first().check();await p.reload();assert(await p.locator('[data-check]').first().isChecked());await go('en','agent');assert(await p.locator('[data-check]').first().isChecked());
await go('zh','papers');await p.locator('#paper-query').fill('ReAct');assert.equal(await p.locator('.paper-item:not([hidden])').count(),1);await p.locator('#paper-query').fill('');await p.locator('#paper-domain').selectOption('generation');assert.equal(await p.locator('.paper-item:not([hidden])').count(),4);
await go('zh','ama');assert.equal(await p.locator('[data-role],#ama-reset,#ama-compose').count(),0);assert((await p.locator('.ama-toolbar a').getAttribute('href')).includes('/discussions/new?category=general'));
await go('zh','generation');await p.locator('#theme').click();await p.screenshot({path:path.join(shots,'generation-dark.png')});await p.locator('#theme').click();
await p.setViewportSize({width:390,height:844});await go('zh','llm');await p.screenshot({path:path.join(shots,'llm-mobile.png')});await go('en','generation');await p.locator('.paper-card').nth(1).click();await p.screenshot({path:path.join(shots,'diffusion-card-mobile.png')});await p.keyboard.press('Escape');await go('zh','ama');assert(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth));await p.screenshot({path:path.join(shots,'ama-mobile.png')});
assert.deepEqual(errors,[]);const result={pageViewportChecks:checks,fields:fields.length,paperPlacements:fields.reduce((n,f)=>n+f.papers.length,0),errors,features:['paper modal/escape/source links','library filters','bilingual checklist persistence','AMA real discussion links']};fs.writeFileSync(path.join(shots,'checks.json'),JSON.stringify(result,null,2));console.log(result);
}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
