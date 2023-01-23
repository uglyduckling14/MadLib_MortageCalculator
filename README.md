# Assn2: Mini Web Applications

## Introduction:

I am creating two applications. A MadLib generator and a mortage calculator.

### MadLib Generator:

User gives the program a combination or nouns, verbs, adverbs and adjectives. The generator then places each of those words into a prewritten story.

Requirements:

* Request at least 5 words from user. SFW only. Each word provided must be used at least once.  
* Story can be anything.   
* UI consists of input fields and a button.
* Button displays the story once pressed.
* If user fails to provide enough words, the PROGRAM CANNOT CRASH!! Simply display an error message to the user telling them to enter the word.
*If user generates a new story then the new story should replace the old
story on the screen.  

### Mortgage Calculator:

User gives program, loan amount, yearly interest rate and the number of years the loan term will be. Displays calculated output.

* Everytime user changes one of the inputs, the output changes regardless of button push.
* Have fields have default values and default calculations if empty.
* Convert years to months.
* PROGRAM SHOULD NOT CRASH if the user fails to input a correct value. Simply display an error message. 
* If value is deleted, use default value for calculation.

CAN'T USE PROMPT, ALERT, OR CONFIRM!!!!

Both applications should be in one HTML file.
Have seperate JS files for each application.

### HTML:
head:  
    body  
        print MadLib Generator  
        create verb box  
        create adjective box  
        create noun box  
        create noun box  
        create adverb box  
        submit button -> print story  
    close body  
    body  
        print Mortgage Calculator  
        create loan amount box  
        create interest rate box  
        create years of loan box  
        submit button -> display calculation  
    close body  
close head  

### MadLib Generator: Pseudocode

const story1 = "A vacation is when you take a trip to some ${adjective1} place with your ${adjective2} family. Usually you go to some place that is near a/an ${noun1} or up on a/an ${noun2}.
Sometimes, if you are lucky you get to go ${verb1} on the beach or see a ${noun3} in a zoo."

const story2 = "When I had no shine, I used ${noun1} for sparkle. When my ${adjective1} home disappeared, I made a home out of ${noun2}. When love was gone, I found love in ${verb1}. When the forest was gone, I made trees out of ${adjective2} ${noun3}.

function words(arrayStr){-> arrayStr 6 values
    const adjective1 = arrayStr.adjective1;
    const adjective2 = arrayStr.adjective2;
    etc.
}
on button click:
print either story1 or story2(use random number generator)

### Mortgage Calculator: Pseudocode

function input(arrayStr){
    const loan = 0;
    const interest = 0;
    const year = 0;
    onclick/box value change:
    check that each value is a valid number
    loan = arrayStr.loan;
    interest = arrayStr.interest;
    year = arrayStr.year;
    print calculations(loan, interest, year);
    
}
function calculations(loan, interest, year){
    const monthly = loan(interest(1+interest)^(year* 12))/((1+interest)^(year* 12)-1);
    return monthly;
}
