(this.webpackJsonpawesomefun=this.webpackJsonpawesomefun||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(11),r=n.n(a),i=n(28),o=n(20),s=n.p+"static/media/logot.0c2f1181.png",j=n(2),l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:s,alt:"logo",width:"80"}),Object(j.jsx)("h1",{children:"For Keeps"})]})})},u=function(){var e=(new Date).getFullYear();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:["Copyright \xa9 ",e]})})})})},b=n(23),O=n(27),d=n(68),f=n(37),x=n.n(f),h=function(e){var t=Object(c.useState)({title:"",para:""}),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),l=s[0],u=s[1],f=function(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(b.a)({},n,c))}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main_note",onClick:function(){u(!0)},onDoubleClick:function(){u(!1)},children:Object(j.jsxs)("form",{action:"",children:[l?Object(j.jsx)("input",{name:"title",type:"text",placeholder:"Title",onChange:f,value:a.title,autoComplete:"off"}):null,Object(j.jsx)("textarea",{name:"para",id:"",cols:"",rows:"",placeholder:"Write a note...",onChange:f,value:a.para}),l?Object(j.jsx)(d.a,{children:Object(j.jsx)(x.a,{onClick:function(){e.passNote(a),r({title:"",para:""})}})}):null]})})})},m=n(38),p=n.n(m),g=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)("button",{className:"btn",onClick:function(){e.deleteNote(e.id)},children:Object(j.jsx)(p.a,{className:"deleteIcon"})})]})})},v=(n(51),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=function(e){a((function(t){var n=t.filter((function(t,n){return n!==e}));return localStorage.setItem("note",JSON.stringify(n)),n}))};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("note"));a(e)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(h,{passNote:function(e){a((function(t){return localStorage.setItem("note",JSON.stringify([].concat(Object(i.a)(t),[e]))),[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(j.jsx)(g,{id:t,title:e.title,content:e.para,deleteNote:r},t)})),Object(j.jsx)(u,{})]})});r.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.72496a63.chunk.js.map