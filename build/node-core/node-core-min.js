YUI.add("node-core",function(e,t){var n=".",r="nodeName",i="nodeType",s="ownerDocument",o="tagName",u="_yuid",a={},f=Array.prototype.slice,l=e.DOM,c=function(t){if(!this.getDOMNode)return new c(t);if(typeof t=="string"){t=c._fromString(t);if(!t)return null}var n=t.nodeType!==9?t.uniqueID:t[u];n&&c._instances[n]&&c._instances[n]._node!==t&&(t[u]=null),n=n||e.stamp(t),n||(n=e.guid()),this[u]=n,this._node=t,this._stateProxy=t,this._initPlugins&&this._initPlugins()},h=function(t){var n=null;return t&&(n=typeof t=="string"?function(n){return e.Selector.test(n,t)}:function(n){return t(e.one(n))}),n};c.ATTRS={},c.DOM_EVENTS={},c._fromString=function(t){return t&&(t.indexOf("doc")===0?t=e.config.doc:t.indexOf("win")===0?t=e.config.win:t=e.Selector.query(t,null,!0)),t||null},c.NAME="node",c.re_aria=/^(?:role$|aria-)/,c.SHOW_TRANSITION="fadeIn",c.HIDE_TRANSITION="fadeOut",c._instances={},c.getDOMNode=function(e){return e?e.nodeType?e:e._node||null:null},c.scrubVal=function(t,n){if(t){if(typeof t=="object"||typeof t=="function")if(i in t||l.isWindow(t))t=e.one(t);else if(t.item&&!t._nodes||t[0]&&t[0][i])t=e.all(t)}else typeof t=="undefined"?t=n:t===null&&(t=null);return t},c.addMethod=function(e,t,n){e&&t&&typeof t=="function"&&(c.prototype[e]=function(){var e=f.call(arguments),r=this,i;return e[0]&&e[0]._node&&(e[0]=e[0]._node),e[1]&&e[1]._node&&(e[1]=e[1]._node),e.unshift(r._node),i=t.apply(n||r,e),i&&(i=c.scrubVal(i,r)),typeof i!="undefined"||(i=r),i})},c.importMethod=function(t,n,r){typeof n=="string"?(r=r||n,c.addMethod(r,t[n],t)):e.Array.each(n,function(e){c.importMethod(t,e)})},c.one=function(t){var n=null,r,i;if(t){if(typeof t=="string"){t=c._fromString(t);if(!t)return null}else if(t.getDOMNode&&!t._reactInternalComponent)return t;if(t.nodeType||e.DOM.isWindow(t)){i=t.uniqueID&&t.nodeType!==9?t.uniqueID:t._yuid,n=c._instances[i],r=n?n._node:null;if(!n||r&&t!==r)n=new c(t),t.nodeType!=11&&(c._instances[n[u]]=n)}}return n},c.DEFAULT_SETTER=function(t,r){var i=this._stateProxy,s;return t.indexOf(n)>-1?(s=t,t=t.split(n),e.Object.setValue(i,t,r)):typeof i[t]!="undefined"&&(i[t]=r),r},c.DEFAULT_GETTER=function(t){var r=this._stateProxy,i;return t.indexOf&&t.indexOf(n)>-1?i=e.Object.getValue(r,t.split(n)):typeof r[t]!="undefined"&&(i=r[t]),i},e.mix(c.prototype,{DATA_PREFIX:"data-",toString:function(){var e=this[u]+": not bound to a node",t=this._node,n,i,s;return t&&(n=t.attributes,i=n&&n.id?t.getAttribute("id"):null,s=n&&n.className?t.getAttribute("className"):null,e=t[r],i&&(e+="#"+i),s&&(e+="."+s.replace(" ",".")),e+=" "+this[u]),e},get:function(e){var t;return this._getAttr?t=this._getAttr(e):t=this._get(e),t?t=c.scrubVal(t,this):t===null&&(t=null),t},_get:function(e){var t=c.ATTRS[e],n;return t&&t.getter?n=t.getter.call(this):c.re_aria.test(e)?n=this._node.getAttribute(e,2):n=c.DEFAULT_GETTER.apply(this,arguments),n},set:function(e,t){var n=c.ATTRS[e];return this._setAttr?this._setAttr.apply(this,arguments):n&&n.setter?n.setter.call(this,t,e):c.re_aria.test(e)?this._node.setAttribute(e,t):c.DEFAULT_SETTER.apply(this,arguments),this},setAttrs:function(t){return this._setAttrs?this._setAttrs(t):e.Object.each(t,function(e,t){this.set(t,e)},this),this},getAttrs:function(t){var n={};return this._getAttrs?this._getAttrs(t):e.Array.each(t,function(e,t){n[e]=this.get(e)},this),n},compareTo:function(e){var t=this._node;return e&&e._node&&(e=e._node),t===e},inDoc:function(e){var t=this._node;if(t){e=e?e._node||e:t[s];if(e.documentElement)return l.contains(e.documentElement,t)}return!1},getById:function(t){var n=this._node,r=l.byId(t,n[s]);return r&&l.contains(n,r)?r=e.one(r):r=null,r},ancestor:function(t,n,r){return arguments.length===2&&(typeof n=="string"||typeof n=="function")&&(r=n),e.one(l.ancestor(this._node,h(t),n,h(r)))},ancestors:function(t,n,r){return arguments.length===2&&(typeof n=="string"||typeof n=="function")&&(r=n),e.all(l.ancestors(this._node,h(t),n,h(r)))},previous:function(t,n){return e.one(l.elementByAxis(this._node,"previousSibling",h(t),n))},next:function(t,n){return e.one(l.elementByAxis(this._node,"nextSibling",h(t),n))},siblings:function(t){return e.all(l.siblings(this._node,h(t)))},one:function(t){return e.one(e.Selector.query(t,this._node,!0))},all:function(t){var n;return this._node&&(n=e.all(e.Selector.query(t,this._node)),n._query=t,n._queryRoot=this._node),n||e.all([])},test:function(t){return e.Selector.test(this._node,t)},remove:function(e){var t=this._node;return t&&t.parentNode&&t.parentNode.removeChild(t),e&&this.destroy(),this},replace:function(e){var t=this._node;return typeof e=="string"&&(e=c.create(e)),t.parentNode.replaceChild(c.getDOMNode(e),t),this},replaceChild:function(t,n){return typeof t=="string"&&(t=l.create(t)),e.one(this._node.replaceChild(c.getDOMNode(t),c.getDOMNode(n)))},destroy:function(t){var n=e.config.doc.uniqueID?"uniqueID":"_yuid",r;this.purge(),this.unplug&&this.unplug(),this.clearData(),t&&e.NodeList.each(this.all("*"),function(t){r=c._instances[t[n]],r?r.destroy():e.Event.purgeElement(t)}),this._node=null,this._stateProxy=null,delete c._instances[this._yuid]},invoke:function(e,t,n,r,i,s){var o=this._node,u;return t&&t._node&&(t=t._node),n&&n._node&&(n=n._node),u=o[e](t,n,r,i,s),c.scrubVal(u,this)},swap:e.config.doc.documentElement.swapNode?function(e){this._node.swapNode(c.getDOMNode(e))}:function(e){e=c.getDOMNode(e);var t=this._node,n=e.parentNode,r=e.nextSibling;return r===t?n.insertBefore(t,e):e===t.nextSibling?n.insertBefore(e,t):(t.parentNode.replaceChild(e,t),l.addHTML(n,t,r)),this},hasMethod:function(e){var t=this._node;return!(!(t&&e in t&&typeof t[e]!="unknown")||typeof t[e]!="function"&&String(t[e]).indexOf("function")!==1)},isFragment:function(){return this.get("nodeType")===11},empty:function(){return this.get("childNodes").remove().destroy(!0),this},getDOMNode:function(){return this._node}},!0),e.Node=c,e.one=c.one;var p=function(t){var n=[];t&&(typeof t=="string"?(this._query=t,t=e.Selector.query(t)):t.nodeType||l.isWindow(t
)?t=[t]:t._node?t=[t._node]:t[0]&&t[0]._node?(e.Array.each(t,function(e){e._node&&n.push(e._node)}),t=n):t=e.Array(t,0,!0)),this._nodes=t||[]};p.NAME="NodeList",p.getDOMNodes=function(e){return e&&e._nodes?e._nodes:e},p.each=function(t,n,r){var i=t._nodes;i&&i.length&&e.Array.each(i,n,r||t)},p.addMethod=function(t,n,r){t&&n&&(p.prototype[t]=function(){var t=[],i=arguments;return e.Array.each(this._nodes,function(s){var o=s.uniqueID&&s.nodeType!==9?"uniqueID":"_yuid",u=e.Node._instances[s[o]],a,f;u||(u=p._getTempNode(s)),a=r||u,f=n.apply(a,i),f!==undefined&&f!==u&&(t[t.length]=f)}),t.length?t:this})},p.importMethod=function(t,n,r){typeof n=="string"?(r=r||n,p.addMethod(n,t[n])):e.Array.each(n,function(e){p.importMethod(t,e)})},p._getTempNode=function(t){var n=p._tempNode;return n||(n=e.Node.create("<div></div>"),p._tempNode=n),n._node=t,n._stateProxy=t,n},e.mix(p.prototype,{_invoke:function(e,t,n){var r=n?[]:this;return this.each(function(i){var s=i[e].apply(i,t);n&&r.push(s)}),r},item:function(t){return e.one((this._nodes||[])[t])},each:function(t,n){var r=this;return e.Array.each(this._nodes,function(i,s){return i=e.one(i),t.call(n||i,i,s,r)}),r},batch:function(t,n){var r=this;return e.Array.each(this._nodes,function(i,s){var o=e.Node._instances[i[u]];return o||(o=p._getTempNode(i)),t.call(n||o,o,s,r)}),r},some:function(t,n){var r=this;return e.Array.some(this._nodes,function(i,s){return i=e.one(i),n=n||i,t.call(n,i,s,r)})},toFrag:function(){return e.one(e.DOM._nl2frag(this._nodes))},indexOf:function(t){return e.Array.indexOf(this._nodes,e.Node.getDOMNode(t))},filter:function(t){return e.all(e.Selector.filter(this._nodes,t))},modulus:function(t,n){n=n||0;var r=[];return p.each(this,function(e,i){i%t===n&&r.push(e)}),e.all(r)},odd:function(){return this.modulus(2,1)},even:function(){return this.modulus(2)},destructor:function(){},refresh:function(){var t,n=this._nodes,r=this._query,i=this._queryRoot;return r&&(i||n&&n[0]&&n[0].ownerDocument&&(i=n[0].ownerDocument),this._nodes=e.Selector.query(r,i)),this},size:function(){return this._nodes.length},isEmpty:function(){return this._nodes.length<1},toString:function(){var e="",t=this[u]+": not bound to any nodes",n=this._nodes,i;return n&&n[0]&&(i=n[0],e+=i[r],i.id&&(e+="#"+i.id),i.className&&(e+="."+i.className.replace(" ",".")),n.length>1&&(e+="...["+n.length+" items]")),e||t},getDOMNodes:function(){return this._nodes}},!0),p.importMethod(e.Node.prototype,["destroy","empty","remove","set"]),p.prototype.get=function(t){var n=[],r=this._nodes,i=!1,s=p._getTempNode,o,u;return r[0]&&(o=e.Node._instances[r[0]._yuid]||s(r[0]),u=o._get(t),u&&u.nodeType&&(i=!0)),e.Array.each(r,function(r){o=e.Node._instances[r._yuid],o||(o=s(r)),u=o._get(t),i||(u=e.Node.scrubVal(u,o)),n.push(u)}),i?e.all(n):n},e.NodeList=p,e.all=function(e){return new p(e)},e.Node.all=e.all;var d=e.NodeList,v=Array.prototype,m={concat:1,pop:0,push:0,shift:0,slice:1,splice:1,unshift:0};e.Object.each(m,function(t,n){d.prototype[n]=function(){var r=[],i=0,s,o;while(typeof (s=arguments[i++])!="undefined")r.push(s._node||s._nodes||s);return o=v[n].apply(this._nodes,r),t?o=e.all(o):o=e.Node.scrubVal(o),o}}),e.Array.each(["removeChild","hasChildNodes","cloneNode","hasAttribute","scrollIntoView","getElementsByTagName","focus","blur","submit","reset","select","createCaption"],function(t){e.Node.prototype[t]=function(e,n,r){var i=this.invoke(t,e,n,r);return i}}),e.Node.prototype.removeAttribute=function(e){var t=this._node;return t&&t.removeAttribute(e,0),this},e.Node.importMethod(e.DOM,["contains","setAttribute","getAttribute","wrap","unwrap","generateID"]),e.NodeList.importMethod(e.Node.prototype,["getAttribute","setAttribute","removeAttribute","unwrap","wrap","generateID"])},"@VERSION@",{requires:["dom-core","selector"]});
