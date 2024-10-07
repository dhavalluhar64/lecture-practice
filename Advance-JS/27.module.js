
// second import file 

// (as) keyword change variable name and function name and etc..


 import { name,person} from "./moduleEx/user1.js"; // first called singel

// import { name, person, Widthdraw as wd } from "./moduleEx/user1.js"; // variable and function name changed as keyword etc..

//import *  as  usr from "./moduleEx/user1.js"; // export value all select direct Ex:- user.code()

console.log(name);

person();

//wd();

// console.log(usr.name);

// usr.Widthdraw();

// usr.default() // deafult function 




// second file


//import {Widthdraw, deposite } from "./moduleEx/AccountDetails.js";

import { default as dhaval, Widthdraw, deposite } from "./moduleEx/AccountDetails.js"; // defualt function apply (default as name)


Widthdraw();

deposite();

dhaval();
