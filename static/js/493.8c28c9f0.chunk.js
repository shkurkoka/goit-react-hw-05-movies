"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{493:function(e,n,t){t.r(n);var r=t(861),i=t(439),c=t(757),o=t.n(c),a=t(791),u=t(87),s=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,i.Z)(e,2),t=n[0],c=n[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0"}},e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",n);case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,c(r.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.jsx)("ul",{className:"topFilms",children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title?e.title:e.name})},e.id)}))})}},861:function(e,n,t){function r(e,n,t,r,i,c,o){try{var a=e[c](o),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var o=e.apply(n,t);function a(e){r(o,i,c,a,u,"next",e)}function u(e){r(o,i,c,a,u,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=493.8c28c9f0.chunk.js.map