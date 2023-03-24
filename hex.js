var counts = 0;
var colors = 0;
var point = 0;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.getElementById(".color");

        btn.addEventListener("click", function(e) {

            let hexColor = "#";

           for(let i = 0; i < 8; i++) {
                hexColor += hex[getRandomNumber()];
            }
                
            document.body.style.backgroundColor = hexColor;
             var widthCount = 1; 
             var numbCount = 1;
            if (point == 0){
                point = 1;
                var elem = document.getElementById("myBar");
                var width = widthCount;
                var id = setInterval(frame, 10);
                function frame() {
                    numbCount += 10;
                    switch(width){
                        case 10: 
                        console.log(10);
                        document.body.style.backgroundColor = "#ff22ge";
                        
                    }
                    console.log(width, widthCount, numbCount);
                    if (width == (10 * numbCount)) {
                        console.log(width, widthCount, numbCount);
                        widthCount += 10;
                    
                            clearInterval(id);
                            point = 0;

                    }else if (width >= 100) {
                        clearInterval(frame);
                        point = 0;
                        widthCount = 0;
                        numbCount = 1;
                        hexColor++;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width * 1 + '%';
                    }
                }
    
            }
            
       })

       

       //            if(style.contains("increase")){
 //               counts++ ;
 //               if (counts > 100) {
  //                  counts = 0;
  //              } else {
  //                  counts = 0;
 //               }
 //           }
   //         if(counts > 0){
  //              value.style.color = brown;
  //          }
  //          if (count === 0) {
   //             value.style.color = "#222";
    //        }
   //         value.textContent = counts;

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}