import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const owner='Takamatsu-Hikaru',name='Takamatsu-Hikaru.github.io';
const category='DIC_kwDOTtWPnM4DHDst';
async function graphql(query,variables={}) {
 const payload={query,variables};
 let result;
 if(process.env.GITHUB_TOKEN){
  const r=await fetch('https://api.github.com/graphql',{method:'POST',headers:{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(30000)});
  if(!r.ok)throw Error('GitHub API: '+r.status);
  result=await r.json();
 }else result=JSON.parse(execFileSync('gh',['api','graphql','--input','-'],{input:JSON.stringify(payload),encoding:'utf8'}));
 if(result.errors)throw Error(JSON.stringify(result.errors));
 return result.data;
}
const commentFields='id bodyText createdAt author { login } isMinimized';
const clean=r=>({body:r.bodyText,createdAt:r.createdAt,author:r.author});
const posts=[];
let cursor=null,more=true;
while(more){
 const data=await graphql(`query($owner:String!,$name:String!,$category:ID!,$cursor:String){repository(owner:$owner,name:$name){discussions(first:50,after:$cursor,categoryId:$category,orderBy:{field:UPDATED_AT,direction:DESC}){pageInfo{hasNextPage endCursor} nodes{number title bodyText createdAt updatedAt author{login} locked comments{totalCount}}}}}`,{owner,name,category,cursor});
 const connection=data.repository.discussions;
 for(const d of connection.nodes){
  const comments=[];let cc=null,cm=true;
  while(cm){
   const data=await graphql(`query($owner:String!,$name:String!,$number:Int!,$cursor:String){repository(owner:$owner,name:$name){discussion(number:$number){comments(first:100,after:$cursor){pageInfo{hasNextPage endCursor} nodes{${commentFields} replies(first:100){pageInfo{hasNextPage endCursor} nodes{${commentFields}}}}}}}}`,{owner,name,number:d.number,cursor:cc});
   const c=data.repository.discussion?.comments;if(!c)break;
   for(const row of c.nodes){
    if(row.isMinimized)continue;
    const replies=row.replies.nodes.filter(r=>!r.isMinimized).map(clean);
    let rp=row.replies.pageInfo;
    while(rp.hasNextPage){
     const data=await graphql(`query($id:ID!,$cursor:String){node(id:$id){... on DiscussionComment{replies(first:100,after:$cursor){pageInfo{hasNextPage endCursor} nodes{${commentFields}}}}}}`,{id:row.id,cursor:rp.endCursor});
     replies.push(...data.node.replies.nodes.filter(r=>!r.isMinimized).map(clean));rp=data.node.replies.pageInfo;
    }
    comments.push({...clean(row),replies});
   }
   cc=c.pageInfo.endCursor;cm=c.pageInfo.hasNextPage;
  }
  posts.push({number:d.number,title:d.title,body:d.bodyText,createdAt:d.createdAt,updatedAt:d.updatedAt,author:d.author,locked:d.locked,commentCount:d.comments.totalCount,comments});
 }
 cursor=connection.pageInfo.endCursor;more=connection.pageInfo.hasNextPage;
}
const output=path.resolve(process.argv[2]||'work/ama-data/ama.json');
fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,JSON.stringify({posts},null,2)+'\n');
console.log(`Exported ${posts.length} posts to ${output}`);
