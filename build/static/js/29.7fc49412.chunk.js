(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{530:function(e,a,l){"use strict";var t=l(20),c=l(55),r=l(1),n=l.n(r),m=l(5),i=l.n(m),o=l(525),s=l.n(o),d=l(526),u=i.a.oneOfType([i.a.number,i.a.string]),E={tag:d.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,l=e.cssModule,r=e.noGutters,m=e.tag,i=e.form,o=e.widths,u=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),E=[];o.forEach((function(a,l){var t=e[a];if(delete u[a],t){var c=!l;E.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var h=Object(d.m)(s()(a,r?"no-gutters":null,i?"form-row":"row",E),l);return n.a.createElement(m,Object(t.a)({},u,{className:h}))};b.propTypes=E,b.defaultProps=h,a.a=b},531:function(e,a,l){"use strict";var t=l(20),c=l(55),r=l(1),n=l.n(r),m=l(5),i=l.n(m),o=l(525),s=l.n(o),d=l(526),u=i.a.oneOfType([i.a.number,i.a.string]),E=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:u,offset:u})]),h={tag:d.q,xs:E,sm:E,md:E,lg:E,xl:E,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},N=function(e){var a=e.className,l=e.cssModule,r=e.widths,m=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,t){var c=e[a];if(delete i[a],c||""===c){var r=!t;if(Object(d.k)(c)){var n,m=r?"-":"-"+a+"-",u=f(r,a,c.size);o.push(Object(d.m)(s()(((n={})[u]=c.size||""===c.size,n["order"+m+c.order]=c.order||0===c.order,n["offset"+m+c.offset]=c.offset||0===c.offset,n)),l))}else{var E=f(r,a,c);o.push(E)}}})),o.length||o.push("col");var u=Object(d.m)(s()(a,o),l);return n.a.createElement(m,Object(t.a)({},i,{className:u}))};N.propTypes=h,N.defaultProps=b,a.a=N},533:function(e,a,l){"use strict";var t=l(20),c=l(55),r=l(1),n=l.n(r),m=l(5),i=l.n(m),o=l(525),s=l.n(o),d=l(526),u={tag:d.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.color,m=e.body,i=e.inverse,o=e.outline,u=e.tag,E=e.innerRef,h=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.m)(s()(a,"card",!!i&&"text-white",!!m&&"card-body",!!r&&(o?"border":"bg")+"-"+r),l);return n.a.createElement(u,Object(t.a)({},h,{className:b,ref:E}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},534:function(e,a,l){"use strict";var t=l(20),c=l(55),r=l(1),n=l.n(r),m=l(5),i=l.n(m),o=l(525),s=l.n(o),d=l(526),u={tag:d.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,m=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.m)(s()(a,"card-body"),l);return n.a.createElement(m,Object(t.a)({},i,{className:o,ref:r}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},535:function(e,a,l){"use strict";var t=l(20),c=l(55),r=l(1),n=l.n(r),m=l(5),i=l.n(m),o=l(525),s=l.n(o),d=l(526),u={tag:d.q,className:i.a.string,cssModule:i.a.object},E=function(e){var a=e.className,l=e.cssModule,r=e.tag,m=Object(c.a)(e,["className","cssModule","tag"]),i=Object(d.m)(s()(a,"card-header"),l);return n.a.createElement(r,Object(t.a)({},m,{className:i}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},577:function(e,a,l){"use strict";var t=l(20),c=l(55),r=l(1),n=l.n(r),m=l(5),i=l.n(m),o=l(525),s=l.n(o),d=l(526),u={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:d.q,responsiveTag:d.q,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},E=function(e){var a=e.className,l=e.cssModule,r=e.size,m=e.bordered,i=e.borderless,o=e.striped,u=e.dark,E=e.hover,h=e.responsive,b=e.tag,f=e.responsiveTag,N=e.innerRef,x=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),p=Object(d.m)(s()(a,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!!u&&"table-dark",!!E&&"table-hover"),l),k=n.a.createElement(b,Object(t.a)({},x,{ref:N,className:p}));if(h){var v=Object(d.m)(!0===h?"table-responsive":"table-responsive-"+h,l);return n.a.createElement(f,{className:v},k)}return k};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},792:function(e,a,l){"use strict";l.r(a);var t=l(173),c=l(174),r=l(176),n=l(175),m=l(1),i=l.n(m),o=l(530),s=l(531),d=l(533),u=l(535),E=l(534),h=l(577),b=l(564),f=function(e){Object(r.a)(l,e);var a=Object(n.a)(l);function l(){return Object(t.a)(this,l),a.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(o.a,null,i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch default"),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"success",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"warning",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"info",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"danger",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"light",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"dark",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"primary",disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch pills"),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"3d Switch"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary"})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"3d Switch ",i.a.createElement("small",null,i.a.createElement("code",null,"disabled"))," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"3d Switch ",i.a.createElement("small",null,i.a.createElement("code",null,'outline="alt"'))," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"3d Switch ",i.a.createElement("small",null,i.a.createElement("code",null,"label"))," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"3d Switch ",i.a.createElement("small",null,i.a.createElement("code",null,'outline="alt" label'))," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"3d Switch ",i.a.createElement("small",null,i.a.createElement("code",null,'outline="alt" label'))," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch outline"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"success",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"warning",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"info",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"danger",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"light",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"dark",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch outline pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch outline alternative"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"success",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"info",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"light",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch outline alternative - pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"success",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"warning",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"info",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"danger",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"light",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"dark",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline alternative"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline alternative"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),i.a.createElement(s.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",i.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),i.a.createElement(E.a,null,i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),i.a.createElement(b.i,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),i.a.createElement(s.a,{xs:"12"},i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Sizes"),i.a.createElement(E.a,{className:"p-0"},i.a.createElement(h.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Size"),i.a.createElement("th",null,"Example"),i.a.createElement("th",null,"Props"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Large"),i.a.createElement("td",null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),i.a.createElement("td",null,"Add ",i.a.createElement("code",null,"size=","lg"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Normal"),i.a.createElement("td",null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),i.a.createElement("td",null,"-")),i.a.createElement("tr",null,i.a.createElement("td",null,"Small"),i.a.createElement("td",null,i.a.createElement(b.i,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),i.a.createElement("td",null,"Add ",i.a.createElement("code",null,"size=","sm"))))))))))}}]),l}(m.Component);a.default=f}}]);
//# sourceMappingURL=29.7fc49412.chunk.js.map