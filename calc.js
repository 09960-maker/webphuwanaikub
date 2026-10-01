const Calc={
 esc:s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
 gpax(rows){let c=0,p=0;rows.forEach(r=>{if(r.c>0){c+=r.c;p+=r.c*r.g}});return c?p/c:null},
 status(p,g){
  if(g==null)return{t:'กรอกเกรดก่อน',c:'na',d:null};
  const d=g-p.min;
  return d>=0.2?{t:'ปลอดภัย',c:'ok',d}:d>=-0.15?{t:'ลุ้นได้',c:'mid',d}:{t:'ท้าทาย',c:'hard',d}}
};
