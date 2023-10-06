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
const owedByLeo = Math.abs(parseInt(leoBalance)).toFixed(2);     //integer
const owedBySarah = Math.abs(parseFloat(sarahBalance)).toFixed(2);    //floating point number

//CALCULATE THE TOTAL TO DISPLAUY
const leoTotal = `${leoName} ${leoLastname} (Owed: R ${owedByLeo})`
const sarahTotal = `${sarahFirstname} ${sarahSurname} (Owed: R ${owedBySarah})`


const owed = parseInt(`R: ${leoBalance} + ${sarahBalance})
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider


console.log(result)


problems:
NEGATIVE NUMBER:
const negativeNumber = -5;
const positiveNumber = Math.abs(negativeNumber);
----------------------------------------------

NUMBER IS STRING:
LEO, no decimal so parseInt
const str = "12345";
const parsedInt = parseInt(str);

SARAH, decimal so parsefloat
const str = "3.14159";
const parsedFloat = parseFloat(str);

2 VARIABLES NEEDED
----------------------------------------------------

needs to display in one console :

Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 13 976.20
----------------------------------