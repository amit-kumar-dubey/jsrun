(window.webpackJsonprunjs=window.webpackJsonprunjs||[]).push([[0],{70:function(e,t,n){e.exports=n(94)},75:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),i=n.n(c),o=(n(75),n(5)),s=n.n(o),u=n(8),l=n(10),m=n(102),f=n(103),h=n(99),d=r.a.createContext(null),p="github-user";function b(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark(function e(){var t,n,a,r,c,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem(p))){e.next=5;break}return e.abrupt("return",JSON.parse(t));case 5:if(!(n=window.location.href.match(/\?code=(.*)/)&&window.location.href.match(/\?code=(.*)/)[1])){e.next=33;break}return e.prev=7,e.next=10,fetch("https://pqsq24y7vb.execute-api.us-east-1.amazonaws.com/github/authenticate?code="+n);case 10:return a=e.sent,e.next=13,a.json();case 13:return r=e.sent,c=r.access_token,e.next=17,fetch("https://api.github.com/user",{headers:{Authorization:"token ".concat(c)}});case 17:if(!((i=e.sent).status>400)){e.next=20;break}throw new Error("Unauthorized");case 20:return e.t0=Object,e.next=23,i.json();case 23:return e.t1=e.sent,e.t2={token:c},o=e.t0.assign.call(e.t0,e.t1,e.t2),localStorage.setItem(p,JSON.stringify(Object.assign(o))),e.abrupt("return",o);case 30:return e.prev=30,e.t3=e.catch(7),e.abrupt("return",null);case 33:return e.abrupt("return",null);case 34:case"end":return e.stop()}},e,null,[[7,30]])}))).apply(this,arguments)}var g=r.a.memo(function(){var e=Object(a.useContext)(d);return e?r.a.createElement(m.a,{src:e.avatar_url,style:{height:"40px"}}):r.a.createElement(f.a,{href:"https://github.com/login/oauth/authorize?client_id=d35e67867e141005ae25&scope=gist&redirect_uri=https://pvamshi.github.io/runjs",label:"Log in ",icon:r.a.createElement(h.a,null)})}),j=n(104),w=n(105),O=n(106),k=r.a.memo(function(e){var t=e.gist,n=e.selectGist;return r.a.createElement(j.a,{pad:"small",key:t.id},r.a.createElement(w.a,null,t.description||Object.keys(t.files)[0]),Object.values(t.files).filter(function(e){return"JavaScript"===e.language}).map(function(e){return Object.assign({},e,{id:t.id})}).map(function(e,t){return r.a.createElement(O.a,{margin:"small",key:e.filename+t,hoverIndicator:!0,onClick:function(){return n(e)}},r.a.createElement(w.a,null,e.filename))}))}),x=r.a.memo(function(e){var t=e.selectGist,n=Object(a.useState)([]),c=Object(l.a)(n,2),i=c[0],o=c[1],m=(Object(a.useContext)(d)||{}).token;return Object(a.useEffect)(function(){function e(){return(e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/gists",{headers:{Authorization:"token ".concat(m)}});case 2:return t=e.sent,e.t0=o,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[m]),i.filter(function(e){return Object.keys(e.files).length>0&&Object.values(e.files).some(function(e){return"JavaScript"===e.language})}).map(function(e){return r.a.createElement(k,{key:e.id,gist:e,selectGist:t})})}),E=n(101),y=n(107),C=Object.freeze({global:{font:{family:"Roboto",size:"14px",height:"14px"}}}),S=r.a.memo(function(e){var t=e.showLeftNav,n=Object(l.a)(e.children,3),a=n[0],c=n[1],i=n[2];return r.a.createElement(E.a,{full:!0,theme:C},r.a.createElement(y.a,{fill:!0,rows:["auto","flex"],columns:["auto","flex"],areas:[{name:"header",start:[0,0],end:[1,0]},{name:"sidebar",start:[0,1],end:[0,1]},{name:"main",start:[1,1],end:[1,1]}]},r.a.createElement(j.a,{gridArea:"header",direction:"row",align:"center",justify:"between",pad:{horizontal:"medium",vertical:"small"},background:"brand"},r.a.createElement(O.a,null,r.a.createElement(w.a,{size:"large"},"Run JS")),a),t&&r.a.createElement(j.a,{gridArea:"sidebar",background:"light-6",width:"small",animation:[{type:"fadeIn",duration:300},{type:"slideRight",size:"xlarge",duration:150}]},c),r.a.createElement(j.a,{gridArea:"main"},i)))}),z=n(60),J=n(61),A=n(64),G=n(62),I=n(16),W=n(65),N=n(63),R=n.n(N),_=(n(91),n(93),n(100)),L=function(e){function t(e){var n;return Object(z.a)(this,t),(n=Object(A.a)(this,Object(G.a)(t).call(this,e))).iframe=void 0,n.state={content:"// Open dev tools to see the output\t\n console.log('Hello World');"},n.run=n.run.bind(Object(I.a)(n)),n.updateCode=n.updateCode.bind(Object(I.a)(n)),n}return Object(W.a)(t,e),Object(J.a)(t,[{key:"updateCode",value:function(e){this.setState({content:e})}},{key:"run",value:function(){this.iframe.contentWindow.eval(this.state.content)}},{key:"componentWillUpdate",value:function(){var e=Object(u.a)(s.a.mark(function e(t,n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=t.externalContent)&&a!==this.state.content&&this.setState({content:a});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(R.a,{mode:"javascript",theme:"tomorrow",onChange:this.updateCode,name:"js-editor",value:this.state.content,focus:!0,editorProps:{$blockScrolling:!0},width:"100%",commands:[{name:"Execute",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:this.run}]}),r.a.createElement(O.a,{onClick:this.run,primary:!0,icon:r.a.createElement(_.a,null),label:"Run"}),r.a.createElement("iframe",{title:"dummy",style:{display:"none"},ref:function(t){return e.iframe=t}}," "))}}]),t}(a.Component),U=r.a.memo(function(e){var t=e.selectedGist,n=(Object(a.useContext)(d)||{}).token,c=Object(a.useState)(null),i=Object(l.a)(c,2),o=i[0],m=i[1];return Object(a.useEffect)(function(){function e(){return(e=Object(u.a)(s.a.mark(function e(){var a,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t.id&&n)){e.next=16;break}return e.prev=1,e.next=4,fetch("https://api.github.com/gists/"+t.id,{headers:{Authorization:"token ".concat(n)}});case 4:if(!((a=e.sent).status>400)){e.next=7;break}throw new Error("Unauthorized");case 7:return e.next=9,a.json();case 9:r=e.sent,c=r.files[t.filename],m(c.content),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}},e,null,[[1,14]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t,n]),r.a.createElement(L,{externalContent:o})}),q=r.a.memo(function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),o=Object(l.a)(i,2),m=o[0],f=o[1];return Object(a.useEffect)(function(){function e(){return(e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement(d.Provider,{value:m},r.a.createElement(S,{showLeftNav:m&&m.token},r.a.createElement(g,null),r.a.createElement(x,{selectGist:function(e){return c(e)}}),r.a.createElement(U,{selectedGist:n})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.182d66e6.chunk.js.map