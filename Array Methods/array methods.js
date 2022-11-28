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
nameOfCountries.splice(2,0, "India"); //adding india after 2 index and deleting 0 names after adding
console.log(nameOfCountries);
nameOfCountries.splice(2,1,"England");//adding england after index 2 but before deleting 1 element that is india
console.log(nameOfCountries);