// Write your solution here!
const pets = ["Milo", "Otis", "Garfield"];
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

function toAppend(){
      append.push("Odie");
      return append;
};

toAppend();

function toPrepend(){
    prepend.unshift("Odie");
    return prepend;
};

toPrepend();


 function toRemoveLast(){
    removeLast.pop();
    return removeLast;
};

toRemoveLast();

 function toRemoveFirst (){
    removeFirst.shift();
    return removeFirst;
};

toRemoveFirst();

