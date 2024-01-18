"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[9729],{47796:(T,D,_)=>{_.d(D,{S:()=>B});var s=_(74081),l=_(90529),n=_(49899),a=_(62750),d=_(85898),h=_(78565),C=_(61020),v=_(47533),i=_(19003);const B=({providers:t,displayAllProviders:r})=>{const{formatMessage:o}=(0,C.Z)();return r?(0,s.jsx)(l.r,{gap:4,children:t.map(E=>(0,s.jsx)(n.P,{col:4,children:(0,s.jsx)(P,{provider:E})},E.uid))}):t.length>2&&!r?(0,s.jsxs)(l.r,{gap:4,children:[t.slice(0,2).map(E=>(0,s.jsx)(n.P,{col:4,children:(0,s.jsx)(P,{provider:E})},E.uid)),(0,s.jsx)(n.P,{col:4,children:(0,s.jsx)(a.u,{label:o({id:"global.see-more"}),children:(0,s.jsx)(M,{as:v.Link,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(L,{justifyContent:"center",children:t.map(E=>(0,s.jsx)(P,{provider:E},E.uid))})},L=(0,i.default)(d.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,P=({provider:t})=>(0,s.jsx)(a.u,{label:t.displayName,children:(0,s.jsx)(M,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,s.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.Z,{children:t.displayName})})}),M=i.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`},19729:(T,D,_)=>{_.r(D),_.d(D,{FORMS:()=>W});var s=_(74081),l=_(796),n=_(52185),a=_(78565),d=_(85898),h=_(62475),C=_(51413),v=_(67393),i=_(33646),B=_(94486),L=_(61020),P=_(40464),M=_(51447),t=_(47533),r=_(19003),o=_(50637),E=_(47796),j=_(15816),c=_(97442),f=_(13576),y=_(87830),e=_(47184),S=_(364),u=_(27279),$=_(59461),Z=_(71563),N=_(49204),F=_(47853),z=_(74919),Q=_(29206),Y=_(98934),G=_(43433),H=_(75719),J=_(8175),V=_(6078),X=_(51943),p=_(55783),k=_(92249),w=_(41942),b=_(22919),q=_(53915),__=_(75041),s_=_(30200),t_=_(91379),E_=_(33299),n_=_(33409),a_=_(63645),d_=_(7988),o_=_(7055),O_=_(26757),P_=_(58311),M_=_(29510),D_=_(16946),l_=_(10124),i_=_(69530),r_=_(86961),h_=_(51527),C_=_(19764),v_=_(42982),B_=_(26126);const U=()=>{const{push:I}=(0,M.k6)(),{formatMessage:O}=(0,L.Z)(),{get:K}=(0,B.kY)(),{isLoading:R,data:m=[]}=(0,P.useQuery)(["ee","providers"],async()=>{const{data:g}=await K("/admin/providers");return g},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),x=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!R&&m.length===0?(0,s.jsx)(M.l_,{to:"/auth/login"}):(0,s.jsx)(o.U,{children:(0,s.jsxs)(l.o,{children:[(0,s.jsxs)(o.d,{children:[(0,s.jsxs)(o.C,{children:[(0,s.jsx)(o.e,{}),(0,s.jsx)(n.x,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(a.Z,{as:"h1",variant:"alpha",children:O({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(n.x,{paddingBottom:7,children:(0,s.jsx)(a.Z,{variant:"epsilon",textColor:"neutral600",children:O({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:7,children:[R?(0,s.jsx)(d.k,{justifyContent:"center",children:(0,s.jsx)(h.a,{children:O({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(E.S,{providers:m}),(0,s.jsxs)(d.k,{children:[(0,s.jsx)(A,{}),(0,s.jsx)(n.x,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(a.Z,{variant:"sigma",textColor:"neutral600",children:O({id:"or"})})}),(0,s.jsx)(A,{})]}),(0,s.jsx)(C.z,{fullWidth:!0,size:"L",onClick:x,children:O({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.k,{justifyContent:"center",children:(0,s.jsx)(n.x,{paddingTop:4,children:(0,s.jsx)(i.r,{as:t.NavLink,to:"/auth/forgot-password",children:(0,s.jsx)(a.Z,{variant:"pi",children:O({id:"Auth.link.forgot-password"})})})})})]})})},A=(0,r.default)(v.i)`
  flex: 1;
`,W={providers:U}}}]);
