    // replacing elements
fruitnames = ["orange","mango","apple"];
fruitnames[2] = ("lime");
console.log(fruitnames);
    // adding elements
nameofcities = ["karachi","lahore", "islamabad","multan"];
nameofcities.push("bahawalpur");
console.log(nameofcities);
    //adding element at a certain index
nameOfCountries = ["Pakistan", "US", "Newzealand", "Australia"];
    //adding india after 2 index and deleting 0 names after adding
nameOfCountries.splice(2,0, "India"); 
console.log(nameOfCountries);
//adding england after index 2 but before deleting 1 element that is india
nameOfCountries.splice(2,1,"England");
console.log(nameOfCountries);

let Newarray = nameOfCountries.concat(nameofcities); //    concatinating arrays
console.log(Newarray);
////adding elemrnts into array through concat

let Newarray1 = Newarray.concat("Mirpurkhas","Hyderabad","Sukkur");  
console.log(Newarray1);

// deleting last element 
Newarray1.pop();
console.log(Newarray1);

//deleting first element
Newarray1.shift();
console.log(Newarray1);