"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[7733],{85405:(N,I,t)=>{t.d(I,{B:()=>O,D:()=>A,H:()=>T,R:()=>$});var l=t(74081),v=t(85898),s=t(78565),P=t(1296),p=t(796),m=t(49969),f=t(34041),M=t(94486),S=t(3494),y=t(98447),k=t(61020),j=t(50637),C=t(47706),R=t(19003);const u=(0,R.default)(v.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`,D=({name:w})=>(0,l.jsxs)(v.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,M.Q1)(300),children:[(0,l.jsx)(u,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,l.jsx)(S.Z,{width:`${8/16}rem`})}),(0,l.jsx)(s.Z,{fontWeight:"bold",children:w})]}),A=()=>(0,l.jsx)(j.D,{renderItem:w=>{if(w.type===C.D.STAGE)return(0,l.jsx)(D,{name:typeof w.item=="string"?w.item:null})}}),$=({children:w})=>(0,l.jsx)(P.A,{children:(0,l.jsx)(p.o,{tabIndex:-1,children:(0,l.jsx)(m.D,{children:w})})}),O=({href:w})=>{const{formatMessage:Z}=(0,k.Z)();return(0,l.jsx)(M.rU,{startIcon:(0,l.jsx)(y.Z,{}),to:w,children:Z({id:"global.back",defaultMessage:"Back"})})},T=({title:w,subtitle:Z,navigationAction:J,primaryAction:q})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(M.SL,{name:w}),(0,l.jsx)(f.T,{navigationAction:J,primaryAction:q,title:w,subtitle:Z})]})},93836:(N,I,t)=>{t.d(I,{a:()=>P,g:()=>s});var l=t(20640),v=t(47706);function s(p){if(!p)return null;const f=Object.entries(l.W.colors).filter(([,M])=>M.toUpperCase()===p.toUpperCase()).reduce((M,[S])=>(v.S?.[S]&&(M=S),M),null);return f?{themeColorName:f,name:v.S[f]}:null}function P(){return Object.entries(v.S).map(([p,m])=>({hex:l.W.colors[p].toUpperCase(),name:m}))}},87137:(N,I,t)=>{t.d(I,{u:()=>p});var l=t(27279),v=t(94486),s=t(61020),P=t(40464);const p=(m={},f={})=>{const{id:M="",...S}=m,{get:y}=(0,v.kY)(),{locale:k}=(0,s.Z)(),j=(0,v.Xe)(k,{sensitivity:"base"}),{data:C,error:R,isError:u,isLoading:D,refetch:A}=(0,P.useQuery)(["roles",M,S],async()=>{const{data:O}=await y(`/admin/roles/${M??""}`,{params:S});return O},f);return{roles:l.useMemo(()=>{let O=[];return C&&(Array.isArray(C.data)?O=C.data:O=[C.data]),[...O].sort((T,w)=>j.compare(T.name,w.name))},[C,j]),error:R,isError:u,isLoading:D,refetch:A}}},59491:(N,I,t)=>{t.d(I,{u:()=>p});var l=t(27279),v=t(94486),s=t(53532),P=t(40464);function p(){const{get:m}=(0,v.kY)(),{formatAPIError:f}=(0,v.So)(),M=(0,v.lm)(),S=(0,P.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:u}}=await m("/content-manager/components");return u},onError(u){u instanceof s.d7&&M({type:"warning",message:f(u)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:u}}=await m("/content-manager/content-types");return u},onError(u){u instanceof s.d7&&M({type:"warning",message:f(u)})}}]),[y,k]=S,j=y.isLoading||k.isLoading,C=l.useMemo(()=>(k?.data??[]).filter(u=>u.kind==="collectionType"&&u.isDisplayed),[k?.data]),R=l.useMemo(()=>(k?.data??[]).filter(u=>u.kind!=="collectionType"&&u.isDisplayed),[k?.data]);return{isLoading:j,components:l.useMemo(()=>y?.data??[],[y?.data]),collectionTypes:C,singleTypes:R}}},60625:(N,I,t)=>{t.d(I,{u:()=>P});var l=t(27279),v=t(94486),s=t(40464);function P(p={}){const{get:m}=(0,v.kY)(),{id:f="",...M}=p,S={populate:"stages"},{data:y,isLoading:k,status:j,refetch:C}=(0,s.useQuery)(["review-workflows","workflows",f],async()=>{const{data:D}=await m(`/admin/review-workflows/workflows/${f}`,{params:{...S,...M}});return D}),R=l.useMemo(()=>{let D=[];return y?.data&&(Array.isArray(y.data)?D=y.data:D=[y.data]),D},[y]);return{meta:l.useMemo(()=>{let D;return y&&"meta"in y&&(D=y.meta),D},[y]),workflows:R,isLoading:k,status:j,refetch:C}}},90947:(N,I,t)=>{t.d(I,{S:()=>et,W:()=>at,a:()=>$e,b:()=>Ee,c:()=>fe,d:()=>xe,e:()=>Ae,f:()=>je,g:()=>be,h:()=>ge,i:()=>Be,j:()=>He,k:()=>Ne,l:()=>Te,r:()=>Ie,s:()=>Ze,u:()=>Se,v:()=>nt});var l=t(27279),v=t(50637),s=t(74081),P=t(52185),p=t(78565),m=t(85898),f=t(35632),M=t(2667),S=t(17992),y=t(83337),k=t(3408),j=t(82336),C=t(90529),R=t(49899),u=t(19098),D=t(73105),A=t(94486),$=t(61020),O=t(59461),T=t(19003),w=t(73576),Z=t(96112),J=t(67216),q=t(20049),we=t(70627),ce=t(56498),z=t(88941),H=t(71563),Pe=t(92241),i=t(47706),ee=t(93836),L=t(45648),De=t(6078),_e=t(61815),Oe=t(43433),W=t(47853);function Se(e,a){const o=(0,v.q)();(0,l.useEffect)(()=>{o.injectReducer(e,a)},[o,e,a])}function Ce(e){return{type:i.j,payload:{id:e}}}function Te({workflow:e}){return{type:i.A,payload:e}}function xe({workflows:e}){return{type:i.c,payload:e}}function ke(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,a){return{type:i.l,payload:{stageId:e,...a}}}function Re(e){return{type:i.m,payload:e}}function We(e,a){return{type:i.n,payload:{newIndex:a,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function Ie(){return{type:i.e}}function Ae(e){return{type:i.f,payload:e}}function je(e){return{type:i.g,payload:e}}function be(e){return{type:i.h,payload:e}}const se=(0,T.default)(w.Z)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Le=(0,T.default)(P.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${p.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${p.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...a})=>(0,s.jsx)(Le,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...a,children:(0,s.jsxs)(m.k,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(p.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:we.node.isRequired};const V={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Be(e=V,a){return(0,_e.Uy)(e,o=>{const{payload:c}=a;switch(a.type){case i.f:{o.serverState.contentTypes=c;break}case i.h:{o.clientState.isLoading=c;break}case i.g:{o.serverState.roles=c;break}case i.A:{const n=c;n&&(o.serverState.workflow=n,o.clientState.currentWorkflow.data={...n,stages:n.stages.map(d=>({...d,color:d?.color??i.b}))});break}case i.c:{o.serverState.workflows=c;break}case i.e:{o.clientState=V.clientState,o.serverState=(0,_e.P2)(V.serverState);break}case i.k:{const{stageId:n}=c,{currentWorkflow:d}=e.clientState;o.clientState.currentWorkflow.data.stages=d.data.stages?.filter(E=>(E?.id??E.__temp_key__)!==n);break}case i.d:{const{currentWorkflow:n}=e.clientState;n.data||(o.clientState.currentWorkflow.data={stages:[]});const d=me(o.clientState.currentWorkflow.data.stages);o.clientState.currentWorkflow.data.stages?.push({...c,color:c?.color??i.b,__temp_key__:d});break}case i.j:{const{currentWorkflow:n}=e.clientState,{id:d}=c,E=n.data.stages?.findIndex(h=>(h?.id??h?.__temp_key__)===d);if(E!==void 0&&E!==-1){const h=n.data.stages?.[E];o.clientState.currentWorkflow.data.stages?.splice(E+1,0,{...h,id:void 0,__temp_key__:me(o.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:n}=e.clientState,{stageId:d,...E}=c;o.clientState.currentWorkflow.data.stages=n.data.stages?.map(h=>(h.id??h.__temp_key__)===d?{...h,...E}:h);break}case i.m:{const{currentWorkflow:n}=e.clientState;o.clientState.currentWorkflow.data.stages=n.data.stages?.map(d=>({...d,...c}));break}case i.n:{const{currentWorkflow:{data:{stages:n}}}=e.clientState,{newIndex:d,oldIndex:E}=c;if(n&&d>=0&&d<n.length){const h=n[E],b=[...n];b.splice(E,1),b.splice(d,0,h),o.clientState.currentWorkflow.data.stages=b}break}case i.i:{o.clientState.currentWorkflow.data={...o.clientState.currentWorkflow.data,...c};break}}})}const me=(e=[])=>{const a=e.map(o=>Number(o.id??o.__temp_key__));return Math.max(...a,-1)+1},B=e=>e[i.R]??V,Ue=(0,L.P1)(B,({serverState:{contentTypes:e}})=>e),fe=(0,L.P1)(B,({serverState:{roles:e}})=>e),Ee=(0,L.P1)(B,({clientState:{currentWorkflow:e}})=>e.data),Ke=(0,L.P1)(B,({serverState:{workflows:e}})=>e),$e=(0,L.P1)(B,({serverState:e,clientState:{currentWorkflow:a}})=>!De(e.workflow,a.data)),Ne=(0,L.P1)(B,({serverState:e,clientState:{currentWorkflow:a}})=>!(e.workflow?.stages??[]).every(o=>!!a.data.stages?.find(({id:c})=>c===o.id))),Ze=(0,L.P1)(B,({clientState:{isLoading:e}})=>e),He=(0,L.P1)(B,({serverState:e})=>e),Fe=(0,T.default)(f.ML)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,ze=(0,T.default)(m.k)`
  > * {
    flex-grow: 1;
  }
`,Ve=(0,T.default)(ce.sN)`
  color: ${({theme:e})=>e.colors.danger600};
`,Xe=(0,T.default)(z.xz)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Qe=(0,T.default)(M.h)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Ye=(0,ee.a)(),Ge=()=>(0,s.jsx)(P.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Je=({id:e,index:a,canDelete:o,canReorder:c,canUpdate:n,isOpen:d=!1,stagesCount:E})=>{const h=r=>`${r+1} of ${E}`,b=r=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:U.value,position:h(r)}))},ae=r=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:U.value,position:h(r)}))},X=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:U.value}))},ne=(r,K)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:U.value,position:h(r)})),x(We(K,r))},oe=()=>{ie(!0)},[Q,_]=l.useState(null),{formatMessage:g}=(0,$.Z)(),{trackUsage:re}=(0,A.rS)(),x=(0,O.I0)(),ot=(0,A.lm)(),[le,rt]=l.useState(d),[lt,ie]=l.useState(!1),[U,he,it]=(0,H.U$)(`stages.${a}.name`),[Y,ve,dt]=(0,H.U$)(`stages.${a}.color`),[F,Me,ct]=(0,H.U$)(`stages.${a}.permissions`),_t=(0,O.v9)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,Et,ye]=(0,v.r)(c,{index:a,item:{index:a,name:U.value},onGrabItem:b,onDropItem:ae,onMoveItem:ne,onCancel:X,type:i.D.STAGE}),ht=(0,v.t)(mt,ft),vt=Ye.map(({hex:r,name:K})=>({value:r,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:K}),color:r})),{themeColorName:Mt}=(0,ee.g)(Y.value)??{},de=_t?.filter(r=>r.code!=="strapi-super-admin");return l.useEffect(()=>{ye((0,Pe.rX)(),{captureDraggingState:!1})},[ye,a]),(0,s.jsxs)(P.x,{ref:r=>ht(r),children:[Q&&(0,s.jsx)(S.T,{"aria-live":"assertive",children:Q}),ut?(0,s.jsx)(Ge,{}):(0,s.jsxs)(y.U,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:he.error??ve?.error??Me?.error,hasErrorMessage:!1,children:[(0,s.jsx)(k.B,{title:U.value,togglePosition:"left",action:(o||n)&&(0,s.jsxs)(m.k,{children:[(0,s.jsxs)(z.fC,{children:[(0,s.jsxs)(Xe,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(Z.Z,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(S.T,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(z.VY,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(z.rl,{children:[n&&(0,s.jsx)(ce.sN,{onClick:()=>x(Ce(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),o&&(0,s.jsx)(Ve,{onClick:()=>x(ke(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),n&&(0,s.jsx)(Qe,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:Et,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:r=>r.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(J.Z,{})})]})}),(0,s.jsx)(j.v,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(C.r,{gap:4,children:[(0,s.jsx)(R.P,{col:6,children:(0,s.jsx)(u.o,{...U,id:U.name,disabled:!n,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:he.error??!1,onChange:r=>{it.setValue(r.target.value),x(te(e,{name:r.target.value}))},required:!0})}),(0,s.jsx)(R.P,{col:6,children:(0,s.jsx)(D.q4,{disabled:!n,error:ve?.error??!1,id:Y.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:r=>{dt.setValue(r),x(te(e,{color:String(r)}))},value:Y.value.toUpperCase(),startIcon:(0,s.jsx)(m.k,{as:"span",height:2,background:Y.value,borderColor:Mt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:vt.map(({value:r,label:K,color:G})=>{const{themeColorName:yt}=(0,ee.g)(G)||{};return(0,s.jsx)(D.ag,{value:r,startIcon:(0,s.jsx)(m.k,{as:"span",height:2,background:G,borderColor:yt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:K},r)})})}),(0,s.jsx)(R.P,{col:6,children:de?.length===0?(0,s.jsx)(A.X0,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:F.name}):(0,s.jsxs)(m.k,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(ze,{grow:1,children:(0,s.jsx)(f.NU,{...F,disabled:!n,error:Me.error??!1,id:F.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:r=>{const K=r.map(G=>({role:parseInt(G,10),action:"admin::review-workflows.stage.transition"}));ct.setValue(K),x(te(e,{permissions:K}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(F.value??[]).map(r=>`${r.role}`),withTags:!0,children:(0,s.jsx)(f.Ab,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:de?.map(r=>`${r.id}`),children:de?.map(r=>(0,s.jsx)(Fe,{value:`${r.id}`,children:r.name},r.id))})})}),(0,s.jsx)(M.h,{disabled:!n,icon:(0,s.jsx)(q.Z,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>oe()})]})})]})})]}),(0,s.jsx)(A.QH.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{x(Re({permissions:F.value})),ie(!1),ot({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(A.QH.Body,{children:(0,s.jsx)(p.Z,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,T.default)(P.x)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:a=!0,stages:o=[]})=>{const{formatMessage:c}=(0,$.Z)(),n=(0,O.I0)(),{trackUsage:d}=(0,A.rS)();return(0,s.jsxs)(m.k,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(P.x,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(m.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:o.map((E,h)=>{const b=Number(E?.id??E.__temp_key__);return(0,s.jsx)(P.x,{as:"li",children:(0,s.jsx)(Je,{id:b,index:h,isOpen:!E.id,canDelete:o.length>1&&e,canReorder:o.length>1,canUpdate:a,stagesCount:o.length})},`stage-${b}`)})})]}),a&&(0,s.jsx)(pe,{type:"button",onClick:()=>{n(ge({name:""})),d("willCreateStage")},children:c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,T.default)(f.ML)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,T.default)(p.Z)`
  font-style: italic;
`,at=({canUpdate:e=!0})=>{const{formatMessage:a,locale:o}=(0,$.Z)(),c=(0,O.I0)(),n=(0,O.v9)(Ue),d=(0,O.v9)(Ee),E=(0,O.v9)(Ke),[h,b,ae]=(0,H.U$)("name"),[X,ne,oe]=(0,H.U$)("contentTypes"),Q=(0,A.Xe)(o,{sensitivity:"base"});return(0,s.jsxs)(C.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(R.P,{col:6,children:(0,s.jsx)(u.o,{...h,id:h.name,disabled:!e,label:a({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:b.error??!1,onChange:_=>{c(ue({name:_.target.value})),ae.setValue(_.target.value)},required:!0})}),n&&(0,s.jsx)(R.P,{col:6,children:(0,s.jsx)(f.NU,{...X,customizeContent:_=>a({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:ne.error??!1,id:X.name,label:a({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{c(ue({contentTypes:_})),oe.setValue(_)},placeholder:a({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...n.collectionTypes.length>0?[{label:a({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...n.collectionTypes].sort((_,g)=>Q.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...n.singleTypes.length>0?[{label:a({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...n.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(f.Ab,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=E?.find(x=>(d&&x.id!==d.id||!d)&&x.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(p.Z,{children:a({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...x)=>(0,s.jsx)(p.Z,{as:"em",fontWeight:"bold",children:x}),i:(...x)=>(0,s.jsx)(st,{children:x})})})},g.value)})},_.label)})})})]})};async function nt({values:e,formatMessage:a}){const o=W.Ry({contentTypes:W.IX().of(W.Z_()),name:W.Z_().max(255,a({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:W.IX().of(W.Ry().shape({name:W.Z_().required(a({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,a({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",a({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:n}}=this;return n?.stages.filter(d=>d.name===c).length===1}),color:W.Z_().required(a({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:W.IX(W.Ry({role:W.Rx().strict().typeError(a({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:W.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await o.validate(e,{abortEarly:!1,context:e}),!0}catch(c){const n={};return c instanceof W.p8&&c.inner.forEach(d=>{d.path&&Oe(n,d.path,d.message)}),n}}}}]);
