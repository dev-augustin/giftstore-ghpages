(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),c=(a(74),a(7)),s=a(8),i=(a(75),a(4)),u=a.n(i),m=a(9),p=a(12),d=a(13),h=a(15),v=a(14),f=a(59),g=a(118),E=a(10),b=a.n(E),y=(a(28),a(94),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).deleteAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.delete("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders/".concat(t));case 4:a=e.sent,console.log("deleted"),console.log(a.data),r=n.state.reserve.filter((function(e){return e.id!==t})),n.setState({reserve:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),n.state={reviews:[],flowers:[],Review:"",Rating:"",deleted:[],reserve:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders");case 3:t=e.sent,console.log(t.data),this.setState({reserve:t.data}),console.log(t.data[0].total),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("in cart page"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"my-cart-main-container"},r.a.createElement("h3",{className:"view-order-header"},"Order Summary"),r.a.createElement("div",{className:"buttons-table"},r.a.createElement(c.b,{to:"/",value:this.state.reserve}," ",r.a.createElement(f.a,{variant:"info",style:{marginRight:"35px"}},"Continue Shopping")," "),r.a.createElement(c.b,{to:"/myProfile",value:this.state.reserve}," ",r.a.createElement(f.a,{variant:"info"},"Continue to Place Order")," ")),r.a.createElement("div",{className:"order-container"},r.a.createElement(g.a,{className:"table-list",bordered:!0,striped:!0},r.a.createElement("thead",{bordered:!0,hover:!0,size:"sm",style:{backgroundColor:"lightgray"}},r.a.createElement("tr",{striped:!0,bordered:!0,hover:!0,size:"sm",style:{backgroundColor:"lightgray"}},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"SubTotal"),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",{striped:!0},this.state.reserve.map((function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement("img",{src:t.productImage,alt:"flowers",height:"175px",width:"150px"})),r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,t.price),r.a.createElement("td",null,t.total),r.a.createElement("td",{id:"table-buttons"},r.a.createElement(c.b,{to:"/editorder/"+t.id}," ",r.a.createElement(f.a,{variant:"link",style:{fontSize:"20px"}},"Update Qty"))),r.a.createElement("td",null,r.a.createElement(f.a,{variant:"link",style:{fontSize:"20px"},onClick:function(a){e.deleteAPI(t.id)}},"Delete Item")))}))))),r.a.createElement("div",{className:"buttons-table"},r.a.createElement(c.b,{to:"/",value:this.state.reserve}," ",r.a.createElement(f.a,{variant:"info",style:{marginRight:"35px"}},"Continue Shopping")," "),r.a.createElement(c.b,{to:"/myProfile",value:this.state.reserve}," ",r.a.createElement(f.a,{variant:"info"},"Continue to Place Order")," "))))}}]),a}(n.Component)),x=a(23),w=(a(100),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault(),console.log("Onchange",e.target.value),n.setState(Object(x.a)({},e.target.name,e.target.value))},n.onSubmitProfile=function(e){e.preventDefault();var t={fullName:n.state.fullName,email:n.state.email,phone:n.state.phone,address:n.state.address};n.postAPI(t)},n.postAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.post("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/customer",t);case 4:a=e.sent,console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error",e.t0);case 11:n.props.history.push("/confirmation");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),n.state={reviews:[],flowers:[],Review:"",Rating:"",deleted:[],reserve:[],fullName:"",phone:"",email:"",address:"",finaltotal:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders");case 3:for(t=e.sent,this.setState({reserve:t.data}),a=[],n=[],r=0;r<t.data.length;r++)a[r]=t.data[r].total,n.push(a[r]),console.log(n);console.log(n.reduce((function(e,t){return e+t}),0)),l=n.reduce((function(e,t){return e+t}),0).toFixed(2),this.setState({finaltotal:l}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error",e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"final-view-order-header"},"Order Confirmation"),r.a.createElement("div",{className:"final-cart-main-container"},r.a.createElement("div",{className:"final-order-container"},r.a.createElement(g.a,{className:"final-table-list",bordered:!0,striped:!0},r.a.createElement("thead",{bordered:!0,hover:!0,size:"sm",style:{backgroundColor:"lightgray"}},r.a.createElement("tr",{striped:!0,bordered:!0,hover:!0,size:"sm",style:{backgroundColor:"lightgray"}},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Qty"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"SubTotal"))),r.a.createElement("tbody",{striped:!0},this.state.reserve.map((function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("img",{src:e.productImage,alt:"flowers",height:"150px",width:"150px"})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.total))}))))),r.a.createElement("div",{className:"final-form-container"},r.a.createElement("h3",null,"Total amount due : $ ",this.state.finaltotal),r.a.createElement("h5",{className:"customer-header"},"Customer Infortmation"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",{class:"form-label",style:{marginTop:"40px"}},"Full Name:  "),r.a.createElement("input",{style:{marginRight:"30px"},className:"form-input",type:"text",name:"fullName",value:this.state.fullName,onChange:this.onChange,placeholder:"Enter first & last name"}),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"Email:   "),r.a.createElement("input",{className:"form-input",type:"text",name:"email",value:this.state.email,onChange:this.onChange,placeholder:"valid email"}),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"Phone:  "),r.a.createElement("input",{className:"form-input",type:"text",name:"phone",value:this.state.phone,onChange:this.onChange,placeholder:"(000-000-0000)"}),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"Address:  "),r.a.createElement("input",{style:{marginRight:"10px",height:"60px"},className:"form-input",id:"text-area",type:"text",name:"address",value:this.state.address,onChange:this.onChange,placeholder:"address"}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h5",{className:"payment-header "}," Payment Infortmation"),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"Name on Card:  "),r.a.createElement("input",{style:{marginRight:"30px"},className:"form-input",type:"text",name:"Phone",value:this.state.cardName,onChange:this.onChange,placeholder:"(name on card)"}),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"Credit Card Number:  "),r.a.createElement("input",{style:{marginRight:"67px"},className:"form-input",type:"text",name:"LastName",value:this.state.cardNumber,onChange:this.onChange,placeholder:"card number"}),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"CVV:  "),r.a.createElement("input",{style:{marginLeft:"30px"},className:"form-input",type:"text",name:"Email",value:this.state.cvv,onChange:this.onChange,placeholder:"cvv"}),r.a.createElement("br",null),r.a.createElement("label",{class:"form-label"},"Expiry Date:  "),r.a.createElement("input",{style:{marginRight:"20px"},className:"form-input",type:"text",name:"Phone",value:this.state.label,onChange:this.onChange,placeholder:"(mm/dd/yy)"}),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("label",{id:"reserve-submit"},r.a.createElement(c.b,{to:"/confirmation"},"  ",r.a.createElement("input",{type:"submit",style:{marginTop:"10px",paddingLeft:"20px",marginRight:"80px",textAlign:"center"},value:"Submit Order",onClick:this.onSubmitProfile})," ")),r.a.createElement(c.b,{to:"/myCart"},r.a.createElement("input",{type:"submit",value:"View Cart"})))),r.a.createElement("p",{style:{fontFamily:"cursive"}},"(You have 24hrs to cancel after confirming your Order)"))))}}]),a}(n.Component)),k=(a(101),{api_key:"A83E3FFD597F48D891599CB060259163",type:"category",url:"https://www.amazon.com/s?k=gift+baskets&rh=n%3A2255572011&pd_rd_r=14ca9469-a37d-4280-87bf-c973a1221454&pd_rd_w=6hGNi&pd_rd_wg=2Rkvd&pf_rd_p=c856543c-2236-42b5-8daa-bc8c644a2565&pf_rd_r=M7YNTCAX2KA01QN71Y41&qid=1591021006&ref=sxts_ref_scx_alster_1"}),C=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).searchRequest=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://cors-anywhere.herokuapp.com/https://api.rainforestapi.com/request",{params:k});case 3:t=e.sent,n.setState({reserve:t.data.category_results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.onSubmit=function(e,t,a,r,l){alert("Proceed to add quantity"),console.log(a,l,t),console.log(r),e.preventDefault(),n.props.history.push({pathname:"/view/",state:{title:a,price:r,productImage:t,productId:l}})},n.state={displayResults:"",reserve:[],price:3,title:"Candy & Chocolate Gifts"},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.searchRequest()}},{key:"render",value:function(){var e=this;return console.log("inside GiftBasket"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"gift-basket-header"},"Amazon Gift Baskets"),r.a.createElement("div",{className:"results-container"},this.state.reserve.map((function(t,a){return r.a.createElement("div",{className:"poster-results"},r.a.createElement("ul",{key:t.id,className:"lists-display"},r.a.createElement("li",{className:"results-li"}," ",r.a.createElement("img",{src:t.image,alt:"different Images",height:"300px",width:"250px"}),r.a.createElement("h5",{id:"item-title"},e.state.title),r.a.createElement("h5",{id:"item-price"},"$",e.state.price+(2*Math.random()).toFixed(2)),r.a.createElement("button",{className:"add-button",onClick:function(a){e.onSubmit(a,t.image,e.state.title,e.state.price+(2*Math.random()).toFixed(2),t.asin,t.id)}},"Add"))))}))))}}]),a}(n.Component),N=(a(102),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).onSubmit=function(e,t,a,r,l){alert("Proceed to add quantity"),console.log(a,l,t),console.log(r),e.preventDefault(),n.props.history.push({pathname:"/view/",state:{title:a,price:r,productImage:t,productId:l}})},n.state={reviews:[],flowers:[],Review:"",Rating:"",reserve:[],quantity:"",total:0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/flowers");case 3:t=e.sent,console.log(t.data),this.setState({reserve:t.data}),console.log(t.data[1].productId),console.log(t.data[1].price),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"results-container"},this.state.reserve.map((function(t){return r.a.createElement("div",{className:"poster-results"},r.a.createElement("ul",{key:t.id,className:"lists-display"},r.a.createElement("li",{className:"results-li"}," ",r.a.createElement("img",{src:t.productImage,alt:"different Images",height:"300px",width:"250px"})," ",r.a.createElement("h5",{id:"item-title"},t.title," "),r.a.createElement("h5",{id:"item-price"},"$ ",t.price," "),r.a.createElement("button",{className:"add-button",onClick:function(a){e.onSubmit(a,t.productImage,t.title,t.price,t.productId)}},"Add"))))}))))}}]),a}(n.Component)),I=a(120),O=a(121),S=a(119);a(103);function j(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"route-container"},r.a.createElement(I.a,{className:"nav-color",bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(I.a.Brand,{as:c.b,to:"/"},r.a.createElement("h1",{id:"store-name"},"Gift Store")),r.a.createElement(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(I.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O.a,{className:"mr-auto",id:"nav"},r.a.createElement(O.a.Link,{href:"/"},"Home"),r.a.createElement(S.a,{title:"Products",id:"basic-nav-dropdown"},r.a.createElement(S.a.Item,{href:"/giftBasket/3.1"},"Gift Baskets"),r.a.createElement(S.a.Item,{href:"/flowers/3.2"},"Flowers"),r.a.createElement(S.a.Item,{href:"/partySupplies/3.3"},"Party Supplies")),r.a.createElement(O.a.Link,{href:"/myCart"},"My Cart"),r.a.createElement(O.a.Link,{href:"/myProfile"},"Order Summary"),r.a.createElement(O.a.Link,{href:"/contact"},"Contact"))))))}a(107);var P=a(64),q=a.n(P),A=a(65),_=a.n(A),F=a(66),R=a.n(F);function D(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-container"},r.a.createElement("div",null,r.a.createElement("img",{style:{height:"400px",width:"250px"},src:_.a,alt:"slide"}),r.a.createElement(c.b,{to:"/flowers/3.2",className:"link"}," ",r.a.createElement("p",null,"flowers for special occasion"))),r.a.createElement("div",null,r.a.createElement("img",{style:{height:"400px",width:"250px"},src:R.a,alt:"slide"}),r.a.createElement(c.b,{to:"/partySupplies/3.3",className:"link"},r.a.createElement("p",{className:"captions"},"party Supplies"))),r.a.createElement("div",null,r.a.createElement("img",{style:{height:"400px",width:"250px"},src:q.a,alt:"slide"}),r.a.createElement(c.b,{to:"/giftBasket/3.1",className:"link"},r.a.createElement("p",null,"amazon special gift baskets")))))}a(108);var M=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault(),console.log("Onchange",e.target.value),n.setState(Object(x.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){console.log(n.state.Review),e.preventDefault();var t={review:n.state.Review,email:n.state.email};n.postAPI(t)},n.postAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.post("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/form",t);case 4:a=e.sent,console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),n.state={reviews:[],Review:"",email:"",reserve:[]},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-div-review"},r.a.createElement("div",null,r.a.createElement("h4",{id:"review-heading"}," Questions\xa0|\xa0Suggestions")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",{className:"label-review"},"Questions| Feedback"),r.a.createElement("input",{className:"input-review",style:{height:"100px",width:"250px"},type:"text",name:"Review",value:this.state.Review,onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{className:"label-review"},"Email "),r.a.createElement("input",{className:"input-review-email",type:"text",name:"email",value:this.state.email,onChange:this.onChange,placeholder:"email address"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/thankyou"},"  ",r.a.createElement("input",{type:"submit",value:"Submit",id:"submit-button"})," ")))))}}]),a}(n.Component);a(109);function B(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact-main-container"},r.a.createElement("div",{className:"contacts-main-div"},r.a.createElement("h4",null,"Contact Us|Locations"),r.a.createElement("p",null,"Ph: 123-456-7890",r.a.createElement("br",null),"Address: 123, N Ervay St, Dallas - 75204"),r.a.createElement("p",null,"Email: giftStore@gmail.com",r.a.createElement("br",null),r.a.createElement("span",null,"Hours of Operations "),r.a.createElement("br",null),"Mon-Sun:10:00 am-10:00 pm"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"feedback-main-div"},r.a.createElement(M,null))))}a(110);var Q=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log("inside handleChange"),console.log(e.target.name,e.target.value),e.preventDefault(),n.setState(Object(x.a)({},e.target.name,e.target.value))},n.onSubmit=function(e,t,a,r,l){e.preventDefault(),console.log(r,l,a,t),console.log(n.state.quantity*a);var o=(n.state.quantity*a).toFixed(2);console.log(o),n.setState({total:o});var c={quantity:n.state.quantity,price:a,productImage:r,title:t,productId:l,total:o};console.log(c),n.postAPI(c)},n.onContinue=function(e,t,a,r,l){alert("Item added to cart. Continue shopping"),e.preventDefault();var o=(n.state.quantity*a).toFixed(2);n.setState({total:o});var c={quantity:n.state.quantity,price:a,productImage:r,title:t,productId:l,total:o};console.log(c),n.postContinueAPI(c)},n.postContinueAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.post("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders",t);case 4:a=e.sent,console.log(a.data),n.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.postAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.post("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders",t);case 4:a=e.sent,console.log(a.data),n.props.history.push("/myCart"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.state={quantity:"",total:0},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return console.log("inside render ",this.props.location.state.productId),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("div",{className:"view-container"},r.a.createElement("div",{className:"item-details"},r.a.createElement("img",{className:"image-view",src:this.props.location.state.productImage,height:"300px",width:"250px",alt:"flowers"}),r.a.createElement("h5",{id:"single-item-title"},this.props.location.state.title),r.a.createElement("h5",{id:"single-item-price"},"Price: $",this.props.location.state.price),r.a.createElement("br",null),r.a.createElement("label",null,"Quantity"),"\xa0\xa0",r.a.createElement("input",{type:"text",value:this.state.quantity,id:this.props.location.state.productId,name:"quantity",style:{width:"40px"},onChange:this.handleChange})),r.a.createElement("div",{className:"button-items"},r.a.createElement("br",null),r.a.createElement("button",{id:"checkOut-button",onClick:function(t){e.onSubmit(t,e.props.location.state.title,e.props.location.state.price,e.props.location.state.productImage,e.props.location.state.productId)}},"Add & View Item in Cart"),r.a.createElement(c.b,{to:"/flowers/3.2"},r.a.createElement("button",{onClick:function(t){e.onContinue(t,e.props.location.state.title,e.props.location.state.price,e.props.location.state.productImage,e.props.location.state.productId)},id:"continue-button"},"Continue Shopping"))))))}}]),a}(n.Component),T=(a(111),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).onSubmit=function(e,t,a,r,l){alert("Proceed to add quantity"),console.log(a,l,t),console.log(r),e.preventDefault(),n.props.history.push({pathname:"/view/",state:{title:a,price:r,productImage:t,productId:l}})},n.state={reviews:[],flowers:[],Review:"",Rating:"",reserve:[],quantity:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/party");case 3:t=e.sent,console.log(t.data),this.setState({reserve:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"results-container"},this.state.reserve.map((function(t){return r.a.createElement("div",{className:"poster-results"},r.a.createElement("ul",{key:t.id,className:"lists-display"},r.a.createElement("li",{className:"results-li"}," ",r.a.createElement("img",{src:t.productImage,alt:"different Images",height:"300px",width:"250px"})," ",r.a.createElement("h5",{id:"item-title"},t.title," "),r.a.createElement("h5",{id:"item-price"},"$ ",t.price," "),r.a.createElement("button",{className:"add-button",onClick:function(a){e.onSubmit(a,t.productImage,t.title,t.price,t.productId)}},"Add"))))}))))}}]),a}(n.Component)),z=(a(112),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log("inside handleChange"),console.log(e.target.name,e.target.value),e.preventDefault(),n.setState(Object(x.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t=(n.state.quantity*n.state.price).toFixed(2);console.log(t),n.setState({total:t});var a={price:n.state.price,productId:n.state.productId,productImage:n.state.productImage,quantity:n.state.quantity,title:n.state.title,total:t};n.putAPI(a)},n.putAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.put("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders/"+n.props.match.params.id,t);case 4:a=e.sent,console.log(a.data),n.props.history.push("/myCart"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.onContinue=function(e){alert("Quantity updated to cart. Continue shopping"),e.preventDefault();var t=(n.state.quantity*n.state.price).toFixed(2);console.log(t),n.setState({total:t});var a={price:n.state.price,productId:n.state.productId,productImage:n.state.productImage,quantity:n.state.quantity,title:n.state.title,total:t};n.putContinueAPI(a)},n.putContinueAPI=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,b.a.put("https://cors-anywhere.herokuapp.com/https://spring-gift-store.herokuapp.com/rosy_api/v1/orders/"+n.props.match.params.id,t);case 4:a=e.sent,console.log(a.data),n.props.history.push("/flowers/3.2"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.state={id:n.props.match.params.id,reserve:[],price:"",productId:"",productImage:"",quantity:"",title:"",total:0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/rosy_api/v1/orders/"+this.props.match.params.id);case 3:t=e.sent,console.log(t.data.price),this.setState({price:t.data.price,productId:t.data.productId,productImage:t.data.productImage,quantity:t.data.quantity,title:t.data.title,total:t.data.total}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("div",{className:"view-container"},r.a.createElement("h3",{className:"edit-order-header"},"Edit your Order Quantity"),r.a.createElement("div",{className:"item-details"},r.a.createElement("img",{className:"image-view",src:this.state.productImage,height:"300px",width:"250px",alt:"flowers"}),r.a.createElement("h5",{id:"single-item-title"},this.state.title),r.a.createElement("h5",{id:"single-item-price"},"Price: $",this.state.price),r.a.createElement("label",null,"Quantity"),"\xa0\xa0",r.a.createElement("input",{type:"text",value:this.state.quantity,id:this.state.productId,name:"quantity",style:{width:"40px"},onChange:this.handleChange})),r.a.createElement("div",{className:"button-items"},r.a.createElement("br",null),r.a.createElement("button",{id:"checkOut-button",onClick:function(t){e.onSubmit(t,e.state.title,e.state.price,e.state.productImage,e.state.productId)}},"Go to Checkout"),r.a.createElement(c.b,{to:"/flowers/3.2"},r.a.createElement("button",{onClick:function(t){e.onContinue(t,e.state.title,e.state.price,e.state.productImage,e.state.productId)},id:"continue-button"},"Continue Shopping"))))))}}]),a}(n.Component));function L(){return r.a.createElement("div",null,r.a.createElement("h4",{style:{textAlign:"center",color:"gray",fontFamily:"cursive",marginTop:"100px"}},"Order placed successfully. ",r.a.createElement("br",null),"Confirmation Number: AAAA123243234"))}function G(){return r.a.createElement("div",null,r.a.createElement("h4",{style:{textAlign:"center",color:"gray",fontFamily:"cursive",marginTop:"100px"}},"Thank You. ",r.a.createElement("br",null),"Your email will be responded within two working days."))}var $=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:D}),r.a.createElement(s.a,{exact:!0,path:"/myCart",component:y}),r.a.createElement(s.a,{exact:!0,path:"/myProfile",component:w}),r.a.createElement(s.a,{exact:!0,path:"/giftBasket/3.1",component:C}),r.a.createElement(s.a,{exact:!0,path:"/flowers/3.2",component:N}),r.a.createElement(s.a,{exact:!0,path:"/review",component:M}),r.a.createElement(s.a,{exact:!0,path:"/contact",component:B}),r.a.createElement(s.a,{exact:!0,path:"/view",component:Q}),r.a.createElement(s.a,{exact:!0,path:"/editorder/:id",component:z}),r.a.createElement(s.a,{exact:!0,path:"/confirmation",component:L}),r.a.createElement(s.a,{exact:!0,path:"/thankyou",component:G}),r.a.createElement(s.a,{exact:!0,path:"/partySupplies/3.3",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/biscuits.d4b56f62.jpeg"},65:function(e,t,a){e.exports=a.p+"static/media/flowers.d8b99629.jpeg"},66:function(e,t,a){e.exports=a.p+"static/media/birthday-table.52d5edd1.jpeg"},69:function(e,t,a){e.exports=a(113)},74:function(e,t,a){},75:function(e,t,a){},94:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.01818bb2.chunk.js.map