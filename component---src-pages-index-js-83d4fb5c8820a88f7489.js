(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),n=a.n(r),i=a(205),o=a(211),s=a(210),l=a(208),c=a(203);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return n.a.createElement(s.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:"All posts"}),n.a.createElement(o.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("div",{key:t.fields.slug},n.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25)}},n.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},r}(n.a.Component);t.default=d;var u="868822244"},203:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(215),n=a.n(r),i=a(216),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,c=s.scale},204:function(e,t,a){var r;e.exports=(r=a(206))&&r.default||r},205:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(204),a(9).default.enqueue,n.a.createContext({})},206:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";a(212)("fixed",function(e){return function(){return e(this,"tt","","")}})},208:function(e,t,a){"use strict";var r=a(209),n=a(0),i=a.n(n),o=a(218),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/x-icon",href:""+l.siteMetadata.favicon}],meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},209:function(e){e.exports={data:{site:{siteMetadata:{title:"My Blog",description:"My first blog.",author:"Al Piepho",favicon:"./images/favicon.ico"}}}}},210:function(e,t,a){"use strict";a(18);var r=a(0),n=a.n(r),i=a(205),o=a(203),s=a(217),l=function(e){var t=e.checked,a=e.onChange;return n.a.createElement("span",{className:"toggle-control"},n.a.createElement("input",{className:"dmcheck",type:"checkbox",checked:t,onChange:a,id:"dmcheck"}),n.a.createElement("label",{htmlFor:"dmcheck"}))},c=function(){var e=Object(s.a)(!1);return n.a.createElement("div",{className:"dark-mode-toggle"},n.a.createElement("button",{type:"button",onClick:e.disable},"☀"),n.a.createElement(l,{checked:e.value,onChange:e.toggle}),n.a.createElement("button",{type:"button",onClick:e.enable},"☾"))};a(198);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0,display:"flex",alignItems:"center"})},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r),n.a.createElement("div",{style:Object.assign({},Object(o.b)(.1),{marginLeft:20})},n.a.createElement(c,null))):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,display:"flex",alignItems:"center"}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r),n.a.createElement("div",{style:Object.assign({},Object(o.b)(.1),{marginLeft:20})},n.a.createElement(c,null))),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,s),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(n.a.Component);t.a=d},211:function(e,t,a){"use strict";a(207);var r=a(213),n=a(0),i=a.n(n),o=a(214),s=a.n(o),l=a(203);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who loves to learn and build useful things. You can contact him on "," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedin},"LinkedIn"),", or visit his "," ",i.a.createElement("a",{href:""+n.portfolio},"portfolio"),"."))}},212:function(e,t,a){var r=a(1),n=a(7),i=a(32),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},213:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwL/2gAMAwEAAhADEAAAAZavCs3iOjOikK5g1L//xAAcEAABBQADAAAAAAAAAAAAAAAAAQIDBBETMTP/2gAIAQEAAQUCrRcrpYMQqORB5pW9JukP/8QAFxEBAQEBAAAAAAAAAAAAAAAAAhAhMf/aAAgBAwEBPwEnIeT/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFYz//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAAhARIUFRcYH/2gAIAQEABj8C4rOqNQ4ZXkmP/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFBYXGh/9oACAEBAAE/IbS2jky2fIAjQpDHLWxB0+zNKnbPpkTsrRBRP//aAAwDAQACAAMAAAAQfzc//8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPxABpbr/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/EIFaC//EABwQAQEAAwEBAQEAAAAAAAAAAAERACFBMWGBkf/aAAgBAQABPxAgggU3D4dc11R42uxPMmioKXFEgBGU8d4C0i3br65JKCIfuOAgyq87r+Y9rpBzQHM//9k=",width:50,height:50,src:"/static/296cd4bb27534035352dfd1d87866c01/9b664/profile-pic.jpg",srcSet:"/static/296cd4bb27534035352dfd1d87866c01/9b664/profile-pic.jpg 1x,\n/static/296cd4bb27534035352dfd1d87866c01/06a10/profile-pic.jpg 1.5x,\n/static/296cd4bb27534035352dfd1d87866c01/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Al Piepho",social:{twitter:"apiepho1",linkedin:"al-piepho-fw-sw-engineer",portfolio:"https://alpiepho.github.io/project-portfolio2"}}}}}},214:function(e,t,a){"use strict";a(29),a(30),a(13),a(93),a(136),a(207);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),o=r(a(71)),s=r(a(139)),l=r(a(140)),c=r(a(0)),d=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+o+s+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(x,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},x=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},A,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,j=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:R?1:0,transition:I?"opacity "+h+"ms":"none"},s),k="boolean"==typeof m?"lightgray":m,C={transitionDelay:h+"ms"},Q=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&C,s,f),M={title:t,alt:this.state.isVisible?"":a,style:Q,className:A};if(p){var N=p,P=N[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&C)}),P.base64&&c.default.createElement(O,{src:P.base64,spreadProps:M,imageVariants:N,generateSources:w}),P.tracedSVG&&c.default.createElement(O,{src:P.tracedSVG,spreadProps:M,imageVariants:N,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(N),c.default.createElement(x,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:N}))}}))}if(g){var z=g,T=z[0],V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete V.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},k&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:k,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},I&&C)}),T.base64&&c.default.createElement(O,{src:T.base64,spreadProps:M,imageVariants:z,generateSources:w}),T.tracedSVG&&c.default.createElement(O,{src:T.tracedSVG,spreadProps:M,imageVariants:z,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(z),c.default.createElement(x,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},T,{imageVariants:z}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:I,sizes:L,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=R;t.default=k}}]);
//# sourceMappingURL=component---src-pages-index-js-83d4fb5c8820a88f7489.js.map