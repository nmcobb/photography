(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(28)},26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(15),c=n.n(r),o=(n(26),n(5)),l=n(6),u=n(8),s=n(4),h=n(7),d=n(16),m=n(0),p=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={index:0},n.paths=t.paths,n.duration=t.duration,setInterval(function(){return n.nextPhoto()},n.duration),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=function(t){return{objectFit:"cover",overflow:"hidden",width:"100vw",height:"100vh",marginRight:"auto",marginLeft:"auto",display:"block",position:"absolute",top:"0",left:"0",right:"0",zIndex:"-1",animationName:t?"fadein":"fadeout",animationDuration:"3s",animationFillMode:"forwards"}},e=(this.state.index-this.state.index%2)%this.paths.length,n=(this.state.index-(this.state.index+1)%2)%this.paths.length;return console.log(e,n),i.a.createElement("div",null,i.a.createElement("img",{src:this.paths[n],style:t(this.state.index%2)}),i.a.createElement("img",{src:this.paths[e],style:t((this.state.index+1)%2)}))}},{key:"nextPhoto",value:function(){this.setState(function(t){return{index:t.index+1}})}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={photo:0},n.data=t.data,n.ref=Object(a.createRef)(),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p,{paths:this.data,duration:12e3}))}}]),e}(a.Component),f=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",backgroundColor:"black",opacity:.6,position:"fixed",top:0}},i.a.createElement("p",{style:{margin:0,color:"white",padding:"4vh 10vw",fontSize:"32px",fontFamily:"CooperHewitt-Light"}},"Miles Cobb"))}}]),e}(a.Component),v=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),e}(a.Component),g=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).data=t.data,n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{textAlign:"center",lineHeight:0,backgroundColor:"rgb(30, 30, 30)",paddingTop:"calc(10vh + 32px)"}},this.data.map(function(t){return i.a.createElement("div",{style:{display:"inline-block",width:"45vw",margin:"10px",verticalAlign:"top"}},i.a.createElement("img",{src:t,style:{maxWidth:"calc(45vw - 16px)",maxHeight:"calc(45vw - 16px)",objectFit:"contain",verticalAlign:"middle",backgroundColor:"white",padding:"8px"}})," ")}))}}]),e}(a.Component),j=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(i)))).state={},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("catalog.json").then(function(t){return t.json()}).then(function(e){return t.setState({data:e})})}},{key:"render",value:function(){return i.a.createElement("div",{style:{}},i.a.createElement(f,null),this.state.data?i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",element:i.a.createElement(b,{data:this.state.data})}),i.a.createElement(m.a,{path:"/about",element:i.a.createElement(v,null)}),i.a.createElement(m.a,{path:"/gallery",element:i.a.createElement(g,{data:this.state.data})})))):i.a.createElement("div",null," loading  "))}}]),e}(a.Component),O=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,29)).then(function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)})};c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.Fragment,null,i.a.createElement(j,null))),O()}},[[17,3,2]]]);
//# sourceMappingURL=main.8f1f7050.chunk.js.map