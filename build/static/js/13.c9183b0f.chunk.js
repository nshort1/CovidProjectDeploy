(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{530:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d=s.a.oneOfType([s.a.number,s.a.string]),p={tag:m.q,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,i=e.widths,d=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var l=!t;p.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var f=Object(m.m)(u()(a,r?"no-gutters":null,s?"form-row":"row",p),t);return o.a.createElement(c,Object(n.a)({},d,{className:f}))};g.propTypes=p,g.defaultProps=f,a.a=g},531:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:d,offset:d})]),f={tag:m.q,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,s=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,n){var l=e[a];if(delete s[a],l||""===l){var r=!n;if(Object(m.k)(l)){var o,c=r?"-":"-"+a+"-",d=b(r,a,l.size);i.push(Object(m.m)(u()(((o={})[d]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o)),t))}else{var p=b(r,a,l);i.push(p)}}})),i.length||i.push("col");var d=Object(m.m)(u()(a,i),t);return o.a.createElement(c,Object(n.a)({},s,{className:d}))};E.propTypes=f,E.defaultProps=g,a.a=E},533:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d={tag:m.q,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,s=e.inverse,i=e.outline,d=e.tag,p=e.innerRef,f=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(m.m)(u()(a,"card",!!s&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(d,Object(n.a)({},f,{className:g,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},534:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d={tag:m.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.m)(u()(a,"card-body"),t);return o.a.createElement(c,Object(n.a)({},s,{className:i,ref:r}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},535:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d={tag:m.q,className:s.a.string,cssModule:s.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.m)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},c,{className:s}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},550:function(e,a,t){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(a){var t=this.constructor.getDerivedStateFromProps(e,a);return null!==t&&void 0!==t?t:null}.bind(this))}function r(e,a){try{var t=this.props,n=this.state;this.props=e,this.state=a,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,n)}finally{this.props=t,this.state=n}}function o(e){var a=e.prototype;if(!a||!a.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate)return e;var t=null,o=null,c=null;if("function"===typeof a.componentWillMount?t="componentWillMount":"function"===typeof a.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof a.componentWillReceiveProps?o="componentWillReceiveProps":"function"===typeof a.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"===typeof a.componentWillUpdate?c="componentWillUpdate":"function"===typeof a.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==t||null!==o||null!==c){var s=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==o?"\n  "+o:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(a.componentWillMount=n,a.componentWillReceiveProps=l),"function"===typeof a.getSnapshotBeforeUpdate){if("function"!==typeof a.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");a.componentWillUpdate=r;var u=a.componentDidUpdate;a.componentDidUpdate=function(e,a,t){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;u.call(this,e,a,n)}}return e}t.r(a),t.d(a,"polyfill",(function(){return o})),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},551:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(1),l=t.n(n).a.createContext({})},602:function(e,a,t){"use strict";var n=t(20),l=t(32),r=t(1),o=t.n(r),c=t(550),s=t(5),i=t.n(s),u=t(525),m=t.n(u),d=t(551),p=t(526),f={tag:p.q,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,r=Object(p.n)(this.props,Object.keys(f)),c=Object(p.m)(m()("tab-content",a),t);return o.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(l,Object(n.a)({},r,{className:c})))},a}(r.Component);Object(c.polyfill)(g),a.a=g,g.propTypes=f,g.defaultProps={tag:"div"}},603:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(551),d=t(526),p={tag:d.q,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function f(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,s=Object(l.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(d.m)(u()("tab-pane",a,{active:r===e}),t)};return o.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(c,Object(n.a)({},s,{className:i(a)}))}))}f.propTypes=p,f.defaultProps={tag:"div"}},650:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d={tag:m.q,flush:s.a.bool,className:s.a.string,cssModule:s.a.object,horizontal:s.a.oneOfType([s.a.bool,s.a.string])},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.flush,s=e.horizontal,i=Object(l.a)(e,["className","cssModule","tag","flush","horizontal"]),d=Object(m.m)(u()(a,"list-group",c?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(s)),t);return o.a.createElement(r,Object(n.a)({},i,{className:d}))};p.propTypes=d,p.defaultProps={tag:"ul",horizontal:!1},a.a=p},651:function(e,a,t){"use strict";var n=t(20),l=t(55),r=t(1),o=t.n(r),c=t(5),s=t.n(c),i=t(525),u=t.n(i),m=t(526),d={tag:m.q,active:s.a.bool,disabled:s.a.bool,color:s.a.string,action:s.a.bool,className:s.a.any,cssModule:s.a.object},p=function(e){e.preventDefault()},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.active,s=e.disabled,i=e.action,d=e.color,f=Object(l.a)(e,["className","cssModule","tag","active","disabled","action","color"]),g=Object(m.m)(u()(a,!!c&&"active",!!s&&"disabled",!!i&&"list-group-item-action",!!d&&"list-group-item-"+d,"list-group-item"),t);return s&&(f.onClick=p),o.a.createElement(r,Object(n.a)({},f,{className:g}))};f.propTypes=d,f.defaultProps={tag:"li"},a.a=f},818:function(e,a,t){"use strict";t.r(a);var n=t(173),l=t(174),r=t(177),o=t(176),c=t(175),s=t(1),i=t.n(s),u=t(530),m=t(531),d=t(533),p=t(535),f=t(534),g=t(650),b=t(651),E=t(769),v=t(20),h=t(55),j=t(5),y=t.n(j),N=t(525),O=t.n(N),M=t(526),T={tag:M.q,className:y.a.any,cssModule:y.a.object},x=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(h.a)(e,["className","cssModule","tag"]),r=Object(M.m)(O()(a,"list-group-item-heading"),t);return i.a.createElement(n,Object(v.a)({},l,{className:r}))};x.propTypes=T,x.defaultProps={tag:"h5"};var P=x,q={tag:M.q,className:y.a.any,cssModule:y.a.object},w=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(h.a)(e,["className","cssModule","tag"]),r=Object(M.m)(O()(a,"list-group-item-text"),t);return i.a.createElement(n,Object(v.a)({},l,{className:r}))};w.propTypes=q,w.defaultProps={tag:"p"};var D=w,S=t(602),U=t(603),C=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).toggle=l.toggle.bind(Object(r.a)(l)),l.state={activeTab:1},l}return Object(l.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/listgroup/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Cras justo odio"),i.a.createElement(b.a,null,"Dapibus ac facilisis in"),i.a.createElement(b.a,null,"Morbi leo risus"),i.a.createElement(b.a,null,"Porta ac consectetur ac"),i.a.createElement(b.a,null,"Vestibulum at eros"))))),i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("small",null," tags")),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"justify-content-between"},"Cras justo odio ",i.a.createElement(E.a,{className:"float-right",pill:!0},"14")),i.a.createElement(b.a,{className:"justify-content-between"},"Dapibus ac facilisis in ",i.a.createElement(E.a,{className:"float-right",pill:!0},"2")),i.a.createElement(b.a,{className:"justify-content-between"},"Morbi leo risus ",i.a.createElement(E.a,{className:"float-right",pill:!0,color:"warning"},"1"))))))),i.a.createElement(u.a,null,i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("small",null," disabled items")),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(b.a,{disabled:!0,tag:"a",href:"#"},"Cras justo odio"),i.a.createElement(b.a,{tag:"a",href:"#"},"Dapibus ac facilisis in"),i.a.createElement(b.a,{disabled:!0,tag:"a",href:"#"},"Morbi leo risus"),i.a.createElement(b.a,{tag:"a",href:"#"},"Porta ac consectetur ac"),i.a.createElement(b.a,{tag:"a",href:"#"},"Vestibulum at eros"))))),i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("small",null," contextual classes")),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(b.a,{action:!0,color:"success"},"Cras justo odio"),i.a.createElement(b.a,{action:!0,color:"info"},"Dapibus ac facilisis in"),i.a.createElement(b.a,{action:!0,color:"warning"},"Morbi leo risus"),i.a.createElement(b.a,{action:!0,color:"danger"},"Porta ac consectetur ac")))))),i.a.createElement(u.a,null,i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("small",null," anchors")),i.a.createElement(f.a,null,i.a.createElement("p",null,"Be sure to ",i.a.createElement("strong",null,"not use the standard ",i.a.createElement("code",null,".btn")," classes here"),"."),i.a.createElement(g.a,null,i.a.createElement(b.a,{active:!0,tag:"a",href:"#",action:!0},"Cras justo odio"),i.a.createElement(b.a,{tag:"a",href:"#",action:!0},"Dapibus ac facilisis in"),i.a.createElement(b.a,{tag:"a",href:"#",action:!0},"Morbi leo risus"),i.a.createElement(b.a,{tag:"a",href:"#",action:!0},"Porta ac consectetur ac"),i.a.createElement(b.a,{disabled:!0,tag:"a",href:"#",action:!0},"Vestibulum at eros")),i.a.createElement("p",null)))),i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("small",null," buttons")),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(b.a,{active:!0,tag:"button",action:!0},"Cras justo odio"),i.a.createElement(b.a,{tag:"button",action:!0},"Dapibus ac facilisis in"),i.a.createElement(b.a,{tag:"button",action:!0},"Morbi leo risus"),i.a.createElement(b.a,{tag:"button",action:!0},"Porta ac consectetur ac"),i.a.createElement(b.a,{disabled:!0,tag:"button",action:!0},"Vestibulum at eros")))))),i.a.createElement(u.a,null,i.a.createElement(m.a,{sm:"12",xl:"6"},i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group"),i.a.createElement("small",null," custom content")),i.a.createElement(f.a,null,i.a.createElement(g.a,null,i.a.createElement(b.a,{active:!0,action:!0},i.a.createElement(P,null,"List group item heading"),i.a.createElement(D,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")),i.a.createElement(b.a,{action:!0},i.a.createElement(P,null,"List group item heading"),i.a.createElement(D,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")),i.a.createElement(b.a,{action:!0},i.a.createElement(P,null,"List group item heading"),i.a.createElement(D,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."))))))),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"List Group")," ",i.a.createElement("small",null,"with TabPanes"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement(E.a,null,"NEW"))),i.a.createElement(f.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,{xs:"4"},i.a.createElement(g.a,{id:"list-tab",role:"tablist"},i.a.createElement(b.a,{onClick:function(){return e.toggle(0)},action:!0,active:0===this.state.activeTab},"Home"),i.a.createElement(b.a,{onClick:function(){return e.toggle(1)},action:!0,active:1===this.state.activeTab},"Profile"),i.a.createElement(b.a,{onClick:function(){return e.toggle(2)},action:!0,active:2===this.state.activeTab},"Messages"),i.a.createElement(b.a,{onClick:function(){return e.toggle(3)},action:!0,active:3===this.state.activeTab},"Settings"))),i.a.createElement(m.a,{xs:"8"},i.a.createElement(S.a,{activeTab:this.state.activeTab},i.a.createElement(U.a,{tabId:0},i.a.createElement("p",null,"Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.")),i.a.createElement(U.a,{tabId:1},i.a.createElement("p",null,"Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.")),i.a.createElement(U.a,{tabId:2},i.a.createElement("p",null,"Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.")),i.a.createElement(U.a,{tabId:3},i.a.createElement("p",null,"Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure."))))))))))}}]),t}(s.Component);a.default=C}}]);
//# sourceMappingURL=13.c9183b0f.chunk.js.map