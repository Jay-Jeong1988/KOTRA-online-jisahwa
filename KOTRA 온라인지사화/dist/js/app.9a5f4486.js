(function(t){function e(e){for(var o,i,r=e[0],l=e[1],c=e[2],f=0,u=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("c21b")},"0f62":function(t,e,n){t.exports=n.p+"img/user.bd5e113a.svg"},1:function(t,e){},"1af6":function(t,e,n){t.exports=n.p+"img/kotra_vancouver_.85f66e92.gif"},2:function(t,e){},"20e3":function(t,e,n){"use strict";n("b9d5")},3:function(t,e){},4:function(t,e){},5:function(t,e){},"51f2":function(t,e,n){t.exports=n.p+"img/search.4d3395f6.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home"),n("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"navbar"},[o("div",{staticClass:"logo"}),o("div",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center"}},[o("div",{staticClass:"profileBtnContainer",on:{click:t.openProfile}},[o("img",{staticStyle:{width:"100%"},attrs:{src:n("0f62"),alt:"user"}}),o("p",{staticStyle:{"font-size":"1.2rem",margin:"0",color:"#555"}},[t._v("Contact")])])])]),o("modal",{attrs:{name:"profile",width:"28%",height:"auto",shiftX:parseFloat(.7),shiftY:parseFloat(.3),styles:"padding: 2rem 1rem; justify-content: space-around; align-items: center; display: flex; background-color: #fff;"}},[o("div",{staticClass:"logo"}),o("div",[o("p",{staticStyle:{"text-align":"center",margin:"0"}},[t._v("Jay Jeong")]),o("p",{staticStyle:{"text-align":"center",margin:"0",color:"#aaa","font-size":"0.9rem"}},[t._v("Project Assistant")]),o("a",{attrs:{href:"mailto:jay@kotrayvr.com",target:"_blank"}},[o("p",{staticStyle:{"text-align":"center"}},[t._v("jay@kotrayvr.com")])]),o("a",{attrs:{href:"tel:+17782220766",target:"_blank"}},[o("p",{staticStyle:{"text-align":"center"}},[t._v("778-222-0766")])])]),o("div",{staticClass:"closeBtn",on:{click:function(e){t.$modal.hide("profile")}}},[t._v("✕")])]),t._m(0),t._m(1),o("h1",{staticClass:"title",staticStyle:{"margin-top":"0","text-align":"center","font-size":"2.7rem",border:"2px solid",background:"linear-gradient(#3b8fed, #053f95)",color:"#fff",padding:"5px 0"}},[t._v(t._s(t.title))]),o("div",{staticClass:"categorySelection"},[t._l(t.allCategories,function(e,n){return o("button",{key:n,staticClass:"cBtn",style:t.styleObject(e.color),on:{click:t.btnSelect}},[t._v(t._s(e.name))])}),o("button",{staticClass:"cBtn",staticStyle:{visibility:"hidden"}})],2),o("div",{staticClass:"okayBtn",class:{active:!!t.selectedCategories[0]},on:{click:t.confirm}},[t._v("Search\n        "),o("img",{staticStyle:{margin:"auto",width:"1.3rem"},attrs:{src:n("51f2")}})]),o("p",{staticStyle:{"text-align":"center","margin-bottom":"0"}},[t._v("Found "+t._s(t.listItems.length)+" items")]),o("p",{staticStyle:{"text-align":"center",color:"red"}},[t._v("*Click a product image or title to see the catalogue.")]),o("div",{staticClass:"listContainer"},[o("div",{staticClass:"category"},t._l(t.listItems,function(e){return o("ListItem",{key:e.uid,attrs:{item:e},on:{openPdf:t.openPdf}})}))]),o("modal",{attrs:{name:"moreInfo",width:"70%",height:"100%",shiftY:parseInt(0),shiftX:parseInt(0),styles:"margin: auto; overflow: hidden; box-shadow: unset; align-items: center; display: flex; flex-direction: column; background-color: transparent;"},on:{closed:t.closeEventTriggered}},[o("div",{staticStyle:{width:"100%",height:"100%"}},[o("div",{staticClass:"pdfTools"},[o("div",{attrs:{id:"catalogueSelectorContainer"}},[o("select",{staticClass:"catalogueSelector",on:{change:t.onCatalogueChange}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a catalogue...")]),t._l(t.pdfInfo.catalogueUrls,function(e,n){return o("option",{key:n,domProps:{value:e,textContent:t._s(e.split("kotra/")[1])}})})],2),t.pdfInfo.isPdfSelected?t._e():o("h2",{staticStyle:{position:"absolute",top:"35px",left:"70px",color:"red","font-size":"2rem"}})]),o("div",{staticClass:"downloadLinkContainer"},[t.pdfInfo.src?o("a",{staticClass:"downloadLink",attrs:{href:t.pdfInfo.src,target:"_blank"}},[o("img",{staticStyle:{width:"100%"},attrs:{src:n("6369"),alt:"download icon"}}),o("p",{staticStyle:{color:"#fff",margin:"0"}},[t._v("Download")])]):t._e()]),o("div",{staticClass:"controller",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.pdfInfo.page,expression:"pdfInfo.page",modifiers:{number:!0}}],staticStyle:{"font-size":"2rem",width:"3rem","text-align":"center","border-radius":"5px",background:"transparent",color:"#fff"},domProps:{value:t.pdfInfo.page},on:{input:function(e){e.target.composing||t.$set(t.pdfInfo,"page",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),o("h4",{staticStyle:{margin:"0 17px 0 2px","font-size":"1.8rem",color:"#fff"}},[t._v("/ "+t._s(t.pdfInfo.numPages))]),o("button",{staticStyle:{"margin-right":"10px","background-color":"crimson",cursor:"pointer",color:"#fff","font-size":"1.8rem"},on:{click:t.prevPage}},[t._v("◁")]),o("button",{staticStyle:{"background-color":"royalblue",cursor:"pointer",color:"#fff","font-size":"1.8rem"},on:{click:t.nextPage}},[t._v("▷")])]),o("button",{staticStyle:{cursor:"pointer","font-size":"1.9rem",background:"transparent",color:"#fff",border:"none"},on:{click:function(e){t.$modal.hide("moreInfo")}}},[t._v("✖")])]),t.pdfInfo.loadedRatio>0&&t.pdfInfo.loadedRatio<1?o("div",{staticStyle:{"background-color":"royalblue",color:"white","text-align":"center"},style:{width:100*t.pdfInfo.loadedRatio+"%"}},[t._v(t._s(Math.floor(100*t.pdfInfo.loadedRatio))+"%")]):t._e(),t.pdfInfo.show?o("pdf",{ref:"pdf",staticClass:"pdfContainer",attrs:{src:t.pdfInfo.src,page:t.pdfInfo.page},on:{progress:function(e){t.pdfInfo.loadedRatio=e},error:t.error,"num-pages":function(e){t.pdfInfo.numPages=e},"link-clicked":function(e){t.pdfInfo.page=e}}}):t._e()],1)])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"businessInfo"},[n("h2",{staticStyle:{"font-size":"1.7rem","margin-bottom":"0"}},[t._v("Overseas Branching Project")]),n("p",{staticStyle:{"margin-bottom":"0","font-size":"1.3rem"}},[n("b",[t._v("Business purpose")])]),n("p",{staticStyle:{"font-size":"1.2rem","margin-top":"5px"}},[t._v("○ Supporting export and overseas expansion by playing a role as a local branch for small and medium-sized Korean companies that lack the ability to set up branch offices abroad")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main_image"},[o("img",{staticStyle:{width:"100%"},attrs:{src:n("1af6"),alt:"kotra vancouver"}})])}],l=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ListItem"},[n("div",{staticClass:"leftContainer",style:{backgroundImage:"url("+this.item.thumbnailUrl+")"},on:{click:t.openPdf}}),n("div",{staticClass:"rightContainer"},[n("h1",{staticClass:"productTitle",on:{click:t.openPdf}},[t._v(t._s(t.item.product))]),n("Dropdown",{attrs:{item:t.item}}),n("div",{staticClass:"productInfo"},[n("p",{staticClass:"company"},[n("b",[t._v("Company:")]),t._v(" "+t._s(t.item.company))]),t.item.established?n("p",[n("b",[t._v("Established Year:")]),t._v(" "+t._s(t.item.established))]):t._e(),n("p",[n("b",[t._v("HSCode:")]),t._v(" "+t._s(t.item.hsCode))]),t._m(0),t._l(t.item.categories,function(e,o){return n("span",{key:o},[t._v(t._s(e)+", ")])}),n("br"),n("br"),n("a",{attrs:{href:t.item.website,target:"_blank"}},[n("b",[t._v(t._s(t.item.website))])])],2)],1)])}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{display:"inline-block"}},[n("b",[t._v("Category: ")])])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dropdown"}},[n("header",{staticClass:"header"},[n("nav",{staticClass:"header__nav"},[n("ul",{staticClass:"header__navbar"},[n("li",{staticClass:"header__item"},[n("a",{staticClass:"header__link"},[n("transition",{attrs:{name:"slide-fade"}},[t.show?n("button",{key:"on",staticClass:"header--button",on:{click:function(e){t.show=!1}}},[n("div",{staticClass:"header--icon"},[t._v("▲")])]):n("button",{key:"off",staticClass:"header--button",on:{click:function(e){t.show=!0}}},[n("div",{staticClass:"header--icon"},[t._v("▼")])])])],1),n("transition",{attrs:{name:"dropdown"}},[t.show?n("div",{staticClass:"dropdown__menu",class:{active:t.show}},[n("ul",{staticClass:"dropdown__menu-nav"},[n("li",{staticClass:"dropdown__menu-item"},[n("a",{staticClass:"dropdown__menu-link",attrs:{href:"#",title:"Account"}},[n("div",{staticClass:"dropdown__menu-svg"},[n("b",[t._v("Company: ")])]),n("div",{staticClass:"dropdown__menu-text"},[t._v(t._s(t.item.company))])])]),n("li",{staticClass:"dropdown__menu-item"},[n("a",{staticClass:"dropdown__menu-link",attrs:{href:"#",title:"Personal info"}},[n("div",{staticClass:"dropdown__menu-svg"},[n("b",[t._v("Established: ")])]),n("div",{staticClass:"dropdown__menu-text"},[t._v(t._s(t.item.established))])])]),n("li",{staticClass:"dropdown__menu-item"},[n("a",{staticClass:"dropdown__menu-link",attrs:{href:"#",title:"Privacy"}},[n("div",{staticClass:"dropdown__menu-svg"},[n("b",[t._v("HS Code: ")])]),n("div",{staticClass:"dropdown__menu-text"},[t._v(t._s(t.item.hsCode))])])]),n("li",{staticClass:"dropdown__menu-item"},[n("a",{staticClass:"dropdown__menu-link",attrs:{href:"#",title:"Data & personalization"}},[n("div",{staticClass:"dropdown__menu-svg"},[n("b",[t._v("Website: ")])]),n("div",{staticClass:"dropdown__menu-text"},[t._v(t._s(t.item.website))])])]),n("li",{staticClass:"dropdown__menu-item"},[n("a",{staticClass:"dropdown__menu-link",attrs:{href:"#",title:"People & sharing"}},[n("div",{staticClass:"dropdown__menu-svg"},[n("b",[t._v("Category: ")])]),n("div",{staticClass:"dropdown__menu-text"},[n("p",{staticStyle:{margin:"0",display:"inline-block"}}),t._l(t.item.categories,function(e,o){return n("span",{key:o},[t._v(t._s(e)+", ")])}),n("br"),n("br")],2)])])])]):t._e()])],1)])])])])},f=[],u={name:"Dropdown",data:function(){return{show:!1}},props:["item"]},p=u,m=(n("20e3"),n("2877")),g=Object(m["a"])(p,d,f,!1,null,"375da65f",null),_=g.exports,v={name:"ListItem",props:["item"],data:function(){return{}},methods:{openPdf:function(){this.$emit("openPdf",this.item.catalogueUrls)}},components:{Dropdown:_}},h=v,b=(n("a7fb"),Object(m["a"])(h,l,c,!1,null,"50749be9",null)),y=b.exports,C=n("858e"),w={name:"Home",data:function(){return{pdfInfo:{src:"",show:!1,catalogueUrls:[],loadedRatio:0,page:1,numPages:0,isPdfSelected:!1},title:"Korean Company Offerings",selectedCategories:[],listItems:[],allCategories:[{name:"Home",color:"#093145"},{name:"Technology",color:"#107896"},{name:"Industry",color:"#2478DD"},{name:"Food",color:"#829356"},{name:"Construction",color:"#AD2A1A"},{name:"Cosmetic",color:"#C2571A"},{name:"Natural",color:"#ff0066"},{name:"Stationery",color:"#AABB15"},{name:"Eco-friendly",color:"#FF6666"},{name:"Clothing",color:"blue"},{name:"PPE",color:"#990066"}]}},mounted:function(){var t=this;window.onhashchange=function(){window.location.hash||t.$modal.hide("moreInfo")}},methods:{onCatalogueChange:function(t){document.getElementById("catalogueSelectorContainer").style.transform="unset",this.pdfInfo.page=1,this.pdfInfo.isPdfSelected=!!t.target.selectedIndex,this.pdfInfo.src=t.target.value},openCatalogueSelection:function(){this.listItems=[],this.$modal.show("category selection"),this.title=""},openProfile:function(){this.$modal.show("profile")},closeEventTriggered:function(){this.pdfInfo={show:!1,catalogueUrls:[],loadedRatio:0,page:1,numPages:0,src:""},document.getElementsByTagName("body")[0].style.overflow="unset",window.location.hash&&(window.location.hash="")},prevPage:function(){this.pdfInfo.page>1&&this.pdfInfo.page--,document.querySelector(".pdfContainer").scrollTop=0},nextPage:function(){this.pdfInfo.page<this.pdfInfo.numPages&&this.pdfInfo.page++,document.querySelector(".pdfContainer").scrollTop=0},openPdf:function(t){this.pdfInfo.catalogueUrls=t,this.pdfInfo.show=!0,this.$modal.show("moreInfo"),document.getElementsByTagName("body")[0].style.overflow="hidden",window.location.hash+="pdfWindow"},error:function(t){console.log(t)},styleObject:function(t){return{border:"1px solid "+t,"--color":t,"--backgroundColor-hover":t,"--color-hover":"#fff","--border-selected":"1px solid #fff"}},confirm:function(){this.listItems=[],this.getData()},getData:function(){var t=this;fetch("data.json").then(function(t){return t.json()}).then(function(e){for(var n=function(t,e){return t.filter(function(t){return t.categories.includes(e)})},o=[],a=0;a<t.selectedCategories.length;a++){o=n(e,t.selectedCategories[a]);for(var s=0;s<o.length;s++)t.listItems.includes(o[s])||t.listItems.push(o[s])}})},btnSelect:function(t){var e=t.currentTarget,n=e.innerText;e.classList.contains("selected")?(e.classList.remove("selected"),this.selectedCategories=this.selectedCategories.filter(function(t){return t!=n})):(e.classList.add("selected"),this.selectedCategories.push(n))}},components:{ListItem:y,pdf:C["a"]},created:function(){}},k=w,x=(n("8b71"),Object(m["a"])(k,i,r,!1,null,null,null)),I=x.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"footer"}},[o("div",{staticClass:"foot_logo"},[o("img",{attrs:{src:n("d3a9"),alt:"KOTRA"}})]),o("div",{staticClass:"foot_util"},[o("a",{attrs:{href:"https://www.kotra.or.kr/foreign/main/KHEMUI010M.html",target:"_blank"}},[t._v("Visit KOTRA")]),o("div",{staticClass:"adr",staticStyle:{margin:"7px 0"}},[o("p",[t._v("\n                780-999 Canada Place, Vancouver, BC, Canada V6C 3E1  \n            ")]),o("p",[o("span",[t._v("TEL : 1-604-683-1820, 687-7322")]),t._v("        \n                "),o("span",[t._v("FAX : 1-604-687-6249")]),t._v("        \n                "),o("span",[t._v("EMAIL : jay@kotrayvr.com  ")])])])])])}],j={name:"Footer",props:[],data:function(){return{}},methods:{}},E=j,O=(n("8dc7"),Object(m["a"])(E,S,P,!1,null,"a4973802",null)),$=O.exports,T={name:"app",components:{Home:I,Footer:$}},z=T,B=(n("034f"),Object(m["a"])(z,a,s,!1,null,null,null)),A=B.exports,L=n("1881"),D=n.n(L);o["a"].use(D.a),o["a"].config.productionTip=!0,new o["a"]({render:function(t){return t(A)}}).$mount("#app")},6369:function(t,e,n){t.exports=n.p+"img/download.324855e0.svg"},"85f1":function(t,e,n){},"8b71":function(t,e,n){"use strict";n("85f1")},"8dc7":function(t,e,n){"use strict";n("f6c6")},a7fb:function(t,e,n){"use strict";n("b838")},b838:function(t,e,n){},b9d5:function(t,e,n){},c21b:function(t,e,n){},d3a9:function(t,e,n){t.exports=n.p+"img/kotra_logo.0545ab2a.png"},f6c6:function(t,e,n){}});
//# sourceMappingURL=app.9a5f4486.js.map