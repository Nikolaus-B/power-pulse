"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[235],{4235:function(e,a,s){s.r(a);var r=s(9439),n=s(4420),o=s(2791),l=s(5667),t=s(5705),i=s(8007),c=s(5165),d=s(6347),m=s(184);a.default=function(){var e=(0,n.I0)(),a=(0,o.useState)(!1),s=(0,r.Z)(a,1)[0],p=i.Ry().shape({name:i.Z_().min(2).max(20).required("Required"),email:i.Z_().min(6,"The email address must be at least 6 characters long!").max(20,"The email address is too long!").email("Error email").required("Required"),password:i.Z_().min(6,"The password address must be at least 6 characters long!").max(20,"The password length is too long!").required("Required")});return(0,m.jsx)(d.Z,{title:"Sign up",paragraph:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.",bottomText:"Already have an account?",linkName:"Sign In",linkUrl:"/login",children:(0,m.jsx)(t.J9,{initialValues:{email:"",name:"",password:""},validationSchema:p,onSubmit:function(a){e((0,l.n8)(a))},children:function(e){var a=e.errors,r=e.touched;return(0,m.jsxs)(c.Gq,{children:[(0,m.jsxs)(c.e4,{children:[(0,m.jsx)("label",{htmlFor:"name",children:(0,m.jsx)(c.II,{id:"name",name:"name",placeholder:"Name",type:"text",className:"defoult".concat("\n                ",r.name&&!a.name&&"success","\n                ").concat(r.name&&a.name&&"error")})}),(0,m.jsx)("label",{htmlFor:"email",children:(0,m.jsx)(c.II,{id:"email",name:"email",placeholder:"Email",type:"email",className:"defoult".concat("\n                    ",r.email&&!a.email&&"success","\n                    ").concat(r.email&&a.email&&"error")})}),(0,m.jsxs)("label",{htmlFor:"password",children:[(0,m.jsx)(c.II,{type:s?"text":"password",id:"password",name:"password",placeholder:"Password",className:"defoult".concat("\n                    ",r.password&&!a.password&&"success","\n                    ").concat(r.password&&a.password&&"error")}),a.password&&r.password&&(0,m.jsx)(c.v0,{children:(0,m.jsx)(c.y,{children:(0,m.jsx)(t.Bc,{component:"p",name:"password"})})}),!a.password&&r.password&&(0,m.jsx)(c.v0,{children:(0,m.jsx)(c.y,{children:"Success password"})})]})]}),(0,m.jsx)(c.zx,{type:"submit",children:"Sign Up"})]})}})})}}}]);
//# sourceMappingURL=235.a3565126.chunk.js.map