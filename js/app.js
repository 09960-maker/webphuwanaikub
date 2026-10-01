// ตัวสลับแท็บและเรนเดอร์หน้า
const $=s=>document.querySelector(s),view=$('#view');
const Views={home:Home,grade:Grade,match:Match,goals:Goals,plan:Plan};
let tab='home';
function summary(){const g=Store.s.gpax;$('#summary').textContent=(g==null?'ยังไม่ได้กรอกเกรด':`GPAX ${g.toFixed(2)}`)+`, เป้าหมาย ${Store.s.goals.length} คณะ`}
function render(){view.innerHTML=Views[tab].render();summary();
 document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.tab===tab))}
function go(t){tab=t;render();scrollTo(0,0)}
