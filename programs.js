// สร้างรายการหลักสูตรจากข้อมูลคณะ/มหาวิทยาลัย หรือจากไฟล์นำเข้า
let PROGRAMS=[];
function defaultRows(){const o=[];U.forEach(([u,t,ks])=>ks.split(' ').forEach(k=>{
 const m=Math.round(Math.min(3.95,Math.max(2,BASE[t]+(ADJ[k]||0)))*20)/20;
 o.push({id:'d'+o.length,u,f:FAC[k],min:m,est:true})}));return o}
function useData(rows){PROGRAMS=rows.map((r,i)=>({id:r.id||'c'+i,u:r.u,f:r.f,min:r.min,est:!!r.est}))}
useData(defaultRows());
