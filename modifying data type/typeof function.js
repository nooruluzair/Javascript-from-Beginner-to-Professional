myVariable = 1;
variabletype = typeof myVariable;
console.log(variabletype);

let str = "Noor";
let num = 9;
let YesorNo = false;
let BigNum = 837432498259283n;
let Nullnumber = null;
let NotKnown = undefined;
let NewSymbol = Symbol("Unique Symbol");

console.log(str,typeof str);
console.log(num, typeof num);
console.log(YesorNo, typeof YesorNo);
console.log(BigNum, typeof BigNum);
console.log(Nullnumber, typeof Nullnumber); //type was object
    /*null truly is a primitive and not an object.
    This is a bug that has been there since forever and now cannot be removed due to
    backward compatibility problems. Don't worry about this bug, as it won't affect our
    programs—just be aware of it*/
console.log(NotKnown, typeof NotKnown);
console.log(NewSymbol, typeof NewSymbol);
console.log();
