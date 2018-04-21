import mod from './module'

var abc;

const arr = mod.arr;
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
