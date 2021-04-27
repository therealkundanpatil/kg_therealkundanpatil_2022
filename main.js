// Variable to store the output
var answer = [];
// Read all the available data from command line
var data = process.argv;

printOutput = (inputArray) => {
    // Print the output on console
    var outputString = "";
    for(var i =0;i<inputArray.length;i++){
        outputString+= inputArray[i];
        if(i <= inputArray.length - 2){
            outputString += ",";
        }
    }
    console.log(outputString);
  }


processInput = (data) => {
    // This condition signals no command line arguments 
    if (data.length == 2){
        console.log(answer);
    }
    // If command line arguments given, program enters here
    else{
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
        var i; 
        for (i = 2; i < data.length; i++) {
        // Checks for two digit and higher number strings
        if (data[i].length > 1){
            var elements = data[i].split("");
            var combinedWords = "";
            var j;
            for ( j = 0; j < elements.length; j++ ){
            combinedWords += mapNumberToWord.get(elements[j]);
            }
            answer.push(combinedWords);    
        }
        // Checks for single digit number string
        else{
            answer.push(mapNumberToWord.get(data[i]));
        }
        
    
        }
        printOutput(answer);
   
    }
}

processInput(data);
