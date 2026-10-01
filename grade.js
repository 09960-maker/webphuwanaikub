const Grade={
 render(){const s=Store.s,g=Calc.gpax(s.rows);
  return `<h2>เกรดของคุณ</h2>
  <label>กรอก GPAX โดยตรง (0-4)<input id="gpax" type="number" inputmode="decimal" step="0.01" min="0" max="4" value="${s.gpax??''}"></label>
  <h2>หรือคำนวณจากรายวิชา</h2>
  ${s.rows.map((r,i)=>`<div class="row"><input data-r="${i}" data-f="n" placeholder="วิชา" value="${Calc.esc(r.n)}" aria-label="ชื่อวิชา">
  <input data-r="${i}" data-f="c" type="number" min="0" step="0.5" value="${r.c}" aria-label="หน่วยกิต" style="max-width:76px">
  <select data-r="${i}" data-f="g" aria-label="เกรด" style="max-width:84px">${GRADES.map(x=>`<option${x===r.g?' selected':''}>${x}</option>`).join('')}</select>
  <button class="b s" data-delrow="${i}" aria-label="ลบวิชา">✕</button></div>`).join('<div style="height:8px"></div>')}
  <div class="row" style="margin-top:12px"><button class="b" data-addrow>+ เพิ่มวิชา</button><button class="b" data-use>ใช้เกรดที่คำนวณได้</button></div>
  <div class="card"><small>GPAX จากรายวิชา</small><div class="big" id="gp">${g==null?'-':g.toFixed(2)}</div></div>`},
 calc(){const g=Calc.gpax(Store.s.rows);document.getElementById('gp').textContent=g==null?'-':g.toFixed(2)}
};
