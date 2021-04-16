let txtExam = document.getElementById("txtExam");
let dvResult = document.getElementById("dvResult");

function wordFind(){
    var stringVals = txtExam.value;

    let numArray = stringVals.split(" ");
    
   
    
    let lookFor = "clear";
    let lookFor2 = "water";
    let lookFor3 = "tires";

     cont = 0;

    for( let i = 0; i < numArray.length; i++){
        if((numArray[i] == lookFor) || (numArray[i] == lookFor2) || (numArray[i] == lookFor3)){
            cont++;
        }
        
    }

    dvResult.innerHTML = "There are  " + cont + " bad words";
}