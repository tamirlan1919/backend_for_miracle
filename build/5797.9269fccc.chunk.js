"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[5797],{45797:(A,E,i)=>{i.r(E),i.d(E,{default:()=>se});var s=i(74081),d=i(27279),a=i(81565),o=i(37386),p=i(23851),e=i(90529),t=i(49899),c=i(87549),x=i(3785),j=i(51413),C=i(92712),m=i(7609),f=i(66016),u=i(9465),l=i(17992),n=i(78565),L=i(84428),R=i(57074),W=i(2667),J=i(86042),K=i(796),S=i(34041),Z=i(49969),r=i(94486),B=i(61020),I=i(40464),_=i(63068),ge=i(10124),X=i(12692),z=i(64360),Y=i(71563),h=i(70627),D=i(47853),k=i(69),F=i(9663),q=i(82943);const ee=D.Ry().shape({options:D.Ry().shape({from:D.Ry().shape({name:D.Z_().required(r.I0.required),email:D.Z_().email(r.I0.email).required(r.I0.required)}).required(),response_email:D.Z_().email(r.I0.email),object:D.Z_().required(r.I0.required),message:D.Z_().required(r.I0.required)}).required(r.I0.required)}),w=({template:g,onToggle:y,onSubmit:$})=>{const{formatMessage:P}=(0,B.Z)();return(0,s.jsxs)(a.P,{onClose:y,labelledBy:`${P({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${P({id:(0,_.g)(g.display),defaultMessage:g.display})}`,children:[(0,s.jsx)(o.x,{children:(0,s.jsxs)(X.O,{label:`${P({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${P({id:(0,_.g)(g.display),defaultMessage:g.display})}`,children:[(0,s.jsx)(z.$,{children:P({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(z.$,{isCurrent:!0,children:P({id:(0,_.g)(g.display),defaultMessage:g.display})})]})}),(0,s.jsx)(Y.J9,{onSubmit:$,initialValues:g,validateOnChange:!1,validationSchema:ee,enableReinitialize:!0,children:({errors:O,values:T,handleChange:v,isSubmitting:U})=>(0,s.jsxs)(r.l0,{children:[(0,s.jsx)(p.f,{children:(0,s.jsxs)(e.r,{gap:5,children:[(0,s.jsx)(t.P,{col:6,s:12,children:(0,s.jsx)(r.jm,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:v,value:T.options.from.name,error:O?.options?.from?.name,type:"text"})}),(0,s.jsx)(t.P,{col:6,s:12,children:(0,s.jsx)(r.jm,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:v,value:T.options.from.email,error:O?.options?.from?.email,type:"text"})}),(0,s.jsx)(t.P,{col:6,s:12,children:(0,s.jsx)(r.jm,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:v,value:T.options.response_email,error:O?.options?.response_email,type:"text"})}),(0,s.jsx)(t.P,{col:6,s:12,children:(0,s.jsx)(r.jm,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:v,value:T.options.object,error:O?.options?.object,type:"text"})}),(0,s.jsx)(t.P,{col:12,s:12,children:(0,s.jsx)(c.g,{label:P({id:(0,_.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:v,value:T.options.message,error:O?.options?.message&&P({id:O.options.message,defaultMessage:O.options.message})})})]})}),(0,s.jsx)(x.m,{startActions:(0,s.jsx)(j.z,{onClick:y,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(j.z,{loading:U,type:"submit",children:"Finish"})})]})})]})};w.propTypes={template:h.shape({display:h.string,icon:h.string,options:h.shape({from:h.shape({name:h.string,email:h.string}),message:h.string,object:h.string,response_email:h.string})}).isRequired,onSubmit:h.func.isRequired,onToggle:h.func.isRequired};const H=({canUpdate:g,onEditClick:y})=>{const{formatMessage:$}=(0,B.Z)();return(0,s.jsxs)(C.i,{colCount:3,rowCount:3,children:[(0,s.jsx)(m.h,{children:(0,s.jsxs)(f.Tr,{children:[(0,s.jsx)(u.Th,{width:"1%",children:(0,s.jsx)(l.T,{children:$({id:(0,_.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(u.Th,{children:(0,s.jsx)(n.Z,{variant:"sigma",textColor:"neutral600",children:$({id:(0,_.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(u.Th,{width:"1%",children:(0,s.jsx)(l.T,{children:$({id:(0,_.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(L.p,{children:[(0,s.jsxs)(f.Tr,{...(0,r.X7)({fn:()=>y("reset_password")}),children:[(0,s.jsx)(u.Td,{children:(0,s.jsx)(R.J,{children:(0,s.jsx)(k.Z,{"aria-label":$({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(u.Td,{children:(0,s.jsx)(n.Z,{children:$({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(u.Td,{...r.UW,children:(0,s.jsx)(W.h,{onClick:()=>y("reset_password"),label:$({id:(0,_.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,s.jsx)(F.Z,{})})})]}),(0,s.jsxs)(f.Tr,{...(0,r.X7)({fn:()=>y("email_confirmation")}),children:[(0,s.jsx)(u.Td,{children:(0,s.jsx)(R.J,{children:(0,s.jsx)(q.Z,{"aria-label":$({id:(0,_.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(u.Td,{children:(0,s.jsx)(n.Z,{children:$({id:(0,_.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(u.Td,{...r.UW,children:(0,s.jsx)(W.h,{onClick:()=>y("email_confirmation"),label:$({id:(0,_.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,s.jsx)(F.Z,{})})})]})]})]})};H.propTypes={canUpdate:h.bool.isRequired,onEditClick:h.func.isRequired};const se=()=>(0,s.jsx)(r.O4,{permissions:_.P.readEmailTemplates,children:(0,s.jsx)(te,{})}),te=()=>{const{formatMessage:g}=(0,B.Z)(),{trackUsage:y}=(0,r.rS)(),{notifyStatus:$}=(0,J.G)(),P=(0,r.lm)(),{lockApp:O,unlockApp:T}=(0,r.o1)(),v=(0,I.useQueryClient)(),{get:U,put:ie}=(0,r.kY)(),{formatAPIError:N}=(0,r.So)();(0,r.go)();const[ae,ne]=d.useState(!1),[Q,oe]=d.useState(null),{isLoading:le,allowedActions:{canUpdate:re}}=(0,r.ss)({update:_.P.updateEmailTemplates}),{isLoading:de,data:V}=(0,I.useQuery)(["users-permissions","email-templates"],async()=>{const{data:M}=await U("/users-permissions/email-templates");return M},{onSuccess(){$(g({id:(0,_.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(M){P({type:"warning",message:N(M)})}}),me=le||de,b=()=>{ne(M=>!M)},_e=M=>{oe(M),b()},G=(0,I.useMutation)(M=>ie("/users-permissions/email-templates",{"email-templates":M}),{async onSuccess(){await v.invalidateQueries(["users-permissions","email-templates"]),P({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),y("didEditEmailTemplates"),T(),b()},onError(M){P({type:"warning",message:N(M)}),T()},refetchActive:!0}),pe=M=>{O(),y("willEditEmailTemplates");const ce={...V,[Q]:M};G.mutate(ce)};return me?(0,s.jsxs)(K.o,{"aria-busy":"true",children:[(0,s.jsx)(r.SL,{name:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(S.T,{title:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(Z.D,{children:(0,s.jsx)(r.dO,{})})]}):(0,s.jsxs)(K.o,{"aria-busy":G.isLoading,children:[(0,s.jsx)(r.SL,{name:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(S.T,{title:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(Z.D,{children:[(0,s.jsx)(H,{onEditClick:_e,canUpdate:re}),ae&&(0,s.jsx)(w,{template:V[Q],onToggle:b,onSubmit:pe})]})]})}},77919:(A,E,i)=>{i.d(E,{x:()=>p});var s=i(19003),d=i(55409),a=i(812);const o={color:!0,cursor:!0,height:!0,width:!0},p=s.default.div.withConfig({shouldForwardProp:(e,t)=>!o[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,a.$)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,a.$)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,a.$)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,d.Z)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,d.Z)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,d.Z)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,d.Z)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,d.Z)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,d.Z)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,d.Z)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,d.Z)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,d.Z)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:c})=>t?e.borderRadius:c};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,a.$)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:c,borderWidth:x})=>{if(t&&!c&&typeof x>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,a.$)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,a.$)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,a.$)(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>(0,a.$)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},41101:(A,E,i)=>{i.d(E,{Z:()=>u});var s=i(19003);const d="alpha",a="beta",o="delta",p="epsilon",e="omega",t="pi",c="sigma",x=[d,a,o,p,e,t,c],j=({ellipsis:l=!1})=>l&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,C=({variant:l=e,theme:n})=>{switch(l){case d:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case a:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case p:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case t:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case c:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var m=i(812);const f={fontSize:!0,fontWeight:!0},u=s.default.span.withConfig({shouldForwardProp:(l,n)=>!f[l]&&n(l)})`
  ${C}
  ${j}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:l,fontWeight:n})=>(0,m.$)(l.fontWeights,n,void 0)};
  font-size: ${({theme:l,fontSize:n})=>(0,m.$)(l.fontSizes,n,void 0)};
  line-height: ${({theme:l,lineHeight:n})=>(0,m.$)(l.lineHeights,n,n)};
  color: ${({theme:l,textColor:n})=>l.colors[n||"neutral800"]};
  text-align: ${({textAlign:l})=>l};
  text-decoration: ${({textDecoration:l})=>l};
  text-transform: ${({textTransform:l})=>l};
`},55409:(A,E,i)=>{i.d(E,{Z:()=>s});const s=(d,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((c,x,j)=>{if(x)switch(j){case 0:return`${c}${d}: ${o.spaces[x]};`;case 1:return`${c}${o.mediaQueries.tablet}{${d}: ${o.spaces[x]};}`;case 2:return`${c}${o.mediaQueries.mobile}{${d}: ${o.spaces[x]};}`;default:return c}return c},"");const p=o.spaces[a]??a;return`${d}: ${p};`}},812:(A,E,i)=>{i.d(E,{$:()=>a});function s(o,p){return typeof o=="string"?!1:p in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,p,e){return p&&s(o,p)?o[p]:e}},12692:(A,E,i)=>{i.d(E,{O:()=>C});var s=i(74081),d=i(27279),a=i(19003),o=i(77919),p=i(41101);const e=()=>(0,s.jsx)(o.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(p.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=i(55409);const c={direction:!0},x=(0,a.default)(o.x).withConfig({shouldForwardProp:(m,f)=>!c[m]&&f(m)})`
  align-items: ${({alignItems:m="center"})=>m};
  display: ${({display:m="flex",inline:f})=>f?"inline-flex":m};
  flex-direction: ${({direction:m="row"})=>m};
  flex-shrink: ${({shrink:m})=>m};
  flex-wrap: ${({wrap:m})=>m};
  ${({gap:m,theme:f})=>(0,t.Z)("gap",m,f)};
  justify-content: ${({justifyContent:m})=>m};
`,j=(0,a.default)(x)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:m})=>`calc(-1*${m.spaces[2]})`};
  }
`,C=({label:m,children:f,...u})=>{const l=d.Children.toArray(f);return(0,s.jsx)(o.x,{"aria-label":m,...u,children:(0,s.jsx)(j,{as:"ol",children:d.Children.map(l,(n,L)=>{const R=l.length>1&&L+1<l.length;return(0,s.jsxs)(x,{inline:!0,as:"li",children:[n,R&&(0,s.jsx)(e,{})]})})})})};C.displayName="Breadcrumbs"},64360:(A,E,i)=>{i.d(E,{$:()=>o});var s=i(74081),d=i(77919),a=i(41101);const o=({children:p,isCurrent:e=!1,...t})=>(0,s.jsx)(d.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(a.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:p})});o.displayName="Crumb"}}]);
