import "bootstrap";
// import chunk from './app/lodash/Array-chunk';
// import compact from './app/lodash/Array-compact';
// import concat from './app/lodash/Array-concat';
// import difference from "./app/lodash/Array-difference";
// import differenceBy from "./app/lodash/Array-differenceBy";
// import differenceWith from "./app/lodash/Array-differenceWith";
// import dropRight from "./app/lodash/Array-dropRight";
// import drop from "./app/lodash/Array-drop";
import isObject from "./app/lodash/isObject";
// import fill from "./app/lodash/Array-fill";
// import findIndex from "./app/lodash/Array-findIndex";
// import findLastIndex from "./app/lodash/Array-findLastIndex";
// import flattenDepth from "./app/lodash/Array-flattenDepth";
// import fromPairs from './app/lodash/Array-fromPairs';
// import indexOf from './app/lodash/Array-indexOf';
// import arraysEqual from './app/lodash/arraysEqual';
// import Equals from './app/lodash/Equals';
// import indexOf from './app/lodash/Array-indexOf';
// import intersection from './app/lodash/Array-intersection';
// import intersectionMulty from './app/lodash/Array-intersectionMulty';
// import intersectionMultyBy from './app/lodash/Array-intersectionMultyBy';
// import arrayToString from "./app/lodash/arrayToString";
import toStr from "./app/lodash/toStr";
const _ = require('lodash');

let array = [1.1,null,2,false,[3,[4,5,6,[7,8,[9]]]],undefined,4.5,'',5,NaN,6.2,7];
let array2 = [['str', "value"],["second",23],{obj:"obj","rat":[{rat:1, cat: [{cat: "cat"}]}]},3,undefined,4,'str',5,NaN,6.5,7,["name",33]];
let array3 = [['str', "value"],["second",23],{obj:"obj","rat":[{rat:1, cat: [{cat: "cat1"}]}]},3,undefined,4,'str',5,NaN,6.5,7,["name",33]];
let secondaryButton = document.getElementById("executeLodashFunc");
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(chunk(array,3)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(compact(array)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(concat(array,12,"str",{obj: "object"},["array"])));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(difference(array2,...array3)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(differenceBy(array2,array3,toString)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(differenceWith(array2,array3,Equals)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => differenceBy(array,array2,Math.floor));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => differenceWith(array,array2,_.isEqual));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(drop(array,4)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(dropRight(array,4)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(isObject(array)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => fill(array,13,2,5));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(findIndex(array2,isObject)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(findLastIndex(array2,isObject)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => flattenDepth(array,3));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => fromPairs(array2));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(indexOf(array2,undefined,3)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(Equals(array2,array3)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(indexOf(array3,{obj:"obj","rat":[{rat:1, cat: [{cat: "cat1"}]}]})));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(intersection(array2,array)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(intersectionMulty([array2,array,array3])));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(intersectionMultyBy([array2,array,array3],toString)));
// if(secondaryButton !== null) secondaryButton.addEventListener("click", () => console.log(arrayToString(array2)));
if(secondaryButton !== null) secondaryButton.addEventListener("click", () => {for(let i of array.keys()) console.log(toStr(array2[i as any]))});
