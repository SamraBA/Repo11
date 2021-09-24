   
// Only change code below this line
function myMutation(arr){

    var checkedString = arr[0].toLowerCase();
    var letters = arr[1].toLowerCase();

    for(var i = 0; i < letters.length; i++){
        if(checkedString.includes(letters[i]) == false){
            return false;
        }
    }
    return true;
}


// Only change code above this line

console.log(myMutation(["hello", "hey"]));   // Change this line
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;