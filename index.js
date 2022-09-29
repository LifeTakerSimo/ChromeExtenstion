const inputel = document.getElementById("input-el")
let myLeads = []
const inputbtn = document.getElementById("input-btn")
const ulList =document.getElementById("ulList")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

tabBtn.addEventListener("click",function(){
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})
inputbtn.addEventListener("click",function () {

    myLeads.push(inputel.value) 
    inputel.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    renderLeads(myLeads)
}) 


function renderLeads(myLeads) {
    let listItems = ""
    for(let i=0 ; i < myLeads.length; i++ )
    {
     // Method 1   
     // ulList.innerHTML += "<li>" + myLeads[i] + "</li>"

     // Method 2
     //const li = document.createElement("li")
     //li.textContent = myLeads[i]
     //ulList.append(li)

     //Method 3 
     //   listItems += "<li> <a target='_blank' href = '" + myLeads[i] + "'> " + myLeads[i] + "</a> </li>"
        listItems += ` 
        <li> 
            <a target='_blank' href = '${myLeads[i]}'> ${myLeads[i]}
            </a> 
        </li>`
    }
    ulList.innerHTML = listItems
}