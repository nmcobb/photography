(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t){t.exports={gallery:["/gallery/DSC0787.jpg","/gallery/DSC8279.jpg","/gallery/DSC00325.jpg","/gallery/DSC8196.jpg","/gallery/DSC8048.jpg","/gallery/DSC8141.jpg","/gallery/DSC8191.jpg"],home:["/home/DSC0787.jpg","/home/DSC8196.jpg","/home/DSC8048.jpg","/home/DSC8141.jpg","/home/DSC8191.jpg"]}},20:function(t,e,a){t.exports=a(31)},29:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),o=a(18),r=a.n(o),l=(a(29),a(6)),c=a(7),s=a(9),h=a(5),u=a(8),d=a(15),m=a(0),p=a(16),g=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).duration=500,a.state={im1:null,im2:null,counter:!1},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=function(e){return{objectFit:"cover",overflow:"hidden",marginRight:"auto",marginLeft:"auto",display:"block",position:"absolute",animationName:e?"fadein":"fadeout",animationDuration:t.duration+"ms",animationFillMode:"forwards",left:0,right:0,pointerEvents:e?"all":"none",width:"100%",height:"100%"}};return i.a.createElement("div",{style:{maxHeight:"100%",maxWidth:"100%"}},this.state.im1?i.a.createElement("img",{src:"/photography"+this.state.im1,alt:"",style:Object(p.a)({},e(!this.state.counter),this.props.img_style)}):null,this.state.im2?i.a.createElement("img",{src:"/photography"+this.state.im2,alt:"",style:Object(p.a)({},e(this.state.counter),this.props.img_style)}):null,this.props.children)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var a=t.img;return e[e.counter?"im1":"im2"]=a,e.counter=!e.counter,e}}]),e}(n.Component),v=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(s.a)(this,Object(h.a)(e).call(this,t))).duration=12e3,a.state={photo:0},a.data=t.data,a.ref=Object(n.createRef)(),setInterval(function(){return a.setState({photo:(a.state.photo+1)%a.data.length})},a.duration),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{zIndex:-1,position:"absolute",height:"100vh",width:"100vw"}},i.a.createElement(g,{img:this.data[this.state.photo]}))}}]),e}(n.Component),y=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",backgroundColor:"black",opacity:.6,position:"fixed",top:0}},i.a.createElement("p",{style:{color:"white",margin:"6vh 10vw",lineHeight:"0",fontSize:"32px",fontFamily:"CooperHewitt-Light"}},"Miles Cobb"))}}]),e}(n.Component),b=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:"calc(12vh)",paddingTop:"3vw"}},i.a.createElement("img",{style:{width:"30vw",maxHeight:"60vh",display:"inline-block",verticalAlign:"top",padding:"0vw 3vw",objectFit:"contain"},src:"/photography/other/DSC7990.jpg",alt:""}),i.a.createElement("div",{style:{width:"61vw",height:"80vh",backgroundColor:"rgb(240, 240, 240)",display:"inline-block",marginRight:"3vw"}},i.a.createElement("div",{style:{padding:"1em"}},i.a.createElement("h1",{style:{}}," About Me "),i.a.createElement("p",null,"I'm an outdoors photographer based out of San Francisco California! I love taking photos while backpacking, everything from landscapes, to wildlife, to astrophotography"))))}}]),e}(n.Component),f=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(s.a)(this,Object(h.a)(e).call(this,t))).state={clicked:-1},a.data=t.data,a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"exitImage",value:function(){this.state.clicked>=0&&this.setState({clicked:-1})}},{key:"componentDidMount",value:function(){var t=this;this.escapeListener=document.addEventListener("keydown",function(e){"Escape"===e.key&&t.state.clicked>-1&&t.setState({clicked:-1})})}},{key:"componentWillUnmount",value:function(){document.removeEventListener(this.escapeListener)}},{key:"render",value:function(){var t=this;return document.body.style.overflow=this.state.clicked>-1?"hidden":"",i.a.createElement("div",{style:{textAlign:"center",lineHeight:0,backgroundColor:"rgb(30, 30, 30)",paddingTop:"calc(12vh)",transformBox:"content-box"},onClick:function(e){t.exitImage(),e.stopPropagation()}},this.data.map(function(e,a){return i.a.createElement("div",{style:{display:"inline-block",width:"45vw",margin:"10px",verticalAlign:"top"},key:"item"+a},i.a.createElement("img",{src:"/photography"+e,alt:"not found",onClick:function(){return t.setState({clicked:a})},style:{maxWidth:"calc(45vw - 16px)",maxHeight:"calc(45vw - 16px)",objectFit:"contain",verticalAlign:"middle",backgroundColor:"white",padding:"3px"}})," ")}),i.a.createElement("div",{style:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",margin:"auto",pointerEvents:"none",maxWidth:"90vw",maxHeight:"96vh"},onKeyDown:function(t){return console.log(t)},onClick:function(t){return t.stopPropagation()}},i.a.createElement(g,{img:this.state.clicked>=0?this.data[this.state.clicked]:null,img_style:{border:"30px solid white",maxWidth:"calc(100% - 60px)",maxHeight:"calc(100% - 60px)",width:null,height:null,zIndex:3}}),this.state.clicked>-1?i.a.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgb(10, 10, 10, .5)",zIndex:2}}," here "):""))}}]),e}(n.Component),j=a(19),k=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={data:j},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontFamily:"CooperHewitt-Light"}},i.a.createElement(y,null),this.state.data?i.a.createElement("div",null,i.a.createElement(d.a,{basename:"/photography"},i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",element:i.a.createElement(v,{data:this.state.data.home})}),i.a.createElement(m.a,{path:"/about",element:i.a.createElement(b,null)}),i.a.createElement(m.a,{path:"/gallery",element:i.a.createElement(f,{data:this.state.data.gallery})})))):i.a.createElement("div",null," loading  "))}}]),e}(n.Component),w=function(t){t&&t instanceof Function&&a.e(1).then(a.bind(null,33)).then(function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),n(t),i(t),o(t),r(t)})};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null))),w()}},[[20,3,2]]]);
//# sourceMappingURL=main.67f8729c.chunk.js.map