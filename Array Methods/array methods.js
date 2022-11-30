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

//deleting through index numbers
// deleting from index 3 and four elements from index 3

Newarray1.splice(3,4);
console.log(Newarray1);

//deleting one array.. one empty array on index 0

delete Newarray1[0];
console.log(Newarray1);

//find an elemetnt in the array
let ArrayofNumbers = [1,2,3,4,5,6,7,8];
console.log(ArrayofNumbers);
let findingarray = ArrayofNumbers.find (
    function(e){
        return e === 6
    }
);

let findingarray1 = ArrayofNumbers.find (e => e === 10);

console.log(findingarray);
console.log(findingarray1);


// findin an element of the particlar index

let IndexofEight = ArrayofNumbers.indexOf(6);
console.log(IndexofEight);

let IndexofNonexistenceNumber = ArrayofNumbers.indexOf(10);
console.log(IndexofNonexistenceNumber);

// if you want to start finding from a particular index

let startingfromIndexThree = ArrayofNumbers.indexOf(3, 7);
console.log(startingfromIndexThree);

// when we have to find the index of array which is present on multiple position in array

let ArrayWithMultipleSameNumber = [4,7,2,5,7,8,,5,7,8,9,6,7];
let findSevenOnLastIndex = ArrayWithMultipleSameNumber.lastIndexOf(7);
console.log(findSevenOnLastIndex);

// sorting the elements in the array

let GirlNames = ["Noor", "Abeeha","Hafsa"];
GirlNames.sort();

