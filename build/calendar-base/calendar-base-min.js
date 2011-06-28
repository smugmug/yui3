YUI.add("calendar-base",function(b){var w=b.ClassNameManager.getClassName,l="calendar",f=w(l,"grid"),s=w(l,"body"),j=w(l,"header"),p=w(l,"header-wrap"),k=w(l,"weekdayrow"),u=w(l,"weekday"),q=w(l,"column-hidden"),c=w(l,"day-selected"),g=w(l,"row"),v=w(l,"day"),a=w(l,"prevmonth-day"),m=w(l,"nextmonth-day"),r=w(l,"anchor"),e=b.Lang,n=b.Node,h=n.create,o=b.substitute,d=b.each,i=b.DataType.Date;function t(x){t.superclass.constructor.apply(this,arguments);if(x.hasOwnProperty("date")){this.set("date",x.date);}}b.CalendarBase=b.extend(t,b.Widget,{_cutoffColumn:0,_daysInMonth:31,_daysInPrevMonth:0,_calendarId:"calendar_"+b.guid(),_selectedDate:null,initializer:function(){},renderUI:function(){var x=this.get("contentBox");x.appendChild(this._initCalendarHTML(this.get("date")));this._renderSelectedDates();},bindUI:function(){this.after("dateChange",this._afterDateChange);this.after("showPrevMonthChange",this._afterShowPrevMonthChange);this.after("showNextMonthChange",this._afterShowNextMonthChange);this._bindCalendarEvents();},syncUI:function(){if(this.get("showPrevMonth")){this._afterShowPrevMonthChange();}if(this.get("showNextMonth")){this._afterShowNextMonthChange();}},isSelected:function(x){if(x instanceof Date){return(x==this._selectedDate);}else{if(x instanceof b.Node){return(this._nodeToDate(x)==this._selectedDate);}else{return false;}}},select:function(z){var x,y;if(z instanceof Date){x=z;}else{if(z instanceof b.Node){x=this._nodeToDate(z);if(x==null){return;}}}this._selectedDate=x;this._renderSelectedDates();},deselect:function(z){var x,y;if(z instanceof Date){x=z;y=this._dateToNode(x);}else{if(z instanceof b.Node){x=this._nodeToDate(z);if(x==null){return;}}}this._selectedDate=null;this._renderSelectedDates();},_renderSelectedDates:function(){this.get("contentBox").all("."+c).removeClass(c);if(this._selectedDate!=null&&this.get("date").getFullYear()==this._selectedDate.getFullYear()&&this.get("date").getMonth()==this._selectedDate.getMonth()){this._dateToNode(this._selectedDate).addClass(c);}},_dateToNode:function(A){var x=A.getDate();var y=0;var z=x%7;switch(z){case (0):if(this._cutoffColumn>=6){y=12;}else{y=5;}break;case (1):y=6;break;case (2):if(this._cutoffColumn>0){y=7;}else{y=0;}break;case (3):if(this._cutoffColumn>1){y=8;}else{y=1;}break;case (4):if(this._cutoffColumn>2){y=9;}else{y=2;}break;case (5):if(this._cutoffColumn>3){y=10;}else{y=3;}break;case (6):if(this._cutoffColumn>4){y=11;}else{y=4;}break;}return(this.get("contentBox").one("#calendar_"+y+"_"+x));},_nodeToDate:function(A){var y=this.get("date").getFullYear();var z=this.get("date").getMonth();var x=parseInt(A.get("id").split("_")[2]);console.log("Got node "+A.get("id")+", which resulted in "+y+"/"+z+"/"+x);return new Date(y,z,x);},_bindCalendarEvents:function(){},_getCutoffColumn:function(y,A){var z=new Date(y.getFullYear(),y.getMonth(),1);var B=z.getDay()-A;var x=6-(B+7)%7;return x;},_afterShowNextMonthChange:function(){var z=this.get("contentBox");z.one("#calendar_6_29").removeClass(m);z.one("#calendar_7_30").removeClass(m);z.one("#calendar_8_31").removeClass(m);z.one("#calendar_0_30").removeClass(m);z.one("#calendar_1_31").removeClass(m);if(this.get("showNextMonth")){var y=1;for(var x=this._daysInMonth-22;x<this._cutoffColumn+7;x++){z.one("#calendar_"+x+"_"+(x+23)).setContent(y++).addClass(m);}var A=this._cutoffColumn;if(this._daysInMonth==31&&(this._cutoffColumn<=1)){A=2;}else{if(this._daysInMonth==30&&this._cutoffColumn==0){A=1;}}for(var x=A;x<this._cutoffColumn+7;x++){z.one("#calendar_"+x+"_"+(x+30)).setContent(y++).addClass(m);}}else{for(var x=this._daysInMonth-22;x<=12;x++){z.one("#calendar_"+x+"_"+(x+23)).setContent("").addClass(m);}var A=0;if(this._daysInMonth==31&&(this._cutoffColumn<=1)){A=2;}else{if(this._daysInMonth==30&&this._cutoffColumn==0){A=1;}}for(var x=A;x<=12;x++){z.one("#calendar_"+x+"_"+(x+30)).setContent("").addClass(m);}}},_afterShowPrevMonthChange:function(){var y=this.get("contentBox");if(this.get("showPrevMonth")){var z=i.daysInMonth(i.addMonths(this.get("date"),-1));if(z!=this._daysInPrevMonth){this._daysInPrevMonth=z;for(var x=5;x>=0;x--){y.one("#calendar_"+x+"_"+(x-5)).setContent(z--);}}}else{this._daysInPrevMonth=0;for(var x=5;x>=0;x--){y.one("#calendar_"+x+"_"+(x-5)).setContent("");}}},_afterDateChange:function(){var y=this.get("date"),D=this.get("strings.first_weekday")||0,C=this._getCutoffColumn(y,D),z=i.daysInMonth(y),x=this.get("contentBox"),E=x.one("."+p);this._cutoffColumn=C;this._daysInMonth=z;x.setStyle("visibility","hidden");E.setContent((y.getMonth()+1)+"/"+y.getFullYear());for(var B=0;B<=12;B++){var A=x.all("."+"calendar_col"+B);A.removeClass(q);if(B<C||B>=(C+7)){A.addClass(q);}else{switch(B){case 0:x.one("#calendar_0_30").setContent((z>=30)?"30":"");case 1:x.one("#calendar_1_31").setContent((z>=31)?"31":"");case 6:x.one("#calendar_6_29").setContent((z>=29)?"29":"");case 7:x.one("#calendar_7_30").setContent((z>=30)?"30":"");case 8:x.one("#calendar_8_31").setContent((z>=31)?"31":"");}}}if(this.get("showPrevMonth")){this._afterShowPrevMonthChange();}if(this.get("showNextMonth")){this._afterShowNextMonthChange();}this._renderSelectedDates();x.setStyle("visibility","visible");},_initCalendarHTML:function(D){var B=i.isValidDate(D)?D:new Date(),K={calheader:(B.getMonth()+1)+"/"+B.getFullYear()},x="",z=this.get("strings.very_short_weekdays")||["Su","Mo","Tu","We","Th","Fr","Sa"],C=this.get("strings.first_weekday")||0,N=this._getCutoffColumn(B,C),y=i.daysInMonth(B);this._cutoffColumn=N;this._daysInMonth=y;var G={};G["header_template"]=o(t.HEADER_TEMPLATE,K);G["weekday_row"]="";for(var M=C;M<=C+6;M++){G["weekday_row"]+=o(t.WEEKDAY_TEMPLATE,{weekdayname:z[M%7]});}G["weekday_row_template"]=o(t.WEEKDAY_ROW_TEMPLATE,G);var J=["","","","","",""];for(var E=0;E<=5;E++){for(var A=0;A<=12;A++){var O=7*E-5+A;var I=O;if(O<1||O>y){O="";}var F=(A>=N&&A<(N+7))?"":q;var L=v;if(I<1){L=a;}else{if(I>y){L=m;}}J[E]+=o(t.CALDAY_TEMPLATE,{day_content:O,calendar_col_class:"calendar_col"+A,calendar_col_visibility_class:F,calendar_day_class:L,calendar_day_id:"calendar_"+A+"_"+I});
}}G["body_template"]="";d(J,function(P){G["body_template"]+=o(t.CALDAY_ROW_TEMPLATE,{calday_row:P});});G["calendar_id"]=this._calendarId;var H=o(o(t.CONTENT_TEMPLATE,G),t.CALENDAR_STRINGS);return H;}},{CALENDAR_STRINGS:{calendar_grid_class:f,calendar_body_class:s,calendar_hd_class:j,calendar_hd_wrapper_class:p,calendar_weekdayrow_class:k,calendar_weekday_class:u,calendar_row_class:g,calendar_day_class:v,calendar_dayanchor_class:r},CONTENT_TEMPLATE:'<table class="{calendar_grid_class}" id="{calendar_id}">'+"<thead>"+"{header_template}"+"{weekday_row_template}"+"</thead>"+"<tbody>"+"{body_template}"+"</tbody>"+"</table>",HEADER_TEMPLATE:"<tr>"+'<th colspan="7" class="{calendar_hd_class}">'+'<span id="calheader" class="{calendar_hd_wrapper_class}">'+"{calheader}"+"</span>"+"</th>"+"</tr>",WEEKDAY_ROW_TEMPLATE:'<tr class="{calendar_weekdayrow_class}">'+"{weekday_row}"+"</tr>",CALDAY_ROW_TEMPLATE:'<tr class="{calendar_row_class}">'+"{calday_row}"+"</tr>",WEEKDAY_TEMPLATE:'<th class="{calendar_weekday_class}">{weekdayname}</th>',CALDAY_TEMPLATE:'<td class="{calendar_col_class} {calendar_day_class} {calendar_col_visibility_class}" id="{calendar_day_id}">'+"{day_content}"+"</td>",NAME:"calendarBase",ATTRS:{date:{value:new Date(),setter:function(x){return new Date(x.getFullYear(),x.getMonth(),1);}},month:Number,year:Number,showPrevMonth:{value:false},showNextMonth:{value:false},strings:{valueFn:function(){return b.Intl.get("calendar-base");}},headerRenderer:String}});},"@VERSION@",{lang:["en","ru"],requires:["widget","substitute","datatype-date","datatype-date-math"]});