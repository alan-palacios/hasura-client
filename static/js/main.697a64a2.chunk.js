(this["webpackJsonphasura-client"]=this["webpackJsonphasura-client"]||[]).push([[0],{59:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(82),r=a(75),s=a(81),c=a(83),i=a(80),l=a(17),o=a(47),d=a(42),j=(a(5),a(3));function b(){return Object(j.jsx)("div",{className:"fixed top-0 bg-gray-800 text-white w-full p-3 px-10 z-10",children:Object(j.jsx)("h2",{className:"text-2xl font-bold",children:"Cliente Hasura con Subscriptions"})})}var u,h=a(26),m=a(46),x=a(84);function O(e){var t=e.title;return Object(j.jsx)("div",{className:"font-bold text-2xl",children:t})}var p=Object(m.b)(u||(u=Object(h.a)(["\n\tquery MyQuery {\n\t\tmovie(limit: 50, offset: 0) {\n\t\t\tid\n\t\t\ttitle\n\t\t\toriginal_title\n\t\t\tposter_path\n\t\t\tgenreByGenre {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"])));function f(){var e=Object(x.a)(p),t=e.loading,a=e.error,n=e.data;return console.log(a),t?Object(j.jsx)("p",{children:"Cargando ..."}):a?Object(j.jsx)("p",{children:"Error"}):Object(j.jsxs)("div",{className:"p-10",children:[Object(j.jsx)(O,{title:"Movies"}),Object(j.jsx)("div",{className:"grid grid-cols-3 gap-4",children:n.movie.map((function(e){var t=e.id,a=e.title,n=e.original_title,r=e.poster_path,s=e.genreByGenre;return Object(j.jsx)("div",{className:"rounded-md bg-gray-100 my-5 shadow-md m-auto p-5 w-80 h-96 flex \r transform duration-300 ease-in-out hover:-translate-y-3 hover:bg-gray-300",children:Object(j.jsxs)("div",{className:"mb-0 m-auto ml-0 flex flex-col w-full h-full",children:[Object(j.jsx)("div",{className:"w-full h-full bg-gray-500 bg-cover",style:{backgroundImage:"url(https://www.themoviedb.org/t/p/original".concat(r)}}),Object(j.jsx)("h2",{className:"font-bold text-lg",children:a}),Object(j.jsx)("label",{children:n}),Object(j.jsx)("div",{className:"bg-gray-500 rounded-full w-auto max-w-max px-3 flex mt-2",children:Object(j.jsx)("label",{className:"m-auto text-white",children:s.name})})]})},t)}))})]})}var v,g=a(86),w=Object(m.a)(v||(v=Object(h.a)(["\nsubscription{\n  Users(limit: 20) {\n    id_user\n    name\n\tcreated_at\n  }\n}\n"])));function y(){var e=Object(g.a)(w),t=e.loading,a=e.error,n=e.data;return console.log(a),t?Object(j.jsx)("p",{children:"Cargando ..."}):a?Object(j.jsx)("p",{children:"Error"}):Object(j.jsxs)("div",{className:"p-10 pt-20",children:[Object(j.jsx)(O,{title:"Usuarios"}),Object(j.jsx)("div",{children:n.Users.map((function(e){var t=e.id_user,a=e.name,n=e.created_at;e.poster_path;return Object(j.jsx)("div",{className:"rounded-md bg-gray-100 my-5 shadow-md m-auto p-5 w-full  flex",children:Object(j.jsxs)("div",{className:"mb-0 m-auto ml-0",children:[Object(j.jsx)("h2",{className:"font-bold text-lg",children:a}),Object(j.jsxs)("label",{children:["Creation Date: ",n]})]})},t)}))})]})}function N(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(y,{}),Object(j.jsx)(f,{})]})}a(59);var k=new n.a({uri:"https://movies1.hasura.app/v1/graphql",headers:{"x-hasura-admin-secret":"A2AWfzsWLPMVnKzfOtZAmUOY07GkAZzk1D4ULzuveOuaZUklMCPYLBBJElRSxFfD"}}),z=new o.a({uri:"ws://movies1.hasura.app/v1/graphql",options:{reconnect:!0,connectionParams:{headers:{"x-hasura-admin-secret":"A2AWfzsWLPMVnKzfOtZAmUOY07GkAZzk1D4ULzuveOuaZUklMCPYLBBJElRSxFfD"}}}}),U=Object(r.a)((function(e){var t=e.query,a=Object(l.e)(t);return"OperationDefinition"===a.kind&&"subscription"===a.operation}),z,k),_=new s.a({cache:new c.a,link:U});Object(d.render)(Object(j.jsx)(i.a,{client:_,children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.697a64a2.chunk.js.map