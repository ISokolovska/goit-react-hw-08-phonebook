"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[182],{6018:function(e,n,t){t.d(n,{HR:function(){return f},Ay:function(){return g},wn:function(){return b},Mi:function(){return z},WS:function(){return Z}});var a,r=t(9439),i=t(5562),o=t.n(i),l=t(2791),s=t(9434),u=t(3634),c=t(6351),m=t(5863),d=t(824),x=t(5777),p=t(184),f=function(){var e=(0,l.useState)(""),n=(0,r.Z)(e,2),t=n[0],a=n[1],i=(0,l.useState)(""),f=(0,r.Z)(i,2),h=f[0],v=f[1],g=(0,s.I0)(),j=(0,s.v9)(c.K2),b=function(e){"name"===e.target.name&&a(e.target.value),"number"===e.target.name&&v(e.target.value)},y=function(){a(""),v("")};return(0,p.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={name:t,number:h};if(j.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).length>0)return o().Notify.warning("".concat(n.name," is already in contacts"));g((0,u.uK)(n)),y()},children:(0,p.jsxs)(m.NI,{children:[(0,p.jsx)(m.lX,{color:"light",children:"Name"}),(0,p.jsx)(d.II,{mt:"10px",variant:"outline",placeholder:"Name",bg:"light",size:"md",width:"300px",type:"text",name:"name",onChange:b,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)(m.lX,{display:"flex",flexDirection:"column",color:"light",children:"Number"}),(0,p.jsx)(d.II,{mt:"10px",variant:"outline",placeholder:"Number",bg:"light",size:"md",width:"300px",type:"tel",name:"number",value:h,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,p.jsx)(x.zx,{variant:"formButton",type:"submit",children:"Add"})]})})},h=t(4190),v=t(8699),g=function(){var e=(0,s.v9)(c.K2),n=(0,s.v9)(c.zK),t=(0,s.I0)(),a=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,p.jsx)(h.xu,{display:"flex",flexDirection:"column",justifyContent:"center",children:(0,p.jsx)(h.aV,{display:"flex",flexDirection:"column",alignItems:"center",className:"contacts-list",children:a.map((function(e){return(0,p.jsxs)(h.HC,{display:"flex;",justifyContent:"center",alignItems:"center",mb:"10px",children:[(0,p.jsxs)(h.xv,{fontSize:"20px",color:"light",children:[e.name,": ",e.number]}),(0,p.jsx)(x.zx,{variant:"primary",_active:{background:"hoverBtn"},_hover:{background:"hoverBtn"},type:"submit",onClick:function(){return t((0,u.GK)(e.id))},children:(0,p.jsx)(v.pJ,{boxSize:6})})]},e.id)}))})})},j=t(1538),b=function(){var e=(0,s.v9)(c.zK),n=(0,s.I0)();return(0,p.jsxs)(m.NI,{display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,p.jsx)(m.lX,{children:"Find contacts by name "}),(0,p.jsx)(d.II,{variant:"primary",width:"300px",placeholder:"Find contacts by name",type:"text",id:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,j.W)(t))}})]})},y=(t(8402),t(168));t(7691).ZP.div(a||(a=(0,y.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n"])));var I=t(4942),w=t(1413),C=t(991);var Z=function(e){var n=e.isLoading,t=(0,l.useState)({name:"",email:"",password:""}),a=(0,r.Z)(t,2),i=a[0],o=a[1],u=(0,l.useState)(!1),c=(0,r.Z)(u,2),f=c[0],h=c[1];console.log(h);var v=(0,s.I0)(),g=function(e){var n=e.target,t=n.name,a=n.value;o((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,I.Z)({},t,a))}))},j=function(){o({name:"",email:"",password:""})};return(0,p.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={name:i.name,email:i.email,password:i.password};console.log(n),v((0,C.y1)(n)),j()},autoComplete:"off",children:(0,p.jsxs)(m.NI,{display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,p.jsx)(m.lX,{variant:"formLabelText",fontSize:"18px",mr:"0px",mb:"0px",children:"Name:"}),(0,p.jsx)(d.II,{variant:"formInput",placeholder:"Name",type:"text",name:"name",value:i.name,onChange:g,required:!0}),(0,p.jsx)(m.lX,{variant:"formLabelText",mr:"0px",mb:"0px",children:"Email:"}),(0,p.jsx)(d.II,{variant:"formInput",placeholder:"Email",type:"text",name:"email",value:i.email,onChange:g,required:!0}),(0,p.jsx)(m.lX,{variant:"formLabelText",mr:"0px",mb:"0px",children:"Password:"}),(0,p.jsx)(d.II,{variant:"formInput",type:f?"text":"password",min:7,placeholder:"********",name:"password",value:i.password,onChange:g,required:!0}),(0,p.jsx)(x.zx,{variant:"formButton",type:"submit",disabled:n,children:"Sign Up"})]})})};var z=function(e){var n=e.isLoading,t=(0,l.useState)({email:"",password:""}),a=(0,r.Z)(t,2),i=a[0],o=a[1],u=(0,l.useState)(!1),c=(0,r.Z)(u,2),f=c[0],h=c[1];console.log(h);var v=(0,s.I0)(),g=function(e){var n=e.target,t=n.name,a=n.value;o((function(e){return(0,w.Z)((0,w.Z)({},e),{},(0,I.Z)({},t,a))}))},j=function(){o({email:"",password:""})};return(0,p.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={email:i.email,password:i.password};console.log(n),v((0,C.zB)(n)),j()},autoComplete:"off",children:(0,p.jsxs)(m.NI,{display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,p.jsx)(m.lX,{variant:"formLabelText",mr:"0px",mb:"0px",children:"Email:"}),(0,p.jsx)(d.II,{variant:"formInput",placeholder:"Email",type:"text",name:"email",value:i.email,onChange:g,required:!0}),(0,p.jsx)(m.lX,{variant:"formLabelText",mr:"0px",mb:"0px",children:"Password:"}),(0,p.jsx)(d.II,{variant:"formInput",type:f?"text":"password",min:7,placeholder:"********",name:"password",value:i.password,onChange:g,required:!0}),(0,p.jsx)(x.zx,{variant:"formButton",type:"submit",disabled:n,children:"Sign In"})]})})}},9182:function(e,n,t){t.r(n);var a=t(2791),r=t(9434),i=t(7689),o=t(6018),l=t(4190),s=t(184);n.default=function(){var e=(0,r.v9)((function(e){return e.userData})),n=e.isLoading,t=e.error,u=e.user,c=(0,i.s0)();return(0,a.useEffect)((function(){null!==u&&void 0!==u&&u.email&&c("/contacts")}),[u,c]),(0,s.jsxs)(l.xu,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(l.X6,{variant:"formTitleText",mb:"40px",children:"Please, log in !"}),t.length>0&&(0,s.jsxs)("p",{children:["Some error occured... With message ",t]}),(0,s.jsx)(o.Mi,{isLoading:n})]})}}}]);
//# sourceMappingURL=182.618a1445.chunk.js.map