// Iteration 1: Names and Input

let driverName = "Jonathan"
console.log("The driver's name is ${driverName}");

 let navigatorName = "Gianlucca"
 console.log("The navigator's name is {navigatorName}");


// Iteration 2: Conditionals

if (driverName.length > navigatorName.length) {
    console.log("The driver has the longest name, it has ${driverName.length} characters.")
} else if (navigatorName.length > driverName.length) {
    console.log ('it seems the navigator has the longest name, it has ${navigatorName.length} characters!');
} else {
    console.log ('Wow, you both have equally long names,${driverName.length} characters!')
}


// Iteration 3: Loops

// Iteration 3.1

let driverCapitals = " "

for (let i = 0; i < driverName.length; i++) {

    let upperCaseLetter = driverName[i].toUpperCase()

    // if it is the first letter to be added, then add it without the space
    if (i === 0) {
        driverCapitals = driverCapitals + upperCaseLetter
    } else {
        driverCapitals = driverCapitals + " " + upperCaseLetter
    }

}

console.log("driverCapitals", driverCapitals)

// Iteration 3.2

let reversedName = " "

// a reverse loop:
// starts at the variable length -1 (the last index),
// goes while i is higher or equal to 0
// and decreases the variable i
for (let i = driverName.length - 1; i >=0; i--) {
    reversedName = reversedName + driverName[i]
}
console.log("reversedName", reversedName)

//Iteration 3.3 lexicographic

// first identify the longest word for the loop
let longestWord = " "
if (driverName.length >= navigatorName.length) {
    longestWord = driverName
} else {
    longestWord = navigatorName
}

// the loop runs for every character and compares them

for(let i = 0; i < longestWord.length; i++) {
    if (driverName === navigatorName) {
        // first condition in case they have the same name
        console.log("What? You both have the same name?")
        break;
    } else if (driverName[i] < navigatorName[i] || driverName[i] === undefined ) {
        // third condition will check if the letter of the navigator is lower goes first or doesn't exist.
        console.log('Yo, the navigator ${navigatorName} goes first definitely')
        break;
    }
    // loop will continue running for each character until it found one match, then it breaks the loop.
}

// Bonus 1: Iorem Ipsum

let ipsumStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est at justo tempor mollis. Aliquam consequat lacinia interdum. Fusce sodales dui a elit pulvinar ornare. Integer ullamcorper nunc vel finibus venenatis. Sed lectus velit, lacinia non posuere a, porta fringilla turpis. Cras sagittis erat malesuada risus posuere fringilla. Etiam vulputate dolor metus, in pharetra velit dictum non. Vivamus eu augue nec est tempus viverra. Phasellus eu augue volutpat, fermentum risus et, dapibus purus. Quisque vel augue mauris. Maecenas mattis ipsum sit amet metus dictum, quis pharetra enim cursus. Sed ac ullamcorper turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In consectetur diam ac turpis malesuada rutrum. Sed porta nulla id enim vulputate, eu tristique tortor cursus."

// to count all words

let wordCount = 1;

for (let i = 0; i < ipsumStr.length; i++) {
    // counting the spaces means counting the words!
    if (ipsumStr[i] === " ") {
        wordCount++
    }
}

console.log ("Amount of words : " + wordCount)

// to count only "et" words

let etCount = 0;

for (let i = 0; i < ipsumStr.length; i++) {
    // counts if current letter is "e" and the next letter is "t"
    if (ipsumStr[i] === "e" && ipsumStr[i + 1] === "t") {
        etCount++
    }
}

console.log("Amount of et:" + etCount)

//Bonus 2 : Palindrome

let phraseToCheck = "tacocat"

// first create a clean variable with all special characters removed.
let cleanPhrase = " "
for (let i = 0; i < phraseToCheck.length; i++) {
// only add characters between "A" and "Z"
    if((phraseToCheck[i] >='A' && phraseToCheck[i] <= 'z')) {
        cleanPhrase = cleanPhrase + phraseToCheck[i]
    }
}

console.log("cleanPhrase", cleanPhrase)

// then we reverse the phrases
let reversedPhrase = " "

// to do that, we do a reverse loop and add the characters to a new string
for (let i = cleanPhrase.length -1 ; i >=0; i--) {
    reversedPhrase = reversedPhrase + cleanPhrase[i]
}
console.log("reversedPhrase", reversedPhrase)

// then simply compare the two variables to check for palindrome!
if (cleanPhrase === reversedPhrase) {
    console.log("The phrase is a palindrome!")
} else {
    console.log("The phrase is not a palindrome!")
}