let nothingIsAssignedtoThisVariable;
console.log(nothingIsAssignedtoThisVariable);


let notRecommended = undefined;
let notDefined;

console.log("are they equal?", notRecommended === notDefined); 

let recommended = null;
console.log("are they equal?",recommended === notDefined);
