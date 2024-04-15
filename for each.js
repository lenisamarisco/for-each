function doubleValues(arr) {
    return arr.map(value => value * 2);
}
  
  describe("#doubleValues", function() {
    it("doubles values in an array", function() {
      expect(doubleValues([1, 2, 3])).toEqual([2, 4, 6]);
    });
    it("works for negative numbers", function() {
      expect(doubleValues([1, -2, -3])).toEqual([2, -4, -6]);
    });
});
  

function onlyEvenValues(arr) {
    return arr.filter(value => value % 2 === 0);
}
  
function showFirstAndLast(arr) {
    return arr.map(str => str[0] + str[str.length - 1]);
}
  
  // Test cases
  console.log(showFirstAndLast(['colt', 'matt', 'tim', 'test'])); // ["ct", "mt", "tm", "tt"]
  console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']
  

function addKeyAndValue(arr, key, value) {
    return arr.map(obj => ({ ...obj, [key]: value }));
}
  
  console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
  
function vowelCount(str) {
    const vowels = 'aeiou';
    const count = {};
    
    // Convert the string to lowercase to make the function case-insensitive
    str = str.toLowerCase();
    
    // Loop through each character in the string
    for (let char of str) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        // If the vowel already exists in the count object, increment its value by 1
        // Otherwise, initialize the vowel count to 1
        count[char] = (count[char] || 0) + 1;
        }
    }
    return count;
}
  
  // Test cases
  console.log(vowelCount('Elie')); // {e:2,i:1}
  console.log(vowelCount('Tim')); // {i:1}
  console.log(vowelCount('Matt')); // {a:1}
  console.log(vowelCount('hmmm')); // {}
  console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1}
  
function doubleValuesWithMap(arr) {
    return arr.map(value => value * 2);
}
  
  // Test cases
  console.log(doubleValuesWithMap([1, 2, 3])); // [2, 4, 6]
  console.log(doubleValuesWithMap([1, -2, -3])); // [2, -4, -6]
  
function valTimesIndex(arr) {
    return arr.map((value, index) => value * index);
}  
  // Test cases
  console.log(valTimesIndex([1, 2, 3]));    // [0, 2, 6]
  console.log(valTimesIndex([1, -2, -3]));  // [0, -2, -6]
  
function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
}
  // Test case
  console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')); // ['Elie', 'Tim', 'Matt', 'Colt']

function extractFullName(arr) {
    return arr.map(obj => obj.first + ' ' + obj.last);
}
  
  // Test case
  console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));

function filterByValue(arr, key) {
    return arr.filter(obj => obj.hasOwnProperty(key));
}
  // Test case
  console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));
  
function find(arr, searchValue) {
    return arr.find(item => item === searchValue);
}
  
  // Test cases
  console.log(find([1,2,3,4,5], 3));  // 3
  console.log(find([1,2,3,4,5], 10)); // undefined

function findInObj(arr, key, searchValue) {
    return arr.find(obj => obj[key] === searchValue);
}
  
  // Test case
  console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner', true));

  function removeVowels(str) {
    // Regular expression to match vowels (case-insensitive)
    const vowelRegex = /[aeiou]/gi;
    
    // Replace vowels with an empty string
    return str.replace(vowelRegex, '');
  }
  
  // Test cases
  console.log(removeVowels('Hello')); // 'Hll'
  console.log(removeVowels('This is a test')); // 'Ths s  tst'
  
  
function doubleOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).map(num => num * 2);
}
  
  // Test cases
  console.log(doubleOddNumbers([1,2,3,4,5])); // [2,6,10]
  console.log(doubleOddNumbers([4,4,4,4,4])); // []
  