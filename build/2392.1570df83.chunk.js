"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[2392],{32392:(j,m,s)=>{s.d(m,{ProtectedSSO:()=>Y});var t=s(74081),E=s(1296),i=s(796),P=s(34041),D=s(51413),u=s(49969),B=s(85898),A=s(78565),h=s(90529),c=s(49899),K=s(94707),I=s(52870),r=s(33699),C=s(35632),o=s(94486),U=s(82943),W=s(53532),x=s(71563),M=s(61020),f=s(40464),T=s(59461),v=s(47853),F=s(87137),p=s(22037),X=s(44485),ns=s(27279),es=s(64797),ls=s(85811),ds=s(50637),Es=s(15816),is=s(97442),rs=s(13576),Ms=s(87830),Os=s(47184),Ps=s(364),Ds=s(49204),gs=s(74919),Rs=s(29206),Ls=s(98934),ms=s(43433),cs=s(75719),vs=s(8175),As=s(6078),hs=s(51943),Is=s(55783),Cs=s(92249),fs=s(41942),Ts=s(22919),us=s(53915),Bs=s(75041),Ks=s(30200),Us=s(91379),Ws=s(33299),ys=s(33409),Ss=s(63645),js=s(7988),xs=s(7055),ps=s(26757),Ns=s(58311),Zs=s(29510),zs=s(16946),Fs=s(10124),Xs=s(69530),Qs=s(86961),Vs=s(51527),Ys=s(19764),Js=s(42982),$s=s(26126);const Q=v.Ry().shape({autoRegister:v.Xg().required(o.I0.required),defaultRole:v.nK().when("autoRegister",(a,l)=>a?l.required(o.I0.required):l.nullable()),ssoLockedRoles:v.IX().nullable().of(v.nK().when("ssoLockedRoles",(a,l)=>a?l.required(o.I0.required):l.nullable()))}),V=()=>{(0,o.go)();const{formatMessage:a}=(0,M.Z)(),l=(0,T.v9)(p.s),{lockApp:J,unlockApp:$}=(0,o.o1)(),y=(0,o.lm)(),{formatAPIError:G}=(0,o.So)(),{get:H,put:b}=(0,o.kY)(),{isLoading:k,data:w}=(0,f.useQuery)(["providers","options"],async()=>{const{data:e}=await H("/admin/providers/options");return e.data},{onError(){y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),N=(0,f.useMutation)(async e=>{const{autoRegister:g,defaultRole:O,ssoLockedRoles:n}=e,{data:R}=await b("/admin/providers/options",{autoRegister:g,defaultRole:O,ssoLockedRoles:n});return R.data},{async onSettled(){$()}}),{isLoading:q,allowedActions:{canUpdate:S,canReadRoles:ss}}=(0,o.ss)({...l.settings?.sso,readRoles:l.settings?.roles.read??[]}),{roles:Z,isLoading:ts}=(0,F.u)(void 0,{enabled:ss}),as=async(e,{resetForm:g,setErrors:O})=>{J(),N.mutate(e,{onSuccess(n){g({values:n}),y({type:"success",message:{id:"notification.success.saved"}})},onError(n){if(n instanceof W.d7&&n.response){const R=(0,X.f)(n.response.data),d=Object.keys(R).reduce((_,L)=>(_[L]=R[L].id,_),{});O(d),y({type:"warning",message:G(n)})}}})},{isLoading:os}=N,_s={autoRegister:!1,defaultRole:null,ssoLockedRoles:null},z=ts||q||k;return(0,t.jsxs)(E.A,{children:[(0,t.jsx)(o.SL,{name:"SSO"}),(0,t.jsx)(i.o,{"aria-busy":os||z,tabIndex:-1,children:(0,t.jsx)(x.J9,{onSubmit:as,initialValues:w||_s,validationSchema:Q,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:e,isSubmitting:g,values:O,setFieldValue:n,dirty:R,errors:d})=>(0,t.jsxs)(o.l0,{children:[(0,t.jsx)(P.T,{primaryAction:(0,t.jsx)(D.z,{"data-testid":"save-button",disabled:!R,loading:g,startIcon:(0,t.jsx)(U.Z,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(u.D,{children:g||z?(0,t.jsx)(o.dO,{}):(0,t.jsxs)(B.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(A.Z,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(h.r,{gap:4,children:[(0,t.jsx)(c.P,{col:6,s:12,children:(0,t.jsx)(K.s,{"data-testid":"autoRegister",disabled:!S,checked:O.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:e})}),(0,t.jsx)(c.P,{col:6,s:12,children:(0,t.jsx)(I.P,{disabled:!S,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:d.defaultRole?a({id:d.defaultRole,defaultMessage:d.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:_=>e({target:{name:"defaultRole",value:_}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:O.defaultRole,children:Z.map(({id:_,name:L})=>(0,t.jsx)(r.W,{value:_.toString(),children:L},_))})}),(0,t.jsx)(c.P,{col:6,s:12,children:(0,t.jsx)(C.NU,{disabled:!S,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:d.ssoLockedRoles?a({id:d.ssoLockedRoles,defaultMessage:d.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:_=>e({target:{value:_,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>n("ssoLockedRoles",[]),value:O.ssoLockedRoles||[],withTags:!0,children:Z.map(({id:_,name:L})=>(0,t.jsx)(C.ML,{value:_.toString(),children:L},_))})})]})]})})]})})})]})},Y=()=>{const a=(0,T.v9)(p.s);return(0,t.jsx)(o.O4,{permissions:a.settings?.sso?.main,children:(0,t.jsx)(V,{})})}},44485:(j,m,s)=>{s.d(m,{f:()=>t});const t=({data:E})=>{try{return Object.keys(E).reduce((i,P)=>{const D=E[P][0];return i[P]={id:D,defaultMessage:D},i},{})}catch{return{}}}},87137:(j,m,s)=>{s.d(m,{u:()=>D});var t=s(27279),E=s(94486),i=s(61020),P=s(40464);const D=(u={},B={})=>{const{id:A="",...h}=u,{get:c}=(0,E.kY)(),{locale:K}=(0,i.Z)(),I=(0,E.Xe)(K,{sensitivity:"base"}),{data:r,error:C,isError:o,isLoading:U,refetch:W}=(0,P.useQuery)(["roles",A,h],async()=>{const{data:M}=await c(`/admin/roles/${A??""}`,{params:h});return M},B);return{roles:t.useMemo(()=>{let M=[];return r&&(Array.isArray(r.data)?M=r.data:M=[r.data]),[...M].sort((f,T)=>I.compare(f.name,T.name))},[r,I]),error:C,isError:o,isLoading:U,refetch:W}}}}]);
