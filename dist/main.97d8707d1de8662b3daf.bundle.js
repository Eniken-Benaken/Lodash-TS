!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}({0:function(e,t,r){},5:function(e,t,r){"use strict";r.r(t);const n=(...e)=>e.every(e=>"number"==typeof e&&!isNaN(e));r(0);const o=new class{constructor(){this.errorBox=document.getElementById("error")}handleAdditionError(e,t){const r=e.reduce((e,r,o)=>n(t[o])?e+"":e+(r+" is not a number. "),"Please enter two valid numbers! ");this.errorBox.classList.remove("invisible"),this.errorBox.innerText=r}hideErrors(){this.errorBox.classList.add("invisible")}},u=new class{constructor(){this.numberOneInput=document.getElementById("numberOne"),this.numberTwoInput=document.getElementById("numberTwo"),this.addValuesButton=document.getElementById("addValues"),this.resultDiv=document.getElementById("result")}getInputs(){return[this.numberOneInput.value,this.numberTwoInput.value]}setResult(e){this.resultDiv.innerText=e}onClick(e){this.addValuesButton.addEventListener("click",e)}};var s,i;i=u,(s=o).hideErrors(),i.onClick(()=>{s.hideErrors();const e=i.getInputs(),t=((...e)=>e.map(e=>parseInt(e)))(...e);if(n(...t)){const[e,r]=t;i.setResult(e+r)}else i.setResult(""),s.handleAdditionError(e,t)})}});