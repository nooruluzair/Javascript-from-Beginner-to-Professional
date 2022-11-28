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
nameOfCountries.splice(2,1,"England");//adding england after index 2 but before deleting 1 element that is india
console.log(nameOfCountries);

let Newarray = nameOfCountries.concat(nameofcities); //    concatinating arrays
console.log(Newarray);
let Newarray1 = Newarray.concat("Mirpurkhas","Hyderabad","Sukkur"); //adding elemrnts into array through concat 
console.log(Newarray1);