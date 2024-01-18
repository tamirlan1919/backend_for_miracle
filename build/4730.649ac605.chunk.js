"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[4730],{34730:(Q,L,t)=>{t.d(L,{ProtectedListView:()=>dt});var s=t(74081),O=t(27279),W=t(796),K=t(34041),l=t(96448),A=t(49969),e=t(94486),U=t(25659),R=t(53532),f=t(29206),o=t(61020),v=t(40464),g=t(59461),x=t(51447),c=t(22037),T=t(90114),j=t(25054),$=t(64797),k=t(85811),F=t(50637),V=t(15816),y=t(97442),Y=t(13576),H=t(87830),J=t(47184),z=t(364),a=t(71563),E=t(49204),D=t(47853),M=t(74919),P=t(98934),i=t(43433),d=t(75719),m=t(8175),r=t(6078),h=t(51943),G=t(55783),X=t(92249),w=t(41942),b=t(22919),q=t(53915),n=t(75041),tt=t(30200),p=t(91379),Lt=t(33299),vt=t(33409),It=t(63645),Ut=t(7988),Rt=t(7055),gt=t(26757),ht=t(58311),Bt=t(29510),Wt=t(16946),Kt=t(10124),ft=t(69530),xt=t(86961),jt=t(51527),yt=t(19764),pt=t(42982),ut=t(26126);const ot=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Et=()=>{(0,e.go)();const u=(0,v.useQueryClient)(),{formatMessage:I}=(0,o.Z)(),st=(0,e.lm)(),it=(0,g.v9)(c.s),{allowedActions:{canCreate:S,canDelete:lt,canUpdate:Dt,canRead:C}}=(0,e.ss)(it.settings?.["api-tokens"]),{push:at}=(0,x.k6)(),{trackUsage:B}=(0,e.rS)(),{startSection:Mt}=(0,e.c1)(),nt=O.useRef(Mt),{get:Pt,del:rt}=(0,e.kY)(),{formatAPIError:_t}=(0,e.So)();O.useEffect(()=>{nt.current&&nt.current("apiTokens")},[]),O.useEffect(()=>{at({search:f.stringify({sort:"name:ASC"},{encode:!1})})},[at]);const Ot=ot.map(_=>({..._,metadatas:{..._.metadatas,label:I(_.metadatas.label)}})),{data:N,isLoading:Tt}=(0,v.useQuery)(["api-tokens"],async()=>{B("willAccessTokenList",{tokenType:T.A});const{data:{data:_}}=await Pt("/admin/api-tokens");return B("didAccessTokenList",{number:_.length,tokenType:T.A}),_},{cacheTime:0,enabled:C,onError(_){_ instanceof R.d7&&st({type:"warning",message:_t(_)})}}),et=Tt,At=(0,v.useMutation)(async _=>{await rt(`/admin/api-tokens/${_}`)},{async onSuccess(){await u.invalidateQueries(["api-tokens"]),B("didDeleteToken")},onError(_){_ instanceof R.d7&&st({type:"warning",message:_t(_)})}}),Z=N&&N.length>0,ct=C&&Z,mt=C&&!Z&&!S,Ct=C&&!Z&&S;return(0,s.jsxs)(W.o,{"aria-busy":et,children:[(0,s.jsx)(e.SL,{name:"API Tokens"}),(0,s.jsx)(K.T,{title:I({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:I({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:S&&(0,s.jsx)(l.Q,{"data-testid":"create-api-token-button",startIcon:(0,s.jsx)(U.Z,{}),size:"S",onClick:()=>B("willAddTokenFromList",{tokenType:T.A}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),(0,s.jsxs)(A.D,{children:[!C&&(0,s.jsx)(e.ZF,{}),ct&&(0,s.jsx)(j.T,{permissions:{canRead:C,canDelete:lt,canUpdate:Dt},headers:Ot,contentType:"api-tokens",isLoading:et,onConfirmDelete:_=>At.mutateAsync(_),tokens:N,tokenType:T.A}),Ct&&(0,s.jsx)(e.dJ,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:(0,s.jsx)(l.Q,{variant:"secondary",startIcon:(0,s.jsx)(U.Z,{}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}),mt&&(0,s.jsx)(e.dJ,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},dt=()=>{const u=(0,g.v9)(c.s);return(0,s.jsx)(e.O4,{permissions:u.settings?.["api-tokens"].main,children:(0,s.jsx)(Et,{})})}},25054:(Q,L,t)=>{t.d(L,{T:()=>k});var s=t(74081),O=t(27279),W=t(84428),K=t(66016),l=t(9465),A=t(78565),e=t(85898),U=t(52185),R=t(2667),f=t(33646),o=t(94486),v=t(18076),g=t(84207),x=t(9663),c=t(61020),T=t(51447),j=t(47533),$=t(19003);const k=({permissions:a,headers:E=[],contentType:D,isLoading:M=!1,tokens:P=[],onConfirmDelete:i,tokenType:d})=>{const{canDelete:m,canUpdate:r,canRead:h}=a;return(0,s.jsx)(o.tM,{headers:E,contentType:D,rows:P,withBulkActions:m||r||h,isLoading:M,onConfirmDelete:i,children:(0,s.jsx)(F,{tokenType:d,permissions:a,onConfirmDelete:i})})},F=({tokenType:a,permissions:E,rows:D=[],withBulkActions:M,onConfirmDelete:P})=>{const{canDelete:i,canUpdate:d,canRead:m}=E,[{query:r}]=(0,o.Kx)(),{formatMessage:h}=(0,c.Z)(),[,G]=r&&r.sort?r.sort.split(":"):[void 0,"ASC"],{push:X,location:{pathname:w}}=(0,T.k6)(),{trackUsage:b}=(0,o.rS)(),q=D.sort((n,tt)=>{const p=n.name.localeCompare(tt.name);return G==="DESC"?-p:p});return(0,s.jsx)(W.p,{children:q.map(n=>(0,s.jsxs)(K.Tr,{...(0,o.X7)({fn(){b("willEditTokenFromList",{tokenType:a}),X(`${w}/${n.id}`)},condition:d}),children:[(0,s.jsx)(l.Td,{maxWidth:(0,o.Q1)(250),children:(0,s.jsx)(A.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:n.name})}),(0,s.jsx)(l.Td,{maxWidth:(0,o.Q1)(250),children:(0,s.jsx)(A.Z,{textColor:"neutral800",ellipsis:!0,children:n.description})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(A.Z,{textColor:"neutral800",children:(0,s.jsx)(o.ij,{timestamp:new Date(n.createdAt)})})}),(0,s.jsx)(l.Td,{children:n.lastUsedAt&&(0,s.jsx)(A.Z,{textColor:"neutral800",children:(0,s.jsx)(o.ij,{timestamp:new Date(n.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:h({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),M&&(0,s.jsx)(l.Td,{children:(0,s.jsxs)(e.k,{justifyContent:"end",children:[d&&(0,s.jsx)(z,{tokenName:n.name,tokenId:n.id}),!d&&m&&(0,s.jsx)(J,{tokenName:n.name,tokenId:n.id}),i&&(0,s.jsx)(H,{tokenName:n.name,onClickDelete:()=>P?.(n.id),tokenType:a})]})})]},n.id))})},V={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},y=({tokenName:a,tokenId:E,buttonType:D="edit",children:M})=>{const{formatMessage:P}=(0,c.Z)(),{location:{pathname:i}}=(0,T.k6)();return(0,s.jsx)(Y,{forwardedAs:j.NavLink,to:`${i}/${E}`,title:P(V[D],{target:a}),children:M})},Y=(0,$.default)(f.r)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,H=({tokenName:a,onClickDelete:E,tokenType:D})=>{const{formatMessage:M}=(0,c.Z)(),{trackUsage:P}=(0,o.rS)(),[i,d]=O.useState(!1),m=()=>{d(!1),P("willDeleteToken",{tokenType:D}),E()};return(0,s.jsxs)(U.x,{paddingLeft:1,onClick:r=>r.stopPropagation(),children:[(0,s.jsx)(R.h,{onClick:()=>{d(!0)},label:M({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(v.Z,{})}),(0,s.jsx)(o.QH,{onToggleDialog:()=>d(!1),onConfirm:m,isOpen:i})]})},J=({tokenName:a,tokenId:E})=>(0,s.jsx)(y,{tokenName:a,tokenId:E,buttonType:"read",children:(0,s.jsx)(g.Z,{})}),z=({tokenName:a,tokenId:E})=>(0,s.jsx)(y,{tokenName:a,tokenId:E,children:(0,s.jsx)(x.Z,{})})},90114:(Q,L,t)=>{t.d(L,{A:()=>s,T:()=>O});const s="api-token",O="transfer-token"}}]);
