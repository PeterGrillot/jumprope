(this.webpackJsonpjumprope=this.webpackJsonpjumprope||[]).push([[0],{14:function(t,e,n){t.exports=n.p+"static/media/jumprope.540ae400.svg"},19:function(t,e,n){t.exports=n(27)},24:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),l=(n(24),n(15)),c=n(8),m=n(9),s=n(16),u=n(10),f=n(17),d=n(1),p=n(2),v=n(3),g={name:"Rest",timer:10},h={name:"Long Rest",timer:60+g.timer},E=[Object(v.a)({},{name:"Ready",timer:5}),{name:"Standard",timer:30},Object(v.a)({},g),{name:"Switch Foot",timer:30},Object(v.a)({},g),{name:"High Knee",timer:30},Object(v.a)({},g),{name:"Twist",timer:30},Object(v.a)({},g),{name:"Skip Jump",timer:30},Object(v.a)({},h)];function b(){var t=Object(d.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-basis: 50vh;\n\tdiv,\n\tfigure {\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tdisplay: flex;\n\t\tmargin: 0;\n\t}\n\tdiv {\n\t\tfont-size: 10rem;\n\t\tflex-basis: 40vh;\n\t}\n\tfigure {\n\t\tfont-size: 2.6rem;\n\t\tflex-basis: 10vh;\n\t}\n"]);return b=function(){return t},t}var j=p.a.div(b()),y=function(t){return a.a.createElement(j,null,a.a.createElement("div",null,t.timer),a.a.createElement("figure",null,t.name))};function O(){var t=Object(d.a)(["\n\tborder-radius: .6rem;\n\tfont-size: 2.2rem;\n\tpadding: 0.2rem 1rem;\n\tborder: none;\n\tbackground: var(--purple);\n\tcolor: white;\n"]);return O=function(){return t},t}var x=p.a.button(O()),k=function(t){return a.a.createElement(x,t,t.children)},w=n(14),I=n.n(w);function S(){var t=Object(d.a)(["\n\tdisplay: ",";\n\tposition: relative;\n\t> img {\n\t\tanimation: jump 1s infinite linear;\n\t\ttransform-origin: top;\n\t}\n\t> span {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tfont-size: 1rem;\n\t\ttop: 0;\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t\tflex-basis: 100%;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tjustify-content: center;\n\t}\n\t@keyframes jump {\n\t\tfrom {\n\t\t\ttransform: rotateX(0deg);\n\t\t}\n\t\tto {\n\t\t\ttransform: rotateX(360deg);\n\t\t}\n\t}\n"]);return S=function(){return t},t}var D=p.a.div(S(),(function(t){return t.active?"none":"block"})),R=function(t){return a.a.createElement(D,{active:t.active},a.a.createElement("img",{src:I.a,alt:"Logo"}),a.a.createElement("span",null,"JumpRope"))};function z(){var t=Object(d.a)(["\n\tdisplay: flex;\n\tlist-style: none;\n\tfont-size: 2rem;\n\tcolor: var(--green);\n\tposition: absolute;\n\ttop: 0;\n\tmargin: 1rem 0;\n\tpadding: 0;\n"]);return z=function(){return t},t}var T=p.a.ul(z()),N=function(t){var e=t.set;return a.a.createElement(T,null,e.map((function(t,e){return a.a.createElement("li",{key:e},t)})),0!==e.length&&a.a.createElement("li",null,"(",e.length,")"))};function B(){var t=Object(d.a)(["\n\ttext-align: center;\n\tfont-size: 10rem;\n\tcolor: var(--green);\n\ttransition: all 1s;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tsmall {\n\t\tfont-size: 1.6rem;\n\t\tdisplayl block;\n\t\tmargin: 2rem 0;\n\t}\n\t",";\n\t",";\n"]);return B=function(){return t},t}var C={timer:E[0].timer,rep:0,set:[],engaged:!1},J=p.a.div(B(),(function(t){return"danger"===t.level&&"\n    color: var(--red);\n  "}),(function(t){return"rest"===t.level&&"\n    color: var(--blue);\n\t"})),L=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).timerID=void 0,n.videoElement=void 0,n.audioElement=void 0,n.state=C,n.startTimer=function(){n.videoElement.play(),n.setState({engaged:!0}),n.timerID=setInterval((function(){return n.tick()}),1e3)},n.pauseTimer=function(){return n.setState({engaged:!1},(function(){document&&n.videoElement.pause(),clearInterval(n.timerID)}))},n.nextRep=function(){n.pauseTimer(),n.state.rep===E.length-1?n.setComplete():n.setState((function(t){return{timer:E[t.rep+1].timer,rep:t.rep+1}}),n.startTimer)},n.setComplete=function(){n.setState({timer:E[0].timer,rep:0,engaged:!1,set:[].concat(Object(l.a)(n.state.set),["*"])})},n.tick=function(){n.setState({timer:n.state.timer-1},(function(){if(0===n.state.timer)return n.audioElement.play(),n.nextRep(),!1}))},n.getNext=function(){var t=n.state.rep+1;return E[t]?E[t].name:"Done!"},n}return Object(f.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.videoElement=document.getElementById("NOOP_VIDEO"),this.audioElement=document.getElementById("BELL_RING_AUDIO")}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return a.a.createElement(J,{level:(t=this.state.timer,e=E[this.state.rep].name,"Rest"===e?"rest":t<=2?"danger":"success")},a.a.createElement(N,{set:this.state.set}),a.a.createElement(R,{active:this.state.engaged}),this.state.engaged?a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{timer:this.state.timer,name:E[this.state.rep].name}),a.a.createElement("small",null,"Up Next: ",this.getNext()),a.a.createElement(k,{onClick:this.pauseTimer},"Pause")):a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{onClick:this.startTimer,disabled:this.state.engaged},"Start")));var t,e}}]),e}(a.a.Component);var A=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6b952821.chunk.js.map