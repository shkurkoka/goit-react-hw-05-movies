"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[334],{334:function(e,n,t){t.r(n);var r=t(861),s=t(439),i=t(757),o=t.n(i),c=t(791),a=t(689),h=t(87),u=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,s.Z)(e,2),t=n[0],i=n[1],l=(0,a.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0"}},e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(l,"?language=en-US"),n);case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,i(r),console.log(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{children:(0,u.jsx)(h.rU,{to:"/",children:"Go home"})}),t.status_message?t.status_message:(0,u.jsxs)("div",{className:"movieContext",children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path),alt:"Ups, something is wrong",width:"450px"}),(0,u.jsxs)("div",{className:"movieContext-text",children:[(0,u.jsx)("h1",{children:t.title}),(0,u.jsxs)("p",{children:["User Score: ",t.vote_average?"".concat(Math.round(10*t.vote_average),"%"):"Ups, something is wrong"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:t.overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:t.genres?t.genres.map((function(e){return"".concat(e.name," ")})):"Ups, something is wrong"})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.j3,{})]})]})}},861:function(e,n,t){function r(e,n,t,r,s,i,o){try{var c=e[i](o),a=c.value}catch(h){return void t(h)}c.done?n(a):Promise.resolve(a).then(r,s)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(s,i){var o=e.apply(n,t);function c(e){r(o,s,i,c,a,"next",e)}function a(e){r(o,s,i,c,a,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return s}})}}]);
//# sourceMappingURL=334.484e3093.chunk.js.map