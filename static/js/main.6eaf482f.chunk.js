(this["webpackJsonpreact-jwt-example"]=this["webpackJsonpreact-jwt-example"]||[]).push([[0],{1:function(e,t,a){},10:function(e,t,a){"use strict";a.r(t);a(1);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),c=a(4);function i(e){try{if(3!==e.split(".").length||"string"!==typeof e)return null;var t=e.split(".")[1];return JSON.parse(atob(t))}catch(a){return null}}function u(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],r=Object(n.useState)(null),s=r[0],c=r[1];return Object(n.useEffect)((function(){c(i(e)),l(function(e){var t=i(e),a=!0;if(t&&t.exp){var n=new Date(0);n.setUTCSeconds(t.exp),a=n.valueOf()<(new Date).valueOf()}else a=!0;return a}(e))}),[e]),{isExpired:a,decodedToken:s}}var p=function(){var e=Object(n.useState)("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3VzdGF2byIsImlhdCI6MTU5NjQwODI1OSwiZXhwIjo0NzUyMTY4MjU5fQ.ThwsJW2KfMTl0y24tTGWKHqvYWRp1iyo_Kh2KWTHuXc"),t=Object(c.a)(e,2),a=t[0],r=t[1],s=u(a),i=s.decodedToken,p=s.isExpired;return l.a.createElement("div",{className:"example"},l.a.createElement("div",null,l.a.createElement("span",{style:{display:"flex"}},l.a.createElement("p",{className:"example__title"},"Encoded"),l.a.createElement("p",{className:"example__subtitle"},"Paste a JWT here")),l.a.createElement("textarea",{className:"example__token",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("span",{style:{display:"flex"}},l.a.createElement("p",{className:"example__title"},"Decoded"),p?l.a.createElement("p",{className:"example__subtitle example--token-expired"},"Your token is expired"):l.a.createElement("p",{className:"example__subtitle example--token-not-expired"},"Your token is not expired")),l.a.createElement("textarea",{className:"example__result",value:JSON.stringify(i)})))};s.a.render(l.a.createElement(p,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.6eaf482f.chunk.js.map