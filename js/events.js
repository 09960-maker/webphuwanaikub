// ตัวจัดการคลิก/พิมพ์/เปลี่ยนค่า (event delegation)
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;const d=t.dataset,S=Store.s;
 if(d.tab)return go(d.tab);if(d.go)return go(d.go);
 if(d.goal){Store.toggleGoal(d.goal);const y=scrollY;render();scrollTo(0,y);return}
 if('sample' in d){S.gpax=3.4;Store.save();return render()}
 if(Importer.handle(d))return;
 if('addrow' in d){S.rows.push({n:'',c:1,g:4})}
 else if(d.delrow!==undefined){S.rows.splice(+d.delrow,1)}
 else if('use' in d){const g=Calc.gpax(S.rows);if(g!=null)S.gpax=Math.round(g*100)/100}
 else return;
 Store.save();render()});
document.addEventListener('input',e=>{const el=e.target;
 if(el.id==='gpax'){const v=parseFloat(el.value);Store.s.gpax=isNaN(v)?null:Math.min(4,Math.max(0,v));Store.save();summary()}
 else if(el.dataset.r!==undefined){const r=Store.s.rows[+el.dataset.r],f=el.dataset.f;r[f]=f==='n'?el.value:parseFloat(el.value)||0;Store.save();Grade.calc()}});
document.addEventListener('change',e=>{const el=e.target;
 if(el.id==='mu'){Match.u=el.value;render()}else if(el.id==='mf'){Match.f=el.value;render()}else if(el.id==='ms'){Match.s=el.value;render()}
 else if(el.dataset.task!==undefined){Store.s.done[el.dataset.task]=el.checked;Store.save();render()}});
