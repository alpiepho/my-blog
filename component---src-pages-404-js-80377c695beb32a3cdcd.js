(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(0),r=n.n(a),o=n(210),c=n(208);var i=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(c.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},a}(r.a.Component);e.default=i;var l="1097489062"},203:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return s});var a=n(215),r=n.n(a),o=n(216),c=n.n(o);c.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete c.a.googleFonts;var i=new r.a(c.a);var l=i.rhythm,s=i.scale},204:function(t,e,n){var a;t.exports=(a=n(206))&&a.default||a},205:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(66),c=n.n(o);n.d(e,"a",function(){return c.a});n(204),n(9).default.enqueue,r.a.createContext({})},206:function(t,e,n){"use strict";n.r(e);n(18);var a=n(0),r=n.n(a),o=n(95);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},208:function(t,e,n){"use strict";var a=n(209),r=n(0),o=n.n(r),c=n(218),i=n.n(c);function l(t){var e=t.description,n=t.lang,r=t.meta,c=t.title,l=a.data.site,s=e||l.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/x-icon",href:""+l.siteMetadata.favicon}],meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},209:function(t){t.exports={data:{site:{siteMetadata:{title:"My Blog",description:"My first blog.",author:"Al Piepho",favicon:"./images/favicon.ico"}}}}},210:function(t,e,n){"use strict";n(18);var a=n(0),r=n.n(a),o=n(205),c=n(203),i=n(217),l=function(t){var e=t.checked,n=t.onChange;return r.a.createElement("span",{className:"toggle-control"},r.a.createElement("input",{className:"dmcheck",type:"checkbox",checked:e,onChange:n,id:"dmcheck"}),r.a.createElement("label",{htmlFor:"dmcheck"}))},s=function(){var t=Object(i.a)(!1);return r.a.createElement("div",{className:"dark-mode-toggle"},r.a.createElement("button",{type:"button",onClick:t.disable},"☀"),r.a.createElement(l,{checked:t.value,onChange:t.toggle}),r.a.createElement("button",{type:"button",onClick:t.enable},"☾"))};n(198);var u=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,i=e.children;return t="/"===n.pathname?r.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0,display:"flex",alignItems:"center"})},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),r.a.createElement("div",{style:Object.assign({},Object(c.b)(.1),{marginLeft:20})},r.a.createElement(s,null))):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,display:"flex",alignItems:"center"}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),r.a.createElement("div",{style:Object.assign({},Object(c.b)(.1),{marginLeft:20})},r.a.createElement(s,null))),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement("main",null,i),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},a}(r.a.Component);e.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-80377c695beb32a3cdcd.js.map