const Match={
 u:'',f:'',s:'',
 list(){return PROGRAMS.filter(p=>(!this.u||p.u===this.u)&&(!this.f||p.f===this.f))
  .map(p=>({p,st:Calc.status(p,Store.s.gpax)})).filter(x=>!this.s||x.st.c===this.s)
  .sort((a,b)=>(b.st.d??0)-(a.st.d??0))},
 card({p,st}){const on=Store.s.goals.includes(p.id);
  return `<article class="card"><div><b>${p.f}</b><small>${p.u}</small>
  <small>${p.est?'เกณฑ์ประมาณการ':'เกณฑ์จากไฟล์ของคุณ'} GPAX ${p.min.toFixed(2)}${st.d==null?'':`, ต่างจากคุณ ${st.d>=0?'+':''}${st.d.toFixed(2)}`}</small></div>
  <span class="tag ${st.c}">${st.t}</span>
  <button data-goal="${p.id}" class="${on?'on':''}" aria-pressed="${on}">${on?'ติดตามอยู่ ✓':'เพิ่มในเป้าหมาย'}</button></article>`},
 render(){
  const facs=[...new Set(PROGRAMS.filter(p=>!this.u||p.u===this.u).map(p=>p.f))];
  if(this.f&&!facs.includes(this.f))this.f='';
  const opt=(list,v,all)=>`<option value="">${all}</option>`+list.map(x=>`<option${x===v?' selected':''}>${x}</option>`).join('');
  const r=this.list();
  return `<h2>จับคู่คณะกับเกรด</h2>
  <p class="note">${Store.s.gpax==null?'ยังไม่มี GPAX ไปกรอกที่แท็บ “เกรด” ก่อน':`GPAX ของคุณ ${Store.s.gpax.toFixed(2)}`}. ข้อมูลในแอปเป็นประมาณการ ตรวจเกณฑ์จริงที่ mytcas.com</p>
  <label>มหาวิทยาลัย<select id="mu">${opt([...new Set(PROGRAMS.map(p=>p.u))],this.u,'ทุกมหาวิทยาลัย')}</select></label>
  <label>คณะ<select id="mf">${opt(facs,this.f,'ทุกคณะ')}</select></label>
  <label>ผลการเทียบ<select id="ms"><option value="">ทั้งหมด</option>${[['ok','ปลอดภัย'],['mid','ลุ้นได้'],['hard','ท้าทาย']].map(([k,t])=>`<option value="${k}"${this.s===k?' selected':''}>${t}</option>`).join('')}</select></label>
  ${r.length?r.map(x=>this.card(x)).join(''):'<p class="empty">ไม่พบข้อมูลตามตัวกรองนี้ ลองเปลี่ยนมหาวิทยาลัยหรือคณะ</p>'}
  ${Importer.render()}`}
};
