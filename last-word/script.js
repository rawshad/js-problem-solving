
let wordLenth = 0;
const inputText = "hello there!";

for (let i = inputText.length -1; i >= 0; i--) {
    let letter = inputText [i];
    if (letter != " ") {
        wordLenth++  
    } else {
        break;
    }
    console.log(wordLenth);  
}





