"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{357:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),o=t.n(i),a=t(791),s=t(689),u=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],h=(0,s.UO)().movieId;return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0"}},e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(h,"/credits?language=en-US"),n);case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,i(r.cast),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,u.jsx)("section",{children:(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("p",{children:e.name}),(0,u.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}},861:function(e,n,t){function r(e,n,t,r,c,i,o){try{var a=e[i](o),s=a.value}catch(u){return void t(u)}a.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function a(e){r(o,c,i,a,s,"next",e)}function s(e){r(o,c,i,a,s,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=357.aec57704.chunk.js.map