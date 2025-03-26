// get vaules from user (fizz and Buzz values)

function getValues(){
    //get values from the DOM

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

// parse to integers
fizzValue = parseInt(fizzValue);
buzzValue = parseInt(buzzValue);

// Validate input
if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
       
   // call fizzBuzz function


let fbArray  = fizzBuzz(fizzValue,buzzValue);
// display values to screen
displayData(fbArray);
    }else{
        alert("you must enter an integer")
    }
}
// do fizz buzz
function fizzBuzz(fizzValue, buzzValue)
{
// initilaze a return array
let returnArray = [];
// make loop from 1 to 100

for (let i = 1; i <= 100; i++) {
if (i % fizzValue == 0 && i % buzzValue == 0){

returnArray.push(`FizzBuzz`);
}else if (i % fizzValue == 0) {
    returnArray.push(`Fizz`);

}else if (i % buzzValue == 0 ){
    returnArray.push(`Buzz`);
}else {
    returnArray.push(i);
  
  
}

}

return returnArray;



}
function displayData(fbArray){
    
// get the table body element from the page
//I AM CUTTING THIS OUT FOR NOW   **************************
let tableBody =document.getElementById("results");
// get the template row
let templateRow = document.getElementById("fbTemplate");
//I AM CUTTING THIS OUT FOR NOW   **************************
//document.getElementById("results").innerHTML=(fbArray[29]); // GOOD



for (let x in fbArray){

    let girlDiv = document.getElementById("results");

girlDiv.innerHTML+="<h6>"+ fbArray[x] + "<h6>";

}





for (let index = 0; index < fbArray.length; index += 5) {

    let tablerow = document.importNode(templateRow.contentEditable, true)
    // grab the td andput it into an array
    let rowCols = tablerow.querySelectorAll("td");

    rowCols[0].textContent = fbArray[index];
    rowCols[1].textContent = fbArray[index+1];
    rowCols[2].textContent = fbArray[index+2];
    rowCols[3].textContent = fbArray[index+3];
    rowCols[4].textContent = fbArray[index+4];
    
    tableBody.appendChild(tablerow);
   

}

}



