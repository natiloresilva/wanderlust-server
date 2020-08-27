(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{140:function(e,t,a){},216:function(e,t,a){e.exports=a(542)},236:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},542:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(18),c=a(8),s=a(9),u=a(16),m=a(13),h=a(12),p=(a(140),a(17)),d=a(48),g=a(5),v=a(583),f=a(14),b=a.n(f),E=new(function(){function e(){Object(c.a)(this,e),this.auth=b.a.create({baseURL:"https://ironhack-wanderlust.herokuapp.com/",withCredentials:!0})}return Object(s.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.email;return this.auth.post("/auth/signup",{username:t,password:a,email:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return console.log("logout service"),this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),y=r.a.createContext(),k=y.Consumer,C=y.Provider,w=function(e){return function(t){Object(m.a)(n,t);var a=Object(h.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"handleEditUser",value:function(){console.log("handleEditUser")}},{key:"render",value:function(){var t=this;return r.a.createElement(k,null,(function(a){var n=a.login,i=a.signup,l=a.user,o=a.logout,c=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:i,user:l,logout:o,isLoggedin:c,handleEditUser:t.handleEditUser},t.props))}))}}]),n}(r.a.Component)},S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.username,n=t.password;E.signup({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.username,n=t.password;E.login({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log("error")}))},e.logout=function(){E.logout().then((function(){e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,i=this.login,l=this.logout,o=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(C,{value:{isLoggedin:a,user:n,login:i,logout:l,signup:o}},this.props.children)}}]),a}(r.a.Component),j=(a(236),a(579)),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:this.props.handleClickButton},this.props.text)}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",email:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password,i=a.email;console.log(e.state),E.signup({username:n,password:r,email:i})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,i=t.email,l=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",{className:"title-signup"},"Sign up!"),r.a.createElement("form",{className:l.root,noValidate:!0,autoComplete:"off",onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement(v.a,{id:"outlined-basic",label:"Username",variant:"outlined",name:"username",value:a,onChange:this.handleChange}),r.a.createElement(v.a,{id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:i,onChange:this.handleChange}),r.a.createElement(v.a,{id:"outlined-basic",label:"Password",variant:"outlined",name:"password",type:"password",value:n,onChange:this.handleChange}),r.a.createElement("div",{className:"container-button"},r.a.createElement(O,{handleClickButton:this.handleFormSubmit,text:"Signup"}))),r.a.createElement("div",{className:"login-text"},r.a.createElement("span",null,"Already have account? "),r.a.createElement(o.b,{to:"/login"},r.a.createElement("span",null,"Login"))))}}]),a}(n.Component),N=w(Object(g.a)((function(e){return{root:{"& > *":{width:"80%",margin:"20px 10%"}}}}),{withTheme:!0})(x)),D=(a(241),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;console.log("Login -> form submit",{username:n,password:r}),e.props.login({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",{className:"title-login"},"Login"),r.a.createElement("form",{className:n.root,noValidate:!0,autoComplete:"off"},r.a.createElement(v.a,{id:"outlined-basic",label:"Username",variant:"outlined",name:"username",value:t,onChange:this.handleChange}),r.a.createElement(v.a,{id:"outlined-basic",label:"Password",variant:"outlined",name:"password",type:"password",value:a,onChange:this.handleChange}),r.a.createElement("div",{className:"container-button"},r.a.createElement(O,{handleClickButton:this.handleFormSubmit,text:"Login"}))),r.a.createElement("div",{className:"signup-text"},r.a.createElement("span",null,"Don\u2019t have an account? "),r.a.createElement(o.b,{to:"/signup"},r.a.createElement("span",null,"Signup!"))))}}]),a}(n.Component)),B=w(Object(g.a)((function(e){return{root:{"& > *":{width:"80%",margin:"20px 10%"}}}}),{withTheme:!0})(D)),_=a(196),L=a.n(_),F=(a(242),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"planet"}),r.a.createElement("div",{className:"positioning-container"},r.a.createElement("div",{className:"spinning-container"},r.a.createElement("div",{className:"airplane-container"},r.a.createElement(L.a,null)))))}}]),a}(n.Component));a(244);var A=function(e){return r.a.createElement("div",{onClick:e.handleClickPresentation},r.a.createElement(F,null),r.a.createElement("h1",{className:"title-presentation"},"Wanderlust"))},T=a(131),P=a(584),z=a(585),M=a(586),R=a(197),K=a.n(R),V=a(198),W=a.n(V),H=a(125),I=a.n(H),U=a(587),Y=(a(245),Object(P.a)({root:{width:"100%",position:"fixed",bottom:0,display:"flex",justifyContent:"space-around",alignItems:"center"}}));function J(){var e=Y();return r.a.createElement(z.a,{className:e.root},r.a.createElement(o.b,{to:"/home"},r.a.createElement(M.a,{label:"Home",icon:r.a.createElement(K.a,null)})),r.a.createElement(o.b,{to:"/trips/create"},r.a.createElement(U.a,{className:"fab",size:"small",color:"secondary","aria-label":"add"},r.a.createElement(I.a,null))),r.a.createElement(o.b,{to:"/profile"},r.a.createElement(M.a,{label:"Profile",icon:r.a.createElement(W.a,null)})))}var Z=a(588),q=a(589),G=a(593),Q=a(591),X=a(590),$=a(592),ee=a(594),te=a(199),ae=a.n(te),ne=Object(P.a)({root:{marginTop:"30px"},cards:{display:"flex",justifyContent:"space-between"}});function re(e){var t=ne(),a=e.travel.trip,n=a.returnDate,i=a.startDate,l=a.travelCity,o=a._id,c=Object(p.g)();return r.a.createElement(Z.a,{className:t.root},r.a.createElement(q.a,null,r.a.createElement(X.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:"https://www.expreso.info/files/2020-04/Felices_Vacaciones.jpg",title:"Contemplative Reptile"}),r.a.createElement(Q.a,null,r.a.createElement($.a,{gutterBottom:!0,variant:"h5",component:"h2"},l),r.a.createElement($.a,{variant:"body2",color:"textSecondary",component:"p"},"Start Date: ",i,r.a.createElement("br",null),"Return Date: ",n))),r.a.createElement(G.a,{className:t.cards},r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(){c.push("/trips/detail/".concat(o))}},"View Details"),r.a.createElement(ee.a,{"aria-label":"delete",className:t.margin,onClick:function(t){b.a.delete("".concat("https://ironhack-wanderlust.herokuapp.com/","/travel/trips/").concat(o)).then((function(){e.callbackAction()})).catch((function(e){return console.log(e)}))}},r.a.createElement(ae.a,{fontSize:"small"}))))}var ie=a(546),le=a(206),oe=a(200),ce=a.n(oe),se=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setSearch=n.setSearch.bind(Object(u.a)(n)),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n.state={search:""},n}return Object(s.a)(a,[{key:"setSearch",value:function(e){this.setState({search:e.target.value})}},{key:"handleClick",value:function(){this.props.handleSearch(this.state.search)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ie.a,{className:e.root},r.a.createElement(le.a,{className:e.input,placeholder:"Search",inputProps:{"aria-label":"search google maps"},onChange:this.setSearch}),r.a.createElement(ee.a,{type:"submit",className:e.iconButton,"aria-label":"search",onClick:this.handleClick},r.a.createElement(ce.a,null))))}}]),a}(r.a.Component),ue=Object(g.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"90%",marginLeft:"5%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}),{withTheme:!0})(se),me=w(function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getTrips=function(){b.a.get("".concat("https://ironhack-wanderlust.herokuapp.com/","/travel/trips"),{withCredentials:!0}).then((function(e){n.setState({trips:e.data})})).catch((function(e){console.log(e)}))},n.handleSearch=n.handleSearch.bind(Object(u.a)(n)),n.handleCallbackAction=n.handleCallbackAction.bind(Object(u.a)(n)),n.state={trips:[],textSearch:"",filterTrips:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getTrips()}},{key:"handleCallbackAction",value:function(){console.log("handleCallbackAction"),this.getTrips()}},{key:"notTripsVerify",value:function(){return r.a.createElement("div",{className:"container-nottrips"},r.a.createElement($.a,{variant:"body2",color:"textSecondary",component:"p"},"You still do not have trips, create a new one and let the adventure begin!"))}},{key:"showAllTrips",value:function(){var e=this;if(0===this.state.trips.length)return this.notTripsVerify();var t=Object(T.a)(this.state.trips).map((function(t){return r.a.createElement(re,{key:t._id,travel:{trip:t},callbackAction:e.handleCallbackAction})}));return r.a.createElement("div",null,t)}},{key:"showFilterTrips",value:function(){var e=this;if(0===this.state.trips.length)return this.notTripsVerify();var t=Object(T.a)(this.state.trips).filter((function(t){return!!t.travelCity.toLowerCase().includes(e.state.textSearch.toLowerCase())})).map((function(e){return r.a.createElement(re,{key:e._id,travel:{trip:e}})}));return r.a.createElement("div",null,t)}},{key:"handleSearch",value:function(e){this.setState({textSearch:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-home"},r.a.createElement("div",{className:"title-home"},r.a.createElement($.a,{gutterBottom:!0,variant:"h3",component:"h3"},"Hello, ",this.props.user.username," !")),r.a.createElement(ue,{handleSearch:this.handleSearch}),this.state.textSearch.length>0?this.showFilterTrips():this.showAllTrips()),r.a.createElement(J,null))}}]),a}(n.Component)),he=a(100);var pe=w((function(e){var t=e.component,a=e.isLoggedin,n=Object(he.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(p.a,{to:"/home"}):r.a.createElement(t,e)}}))}));var de=w((function(e){var t=e.component,a=e.isLoggedin,n=Object(he.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))})),ge=(a(246),a(550)),ve=a(596),fe=a(547),be=a(545),Ee=a(548),ye=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.travelCity,r=t.startDate,i=t.returnDate;b.a.post("".concat("https://ironhack-wanderlust.herokuapp.com/","/travel/trips"),{travelCity:a,startDate:r,returnDate:i},{withCredentials:!0}).then((function(e){var t=e.data;console.log(t,"TRAVEL"),n.props.history.push("/home")})).catch((function(e){console.log(e)})),n.setState({travelCity:"",startDate:"",returnDate:""})},n.goBack=function(){n.props.history.push("/home")},n.handleChangeSelect=function(e){n.setState({travelCity:e.target.value})},n.state={travelCity:"",startDate:"",returnDate:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.travelCity,a=e.startDate,n=e.returnDate,i=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",{className:"title-newtrip"},"Create a new trip"),r.a.createElement("form",{className:i.root,noValidate:!0,autoComplete:"off"},r.a.createElement(be.a,{className:i.formControl},r.a.createElement(ge.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"City"),r.a.createElement(Ee.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:t,onChange:this.handleChangeSelect,displayEmpty:!0,className:i.selectEmpty},r.a.createElement(ve.a,{value:"Barcelona"},"Barcelona"),r.a.createElement(ve.a,{value:"Amsterdam"},"Amsterdam"),r.a.createElement(ve.a,{value:"Berlin"},"Berlin"),r.a.createElement(ve.a,{value:"Krakow"},"Krakow"),r.a.createElement(ve.a,{value:"London"},"London"),r.a.createElement(ve.a,{value:"Madrid"},"Madrid"),r.a.createElement(ve.a,{value:"Milan"},"Milan"),r.a.createElement(ve.a,{value:"Moscow"},"Moscow"),r.a.createElement(ve.a,{value:"Munich"},"Munich"),r.a.createElement(ve.a,{value:"Oslo"},"Oslo"),r.a.createElement(ve.a,{value:"Palermo"},"Palermo"),r.a.createElement(ve.a,{value:"Paris"},"Paris"),r.a.createElement(ve.a,{value:"Rome"},"Rome"),r.a.createElement(ve.a,{value:"Sydney"},"Sydney"),r.a.createElement(ve.a,{value:"Tokyo"},"Tokyo"),r.a.createElement(ve.a,{value:"Valencia"},"Valencia"),r.a.createElement(ve.a,{value:"Zurich"},"Zurich")),r.a.createElement(fe.a,null,"Pick a city!")),r.a.createElement(v.a,{id:"date",label:"Start Date",type:"date",name:"startDate",value:a,className:i.textField,InputLabelProps:{shrink:!0},onChange:this.handleChange}),r.a.createElement(v.a,{id:"date",label:"Return Date",type:"date",name:"returnDate",value:n,className:i.textField,InputLabelProps:{shrink:!0},onChange:this.handleChange})),r.a.createElement("div",{className:"container-createtrip-buttons"},r.a.createElement(O,{type:"button",text:"Back",handleClickButton:this.goBack}),r.a.createElement(O,{handleClickButton:this.handleFormSubmit,text:"Create trip"})),r.a.createElement(J,null))}}]),a}(n.Component),ke=w(Object(g.a)((function(e){return{root:{"& > *":{width:"80%",margin:"20px 10%"}}}}),{withTheme:!0})(ye)),Ce=(a(247),a(128)),we={width:"90%",height:"250px"},Se=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),console.log(e),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Ce.Map,{google:this.props.google,zoom:12,style:we,initialCenter:{lat:this.props.lat,lng:this.props.lng}})}}]),a}(n.Component),je=Object(Ce.GoogleApiWrapper)({apiKey:"AIzaSyCK_tzHpBSY3rrUNdsC8RTLimE8kw8VYjI"})(Se),Oe=Object(P.a)({root:{marginTop:"30px"}});var xe=function(e){var t=Oe();return console.log(e,"FSLDJFLKSDLFSDLK"),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:t.root},r.a.createElement(q.a,null,r.a.createElement(X.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:e.info.images[0].source_url,title:"Contemplative Reptie"}),r.a.createElement(Q.a,null,r.a.createElement($.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.info.name),r.a.createElement($.a,{variant:"body2",color:"textSecondary",component:"p"},e.info.snippet))),r.a.createElement(G.a,null)))},Ne=w(function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getSingleTrip=function(){var e=n.props.match.params;b.a.get("".concat("https://ironhack-wanderlust.herokuapp.com/","/travel/trips/").concat(e.id),{withCredentials:!0}).then((function(e){var t=e.data;n.setState(t),n.verifyCoords()})).catch((function(e){console.log(e)}))},n.editTrip=n.editTrip.bind(Object(u.a)(n)),n.addActivity=n.addActivity.bind(Object(u.a)(n)),n.state={travelCity:"",startDate:"",returnDate:"",lng:"",lat:"",idActivities:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getSingleTrip()}},{key:"editTrip",value:function(){this.props.history.push("/trips/detail/edit/".concat(this.state.travelCity,"/").concat(this.props.match.params.id))}},{key:"addActivity",value:function(){this.props.history.push({pathname:"/trips/detail/".concat(this.state.travelCity,"/").concat(this.props.match.params.id,"/addActivity"),state:{detail:this.props.match.params.id}})}},{key:"verifyCoords",value:function(){switch(this.state.travelCity){case"Barcelona":this.setState({lat:41.3930245,lng:2.1573873});break;case"Amsterdam":this.setState({lat:52.373825,lng:4.8589047});break;case"Berlin":this.setState({lat:52.5244631,lng:13.3865368});break;case"Krakow":this.setState({lat:50.0578748,lng:19.8877378});break;case"London":this.setState({lat:51.5262928,lng:-.1992605});break;case"Madrid":this.setState({lat:40.4155443,lng:-3.6865519});break;case"Milan":this.setState({lat:45.4741566,lng:1420553});break;case"Moscow":this.setState({lat:55.7718597,lng:37.4984548});break;case"Munich":this.setState({lat:48.1562184,lng:11.5161934});break;case"Oslo":this.setState({lat:59.9136957,lng:10.7345315});break;case"Palermo":this.setState({lat:38.1146911,lng:13.3379048});break;case"Paris":this.setState({lat:48.8559709,lng:2.3542182});break;case"Rome":this.setState({lat:41.907061,lng:12.4665086});break;case"Sydney":this.setState({lat:-33.8537157,lng:151.0637258});break;case"Tokyo":this.setState({lat:35.6878077,lng:139.6915164});break;case"Valencia":this.setState({lat:39.4780511,lng:-.4280252});break;case"Zurich":this.setState({lat:47.3798431,lng:8.5162227})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-home"},r.a.createElement("div",{className:"container-trip-detail"},r.a.createElement($.a,{variant:"h4"},this.state.travelCity),r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"Start Date: "),this.state.startDate),r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"Return Date: "),this.state.returnDate),r.a.createElement("div",{className:"container-map"},this.state.lat&&this.state.lng?r.a.createElement(je,{lat:this.state.lat,lng:this.state.lng}):null),r.a.createElement($.a,{className:"title-activities",variant:"h4"},"Activities"),this.state.idActivities.length>0?this.state.idActivities.map((function(e){return r.a.createElement("div",{className:"container-activities"},r.a.createElement(xe,{key:e.id,info:e}))})):r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"You don\xb4t have activities. Add a new one!")),r.a.createElement("div",{className:"button-edit-trip"},r.a.createElement(O,{text:"Edit",handleClickButton:this.editTrip}),r.a.createElement(O,{text:"Add Activity",handleClickButton:this.addActivity})))),r.a.createElement(J,null))}}]),a}(n.Component)),De=(a(263),a(597)),Be=a(595),_e=Object(P.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},avatar:{color:e.palette.getContrastText(Be.a[500]),backgroundColor:Be.a[500],width:e.spacing(9),height:e.spacing(9)}}}));function Le(e){var t=_e();return r.a.createElement("div",{className:t.root},r.a.createElement(De.a,{className:t.avatar},e.name))}var Fe=w((function(e){var t=Object(p.g)(),a=e.user,n=a.username,i=a.email,l=a.city,o=a.bio;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-profile"},r.a.createElement($.a,{variant:"h4"},"My profile"),r.a.createElement("div",{className:"container-profile-info"},r.a.createElement("div",{className:"container-avatar"},r.a.createElement(Le,{name:n.slice(0,1).toUpperCase()})),r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"Username: "),n),r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"Email: "),i),r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"City: "),l),r.a.createElement($.a,{variant:"body1"},r.a.createElement("span",null,"Bio: "),o))),r.a.createElement("div",{className:"container-edit-button"},r.a.createElement(O,{text:"Edit",handleClickButton:function(){t.push("/profile/edit")}}),r.a.createElement(O,{text:"Logout",handleClickButton:function(){e.logout()}})),r.a.createElement(J,null))})),Ae=(Object(P.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.city,a=n.state.bio;b.a.put("".concat("https://ironhack-wanderlust.herokuapp.com/","/profile/editProfile/").concat(n.props.user._id),{city:t,bio:a}).then((function(e){console.log(e),n.props.history.push({pathname:"/profile",state:{user:e.data.user}})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.goBack=function(){n.props.history.push("/profile")},n.state={city:"",bio:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({city:this.props.user.city,bio:this.props.user.bio})}},{key:"render",value:function(){var e=this,t=this.state,a=t.city,n=t.bio,i=this.props.classes;return r.a.createElement("div",{className:"container-profile"},r.a.createElement($.a,{variant:"h4"},"Edit your profile"),r.a.createElement("form",{className:i.root,noValidate:!0,autoComplete:"off"},r.a.createElement(v.a,{id:"outlined-basic",label:"City",variant:"outlined",name:"city",value:a,onChange:function(t){return e.handleChange(t)}}),r.a.createElement(v.a,{id:"outlined-multiline-static",label:"Bio",multiline:!0,rows:8,name:"bio",value:n,variant:"outlined",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"container-createtrip-buttons"},r.a.createElement(O,{type:"button",text:"Back",handleClickButton:this.goBack}),r.a.createElement(O,{handleClickButton:this.handleFormSubmit,text:"Save"})),r.a.createElement(J,null))}}]),a}(n.Component)),Te=w(Object(g.a)((function(e){return{root:{"& > *":{width:"80%",margin:"20px 10%"}}}}),{withTheme:!0})(Ae)),Pe=(a(264),Object(P.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(){var e=n.state.travelCity,t=n.state.startDate,a=n.state.returnDate;b.a.put("".concat("https://ironhack-wanderlust.herokuapp.com/","/travel/trips/").concat(n.props.match.params.id),{travelCity:e,startDate:t,returnDate:a},{withCredentials:!0}).then((function(){n.props.history.push("/home")})).catch((function(e){return console.log(e)}))},n.handleStartDateChange=function(e){n.setState({startDate:e.target.value})},n.handleReturnDateChange=function(e){n.setState({returnDate:e.target.value})},n.goBack=function(){n.props.history.push("/home")},n.handleFormSubmit=n.handleFormSubmit.bind(Object(u.a)(n)),n.state={travelCity:n.props.match.params.travelCity,startDate:n.props.startDate,returnDate:n.props.returnDate},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.startDate,n=t.returnDate,i=this.props.classes;return r.a.createElement("div",{className:"container-edit-trip"},r.a.createElement("h1",{className:"title-newtrip"},"Edit the information of your trip"),r.a.createElement("form",{className:i.root,noValidate:!0,autoComplete:"off"},r.a.createElement(v.a,{id:"date",label:"Start Date",type:"date",defaultValue:"2017-05-24",name:"startDate",value:a,className:i.textField,InputLabelProps:{shrink:!0},onChange:function(t){return e.handleStartDateChange(t)}}),r.a.createElement(v.a,{id:"date",label:"Return Date",type:"date",defaultValue:"2017-05-24",name:"returnDate",value:n,className:i.textField,InputLabelProps:{shrink:!0},onChange:function(t){return e.handleReturnDateChange(t)}})),r.a.createElement("div",{className:"container-buttons"},r.a.createElement(O,{text:"Back",handleClickButton:this.goBack}),r.a.createElement(O,{text:"Save Changes",handleClickButton:this.handleFormSubmit})),r.a.createElement(J,null))}}]),a}(n.Component)),ze=w(Object(g.a)((function(e){return{root:{"& > *":{width:"80%",margin:"20px 10%"}}}}),{withTheme:!0})(Pe)),Me=(a(265),a(266),Object(P.a)({root:{marginTop:"30px"}}));var Re=function(e){var t=Me();return console.log(e),r.a.createElement(r.a.Fragment,null,e.info.map((function(a){return r.a.createElement(Z.a,{className:t.root},r.a.createElement(q.a,null,r.a.createElement(X.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:a.images[0].source_url,title:"Contemplative Reptie"}),r.a.createElement(Q.a,null,r.a.createElement($.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.name),r.a.createElement($.a,{variant:"body2",color:"textSecondary",component:"p"},a.snippet))),r.a.createElement(G.a,null,r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(t){return function(t,a){console.log(a),b.a.put("".concat("https://ironhack-wanderlust.herokuapp.com/","/travel/trips/").concat(e.params,"/addThing/").concat(a.id),{activity:a}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(0,a)}},"Add Activity")))})))},Ke=w(function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getCuisine=function(){n.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(n.props.match.params.travelCity,"&child_tag_labels=cuisine&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(e){console.log("hola",e),n.setState({results:e.data.results})}))},n.goBack=function(){n.props.history.push("/home")},n.getPubs=n.getPubs.bind(Object(u.a)(n)),n.getCulture=n.getCulture.bind(Object(u.a)(n)),n.getKidFriendly=n.getCulture.bind(Object(u.a)(n)),n.getShopping=n.getShopping.bind(Object(u.a)(n)),n.getSports=n.getSports.bind(Object(u.a)(n)),n.getNature=n.getNature.bind(Object(u.a)(n)),n.getWellness=n.getWellness.bind(Object(u.a)(n)),n.state={travelCity:"",results:[]},n}return Object(s.a)(a,[{key:"getPubs",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=drinks&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"getCulture",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=culture&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"getKidFriendly",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=character-Kid_friendly&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"getShopping",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=shopping|poitype-Shopping_centre|poitype-Shopping_district|poitype-Convenience_store|poitype-Department_store|poitype-Liquor_store|poitype-Variety_store&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"getSports",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=subtype-Football_stadiums|subtype-Multi-purpose_stadiums|sports|surfing|poitype-Swimming_pool|swimming|watersports|wintersport&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"getNature",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=exploringnature|poitype-Natural_feature|wildlife|national_park|poitype-Natural_wonder|character-Rocky_beach|character-Sandy_beach|poitype-Forest|poitype-Mountain|poitype-Hiking_trail|hiking|poitype-Hill&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"getWellness",value:function(){var e=this;this.setState({results:[]}),b.a.get("https://www.triposo.com/api/20200803/location.json?part_of=".concat(this.props.match.params.travelCity,"&child_tag_labels=relaxinapark|wellness|poitype-Spa&account=EWNKH6F9&token=bksj0zwxed3fe4vfyagabwozo4ca2yro")).then((function(t){console.log(t),e.setState({results:t.data.results})}))}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("div",{className:"container-home"},r.a.createElement("div",{className:"title-home"},r.a.createElement($.a,{gutterBottom:!0,variant:"h4",component:"h4"},"Discover new activities in the city!")),r.a.createElement("div",{className:"container-buttons"},r.a.createElement(O,{type:"button",text:"Cuisine",handleClickButton:this.getCuisine}),r.a.createElement(O,{type:"button",text:"Nature",handleClickButton:this.getNature}),r.a.createElement(O,{type:"button",text:"Culture",handleClickButton:this.getCulture})),r.a.createElement("div",{className:"container-buttons"},r.a.createElement(O,{type:"button",text:"health",handleClickButton:this.getWellness}),r.a.createElement(O,{type:"button",text:" Shopping ",handleClickButton:this.getShopping}),r.a.createElement(O,{type:"button",text:"Sports",handleClickButton:this.getSports})),r.a.createElement("div",{className:"container-buttons"},r.a.createElement(O,{type:"button",text:"Pubs",handleClickButton:this.getPubs}),r.a.createElement(O,{type:"button",text:" Kids ",handleClickButton:this.getKidFriendly}),r.a.createElement(O,{type:"button",text:"Back",handleClickButton:this.goBack})),r.a.createElement(Re,{info:this.state.results,params:this.props.match.params.id})),r.a.createElement(J,null))}}]),a}(n.Component)),Ve=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClickPresentation=n.handleClickPresentation.bind(Object(u.a)(n)),n.state={presentation:!0},n}return Object(s.a)(a,[{key:"handleClickPresentation",value:function(){this.setState({presentation:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.presentation?r.a.createElement(A,{handleClickPresentation:this.handleClickPresentation}):r.a.createElement(S,null," ",r.a.createElement("div",null,r.a.createElement(p.a,{from:"/",to:"/login"}),r.a.createElement(p.d,null,r.a.createElement(pe,{exact:!0,path:"/signup",component:N}),r.a.createElement(pe,{exact:!0,path:"/login",component:B}),r.a.createElement(de,{exact:!0,path:"/home",component:me}),r.a.createElement(de,{exact:!0,path:"/trips/create",component:ke}),r.a.createElement(de,{exact:!0,path:"/trips/detail/:travelCity/:id/addActivity",component:Ke}),r.a.createElement(de,{exact:!0,path:"/trips/detail/:id",component:Ne}),r.a.createElement(de,{exact:!0,path:"/profile",component:Fe}),r.a.createElement(de,{exact:!0,path:"/profile/edit",component:Te}),r.a.createElement(de,{exact:!0,path:"/trips/detail/edit/:travelCity/:id",component:ze})))))}}]),a}(n.Component);l.a.render(r.a.createElement(o.a,null,r.a.createElement(Ve,null)),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.fad50bc8.chunk.js.map