(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(16),a=n.n(c),o=(n(22),n(3)),l=n(4),i=n(6),u=n(5),h=n(17),j=n.n(h),m={getRandomEmployees:function(){return j.a.get("https://randomuser.me/api/?results=10")}},d=(n(41),n(0));var b=function(e){return Object(d.jsx)("form",{className:"search",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"employeeName"}),Object(d.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"name",type:"text",className:"form-control",placeholder:"Search the name of an employee you would like to find. ",id:"employee"}),Object(d.jsx)("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success",children:"Search"})]})})},p=(n(43),n(44)),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).filterById=function(e){e.preventDefault(),s.setState({employee:s.state.employee.filter((function(e){return e.name.first.value}))})},s}return Object(l.a)(n,[{key:"renderEmloyeeData",value:function(){return this.props.results.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.picture.medium})}),Object(d.jsx)("td",{children:e.name.first}),Object(d.jsx)("td",{children:e.name.last}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.location.city}),Object(d.jsx)("td",{children:e.location.country})]},e.login.uuid)}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Image"}),Object(d.jsxs)("th",{scope:"col",children:[Object(d.jsx)(p,{name:"caret-up",onClick:this.props.sortByFirstName,style:{color:"black",cursor:"pointer"}}),"First Name"]}),Object(d.jsxs)("th",{scope:"col",children:[Object(d.jsx)(p,{name:"caret-up",onClick:this.props.sortByLastName,style:{color:"black",cursor:"pointer"}}),"Last Name"]}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Location City"}),Object(d.jsx)("th",{scope:"col",children:"Location Country"})]})}),Object(d.jsx)("tbody",{children:this.renderEmloyeeData()})]})})}}]),n}(s.Component),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.results.filter((function(t){return t.name.first.includes(e.state.search)}));e.setState({results:n})},e.sortByFirstName=function(t){t.preventDefault(),e.setState({results:e.state.results.sort((function(e,t){return e.name.first>t.name.first?1:e.name.first<t.name.first?-1:void 0}))}),console.log("Sorting by FIRST name . . .")},e.sortByLastName=function(t){t.preventDefault(),e.setState({results:e.state.results.sort((function(e,t){return e.name.last>t.name.last?1:e.name.last<t.name.last?-1:void 0}))}),console.log("Sorting by LAST name . . .")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.getRandomEmployees().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{style:{minHeight:"80%"},children:[Object(d.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(d.jsx)(b,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(d.jsx)(f,{results:this.state.results,sortByFirstName:this.sortByFirstName,sortByLastName:this.sortByLastName})]})}}]),n}(s.Component);var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(y,{})})};n(48);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7e0b5a2a.chunk.js.map