"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[226,845],{7692:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(501),u=e(6871),c="MovieItem_item__iPuYx",a=e(184),i=function(n){var t=n.searchedMovies,e=(0,u.TH)();return(0,a.jsx)(a.Fragment,{children:t&&t.map((function(n){return(0,a.jsx)("li",{className:c,children:(0,a.jsx)(r.rU,{to:"/movie/"+n.id,state:e,children:n.title})},n.id)}))})}},5845:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),u=e(2791),c=e(501),a=e(658),i=e(7692),o="SearchedMoviesList_list__liNYp",s=e(184),f=function(){var n=(0,c.lr)(),t=(0,r.Z)(n,1)[0],e=(0,u.useState)(null),f=(0,r.Z)(e,2),l=f[0],h=f[1];return(0,u.useEffect)((function(){var n=t.get("query");null!==n&&(0,a.Sk)(n).then((function(n){return h(n)})).catch((function(n){return console.log(n)}))}),[t]),(0,s.jsx)("ul",{className:o,children:(0,s.jsx)(i.Z,{searchedMovies:l})})}},8226:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(885),u=e(2791),c=e(6871),a="SearchForm_form__o80os",i="SearchForm_input__HOxJo",o="SearchForm_btn__TXrR3",s=e(184),f=function(){var n=(0,u.useState)(""),t=(0,r.Z)(n,2),e=t[0],f=t[1];(0,u.useEffect)((function(){f(e)}),[e]);var l=(0,c.s0)(),h=function(){f("")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{className:a,onSubmit:function(n){n.preventDefault(),l({search:"?query=".concat(e)}),h()},children:[(0,s.jsx)("input",{type:"text",placeholder:"Search movie",className:i,onChange:function(n){var t=n.target.value;return f(t.trim())},value:e}),(0,s.jsx)("button",{type:"submit",className:o,children:"Search"})]})})},l=e(5845),h=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(l.default,{})]})}},658:function(n,t,e){e.d(t,{C6:function(){return f},Mc:function(){return o},Sk:function(){return i},wr:function(){return a},ym:function(){return s}});var r=e(4569),u=e.n(r),c="905309a28b68a9146011759181c1a3d1";u().defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return u().get("/trending/movie/day",{params:{api_key:c}}).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}))},i=function(n){return u().get("/search/movie",{params:{api_key:c,query:n}}).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}))},o=function(n){return u().get("/movie/".concat(n),{params:{api_key:c}}).then((function(n){return n.data}))},s=function(n){return u().get("/movie/".concat(n,"/credits"),{params:{api_key:c}}).then((function(n){return n.data.cast})).catch((function(n){return console.log(n)}))},f=function(n){return u().get("/movie/".concat(n,"/reviews"),{params:{api_key:c,movie_id:n}}).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}))}}}]);
//# sourceMappingURL=226.31647e0e.chunk.js.map