import{a as q,b as B,c as be,j as ce,k as de,l as le}from"./chunk-IBWKDIRC.js";import"./chunk-QLPQ5V2Y.js";import"./chunk-VGQGUFLQ.js";import"./chunk-4P3W5NUL.js";import{c as ie,d as z,f as Q,g as G,h as W}from"./chunk-NJC4F6AZ.js";import{b as ae,g as oe,i as re,j as se,l as g}from"./chunk-EIUNIKIB.js";import{Ea as L,Eb as l,Fa as C,Fb as c,Gb as h,Hb as I,Ib as T,Jb as M,Kc as K,Lb as x,Mb as m,Mc as ee,Nb as P,Nc as R,Ob as w,Oc as te,Pb as E,Qc as ne,Rb as D,Sb as F,Ub as p,Wb as Y,aa as $,ab as s,ac as k,bb as y,ca as X,cc as _,e as ge,la as v,ma as b,na as J,pb as O,tb as f,tc as N,ub as u,vb as r,vc as A,wc as Z,xb as j,zb as S}from"./chunk-FCSPCV6K.js";var ve=["*",[["p-header"]]],ye=["*","p-header"],_e=i=>({$implicit:i}),pe=i=>({transitionParams:i}),Ce=i=>({value:"visible",params:i}),Ie=i=>({value:"hidden",params:i});function Te(i,a){if(i&1&&h(0,"span",11),i&2){let e=m(3);S(e.accordion.collapseIcon),r("ngClass",e.iconClass),u("aria-hidden",!0)}}function xe(i,a){if(i&1&&h(0,"ChevronDownIcon",11),i&2){let e=m(3);r("ngClass",e.iconClass),u("aria-hidden",!0)}}function Ae(i,a){if(i&1&&(I(0),f(1,Te,1,4,"span",9)(2,xe,1,2,"ChevronDownIcon",10),T()),i&2){let e=m(2);s(),r("ngIf",e.accordion.collapseIcon),s(),r("ngIf",!e.accordion.collapseIcon)}}function Se(i,a){if(i&1&&h(0,"span",11),i&2){let e=m(3);S(e.accordion.expandIcon),r("ngClass",e.iconClass),u("aria-hidden",!0)}}function we(i,a){if(i&1&&h(0,"ChevronRightIcon",11),i&2){let e=m(3);r("ngClass",e.iconClass),u("aria-hidden",!0)}}function Ee(i,a){if(i&1&&(I(0),f(1,Se,1,4,"span",9)(2,we,1,2,"ChevronRightIcon",10),T()),i&2){let e=m(2);s(),r("ngIf",e.accordion.expandIcon),s(),r("ngIf",!e.accordion.expandIcon)}}function De(i,a){if(i&1&&(I(0),f(1,Ae,3,2,"ng-container",3)(2,Ee,3,2,"ng-container",3),T()),i&2){let e=m();s(),r("ngIf",e.selected),s(),r("ngIf",!e.selected)}}function Fe(i,a){}function ke(i,a){i&1&&f(0,Fe,0,0,"ng-template")}function He(i,a){if(i&1&&(l(0,"span",12),p(1),c()),i&2){let e=m();s(),Y(" ",e.header," ")}}function Le(i,a){i&1&&M(0)}function Oe(i,a){i&1&&w(0,1,["*ngIf","hasHeaderFacet"])}function je(i,a){i&1&&M(0)}function Me(i,a){if(i&1&&(I(0),f(1,je,1,0,"ng-container",6),T()),i&2){let e=m();s(),r("ngTemplateOutlet",e.contentTemplate)}}var Pe=["*"],V=(()=>{class i{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new C;headerFacet;templates;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(e,n,t){this.el=n,this.changeDetector=t,this.accordion=e,this.id=ae()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:n});else{if(!this.accordion.multiple)for(var t=0;t<this.accordion.tabs.length;t++)this.accordion.tabs[t].selected&&(this.accordion.tabs[t].selected=!1,this.accordion.tabs[t].selectedChange.emit(!1),this.accordion.tabs[t].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){e=n;break}return e}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(n){return new(n||i)(y($(()=>U)),y(L),y(N))};static \u0275cmp=b({type:i,selectors:[["p-accordionTab"]],contentQueries:function(n,t,o){if(n&1&&(E(o,oe,4),E(o,re,4)),n&2){let d;D(d=F())&&(t.headerFacet=d),D(d=F())&&(t.templates=d)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[v.HasDecoratorInputTransform,"disabled","disabled",A],cache:[v.HasDecoratorInputTransform,"cache","cache",A],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[v.HasDecoratorInputTransform,"headerAriaLevel","headerAriaLevel",Z]},outputs:{selectedChange:"selectedChange"},features:[O],ngContentSelectors:ye,decls:12,vars:44,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"click","keydown","ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(n,t){n&1&&(P(ve),l(0,"div",0)(1,"div",1)(2,"a",2),x("click",function(d){return t.toggle(d)})("keydown",function(d){return t.onKeydown(d)}),f(3,De,3,2,"ng-container",3)(4,ke,1,0,null,4)(5,He,2,1,"span",5)(6,Le,1,0,"ng-container",6)(7,Oe,1,0,"ng-content",3),c()(),l(8,"div",7)(9,"div",8),w(10),f(11,Me,2,1,"ng-container",3),c()()()),n&2&&(j("p-accordion-tab-active",t.selected),r("ngClass",t.tabStyleClass)("ngStyle",t.tabStyle),u("data-pc-name","accordiontab"),s(),j("p-highlight",t.selected)("p-disabled",t.disabled),u("aria-level",t.headerAriaLevel)("data-p-disabled",t.disabled)("data-pc-section","header"),s(),r("ngClass",t.headerStyleClass)("ngStyle",t.headerStyle),u("tabindex",t.disabled?null:0)("id",t.getTabHeaderActionId(t.id))("aria-controls",t.getTabContentId(t.id))("aria-expanded",t.selected)("aria-disabled",t.disabled)("data-pc-section","headeraction"),s(),r("ngIf",!t.iconTemplate),s(),r("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",_(34,_e,t.selected)),s(),r("ngIf",!t.hasHeaderFacet),s(),r("ngTemplateOutlet",t.headerTemplate),s(),r("ngIf",t.hasHeaderFacet),s(),r("@tabContent",t.selected?_(38,Ce,_(36,pe,t.transitionOptions)):_(42,Ie,_(40,pe,t.transitionOptions))),u("id",t.getTabContentId(t.id))("aria-hidden",!t.selected)("aria-labelledby",t.getTabHeaderActionId(t.id))("data-pc-section","toggleablecontent"),s(),r("ngClass",t.contentStyleClass)("ngStyle",t.contentStyle),s(2),r("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected)))},dependencies:()=>[K,ee,te,R,B,q],styles:[`@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}
`],encapsulation:2,data:{animation:[ie("tabContent",[G("hidden",Q({height:"0",visibility:"hidden"})),G("visible",Q({height:"*",visibility:"visible"})),W("visible <=> hidden",[z("{{transitionParams}}")]),W("void => *",z(0))])]},changeDetection:0})}return i})(),U=(()=>{class i{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new C;onOpen=new C;activeIndexChange=new C;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(e,n){this.el=e,this.changeDetector=n}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}focusedElementIsAccordionHeader(){return document.activeElement.tagName.toLowerCase()==="a"&&document.activeElement.classList.contains("p-accordion-header-link")}onTabArrowDownKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findNextHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}}onTabArrowUpKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findPrevHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&(g.focus(e),this.selectOnFocus&&this.tabs.forEach((n,t)=>{let o=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),n.id==e.id&&(n.selected=!n.selected,this._activeIndex.includes(t)?this._activeIndex=this._activeIndex.filter(d=>d!==t):this._activeIndex.push(t))):n.id==e.id?(n.selected=!n.selected,this._activeIndex=t):n.selected=!1,n.selectedChange.emit(o),this.activeIndexChange.emit(this._activeIndex),n.changeDetector.markForCheck()}))}findNextHeaderAction(e,n=!1){let t=n?e:e.nextElementSibling,o=g.findSingle(t,'[data-pc-section="header"]');return o?g.getAttribute(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement.parentElement):g.findSingle(o,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(e,n=!1){let t=n?e:e.previousElementSibling,o=g.findSingle(t,'[data-pc-section="header"]');return o?g.getAttribute(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement.parentElement):g.findSingle(o,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes[0];return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes,n=e[e.length-1];return this.findPrevHeaderAction(n,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let n=this.multiple?this._activeIndex.includes(e):e===this._activeIndex;n!==this.tabs[e].selected&&(this.tabs[e].selected=n,this.tabs[e].selectedChange.emit(n),this.tabs[e].changeDetector.markForCheck())}}isTabActive(e){return this.multiple?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,n){return e.props?e.props[n]:void 0}updateActiveIndex(){let e=this.multiple?[]:null;this.tabs.forEach((n,t)=>{if(n.selected)if(this.multiple)e.push(t);else{e=t;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||i)(y(L),y(N))};static \u0275cmp=b({type:i,selectors:[["p-accordion"]],contentQueries:function(n,t,o){if(n&1&&E(o,V,5),n&2){let d;D(d=F())&&(t.tabList=d)}},hostAttrs:[1,"p-element"],hostBindings:function(n,t){n&1&&x("keydown",function(d){return t.onKeydown(d)})},inputs:{multiple:[v.HasDecoratorInputTransform,"multiple","multiple",A],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:[v.HasDecoratorInputTransform,"selectOnFocus","selectOnFocus",A],headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},features:[O],ngContentSelectors:Pe,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(n,t){n&1&&(P(),l(0,"div",0),w(1),c()),n&2&&(S(t.styleClass),r("ngClass","p-accordion p-component")("ngStyle",t.style))},dependencies:[K,R],encapsulation:2,changeDetection:0})}return i})(),me=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=J({type:i});static \u0275inj=X({imports:[ne,B,q,se]})}return i})();var H=ge(be());var ue=(()=>{let a=class a{constructor(){this.centroid=[11.3,121.3],this.projects=[{name:"Ibaan, Batangas",centroid:[13.834923258871788,121.10927546842711]}],this.projectNames=this.projects.map(n=>n.name)}ngOnInit(){this.map=H.map("map-viewer",{layers:[le.esriWorldImagery]}).setView(this.centroid,5),this.projects.forEach(n=>{H.marker(n.centroid).addTo(this.map).bindPopup(n.name)})}projectSelected(n){let t=this.projects.find(o=>o.name===n.value);this.map.setView(t?.centroid,11)}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=b({type:a,selectors:[["app-map-viewer"]],standalone:!0,features:[k],decls:3,vars:1,consts:[[1,"m-4","flex","flex-column","gap-2"],["placeholder","Select a Project",3,"onChange","options"],["id","map-viewer",1,"h-25rem"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"p-dropdown",1),x("onChange",function(fe){return o.projectSelected(fe)}),c(),h(2,"div",2),c()),t&2&&(s(),r("options",o.projectNames))},dependencies:[de,ce],styles:["#map-viewer[_ngcontent-%COMP%]{z-index:0}"]});let i=a;return i})();var dt=(()=>{let a=class a{};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=b({type:a,selectors:[["app-home"]],standalone:!0,features:[k],decls:26,vars:0,consts:[[1,"flex","align-items-center","pt-2"],["src","assets/images/map_icon.png","width","100rem","alt","Map Icon"],[1,"card","flex","justify-content-center"],["header","Description"],["header","Projection"],[1,"text-xs"],["href","https://epsg.io/4326"],["header","Information Technology and Software Deployment (Server)"]],template:function(t,o){t&1&&(l(0,"div",0),h(1,"img",1),l(2,"p"),p(3," The Parcellary Tax-Web Visualization project of the City of Ibaan, this program is organized and initiated as part of Executive Order No. 104, S. 2023 with the purpose to support web-mapping in Ibaan, for open sourced layer map and in return serving all offices, Ibaan Smart City and all parcellary in barangay level. "),c()(),l(4,"div",2)(5,"p-accordion")(6,"p-accordionTab",3)(7,"p"),p(8," This application contains data gathered using aerial photography that captures high-resolution images applied in boundary delineation, road networks and street evaluation. The high-resolution visuals serve as the foundation for accurate mapping and spatial analysis. It also includes tax values, names, lot details provided \u201CAs Is\u201D and \u201CAs Available\u201D basis. This visualization tool offers to assist the municipal office of Ibaan, Batangas for viewing and informational searches in identifying tax values and monitoring property tax payments. The data provided in this online lookup is connected to an existing database and is being updated periodically by the municipal office. Information can be queried by owner name, lot number and property type. Aside from the aerial photography, third-party resources (Google Earth and OSM) were also used as the base map for additional visualization experience. Although, some data may be in conflict with some municipal information. "),c()(),l(9,"p-accordionTab",4)(10,"p"),p(11," The Geodetic CRS adopted is the World Geodetic System (WGS) 84 and its data source is the European Petroleum Survey Group (EPSG) 4326. This is the commonly utilized projection in the Philippines. The scope of this projection is a horizontal component of a 3D system and its area of use is the world. "),c(),l(12,"p",5),p(13," Reference: "),l(14,"a",6),p(15,"https://epsg.io/4326"),c()()(),l(16,"p-accordionTab",7)(17,"p")(18,"b"),p(19,"GitHub"),c(),p(20," - Open source community and fundamental build software. Git software, providing the distributed version for the access and control, bug tracking, software feature request, task management, continuous integration. "),c(),l(21,"p")(22,"b"),p(23,"QGIS"),c(),p(24," - Open source software for spatial visualization and decision-making tools. For creating, editing, visualizing, analyzing and publishing geospatial information. Geojson- open stardard format designed for representing simple geographical features, along with their non-spatial attributes. XML-Extensible Markup Language, create common information formats and share both the format data World Wide Web "),c()()()(),h(25,"app-map-viewer"))},dependencies:[me,U,V,ue]});let i=a;return i})();export{dt as HomeComponent};
