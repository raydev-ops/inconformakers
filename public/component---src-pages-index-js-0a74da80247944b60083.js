(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(152),o=n(153);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hi people"))}},149:function(t,e,n){var a;t.exports=(a=n(151))&&a.default||a},150:function(t){t.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{items:[{title:"Início",url:"#"},{title:"Fotos",url:"#"},{title:"Contato",url:"#"}]}}]}}}},151:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(55),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},152:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=n(150),c=n(4),u=n.n(c),l=(n(33),n(149),r.a.createContext({})),d=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func};var p=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){return r.a.createElement(d,{query:"3385393037",render:function(t){return r.a.createElement("ul",null,t.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(t,e){var n=t.title;t.url;return r.a.createElement("li",{key:e},n)}))},data:s})},e}(r.a.Component),m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"InconforMakers"),r.a.createElement(p,null))},f=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("main",null,t.children))};n.d(e,"a",function(){return f})},153:function(t,e,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(155),u=n.n(c);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title,c=a.data.site,l=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0a74da80247944b60083.js.map