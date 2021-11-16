

// First, tell us your name
let yourName = "Amanda Woods"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Gingerbread
let cc = 0;     // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle

let total = 0;
let totalText = document.querySelector('#qty-total');

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`;

let gbText = document.querySelector('#qty-gb');

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb ++;
    gbText.innerHTML = `${gb}`;
    total ++;
    totalText.innerHTML = `${total}`;
});
document.getElementById('minus-gb').addEventListener('click', function(){
   if(gb > 0){
       gb --;
       gbText.innerHTML = `${gb}`;
       total --;
       totalText.innerHTML = `${total}`;
   }
});

// TODO: Hook up event listeners for the rest of the buttons
let ccText = document.querySelector('#qty-cc');
document.getElementById('add-cc').addEventListener('click', function(){
  cc ++;
  ccText.innerHTML = `${cc}`;
  total ++;
  totalText.innerHTML = `${total}`;
});
document.getElementById('minus-cc').addEventListener('click', function(){
  if(cc > 0){
      cc --;
      ccText.innerHTML = `${cc}`;
      total --;
      totalText.innerHTML = `${total}`;
  }
});

let sugarText = document.querySelector('#qty-sugar');
document.getElementById('add-sugar').addEventListener('click', function(){
  sugar ++;
  sugarText.innerHTML = `${sugar}`;
  total ++;
  totalText.innerHTML = `${total}`;
});
document.getElementById('minus-sugar').addEventListener('click', function(){
  if(sugar > 0){
      sugar --;
      sugarText.innerHTML = `${sugar}`;
      total --;
      totalText.innerHTML = `${total}`;
  }
});

