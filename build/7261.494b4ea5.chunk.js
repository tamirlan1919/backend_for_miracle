(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[7261,6589],{1786:h=>{function I(s,t,c,_){for(var E=c-1,P=s.length;++E<P;)if(_(s[E],t))return E;return-1}h.exports=I},12186:(h,I,s)=>{var t=s(36393),c=s(62878),_=s(1786),E=s(20435),P=s(22033),R=Array.prototype,T=R.splice;function K(u,x,W,Z){var z=Z?_:c,$=-1,V=x.length,r=u;for(u===x&&(x=P(x)),W&&(r=t(u,E(W)));++$<V;)for(var f=0,k=x[$],L=W?W(k):k;(f=z(r,L,f,Z))>-1;)r!==u&&T.call(r,f,1),T.call(u,f,1);return u}h.exports=K},58422:(h,I,s)=>{var t=s(36393),c=s(90040),_=s(92403),E=s(26126);function P(R,T){var K=E(R)?t:_;return K(R,c(T,3))}h.exports=P},22009:(h,I,s)=>{var t=s(52431),c=s(45906),_=t(c);h.exports=_},45906:(h,I,s)=>{var t=s(12186);function c(_,E){return _&&_.length&&E&&E.length?t(_,E):_}h.exports=c},34049:(h,I,s)=>{var t=s(20454);function c(_){var E=_==null?0:_.length;return E?t(_,1,E):[]}h.exports=c},37261:(h,I,s)=>{"use strict";s.d(I,{ProtectedCreateView:()=>cs});var t=s(74081),c=s(94486),_=s(59461),E=s(22037),P=s(56589),R=s(27279),T=s(40464),K=s(64797),u=s(85811),x=s(50637),W=s(15816),Z=s(97442),z=s(13576),$=s(87830),V=s(47184),r=s(364),f=s(71563),k=s(49204),L=s(47853),J=s(74919),b=s(29206),Q=s(98934),w=s(43433),as=s(75719),F=s(8175),y=s(6078),os=s(51943),ls=s(55783),is=s(92249),_s=s(41942),ds=s(22919),G=s(53915),Es=s(75041),j=s(30200),rs=s(91379),q=s(33299),As=s(33409),hs=s(63645),Ts=s(7988),ms=s(7055),gs=s(26757),Cs=s(58311),vs=s(29510),ps=s(16946),Is=s(10124),Ls=s(69530),Rs=s(86961),us=s(51527),Us=s(19764),Bs=s(42982),xs=s(26126),Ws=s(50292),Ks=s(58422),fs=s(34049),ys=s(98344),js=s(22009);const cs=()=>{const Ps=(0,_.v9)(E.s);return(0,t.jsx)(c.O4,{permissions:Ps.settings?.["api-tokens"].create,children:(0,t.jsx)(P.N,{})})}},56589:(h,I,s)=>{"use strict";s.d(I,{N:()=>Ms,ProtectedEditView:()=>nt});var t=s(74081),c=s(27279),_=s(52185),E=s(85898),P=s(78565),R=s(90529),T=s(49899),K=s(796),u=s(34041),x=s(51413),W=s(49969),Z=s(83337),z=s(3408),$=s(82336),V=s(31078),r=s(94486),f=s(53532),k=s(71563),L=s(61020),J=s(40464),b=s(59461),Q=s(51447),w=s(22037),as=s(44485),F=s(90114),y=s(50292),os=s(76873),ls=s(82943),is=s(18602),_s=s(58422),ds=s(34049),G=s(19003),Es=s(98344),j=s(47853),rs=s(61815),q=s(22009),As=s(64797),hs=s(85811),Ts=s(50637),ms=s(15816),gs=s(97442),Cs=s(13576),vs=s(87830),ps=s(47184),Is=s(364),Ls=s(49204),Rs=s(74919),us=s(29206),Us=s(98934),Bs=s(43433),xs=s(75719),Ws=s(8175),Ks=s(6078),fs=s(51943),ys=s(55783),js=s(92249),cs=s(41942),Ps=s(22919),dt=s(53915),Et=s(75041),rt=s(30200),ct=s(91379),Pt=s(33299),Ot=s(33409),Mt=s(63645),Dt=s(7988),At=s(7055),ht=s(26757),Tt=s(58311),mt=s(29510),gt=s(16946),Ct=s(10124),vt=s(69530),pt=s(86961),It=s(51527),Lt=s(19764),Rt=s(42982),ut=s(26126);const[Ss,Ns]=(0,os.k)("ApiTokenPermissionsContext"),Zs=({children:n,...a})=>(0,t.jsx)(Ss,{...a,children:n}),ss=()=>Ns("useApiTokenPermissions"),$s=({errors:n={},onChange:a,canEditInputs:e,isCreating:d,values:o={},apiToken:O={},onDispatch:l,setHasChangedPermissions:U})=>{const{formatMessage:D}=(0,L.Z)(),B=({target:{value:v}})=>{U(!1),v==="full-access"&&l({type:"SELECT_ALL_ACTIONS"}),v==="read-only"&&l({type:"ON_CHANGE_READ_ONLY"})},H=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,t.jsx)(_.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(P.Z,{variant:"delta",as:"h2",children:D({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(R.r,{gap:5,children:[(0,t.jsx)(T.P,{col:6,xs:12,children:(0,t.jsx)(y.T,{error:n.name,value:o.name,canEditInputs:e,onChange:a})},"name"),(0,t.jsx)(T.P,{col:6,xs:12,children:(0,t.jsx)(y.a,{error:n.description,value:o.description,canEditInputs:e,onChange:a})},"description"),(0,t.jsx)(T.P,{col:6,xs:12,children:(0,t.jsx)(y.L,{isCreating:d,error:n.lifespan,value:o.lifespan,onChange:a,token:O})},"lifespan"),(0,t.jsx)(T.P,{col:6,xs:12,children:(0,t.jsx)(y.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:v=>{B({target:{value:v}}),a({target:{name:"type",value:v}})},options:H,canEditInputs:e})},"type")]})]})})},Vs=({apiTokenName:n=null})=>{const{formatMessage:a}=(0,L.Z)();return(0,r.go)(),(0,t.jsxs)(K.o,{"aria-busy":"true",children:[(0,t.jsx)(r.SL,{name:"API Tokens"}),(0,t.jsx)(u.T,{primaryAction:(0,t.jsx)(x.z,{disabled:!0,startIcon:(0,t.jsx)(ls.Z,{}),type:"button",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:n||a({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,t.jsx)(W.D,{children:(0,t.jsx)(r.dO,{})})]})},ks=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Fs=(0,G.default)(_.x)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,Gs=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:a}=(0,L.Z)(),{method:e,handler:d,path:o}=n,O=o?ds(o.split("/")):[],[l="",U=""]=d?d.split("."):[],D=ks(n.method);return(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsxs)(P.Z,{variant:"delta",as:"h3",children:[a({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,t.jsx)("span",{children:l}),(0,t.jsxs)(P.Z,{variant:"delta",textColor:"primary600",children:[".",U]})]}),(0,t.jsxs)(E.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,t.jsx)(Fs,{background:D.background,borderColor:D.border,padding:2,children:(0,t.jsx)(P.Z,{fontWeight:"bold",textColor:D.text,children:e})}),(0,t.jsx)(_.x,{paddingLeft:2,paddingRight:2,children:_s(O,B=>(0,t.jsxs)(P.Z,{textColor:B.includes(":")?"neutral600":"neutral900",children:["/",B]},B))})]})]})},Hs=()=>{const{value:{selectedAction:n,routes:a}}=ss(),{formatMessage:e}=(0,L.Z)(),d=n?.split(".")[0];return(0,t.jsx)(T.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,t.jsx)(E.k,{direction:"column",alignItems:"stretch",gap:2,children:d&&d in a&&a[d].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,t.jsx)(Gs,{route:o},o.handler):null)}):(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.Z,{variant:"delta",as:"h3",children:e({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,t.jsx)(P.Z,{as:"p",textColor:"neutral600",children:e({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Os=(0,G.css)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ys=(0,G.default)(_.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&Os}
  &:hover {
    ${Os}
  }
`,zs=G.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,Qs=({controllers:n=[],label:a,orderNumber:e=0,disabled:d=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:O=null})=>{const{value:{onChangeSelectAll:l,onChange:U,selectedActions:D,setSelectedAction:B,selectedAction:H}}=ss(),[v,X]=c.useState(!1),{formatMessage:Y}=(0,L.Z)(),A=()=>{X(M=>!M),o(e)};c.useEffect(()=>{O!==null&&O!==e&&v&&X(!1)},[O,e,v]);const Ds=M=>M===H;return(0,t.jsxs)(Z.U,{expanded:v,onToggle:A,variant:e%2?"primary":"secondary",children:[(0,t.jsx)(z.B,{title:Es(a)}),(0,t.jsx)($.v,{children:n?.map(M=>{const S=M.actions.every(m=>D.includes(m.actionId)),ts=M.actions.some(m=>D.includes(m.actionId));return(0,t.jsxs)(_.x,{children:[(0,t.jsxs)(E.k,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,t.jsx)(_.x,{paddingRight:4,children:(0,t.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:M?.controller})}),(0,t.jsx)(zs,{}),(0,t.jsx)(_.x,{paddingLeft:4,children:(0,t.jsx)(V.X,{value:S,indeterminate:!S&&ts,onValueChange:()=>{l({target:{value:[...M.actions]}})},disabled:d,children:Y({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,t.jsx)(R.r,{gap:4,padding:4,children:M?.actions&&M?.actions.map(m=>(0,t.jsx)(T.P,{col:6,children:(0,t.jsxs)(Ys,{isActive:Ds(m.actionId),padding:2,hasRadius:!0,children:[(0,t.jsx)(V.X,{value:D.includes(m.actionId),name:m.actionId,onValueChange:()=>{U({target:{value:m.actionId}})},disabled:d,children:m.action}),(0,t.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>B({target:{value:m.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,t.jsx)(is.Z,{})})]})},m.actionId))})]},`${a}.${M?.controller}`)})})]})},Xs=({section:n=null,...a})=>{const[e,d]=c.useState(null),o=O=>d(O);return(0,t.jsx)(_.x,{padding:4,background:"neutral0",children:n&&n.map((O,l)=>(0,t.jsx)(Qs,{label:O.label,controllers:O.controllers,orderNumber:l,indexExpandendCollapsedContent:e,onExpanded:o,...a},O.apiId))})},Js=({...n})=>{const{value:{data:a}}=ss(),{formatMessage:e}=(0,L.Z)();return(0,t.jsxs)(R.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,t.jsxs)(T.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(P.Z,{variant:"delta",as:"h2",children:e({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,t.jsx)(P.Z,{as:"p",textColor:"neutral600",children:e({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),a?.permissions&&(0,t.jsx)(Xs,{section:a?.permissions,...n})]}),(0,t.jsx)(Hs,{})]})},bs=j.Ry().shape({name:j.Z_().max(100).required(r.I0.required),type:j.Z_().oneOf(["read-only","full-access","custom"]).required(r.I0.required),description:j.Z_().nullable(),lifespan:j.Rx().integer().min(0).nullable().defined(r.I0.required)}),ws=n=>{const a={allActionsIds:[],permissions:[]};return a.permissions=Object.entries(n).map(([e,d])=>({apiId:e,label:e.split("::")[1],controllers:Object.keys(d.controllers).map(o=>({controller:o,actions:o in d.controllers?d.controllers[o].map(O=>{const l=`${e}.${o}.${O}`;return e.includes("api::")&&a.allActionsIds.push(l),{action:O,actionId:l}}).flat():[]})).flat()})),a},qs={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},st=(n,a)=>(0,rs.ZP)(n,e=>{switch(a.type){case"ON_CHANGE":{e.selectedActions.includes(a.value)?q(e.selectedActions,a.value):e.selectedActions.push(a.value);break}case"SELECT_ALL_IN_PERMISSION":{a.value.every(o=>e.selectedActions.includes(o.actionId))?a.value.forEach(o=>{q(e.selectedActions,o.actionId)}):a.value.forEach(o=>{e.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{e.selectedActions=[...e.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const d=e.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));e.selectedActions=[...d];break}case"UPDATE_PERMISSIONS_LAYOUT":{e.data=ws(a.value);break}case"UPDATE_ROUTES":{e.routes={...a.value};break}case"UPDATE_PERMISSIONS":{e.selectedActions=[...a.value];break}case"SET_SELECTED_ACTION":{e.selectedAction=a.value;break}default:return e}}),tt="Name already taken",Ms=()=>{(0,r.go)();const{formatMessage:n}=(0,L.Z)(),{lockApp:a,unlockApp:e}=(0,r.o1)(),d=(0,r.lm)(),{state:o}=(0,Q.TH)(),O=(0,b.v9)(w.s),[l,U]=c.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:D}=(0,r.rS)(),{setCurrentStep:B}=(0,r.c1)(),{allowedActions:{canCreate:H,canUpdate:v,canRegenerate:X}}=(0,r.ss)(O.settings?.["api-tokens"]),[Y,A]=c.useReducer(st,qs),M=(0,Q.$B)("/settings/api-tokens/:id")?.params?.id,{get:S,post:ts,put:m}=(0,r.kY)(),et=(0,Q.k6)(),g=M==="create";(0,J.useQuery)("content-api-permissions",async()=>{await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async i=>{if(i==="/admin/content-api/permissions"){const{data:{data:p}}=await S(i);return A({type:"UPDATE_PERMISSIONS_LAYOUT",value:p}),p}else if(i==="/admin/content-api/routes"){const{data:{data:p}}=await S(i);return A({type:"UPDATE_ROUTES",value:p}),p}})),l&&(l?.type==="read-only"&&A({type:"ON_CHANGE_READ_ONLY"}),l?.type==="full-access"&&A({type:"SELECT_ALL_ACTIONS"}),l?.type==="custom"&&A({type:"UPDATE_PERMISSIONS",value:l?.permissions}))},{onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),c.useEffect(()=>{D(g?"didAddTokenFromList":"didEditTokenFromList",{tokenType:F.A})},[g,D]);const{status:at}=(0,J.useQuery)(["api-token",M],async()=>{const{data:{data:i}}=await S(`/admin/api-tokens/${M}`);return U({...i}),i?.type==="read-only"&&A({type:"ON_CHANGE_READ_ONLY"}),i?.type==="full-access"&&A({type:"SELECT_ALL_ACTIONS"}),i?.type==="custom"&&A({type:"UPDATE_PERMISSIONS",value:i?.permissions}),i},{enabled:!g&&!l,onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ot=async(i,p)=>{D(g?"willCreateToken":"willEditToken",{tokenType:F.A}),a();try{const{data:{data:C}}=g?await ts("/admin/api-tokens",{...i,lifespan:i.lifespan==="0"?parseInt(i.lifespan):null,permissions:i.type==="custom"?Y.selectedActions:null}):await m(`/admin/api-tokens/${M}`,{name:i.name,description:i.description,type:i.type,permissions:i.type==="custom"?Y.selectedActions:null});g&&(et.replace(`/settings/api-tokens/${C.id}`,{apiToken:C}),B("apiTokens.success")),e(),U({...C}),d({type:"success",message:n(g?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),l?.type&&D(g?"didCreateToken":"didEditToken",{type:l.type,tokenType:F.A})}catch(C){if(C instanceof f.d7&&C.response){const N=(0,as.f)(C.response.data);p.setErrors(N),C?.response?.data?.error?.message===tt?d({type:"warning",message:C.response.data.message||"notification.error.tokennamenotunique"}):d({type:"warning",message:C?.response?.data?.message||"notification.error"})}e()}},[lt,ns]=c.useState(!1),it={...Y,onChange:({target:{value:i}})=>{ns(!0),A({type:"ON_CHANGE",value:i})},onChangeSelectAll:({target:{value:i}})=>{ns(!0),A({type:"SELECT_ALL_IN_PERMISSION",value:i})},setSelectedAction:({target:{value:i}})=>{A({type:"SET_SELECTED_ACTION",value:i})}},es=v&&!g||H&&g;return!g&&!l&&at!=="success"?(0,t.jsx)(Vs,{apiTokenName:l?.name}):(0,t.jsx)(Zs,{value:it,children:(0,t.jsxs)(K.o,{children:[(0,t.jsx)(r.SL,{name:"API Tokens"}),(0,t.jsx)(k.J9,{validationSchema:bs,validateOnChange:!1,initialValues:{name:l?.name||"",description:l?.description||"",type:l?.type,lifespan:l?.lifespan?l.lifespan.toString():l?.lifespan},enableReinitialize:!0,onSubmit:(i,p)=>ot(i,p),children:({errors:i,handleChange:p,isSubmitting:C,values:N,setFieldValue:_t})=>(lt&&N?.type!=="custom"&&_t("type","custom"),(0,t.jsxs)(r.l0,{children:[(0,t.jsx)(y.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:l,setToken:U,canEditInputs:es,canRegenerate:X,isSubmitting:C,regenerateUrl:"/admin/api-tokens/"}),(0,t.jsx)(W.D,{children:(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(l?.name)&&(0,t.jsx)(y.c,{token:l?.accessKey,tokenType:F.A}),(0,t.jsx)($s,{errors:i,onChange:p,canEditInputs:es,isCreating:g,values:N,apiToken:l,onDispatch:A,setHasChangedPermissions:ns}),(0,t.jsx)(Js,{disabled:!es||N?.type==="read-only"||N?.type==="full-access"})]})})]}))})]})})},nt=()=>{const n=(0,b.v9)(w.s);return(0,t.jsx)(r.O4,{permissions:n.settings?.["api-tokens"].read,children:(0,t.jsx)(Ms,{})})}}}]);
