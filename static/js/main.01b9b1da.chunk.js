(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={buttons:"Affairs_buttons__2GxJC",row:"Affairs_row__2kc6n",name:"Affairs_name__1kQJZ",property:"Affairs_property__1m9a6"}},function(e,a,t){e.exports={message:"Message_message__3NQ5G",ava_block:"Message_ava_block__2-huS",ava:"Message_ava__1IwF2",main:"Message_main__2WiAq",name:"Message_name__2RPHd",text:"Message_text__3JpyD",time:"Message_time__O3Wbh",svg_appendix:"Message_svg_appendix__mQAwc","svg-appendix":"Message_svg-appendix__1s6ft",corner:"Message_corner__24Ixp"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3eeZz",errorInput:"SuperInputText_errorInput__2iZN3",error:"SuperInputText_error__21yBh"}},,,function(e,a,t){e.exports={container:"H8_container__1lLiN",flex:"H8_flex__NUWD_"}},,,function(e,a,t){e.exports={default:"SuperButton_default__2Nwuu",red:"SuperButton_red__3c92Z"}},function(e,a,t){e.exports={blue:"HW4_blue__Hzufj",column:"HW4_column__3GvlR",testSpanError:"HW4_testSpanError__3UMJQ"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3h8ku",spanClassName:"SuperCheckbox_spanClassName__2DTCK"}},,function(e,a,t){e.exports={square:"Head_square__3o8e3",main:"Head_main__2nB58"}},,,,function(e,a,t){e.exports={App:"App_App__3Ojdk"}},function(e,a,t){e.exports=t.p+"static/media/1200x1200.50b18f80.gif"},,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=(t(33),t(24)),u=t.n(o),i=t(8);var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},s=t(6),E=t.n(s);var d=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.ava_block},r.a.createElement("img",{src:e.avatar,className:E.a.ava,alt:"#"})),r.a.createElement("div",{className:E.a.main},r.a.createElement("p",{className:E.a.name},e.name),r.a.createElement("p",{className:E.a.text},e.message),r.a.createElement("p",{className:E.a.time},e.time),r.a.createElement("div",{className:E.a.svg_appendix},r.a.createElement("svg",{width:"9",height:"19.5"},r.a.createElement("path",{d:"M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z",fill:"white",className:E.a.corner}))))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Lilka",f="Hello everyone:)",h="13:45";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(d,{avatar:p,name:v,message:f,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},_=t(2),b=t(5),k=t.n(b),C=t(4),O=t(16),N=t.n(O),j=["red","className"],y=function(e){var a=e.red,t=e.className,n=Object(C.a)(e,j),l="".concat(a?N.a.red:N.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var w=function(e){return r.a.createElement("div",{className:k.a.row},r.a.createElement("div",{className:k.a.name},e.affair.name),r.a.createElement("div",{className:k.a.property},e.affair.priority),r.a.createElement(y,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var x=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("div",{className:k.a.buttons},r.a.createElement(y,{className:k.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(y,{className:k.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(y,{className:k.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(y,{className:k.a.button,onClick:function(){e.setFilter("low")}},"Low")))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(S),a=Object(_.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(_.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(7),M=t(10),T=t.n(M),F=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(C.a)(e,F),m="".concat(T.a.error," ").concat(u||""),s="".concat(c?T.a.errorInput:T.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:s},i)),c&&r.a.createElement("span",{className:m},c))},J=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?T.a.error:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!";return r.a.createElement("div",null,r.a.createElement(H,{value:a,onChange:t,error:l,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement(y,{onClick:n,disabled:""===a},"add"),r.a.createElement("span",null,c))},P=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(_.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(_.a)(i,2),s=m[0],E=m[1],d=a.length;return r.a.createElement(J,{name:o,setNameCallback:function(e){e.currentTarget.value.trim()?(u(e.currentTarget.value.trim()),E("")):(u(""),E("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"))},addUser:function(){o&&(t(o),alert("Hello ".concat(o," !")))},error:s,totalUsers:d})},L=t(41);var B=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:t,addUserCallback:function(e){var a={_id:Object(L.a)(),name:e};l([a].concat(Object(I.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},D=t(17),W=t.n(D),U=t(18),G=t.n(U),q=["type","onChange","onChangeChecked","className","spanClassName","children"],K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(C.a)(e,q),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(_.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:W.a.blue}),r.a.createElement(y,null,"default"),r.a.createElement(y,{red:!0,onClick:o},"delete "),r.a.createElement(y,{disabled:!0},"disabled"),r.a.createElement(K,{checked:m,onChangeChecked:s},"some text "),r.a.createElement(K,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=["autoFocus","onBlur","onEnter","spanProps"],Q=["children","onDoubleClick","className"],R=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(C.a)(e,z),o=Object(n.useState)(!1),u=Object(_.a)(o,2),i=u[0],m=u[1],s=l||{},E=s.children,d=s.onDoubleClick,p=s.className,v=Object(C.a)(s,Q),f="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:f},v),E||c.value),r.a.createElement("img",{alt:"image",src:"https://img.icons8.com/dusk/20/000000/hand-with-pen.png"})))};function X(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Y(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}X("test",{x:"A",y:1});Y("test",{x:"",y:0});var V=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(R,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(y,{onClick:function(){X("editable-span-value",t)}},"save"),r.a.createElement(y,{onClick:function(){var e=Y("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var $=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(A,null),r.a.createElement(B,null),r.a.createElement(Z,null),r.a.createElement(V,null))},ee=t(25),ae=t.n(ee),te=t(12),ne=t(22),re={isLoading:!1},le=function(e){return{type:"IS-LOADING",isLoading:e}};var ce=function(){var e=Object(te.c)((function(e){return e.loading.isLoading})),a=Object(te.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,r.a.createElement("img",{style:{height:110},src:ae.a,alt:"snail"})):r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){a(le(!0)),window.setTimeout((function(){a(le(!1))}),1500),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},oe=["options","onChange","onChangeOption"],ue=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(C.a)(e,oe),c=a?a.map((function(e,a){return r.a.createElement("option",{key:e+"-"+a,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ie=["type","name","options","value","onChange","onChangeOption"],me=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(C.a)(e,ie),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,checked:e==n,value:e,onChange:u},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},se=["x","y","z"];var Ee=function(){var e=Object(n.useState)(se[1]),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ue,{options:se,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(me,{name:"radio",options:se,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=function(e,a){switch(a.type){case"sort":return"up"===a.payload?Object(I.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):Object(I.a)(e).sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0}));case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},pe=t(13),ve=t.n(pe),fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(fe),a=Object(_.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:ve.a.flex},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",{className:ve.a.container},c),r.a.createElement("div",{className:ve.a.container+" "+ve.a.flex},r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(de(fe,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(de(fe,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(de(fe,{type:"check",payload:18}))}},"check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ge=function(){var e=Object(n.useState)(0),a=Object(_.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(_.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),s=Object(_.a)(m,2),E=s[0],d=s[1],p=function(){clearInterval(t)},v=u?u.getHours()+":"+u.getMinutes()+":"+u.getSeconds():r.a.createElement("br",null),f=u?u.getDate()+"."+(u.getMonth()+1)+"."+u.getFullYear():r.a.createElement("br",null);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},v),E?r.a.createElement("div",null,f):r.a.createElement("br",null),r.a.createElement(y,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(y,{onClick:p},"stop"))};var _e=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ge,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var be=function(){return r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement(he,null),r.a.createElement(_e,null),r.a.createElement(ce,null),r.a.createElement("p",null,"Junior"))};var ke=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"JuniorPlus"))},Ce=t(1),Oe="/pre-junior",Ne="/junior",je="/junior+";var ye=function(){return r.a.createElement("div",null,r.a.createElement(Ce.d,null,r.a.createElement(Ce.b,{path:"/",element:r.a.createElement(Ce.a,{to:Oe})}),r.a.createElement(Ce.b,{path:Oe,element:r.a.createElement($,null)}),r.a.createElement(Ce.b,{path:Ne,element:r.a.createElement(be,null)}),r.a.createElement(Ce.b,{path:je,element:r.a.createElement(ke,null)}),"// add routes",r.a.createElement(Ce.b,{path:"/*",element:r.a.createElement(m,null)})))},we=t(20),xe=t.n(we);var Se=function(){return r.a.createElement("div",{className:xe.a.main},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:Oe},"PreJunior ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:Ne},"Junior ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:je},"JuniorPlus ")),r.a.createElement("li",{className:xe.a.square})))};var Ae=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(Se,null),r.a.createElement(ye,null)))};var Ie=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=t(21),Te=Object(Me.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS-LOADING":return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:a.isLoading});default:return e}}}),Fe=Object(Me.b)(Te),He=Fe;window.store=Fe,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te.a,{store:He},r.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.01b9b1da.chunk.js.map