// // N1

// let array = [5, 25, 89, 120, 36]; 

// array.push ('javascript', ' python');
// array.unshift ('html', 'css')

// console.log(array);

// let newArray = array.slice(1, 8);

// console.log(newArray);

// // N2

// let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

// // console.log(fruits.length);
// fruits.push ('ვაშლი', 'ანანასი'); 
// fruits.unshift ('საზამთრო');
// // console.log(fruits);
// fruits.splice (2, 0, 'მანგო')
// console.log(fruits);

// //თუ არსებულ მასივში შევცვლით
// // fruits.shift();
// // fruits.pop();
// // console.log(fruits);

// //თუ ახალი მასივი გვინდა
// // console.log(fruits.length);

// let newFruits = fruits.slice(1, 6);

// console.log(newFruits);


// // N3

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let mapArray = array.map( (x) => x / 3 );

// console.log(mapArray);



// 4

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let filterArray = array.filter( (x) => typeof x !== "string");

// console.log(filterArray);



// N5

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newLanguages = languages.filter( x => x.length > 3 );

// console.log(newLanguages);

// N6

// let array= ['academy', 'of', 'digital', 'industries']. reduce (function(accumulator, currentValue) {
//     return accumulator.concat(currentValue + ' ')
// },
// ''
// )

// console.log(array);


// N7

// let item = [12, 'google', 32, null, 'yahoo', 25]

// let itemMap = item.map(function(x){

//     if( typeof x == 'number'){
//         return x * x;
//     }else if( typeof x == 'string'){
//         return x.toUpperCase();
//     } 
//     return x;
    


// });

// console.log(itemMap);


// let result = item.map( x => {
//     let i = ( typeof x == 'number') ? x * x :
//             ( typeof x == 'string') ? x.toUpperCase(): x
//             return i;
// })

// console.log(result);




// N7

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin']

// let words2 = words.filter ( x => ( x.includes('m') || x.includes('M')));


// console.log(words2);