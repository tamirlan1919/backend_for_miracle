"use strict";(self.webpackChunknew_backend=self.webpackChunknew_backend||[]).push([[5092],{15092:(b,T,e)=>{e.r(T),e.d(T,{ProfilePage:()=>re});var s=e(74081),_=e(27279),y=e(86042),C=e(796),p=e(34041),Q=e(49969),k=e(51413),O=e(52185),D=e(85898),x=e(78565),R=e(90529),E=e(49899),$=e(19098),q=e(74083),L=e(73105),d=e(94486),ee=e(82943),w=e(84207),S=e(17273),se=e(71563),ae=e(51943),V=e(364),U=e(61020),Z=e(40464),Y=e(19003),N=e(47853),u=e(50637),G=e(22037),te=e(44506),ve=e(15816),Ae=e(97442),Ie=e(13576),Te=e(87830),Ce=e(47184),xe=e(59461),Re=e(49204),Ue=e(74919),Be=e(29206),je=e(98934),We=e(43433),Ke=e(75719),ye=e(8175),we=e(6078),Se=e(55783),Ze=e(92249),Ne=e(41942),He=e(22919),Fe=e(53915),ze=e(75041),Qe=e(30200),$e=e(91379),Ve=e(33299),Ye=e(33409),Ge=e(63645),Je=e(7988),Xe=e(7055),be=e(26757),ke=e(58311),qe=e(29510),es=e(16946),ss=e(10124),as=e(69530),ts=e(86961),ns=e(51527),rs=e(19764),os=e(42982),ds=e(26126),is=e(64797),ls=e(85811);const ne=N.Ry().shape({...te.C,currentPassword:N.Z_().when(["password","confirmPassword"],(t,i,r)=>t||i?r.required(d.I0.required):r),preferedLanguage:N.Z_().nullable()}),re=()=>{const t=(0,u.f)(n=>n.admin_app.language.localeNames),{setUserDisplayName:i}=(0,d.L7)(),{formatMessage:r}=(0,U.Z)(),{trackUsage:a}=(0,d.rS)(),m=(0,d.lm)(),{lockApp:o,unlockApp:M}=(0,d.o1)(),{notifyStatus:F}=(0,y.G)(),v=(0,u.f)(n=>n.admin_app.theme.currentTheme),B=(0,u.l)(),{get:c,put:g}=(0,d.kY)();(0,d.go)();const{isLoading:le,data:A,refetch:_e}=(0,Z.useQuery)("user",async()=>{const{data:n}=await c("/admin/users/me");return n.data},{onSuccess(){F(r({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:me,data:Ee}=(0,Z.useQuery)(["providers","isSSOLocked"],async()=>{const{data:{data:n}}=await c("/admin/providers/isSSOLocked");return n},{enabled:window.strapi.isEE&&window.strapi.features.isEnabled("sso"),onError(){m({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),ce=le||me,X=(0,Z.useMutation)(async n=>{const{confirmPassword:h,currentTheme:P,...f}=n;let l=f;if((W=>"password"in W)(l)&&l.password===""){const{password:W,currentPassword:K,...z}=l;l=z}const{data:I}=await g("/admin/users/me",l);return{...I.data,currentTheme:P}},{async onSuccess(n){await _e();const{email:h,firstname:P,lastname:f,username:l,preferedLanguage:j}=n;d.I8.setUserInfo({email:h,firstname:P,lastname:f,username:l,preferedLanguage:j});const I=n.username||(0,G.g)(n.firstname??"",n.lastname);i(I),n.preferedLanguage&&B((0,u.s)(n.preferedLanguage)),B((0,u.m)(n.currentTheme)),a("didChangeMode",{newMode:n.currentTheme}),m({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},async onSettled(){M()}}),{isLoading:Me}=X,ge=async(n,{setErrors:h})=>{o();const P=n.username;X.mutate({...n,username:P},{onError(f){const l=f?.response?.data;return l?.data?h(l.data):m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(ce||!A)return(0,s.jsxs)(C.o,{"aria-busy":"true",children:[(0,s.jsx)(V.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,s.jsx)(p.T,{title:r({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),(0,s.jsx)(Q.D,{children:(0,s.jsx)(d.dO,{})})]});const Pe=Ee?.isSSOLocked??!1,{email:fe,firstname:ue,lastname:he,username:pe,preferedLanguage:Oe}=A,De={email:fe,firstname:ue,lastname:he,username:pe,preferedLanguage:Oe,currentTheme:v,confirmPassword:"",password:""};return(0,s.jsxs)(C.o,{"aria-busy":Me,children:[(0,s.jsx)(V.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,s.jsx)(se.J9,{onSubmit:ge,initialValues:De,validateOnChange:!1,validationSchema:ne,enableReinitialize:!0,children:({errors:n,values:{email:h,firstname:P,lastname:f,username:l,preferedLanguage:j,currentTheme:I,...W},handleChange:K,isSubmitting:z,dirty:Le})=>(0,s.jsxs)(d.l0,{children:[(0,s.jsx)(p.T,{title:A.username||(0,G.g)(A.firstname??"",A.lastname),primaryAction:(0,s.jsx)(k.z,{startIcon:(0,s.jsx)(ee.Z,{}),loading:z,type:"submit",disabled:!Le,children:r({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(O.x,{paddingBottom:10,children:(0,s.jsx)(Q.D,{children:(0,s.jsxs)(D.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsx)(ie,{errors:n,onChange:K,values:{firstname:P,lastname:f,username:l,email:h}}),!Pe&&(0,s.jsx)(oe,{errors:n,onChange:K,values:W}),(0,s.jsx)(de,{onChange:K,values:{preferedLanguage:j,currentTheme:I},localeNames:t})]})})})]})})]})},oe=({errors:t,onChange:i,values:r})=>{const{formatMessage:a}=(0,U.Z)(),[m,o]=_.useState(!1),[M,F]=_.useState(!1),[v,B]=_.useState(!1);return(0,s.jsx)(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(D.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(x.Z,{variant:"delta",as:"h2",children:a({id:"global.change-password",defaultMessage:"Change password"})}),(0,s.jsx)(R.r,{gap:5,children:(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)($.o,{error:t.currentPassword?a({id:t.currentPassword,defaultMessage:t.currentPassword}):"",onChange:i,value:r.currentPassword,label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:m?"text":"password",endAction:(0,s.jsx)(H,{onClick:c=>{c.stopPropagation(),o(g=>!g)},label:a(m?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:m?(0,s.jsx)(w.Z,{}):(0,s.jsx)(S.Z,{})})})})}),(0,s.jsxs)(R.r,{gap:5,children:[(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(J,{error:t.password?a({id:t.password,defaultMessage:t.password}):"",onChange:i,value:r.password,label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:M?"text":"password",autoComplete:"new-password",endAction:(0,s.jsx)(H,{onClick:c=>{c.stopPropagation(),F(g=>!g)},label:a(M?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:M?(0,s.jsx)(w.Z,{}):(0,s.jsx)(S.Z,{})})})}),(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(J,{error:t.confirmPassword?a({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:i,value:r.confirmPassword,label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",type:v?"text":"password",autoComplete:"new-password",endAction:(0,s.jsx)(H,{onClick:c=>{c.stopPropagation(),B(g=>!g)},label:a(v?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:v?(0,s.jsx)(w.Z,{}):(0,s.jsx)(S.Z,{})})})})]})]})})},J=(0,Y.default)($.o)`
  ::-ms-reveal {
    display: none;
  }
`,H=(0,Y.default)(q.E)`
  svg {
    height: ${(0,d.Q1)(16)};
    width: ${(0,d.Q1)(16)};
    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,de=({onChange:t,values:i,localeNames:r})=>{const{formatMessage:a}=(0,U.Z)(),m=(0,u.f)(o=>o.admin_app.theme.availableThemes);return(0,s.jsx)(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(D.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsxs)(D.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(x.Z,{variant:"delta",as:"h2",children:a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),(0,s.jsx)(x.Z,{children:a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:(0,s.jsx)(O.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),(0,s.jsxs)(R.r,{gap:5,children:[(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(L.q4,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{t({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:i.preferedLanguage,onChange:o=>{t({target:{name:"preferedLanguage",value:o}})},children:Object.entries(r).map(([o,M])=>(0,s.jsx)(L.ag,{value:o,children:M},o))})}),(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsxs)(L.q4,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:i.currentTheme,onChange:o=>{t({target:{name:"currentTheme",value:o}})},children:[(0,s.jsx)(L.ag,{value:"system",children:a({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})}),m.map(o=>(0,s.jsx)(L.ag,{value:o,children:a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:o,defaultMessage:ae(o)})})},o))]})})]})]})})},ie=({errors:t,onChange:i,values:r})=>{const{formatMessage:a}=(0,U.Z)();return(0,s.jsx)(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(D.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(x.Z,{variant:"delta",as:"h2",children:a({id:"global.profile",defaultMessage:"Profile"})}),(0,s.jsxs)(R.r,{gap:5,children:[(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(d.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:i,value:r.firstname,type:"text",name:"firstname",required:!0})}),(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(d.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:i,value:r.lastname,type:"text",name:"lastname"})}),(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(d.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:i,value:r.email,type:"email",name:"email",required:!0})}),(0,s.jsx)(E.P,{s:12,col:6,children:(0,s.jsx)(d.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:i,value:r.username,type:"text",name:"username"})})]})]})})}},44506:(b,T,e)=>{e.d(T,{C:()=>y});var s=e(94486),_=e(47853);const y={firstname:_.Z_().trim().required(s.I0.required),lastname:_.Z_(),email:_.Z_().email(s.I0.email).lowercase().required(s.I0.required),username:_.Z_().nullable(),password:_.Z_().min(8,s.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:_.Z_().min(8,s.I0.minLength).oneOf([_.iH("password"),null],"components.Input.error.password.noMatch").when("password",(C,p)=>C?p.required(s.I0.required):p)}}}]);
