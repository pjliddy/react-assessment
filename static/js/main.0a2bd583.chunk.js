(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),s=a.n(o),i=a(8),r=a(1),m=a(2),l=a(4),u=a(3),d=a(5),h=(a(15),function(e){var t=e.onShowItemForm,a=e.numItems,n=e.numUnchecked,o=e.showItemForm,s="ui primary button ".concat(o?"disabled":"");return c.a.createElement("div",{className:"page-header"},c.a.createElement("h1",{className:"ui header"},"My ToDo List"),c.a.createElement("div",{className:"toolbar"},c.a.createElement("div",{className:"header-data"},c.a.createElement("div",{className:"header-data-item"},c.a.createElement("span",{className:"header-data-label"},"Total Items: "),a),c.a.createElement("div",{className:"header-data-item"},c.a.createElement("span",{className:"header-data-label"},"Items Left To Do: "),n)),c.a.createElement("button",{className:s,onClick:t},c.a.createElement("i",{className:"icon plus"}),"New Item")))}),p=(a(16),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={title:"",description:"",date:"",checked:!1,isValid:!0},a.onFormCancel=function(e){e.preventDefault(),a.props.onCancel()},a.onFormSubmit=function(e){e.preventDefault(),a.state.title.length>0?a.submitForm():a.showMessage()},a.setDate=function(e){var t=e.split("-");a.setState({date:"".concat(t[1],"/").concat(t[2],"/").concat(t[0])})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"submitForm",value:function(){this.props.onSubmit({title:this.state.title,description:this.state.description,date:this.state.date,checked:this.state.checked})}},{key:"showMessage",value:function(){this.setState({isValid:!1}),this.titleInput.focus()}},{key:"componentDidMount",value:function(){this.titleInput.focus()}},{key:"render",value:function(){var e=this,t="ui icon error message ".concat(this.state.isValid?"hidden":"");return c.a.createElement("div",{className:"new-item"},c.a.createElement("div",{className:"ui segment"},c.a.createElement("h3",{className:"ui dividing header"},"New ToDo Item"),c.a.createElement("form",{className:"ui large form"},c.a.createElement("div",{className:"fields"},c.a.createElement("div",{className:"eleven wide field"},c.a.createElement("label",{htmlFor:"title"},"Item Title ",c.a.createElement("span",{className:"required"},"(required)")),c.a.createElement("input",{type:"text",id:"title",ref:function(t){e.titleInput=t},onChange:function(t){return e.setState({title:t.target.value})}})),c.a.createElement("div",{className:"five wide field"},c.a.createElement("label",{htmlFor:"date"},"Due Date"),c.a.createElement("input",{type:"date",id:"date",placeholder:"Date...",onChange:function(t){return e.setDate(t.target.value)}}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("textarea",{id:"description",rows:"3",onChange:function(t){return e.setState({description:t.target.value})}})),c.a.createElement("div",{className:"button-row"},c.a.createElement("button",{className:"ui button basic",onClick:this.onFormCancel},"Cancel"),c.a.createElement("button",{className:"ui button primary",onClick:this.onFormSubmit},"Create"))),c.a.createElement("div",{className:t},c.a.createElement("i",{className:"icon big frown outline"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"Your ToDo Item has to have a title."),c.a.createElement("p",null,"How else are you going to know what you need to do?")))))}}]),t}(c.a.Component)),f=(a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).toggleCheck=function(){a.props.onToggleItem(a.props.item)},a.deleteItem=function(){a.props.onDeleteItem(a.props.item)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.title,n=t.description,o=t.date,s=t.checked,i="icon large link square outline ".concat(s?"check":"");return c.a.createElement("div",{className:"item todo-item"},c.a.createElement("i",{className:i,onClick:function(){return e.toggleCheck()}}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},c.a.createElement("p",{className:"title"},a),o&&c.a.createElement("p",{className:"date"},c.a.createElement("strong",null,"Due on: "),o)),n&&c.a.createElement("p",{className:"description"},n),c.a.createElement("button",{className:"ui right floated button basic",onClick:function(){return e.deleteItem()}},c.a.createElement("i",{className:"icon trash alternate outline"}),"Delete Item")))}}]),t}(c.a.Component)),v=(a(18),function(e){var t=e.items,a=e.onToggleItem,n=e.onDeleteItem,o=t.map(function(e,t){return c.a.createElement(f,{item:e,key:t,onToggleItem:a,onDeleteItem:n})});return c.a.createElement("div",{className:"todo-list"},c.a.createElement("div",{className:"ui very relaxed divided list"},o))}),E=(a(19),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={items:[],numItems:0,numUnchecked:0,showItemForm:!1},a.onShowItemForm=function(){a.setState({showItemForm:!0})},a.onCloseItemForm=function(){a.setState({showItemForm:!1})},a.onCreateItem=function(e){a.setState({items:[].concat(Object(i.a)(a.state.items),[e]),showItemForm:!1,numItems:a.state.numItems+1,numUnchecked:a.state.numUnchecked+1})},a.onDeleteItem=function(e){a.setState({items:a.state.items.filter(function(t){return t!==e}),numItems:a.state.numItems-1,numUnchecked:a.state.numUnchecked+(e.checked?0:-1)})},a.onToggleItem=function(e){var t=Object.assign({},e);t.checked=!t.checked,a.setState(function(n){return{items:n.items.map(function(a){return a===e?t:a}),numUnchecked:a.state.numUnchecked+(t.checked?-1:1)}})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"ui container text"},c.a.createElement(h,{numItems:this.state.numItems,numUnchecked:this.state.numUnchecked,showItemForm:this.state.showItemForm,onShowItemForm:this.onShowItemForm}),this.state.showItemForm&&c.a.createElement(p,{onSubmit:this.onCreateItem,onCancel:this.onCloseItemForm}),c.a.createElement(v,{items:this.state.items,onToggleItem:this.onToggleItem,onDeleteItem:this.onDeleteItem}))}}]),t}(c.a.Component));s.a.render(c.a.createElement(E,null),document.querySelector("#root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0a2bd583.chunk.js.map