const Home={render(){const g=Store.s.gpax,safe=PROGRAMS.map(p=>({p,st:Calc.status(p,g)})).filter(x=>x.st.c==='ok').sort((a,b)=>b.p.min-a.p.min).slice(0,3);
 return `<h2>ภาพรวม</h2>
 <div class="card"><small>GPAX ของคุณ</small><div class="big">${g==null?'-':g.toFixed(2)}</div>
 <button data-go="grade">${g==null?'กรอกเกรด':'แก้ไขเกรด'}</button>${g==null?'<button data-sample>ลองด้วยเกรดตัวอย่าง 3.40</button>':''}</div>
 <h2>คณะที่เกรดคุณน่าจะถึงอย่างปลอดภัย</h2>
 ${safe.length?safe.map(x=>Match.card(x)).join(''):'<p class="empty">กรอกเกรดแล้วจะแสดงคณะที่เหมาะที่นี่</p>'}
 <button class="b" data-go="match">ดูทุกคณะ</button>`}};
