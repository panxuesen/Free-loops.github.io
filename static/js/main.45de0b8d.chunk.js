(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),f=a(8),o=a.n(f),r=a(1),i=a(2),l=a(5),s=a(3),d=a(4),u=a(6),b=(a(15),[["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]]),h=function(e){function t(e){var a;Object(r.a)(this,t);return(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={type:~~(Date.now()/6e4)%13,level:~~(Date.now()/6e3)%10},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.type,a=e.level;return console.log("%cOC- %c ".concat(t," %c %c ").concat(a," %c \u2192 %c  "),"color: ".concat(b[0][7]),"border-radius: 4px; background: ".concat(b[t][7]),"","border-radius: 4px; background: ".concat(b[0][a]),"","border-radius: 4px; background: ".concat(b[t][a])),c.a.createElement("svg",{className:"logo",viewBox:"0 0 472 450",onClick:this.handleChange},c.a.createElement("defs",null,c.a.createElement("filter",{id:"shadow",x:"-12.7%",y:"-13.4%",width:"125.4%",height:"126.7%",filterUnits:"objectBoundingBox"},c.a.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"offset-outer"}),c.a.createElement("feGaussianBlur",{stdDeviation:"20",in:"offset-outer",result:"blue-outer"}),c.a.createElement("feComposite",{in:"blue-outer",in2:"SourceAlpha",operator:"out",result:"blue-outer"}),c.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0",type:"matrix",in:"blue-outer"}))),c.a.createElement("mask",{id:"mask",fill:"white"},c.a.createElement("polygon",{points:"472 114.26 203.028853 335.74 407.1 335.74 472 449.48 64.9 449.48 0 335.74 268.971147 114.26 64.9 114.26 0 0.52 407.1 0.52"})),c.a.createElement("g",{mask:"url(#mask)",fill:b[t][a]},c.a.createElement("rect",{x:"0",y:"0",width:"472",height:"449"})),c.a.createElement("g",{mask:"url(#mask)"},c.a.createElement("polygon",{points:"0 335.74 64.9 449.48 472 114.26 407.1 0.52",filter:"url(#shadow)"})))}},{key:"handleChange",value:function(){this.setState({type:~~(13*Math.random()),level:~~(10*Math.random())})}}]),t}(n.Component),m=(a(16),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},this.props.title),c.a.createElement("p",{className:"slogan"},this.props.slogan))}}]),t}(n.Component)),g=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"navigation"},this.props.links.map(function(e){return c.a.createElement("li",{key:e.href},c.a.createElement("a",{href:e.href,target:e.target},e.text))}))}}]),t}(n.Component)),p=(a(18),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={width:0,height:0,loading:!0},a.handleLoad=a.handleLoad.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;this.img=new window.Image,this.img.src="https://source.unsplash.com/random/".concat(e,"x").concat(t),this.img.onload=this.handleLoad}},{key:"render",value:function(){var e=["background"];return this.state.loading&&e.push("loading"),c.a.createElement("div",{className:e.join(" "),style:{backgroundImage:"url(".concat(this.img.src,")")}})}},{key:"handleLoad",value:function(){this.setState({loading:!1})}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={title:"Hey! Guys",slogan:"I'm Xue Sen Pan, a technical poet of China",links:[{text:"Weibo",href:"https://weibo.com",target:"_blank"},{text:"GitHub",href:"https://github.com/free-loops",target:"_blank"},{text:"Email",href:"mailto:13552198363@163.com",target:"_self"}]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(m,{title:this.state.title,slogan:this.state.slogan}),c.a.createElement(g,{links:this.state.links}),c.a.createElement(p,{url:this.state.background}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.45de0b8d.chunk.js.map