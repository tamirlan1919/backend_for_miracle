(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[386],{19975:(M,T,s)=>{var e=s(44936),n=s(67083),g=s(65286),r=s(36393),d=s(20435),h=s(42435),c=200;function p(O,P,j,D){var N=-1,K=n,Z=!0,C=O.length,B=[],V=P.length;if(!C)return B;j&&(P=r(P,d(j))),D?(K=g,Z=!1):P.length>=c&&(K=h,Z=!1,P=new e(P));e:for(;++N<C;){var b=O[N],S=j==null?b:j(b);if(b=D||b!==0?b:0,Z&&S===S){for(var H=V;H--;)if(P[H]===S)continue e;B.push(b)}else K(P,S,D)||B.push(b)}return B}M.exports=p},1107:(M,T,s)=>{var e=s(84856),n=s(52593),g=n(e);M.exports=g},92403:(M,T,s)=>{var e=s(1107),n=s(47727);function g(r,d){var h=-1,c=n(r)?Array(r.length):[];return e(r,function(p,O,P){c[++h]=d(p,O,P)}),c}M.exports=g},16429:(M,T,s)=>{var e=s(36393),n=s(82393),g=s(90040),r=s(92403),d=s(63135),h=s(20435),c=s(9998),p=s(51339),O=s(26126);function P(j,D,N){D.length?D=e(D,function(C){return O(C)?function(B){return n(B,C.length===1?C[0]:C)}:C}):D=[p];var K=-1;D=e(D,h(g));var Z=r(j,function(C,B,V){var b=e(D,function(S){return S(C)});return{criteria:b,index:++K,value:C}});return d(Z,function(C,B){return c(C,B,N)})}M.exports=P},63135:M=>{function T(s,e){var n=s.length;for(s.sort(e);n--;)s[n]=s[n].value;return s}M.exports=T},17654:(M,T,s)=>{var e=s(85194);function n(g,r){if(g!==r){var d=g!==void 0,h=g===null,c=g===g,p=e(g),O=r!==void 0,P=r===null,j=r===r,D=e(r);if(!P&&!D&&!p&&g>r||p&&O&&j&&!P&&!D||h&&O&&j||!d&&j||!c)return 1;if(!h&&!p&&!D&&g<r||D&&d&&c&&!h&&!p||P&&d&&c||!O&&c||!j)return-1}return 0}M.exports=n},9998:(M,T,s)=>{var e=s(17654);function n(g,r,d){for(var h=-1,c=g.criteria,p=r.criteria,O=c.length,P=d.length;++h<O;){var j=e(c[h],p[h]);if(j){if(h>=P)return j;var D=d[h];return j*(D=="desc"?-1:1)}}return g.index-r.index}M.exports=n},52593:(M,T,s)=>{var e=s(47727);function n(g,r){return function(d,h){if(d==null)return d;if(!e(d))return g(d,h);for(var c=d.length,p=r?c:-1,O=Object(d);(r?p--:++p<c)&&h(O[p],p,O)!==!1;);return d}}M.exports=n},58422:(M,T,s)=>{var e=s(36393),n=s(90040),g=s(92403),r=s(26126);function d(h,c){var p=r(h)?e:g;return p(h,n(c,3))}M.exports=d},8243:(M,T,s)=>{var e=s(93367),n=s(16429),g=s(52431),r=s(65145),d=g(function(h,c){if(h==null)return[];var p=c.length;return p>1&&r(h,c[0],c[1])?c=[]:p>2&&r(c[0],c[1],c[2])&&(c=[c[0]]),n(h,e(c,1),[])});M.exports=d},34049:(M,T,s)=>{var e=s(20454);function n(g){var r=g==null?0:g.length;return r?e(g,1,r):[]}M.exports=n},87366:(M,T,s)=>{var e=s(19975),n=s(52431),g=s(99662),r=n(function(d,h){return g(d)?e(d,h):[]});M.exports=r},386:(M,T,s)=>{"use strict";s.r(T),s.d(T,{default:()=>ds});var e=s(74081),n=s(94486),g=s(51447),r=s(63068),d=s(27279),h=s(52185),c=s(85898),p=s(78565),O=s(31078),P=s(90529),j=s(49899),D=s(17992),N=s(83337),K=s(3408),Z=s(82336),C=s(796),B=s(34041),V=s(51413),b=s(49969),S=s(19098),H=s(87549),je=s(33774),De=s(84428),ne=s(66016),I=s(9465),ye=s(2667),Oe=s(86042),Re=s(1296),Ce=s(51452),Ae=s(92712),Le=s(7609),ve=s(18602),ie=s(82943),Te=s(98447),Be=s(9663),be=s(18076),Ue=s(25659),re=s(71563),W=s(61020),G=s(40464),L=s(70627),Se=s(51943),ae=s(8243),Y=s(98934),w=s(19003),oe=s(61815),J=s(10124),We=s(87366),Ie=s(58422),Ke=s(34049),le=s(43433),Ze=s(41942),q=s(47853);const de=(0,d.createContext)({}),ce=({children:t,value:i})=>(0,e.jsx)(de.Provider,{value:i,children:t}),ee=()=>(0,d.useContext)(de);ce.propTypes={children:L.node.isRequired,value:L.object.isRequired};function $e(t){switch(t){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Se(t.replace("api::","").replace("plugin::",""))}}const ke=(t,i)=>{const a=Object.keys(i).sort().map(o=>({name:o,isOpen:!1}));return{...t,collapses:a}},ue=(0,w.css)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ne=(0,w.default)(h.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&ue}
  &:hover {
    ${ue}
  }
`,Ge=w.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,ge=({subCategory:t})=>{const{formatMessage:i}=(0,W.Z)(),{onChange:a,onChangeSelectAll:o,onSelectedAction:m,selectedAction:l,modifiedData:E}=ee(),f=(0,d.useMemo)(()=>Y(E,t.name,{}),[E,t]),x=(0,d.useMemo)(()=>Object.values(f).every(u=>u.enabled===!0),[f]),_=(0,d.useMemo)(()=>Object.values(f).some(u=>u.enabled===!0)&&!x,[f,x]),y=(0,d.useCallback)(({target:{name:u}})=>{o({target:{name:u,value:!x}})},[x,o]),R=(0,d.useCallback)(u=>l===u,[l]);return(0,e.jsxs)(h.x,{children:[(0,e.jsxs)(c.k,{justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(h.x,{paddingRight:4,children:(0,e.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:t.label})}),(0,e.jsx)(Ge,{}),(0,e.jsx)(h.x,{paddingLeft:4,children:(0,e.jsx)(O.X,{name:t.name,value:x,onValueChange:u=>y({target:{name:t.name,value:u}}),indeterminate:_,children:i({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,e.jsx)(c.k,{paddingTop:6,paddingBottom:6,children:(0,e.jsx)(P.r,{gap:2,style:{flex:1},children:t.actions.map(u=>{const A=`${u.name}.enabled`;return(0,e.jsx)(j.P,{col:6,children:(0,e.jsxs)(Ne,{isActive:R(u.name),padding:2,hasRadius:!0,children:[(0,e.jsx)(O.X,{value:Y(E,A,!1),name:A,onValueChange:U=>a({target:{name:A,value:U}}),children:u.label}),(0,e.jsxs)("button",{type:"button",onClick:()=>m(u.name),style:{display:"inline-flex",alignItems:"center"},children:[(0,e.jsx)(D.T,{as:"span",children:i({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:u.name})}),(0,e.jsx)(ve.Z,{})]})]})},u.name)})})})]})};ge.propTypes={subCategory:L.object.isRequired};const pe=({name:t,permissions:i})=>{const a=(0,d.useMemo)(()=>ae(Object.values(i.controllers).reduce((o,m,l)=>{const E=`${t}.controllers.${Object.keys(i.controllers)[l]}`,f=ae(Object.keys(m).reduce((x,_)=>[...x,{...m[_],label:_,name:`${E}.${_}`}],[]),"label");return[...o,{actions:f,label:Object.keys(i.controllers)[l],name:E}]},[]),"label"),[t,i]);return(0,e.jsx)(h.x,{padding:6,children:a.map(o=>(0,e.jsx)(ge,{subCategory:o},o.name))})};pe.propTypes={name:L.string.isRequired,permissions:L.object.isRequired};const Fe={collapses:[]},Qe=(t,i)=>(0,oe.ZP)(t,a=>{switch(i.type){case"TOGGLE_COLLAPSE":{a.collapses=t.collapses.map((o,m)=>m===i.index?{...o,isOpen:!o.isOpen}:{...o,isOpen:!1});break}default:return a}}),Ve=()=>{const{modifiedData:t}=ee(),{formatMessage:i}=(0,W.Z)(),[{collapses:a},o]=(0,d.useReducer)(Qe,Fe,l=>ke(l,t)),m=l=>o({type:"TOGGLE_COLLAPSE",index:l});return(0,e.jsx)(c.k,{direction:"column",alignItems:"stretch",gap:1,children:a.map((l,E)=>(0,e.jsxs)(N.U,{expanded:l.isOpen,onToggle:()=>m(E),variant:E%2===0?"secondary":void 0,children:[(0,e.jsx)(K.B,{title:$e(l.name),description:i({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:l.name}),variant:E%2?"primary":"secondary"}),(0,e.jsx)(Z.v,{children:(0,e.jsx)(pe,{permissions:t[l.name],name:l.name})})]},l.name))})},He=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},we=(0,w.default)(h.x)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`;function se({route:t}){const{formatMessage:i}=(0,W.Z)(),{method:a,handler:o,path:m}=t,l=m?Ke(m.split("/")):[],[E="",f=""]=o?o.split("."):[],x=He(t.method);return(0,e.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsxs)(p.Z,{variant:"delta",as:"h3",children:[i({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,e.jsx)("span",{children:E}),(0,e.jsxs)(p.Z,{variant:"delta",textColor:"primary600",children:[".",f]})]}),(0,e.jsxs)(c.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,e.jsx)(we,{background:x.background,borderColor:x.border,padding:2,children:(0,e.jsx)(p.Z,{fontWeight:"bold",textColor:x.text,children:a})}),(0,e.jsx)(h.x,{paddingLeft:2,paddingRight:2,children:Ie(l,_=>(0,e.jsxs)(p.Z,{textColor:_.includes(":")?"neutral600":"neutral900",children:["/",_]},_))})]})]})}se.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},se.propTypes={route:L.shape({handler:L.string,method:L.string,path:L.string})};const Ye=()=>{const{formatMessage:t}=(0,W.Z)(),{selectedAction:i,routes:a}=ee(),o=We(i.split("."),"controllers"),m=Y(a,o[0]),l=o.slice(1).join("."),E=J(m)?[]:m.filter(f=>f.handler.endsWith(l));return(0,e.jsx)(j.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:i?(0,e.jsx)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:E.map((f,x)=>(0,e.jsx)(se,{route:f},x))}):(0,e.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(p.Z,{variant:"delta",as:"h3",children:t({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})}),(0,e.jsx)(p.Z,{as:"p",textColor:"neutral600",children:t({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},ze=(t,i,a)=>({...t,initialData:i,modifiedData:i,routes:a}),Xe={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},Je=(t,i)=>(0,oe.ZP)(t,a=>{switch(i.type){case"ON_CHANGE":{const o=i.keys.length,m=i.keys[o-1]==="enabled";if(i.value&&m){const l=Ze(i.keys,o-1).join(".");a.selectedAction=l}le(a,["modifiedData",...i.keys],i.value);break}case"ON_CHANGE_SELECT_ALL":{const o=["modifiedData",...i.keys],m=Y(t,o,{}),l=Object.keys(m).reduce((E,f)=>(E[f]={...m[f],enabled:i.value},E),{});le(a,o,l);break}case"ON_RESET":{a.modifiedData=t.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=t.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:o}=i;a.selectedAction=o===t.selectedAction?"":o;break}default:return a}}),me=(0,d.forwardRef)(({permissions:t,routes:i},a)=>{const{formatMessage:o}=(0,W.Z)(),[m,l]=(0,d.useReducer)(Je,Xe,y=>ze(y,t,i));(0,d.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:m.modifiedData}},resetForm(){l({type:"ON_RESET"})},setFormAfterSubmit(){l({type:"ON_SUBMIT_SUCCEEDED"})}}));const _={...m,onChange:({target:{name:y,value:R}})=>l({type:"ON_CHANGE",keys:y.split("."),value:R==="empty__string_value"?"":R}),onChangeSelectAll:({target:{name:y,value:R}})=>l({type:"ON_CHANGE_SELECT_ALL",keys:y.split("."),value:R}),onSelectedAction:y=>l({type:"SELECT_ACTION",actionToSelect:y})};return(0,e.jsx)(ce,{value:_,children:(0,e.jsxs)(P.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsx)(j.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(p.Z,{variant:"delta",as:"h2",children:o({id:(0,r.g)("Plugins.header.title"),defaultMessage:"Permissions"})}),(0,e.jsx)(p.Z,{as:"p",textColor:"neutral600",children:o({id:(0,r.g)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."})})]}),(0,e.jsx)(Ve,{})]})}),(0,e.jsx)(Ye,{})]})})});me.propTypes={permissions:L.object.isRequired,routes:L.object.isRequired};const he=(0,d.memo)(me),Ee=q.Ry().shape({name:q.Z_().required(n.I0.required),description:q.Z_().required(n.I0.required)}),qe=t=>Object.keys(t).reduce((i,a)=>{const o=t[a].controllers,m=Object.keys(o).reduce((l,E)=>(J(o[E])||(l[E]=o[E]),l),{});return J(m)||(i[a]={controllers:m}),i},{}),xe=()=>{const t=(0,n.lm)(),{get:i}=(0,n.kY)(),{formatAPIError:a}=(0,n.So)(r.g),[{data:o,isLoading:m,error:l,refetch:E},{data:f,isLoading:x,error:_,refetch:y}]=(0,G.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:A}}=await i("/users-permissions/permissions");return A}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:A}}=await i("/users-permissions/routes");return A}}]),R=async()=>{await Promise.all([E(),y()])};(0,d.useEffect)(()=>{l&&t({type:"warning",message:a(l)})},[t,l,a]),(0,d.useEffect)(()=>{_&&t({type:"warning",message:a(_)})},[t,_,a]);const u=m||x;return{permissions:o?qe(o):{},routes:f??{},getData:R,isLoading:u}},es=()=>{const{formatMessage:t}=(0,W.Z)(),i=(0,n.lm)(),{goBack:a}=(0,g.k6)(),{lockApp:o,unlockApp:m}=(0,n.o1)(),{isLoading:l,permissions:E,routes:f}=xe(),{trackUsage:x}=(0,n.rS)(),_=d.useRef(),{post:y}=(0,n.kY)(),R=(0,G.useMutation)(A=>y("/users-permissions/roles",A),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){x("didCreateRole"),i({type:"success",message:{id:(0,r.g)("Settings.roles.created"),defaultMessage:"Role created"}}),a()}}),u=async A=>{o();const U=_.current.getPermissions();await R.mutate({...A,...U,users:[]}),m()};return(0,e.jsxs)(C.o,{children:[(0,e.jsx)(n.SL,{name:"Roles"}),(0,e.jsx)(re.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:u,validationSchema:Ee,children:({handleSubmit:A,values:U,handleChange:F,errors:v})=>(0,e.jsxs)(n.l0,{noValidate:!0,onSubmit:A,children:[(0,e.jsx)(B.T,{primaryAction:!l&&(0,e.jsx)(V.z,{type:"submit",loading:R.isLoading,startIcon:(0,e.jsx)(ie.Z,{}),children:t({id:"global.save",defaultMessage:"Save"})}),title:t({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:t({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),(0,e.jsx)(b.D,{children:(0,e.jsxs)(c.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(c.k,{direction:"column",alignItems:"stretch",children:[(0,e.jsx)(p.Z,{variant:"delta",as:"h2",children:t({id:(0,r.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(P.r,{gap:4,children:[(0,e.jsx)(j.P,{col:6,children:(0,e.jsx)(S.o,{name:"name",value:U.name||"",onChange:F,label:t({id:"global.name",defaultMessage:"Name"}),error:v?.name?t({id:v.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(j.P,{col:6,children:(0,e.jsx)(H.g,{id:"description",value:U.description||"",onChange:F,label:t({id:"global.description",defaultMessage:"Description"}),error:v?.description?t({id:v.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!l&&(0,e.jsx)(he,{ref:_,permissions:E,routes:f})]})})]})})]})},ss=()=>(0,e.jsx)(n.O4,{permissions:r.P.createRole,children:(0,e.jsx)(es,{})}),ts=()=>{const{formatMessage:t}=(0,W.Z)(),i=(0,n.lm)(),{lockApp:a,unlockApp:o}=(0,n.o1)(),{params:{id:m}}=(0,g.$B)("/settings/users-permissions/roles/:id"),{get:l}=(0,n.kY)(),{isLoading:E,routes:f}=xe(),{data:x,isLoading:_,refetch:y}=(0,G.useQuery)(["users-permissions","role",m],async()=>{const{data:{role:v}}=await l(`/users-permissions/roles/${m}`);return v}),R=d.useRef(),{put:u}=(0,n.kY)(),{formatAPIError:A}=(0,n.So)(),U=(0,G.useMutation)(v=>u(`/users-permissions/roles/${m}`,v),{onError(v){i({type:"warning",message:A(v)})},async onSuccess(){i({type:"success",message:{id:(0,r.g)("Settings.roles.created"),defaultMessage:"Role edited"}}),await y()}}),F=async v=>{a();const $=R.current.getPermissions();await U.mutate({...v,...$,users:[]}),o()};return _?(0,e.jsx)(n.dO,{}):(0,e.jsxs)(C.o,{children:[(0,e.jsx)(n.SL,{name:"Roles"}),(0,e.jsx)(re.J9,{enableReinitialize:!0,initialValues:{name:x.name,description:x.description},onSubmit:F,validationSchema:Ee,children:({handleSubmit:v,values:$,handleChange:z,errors:Q})=>(0,e.jsxs)(n.l0,{noValidate:!0,onSubmit:v,children:[(0,e.jsx)(B.T,{primaryAction:!E&&(0,e.jsx)(V.z,{disabled:x.code==="strapi-super-admin",type:"submit",loading:U.isLoading,startIcon:(0,e.jsx)(ie.Z,{}),children:t({id:"global.save",defaultMessage:"Save"})}),title:x.name,subtitle:x.description,navigationAction:(0,e.jsx)(n.rU,{startIcon:(0,e.jsx)(Te.Z,{}),to:"/settings/users-permissions/roles",children:t({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(b.D,{children:(0,e.jsxs)(c.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(p.Z,{variant:"delta",as:"h2",children:t({id:(0,r.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(P.r,{gap:4,children:[(0,e.jsx)(j.P,{col:6,children:(0,e.jsx)(S.o,{name:"name",value:$.name||"",onChange:z,label:t({id:"global.name",defaultMessage:"Name"}),error:Q?.name?t({id:Q.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(j.P,{col:6,children:(0,e.jsx)(H.g,{id:"description",value:$.description||"",onChange:z,label:t({id:"global.description",defaultMessage:"Description"}),error:Q?.description?t({id:Q.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!E&&(0,e.jsx)(he,{ref:R,permissions:x.permissions,routes:f})]})})]})})]})},ns=()=>(0,e.jsx)(n.O4,{permissions:r.P.updateRole,children:(0,e.jsx)(ts,{})}),is=(0,w.default)(je.r)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:t})=>`${t.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:t})=>t.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.neutral800};
      }
    }
  }
`,te=({sortedRoles:t,canDelete:i,permissions:a,setRoleToDelete:o,onDelete:m})=>{const{formatMessage:l}=(0,W.Z)(),{push:E}=(0,g.k6)(),[f,x]=m,_=u=>i&&!["public","authenticated"].includes(u.type),y=u=>{o(u),x(!f)},R=u=>{E(`/settings/users-permissions/roles/${u}`)};return(0,e.jsx)(De.p,{children:t?.map(u=>(0,e.jsxs)(ne.Tr,{...(0,n.X7)({fn:()=>R(u.id)}),children:[(0,e.jsx)(I.Td,{width:"20%",children:(0,e.jsx)(p.Z,{children:u.name})}),(0,e.jsx)(I.Td,{width:"50%",children:(0,e.jsx)(p.Z,{children:u.description})}),(0,e.jsx)(I.Td,{width:"30%",children:(0,e.jsx)(p.Z,{children:l({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:u.nb_users})})}),(0,e.jsx)(I.Td,{children:(0,e.jsxs)(c.k,{justifyContent:"end",...n.UW,children:[(0,e.jsx)(n.jW,{permissions:a.updateRole,children:(0,e.jsx)(is,{to:`/settings/users-permissions/roles/${u.id}`,"aria-label":l({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${u.name}`}),children:(0,e.jsx)(Be.Z,{})})}),_(u)&&(0,e.jsx)(n.jW,{permissions:a.deleteRole,children:(0,e.jsx)(ye.h,{onClick:()=>y(u.id),noBorder:!0,icon:(0,e.jsx)(be.Z,{}),label:l({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${u.name}`})})})]})})]},u.name))})};te.defaultProps={canDelete:!1},te.propTypes={onDelete:L.array.isRequired,permissions:L.object.isRequired,setRoleToDelete:L.func.isRequired,sortedRoles:L.array.isRequired,canDelete:L.bool};const rs=async(t,i)=>{try{const{get:a}=(0,n.tg)(),{data:o}=await a("/users-permissions/roles");return i("The roles have loaded successfully"),o}catch(a){throw t({type:"warning",message:{id:"notification.error"}}),new Error(a)}},as=async(t,i)=>{try{const{del:a}=(0,n.tg)();await a(`/users-permissions/roles/${t}`)}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},os=()=>{const{trackUsage:t}=(0,n.rS)(),{formatMessage:i,locale:a}=(0,W.Z)(),o=(0,n.lm)(),{notifyStatus:m}=(0,Oe.G)(),[{query:l}]=(0,n.Kx)(),E=l?._q||"",[f,x]=(0,d.useState)(!1),[_,y]=(0,d.useState)(!1),[R,u]=(0,d.useState)();(0,n.go)();const{isLoading:A,allowedActions:{canRead:U,canDelete:F}}=(0,n.ss)({create:r.P.createRole,read:r.P.readRoles,update:r.P.updateRole,delete:r.P.deleteRole}),{isLoading:v,data:{roles:$},isFetching:z,refetch:Q}=(0,G.useQuery)("get-roles",()=>rs(o,m),{initialData:{},enabled:U}),{includes:fe}=(0,n.L0)(a,{sensitivity:"base"}),Me=(0,n.Xe)(a,{sensitivity:"base"}),_e=v||z,cs=()=>{x(!f)},us={roles:{id:(0,r.g)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,r.g)("Roles.empty.search"),defaultMessage:"No roles match the search."}},gs=i({id:"global.roles",defaultMessage:"Roles"}),ps=(0,G.useMutation)(k=>as(k,o),{async onSuccess(){await Q()}}),ms=async()=>{y(!0),await ps.mutateAsync(R),x(!f),y(!1)},X=($||[]).filter(k=>fe(k.name,E)||fe(k.description,E)).sort((k,Pe)=>Me.compare(k.name,Pe.name)||Me.compare(k.description,Pe.description)),hs=E&&!X.length?"search":"roles",Es=4,xs=($?.length||0)+1;return(0,e.jsxs)(Re.A,{children:[(0,e.jsx)(n.SL,{name:gs}),(0,e.jsxs)(C.o,{"aria-busy":_e,children:[(0,e.jsx)(B.T,{title:i({id:"global.roles",defaultMessage:"Roles"}),subtitle:i({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:(0,e.jsx)(n.jW,{permissions:r.P.createRole,children:(0,e.jsx)(n.Qj,{to:"/settings/users-permissions/roles/new",onClick:()=>t("willCreateRole"),startIcon:(0,e.jsx)(Ue.Z,{}),size:"S",children:i({id:(0,r.g)("List.button.roles"),defaultMessage:"Add new role"})})})}),(0,e.jsx)(Ce.Z,{startActions:(0,e.jsx)(n.m,{label:i({id:"app.component.search.label",defaultMessage:"Search"})})}),(0,e.jsxs)(b.D,{children:[!U&&(0,e.jsx)(n.ZF,{}),(_e||A)&&(0,e.jsx)(n.dO,{}),U&&X&&X?.length?(0,e.jsxs)(Ae.i,{colCount:Es,rowCount:xs,children:[(0,e.jsx)(Le.h,{children:(0,e.jsxs)(ne.Tr,{children:[(0,e.jsx)(I.Th,{children:(0,e.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(I.Th,{children:(0,e.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:i({id:"global.description",defaultMessage:"Description"})})}),(0,e.jsx)(I.Th,{children:(0,e.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:i({id:"global.users",defaultMessage:"Users"})})}),(0,e.jsx)(I.Th,{children:(0,e.jsx)(D.T,{children:i({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(te,{sortedRoles:X,canDelete:F,permissions:r.P,setRoleToDelete:u,onDelete:[f,x]})]}):(0,e.jsx)(n.x7,{content:us[hs]})]}),(0,e.jsx)(n.QH,{isConfirmButtonLoading:_,onConfirm:ms,onToggleDialog:cs,isOpen:f})]})]})},ls=()=>(0,e.jsx)(n.O4,{permissions:r.P.accessRoles,children:(0,e.jsx)(os,{})}),ds=()=>(0,e.jsx)(n.O4,{permissions:r.P.accessRoles,children:(0,e.jsxs)(g.rs,{children:[(0,e.jsx)(g.AW,{path:"/settings/users-permissions/roles/new",component:ss,exact:!0}),(0,e.jsx)(g.AW,{path:"/settings/users-permissions/roles/:id",component:ns,exact:!0}),(0,e.jsx)(g.AW,{path:"/settings/users-permissions/roles",component:ls,exact:!0}),(0,e.jsx)(g.AW,{path:"",component:n.Hn})]})})}}]);
