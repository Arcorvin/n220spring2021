let dvBox = document.getElementById("evTest");
dvBox.addEventListener("click", colCha);


function colCha(event){


    event.target.style.backgroundColor = "#ffff";
    
    let answer = event.target.getAttribute("data-answer");
    event.target.innerHTML = answer;
    

    let newEl = document.createElement("div");
     newEl.innerHTML = answer;
     newEl.target.innerHTML = answer;
     dvBox.appendChild(newEl);

}