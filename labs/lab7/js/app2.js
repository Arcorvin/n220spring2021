let txtTipBill = document.getElementById("txtTipBill");

/*takes the input and outputs the tip and total*/
function Amount(){
/*takes the input and % the amount*/
    let Tip = Math.floor(txtTipBill.value*.20)

    /*takes the input and makes it a number and takes the tip and make it a number an adds them together*/
    let Bill = Math.floor(Number(txtTipBill.value) + Number(Tip));
    
    
    console.log("Tip cost is" + " " +Tip);
    
    console.log("Bill total is" + " " + Bill)
}