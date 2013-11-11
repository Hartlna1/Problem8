/*
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		Problem 8
Date: 			11/2/2013
Description: 	Find the largest product of five consecutive numbers in a list of 1000 numbers.
*/

//declaration of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var numString = 0;						//entire 1000 number string
var fiveNumString = 0;					//variable to hold each five number string
var numArray = new Array();				//array for the numbers  
var arrayOne = 0;						//first value in array
var arrayTwo = 0;						//second value in array
var arrayThree = 0;						//third value in array
var arrayFour = 0;						//fourth value in array
var arrayFive = 0;						//fifth value in array
var indexLast = 5; 						//last value for the substring; starts at 5 and ends at 1000
var prod = 0;							//product of array values	
var largestProd = 0;					//stores largest product
var largestIndex = 0; 					//stores index of largest product string

//Welcome the user to the program
document.write("Hello!  Welcome to our program to calculate the largest product of 5 consecutive numbers." + BR + BR);

//Getting user input
numString = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

for (var indexFirst = 0; indexFirst < (1000-4); indexFirst++) 	//for loop to determine maximum product
{
	fiveNumString = numString.substr(indexFirst, indexLast);	//create a five number substring on the numString
	numArray = fiveNumString.split("");							//split the string to create an index of the five values
	arrayOne = numArray[0];										//set up variable for 0 index in array
	arrayTwo = numArray[1];										//set up variable for 1 index in array
	arrayThree = numArray[2];									//set up variable for 2 index in array
	arrayFour = numArray[3];									//set up variable for 3 index in array
	arrayFive = numArray[4];									//set up variable for 4 index in array

	
	//if loop to not calculate product if any of the values are zero
	if(arrayOne != 0 && arrayTwo != 0 && arrayThree != 0 && arrayFour != 0 && arrayFive != 0)
	{
		prod = arrayOne*arrayTwo*arrayThree*arrayFour*arrayFive;	//calculate product of values				
		
		if(prod > largestProd)										//checks to see if current value is larger than stored largest product
			{
				largestProd = prod;									//sets product to current value
				largestIndex = indexFirst;							//sets index to the current index
			}
	}
}

//output the largest product value
document.write("The largest product found was " + largestProd + ", which began at index " + largestIndex + LE + BR + BR);

//Thank the user and end the program
document.write("Thank you for calculating the largest product with us!" + BR + BR);