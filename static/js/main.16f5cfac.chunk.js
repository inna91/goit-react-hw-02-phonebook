(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={button:"Form_button__2R18b",ani9:"Form_ani9__382-U",input:"Form_input__1qw5t",label:"Form_label__22m0e"}},,,,,function(e,t,n){e.exports={container:"App_container__2aELG",wrap:"App_wrap__3gI-R",number:"App_number__3X2af"}},function(e,t,n){e.exports={section:"Section_section__b5_Cp",title:"Section_title__4c6OK"}},,function(e,t,n){e.exports={item:"ContactItem_item__nxvPZ",button:"ContactItem_button__1zXYj",ani9:"ContactItem_ani9__2BvnO"}},function(e,t,n){e.exports={label:"Filter_label__1KEql",input:"Filter_input__3cJjw"}},,function(e,t,n){e.exports={list:"ContactList_list__1Dod7"}},,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(12),o=n.n(i),s=(n(21),n(22),n(15)),l=n(3),u=n(4),m=n(6),b=n(5),d=n(10),h=n.n(d),j=function(e){var t=e.name,n=e.number,c=e.deleteContact;return Object(a.jsxs)("li",{className:h.a.item,children:[Object(a.jsxs)("p",{children:[t,": ",n]}),Object(a.jsx)("button",{className:h.a.button,onClick:c,children:"Delete"})]})},p=n(13),_=n.n(p),f=function(e){var t=e.contacts,n=e.deleteContact;return Object(a.jsx)("ul",{className:_.a.list,children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(a.jsx)(j,{name:c,number:r,deleteContact:function(){return n(t)}},t)}))})},x=n(14),O=n(2),v=n.n(O),C=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(x.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c={id:a,name:a,number:n.number};e.props.onSubmit(c),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:v.a.label,htmlFor:t,children:["Name",Object(a.jsx)("input",{className:v.a.input,type:"text",value:t,name:"name",onChange:this.handleChange,id:t,placeholder:"Enter contact name",required:!0})]}),Object(a.jsxs)("label",{className:v.a.label,htmlFor:n,children:["Number",Object(a.jsx)("input",{className:v.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,id:n,placeholder:"Enter contact number",required:!0})]}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add the new contact"})]})}}]),n}(c.Component),N=n(11),g=n.n(N),w=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{className:g.a.label,children:["\u0421ontact search",Object(a.jsx)("input",{className:g.a.input,type:"text",placeholder:"Search by name",value:t,onChange:n})]})},S=n(7),y=n.n(S),F=n(8),k=n.n(F);var A=function(e){var t=e.title,n=e.children;return Object(a.jsx)("section",{className:k.a.section,children:Object(a.jsxs)("div",{className:k.a.wrap,children:[t&&Object(a.jsx)("h2",{className:k.a.title,children:t}),n]})})},E=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.existNameHandler=function(t){var n=e.state.contacts,a=t.toLowerCase();return n.find((function(e){return e.name.toLowerCase()===a}))},e.addContact=function(t){var n=t.name;e.existNameHandler(n)?alert("".concat(n," is already in exist")):e.setState((function(e){var n=e.contacts;return{contacts:[t].concat(Object(s.a)(n))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,c=t.length,r=n.toLowerCase(),i=t.filter((function(e){return e.name.toLowerCase().includes(r)}));return Object(a.jsxs)("div",{className:y.a.container,children:[Object(a.jsx)(A,{title:"Phonebook",children:Object(a.jsx)(C,{onSubmit:this.addContact})}),Object(a.jsxs)(A,{title:"Contacts",children:[Object(a.jsx)(w,{value:n,onChange:this.changeFilter}),Object(a.jsx)("div",{className:y.a.wrap,children:Object(a.jsxs)("p",{className:y.a.number,children:["Number of contacts: ",c]})}),Object(a.jsx)(f,{contacts:i,deleteContact:this.deleteContact})]})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.16f5cfac.chunk.js.map