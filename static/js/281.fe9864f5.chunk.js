"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[281],{977:function(t,e,n){var r=n(8175),o=n(184);e.Z=function(t){var e=t.column,n=void 0===e?4:e,a=t.height,i=void 0===a?450:a,s=t.width,c=n,u=i,l=void 0===s?300:s,d=u+10,p=l+10,h=Array(3*c).fill(1);return(0,o.jsx)(r.ZP,{speed:1,width:c*p,height:3*d,children:h.map((function(t,e){var n=Math.floor(e/c)*d+35,r=e*p%(c*p);return(0,o.jsx)("rect",{x:r,y:n,rx:"0",ry:"0",width:l,height:u},e)}))})}},397:function(t,e,n){n.d(e,{Z:function(){return S}});var r=n(7689),o=n(5856),a=n(168),i=n(1087),s=n(82),c=n(2791),u=function(t,e){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},u(t,e)};function l(t){var e=t.className,n=t.counterClockwise,r=t.dashRatio,o=t.pathRadius,a=t.strokeWidth,i=t.style;return(0,c.createElement)("path",{className:e,style:Object.assign({},i,p({pathRadius:o,dashRatio:r,counterClockwise:n})),d:d({pathRadius:o,counterClockwise:n}),strokeWidth:a,fillOpacity:0})}function d(t){var e=t.pathRadius,n=t.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+e+"\n      a "+e+","+e+" "+n+" 1 1 0,"+2*e+"\n      a "+e+","+e+" "+n+" 1 1 0,-"+2*e+"\n    "}function p(t){var e=t.counterClockwise,n=t.dashRatio,r=t.pathRadius,o=2*Math.PI*r,a=(1-n)*o;return{strokeDasharray:o+"px "+o+"px",strokeDashoffset:(e?-a:a)+"px"}}var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function n(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,n=t.minValue,r=t.maxValue;return(Math.min(Math.max(e,n),r)-n)/(r-n)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,n=t.className,r=t.classes,o=t.counterClockwise,a=t.styles,i=t.strokeWidth,s=t.text,u=this.getPathRadius(),d=this.getPathRatio();return(0,c.createElement)("svg",{className:r.root+" "+n,style:a.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,c.createElement)("circle",{className:r.background,style:a.background,cx:50,cy:50,r:50}):null,(0,c.createElement)(l,{className:r.trail,counterClockwise:o,dashRatio:e,pathRadius:u,strokeWidth:i,style:a.trail}),(0,c.createElement)(l,{className:r.path,counterClockwise:o,dashRatio:d*e,pathRadius:u,strokeWidth:i,style:a.path}),s?(0,c.createElement)("text",{className:r.text,style:a.text,x:50,y:50},s):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(c.Component);function f(t){var e=t.rotation,n=t.strokeLinecap,r=t.textColor,o=t.textSize,a=t.pathColor,i=t.pathTransition,s=t.pathTransitionDuration,c=t.trailColor,u=t.backgroundColor,l=null==e?void 0:"rotate("+e+"turn)",d=null==e?void 0:"center center";return{root:{},path:g({stroke:a,strokeLinecap:n,transform:l,transformOrigin:d,transition:i,transitionDuration:null==s?void 0:s+"s"}),trail:g({stroke:c,strokeLinecap:n,transform:l,transformOrigin:d}),text:g({fill:r,fontSize:o}),background:g({fill:u})}}function g(t){return Object.keys(t).forEach((function(e){null==t[e]&&delete t[e]})),t}var m,v,x,Z,b,k,y=n(184),w=s.ZP.ul(m||(m=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\npadding: 0 20px;\nmargin-top: 20px;\n  justify-content: space-between;\n  opacity: 0;\n  transition: opacity 1500ms;\n  &.loaded {\n    opacity: 1;\n  }\n"]))),P=s.ZP.li(v||(v=(0,a.Z)(["\n  list-style: none;\n  max-width: 250px;\n  text-align: center;\n"]))),C=(0,s.ZP)(i.rU)(x||(x=(0,a.Z)(["\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),_=s.ZP.div(Z||(Z=(0,a.Z)(["\n  position: relative;\n"]))),j=s.ZP.div(b||(b=(0,a.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n"]))),R=(0,s.ZP)(h)(k||(k=(0,a.Z)([""]))),L=function(t){var e=t.value,n=t.text;return(0,y.jsx)(R,{value:e,text:n,background:!0,backgroundPadding:6,styles:f({textColor:"black",trailColor:"crimson",pathColor:"limegreen",backgroundColor:"aliceblue",textSize:"28px"})})},S=function(t){var e=t.movies,n=t.setContentIsLoading,a=t.contentIsLoading,i=(0,r.TH)(),s=(0,o.e4)(e.length,(function(){n(!1)}));return(0,y.jsx)(w,{className:!a&&"loaded",children:e.map((function(t){var e=t.title,n=t.id,r=t.poster,o=t.averageVote;return(0,y.jsx)(P,{children:(0,y.jsxs)(C,{to:"/movies/".concat(n),state:{from:i},children:[(0,y.jsxs)(_,{children:[(0,y.jsx)("img",{src:r,alt:e,width:"300",height:"450",onLoad:s,onError:s}),(0,y.jsx)(j,{children:(0,y.jsx)(L,{value:o,text:"".concat(o,"%")})})]}),(0,y.jsx)("h2",{children:e})]})},n)}))})}},622:function(t,e,n){var r=n(5218),o=n(184);e.Z=function(){return(0,o.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},7281:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r,o,a,i=n(3433),s=n(9439),c=n(2791),u=n(1087),l=n(168),d=n(82),p=d.ZP.form(r||(r=(0,l.Z)(["\n  width: 400px;\n  padding-top: 20px;\n  margin: 0 auto;\n  display: flex;\n  /* gap: 10px; */\n  margin-bottom: 20px;\n"]))),h=d.ZP.input(o||(o=(0,l.Z)(["\n  width: 100%;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  background-color: whitesmoke;\n"]))),f=d.ZP.button(a||(a=(0,l.Z)(["\n  padding: 4px 8px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  background-color: lightgray;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: lightgreen;\n  }\n"]))),g=n(184),m=function(t){var e=t.setSearchParams,n=(0,c.useState)(""),r=(0,s.Z)(n,2),o=r[0],a=r[1],i=(0,c.useCallback)((function(t){t.preventDefault(),o.trim()&&(e({query:o.trim().toLowerCase()}),a(""))}),[o,e]),u=(0,c.useCallback)((function(t){var e=t.currentTarget.value;a(e)}),[a]);return(0,g.jsxs)(p,{onSubmit:i,children:[(0,g.jsx)(h,{type:"text",name:"query",value:o,placeholder:"Search movies",autoComplete:"off",autoFocus:!0,onChange:u}),(0,g.jsx)(f,{type:"submit",children:"Search"})]})},v=n(397),x=n(622),Z=n(977),b=n(7178),k=n(3135),y=function(){var t=(0,b.Z)(),e=t.movies,n=t.fetchMoviesList,r=t.contentIsLoading,o=t.setContentIsLoading,a=t.status,l=(0,c.useRef)(n).current,d=(0,u.lr)(),p=(0,s.Z)(d,2),h=p[0],f=p[1],y=(0,c.useMemo)((function(){return Object.fromEntries((0,i.Z)(h))}),[h]).query;return(0,c.useEffect)((function(){if(y){var t=new AbortController;return l({controller:t,fetchParams:"search/movie",query:y}),function(){t.abort()}}}),[l,y]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{setSearchParams:f}),r&&(0,g.jsx)(Z.Z,{}),a===k.Z.resolved&&!!e.length&&(0,g.jsx)(v.Z,{movies:e,contentIsLoading:r,setContentIsLoading:o}),(0,g.jsx)(x.Z,{})]})}},3135:function(t,e){e.Z={idle:"IDLE",pending:"PENDING",resolved:"RESOLVED",error:"ERROR"}},7178:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(9439),o=n(2791),a=n(5861),i=n(4687),s=n.n(i),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var t=(0,a.Z)(s().mark((function t(e){var n,r,o,a,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchParams,r=e.query,o=void 0===r?null:r,a=e.controller,t.next=3,(0,c.Z)(n,{signal:a.signal,params:{api_key:"c37d4b7e60468bc94e880299c0a50c58",query:o}});case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=n(3135),d=n(5218),p=function(){var t=(0,o.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1],i=(0,o.useState)(null),s=(0,r.Z)(i,2),c=s[0],p=s[1],h=(0,o.useState)([]),f=(0,r.Z)(h,2),g=f[0],m=f[1],v=(0,o.useState)([]),x=(0,r.Z)(v,2),Z=x[0],b=x[1],k=(0,o.useState)(!1),y=(0,r.Z)(k,2),w=y[0],P=y[1],C=(0,o.useState)(l.Z.idle),_=(0,r.Z)(C,2),j=_[0],R=_[1];return{movies:n,fetchMoviesList:function(t){R(l.Z.pending),P(!0),u(t).then((function(t){if(0===t.results.length)return R(l.Z.resolved),P(!1),d.ZP.error("Nothing found!");var e=function(t){return t.map((function(t){var e=t.title,n=t.id,r=t.poster_path,o=t.vote_average;return{title:e,id:n,poster:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",averageVote:o&&Math.round(10*o)}}))}(t.results);a(e),R(l.Z.resolved)})).catch((function(t){"canceled"!==t.message&&(R(l.Z.error),P(!1),d.ZP.error(t.message))}))},movie:c,fetchMovie:function(t){R(l.Z.pending),P(!0),u(t).then((function(t){p(function(t){var e=t.release_date,n=t.title,r=t.poster_path,o=t.popularity,a=t.backdrop_path,i=t.id,s=t.tagline,c=t.genres,u=t.overview,l=e?e.split("-")[0]:"No release information",d=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",p=c.map((function(t){return t.name})).join(" ");return{date:l,title:n,tagline:s,id:i,poster:d,popularity:o+"",backdrop_path:a,genre:p.length?p:"No genre information",overview:u}}(t)),R(l.Z.resolved)})).catch((function(t){"canceled"!==t.message&&(R(l.Z.error),P(!1),d.ZP.error(t.message))}))},cast:g,fetchCast:function(t){R(l.Z.pending),P(!0),u(t).then((function(t){if(0===t.cast.length)return R(l.Z.resolved),P(!1),d.ZP.error("We don't have any cast for this movie");m(function(t){return t.map((function(t){var e=t.id,n=t.name,r=t.original_name,o=t.character,a=t.profile_path;return{id:e,name:n,original_name:r,character:o,profile:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://placehold.co/80x100/png"}}))}(t.cast)),R(l.Z.resolved)})).catch((function(t){"canceled"!==t.message&&(R(l.Z.error),P(!1),d.ZP.error(t.message))}))},reviews:Z,fetcReviews:function(t){R(l.Z.pending),P(!0),u(t).then((function(t){if(0===t.results.length)return P(!1),R(l.Z.resolved),d.ZP.error("We don't have any reviews for this movie");b(function(t){return t.map((function(t){var e=t.author,n=t.author_details.avatar_path;return{author:e,content:t.content,id:t.id,avatar:!n||null!==n&&void 0!==n&&n.includes("https")?"https://placehold.co/80x80/png":"https://image.tmdb.org/t/p/w500/".concat(n)}}))}(t.results)),R(l.Z.resolved)})).catch((function(t){"canceled"!==t.message&&(P(!1),R(l.Z.error),d.ZP.error(t.message))}))},contentIsLoading:w,setContentIsLoading:P,status:j,setStatus:R}}}}]);
//# sourceMappingURL=281.fe9864f5.chunk.js.map