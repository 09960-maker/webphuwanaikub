const Store={
 key:'tcas70app',
 s:{gpax:null,rows:[{n:'',c:1,g:4},{n:'',c:1,g:3.5},{n:'',c:1,g:3}],goals:[],done:{},custom:null},
 load(){try{const r=JSON.parse(localStorage.getItem(this.key));if(r)this.s=Object.assign(this.s,r)}catch(e){}},
 save(){try{localStorage.setItem(this.key,JSON.stringify(this.s))}catch(e){}},
 toggleGoal(id){const g=this.s.goals,i=g.indexOf(id);i<0?g.push(id):g.splice(i,1);this.save()}
};
