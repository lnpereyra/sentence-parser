(this["webpackJsonpsentence-parser"]=this["webpackJsonpsentence-parser"]||[]).push([[0],{66:function(e,t,n){},77:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),s=n.n(r),c=(n(66),n(54)),o=n(48),l=n(49),u=n(56),d=n(55),h=n(30),f=n.n(h),j=(n(77),n(78),n(118)),p=n(117),b=n(53),x=n.n(b),O=n(51),g=n.n(O),m=n(52),v=n.n(m),C=n(8),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleFileChange=function(e){var t=e.target.files[0],n=new FileReader;n.readAsText(t),n.onload=function(){a.setState({fileName:t.name,fileContent:n.result}),f.a.fire({icon:"success",title:"Your file is uploaded!"})},n.onerror=function(){console.log("file error",n.error)}},a.state={fileName:"",fileContent:"",stringToCompare:"",sentencesArray:["","","",""]},a}return Object(l.a)(n,[{key:"handleChange",value:function(e,t){var n=this,a=this.state.sentencesArray;a.splice(e,1,t.target.value),this.setState({sentencesArray:Object(c.a)(a)},(function(){console.log(n.state.sentencesArray)}))}},{key:"regExpOperationChange",value:function(e,t){var n=this.state.sentencesArray,a=this.state.fileContent,i=String(n[e]),r=String(a).match(/([a-zA-Z]+)/g);if(console.log(r),null===r)f.a.fire({icon:"warning",title:"Oops...",text:"Please remember to upload file with names first"});else var s=r.every((function(e){return new RegExp(e,"gi").test(i)}));!1===s&&f.a.fire({icon:"error",title:"Oops...",text:"The names are not inside this sentence"}),!0===s&&f.a.fire({icon:"success",title:"Yay!",text:"The names are inside this sentence"})}},{key:"render",value:function(){var e=this;return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)("header",{className:"App-header",children:[Object(C.jsx)("p",{children:"Welcome to Sentence Parser!"}),Object(C.jsx)("p",{children:"Here we can compare the names in a file with four sentences of our choise"}),Object(C.jsxs)("form",{children:[Object(C.jsx)("div",{children:Object(C.jsxs)("label",{for:"upload-file",children:[Object(C.jsx)("input",{style:{display:"none"},variant:"outlined",color:"secondary",id:"upload-file",name:"upload-file",type:"file",onChange:this.handleFileChange}),""===this.state.fileContent&&Object(C.jsx)(j.a,{startIcon:Object(C.jsx)(g.a,{}),color:"default",variant:"contained",component:"span",children:"Upload File"})," ",""!==this.state.fileContent&&Object(C.jsx)(j.a,{startIcon:Object(C.jsx)(v.a,{}),color:"default",variant:"contained",component:"span",children:"File Uploaded"})," "]})}),Object(C.jsx)("br",{})]}),"Please write four sentences to be compared below",this.state.sentencesArray.map((function(t,n){return Object(C.jsxs)("div",{children:[Object(C.jsx)("br",{}),Object(C.jsx)(p.a,{label:"Sentence number "+(n+1)+" here..",variant:"filled",input:"color:white",color:"default",type:"text",onChange:function(t){e.handleChange(n,t)},value:t}),Object(C.jsx)(j.a,{style:{left:"10px",top:"10px"},type:"submit",variant:"contained",color:"default",endIcon:Object(C.jsx)(x.a,{}),onClick:function(t){e.regExpOperationChange(n,t)},children:"Submit"})]},n)})),Object(C.jsx)("p",{children:"Click Submit and see the results!"})]})})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(y,{})}),document.getElementById("root")),w()}},[[85,1,2]]]);
//# sourceMappingURL=main.1a530578.chunk.js.map