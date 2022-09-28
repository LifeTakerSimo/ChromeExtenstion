const inputel = document.getElementById("input-el")
let myLeads = ["23,43"]
const inputbtn = document.getElementById("input-btn")
const ulList =document.getElementById("ulList")


input.addEventListener("click",function () {

    myLeads.push(inputel.value)
}) 

for(let i=0;i>myLeads.length;i++ )
{
    ulList.innerHTML += "<li>" + myLeads[i] + "<li>"
}