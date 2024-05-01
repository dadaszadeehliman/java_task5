const open=document.querySelector(".open")
const modal=document.querySelector(".modal")
const bagla=document.querySelector(".x")
const close=document.querySelector(".close")
const body=document.querySelector("body")

open.addEventListener("click", function(){
    modal.style.display="block"
    body.style.backgroundColor="#4e4e4bf5"

})
bagla.addEventListener("click", function(){
    modal.style.display="none"
    body.style.backgroundColor=""
})
close.addEventListener("click", function(){
    modal.style.display="none"
    body.style.backgroundColor=""
})