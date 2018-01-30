let header = document.getElementById("page-header");
let sayWhat = document.getElementById("output");
console.log("header",header);

function handleHeaderMouseEvent(event){
    // console.log(event);
    sayWhat.innerHTML = "The force is strong with this one";


}


function handleHeaderMouseOut(event){
    // console.log("event",event.target, event.currentTarget);
    sayWhat.innerHTML = "Remember... the Force will always be with you!"

}

let listItems = document.getElementsByClassName("list-item");
// console.log("listItems", listItems);
for(var i = 0; i<listItems.length;i++){
listItems.item(i).addEventListener("click", handleClick);

}


function handleClick(MouseEvent){
    let elementText = MouseEvent.target.innerHTML;
    sayWhat.innerHTML = "hummmmmmmmmm, " + elementText + " clicked you have";
}

header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mousewheel", handleHeaderMouseOut);
