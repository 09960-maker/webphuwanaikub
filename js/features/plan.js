const Plan={render(){return `<h2>TCAS มี 4 รอบ</h2>`+ROUNDS.map(([t,d])=>`<div class="card"><b>${t}</b><small>${d}</small></div>`).join('')+
 `<h2>สิ่งที่ต้องทำ</h2>`+TASKS.map((t,i)=>`<label class="card"><span><input type="checkbox" style="width:auto" data-task="${i}"${Store.s.done[i]?' checked':''}> <span class="${Store.s.done[i]?'done':''}">${t}</span></span></label>`).join('')}};
