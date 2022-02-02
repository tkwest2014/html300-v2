//This is code for assingment #1

const form = document.querySelector('#animals');

//This code occurs when the user hits submit
form.addEventListener('submit', function(event){
  event.preventDefault();

//This collects info from the submitted form
  const dogs = parseInt(document.querySelector('#animals .dogs').value);
  const cats = parseInt(document.querySelector('#animals .cats').value);
  const rabbits = parseInt(document.querySelector('#animals .rabbits').value);
  const other = parseInt(document.querySelector('#animals .other').value);


//This creates the array based on the info submitted in the form
  let array = [dogs, cats, rabbits, other];


//This function calculates the total number of animals
  let sum=0;
  let sum1 = array.reduce(function(sum, value){
    return sum + value;
   })


//This function logs each value in the array to the console
  array.forEach(function(value){
    console.log(value);
  });

//This function doubles the number of each animal and then logs it to the console in an array
  let array2 = array.map(function(value){
    return value * 2;
  })

  console.log(array2);

//This function logs to the console true if the array has a value over 10 and false if it doesn't
  let over10 = array.some(function(value){
    return value > 10;
  });

  console.log(over10);

//This creates the output for the user
  const output = document.querySelector('#animals .output');
  output.innerHTML = `You have ${dogs} dogs, ${cats} cats, ${rabbits} rabbits, and ${other} other animals!`

  const output1 = document.querySelector('#animals .output1');
  output1.innerHTML = `You have ${sum1} total animals!`
})
