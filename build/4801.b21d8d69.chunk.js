"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[4801],{64801:(g,d,s)=>{s.r(d),s.d(d,{LoginEE:()=>v});var _=s(74081),i=s(67393),a=s(52185),E=s(85898),r=s(78565),D=s(94486),M=s(61020),o=s(40464),l=s(19003),O=s(53098),e=s(47796),P=s(15816),h=s(97442),t=s(13576),c=s(87830),m=s(47184),n=s(364),T=s(27279),U=s(59461),W=s(71563),K=s(49204),j=s(47853),f=s(75719),u=s(74919),y=s(29206),S=s(98934),$=s(43433);const L=(0,l.default)(i.i)`
  flex: 1;
`,v=C=>{const{formatMessage:x}=(0,M.Z)(),{get:B}=(0,D.kY)(),{isLoading:A,data:R=[]}=(0,o.useQuery)(["ee","providers"],async()=>{const{data:I}=await B("/admin/providers");return I},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!A&&R.length===0?(0,_.jsx)(O.L,{...C}):(0,_.jsx)(O.L,{...C,children:(0,_.jsx)(a.x,{paddingTop:7,children:(0,_.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,_.jsxs)(E.k,{children:[(0,_.jsx)(L,{}),(0,_.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,_.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",children:x({id:"Auth.login.sso.divider"})})}),(0,_.jsx)(L,{})]}),(0,_.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},47796:(g,d,s)=>{s.d(d,{S:()=>O});var _=s(74081),i=s(90529),a=s(49899),E=s(62750),r=s(85898),D=s(78565),M=s(61020),o=s(47533),l=s(19003);const O=({providers:t,displayAllProviders:c})=>{const{formatMessage:m}=(0,M.Z)();return c?(0,_.jsx)(i.r,{gap:4,children:t.map(n=>(0,_.jsx)(a.P,{col:4,children:(0,_.jsx)(P,{provider:n})},n.uid))}):t.length>2&&!c?(0,_.jsxs)(i.r,{gap:4,children:[t.slice(0,2).map(n=>(0,_.jsx)(a.P,{col:4,children:(0,_.jsx)(P,{provider:n})},n.uid)),(0,_.jsx)(a.P,{col:4,children:(0,_.jsx)(E.u,{label:m({id:"global.see-more"}),children:(0,_.jsx)(h,{as:o.Link,to:"/auth/providers",children:(0,_.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,_.jsx)(e,{justifyContent:"center",children:t.map(n=>(0,_.jsx)(P,{provider:n},n.uid))})},e=(0,l.default)(r.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,P=({provider:t})=>(0,_.jsx)(E.u,{label:t.displayName,children:(0,_.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,_.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,_.jsx)(D.Z,{children:t.displayName})})}),h=l.default.a`
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
`}}]);
