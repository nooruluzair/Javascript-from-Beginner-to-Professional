   let heightInInches = window.prompt("Please Enter Height in Inches >> ");
   let WeightinPounds = window.prompt("Please Enter weight in Pounds >>  ");

   let heightInmeter = (heightInInches * 0.0254);
   let weightInkg = (WeightinPounds *  0.45359237);
   heightInInches = Number(heightInInches);
   WeightinPounds = Number(WeightinPounds);
   heightInmeter = Number(heightInmeter);
   weightInkg = Number(weightInkg);

   alert("The height in Meters is " + heightInmeter + " and Weight in Kg is " + weightInkg + " Please hit enter for BMI Value");

    //Then, calculate and log the BMI: this is equal to weight (in kilos)
    // divided by squared height (in meters). Output the results to the console.
    let BMI = (weightInkg / ((heightInmeter)**2));
    alert("Your BMI is >> " + BMI);


   

   
   





