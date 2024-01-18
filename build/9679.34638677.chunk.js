(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[9679],{29520:N=>{function W(c,s,y,m){for(var j=-1,P=c==null?0:c.length;++j<P;){var O=c[j];s(m,O,y(O),c)}return m}N.exports=W},98694:(N,W,c)=>{var s=c(1107);function y(m,j,P,O){return s(m,function(L,S,B){j(O,L,P(L),B)}),O}N.exports=y},37177:(N,W,c)=>{var s=c(29520),y=c(98694),m=c(90040),j=c(26126);function P(O,L){return function(S,B){var F=j(S)?s:y,J=L?L():{};return F(S,O,m(B,2),J)}}N.exports=P},63799:(N,W,c)=>{var s=c(71041),y=c(37177),m=Object.prototype,j=m.hasOwnProperty,P=y(function(O,L,S){j.call(O,S)?O[S].push(L):s(O,S,[L])});N.exports=P},29679:(N,W,c)=>{"use strict";c.d(W,{P:()=>Bs,u:()=>Us});var s=c(74081),y=c(27279),m=c(85898),j=c(52185),P=c(83667),O=c(78565),L=c(51413),S=c(81565),B=c(37386),F=c(23851),J=c(3785),pe=c(14291),q=c(83337),he=c(3408),ge=c(82336),re=c(31078),He=c(90529),Ge=c(49899),Fe=c(12826),Ee=c(87161),ee=c(33832),me=c(94486),be=c(61815),xe=c(8175),A=c(98934),ae=c(10131),se=c(10124),Z=c(43433),K=c(61020),H=c(50637),Xe=c(76873),Ye=c(87830),fe=c(63799),Me=c(74919),$=c(19003),ze=c(3494),Qe=c(18602),Je=c(46078),qe=c(34268),es=c(31430),ss=c(40505),ts=c(51943),ns=c(40464);const[os,is]=(0,Xe.k)("PermissionsDataManager"),z=()=>is("usePermissionsDataManager"),Ae=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Ae(o)):t.push(o),t),[]):[],X=e=>(0,H.o)(e)?Ae(Object.values(e).map(t=>(0,H.o)(t)?X(t):t)):[],Pe=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),rs=e=>{const t=ve(e.plugins),o=ve(e.settings),n=Te(e.collectionTypes),r=Te(e.singleTypes);return[...t,...o,...n,...r]},ve=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:u,properties:{enabled:p}}])=>(p&&i.push({action:l,subject:null,conditions:Ce(u),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),Te=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[u,p]=l;if(!X(p).some(x=>x))return i;if(!p?.properties?.enabled){const x=Object.entries(p.properties).reduce((C,_)=>{const[h,f]=_;return C.properties[h]=De(f),C},{action:u,subject:r,conditions:Ce(p.conditions),properties:{}});return[...i,x]}return p.properties.enabled&&i.push({action:u,subject:r,properties:{},conditions:Ce(p.conditions)}),i},[]);return[...o,...d]},[]),De=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,H.o)(a)?[...o,...De(a,`${t}${r}.`)]:(a&&!(0,H.o)(a)&&o.push(`${t}${r}`),o)},[]),Ce=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Se=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),Le=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((u,p)=>{const g=Pe(o,p.action,null);return u[p.action]={properties:{enabled:g!==void 0},conditions:Se(t,g?.conditions??[])},u},{}),i),{});return n[r]=d,n},{}),as=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const u=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=u,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},$e=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,u)=>{const p=e.find(({uid:g})=>g===u)||null;return p&&(l[u]=p),l},{});if(se(d))return r;const i=Object.keys(d).reduce((l,u)=>{const{actionId:p,applyToProperties:g}=a,_=d[u].properties.map(({value:v})=>v).every(v=>(g||[]).indexOf(v)===-1),h=Pe(n,p,u),f=Se(o,h?.conditions??[]);if(l[u]||(l[u]={}),se(g)||_)return l[u][p]={properties:{enabled:h!==void 0},conditions:f},l;const E=as(g,d[u],h);return l[u][p]={...E,conditions:f},l},{});return Ye(r,i)},{}),ke=(e,t)=>Object.entries(fe(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(fe(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),le=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,H.o)(n)&&!ae(n,"conditions"))return{...t,[o]:le(n)};if((0,H.o)(n)&&ae(n,"conditions")&&!X(Me(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),te=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,H.o)(a)?{...n,[r]:te(a,t,r==="fields")}:(n[r]=t,n)},{}),w=`${120/16}rem`,_e=`${200/16}rem`,de=`${53/16}rem`,ye=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,Y=e=>{const t=ye(e),o=X(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},ce=e=>e.charAt(0).toUpperCase()+e.slice(1),Re=(0,$.default)(m.k)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,je=$.default.div`
  width: ${w};
`,Be=()=>(0,s.jsx)(j.x,{color:"danger700",paddingLeft:1,children:"*"}),Ie=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:u})=>{const{formatMessage:p}=(0,K.Z)();return(0,s.jsxs)(m.k,{alignItems:"center",paddingLeft:6,width:_e,shrink:0,children:[(0,s.jsx)(j.x,{paddingRight:2,children:(0,s.jsx)(P.C,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:u})}),(0,s.jsxs)(Re,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(O.Z,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:ce(a)}),t]})]})},ls=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,y.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(m.k,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(fs,{label:n,headers:d}),(0,s.jsx)(j.x,{children:t.map(({children:i,label:l,value:u,required:p},g)=>(0,s.jsx)(ds,{childrenForm:i,label:l,isFormDisabled:o,name:u,required:p,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},u))})]})},ds=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:u}=(0,K.Z)(),[p,g]=y.useState(null),{modifiedData:x,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=z(),f=p===n,E=(0,y.useMemo)(()=>Array.isArray(e)?e:[],[e]),v=E.length>0,k=y.useCallback(()=>{v&&g(T=>T===n?null:n)},[v,n]),b=({target:{value:T}})=>{C(a,i,n,T)},{hasAllActionsSelected:M,hasSomeActionsSelected:D}=(0,y.useMemo)(()=>cs(d,x,a,i,n),[d,x,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(us,{alignItems:"center",isCollapsable:v,isActive:f,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(m.k,{children:[(0,s.jsxs)(Ie,{onChange:b,onClick:k,isCollapsable:v,isFormDisabled:o,label:t,someChecked:D,value:M,isActive:f,children:[r&&(0,s.jsx)(Be,{}),(0,s.jsx)(ne,{$isActive:f})]}),(0,s.jsx)(m.k,{children:d.map(({label:T,isActionRelatedToCurrentProperty:I,actionId:U})=>{if(!I)return(0,s.jsx)(je,{},T);const R=[...a.split(".."),U,"properties",i,n];if(!v){const V=A(x,R,!1);return(0,s.jsx)(m.k,{width:w,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(P.C,{disabled:o,name:R.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),onValueChange:Ns=>{h({target:{name:R.join(".."),value:Ns}})},value:V})},U)}const Q=A(x,R,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:ie}=Y(Q);return(0,s.jsx)(m.k,{width:w,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(P.C,{disabled:o,name:R.join(".."),onValueChange:V=>{_({target:{name:R.join(".."),value:V}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),value:G,indeterminate:ie})},T)})})]})}),f&&(0,s.jsx)(We,{childrenForm:E,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},cs=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const u=A(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=u,i},{});return Y(d)},us=(0,$.default)(m.k)`
  height: ${de};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ne} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${oe(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&oe(t)};
`,ne=(0,$.default)(ze.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,We=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,K.Z)(),{modifiedData:l,onChangeParentCheckbox:u,onChangeSimpleCheckbox:p}=z(),[g,x]=y.useState(null),C=h=>{x(f=>f===h?null:h)},_=(0,y.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(j.x,{paddingLeft:"2rem",children:[(0,s.jsx)(gs,{}),e.map(({label:h,value:f,required:E,children:v},k)=>{const b=k+1<e.length,M=Array.isArray(v),D=g===f;return(0,s.jsxs)(ps,{isVisible:b,children:[(0,s.jsxs)(m.k,{height:de,children:[(0,s.jsx)(ms,{children:(0,s.jsx)(xs,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(m.k,{style:{flex:1},children:[(0,s.jsx)(hs,{level:o,isActive:D,isCollapsable:M,children:(0,s.jsxs)(Re,{alignItems:"center",isCollapsable:M,...M&&{onClick:()=>C(f),"aria-expanded":D,onKeyDown:({key:T})=>(T==="Enter"||T===" ")&&C(f),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(O.Z,{ellipsis:!0,children:ce(h)}),E&&(0,s.jsx)(Be,{}),(0,s.jsx)(ne,{$isActive:D})]})}),(0,s.jsx)(m.k,{style:{flex:1},children:r.map(({actionId:T,label:I,isActionRelatedToCurrentProperty:U})=>{if(!U)return(0,s.jsx)(je,{},T);const R=[...n.split(".."),T,"properties",d,...a.split(".."),f],Q=A(l,R,!1);if(!v)return(0,s.jsx)(m.k,{position:"relative",width:w,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(P.C,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${I}`}),onValueChange:V=>{p({target:{name:R.join(".."),value:V}})},value:Q})},I);const{hasAllActionsSelected:G,hasSomeActionsSelected:ie}=Y(Q);return(0,s.jsx)(m.k,{position:"relative",width:w,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(P.C,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${I}`}),onValueChange:V=>{u({target:{name:R.join(".."),value:V}})},value:G,indeterminate:ie},I)},I)})})]})]}),_&&D&&(0,s.jsx)(j.x,{paddingBottom:2,children:(0,s.jsx)(We,{isFormDisabled:t,parentName:`${a}..${f}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:_.children})})]},f)})]})},ps=(0,$.default)(j.x)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,hs=(0,$.default)(m.k)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ne} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${oe(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&oe(t)};
`,gs=$.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,ms=(0,$.default)(j.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,xs=$.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,fs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,K.Z)();return(0,s.jsxs)(m.k,{children:[(0,s.jsx)(m.k,{width:_e,height:de,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(O.Z,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(m.k,{width:w,shrink:0,justifyContent:"center",children:(0,s.jsx)(O.Z,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(m.k,{width:w,shrink:0},n.label))]})},oe=e=>(0,$.css)`
  ${O.Z} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ne} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,Cs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,K.Z)();return(0,s.jsx)(_s,{hasConditions:o,className:t,children:(0,s.jsx)(L.z,{variant:n,startIcon:(0,s.jsx)(Qe.Z,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},_s=(0,$.default)(j.x)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ue=(0,$.default)(Cs)``,Ke=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,K.Z)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=z(),u=y.useMemo(()=>Object.entries(fe(d,"category")),[d]),p=e.filter(({isDisplayed:h,hasSomeActionsSelected:f,hasAllActionsSelected:E})=>h&&Boolean(f||E)),[g,x]=y.useState(ys(p,i,u)),C=(h,f)=>{x((0,be.ZP)(E=>{E[h]||(E[h]={}),E[h].default||(E[h].default={}),E[h].default=f}))},_=()=>{const h=Object.entries(g).reduce((f,E)=>{const[v,k]=E,b=Object.values(k).reduce((M,D)=>({...M,...D}),{});return f[v]=b,f},{});l(h),r()};return(0,s.jsxs)(S.P,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(B.x,{children:(0,s.jsx)(es.O,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,f,E)=>(0,s.jsx)(ss.$,{isCurrent:f===E.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(F.f,{children:[p.length===0&&(0,s.jsx)(O.Z,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:p.map(({actionId:h,label:f,pathToConditionsObject:E},v)=>{const k=E.join("..");return(0,s.jsx)(js,{arrayOfOptionsGroupedByCategory:u,label:f,isFormDisabled:o,isGrey:v%2===0,name:k,onChange:C,value:A(g,k,{})},h)})})]}),(0,s.jsx)(J.m,{startActions:(0,s.jsx)(L.z,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(L.z,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},ys=(e,t,o)=>e.reduce((n,r)=>{const a=A(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[u,p]=l,g=p.reduce((x,C)=>(x[C.id]=A(a,C.id,!1),x),{});return i[u]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),js=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,K.Z)(),l=u=>{a&&a(r,bs(e,u))};return(0,s.jsxs)(m.k,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(m.k,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(O.Z,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(O.Z,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(O.Z,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(j.x,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(pe.Q,{id:r,customizeContent:(u=[])=>`${u.length} currently selected`,onChange:l,value:Os(d),options:Es(e),disabled:t})})]})},Os=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Es=e=>e.reduce((t,[o,n])=>(t.push({label:ce(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),bs=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),Ms=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=y.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:u},p)=>{const g=r===i,x=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(m.k,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(As,{availableActions:x,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&u.map(({label:C,value:_,children:h})=>(0,s.jsx)(ls,{availableActions:x,childrenForm:h,isFormDisabled:t,label:C,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},As=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=y.useState(!1),{formatMessage:u}=(0,K.Z)(),{modifiedData:p,onChangeParentCheckbox:g,onChangeSimpleCheckbox:x}=z(),C=()=>{l(M=>!M)},_=()=>{l(!1)},h=A(p,d.split(".."),{}),f=y.useMemo(()=>Object.keys(h).reduce((M,D)=>(M[D]=Me(h[D],"conditions"),M),{}),[h]),{hasAllActionsSelected:E,hasSomeActionsSelected:v}=Y(f),k=y.useMemo(()=>Ps(e,p,d),[e,p,d]),b=k.some(M=>M.hasConditions);return(0,s.jsxs)(vs,{isActive:t,children:[(0,s.jsxs)(Ue,{height:de,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Ie,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:v,value:E,isActive:t,children:(0,s.jsx)(Ve,{paddingLeft:2,children:t?(0,s.jsx)(Je.Z,{}):(0,s.jsx)(qe.Z,{})})}),(0,s.jsx)(m.k,{style:{flex:1},children:k.map(({actionId:M,hasSomeActionsSelected:D,isDisplayed:T,...I})=>{if(!T)return(0,s.jsx)(je,{},M);const{hasConditions:U,hasAllActionsSelected:R,isParentCheckbox:Q,checkboxName:G,label:ie}=I;return Q?(0,s.jsxs)(Ne,{justifyContent:"center",alignItems:"center",children:[U&&(0,s.jsx)(j.x,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(P.C,{disabled:n,name:G,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${ie} ${r}`}),onValueChange:V=>{g({target:{name:G,value:V}})},indeterminate:D,value:R})]},M):(0,s.jsxs)(Ne,{justifyContent:"center",alignItems:"center",children:[U&&(0,s.jsx)(j.x,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(P.C,{disabled:n,indeterminate:U,name:G,onValueChange:V=>{x({target:{name:G,value:V}})},value:R})]},M)})}),i&&(0,s.jsx)(Ke,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:k,isFormDisabled:n,onClosed:_,onToggle:C})]}),(0,s.jsx)(j.x,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ue,{onClick:C,hasConditions:b})})]})},Ps=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=se(a)?[...i,"properties","enabled"]:i,u=A(t,[...i,"conditions"],null),p={actionId:n,checkboxName:l.join(".."),hasConditions:X(u).some(_=>_),isDisplayed:r,label:d,pathToConditionsObject:i};if(se(a)){const _=A(t,l,!1);return{...p,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=A(t,l,null),{hasAllActionsSelected:x,hasSomeActionsSelected:C}=Y(g);return{...p,hasAllActionsSelected:x,hasSomeActionsSelected:C,isParentCheckbox:!0}}),Oe=(e,t)=>`
  ${Ue} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${Ve} {
    display: flex;
  }
  ${ue} {
    display: block;
  }
  &:hover {
    ${oe(e)}
  }

  &:focus-within {
    ${()=>Oe(e,t)}
  }
`,Ue=(0,$.default)(m.k)`
  border: 1px solid transparent;
`,vs=$.default.div`
  display: inline-flex;
  min-width: 100%;

  ${ue} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&Oe(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>Oe(e,t)}
  }
`,Ne=(0,$.default)(m.k)`
  width: ${w};
  position: relative;
`,Ve=(0,$.default)(j.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ts=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,K.Z)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=z(),d=e.filter(({subjects:l})=>l&&l.length),i=y.useMemo(()=>{const l=d.map(({actionId:x})=>x),u=r[o],p=l.reduce((x,C)=>(Object.keys(u).forEach(_=>{const h=A(u,[_,C]),f={[_]:ye(h)};x[C]?x[C]={...x[C],...f}:x[C]=f}),x),{});return Object.keys(p).reduce((x,C)=>(x[C]=Y(p[C]),x),{})},[r,d,o]);return(0,s.jsx)(j.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:_e},children:(0,s.jsx)(m.k,{gap:0,children:d.map(({label:l,actionId:u})=>(0,s.jsxs)(m.k,{shrink:0,width:w,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(O.Z,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(P.C,{disabled:t,onValueChange:p=>{a(o,u,p)},name:u,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:A(i,[u,"hasAllActionsSelected"],!1),indeterminate:A(i,[u,"hasSomeActionsSelected"],!1)})]},u))})})},Ze=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(Ds,{background:"neutral0",children:[(0,s.jsx)(Ts,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(Ms,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ds=(0,$.default)(j.x)`
  overflow-x: auto;
`,we=({layout:e,...t})=>{const[o,n]=y.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(j.x,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ss,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ss=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,K.Z)(),u=()=>{d(o)},p=o.split("::").pop()??"";return(0,s.jsxs)(q.U,{expanded:n,onToggle:u,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(he.B,{title:ce(p),description:`${l({id:"Settings.permissions.category",defaultMessage:p},{category:p})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(ge.v,{children:(0,s.jsx)(j.x,{padding:6,children:e.map(({actions:g,subCategoryName:x,subCategoryId:C})=>(0,s.jsx)(Ls,{actions:g,categoryName:p,isFormDisabled:r,subCategoryName:x,pathToData:[...i,C]},x))})})]})},Ls=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=y.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:u}=z(),{formatMessage:p}=(0,K.Z)(),g=A(i,r,{}),x=y.useMemo(()=>Object.keys(g).reduce((b,M)=>(b[M]=ye(g[M]),b),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:_}=Y(x),h=()=>{d(b=>!b)},f=()=>{d(!1)},E=y.useMemo(()=>e.map(b=>{const M=[...r,b.action,"properties","enabled"],D=A(i,M,!1),T=A(i,[...r,b.action,"conditions"],{}),I=X(T).some(U=>U);return{...b,isDisplayed:D,checkboxName:M.join(".."),hasSomeActionsSelected:D,value:D,hasConditions:I,label:b.displayName,actionId:b.action,pathToConditionsObject:[...r,b.action]}}),[e,i,r]),v=A(i,[...r],{}),k=X(Object.entries(v).reduce((b,M)=>{const[D,{conditions:T}]=M;return b[D]=T,b},{})).some(b=>b);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j.x,{children:[(0,s.jsxs)(m.k,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(j.x,{paddingRight:4,children:(0,s.jsx)(O.Z,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(j.x,{paddingLeft:4,children:(0,s.jsx)(re.X,{name:r.join(".."),disabled:o,onValueChange:b=>{l({target:{name:r.join(".."),value:b}})},indeterminate:_,value:C,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(m.k,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(He.r,{gap:2,style:{flex:1},children:E.map(({checkboxName:b,value:M,action:D,displayName:T,hasConditions:I})=>(0,s.jsx)(Ge.P,{col:3,children:(0,s.jsx)(ks,{disabled:o,hasConditions:I,children:(0,s.jsx)(re.X,{name:b,disabled:o,onValueChange:U=>{u({target:{name:b,value:U}})},value:M,children:T})})},D))}),(0,s.jsx)(ue,{hasConditions:k,onClick:h})]})]}),a&&(0,s.jsx)(Ke,{headerBreadCrumbs:[t,n],actions:E,isFormDisabled:o,onClosed:f,onToggle:h})]})},$s=(0,$.default)(j.x)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ks=$.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Bs=y.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=y.useReducer(Ws,Is,()=>Ks(e,o)),{formatMessage:l}=(0,K.Z)();y.useImperativeHandle(n,()=>({getPermissions(){const _=(0,me.e5)(r.collectionTypes,d.collectionTypes),h=(0,me.e5)(r.singleTypes,d.singleTypes),f={..._,...h};let E;return se(f)?E=!1:E=Object.values(f).some((v={})=>Object.values(v).some(k=>ae(k,"conditions"))),{permissionsToSend:rs(d),didUpdateConditions:E}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(_,h,f,E)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:f,value:E})},p=(_,h,f)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:f})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},x=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),C=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(os,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:x,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:p,children:(0,s.jsxs)(Fe.v,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(Ee.m,{children:Rs.map(_=>(0,s.jsx)(Ee.O,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(ee.n,{style:{position:"relative"},children:[(0,s.jsx)(ee.x,{children:(0,s.jsx)(Ze,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(ee.x,{children:(0,s.jsx)(Ze,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(ee.x,{children:(0,s.jsx)(we,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(ee.x,{children:(0,s.jsx)(we,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},Ws=(e,t)=>(0,be.ZP)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(A(e,d)).forEach(i=>{const l=A(e,[...d,i,r],void 0);if(l){let u=te(l,a);if(!a&&u.conditions){const p=te(u.conditions,!1);u={...u,conditions:p}}Z(o,[...d,i,r],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=xe(e.modifiedData);const l=n.split(".."),u=A(i,l,{});Object.keys(u).forEach(p=>{if(ae(u[p],`properties.${r}`)){const g=A(u,[p,"properties",r,a]),x=[...l,p,"properties",r,a];if(!(0,H.o)(g))Z(i,x,d);else{const C=te(g,d);Z(i,x,C)}}}),d||(i=le(i)),Z(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;Z(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=xe(e.modifiedData);Z(n,[...t.keys.split("..")],t.value),t.value||(n=le(n)),Z(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=xe(e.modifiedData);const i=A(d,a,{}),l=te(i,r);Z(d,a,l),r||(d=le(d)),Z(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ks=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:ke(a,"plugin"),settings:ke(d,"category")},l={collectionTypes:$e(n,o,t),singleTypes:$e(r,o,t),plugins:Le(i.plugins,o,t),settings:Le(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}},Us=(e={id:null},t={})=>{const{id:o,...n}=e,{get:r}=(0,me.kY)(),{data:a,error:d,isError:i,isLoading:l,refetch:u}=(0,ns.useQuery)(["roles",o,"permissions",n],async()=>{const{data:{data:p}}=await r(`/admin/roles/${o}/permissions`,{params:n});return p},t);return{permissions:a,error:d,isError:i,isLoading:l,refetch:u}}},14291:(N,W,c)=>{"use strict";c.d(W,{Q:()=>j});var s=c(74081),y=c(19003),m=c(35632);const j=({options:O,...L})=>(0,s.jsx)(m.NU,{...L,children:O.map(S=>"children"in S?(0,s.jsx)(m.Ab,{label:S.label,values:S.children.map(B=>B.value.toString()),children:S.children.map(B=>(0,s.jsx)(P,{value:B.value,children:B.label},B.value))},S.label):(0,s.jsx)(m.ML,{value:S.value,children:S.label},S.value))}),P=(0,y.default)(m.ML)`
  padding-left: ${({theme:O})=>O.spaces[7]};
`},31430:(N,W,c)=>{"use strict";c.d(W,{O:()=>B});var s=c(74081),y=c(27279),m=c(19003),j=c(52185),P=c(78565);const O=()=>(0,s.jsx)(j.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(P.Z,{variant:"pi",textColor:"neutral500",children:"/"})});O.displayName="Divider";var L=c(85898);const S=(0,m.default)(L.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:F})=>`calc(-1*${F.spaces[2]})`};
  }
`,B=({label:F,children:J,...pe})=>{const q=y.Children.toArray(J);return(0,s.jsx)(j.x,{"aria-label":F,...pe,children:(0,s.jsx)(S,{as:"ol",children:y.Children.map(q,(he,ge)=>{const re=q.length>1&&ge+1<q.length;return(0,s.jsxs)(L.k,{inline:!0,as:"li",children:[he,re&&(0,s.jsx)(O,{})]})})})})};B.displayName="Breadcrumbs"},40505:(N,W,c)=>{"use strict";c.d(W,{$:()=>j});var s=c(74081),y=c(52185),m=c(78565);const j=({children:P,isCurrent:O=!1,...L})=>(0,s.jsx)(y.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(m.Z,{variant:"pi",textColor:"neutral800",fontWeight:O?"bold":"normal","aria-current":O,...L,children:P})});j.displayName="Crumb"}}]);
