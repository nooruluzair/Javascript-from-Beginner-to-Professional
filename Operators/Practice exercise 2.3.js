let p = window.prompt("value of Hypotenuse >>");
let b = window.prompt("Value of Base >> ");
p = Number(p);
b = Number(b);
let hyp = ((p*p) + (b*b))**0.5;
alert(hyp);

//prompt doesnt work in node, thats why using html. 

