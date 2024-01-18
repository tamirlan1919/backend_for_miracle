"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[4429],{84429:(U,v,s)=>{s.r(v),s.d(v,{default:()=>ct});var t=s(74081),o=s(94486),c=s(59461),x=s(91687),l=s(27279),S=s(86042),D=s(1296),L=s(796),p=s(34041),r=s(51452),g=s(78565),y=s(51413),q=s(49969),k=s(52185),_=s(92712),tt=s(89630),st=s(7609),w=s(66016),i=s(9465),F=s(83667),et=s(17992),nt=s(84428),$=s(85898),K=s(19003);const B=K.default.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ot=K.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${B} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${B}:before {
    transform: translateX(1rem);
  }
`,at=l.forwardRef(({label:a,onChange:u,onLabel:m="On",offLabel:h="Off",selected:M,visibleLabels:n=!1,...j},f)=>(0,t.jsx)(ot,{ref:f,role:"switch","aria-checked":M,"aria-label":a,onClick:u,visibleLabels:n,type:"button",...j,children:(0,t.jsxs)($.k,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)("span",{children:m}),(0,t.jsx)("span",{children:h})]}),n&&(0,t.jsx)(k.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?m:h})]})}));var z=s(2667),dt=s(21128),O=s(25659),H=s(18076),it=s(9663),lt=s(64417),rt=s(61020),P=s(40464),V=s(51447),St=s(64797),Dt=s(85811),Lt=s(53098),pt=s(15816),$t=s(97442),Bt=s(13576),Ot=s(87830),Pt=s(47184),At=s(364),Wt=s(71563),Zt=s(49204),It=s(47853),Rt=s(75719),Ut=s(74919),kt=s(29206),wt=s(98934),Ft=s(43433),Kt=s(8175);const ht=()=>{const[a,u]=(0,l.useState)(!1),[m,h]=(0,l.useState)([]),M=(0,c.v9)(x.s),{formatMessage:n}=(0,rt.Z)(),{formatAPIError:j}=(0,o.So)(),f=(0,o.lm)();(0,o.go)();const{push:gt}=(0,V.k6)(),{pathname:N}=(0,V.TH)(),{isLoading:xt,allowedActions:{canCreate:A,canUpdate:Q,canDelete:Y}}=(0,o.ss)(M.settings.webhooks),{get:ut,post:vt,put:mt}=(0,o.kY)(),{notifyStatus:G}=(0,S.G)(),jt="webhooks",{isLoading:ft,data:C,error:W,refetch:X}=(0,P.useQuery)(jt,async()=>{const{data:{data:e}}=await ut("/admin/webhooks");return e});(0,l.useEffect)(()=>{if(W){f({type:"warning",message:j(W)});return}C&&G(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[C,W,f,n,G,j]);const J=(0,P.useMutation)(async()=>{await vt("/admin/webhooks/batch-delete",{ids:m})},{onError(e){f({type:"warning",message:j(e)}),u(!1)},onSuccess(){h([]),u(!1),X()}}),Ct=(0,P.useMutation)(async({isEnabled:e,id:d})=>{const{id:E,...R}=C.find(Et=>Et.id===d)??{},Tt={...R,isEnabled:e};await mt(`/admin/webhooks/${d}`,Tt)},{onError(e){f({type:"warning",message:j(e)})},onSuccess(){X()}}),Mt=()=>J.mutate(),bt=e=>h(e?C.map(d=>d.id):[]),yt=(e,d)=>h(e?E=>[...E,d]:E=>E.filter(R=>R!==d)),Z=e=>gt(`${N}/${e}`),I=xt||ft,T=C?.length??0,b=m.length;return(0,t.jsxs)(D.A,{children:[(0,t.jsx)(o.SL,{name:"Webhooks"}),(0,t.jsxs)(L.o,{"aria-busy":I,children:[(0,t.jsx)(p.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:A&&!I&&(0,t.jsx)(o.Qj,{startIcon:(0,t.jsx)(O.Z,{}),variant:"default",to:`${N}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),b>0&&Y&&(0,t.jsx)(r.Z,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:b})}),(0,t.jsx)(y.z,{onClick:()=>u(!0),startIcon:(0,t.jsx)(H.Z,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,t.jsx)(q.D,{children:I?(0,t.jsx)(k.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.dO,{})}):T>0?(0,t.jsxs)(_.i,{colCount:5,rowCount:T+1,footer:(0,t.jsx)(tt.c,{onClick:()=>A?Z("create"):{},icon:(0,t.jsx)(O.Z,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,t.jsx)(st.h,{children:(0,t.jsxs)(w.Tr,{children:[(0,t.jsx)(i.Th,{children:(0,t.jsx)(F.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:b>0&&b<T,value:b===T,onValueChange:bt})}),(0,t.jsx)(i.Th,{width:"20%",children:(0,t.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(i.Th,{width:"60%",children:(0,t.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,t.jsx)(i.Th,{width:"20%",children:(0,t.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,t.jsx)(i.Th,{children:(0,t.jsx)(et.T,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(nt.p,{children:C.map(e=>(0,t.jsxs)(w.Tr,{...(0,o.X7)({fn:()=>Z(e.id),condition:Q}),children:[(0,t.jsx)(i.Td,{...o.UW,children:(0,t.jsx)(F.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:m?.includes(e.id),onValueChange:d=>yt(d,e.id),name:"select"})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(g.Z,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(g.Z,{textColor:"neutral800",children:e.url})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)($.k,{children:(0,t.jsx)(at,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:d=>{d.stopPropagation(),Ct.mutate({isEnabled:!e.isEnabled,id:e.id})},visibleLabels:!0})})}),(0,t.jsx)(i.Td,{children:(0,t.jsxs)($.k,{gap:1,children:[Q&&(0,t.jsx)(z.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,t.jsx)(it.Z,{}),noBorder:!0}),Y&&(0,t.jsx)(z.h,{onClick:d=>{d.stopPropagation(),h([e.id]),u(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,t.jsx)(H.Z,{}),noBorder:!0})]})})]},e.id))})]}):(0,t.jsx)(dt.x,{icon:(0,t.jsx)(lt.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,t.jsx)(y.z,{variant:"secondary",startIcon:(0,t.jsx)(O.Z,{}),onClick:()=>A?Z("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,t.jsx)(o.QH,{isOpen:a,onToggleDialog:()=>u(e=>!e),onConfirm:Mt,isConfirmButtonLoading:J.isLoading})]})},ct=()=>{const a=(0,c.v9)(x.s);return(0,t.jsx)(o.O4,{permissions:a.settings.webhooks.main,children:(0,t.jsx)(ht,{})})}},51452:(U,v,s)=>{s.d(v,{Z:()=>c});var t=s(74081),o=s(85898);const c=({startActions:x,endActions:l})=>!x&&!l?null:(0,t.jsxs)(o.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(o.k,{gap:2,wrap:"wrap",children:x}),(0,t.jsx)(o.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},89630:(U,v,s)=>{s.d(v,{c:()=>p});var t=s(74081),o=s(19003),c=s(52185),x=s(67393),l=s(85898),S=s(78565);const D=(0,o.default)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,L=(0,o.default)(c.x)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,p=({children:r,icon:g,...y})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(x.i,{}),(0,t.jsx)(L,{as:"button",background:"primary100",padding:5,...y,children:(0,t.jsxs)(l.k,{children:[(0,t.jsx)(D,{"aria-hidden":!0,background:"primary200",children:g}),(0,t.jsx)(c.x,{paddingLeft:3,children:(0,t.jsx)(S.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]})}}]);
