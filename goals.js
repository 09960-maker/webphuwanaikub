const Goals={render(){const r=PROGRAMS.filter(p=>Store.s.goals.includes(p.id)).map(p=>({p,st:Calc.status(p,Store.s.gpax)}));
 return `<h2>เป้าหมาย (${r.length})</h2>`+(r.length?r.map(x=>Match.card(x)).join(''):'<p class="empty">ยังไม่มีเป้าหมาย ไปแท็บ “จับคู่คณะ” แล้วกด “เพิ่มในเป้าหมาย”</p>')}};
