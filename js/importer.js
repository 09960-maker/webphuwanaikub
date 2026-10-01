// นำเข้าข้อมูลเกณฑ์จริง (CSV: มหาวิทยาลัย,คณะ,GPAX) แทนข้อมูลประมาณการ
const Importer={
 render(){return `<details class="card"><summary>นำเข้าข้อมูลเกณฑ์จริง (${PROGRAMS.length} รายการตอนนี้)</summary>
  <p class="note">วาง 1 บรรทัดต่อ 1 คณะ แบบ: มหาวิทยาลัย,คณะ,GPAX เช่น มหาวิทยาลัยA,วิศวกรรมศาสตร์,3.40</p>
  <textarea id="imp" rows="5" aria-label="ข้อมูลนำเข้า"></textarea>
  <div class="row"><button class="b" data-import>นำเข้า</button><button class="b" data-resetdata>ใช้ข้อมูลเดิม</button></div>
  <p class="note" id="impmsg" role="status"></p></details>`},
 parse(text){return text.split('\n').map(l=>l.split(/,|\t/).map(x=>x.trim())).map(([u,f,v])=>({u,f,min:parseFloat(v)})).filter(r=>r.u&&r.f&&r.min>=0&&r.min<=4)},
 apply(rows){const S=Store.s;S.custom=rows;S.goals=[];useData(rows||defaultRows());Match.u=Match.f='';Store.save();render()},
 handle(d){
  if('import' in d){const rows=this.parse(document.getElementById('imp').value);
   if(!rows.length){document.getElementById('impmsg').textContent='ไม่พบข้อมูลที่ใช้ได้ ตรวจรูปแบบ: มหาวิทยาลัย,คณะ,GPAX';return true}
   this.apply(rows);return true}
  if('resetdata' in d){this.apply(null);return true}
  return false}
};
