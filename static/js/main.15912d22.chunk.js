(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(2),a=r(12),s=r.n(a),l=r(17),i=r(13),h=r(14),o=r(15),j=r(19),u=r(18);var d=function(e){return Object(n.jsx)("div",{className:12,children:e.children})};var b=function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:Object(n.jsx)("img",{alt:e.firstName,src:e.picture})}),Object(n.jsx)("td",{children:e.firstName}),Object(n.jsx)("td",{children:e.lastName}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"mailto:"+e.email,target:"__blank",children:e.email})}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.dob})]})};r(25);var m=function(e){return Object(n.jsx)("div",{className:"wrapper",children:e.children})};var O=function(e){return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Employee by First Name",id:"search"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search by First Name"}),Object(n.jsx)("button",{onClick:e.clearSearch,className:"btn btn-primary",children:"Clear Search"}),Object(n.jsx)("button",{onClick:e.sortSearch,className:"btn btn-primary",children:"Sort by Birthday"})]})})},f=r(16),p=r.n(f),x=function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")},v=function(e){Object(j.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={result:[],search:""},e.firstEmployee=function(){x().then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.searchEmployee=function(t){console.log(t),x(t).then((function(t){return e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var r=t.target.value,n=t.target.name;e.setState(Object(i.a)({},n,r))},e.handleFormSubmit=function(t){t.preventDefault();var r=e.state.result.filter((function(t){return t.name.first.includes(e.state.search)}));console.log(e.state.search),e.setState({result:r})},e.clearSearch=function(t){return t.preventDefault(),e.firstEmployee()},e.sortSearch=function(t){t.preventDefault();return e.state.result.sort((function(e,t){return e>t?-1:e<t?1:0}))},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.firstEmployee()}},{key:"render",value:function(){return Object(n.jsx)(m,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)(d,{children:[Object(n.jsx)("h2",{children:"Employee Directory"}),Object(n.jsx)(O,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,clearSearch:this.clearSearch,sortSearch:this.sortSearch})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(d,{children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Photo"}),Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Phone"}),Object(n.jsx)("th",{children:"DOB"})]})}),Object(n.jsx)("tbody",{children:Object(l.a)(this.state.result).map((function(e){return Object(n.jsx)(b,{picture:e.picture.medium,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,dob:e.dob.date},e.key)}))})]})})})]})})}}]),r}(c.Component);var y=function(){return Object(n.jsx)(v,{})};r(44);s.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.15912d22.chunk.js.map