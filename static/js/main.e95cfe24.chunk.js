(this.webpackJsonpquizzer=this.webpackJsonpquizzer||[]).push([[0],{43:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n.n(c),a=(n(43),n(12)),s=n(3),i=n(2),o=function(){return Object(i.jsx)("div",{className:"fixed top-0 w-full flex justify-between items-center p-5 text-2xl lg:text-3xl text-white bg-gray-900",children:"Quizzer"})},u=n(4),l=n(0),j=n(37),b=function(e){var t=e.children,n=e.onClick,c=void 0===n?function(){}:n;return Object(i.jsx)("button",{onClick:c,className:"bg-gray-600 text-white p-3 rounded-lg text-md",children:t})},d=[{value:"18",label:"Computer Science"},{value:"31",label:"Anime & Manga"},{value:"19",label:"Mathematics"}],x=function(){var e=Object(l.useState)(d[0]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)("10"),s=Object(u.a)(r,2),o=s[0],x=s[1];return Object(i.jsxs)("form",{className:"w-full flex flex-col items-center  gap-7 bg-gray-200 px-10 py-10 rounded-lg",onSubmit:function(e){e.preventDefault()},children:[Object(i.jsxs)("div",{className:"flex gap-8 justify-between w-full",children:[Object(i.jsx)("p",{children:"Category"}),Object(i.jsx)(j.a,{options:d,className:"w-10/12",value:n,onChange:function(e){c(e)}})]}),Object(i.jsxs)("div",{className:"flex gap-8 justify-between w-full",children:[Object(i.jsx)("p",{children:"No of Questions"}),Object(i.jsx)("input",{type:"number",max:50,min:10,value:o,onChange:function(e){x(e.target.value)},className:"border-2 h-full w-10/12 px-2 py-1"})]}),Object(i.jsx)("div",{children:Object(i.jsx)(b,{children:Object(i.jsx)(a.b,{to:"/quiz/".concat(null===n||void 0===n?void 0:n.value,"/").concat(o),children:"Take Quiz"})})})]})},O=n(38),h=function(e){var t=e.quizData,n=Object(l.useState)(0),c=Object(u.a)(n,2),r=c[0],a=c[1],o=Object(l.useState)([]),j=Object(u.a)(o,2),d=j[0],x=j[1],h=Object(l.useState)(!1),p=Object(u.a)(h,2),v=p[0],m=p[1],g=Object(l.useState)(!1),w=Object(u.a)(g,2),y=w[0],S=w[1],N=Object(l.useState)(0),C=Object(u.a)(N,2),z=C[0],k=C[1],q=t.results,_=q[r].correct_answer,A=Object(s.f)();Object(l.useEffect)((function(){var e;x(function(e){var t,n=e.length;for(;0!==n;){t=Math.floor(Math.random()*n),n--;var c=[e[t],e[n]];e[n]=c[0],e[t]=c[1]}return e}([].concat(Object(O.a)(null===(e=q[r])||void 0===e?void 0:e.incorrect_answers),[q[r].correct_answer])))}),[r,q]);var M=function(e){e!==_||y||(m(!0),r!==q.length-1&&E()),S(!0)},E=function(){!y&&k((function(e){return e+1}))};return Object(i.jsxs)("div",{className:"mx-auto w-10/12 flex flex-col mt-32 bg-gray-900 rounded py-6 px-10 text-white",children:[Object(i.jsx)("div",{className:"bg-gray-600 p-3 mb-3 rounded-md text-lg",children:Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:q[r].question}})}),Object(i.jsx)("div",{children:d.map((function(e){return Object(i.jsx)(f,{option:e,onSelectOption:M,isCorrectAnswer:_===e,isAnswered:y,isAnsweredCorrect:v},e)}))}),Object(i.jsx)("div",{className:"text-right",children:r!==q.length-1?Object(i.jsx)("div",{children:Object(i.jsx)(b,{onClick:function(){r!==q.length-1&&a((function(e){return e+1})),S(!1),m(!1)},children:"Next"})}):Object(i.jsx)("div",{children:Object(i.jsx)(b,{onClick:function(){A.push("/results/".concat(z,"/").concat(q.length))},children:"Show Scores"})})})]})};var f=function(e){var t=e.option,n=e.onSelectOption,c=e.isCorrectAnswer,r=e.isAnswered,a=e.isAnsweredCorrect;return Object(i.jsx)("div",{className:"bg-gray-500 rounded my-2 p-3 text-lg transform transition duration-100 ".concat(!a&&c&&r?" bg-red-600 ":c&&r?" bg-green-400 ":void 0,"\n      }"),onClick:function(){n(t)},children:Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:t}})})},p=function(){return Object(i.jsx)("div",{className:"mx-auto w-9/12 py-8",children:Object(i.jsx)(x,{})})},v=n(22),m=n.n(v),g=n(35),w=n(36),y=n.n(w);var S=function(){var e=Object(s.g)(),t=function(e,t){var n=Object(l.useState)(!1),c=Object(u.a)(n,2),r=c[0],a=c[1],s=Object(l.useState)({}),i=Object(u.a)(s,2),o=i[0],j=i[1],b=Object(l.useState)(),d=Object(u.a)(b,2),x=d[0],O=d[1];return Object(l.useEffect)((function(){a(!0);var n=function(){var n=Object(g.a)(m.a.mark((function n(){var c,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get("https://opentdb.com/api.php?amount=".concat(e,"&category=").concat(t,"&type=multiple"));case 3:return c=n.sent,n.next=6,null===c||void 0===c?void 0:c.data;case 6:r=n.sent,j(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),O(n.t0);case 13:return n.prev=13,a(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),[r,o,x]}(e.amount,e.category),n=Object(u.a)(t,3),c=n[0],r=n[1],a=n[2];return c?Object(i.jsx)("p",{children:"Loading"}):a?Object(i.jsx)("p",{children:"Error"}):r.results?Object(i.jsx)("div",{children:Object(i.jsx)(h,{quizData:r})}):Object(i.jsx)(i.Fragment,{})},N=function(){return Object(i.jsx)("div",{})};var C=function(){return Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"mt-20",children:Object(i.jsx)(a.a,{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",children:Object(i.jsx)(p,{})}),Object(i.jsx)(s.a,{path:"/quiz/:category/:amount",children:Object(i.jsx)(S,{})}),Object(i.jsx)(s.a,{path:"/results/:score/:total_qn",children:Object(i.jsx)(N,{})})]})})})]})};r.a.render(Object(i.jsx)(C,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e95cfe24.chunk.js.map