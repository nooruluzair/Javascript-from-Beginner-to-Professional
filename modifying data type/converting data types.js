let num1 = 3;
let num2 = "3"; //java changing string to number and giving output 9
console.log(num1 * num2); 

let num3 = 3;
let num4 = "3"; //java concatenate and giving output 33, it is changing number into string
console.log(num3 + num4); 

let numtoStr = 5;
numtoStr = String(numtoStr);
console.log(numtoStr, typeof(numtoStr));

let strtoBool = "Noor";
strtoBool = Boolean(strtoBool);
console.log(strtoBool, typeof(strtoBool));

let StrtoNum3 = "";
StrtoNum3 = Number(StrtoNum3);
console.log(StrtoNum3, typeof(StrtoNum3));

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let num5 = 3;
let num6 ="4";
console.log(num5 + Number(num6));
