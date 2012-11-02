YUI.add("menu-plugin",function(e,t){e.namespace("Plugin").Menu=e.Base.create("menuPlugin",e.Menu,[e.Plugin.Base],{initializer:function(e){this._host=e.host,this._published={},this._attachMenuPluginEvents()},destructor:function(){clearTimeout(this._pluginHideTimeout)},reposition:function(){var e=this.get("container"),t=this._getSortedAnchorRegions(["tl-bl","tr-br","bl-tl","br-tr"],e.get("region"),this._host.get("region"))[0].region;return e.setXY([t.left,t.top]),this},show:function(){return this.reposition(),e.Menu.prototype.show.call(this)},_attachMenuPluginEvents:function(){this._menuEvents.push(e.one("doc").after("click",this._afterDocClick,this)),this.afterHostEvent("click",this._afterAnchorClick),this.get("showOnHover")&&(this.afterHostEvent({blur:this._afterAnchorBlur,focus:this._afterAnchorFocus,mouseenter:this._afterAnchorMouseEnter,mouseleave:this._afterAnchorMouseLeave}),this._menuEvents.push(this.get("container").after({mouseenter:e.bind(this._afterContainerMouseEnter,this),mouseleave:e.bind(this._afterContainerMouseLeave,this)})))},_afterAnchorClick:function(){this.rendered||this.render(),this.toggle()},_afterAnchorBlur:function(){this.hide()},_afterAnchorFocus:function(){clearTimeout(this._pluginHideTimeout),this.rendered||this.render(),this.show()},_afterAnchorMouseEnter:function(){clearTimeout(this._pluginHideTimeout),this.rendered||this.render(),this.show()},_afterAnchorMouseLeave:function(){var e=this;this._pluginHideTimeout=setTimeout(function(){console.log("anchorTimeout"),e.hide()},300)},_afterContainerMouseEnter:function(){clearTimeout(this._pluginHideTimeout)},_afterContainerMouseLeave:function(){var e=this;this._pluginHideTimeout=setTimeout(function(){e.hide()},300)},_afterDocClick:function(e){if(!this.get("visible"))return;var t=this.get("container"),n=this._host;e.target.ancestor(function(e){return e===t||e===n},!0)||this.hide()}},{NS:"menu",ATTRS:{showOnHover:{value:!1,writeOnce:"initOnly"}}})},"@VERSION@",{requires:["event-focus","menu","node-pluginhost","plugin"]});
