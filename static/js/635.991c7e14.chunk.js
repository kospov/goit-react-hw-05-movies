"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[635],{2635:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(885),a=e(2791),c=e(6871),o=e(658),u="CastInfo_list__Pb+aF",i="CastInfo_item__E00bZ",s="CastInfo_thumb__lzmIh",f="CastInfo_poster__78Clg",l="CastInfo_title__2qV9a",m="CastInfo_character__ZmsBc",h=e(184),_=function(){var t=(0,c.UO)().movieId,n=(0,a.useState)([]),e=(0,r.Z)(n,2),_=e[0],d=e[1];return(0,a.useEffect)((function(){(0,o.ym)(t).then((function(t){return d(t)})).catch((function(t){return console.log(t)}))}),[t]),(0,h.jsx)("ul",{className:u,children:_&&_.map((function(t){return(0,h.jsxs)("li",{className:i,children:[(0,h.jsx)("div",{className:s,children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:t.name,className:f})}),(0,h.jsx)("h2",{className:l,children:t.name}),(0,h.jsxs)("p",{className:m,children:[" Character: ",t.character]})]},t.id)}))})},d=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(_,{})})}},658:function(t,n,e){e.d(n,{C6:function(){return f},Mc:function(){return i},Sk:function(){return u},wr:function(){return o},ym:function(){return s}});var r=e(4569),a=e.n(r),c="905309a28b68a9146011759181c1a3d1";a().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){return a().get("/trending/movie/day",{params:{api_key:c}}).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))},u=function(t){return a().get("/search/movie",{params:{api_key:c,query:t}}).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))},i=function(t){return a().get("/movie/".concat(t),{params:{api_key:c}}).then((function(t){return t.data}))},s=function(t){return a().get("/movie/".concat(t,"/credits"),{params:{api_key:c}}).then((function(t){return t.data.cast})).catch((function(t){return console.log(t)}))},f=function(t){return a().get("/movie/".concat(t,"/reviews"),{params:{api_key:c,movie_id:t}}).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))}}}]);
//# sourceMappingURL=635.991c7e14.chunk.js.map