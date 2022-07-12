let myDiv = document.querySelectorAll(".menu-item_title");

myDiv.addEventListener("onmouseover", function(){
    myDiv.style.backgound = "red";
});

myDiv.addEventListener("onmouseleave", function(){
    myDiv.style.backgound = "white";
});


document.getElementById("myID").addEventListener("mouseover", function() {
    document.getElementById("myID").style.backgroundColor = "green";
 });
    
 document.getElementById("myID").addEventListener("mouseout", function() {
    document.getElementById("myID").style.backgroundColor = "red";
});

