let dvBox = document.getElementById("dvBox")

let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   function bo(){
       for( var i =0; i < objects.length; i++){
           let newEl = document.createElement("div");
           newEl.innerHTML = " color " + objects[i].color + ": height " + objects[i].height + ": width " +  objects[i].width;
           dvBox.appendChild(newEl);
       }
   }