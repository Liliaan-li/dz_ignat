(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={buttons:"Affairs_buttons__2GxJC",row:"Affairs_row__2kc6n",name:"Affairs_name__1kQJZ",property:"Affairs_property__1m9a6"}},function(e,a,t){e.exports={message:"Message_message__3NQ5G",ava_block:"Message_ava_block__2-huS",ava:"Message_ava__1IwF2",main:"Message_main__2WiAq",name:"Message_name__2RPHd",text:"Message_text__3JpyD",time:"Message_time__O3Wbh",svg_appendix:"Message_svg_appendix__mQAwc","svg-appendix":"Message_svg-appendix__1s6ft",corner:"Message_corner__24Ixp"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3eeZz",errorInput:"SuperInputText_errorInput__2iZN3",error:"SuperInputText_error__21yBh"}},,,function(e,a,t){e.exports={default:"SuperButton_default__2Nwuu",red:"SuperButton_red__3c92Z"}},function(e,a,t){e.exports={blue:"HW4_blue__Hzufj",column:"HW4_column__3GvlR",testSpanError:"HW4_testSpanError__3UMJQ"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3h8ku",spanClassName:"SuperCheckbox_spanClassName__2DTCK"}},,,function(e,a,t){e.exports={App:"App_App__3Ojdk"}},,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=(t(20),t(13)),o=t.n(s),i=t(3),m=t.n(i);var u=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.ava_block},r.a.createElement("img",{src:e.avatar,className:m.a.ava,alt:"#"})),r.a.createElement("div",{className:m.a.main},r.a.createElement("p",{className:m.a.name},e.name),r.a.createElement("p",{className:m.a.text},e.message),r.a.createElement("p",{className:m.a.time},e.time),r.a.createElement("div",{className:m.a.svg_appendix},r.a.createElement("svg",{width:"9",height:"19.5"},r.a.createElement("path",{d:"M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z",fill:"white",className:m.a.corner}))))))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Lilka",_="Hello everyone:)",E="13:45";var f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:d,name:p,message:_,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(1),v=t(2),g=t.n(v),b=t(4),k=t(8),N=t.n(k),C=function(e){var a=e.red,t=e.className,n=Object(b.a)(e,["red","className"]),l="".concat(a?N.a.red:N.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var x=function(e){return r.a.createElement("div",{className:g.a.row},r.a.createElement("div",{className:g.a.name},e.affair.name),r.a.createElement("div",{className:g.a.property},e.affair.priority),r.a.createElement(C,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("div",{className:g.a.buttons},r.a.createElement(C,{className:g.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(C,{className:g.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(C,{className:g.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(C,{className:g.a.button,onClick:function(){e.setFilter("low")}},"Low")))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(y),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(h.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(14),S=t(5),A=t.n(S),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(A.a.error," ").concat(o||""),u="".concat(c?A.a.errorInput:A.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},I=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=l?A.a.error:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!";return r.a.createElement("div",null,r.a.createElement(M,{value:a,onChange:t,error:l,className:s,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement(C,{onClick:n},"add"),r.a.createElement("span",null,c))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(h.a)(i,2),u=m[0],d=m[1],p=a.length;return r.a.createElement(I,{name:s,setNameCallback:function(e){o(e.currentTarget.value),d("")},addUser:function(){s?(t(s),alert("Hello ".concat(s," !")),d(""),o("")):d("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!")},error:u,totalUsers:p})},H=t(23);var W=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(T,{users:t,addUserCallback:function(e){var a={_id:Object(H.a)(),name:e};l([a].concat(Object(j.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=t(9),J=t.n(F),U=t(10),B=t.n(U),P=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(B.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:B.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(h.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(M,{className:J.a.blue}),r.a.createElement(C,null,"default"),r.a.createElement(C,{red:!0,onClick:s},"delete "),r.a.createElement(C,{disabled:!0},"disabled"),r.a.createElement(P,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(P,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,"// add NavLinks")};var G=function(){return r.a.createElement("div",null,"// add routes")};var Q=function(){return r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(G,null))};var z=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(W,null),r.a.createElement(K,null),r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.9680e431.chunk.js.map