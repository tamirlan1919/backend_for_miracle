"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[2893],{72893:($,v,t)=>{t.r(v),t.d(v,{InformationBoxEE:()=>X});var s=t(74081),a=t(94486),r=t(50637),R=t(35090),l=t(85898),B=t(71943),L=t(930),O=t(73105),U=t(78565),G=t(62475),Q=t(11140),V=t(45804),Y=t(61020),x=t(40464),o=t(42551),S=t(27279),z=t(74563),C=t(9991),K=t(47706),F=t(93836),b=t(15816),q=t(97442),tt=t(13576),st=t(87830),at=t(47184),nt=t(364),et=t(59461),ot=t(71563),_t=t(49204),lt=t(47853),it=t(74919),rt=t(29206),Et=t(98934),dt=t(43433),Mt=t(75719),gt=t(8175),Dt=t(6078),Ot=t(51943),mt=t(55783),Pt=t(92249),ct=t(41942),ht=t(22919),vt=t(53915),Ct=t(75041),At=t(30200),Wt=t(91379),It=t(33299),Lt=t(33409),ut=t(63645),ft=t(7988),Tt=t(7055),Rt=t(26757),Bt=t(58311),Ut=t(29510),Kt=t(16946),yt=t(10124),jt=t(69530),xt=t(86961),St=t(51527),wt=t(19764),pt=t(42982),Nt=t(26126);const H=()=>{const{initialData:_,layout:E,isSingleType:m,onChange:u}=(0,a.Wq)(),A=(0,r.f)(e=>e.admin_app.permissions),{formatMessage:n}=(0,Y.Z)(),{formatAPIError:f}=(0,a.So)(),M=(0,a.lm)(),{put:T}=(0,a.kY)(),{allowedActions:{canRead:d},isLoading:P}=(0,a.ss)(A.settings?.users),{users:W,isLoading:I,isError:y}=(0,r.g)({},{enabled:!P&&d}),c=_?.[o.A]??null,h=async e=>{i.mutate({entityId:_.id,assigneeId:e?parseInt(e,10):null,uid:E.uid})},i=(0,x.useMutation)(async({entityId:e,assigneeId:w,uid:p})=>{const g=m?"single-types":"collection-types",{data:{data:D}}=await T(`/admin/content-manager/${g}/${p}/${e}/assignee`,{data:{id:w}});return u?.({target:{type:"",name:o.A,value:D[o.A]}},!0),D},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return(0,s.jsx)(R.g,{name:o.A,id:o.A,children:(0,s.jsx)(l.k,{direction:"column",gap:2,alignItems:"stretch",children:(0,s.jsx)(B.hQ,{clearLabel:n({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:(y&&d&&n({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||i.error&&f(i.error))??void 0,disabled:!P&&!I&&W.length===0,name:o.A,id:o.A,value:c?c.id.toString():null,onChange:h,onClear:()=>h(null),placeholder:n({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:n({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:I||P||i.isLoading,children:W.map(e=>(0,s.jsx)(L.O,{value:e.id.toString(),textValue:(0,r.h)(e,n),children:(0,r.h)(e,n)},e.id))})})})};function J({id:_,layout:E},m={}){const{kind:u,uid:A}=E,n=u==="collectionType"?"collection-types":"single-types",{get:f}=(0,a.kY)(),{data:M,isLoading:T,refetch:d}=(0,x.useQuery)(["content-manager",n,A,_,"stages"],async()=>{const{data:I}=await f(`/admin/content-manager/${n}/${A}/${_}/stages`);return I},m),P=S.useMemo(()=>M?.meta??{workflowCount:0},[M?.meta]),W=S.useMemo(()=>M?.data??[],[M?.data]);return{meta:P,stages:W,isLoading:T,refetch:d}}const k=()=>{const{initialData:_,layout:E,isSingleType:m,onChange:u}=(0,a.Wq)(),{put:A}=(0,a.kY)(),{formatMessage:n}=(0,Y.Z)(),{formatAPIError:f}=(0,a.So)(),M=(0,a.lm)(),{meta:T,stages:d,isLoading:P,refetch:W}=J({id:_.id,layout:E},{enabled:!!_?.id}),{getFeature:I}=(0,z.u)(),[y,c]=S.useState(null),h=I("review-workflows")??{},i=_?.[o.S]??null,e=(0,x.useMutation)(async({entityId:g,stageId:D,uid:j})=>{const N=m?"single-types":"collection-types",{data:{data:Z}}=await A(`/admin/content-manager/${N}/${j}/${g}/stage`,{data:{id:D}});return u?.({target:{name:o.S,value:Z[o.S],type:""}},!0),await W(),Z},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),w=async g=>{try{h?.[K.C]&&parseInt(h[K.C],10)<T.workflowCount?c("workflow"):h?.[K.a]&&parseInt(h[K.a],10)<d.length?c("stage"):_.id&&E&&e.mutateAsync({entityId:_.id,stageId:g,uid:E.uid})}catch{}},{themeColorName:p}=(0,F.g)(i?.color)??{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.g,{hint:d.length===0&&n({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:o.S,id:o.S,children:(0,s.jsxs)(l.k,{direction:"column",gap:2,alignItems:"stretch",children:[(0,s.jsx)(O.q4,{disabled:d.length===0,error:e.error&&f(e.error)||void 0,name:o.S,id:o.S,value:i?.id,onChange:w,label:n({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:i&&(0,s.jsx)(l.k,{as:"span",height:2,background:i?.color,borderColor:p==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,s.jsxs)(l.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,s.jsx)(U.Z,{textColor:"neutral800",ellipsis:!0,children:i?.name??""}),P?(0,s.jsx)(G.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:d.map(({id:g,color:D,name:j})=>{const{themeColorName:N}=(0,F.g)(D)??{};return(0,s.jsx)(O.ag,{startIcon:(0,s.jsx)(l.k,{height:2,background:D,borderColor:N==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:g,textValue:j,children:j},g)})}),(0,s.jsx)(Q.J,{}),(0,s.jsx)(V.c,{})]})}),(0,s.jsxs)(C.L.Root,{isOpen:y==="workflow",onClose:()=>c(null),children:[(0,s.jsx)(C.L.Title,{children:n({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(C.L.Body,{children:n({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,s.jsxs)(C.L.Root,{isOpen:y==="stage",onClose:()=>c(null),children:[(0,s.jsx)(C.L.Title,{children:n({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,s.jsx)(C.L.Body,{children:n({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},X=()=>{const{isCreatingEntry:_,layout:E}=(0,a.Wq)(),m=E?.options?.reviewWorkflows??!1;return(0,s.jsxs)(r.I.Root,{children:[(0,s.jsx)(r.I.Title,{}),m&&!_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{}),(0,s.jsx)(H,{})]}),(0,s.jsx)(r.I.Body,{})]})}},93836:($,v,t)=>{t.d(v,{a:()=>R,g:()=>r});var s=t(20640),a=t(47706);function r(l){if(!l)return null;const L=Object.entries(s.W.colors).filter(([,O])=>O.toUpperCase()===l.toUpperCase()).reduce((O,[U])=>(a.S?.[U]&&(O=U),O),null);return L?{themeColorName:L,name:a.S[L]}:null}function R(){return Object.entries(a.S).map(([l,B])=>({hex:s.W.colors[l].toUpperCase(),name:B}))}},42551:($,v,t)=>{t.d(v,{A:()=>a,S:()=>s});const s="strapi_stage",a="strapi_assignee"}}]);
