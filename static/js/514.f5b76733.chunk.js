"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[514],{7692:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(501),i=e(6871),c="MovieItem_item__iPuYx",u=e(184),o=function(n){var t=n.searchedMovies,e=(0,i.TH)();return(0,u.jsx)(u.Fragment,{children:t&&t.map((function(n){return(0,u.jsx)("li",{className:c,children:(0,u.jsx)(r.rU,{to:"/movie/"+n.id,state:e,children:n.title})},n.id)}))})}},2514:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(885),i=e(2791),c=e(658),u=e(7692),o="TrendingMoviesList_title__UOrWK",a="TrendingMoviesList_list__ocj1b",s=e(184),f=function(n){var t=n.trendMovies;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:o,children:"Trending today"}),(0,s.jsx)("ul",{className:a,children:(0,s.jsx)(u.Z,{searchedMovies:t})})]})},l=function(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,i.useEffect)((function(){(0,c.wr)().then((function(n){return u(n)})).catch((function(n){return console.log(n)}))}),[]),(0,s.jsx)(f,{trendMovies:e})}},658:function(n,t,e){e.d(t,{C6:function(){return f},Mc:function(){return a},Sk:function(){return o},wr:function(){return u},ym:function(){return s}});var r=e(4569),i=e.n(r),c="905309a28b68a9146011759181c1a3d1";i().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){return i().get("/trending/movie/day",{params:{api_key:c}}).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}))},o=function(n){return i().get("/search/movie",{params:{api_key:c,query:n}}).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}))},a=function(n){return i().get("/movie/".concat(n),{params:{api_key:c}}).then((function(n){return n.data}))},s=function(n){return i().get("/movie/".concat(n,"/credits"),{params:{api_key:c}}).then((function(n){return n.data.cast})).catch((function(n){return console.log(n)}))},f=function(n){return i().get("/movie/".concat(n,"/reviews"),{params:{api_key:c,movie_id:n}}).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}))}}}]);
//# sourceMappingURL=514.f5b76733.chunk.js.map