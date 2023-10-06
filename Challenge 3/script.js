const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

//REMOVE UNNECESSARY WHITE SPACE
const leoLastname = leoSurname.trimEnd(); 
const sarahFirstname = sarahName.trimEnd();

//CONVERT TO NUMBER AND POSTIVE NUMBER
const owedByLeo = Math.abs(parseInt(leoBalance));     //integer
const owedBySarah = Math.abs(parseFloat(sarahBalance));    //floating point number

//CALCULATE THE TOTAL TO DISPLAUY
const leoTotal = `${leoName} ${leoLastname} (Owed: R ${owedByLeo.toFixed(2)})`;
const sarahTotal = `${sarahFirstname} ${sarahSurname} (Owed: R ${owedBySarah.toFixed(2)})`;
const finalTotal = owedByLeo + owedBySarah; //stores total 
const finalTotalFormatted = finalTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); //adds decimal and adds thousands seperator
const finalDisplay = `Total amount owed: R ${finalTotalFormatted}`;

//FINAL DISPLAY
console.log(`\n${leoTotal}\n${sarahTotal}\n\n\n${divider}\n  ${finalDisplay}  \n${divider} `)




















// problems:
// NEGATIVE NUMBER:
// const negativeNumber = -5;
// const positiveNumber = Math.abs(negativeNumber);
// ----------------------------------------------

// NUMBER IS STRING:
// LEO, no decimal so parseInt
// const str = "12345";
// const parsedInt = parseInt(str);

// SARAH, decimal so parsefloat
// const str = "3.14159";
// const parsedFloat = parseFloat(str);

// 2 VARIABLES NEEDED
// ----------------------------------------------------

//thousands seperator

//------------------------------------------------------
// needs to display in one console :

// Leo Musvaire (Owed: R 9394.00)
// Sarah Kleinhans (Owed: R 4582.20)

// ----------------------------------
//   Total amount owed: R 13 976.20
// ----------------------------------