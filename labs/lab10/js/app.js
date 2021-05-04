
let dvBox = document.getElementById("evTest")
dvBox.addEventListener("click", colCha);
let dvBox2 = document.getElementById("evTest2")
let dvBox3 = document.getElementById("evTest3")


dvBox.style.backgroundColor = "#999";
dvBox.style.width = "200px";
dvBox.style.height = "200px";
dvBox.style.float = "left";
dvBox.style.margin = "5px";

dvBox2.style.backgroundColor = "#999";
dvBox2.style.width = "200px";
dvBox2.style.height = "200px";
dvBox2.style.float = "left";
dvBox2.style.margin = "5px";

dvBox3.style.backgroundColor = "#999";
dvBox3.style.width = "200px";
dvBox3.style.height = "200px";
dvBox3.style.float = "left";
dvBox3.style.margin = "5px";



function colCha(event){



    event.target.style.backgroundColor = "#999";
    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
    
    

}