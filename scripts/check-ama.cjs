const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs');
const {pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE_PATH||'playwright');
const root=path.resolve(__dirname,'..');
const feed='https://raw.githubusercontent.com/Takamatsu-Hikaru/Takamatsu-Hikaru.github.io/ama-data/ama.json*';
const fixture={posts:[{number:17,title:'<img src=x onerror=alert(1)> Research question',body:'A question\nhttps://example.org/paper',author:{login:'reader'},createdAt:'2026-10-05T00:00:00Z',updatedAt:'2026-10-05T00:00:00Z',locked:false,commentCount:1,comments:[{body:'Reply <script>alert(1)</script>',author:{login:'writer'},createdAt:'2026-10-05T01:00:00Z',replies:[{body:'Follow-up',author:{login:'reader'}}]}]}]};
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const p=await browser.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
  let payload={posts:[]},failed=false;
  await p.route(feed,r=>r.fulfill({status:failed?503:200,contentType:'application/json',body:JSON.stringify(payload)}));
  for(const width of [1440,390])for(const lang of ['zh','en']){
   await p.setViewportSize({width,height:900});
   await p.goto(pathToFileURL(path.join(root,'public/blog/guide',lang,'ama.html')).href);
   await p.waitForFunction(()=>document.querySelector('#ama-count').textContent.startsWith('0 '));
   assert.equal(await p.locator('[data-role],#ama-reset,#ama-compose,.ama-demo').count(),0);
   assert.equal(await p.locator('.ama-thread').count(),0);
   assert.match(await p.locator('.ama-toolbar a').getAttribute('href'),/discussions\/new\?category=general$/);
   payload=fixture;await p.locator('#ama-refresh').click();await p.locator('.ama-thread').waitFor();
   await p.locator('.ama-thread summary').click();
   assert.equal(await p.locator('#ama-app img,#ama-app script').count(),0);
   assert.match(await p.locator('.ama-thread').textContent(),/<script>alert\(1\)<\/script>/);
   assert.equal(await p.locator('.ama-nested-reply').count(),1);
   assert.match(await p.locator('.ama-thread-actions .ama-primary').getAttribute('href'),/discussions\/17#new_comment_field$/);
   assert.equal(await p.locator('.ama-thread-body>p a').getAttribute('href'),'https://example.org/paper');
   await p.locator('#ama-query').fill('unmatched');assert.equal(await p.locator('.ama-thread').count(),0);
   await p.locator('#ama-query').fill('reader');assert.equal(await p.locator('.ama-thread').count(),1);
   assert(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),'horizontal overflow');
   payload={posts:[]};await p.locator('#ama-refresh').click();await p.locator('.ama-empty').waitFor();
   await p.locator('#ama-query').fill('');
  }
  failed=true;await p.locator('#ama-refresh').click();await p.waitForFunction(()=>document.querySelector('#ama-notice').textContent.length>0);
  failed=false;await p.locator('#ama-refresh').click();await p.waitForFunction(()=>!document.querySelector('#ama-notice').textContent);
  const club='C:/Users/user/Desktop/myproject/ai社知识库/07-呈现稿/预览/index.html';
  await p.goto(pathToFileURL(club).href+'#/ama');await p.waitForFunction(()=>document.querySelector('#ama-count')?.textContent.startsWith('0 '));
  payload=fixture;await p.locator('#ama-refresh').click();await p.locator('.ama-thread').waitFor();
  await p.evaluate(()=>location.hash='#/home');await p.waitForFunction(()=>!document.querySelector('#ama-app'));
  payload={posts:[]};await p.evaluate(()=>location.hash='#/ama');await p.waitForFunction(()=>document.querySelector('#ama-count')?.textContent.startsWith('0 '));
  assert.equal(await p.locator('.ama-thread').count(),0);assert(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth));
  // Real public feed, with all local test fixtures removed.
  await p.unroute(feed);await p.goto(pathToFileURL(path.join(root,'public/blog/guide/zh/ama.html')).href);
  await p.waitForFunction(()=>document.querySelector('#ama-count').textContent.startsWith('0 '));
  assert.equal(await p.locator('.ama-thread').count(),0);
  await p.setViewportSize({width:1440,height:1000});
  fs.mkdirSync(path.join(root,'work/ama-review'),{recursive:true});
  await p.screenshot({path:path.join(root,'work/ama-review/empty-desktop.png'),fullPage:true});
  assert.deepEqual(errors,[]);console.log('AMA passed: bilingual/mobile, shared feed, search, replies, escaping, retry, club navigation, empty production board.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
