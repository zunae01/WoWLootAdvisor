(this["webpackJsonpreact-spa"]=this["webpackJsonpreact-spa"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=n(5),i=n.n(s),u=n(6),l=n(1),m=n(2),f=n(3),h=n(4);var p=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={items:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/items/"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({items:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"GetAllItems"},r.a.createElement("p",null,this.state.items.map((function(e){return r.a.createElement("a",{href:"https://classic.wowhead.com/item="+e.id,key:e.id},"[",e.name,"]")}))))}}]),n}(a.Component),v=(n(16),n(9)),g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={items:[{name:"Ancient Qiraji Ripper",category:"itemSearch",bgcolor:"gray"},{name:"React",category:"itemSearch",bgcolor:"gray"},{name:"Vue",category:"itemSearch",bgcolor:"gray"}]},e.onDragStart=function(e,t){console.log("dragstart:",t),e.dataTransfer.setData("id",t)},e.onDragOver=function(e){e.preventDefault()},e.onDrop=function(t,n){var a=t.dataTransfer.getData("id"),r=e.state.items.filter((function(e){return e.name===a&&(e.category=n),e}));e.setState(Object(v.a)({},e.state,{items:r}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t={itemSearch:[],wishlist:[],itemPool:[],bin:[]};return this.state.items.forEach((function(n){t[n.category].push(r.a.createElement("div",{key:n.name,onDragStart:function(t){return e.onDragStart(t,n.name)},draggable:!0,className:"draggable",style:{backgroundColor:n.bgcolor,flexDirection:"row"}},n.name))})),r.a.createElement("div",{className:"container-drag"},r.a.createElement("div",{className:"wishlist",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"wishlist")}},r.a.createElement("span",{className:"task-header"},"wishlist"),t.wishlist),r.a.createElement("div",{className:"itemSearch",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"itemSearch")}},r.a.createElement("span",{className:"task-search"},"itemSearch"),t.itemSearch),r.a.createElement("div",{className:"itemPool",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"itemPool")}},r.a.createElement("span",{className:"task-pool"},"itemPool"),t.itemPool),r.a.createElement("div",{className:"bin",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"bin")}},r.a.createElement("span",{className:"task-bin"},"bin"),t.bin))}}]),n}(a.Component);var d=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={users:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/users/"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({users:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("ul",null,this.state.users.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))),r.a.createElement(p,null),r.a.createElement(g,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.fd57f71c.chunk.js.map