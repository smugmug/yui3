YUI.add("event-drag",function(F){var H=F.UA.mobile,A={start:"touchstart",move:"touchmove",end:"touchend"},B={start:"mousedown",move:"mousemove",end:"mouseup"},D=(H)?A:B,G="start",C="move",E="end";F.Event.define("movestart",{init:function(J,I,K){J._dragStart=J.on(D[G],F.bind(this._onStart,this),null,I,K);},destroy:function(J,I,K){if(J._dragStart){J._dragStart.detach();}},processArgs:function(I){var J=I[3]||{};if(!("minTime" in J)){J.minVelocity=this.MIN_TIME;}if(!("minDistance" in J)){J.minDistance=this.MIN_DISTANCE;}return J;},_onStart:function(M,I,L){var J=M.currentTarget,N=true,K;M.preventDefault();if(M.touches){N=(M.touches.length===1);M=M.touches[0];}if(N){K={time:new Date().getTime(),clientXY:[M.clientX,M.clientY],pageXY:[M.pageX,M.pageY]};J.setData("_dragStart",K);L.fire(K);}},MIN_TIME:0,MIN_DISTANCE:3});F.Event.define("move",{init:function(J,I,K){J._drag=J.get("ownerDocument").on(D[C],F.bind(this._onDrag,this),null,J,I,K);},destroy:function(J,I,K){if(J._drag){J._drag.detach();}},_onDrag:function(N,K,J,M){var O=K.getData("_dragStart"),I=!!(O),L;N.preventDefault();if(I){if(N.touches){I=I&&(N.touches.length===1);N=N.touches[0];}if(I){L={time:new Date().getTime(),clientXY:[N.clientX,N.clientY],pageXY:[N.clientX,N.clientY]};K.setData("_drag",L);M.fire(L);}}}});F.Event.define("moveend",{init:function(J,I,K){J._dragEnd=J.get("ownerDocument").on(D[E],F.bind(this._onEnd,this),null,J,I,K);},destroy:function(J,I,K){if(J._dragEnd){J._dragEnd.detach();}},_onEnd:function(N,K,J,M){var I=!!(K.getData("_drag")||K.getData("_dragStart")),L;N.preventDefault();if(I){if(N.changedTouches){if(N.changedTouches.length===1){N=N.changedTouches[0];}else{I=false;}}if(I){L={time:new Date().getTime(),clientXY:[N.clientX,N.clientY],pageXY:[N.clientX,N.clientY]};K.setData("_dragEnd",L);K.setData("_dragStart",null);K.setData("_drag",null);M.fire(L);}else{K.setData("_dragStart",null);K.setData("_drag",null);}}else{K.setData("_dragStart",null);K.setData("_drag",null);}}});},"@VERSION@",{use:["node-base","event-touch","event-synthetic"]});