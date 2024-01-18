"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[4444],{5560:(q,x,s)=>{s.d(x,{F:()=>c});var t=s(74081),l=s(27279),M=s(52185),g=s(51413),h=s(94486),d=s(22905),_=s(61020);const c=({displayedFilters:m})=>{const[D,v]=l.useState(!1),{formatMessage:W}=(0,_.Z)(),C=l.useRef(null),R=()=>{v(T=>!T)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(M.x,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(g.z,{variant:"tertiary",ref:C,startIcon:(0,t.jsx)(d.Z,{}),onClick:R,size:"S",children:W({id:"app.utils.filters",defaultMessage:"Filters"})}),D&&(0,t.jsx)(h.J5,{displayedFilters:m,isVisible:D,onToggle:R,source:C})]}),(0,t.jsx)(h.W$,{filtersSchema:m})]})}},24444:(q,x,s)=>{s.d(x,{ProtectedListPage:()=>Rs,i:()=>_s});var t=s(74081),l=s(27279),M=s(51413),g=s(81565),h=s(37386),d=s(23851),_=s(85898),c=s(52185),m=s(78565),D=s(90529),v=s(49899),W=s(3785),C=s(84428),R=s(66016),T=s(9465),Q=s(83667),B=s(2667),u=s(796),p=s(34041),H=s(51452),J=s(49969),e=s(94486),X=s(29206),f=s(61020),G=s(40464),ss=s(59461),ts=s(51447),j=s(50637),r=s(22037),ms=s(5560),Ms=s(88898),cs=s(9663),Ds=s(18076),Ps=s(31430),Os=s(40505),gs=s(53532),hs=s(71563),k=s(47853),ls=s(74751),js=s(15816),ys=s(97442),Ws=s(13576),ps=s(87830),Ks=s(47184),Ss=s(364),Zs=s(49204),Fs=s(74919),bs=s(98934),zs=s(43433),$s=s(75719),Ns=s(8175),Ys=s(6078),Vs=s(51943),Qs=s(55783),Hs=s(92249),Js=s(41942),Xs=s(22919),Gs=s(53915),ks=s(75041),ws=s(30200),qs=s(91379),st=s(33299),tt=s(33409),et=s(63645),at=s(7988),nt=s(7055),it=s(26757),ot=s(58311),lt=s(29510),rt=s(16946),dt=s(10124),_t=s(69530),Et=s(86961),mt=s(51527),Mt=s(19764),ct=s(42982),Dt=s(26126),Pt=s(64797),Ot=s(85811);const fs=({onClick:n})=>{const{formatMessage:E}=(0,f.Z)();return(0,t.jsx)(M.z,{onClick:n,startIcon:(0,t.jsx)(Ms.Z,{}),size:"S",children:E({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},vs=({onSuccess:n,onToggle:E})=>{const[A,$]=l.useState("create"),[K,N]=l.useState(!1),[S,y]=l.useState(""),{formatMessage:P}=(0,f.Z)(),Z=(0,e.lm)(),{lockApp:O,unlockApp:a}=(0,e.o1)(),{post:Y}=(0,e.kY)(),{formatAPIError:I}=(0,e.So)(),V=(0,j.j)(Cs,async()=>(await s.e(879).then(s.bind(s,30879))).ROLE_LAYOUT,{combine(o,U){return[...o,...U]},defaultValue:[]}),F=(0,j.j)(rs,async()=>(await s.e(879).then(s.bind(s,30879))).FORM_INITIAL_VALUES,{combine(o,U){return{...o,...U}},defaultValue:rs}),b=(0,j.j)(ls.M,async()=>(await s.e(826).then(s.bind(s,80826))).MagicLinkEE),es=(0,G.useMutation)(o=>Y("/admin/users",o),{onMutate(){O&&O(),N(!0)},async onSuccess({data:{data:o}}){o.registrationToken?(y(o.registrationToken),await n(),is()):Z({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},onError(o){throw Z({type:"warning",message:I(o)}),o},onSettled(){a&&a(),N(!1)}}),as=P({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ns=async(o,{setErrors:U})=>{try{await es.mutateAsync({...o,roles:o.roles??[]})}catch(z){z instanceof gs.d7&&z.response?.data?.error.message==="Email already taken"&&U({email:z.response.data.error.message})}},is=()=>{Es?$(Es):E()},{buttonSubmitLabel:w,isDisabled:i,next:Es}=Ls[A],Bs=A==="create"?(0,t.jsx)(M.z,{type:"submit",loading:K,children:P(w)}):(0,t.jsx)(M.z,{type:"button",loading:K,onClick:E,children:P(w)});return b?(0,t.jsxs)(g.P,{onClose:E,labelledBy:"title",children:[(0,t.jsx)(h.x,{children:(0,t.jsx)(Ps.O,{label:as,children:(0,t.jsx)(Os.$,{isCurrent:!0,children:as})})}),(0,t.jsx)(hs.J9,{enableReinitialize:!0,initialValues:F??{},onSubmit:ns,validationSchema:As,validateOnChange:!1,children:({errors:o,handleChange:U,values:z})=>(0,t.jsxs)(e.l0,{children:[(0,t.jsx)(d.f,{children:(0,t.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:6,children:[A!=="create"&&(0,t.jsx)(b,{registrationToken:S}),(0,t.jsxs)(c.x,{children:[(0,t.jsx)(m.Z,{variant:"beta",as:"h2",children:P({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(c.x,{paddingTop:4,children:(0,t.jsx)(_.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(D.r,{gap:5,children:us.map(os=>os.map(L=>(0,t.jsx)(v.P,{...L.size,children:(0,t.jsx)(e.jm,{...L,disabled:i,error:o[L.name],onChange:U,value:z[L.name]})},L.name)))})})})]}),(0,t.jsxs)(c.x,{children:[(0,t.jsx)(m.Z,{variant:"beta",as:"h2",children:P({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(c.x,{paddingTop:4,children:(0,t.jsxs)(D.r,{gap:5,children:[(0,t.jsx)(v.P,{col:6,xs:12,children:(0,t.jsx)(ls.S,{disabled:i,error:o.roles,onChange:U,value:z.roles??[]})}),V.map(os=>os.map(L=>(0,t.jsx)(v.P,{...L.size,children:(0,t.jsx)(e.jm,{...L,disabled:i,onChange:U,value:z[L.name]})},L.name)))]})})]})]})}),(0,t.jsx)(W.m,{startActions:(0,t.jsx)(M.z,{variant:"tertiary",onClick:E,type:"button",children:P({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:Bs})]})})]}):null},rs={firstname:"",lastname:"",email:"",roles:[]},Cs=[],us=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],As=k.Ry().shape({firstname:k.Z_().trim().required(e.I0.required),lastname:k.Z_(),email:k.Z_().email(e.I0.email).required(e.I0.required),roles:k.IX().min(1,e.I0.required).required(e.I0.required)}),Ls={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},xs=({canDelete:n,headers:E=[],entriesToDelete:A=[],onClickDelete:$,onSelectRow:K,withMainAction:N,withBulkActions:S,rows:y=[]})=>{const{push:P,location:{pathname:Z}}=(0,ts.k6)(),{formatMessage:O}=(0,f.Z)();return(0,t.jsx)(C.p,{children:y.map(a=>{const Y=A.findIndex(I=>I===a.id)!==-1;return(0,t.jsxs)(R.Tr,{...(0,e.X7)({fn:()=>P(`${Z}/${a.id}`),condition:S}),children:[N&&(0,t.jsx)(T.Td,{...e.UW,children:(0,t.jsx)(Q.C,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,r.g)(a?.firstname??"",a.lastname)}),checked:Y,onChange:()=>{K&&K({name:a.id,value:!Y})}})}),E.map(({key:I,cellFormatter:V,name:F,...b})=>(0,t.jsx)(T.Td,{children:typeof V=="function"?V(a,{key:I,name:F,formatMessage:O,...b}):(0,t.jsx)(m.Z,{textColor:"neutral800",children:a[F]||"-"})},I)),S&&(0,t.jsx)(T.Td,{children:(0,t.jsxs)(_.k,{justifyContent:"end",children:[(0,t.jsx)(B.h,{onClick:()=>P(`${Z}/${a.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,r.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(cs.Z,{})}),n&&(0,t.jsx)(c.x,{paddingLeft:1,...e.UW,children:(0,t.jsx)(B.h,{onClick:()=>{$&&$(a.id)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,r.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(Ds.Z,{})})})]})})]},a.id)})})},ds=["ee","license-limit-info"],_s=()=>{const{post:n}=(0,e.kY)(),{formatAPIError:E}=(0,e.So)(),[A,$]=l.useState(!1),K=(0,ss.v9)(r.s),{allowedActions:{canCreate:N,canDelete:S,canRead:y}}=(0,e.ss)(K.settings?.users),P=(0,G.useQueryClient)(),Z=(0,e.lm)(),{formatMessage:O}=(0,f.Z)(),{search:a}=(0,ts.TH)();(0,e.go)();const{users:Y,pagination:I,isError:V,isLoading:F,refetch:b}=(0,j.g)(X.parse(a,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:y}),es=(0,j.j)(fs,async()=>(await s.e(4536).then(s.bind(s,54536))).CreateActionEE),as=Ts.map(i=>({...i,metadatas:{...i.metadatas,label:O(i.metadatas.label)}})),ns=O({id:"global.users",defaultMessage:"Users"}),is=()=>{$(i=>!i)},w=(0,G.useMutation)(async i=>n("/admin/users/batch-delete",{ids:i}),{async onSuccess(){await b(),await P.refetchQueries(ds)},onError(i){Z({type:"warning",message:E(i)})}});return es?(0,t.jsxs)(u.o,{"aria-busy":F,children:[(0,t.jsx)(e.SL,{name:"Users"}),(0,t.jsx)(p.T,{primaryAction:N&&(0,t.jsx)(es,{onClick:is}),title:ns,subtitle:O({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),y&&(0,t.jsx)(H.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.m,{label:O({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ns})}),(0,t.jsx)(ms.F,{displayedFilters:Is})]})}),(0,t.jsxs)(J.D,{children:[!y&&(0,t.jsx)(e.ZF,{}),V&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.tM,{contentType:"Users",isLoading:F,onConfirmDeleteAll:async i=>{await w.mutateAsync(i)},onConfirmDelete:async i=>{await w.mutateAsync([i])},headers:as,rows:Y,withBulkActions:!0,withMainAction:S,children:(0,t.jsx)(xs,{canDelete:S})}),I&&(0,t.jsx)(c.x,{paddingTop:4,children:(0,t.jsxs)(_.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e.v4,{}),(0,t.jsx)(e.tU,{pagination:I})]})})]})]}),A&&(0,t.jsx)(vs,{onSuccess:async()=>{await b(),await P.refetchQueries(ds)},onToggle:is})]}):null},Ts=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:n},{formatMessage:E}){return(0,t.jsx)(m.Z,{textColor:"neutral800",children:n.map(A=>E({id:`Settings.permissions.users.${A.code}`,defaultMessage:A.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:n},{formatMessage:E}){return(0,t.jsxs)(_.k,{children:[(0,t.jsx)(e.qb,{variant:n?"success":"danger"}),(0,t.jsx)(m.Z,{textColor:"neutral800",children:E({id:n?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:n?"Active":"Inactive"})})]})}}],Is=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Us=()=>{const n=(0,j.j)(_s,async()=>(await s.e(8128).then(s.bind(s,8128))).UserListPageEE);return n?(0,t.jsx)(n,{}):null},Rs=()=>{const n=(0,ss.v9)(r.s);return(0,t.jsx)(e.O4,{permissions:n.settings?.users.main,children:(0,t.jsx)(Us,{})})}},74751:(q,x,s)=>{s.d(x,{M:()=>W,S:()=>C,a:()=>v});var t=s(74081),l=s(61020),M=s(50637),g=s(2667),h=s(35632),d=s(94486),_=s(20049),c=s(30085),m=s(40464),D=s(19003);const v=({children:B,target:u})=>{const p=(0,d.lm)(),{formatMessage:H}=(0,l.Z)(),{copy:J}=(0,d.VP)(),e=H({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),X=async()=>{await J(u)&&p({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(d.Y_,{endAction:(0,t.jsx)(g.h,{label:e,noBorder:!0,icon:(0,t.jsx)(_.Z,{}),onClick:X}),title:u,titleEllipsis:!0,subtitle:B,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},W=({registrationToken:B})=>{const{formatMessage:u}=(0,l.Z)(),p=`${window.location.origin}${(0,M.p)()}/auth/register?registrationToken=${B}`;return(0,t.jsx)(v,{target:p,children:u({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},C=({disabled:B,error:u,onChange:p,value:H})=>{const{get:J}=(0,d.kY)(),{isLoading:e,data:X}=(0,m.useQuery)(["roles"],async()=>{const{data:{data:r}}=await J("/admin/roles");return r},{staleTime:5e4}),{formatMessage:f}=(0,l.Z)(),G=u?f({id:u,defaultMessage:u}):"",ss=f({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),ts=f({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),j=f({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(h.NU,{id:"roles",disabled:B,error:G,hint:ts,label:ss,name:"roles",onChange:r=>{p({target:{name:"roles",value:r}})},placeholder:j,startIcon:e?(0,t.jsx)(Q,{}):void 0,value:H.map(r=>r.toString()),withTags:!0,required:!0,children:(X??[]).map(r=>(0,t.jsx)(h.ML,{value:r.id.toString(),children:f({id:`global.${r.code}`,defaultMessage:r.name})},r.id))})},R=(0,D.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,T=D.default.div`
  animation: ${R} 2s infinite linear;
`,Q=()=>(0,t.jsx)(T,{children:(0,t.jsx)(c.Z,{})})},31430:(q,x,s)=>{s.d(x,{O:()=>m});var t=s(74081),l=s(27279),M=s(19003),g=s(52185),h=s(78565);const d=()=>(0,t.jsx)(g.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral500",children:"/"})});d.displayName="Divider";var _=s(85898);const c=(0,M.default)(_.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:D})=>`calc(-1*${D.spaces[2]})`};
  }
`,m=({label:D,children:v,...W})=>{const C=l.Children.toArray(v);return(0,t.jsx)(g.x,{"aria-label":D,...W,children:(0,t.jsx)(c,{as:"ol",children:l.Children.map(C,(R,T)=>{const Q=C.length>1&&T+1<C.length;return(0,t.jsxs)(_.k,{inline:!0,as:"li",children:[R,Q&&(0,t.jsx)(d,{})]})})})})};m.displayName="Breadcrumbs"},40505:(q,x,s)=>{s.d(x,{$:()=>g});var t=s(74081),l=s(52185),M=s(78565);const g=({children:h,isCurrent:d=!1,..._})=>(0,t.jsx)(l.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(M.Z,{variant:"pi",textColor:"neutral800",fontWeight:d?"bold":"normal","aria-current":d,..._,children:h})});g.displayName="Crumb"}}]);