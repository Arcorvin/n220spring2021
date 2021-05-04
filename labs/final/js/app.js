
let dvBox = document.getElementById("evTest")
dvBox.addEventListener("click", colCha);
let dvBox2 = document.getElementById("evTest2")
let dvBox3 = document.getElementById("evTest3")
let dvBox4 = document.getElementById("evTest4")
let dvBox5 = document.getElementById("evTest5")
let dvBox6 = document.getElementById("evTest6")
let dvBox7 = document.getElementById("evTest7")
let dvBox8 = document.getElementById("evTest8")
let dvBox9 = document.getElementById("evTest9")


let dvBox10 = document.getElementById("evTest10")
let dvBox11 = document.getElementById("evTest11")
let dvBox12 = document.getElementById("evTest12")
let dvBox13 = document.getElementById("evTest13")



/*the divs for where the X AND O'S WOULD GO AND OR COLOR CHANGING TIC TAC TOE*/
dvBox.style.backgroundColor = "#999";
dvBox.style.width = "200px";
dvBox.style.height = "200px";
dvBox.style.float = "left";
dvBox.style.margin = "10px";

dvBox2.style.backgroundColor = "#999";
dvBox2.style.width = "200px";
dvBox2.style.height = "200px";
dvBox2.style.float = "left";
dvBox2.style.margin = "10px";

dvBox3.style.backgroundColor = "#999";
dvBox3.style.width = "200px";
dvBox3.style.height = "200px";
dvBox3.style.float = "left";
dvBox3.style.margin = "10px";

dvBox4.style.backgroundColor = "#999";
dvBox4.style.width = "200px";
dvBox4.style.height = "200px";
dvBox4.style.float = "left";
dvBox4.style.marginTop = "230px";
dvBox4.style.marginLeft = "-650px";

dvBox5.style.backgroundColor = "#999";
dvBox5.style.width = "200px";
dvBox5.style.height = "200px";
dvBox5.style.float = "left";
dvBox5.style.marginTop = "230px";
dvBox5.style.marginLeft = "-430px";

dvBox6.style.backgroundColor = "#999";
dvBox6.style.width = "200px";
dvBox6.style.height = "200px";
dvBox6.style.float = "left";
dvBox6.style.marginTop = "230px";
dvBox6.style.marginLeft = "-210px";

dvBox7.style.backgroundColor = "#999";
dvBox7.style.width = "200px";
dvBox7.style.height = "200px";
dvBox7.style.float = "left";
dvBox7.style.marginTop = "450px";
dvBox7.style.marginLeft = "-650px";

dvBox8.style.backgroundColor = "#999";
dvBox8.style.width = "200px";
dvBox8.style.height = "200px";
dvBox8.style.float = "left";
dvBox8.style.marginTop = "450px";
dvBox8.style.marginLeft = "-430px";

dvBox9.style.backgroundColor = "#999";
dvBox9.style.width = "200px";
dvBox9.style.height = "200px";
dvBox9.style.float = "left";
dvBox9.style.marginTop = "450px";
dvBox9.style.marginLeft = "-210px";

/*This is for the black bars to split the TIC-TAC-TOE board*/
dvBox10.style.backgroundColor = "#000";
dvBox10.style.width = "20px";
dvBox10.style.height = "640px";
dvBox10.style.float = "left";
dvBox10.style.margin = "210px"
dvBox10.style.marginTop = "-210px";

dvBox11.style.backgroundColor = "#000";
dvBox11.style.width = "20px";
dvBox11.style.height = "640px";
dvBox11.style.float = "left";
dvBox11.style.margin = "430px"
dvBox11.style.marginTop = "-850px";

dvBox12.style.backgroundColor = "#000";
dvBox12.style.width = "640px";
dvBox12.style.height = "20px";
dvBox12.style.float = "left";
dvBox12.style.margin = "10px"
dvBox12.style.marginTop = "-870px";

dvBox13.style.backgroundColor = "#000";
dvBox13.style.width = "640px";
dvBox13.style.height = "20px";
dvBox13.style.float = "left";
dvBox13.style.margin = "10px"
dvBox13.style.marginTop = "-650px";



function colCha(event){
let sym = ["#000", "#ffffff"]
for(i = 0; i <= sym.length; i++){

    event.target.style.backgroundColor = "#999";
    let response = event.target.getAttribute("sym");
    event.target.backgroundColor = response;
    
}



    /*let newEl = document.createElement("div");
    newEl.innerHTML = String(sym);
    dvBox.appendChild(newEl);*/
    
    

}