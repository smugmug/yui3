if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/tree-lazy/tree-lazy.js']) {
   __coverage__['build/tree-lazy/tree-lazy.js'] = {"path":"build/tree-lazy/tree-lazy.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":101,"loc":{"start":{"line":101,"column":17},"end":{"line":101,"column":35}}},"3":{"name":"(anonymous_3)","line":118,"loc":{"start":{"line":118,"column":10},"end":{"line":118,"column":36}}},"4":{"name":"(anonymous_4)","line":123,"loc":{"start":{"line":123,"column":19},"end":{"line":123,"column":31}}},"5":{"name":"(anonymous_5)","line":128,"loc":{"start":{"line":128,"column":13},"end":{"line":128,"column":26}}},"6":{"name":"(anonymous_6)","line":147,"loc":{"start":{"line":147,"column":19},"end":{"line":147,"column":32}}},"7":{"name":"(anonymous_7)","line":153,"loc":{"start":{"line":153,"column":24},"end":{"line":153,"column":39}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":175,"column":69}},"2":{"start":{"line":80,"column":0},"end":{"line":80,"column":35}},"3":{"start":{"line":89,"column":0},"end":{"line":89,"column":24}},"4":{"start":{"line":97,"column":0},"end":{"line":97,"column":22}},"5":{"start":{"line":99,"column":0},"end":{"line":172,"column":3}},"6":{"start":{"line":102,"column":8},"end":{"line":102,"column":33}},"7":{"start":{"line":104,"column":8},"end":{"line":106,"column":9}},"8":{"start":{"line":105,"column":12},"end":{"line":105,"column":36}},"9":{"start":{"line":110,"column":8},"end":{"line":111,"column":9}},"10":{"start":{"line":113,"column":8},"end":{"line":113,"column":29}},"11":{"start":{"line":114,"column":8},"end":{"line":114,"column":29}},"12":{"start":{"line":119,"column":8},"end":{"line":119,"column":119}},"13":{"start":{"line":124,"column":8},"end":{"line":124,"column":47}},"14":{"start":{"line":129,"column":8},"end":{"line":129,"column":26}},"15":{"start":{"line":133,"column":8},"end":{"line":135,"column":9}},"16":{"start":{"line":134,"column":12},"end":{"line":134,"column":19}},"17":{"start":{"line":137,"column":8},"end":{"line":141,"column":9}},"18":{"start":{"line":138,"column":12},"end":{"line":140,"column":15}},"19":{"start":{"line":143,"column":8},"end":{"line":143,"column":49}},"20":{"start":{"line":148,"column":8},"end":{"line":149,"column":24}},"21":{"start":{"line":151,"column":8},"end":{"line":151,"column":34}},"22":{"start":{"line":153,"column":8},"end":{"line":168,"column":11}},"23":{"start":{"line":154,"column":12},"end":{"line":154,"column":38}},"24":{"start":{"line":156,"column":12},"end":{"line":163,"column":13}},"25":{"start":{"line":157,"column":16},"end":{"line":160,"column":19}},"26":{"start":{"line":162,"column":16},"end":{"line":162,"column":23}},"27":{"start":{"line":165,"column":12},"end":{"line":165,"column":37}},"28":{"start":{"line":167,"column":12},"end":{"line":167,"column":46}}},"branchMap":{"1":{"line":104,"type":"if","locations":[{"start":{"line":104,"column":8},"end":{"line":104,"column":8}},{"start":{"line":104,"column":8},"end":{"line":104,"column":8}}]},"2":{"line":110,"type":"if","locations":[{"start":{"line":110,"column":8},"end":{"line":110,"column":8}},{"start":{"line":110,"column":8},"end":{"line":110,"column":8}}]},"3":{"line":133,"type":"if","locations":[{"start":{"line":133,"column":8},"end":{"line":133,"column":8}},{"start":{"line":133,"column":8},"end":{"line":133,"column":8}}]},"4":{"line":133,"type":"binary-expr","locations":[{"start":{"line":133,"column":12},"end":{"line":133,"column":33}},{"start":{"line":133,"column":37},"end":{"line":133,"column":54}},{"start":{"line":133,"column":58},"end":{"line":133,"column":76}}]},"5":{"line":137,"type":"if","locations":[{"start":{"line":137,"column":8},"end":{"line":137,"column":8}},{"start":{"line":137,"column":8},"end":{"line":137,"column":8}}]},"6":{"line":156,"type":"if","locations":[{"start":{"line":156,"column":12},"end":{"line":156,"column":12}},{"start":{"line":156,"column":12},"end":{"line":156,"column":12}}]}},"code":[""]};
}
var __cov_p4T$0MUwD61QO1SoWPMkQg = __coverage__['build/tree-lazy/tree-lazy.js'];
__cov_p4T$0MUwD61QO1SoWPMkQg.s['1']++;YUI.add('tree-lazy',function(Y,NAME){__cov_p4T$0MUwD61QO1SoWPMkQg.f['1']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['2']++;var EVT_BEFORE_LOAD='beforeLoad';__cov_p4T$0MUwD61QO1SoWPMkQg.s['3']++;var EVT_ERROR='error';__cov_p4T$0MUwD61QO1SoWPMkQg.s['4']++;var EVT_LOAD='load';__cov_p4T$0MUwD61QO1SoWPMkQg.s['5']++;Y.namespace('Plugin.Tree').Lazy=Y.Base.create('lazyTreePlugin',Y.Plugin.Base,[],{initializer:function(config){__cov_p4T$0MUwD61QO1SoWPMkQg.f['2']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['6']++;this._host=config.host;__cov_p4T$0MUwD61QO1SoWPMkQg.s['7']++;if(config.load){__cov_p4T$0MUwD61QO1SoWPMkQg.b['1'][0]++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['8']++;this.load=config.load;}else{__cov_p4T$0MUwD61QO1SoWPMkQg.b['1'][1]++;}__cov_p4T$0MUwD61QO1SoWPMkQg.s['9']++;if(!this._host.openNode){__cov_p4T$0MUwD61QO1SoWPMkQg.b['2'][0]++;}else{__cov_p4T$0MUwD61QO1SoWPMkQg.b['2'][1]++;}__cov_p4T$0MUwD61QO1SoWPMkQg.s['10']++;this._published={};__cov_p4T$0MUwD61QO1SoWPMkQg.s['11']++;this._attachEvents();},load:function(node,callback){__cov_p4T$0MUwD61QO1SoWPMkQg.f['3']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['12']++;callback(new Error('Plugin.Tree.Lazy: Please provide a custom `load` method when instantiating this plugin.'));},_attachEvents:function(){__cov_p4T$0MUwD61QO1SoWPMkQg.f['4']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['13']++;this.onHostEvent('open',this._onOpen);},_onOpen:function(e){__cov_p4T$0MUwD61QO1SoWPMkQg.f['5']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['14']++;var node=e.node;__cov_p4T$0MUwD61QO1SoWPMkQg.s['15']++;if((__cov_p4T$0MUwD61QO1SoWPMkQg.b['4'][0]++,!node.canHaveChildren)||(__cov_p4T$0MUwD61QO1SoWPMkQg.b['4'][1]++,node.state.loaded)||(__cov_p4T$0MUwD61QO1SoWPMkQg.b['4'][2]++,node.state.loading)){__cov_p4T$0MUwD61QO1SoWPMkQg.b['3'][0]++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['16']++;return;}else{__cov_p4T$0MUwD61QO1SoWPMkQg.b['3'][1]++;}__cov_p4T$0MUwD61QO1SoWPMkQg.s['17']++;if(!this._published[EVT_BEFORE_LOAD]){__cov_p4T$0MUwD61QO1SoWPMkQg.b['5'][0]++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['18']++;this._published[EVT_BEFORE_LOAD]=this.publish(EVT_BEFORE_LOAD,{defaultFn:this._defLoadingFn});}else{__cov_p4T$0MUwD61QO1SoWPMkQg.b['5'][1]++;}__cov_p4T$0MUwD61QO1SoWPMkQg.s['19']++;this.fire(EVT_BEFORE_LOAD,{node:node});},_defLoadingFn:function(e){__cov_p4T$0MUwD61QO1SoWPMkQg.f['6']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['20']++;var node=e.node,self=this;__cov_p4T$0MUwD61QO1SoWPMkQg.s['21']++;node.state.loading=true;__cov_p4T$0MUwD61QO1SoWPMkQg.s['22']++;this.load(node,function(err){__cov_p4T$0MUwD61QO1SoWPMkQg.f['7']++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['23']++;delete node.state.loading;__cov_p4T$0MUwD61QO1SoWPMkQg.s['24']++;if(err){__cov_p4T$0MUwD61QO1SoWPMkQg.b['6'][0]++;__cov_p4T$0MUwD61QO1SoWPMkQg.s['25']++;self.fire(EVT_ERROR,{error:err,src:'load'});__cov_p4T$0MUwD61QO1SoWPMkQg.s['26']++;return;}else{__cov_p4T$0MUwD61QO1SoWPMkQg.b['6'][1]++;}__cov_p4T$0MUwD61QO1SoWPMkQg.s['27']++;node.state.loaded=true;__cov_p4T$0MUwD61QO1SoWPMkQg.s['28']++;self.fire(EVT_LOAD,{node:node});});}},{NS:'lazy'});},'@VERSION@',{'requires':['base-pluginhost','plugin','tree']});
