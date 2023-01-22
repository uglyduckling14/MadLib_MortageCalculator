#Assn2: Mini Web Applications

##Introduction:

I am creating two applications. A MadLib generator and a mortage calculator.

###MadLib Generator:

User gives the program a combination or nouns, verbs, adverbs and adjectives. The generator then places each of those words into a prewritten story.

Requirements:

* Request at least 5 words from user. SFW only. Each word provided must be used at least once.  
* Story can be anything.   
* UI consists of input fields and a button.
* Button displays the story once pressed.
* If user fails to provide enough words, the PROGRAM CANNOT CRASH!! Simply display an error message to the user telling them to enter the word.
*If user generates a new story then the new story should replace the old
story on the screen.  

###Mortgage Calculator:
User gives program, loan amount, yearly interest rate and the number of years the loan term will be. Displays calculated output.

* Everytime user changes one of the inputs, the output changes regardless of button push.
* Have fields have default values and default calculations if empty.
* Convert years to months.
* PROGRAM SHOULD NOT CRASH if the user fails to input a correct value. Simply display an error message. 
* If value is deleted, use default value for calculation.

CAN'T USE PROMPT, ALERT, OR CONFIRM!!!!

Both applications should be in one HTML file.
Have seperate JS files for each application.