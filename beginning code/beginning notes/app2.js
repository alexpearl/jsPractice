//data structures arrays and objects

// let shoppingList= ['chedder cheese','2% milk'];
// shoppingList[1]='whole milk';
// shoppingList[2]='ice cream'; //adding

// shoppingList[shoppingList.length]='tomatoes'; //should always add to the end

// //push, pop, shift, unshift
// let topSongs=['first time ever i saw your face', 'god only knows', 'a day in the life', 'life on mars'];

// topSongs.push('fortunate son'); //add to the end

// const nextSong= topSongs.pop();  //takes from the end

// //shift-remove from start      unshift-add to start

// let dishesToDo= ['big platter']

// dishesToDo.unshift('large plate');
// dishesToDo.unshift('small plate');
// dishesToDo.unshift('mug');

// dishesToDo.shift(); //takes away mug from start

// //concat merges arrays
// let fruits=['apple', 'banana'];
// let veggies=['carrots', 'brussel sprouts'];
// let meats=['steak', 'chicken'];

// let combo= fruits.concat(veggies); //first array goes first then second
// console.log(combo);

// let allFood=fruits.concat(veggies, meats);
// console.log(allFood);

// //includes and indexOf
// let ingrediants=[
//     'water',
//     'shrimp',
//     'nuts',
//     'peacan'
// ];
// ingrediants.includes('fish'); //includes checks if array includes this ex comes out false

// if (ingrediants.includes('peacan')) {
//     console.log(`I am gluten free, I can't`);
// }

// console.log(ingrediants.indexOf('water')); //tells where item is in array

// //reverse will reverse an array in place/mutates it for good
// let letters=['t','f','w','q'];
// letters.reverse();

// //join will take an array and spits out a string with all the elements in one single string
// letters.join(); //can put in something in () and it will put whatever that is in btwn the elements

// //slice takes a portion of an array
// let animals=['shark','salmon','whale','bear','lizard','turtle'];
// let swimmers=animals.slice(0,3);
// let mammals=animals.slice(2,4);
// let reptiles=animals.slice(4,6);//could also just do (4) and it assumes till the end

// let quadrupeds=animals.slice(-3); //counts back 3 from end

// //animals.slice() with nothing in () makes a copy of the array

// //splice removes, replaces, or adds into an array
// animals.splice(1,0,'octupus'); //(start, delete?, then add)
// animals.splice(3,2);//deletes 2 items from index 3
// animals.splice(1,0,'seal');
// animals.splice(0,2,'orca','otter'); //will delete the first two and then replace

// //sort() sorts the elements of an array in place and returns the sorted array
// let people=['mrs robinson','angie', 'jolene','maggie may', 'roxanne'];
// console.log(people.sort()); //will alphabetically sort

// let nums=[32,10,10000,58,99];
// console.log(nums.sort()); //converts all values to string----not used but we will revisit it

// //const & arrays -refererence

// const myEggs=['brown','brown'];
// myEggs.push('purple');
// myEggs[0]='green';

//nested arrays
const animalPairs = [
  ["doe", "buck"],
  ["ewe", "ram"],
  ["peahen", "peacock"],
];
animalPairs[2][1]; //will give us peacock
animalPairs[1][0] = "stag"; //will change value of ewe to stag if you wanted to update
