let txtExam = document.getElementById("txtExam");
let dvResult = document.getElementById("dvResult");
let dvResult2 = document.getElementById("dvResult2")
function calcScores() {
    var stringVals = txtExam.value;

    let numArray = stringVals.split(",");

    let numCont = numArray.length

    let sum = 0;
    let avg = 0;
    

    for( let i = 0; i < numArray.length; i++){
        sum += Number(numArray[i]);

        avg = (sum/numCont);
        
    }

    dvResult.innerHTML = "Your sum is " + sum;
    dvResult2.innerHTML = "Your average is " + avg;
}