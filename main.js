"use strict"
let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");

let content1 = document.getElementById("content-1");
let content2 = document.getElementById("content-2");
let content3 = document.getElementById("content-3");
let content4 = document.getElementById("content-4");

btnOne.addEventListener("click",function(){
content1.style.display="block"
})

btnTwo.addEventListener("click",function(){
    content2.style.display="block"
})

btnThree.addEventListener("click",function(){
    content3.style.display="block"
})

btnFour.addEventListener("click",function(){
    content4.style.display="block"
})
