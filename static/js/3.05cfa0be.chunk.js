(this["webpackJsonpdesign-portfolio"]=this["webpackJsonpdesign-portfolio"]||[]).push([[3],{43:function(n,e,t){n.exports=t.p+"static/media/image-gallery.656fc865.svg"},44:function(n,e,t){"use strict";t.r(e),t.d(e,"Project",(function(){return J}));var r,a,i=t(0),o=t.n(i),c=t(20),l=t(2),s=t(8);!function(n){n.sketch="sketch",n.design="design",n.prototype="prototype"}(r||(r={})),function(n){n.sketch="Sketch",n.design="Design",n.prototype="HTML Prototype"}(a||(a={}));var p=[{name:r.sketch,title:a.sketch},{name:r.design,title:a.design},{name:r.prototype,title:a.prototype}],d=t(6),u=t(4);function m(){var n=Object(d.a)(['\n  display: flex;\n  align-items: center;\n  padding: 0 16px 16px 16px;\n  \n  .item {\n    padding: 0 16px 10px 16px;\n    font-weight: bold;\n    position: relative;\n    display: inline-block;\n    \n    &:after {\n      content: "";\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 0;\n      height: 4px;\n      background: var(--color-bg-accent);\n      transition: width 250ms;\n    }\n    \n    &.active {\n      &:after {\n        left: 0;\n        right: auto;\n        width: 100%;\n      }\n    }  \n  }\n']);return m=function(){return n},n}var g=u.c.div(m()),f=t(19),v=function(){var n=Object(l.h)(),e=n.projectName,t=n.previewType,a=void 0===t?r.design:t;return o.a.createElement(g,null,p.map((function(n){var t=n.name,r=n.title,i="".concat(f.a.projectPath,"/").concat(e,"/").concat(t),l=Object(c.a)("item",{active:t===a});return o.a.createElement(s.b,{to:i,key:t,className:l},r)})))},h=t(21),b=function(n){var e=n.src;return o.a.createElement("img",{src:e,alt:"Preview"})},x=t(43),y=t.n(x);function k(){var n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  \n  .container {\n     display: block;\n    \n    .image {\n      text-align: center;\n       \n      img {\n        width: 240px;\n        opacity: 0.5;\n      }\n    }\n    \n    .message {\n      padding: 32px;\n      text-align: center;\n      font-size: 1.5rem;\n      color: var(--color-text-secondary);\n    }\n  }\n"]);return k=function(){return n},n}var w=u.c.div(k()),E=function(n){var e=n.message,t=void 0===e?"There is no image but we are working hard to add it":e;return o.a.createElement(w,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"image"},o.a.createElement("img",{src:y.a,alt:t})),o.a.createElement("div",{className:"message"},t)))};function j(){var n=Object(d.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 32px 32px 128px 32px;\n  min-height: calc(100vh - 300px);\n  border: 16px solid var(--color-border-monitor);\n  border-radius: .5em;\n  position: relative;\n  \n  &:before {\n    content:"";\n    display:block;\n    position:absolute;\n    background: var(--color-border-stand);\n    width: 150px;\n    height: 48px;\n    top: calc(100% + 16px);\n  }\n  &:after {\n     content:"";\n     display:block;\n     position:absolute;\n     background:var(--color-border-monitor);\n     border-top-left-radius:.5em;\n     border-top-right-radius:.5em;\n     width: 300px;\n     height: 16px;\n     top: calc(100% + 48px);\n  }\n']);return j=function(){return n},n}var O=u.c.div(j()),N=function(){var n=Object(l.h)(),e=n.projectName,t=n.previewType,a=void 0===t?r.design:t,i=h.a.find((function(n){return n.id===e}));if(!i)return null;var c=a,s=i[c],p=c===r.sketch||c===r.design,d=p&&s,u=p&&!s;return o.a.createElement(O,null,d&&o.a.createElement(b,{src:s}),u&&o.a.createElement(E,null))};function P(){var n=Object(d.a)(["\n  display: block;\n  flex-grow: 1;\n"]);return P=function(){return n},n}var T=u.c.div(P()),J=function(){return o.a.createElement(T,null,o.a.createElement(v,null),o.a.createElement(N,null))};e.default=J}}]);
//# sourceMappingURL=3.05cfa0be.chunk.js.map