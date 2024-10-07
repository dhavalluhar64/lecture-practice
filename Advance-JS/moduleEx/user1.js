
// first export file


// default function

export default function () {

    console.log(`default function called`);
}


let name = "Dhaval";
let age = 21;


function person() {

    console.log("coding....")
    javaScript(); // second file to access first file call
}

// function Widthdraw() {

//     console.log("user widthdraw function called");

// };

function handling() {

    console.log("Testing Your code")
    
}

export { name, person };


// second file passout to first file 

import { javaScript } from "./AccountDetails.js";

