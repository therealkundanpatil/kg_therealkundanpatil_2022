/**
 * This program takes an array input of integers and converts it into the phonetic equivalent
 * @author Kundan Patil
 * @email kp4677@rit.edu
 *
 */

// Declare and initalize array to store the output
var answer = [];
// Read all the available data from command line
var data = process.argv;

/**
 * @description Function to log the processed data output to the console
 * @argument inputArray Processed data to log to console
 */
printOutput = (inputArray) => {
    // Print the output on console
    var outputString = "";
    for (var index = 0; index < inputArray.length; index++) {
        outputString += inputArray[index];
        if (index <= inputArray.length - 2) {
            outputString += ",";
        }
    }
    console.log(outputString);
}


/**
 * @description Entry point for processing input
 * @argument data User input from command line
 */
processInput = (data) => {
    // This condition signals no command line arguments 
    if (data.length == 2) {
        console.log(answer);
    }
    // If command line arguments given, program enters here
    else {
        //HashMap for mapping number to word
        var mapNumberToWord = new Map([
            ["0", "Zero"],
            ["1", "One"],
            ["2", "Two"],
            ["3", "Three"],
            ["4", "Four"],
            ["5", "Five"],
            ["6", "Six"],
            ["7", "Seven"],
            ["8", "Eight"],
            ["9", "Nine"],
        ]);


        // Loop over the data
        var index;
        for (index = 2; index < data.length; index++) {
            // Checks for two digit and higher number strings
            if (data[index].length > 1) {
                var elements = data[index].split("");
                var combinedWords = "";
                var innerIterator;
                for (innerIterator = 0; innerIterator < elements.length; innerIterator++) {
                    combinedWords += mapNumberToWord.get(elements[innerIterator]);
                }
                answer.push(combinedWords);
            }
            // Checks for single digit number string
            else {
                answer.push(mapNumberToWord.get(data[index]));
            }

        }
        printOutput(answer);

    }
}

processInput(data);
