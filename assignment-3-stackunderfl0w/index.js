/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name:Patrick Iacob
 * Email:iacobp@oregonstate.edu
 */

var modal_button=document.getElementById('create-twit-button')

modal_button.onclick = show_modal

var modal_close=document.getElementsByClassName("modal-close-button")
var modal_cancel=document.getElementsByClassName("modal-cancel-button")
var modal_accept=document.getElementsByClassName("modal-accept-button")
var text = document.getElementById("twit-text-input")
var author = document.getElementById("twit-attribution-input")

text.value=""
author.value=""

for(var i = 0; i < modal_close.length; i++)
   modal_close[i].onclick = hide_modal

for(var i = 0; i < modal_cancel.length; i++)
   modal_cancel[i].onclick = hide_modal

for(var i = 0; i < modal_accept.length; i++)
   modal_accept[i].onclick = post

function show_modal() {
    var x=document.getElementsByClassName("hidden")
    for(var i = 0; i < x.length; i++){
       x[i].style.display = "block"
    }
}
function hide_modal(){
    var x=document.getElementsByClassName("hidden")
    for(var i = 0; i < x.length; i++){
       x[i].style.display = "none"
    }
    text.value=""
    author.value=""
}
var twits=Array.from(document.querySelectorAll('.twit'))

function post() {
    //var text = document.getElementById("twit-text-input")
    //var author = document.getElementById("twit-attribution-input")
    if (text.value===""||author.value===""){
        alert("Cannot post, one or more inputs empty")
        return
    }



    var container = document.getElementsByClassName("twit-container")[0]

    var twit = document.createElement("article")
    twit.classList.add("twit")
    container.appendChild(twit)

    var icon = document.createElement("div")
    icon.classList.add("twit-icon")
    twit.appendChild(icon)
    
    var horn = document.createElement("i")
    horn.setAttribute("class","fa fa-bullhorn")
    icon.appendChild(horn)

    var content = document.createElement("div")
    content.classList.add("twit-content")
    twit.appendChild(content)

    var twit_text = document.createElement("p")
    twit_text.appendChild(document.createTextNode(text.value))
    twit_text.classList.add("twit-text")
    
    content.appendChild(twit_text)

    var author_text = document.createElement("p")
    author_text.classList.add("twit-author")
    content.appendChild(author_text)

    var author_link = document.createElement("a")
    author_text.appendChild(author_link)

    author_link.href = "#"
    author_link.appendChild(document.createTextNode(author.value))

    twits.push(twit)

    hide_modal()
    //searchquery()
}
var search=document.getElementById('navbar-search-input')
search.value=""
search.addEventListener("input", searchquery)
var search_button=document.getElementById('navbar-search-button')
search_button.addEventListener("click", searchquery)


function searchquery() {
    var container = document.getElementsByClassName("twit-container")[0]

    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    var search_input = document.getElementById("navbar-search-input")
    const re = new RegExp(search_input.value, "i")

    for (var i = 0; i < twits.length; i++) {
        if( re.test(twits[i].textContent)){
            container.appendChild(twits[i]);
        }

    }
}