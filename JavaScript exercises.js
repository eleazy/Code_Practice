
/* let isPalindrome = (x) => {
  let Palin = false;
  let xIn
  for (let i = x.length - 1; i >= 0; i--) {
    xIn += x[i];
  }
  if (xIn == x) {
    Palin = true;
  }
  //console.log(xIn)
  return Palin;
};
console.log(isPalindrome('010')); */

// LEETCODE LENGTH OF LAST WORD OS THE STRING EXERCISE
/* let lengthOfLastWord = (phrase) =>{
   let wordLength;
   let arrray;
   let index = 2
   arrray = phrase.split(" ");

   lastWord = arrray[arrray.length - 1]
   while (lastWord.length == 0){
      lastWord = arrray[arrray.length - index]
      index++
      console.log(lastWord)
      console.log(index)
   }
   wordLength =  lastWord.length

return wordLength;
}
console.log(lengthOfLastWord("One's mind can do a lot of self damage  ")) */

// LEETCODE ROMAN NUMBER STRING TO INT EXERCISE
/* function romanToInt(s) {
   let sF = s.toUpperCase();
   const conversion = {
     "I": 1,
     "V": 5,
     "X": 10,
     "L": 50,
     "C": 100,
     "D": 500,
     "M": 1000
   };
   let result = 0;
   for (let i = 0; i < sF.length; i++) {
     if (conversion[sF[i]] < conversion[sF[i+1]]) {
       result -= conversion[sF[i]];
     } else {
       result += conversion[sF[i]];
     }
   }
   return result;
 }
 console.log(romanToInt("XxVI")) */

/*  let twoSum = (nums, target) =>{
   let result = [];

   for (let i = 0; i < nums.length-2; i++) {
      for (let j = 0; j < nums.length-1; j++) {
         if (nums[i]+nums[j]==target) {
            result[0] = i;
            result[1] = j;
         }

      }
   }

   console.log(result)

   return result;
 };
 twoSum([1,2,3,4,5,6],9) */

//REVERSE STRING EXERCISE
/*  function solution(str){
   let rvs ="";
   for (let i=str.length; i>=0; i--){
     rvs += str[i];
   }
   console.log(rvs)
 }
 solution("unlock"); */

/*  function solutiion(str){
   let rvs;
   rvs = str.split("");
   rvs.reverse();
   let final = rvs.join("");
   console.log(final)
   return final;
 }
 solutiion("unlock"); */

//PERSISTENT BUGGER EXERCISE. HOW MANY MULTIPLICATIONS BEFORE SINGLE DIGIT NUMBER IS LEFT
/*  function persistence(num) {
  let mTimes = 0;
  let numArray = [];
  let numMul;

  if (num <=9) {
    return mTimes;
  }
    numArray = Array.from(String(num), Number);
    console.log(numArray);
    numMul = numArray[0];

    for (let i = 0; i <= numArray.length-2; i++) {
      numMul = numMul * numArray[i+1];
    }
    console.log(numMul);
    mTimes ++;
    if (numMul ==0) {
      return mTimes;
    }
  do {
    numArray = Array.from(String(numMul), Number);
    console.log(numArray);
    numMul = numArray[0];

    for (let i = 0; i <= numArray.length-2; i++) {
      numMul = numMul * numArray[i+1];
    }
  console.log(numMul);
  mTimes ++;
  } while (numMul>9);

  console.log(mTimes);
  return mTimes;
}
persistence(6665795940); */

//ARRAY TRUE VALUE COUNTER EXERCISE
/* function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let arr  = arrayOfSheep.filter(x=>x==true);
  console.log(arr.length)
  return arr.length;
}

let array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];
countSheeps(array1) */

//VOWALS COUNTER EXERCISE
/* function getCount(str) {
  counter=0;
  let vowals = ["a","e","i","u","o"]
  let stringg = Array.from(String(str), String);
  console.log(stringg)

  for (let i = 0; i < stringg.length; i++) {
    for (let j = 0; j < vowals.length; j++) {
     if (stringg[i]==vowals[j]) {
      counter ++;}
    }
  }
  console.log(counter)
  return counter;
}
getCount("kura kura"); */

//SMALLEST NUMBER FINDER EXERCISE
/* function findSmallestInt(args) {
  let lesser =args[0];
for (let i = 0; i < args.length; i++) {
  if (args[i]<lesser) {
     lesser = args[i]
  }
}
  //console.log(lesser)
 return lesser
}
findSmallestInt([78,56,232,12,0]) */

//STAIR STEPS COUNTER BUT WHILE LOOP BREAKS MY WEB BROWSERS
/* function solution(start, finish) {
  //Mew
  let counter
  do {
    start +2
    counter++
  } while (start<finish);

console.log(start)
}
solution(1,7);  */

//SELECTIVE ARRAY REVERSE EXERCISE, REVERSES A GRUP OS N ELEMENTS OF A GIVEN ARRAY
/* function selReverse(array, length) {
  // TODO
  let rvsArray = [];
  let tempArray = [];
  let strinArrays = [];

  if (length==0) {
    return array;
  }

  for (let i = 0; i < array.length; i += length) {
      tempArray = array.slice(i, i + length);
      strinArrays.push(tempArray.reverse().join(", "));
  }
  rvsArray[0] = strinArrays.join(", ");

  console.log(strinArrays)
  console.log(rvsArray)
 return rvsArray;
}
selReverse([2,4,6,8,10,12,14,16], 3) */

//VERSION CONTROL EXERCICE
/* class vm {
  constructor(major=0,minor=0,patch=1){
     this.history=[];
     this.version = { major, minor, patch }
  }
  major(){
    this.updateHistory();
    this.version.major ++;
    this.version.minor = 0;
    this.version.patch = 0;
    return this;
  }
  minor(){
    this.updateHistory();
    this.version.minor ++;
    this.version.patch = 0;
    return this;
  }
  patch(){
    this.updateHistory();
    this.version.patch ++;
    return this;
  }
  rollback(){
    if(this.history.length==0)  {
      throw new Error ("Cannot rollback!");
    }
      this.version = this.history[this.history.length - 1];
      this.history.pop();
      return this;
  }
  release(){
   return `Version: ${this.version.major}, ${this.version.minor}, ${this.version.patch}`
  }
  updateHistory(){
    let {major,minor,patch} = this.version;
    this.history.push({major,minor,patch})
  }
}
let m1 = new vm(4,4,4)
//console.log(m1)

console.log(m1.release()); */

//REMOVE FIRST AND LAST CHARACTER
/* function removeChar(str){
  //You got this!
  return str.slice(1,str.length-1)
 };
 console.log(removeChar("keep on")) */

//RACE PODIUM EXERCISE
/* function racePodium(blocks) {
  let first = Math.ceil(blocks/3)+1;
  let second = first - 1;
  let third = blocks-first-second;
  if (third == 0) {
    third = 1
    second -= 1
  }
  return [second,first,third]
}
console.log(racePodium(11))
 */

//FIRST NON REPEATED CHARACTER BUT I CAN'T FIGURE OUT THE UNIQUE letIABLE
/* function firstNonRepeated(s) {
  // your code here
  let stringg = Array.from(String(s), String);
  let unique=[];

  const getNonDuplicatedValues = (arr) =>
    arr.filter((item,index) => {
      arr.splice(index,1)
      unique = !arr.includes(item)
      arr.splice(index,0,item)
      return unique
  })

 return getNonDuplicatedValues(stringg)
}
console.log(firstNonRepeated("test")) */

//FIRST NON REPEATED CHARACTER IN OTHER WAY
/* function firstNonRepeated(s) {
    let l = s.length,
        i, j,
        unique = [];

    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            if (i === j) {
                continue;
            }
            if (s[i] === s[j]) {
                break;
            }
        }
        if (j === l) {
            unique.push(s[i]);
        }
    }
    if (unique == "") {
      return null
    } else{
       return unique[0];
    }
}
console.log(firstNonRepeated("test")) */

//SUPER COMPACT WAY THAT SOMEONE CAME UP WITH
//const firstNonRepeated = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null

//ALTERNATE CAPITALIZATION EXERCISE
/* function capitalize(s){
  let ar =[]
  let arr = [];
  let arrr = []

  for (let i = 0; i < s.length; i++) {
    if (i%2==0) {
      arr.push(s[i].toUpperCase())
    } else{
      arr.push(s[i])
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (i%2!=0) {
      ar.push(s[i].toUpperCase())
    } else{
      ar.push(s[i])
    }
  }

 arrr[0]=arr.join("")
 arrr[1]=ar.join("")
  return arrr;
};
console.log(capitalize("codewars")) */

// COMBINATIONS FUNCTION THAT CAN BE USEFUL LATER
/* function combinations(str) {
    let fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a.join(", ");
    }
    return fn("", str, []);
}
console.log(combinations("12543"))
 */

//REVERSE WORDS EXERCISE
/* function reverseWords(str) {
  // Go for it
  let strr;
 str = str.split("")

 str = str.reverse()

 str = str.join("")

 str = str.split(" ")

  str = str.reverse()

  strr = str.join(" ")

 return strr
}
console.log(reverseWords("This is an example!"))
 */

//CENTURY EXERCISE
/* function century(year) {
  // Finish this :)
  let cntr;
  if (year%100==0) {
    cntr = year/100
  } else {
    cntr = Math.ceil(year/100)
  }
  return cntr;
}
console.log(century(2023)) */

//SUM THE TWO LOWEST NON-FLOAT NON-NEGATIVE NUMBERS OF AN ARRAY
/* function sumTwoSmallestNumbers(numbers) {
  //Code here
  let iss = (n) =>{
    return n > 0 && n % 1 == 0
  }
  numbers=numbers.filter(iss)
  numbers=numbers.sort((a,b)=>a-b)

  return numbers[0]+numbers[1]
}
console.log(sumTwoSmallestNumbers([5,-3,0,1,3.7, 8, 12, 19, 22])) */

//COUNTS THE NUMBER OF GIVEN CHARACTERS EXERCISE
/* function printerError(s) {
    // your code
    let sss =s.split('')
    let ss = s.split('').filter(char => /[a-mA-M]/.test(char));
    let errorN = sss.length - ss.length
    return `${errorN}/${s.length}`
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))

 */

//VERIFYS IS TWO ARRAYS ARE SIMILAR, HAVING THE SAME VALUES OCURRING THE SAME AMOUNT OF TIMES
/* function arraysSimilar(arr1, arr2) {
  // TODO: Implement your arraysSimilar
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  let same = 0
  for (const each in arr1) {
    if (arr1[each] === arr2[each]) {
        same ++;
    }
  }
  if ((same==arr1.length)&&(arr1.length==arr2.length))  {
    return true
  }
  return false
}
 */

//COUNTS THE NUMBERS OF PAIRS BY COLORS IN A GIVEN ARRAY OF GLOVES
/* function numberOfPairs(gloves) {
  //My hands are freezing
  let counter=0
  let tArr
  const counts = {};

  for (const num of gloves) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  tArr = gloves.filter((item, index) => gloves.indexOf(item) === index);

  for (let i = 0; i < tArr.length; i++) {
    counter += Math.floor(counts[tArr[i]] / 2)
  }
    return counter
  }
inp2 = ['gray','black','purple','purple','purple','gray','black','red','pink']
console.log(numberOfPairs(inp2)) */

//COUNTS THE ZEROS AT END OS N!!, INCOMPLETE EXERCISE, BREAKS WITH INFINITY NUMBERS
/* function countZeros(n) {
  let fct = 1
  let arr = []
  let arrT = []
  let counter=0
  let sum=0

  if (n%2==0) {
    let i=0
    while (i<n) {
      i++
      if (i%2==0) {
        fct *= i
      }
    }
  }else{
    let i=1
    while (i<n) {
      i++
      if (i%2!=0) {
        fct *= i
      }
    }
  }
  fct = BigInt(fct)
  console.log(fct)
  arr = Array.from(String(fct), Number);
  //arr = arr.slice(arr.length-arr.length/10000,arr.length)
  console.log(arr)

  for (let j = 1; j <=arr.length ; j++) {
    arrT = arr.slice(arr.length-j,arr.length)
    for (let g = 0; g < arrT.length; g++) {
      sum +=arrT[g]
      if (sum==0) {
        counter = arrT.length
        break;
      }
    }
  }
 return counter;
}
console.log(countZeros(222)); */

//VERIFYS IF THE NUMBER IS NARCISSISTIC
/* function narcissistic(value) {
  // Code me to return true or false
  let arr =[]
  let rise=1
  let risee=[]
  let sum =0

  if (value<10) {
    return true;
  }

  arr = Array.from(String(value), Number);
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      rise *= arr[j]
    }
    risee[j]=rise
    rise=1
  }
 //console.log(risee)
 for (let g = 0; g < risee.length; g++) {
  sum +=risee[g]
 }
  return sum==value
}
console.log(narcissistic(163)) */

//CALCULATE RANGE, AVERAGE AND MEDIAN OF TIMES
//https://www.codewars.com/kata/55b3425df71c1201a800009c
/* function stat(strg) {
   // your code
   if (!strg) {
      return ""
   }

    function conv (n) {
      let sec_num = parseInt(n, 10); // don't forget the second param
      let hours   = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours+'|'+minutes+'|'+seconds;
    }
    function median(values){
      if(values.length ===0) throw new Error("No inputs");
      values.sort(function(a,b){
        return a-b;
      });
      let half = Math.floor(values.length / 2);
      if (values.length % 2)
        return values[half];
      return (values[half - 1] + values[half]) / 2.0;
    }

    let arr=[]
    let timeSc=[]

  strg = strg.split(",")
  for (let i = 0; i < strg.length; i++) {
   arr[i]=strg[i].split("|")
    for (let t = 0; t < 3; t++) {
      arr[i][t] = Number(arr[i][t])
    }
  }

  for (let j = 0; j < arr.length; j++) {
    timeSc[j] = (arr[j][0]*3600)+(arr[j][1]*60)+(arr[j][2])
  }

  let range = Math.max(...timeSc)-Math.min(...timeSc)
  let average= (timeSc.reduce((partialSum, a) => partialSum + a, 0))/(timeSc.length)

  return `Range: ${conv(range)} Average: ${conv(average)} Median: ${conv(median(timeSc))}`
}
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
 */

//subsetSum([3,9,8,4,5,7,10],15);

//WORKS BUT WITH TIMEOUT
//https://www.codewars.com/kata/probabilities-for-sums-in-rolling-cubic-dice
/* function rolldiceSumProb(sum, dice){
   let sumSets = [];

  function powerset(arr) {
    let ps = [[]];
    for (let i=0; i < arr.length; i++) {
        for (let j = 0, len = ps.length; j < len; j++) {
             ps.push(ps[j].concat(arr[i]));
        }
    }
    return ps;
  }

  function summ(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++){
        total += arr[i];
      }
      return total
  }

  function findSums(numbers, targetSum) {

    let numberSets = powerset(numbers);
    for (let i=0; i < numberSets.length; i++) {
        let numberSet = numberSets[i];
        if (summ(numberSet) == targetSum)
          if (numberSet.length==dice) {
            sumSets.push(numberSet);
          }
    }
    sumSets = sumSets.map(JSON.stringify)
    sumSets = [...new Set(sumSets)];

    return sumSets
  }

  let prob;
  // your code here
  let diceCount= []

  for (let i = 0; i < dice; i++) {
    for (let j = 1; j < 7; j++) {
       diceCount += j
    }
  }

  diceCount = diceCount.split("")
  diceCount= diceCount.map(function (x) {
    return parseInt(x, 10);
  });

  findSums(diceCount,sum)

  console.log(diceCount)
  console.log(sumSets)

  let probC = 1
  for (let v = 0; v < dice; v++) {
    probC *= 6
  }

  prob = sumSets.length / probC

  return prob;
}
console.log(rolldiceSumProb(8,4)) */

//https://www.codewars.com/kata/5901555b63bf404a66000029
/* let newOne = (arr) =>{
  let temp
  let newArr=[]

  temp = arr[arr.length-1]

  for (let i = 0; i < arr.length; i++) {
    if (temp===1) {
      if (arr[i]==0) {
        newArr[i] = arr[i] +1
      } else{
        newArr[i] = arr[i] -1
      }
    }  else{
      newArr[i] = arr[i]
    }
    temp =  arr[i]
  }
  return newArr
}

function lightBulbs(lights, n) {
  //coding and coding..
  let final=[]
  let temp = [...lights]

  for (let i = 0; i < n; i++) {
    final = newOne(temp)
    temp = [...final]
  }

  return final
}
console.log(lightBulbs([0, 1, 1, 0, 1, 1], 2)) */
// [1, 0, 1, 1, 0, 1]
//https://www.codewars.com/kata/5934d648d95386bc8200010b
/* function kaCokadekaMe(word) {
  let kaWord = Array.from(String(word), String);
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  let conso = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w','x', 'y', 'z','B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X','Y', 'Z']

  for (let i = 0; i < kaWord.length; i++) {
    if (  (vowels.includes(kaWord[i])) ) {
      if ( (conso.includes(kaWord[i+1])) ) {
        kaWord.splice(i+1, i-i, 'ka')
      }
    }
  }
  kaWord.unshift("ka")
  kaWord = kaWord.join("")
  return kaWord;
}
console.log(kaCokadekaMe("bexhs")) */

//https://www.codewars.com/kata/5825792ada030e9601000782/javascript
/* function zipWith(fn,a0,a1) {
  let finalArr=[]
  let lesserLength = Math.min(a0.length, a1.length)

  for (let i = 0; i < lesserLength; i++) {
    finalArr[i] = fn(a0[i], a1[i])
  }
  return finalArr
}
console.log(zipWith(Math.pow , [10,10,10,10], [0,1,2,3])) */

//https://www.codewars.com/kata/587731fda577b3d1b0001196/javascript
/* String.prototype.camelCase=function(){
  //your code here
  let arr = this.split(" ")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
  }
  return arr.join("")
}
console.log("test man case".camelCase()) */

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript
/* function solution(str, ending){
  // TODO: complete
  let is = false
  if (ending=='') {
    is=true
  }
  if ((str.includes(ending))&&(ending[ending.length-1]==str[str.length-1])) {
    is = true
  }
  return  is
}
console.log(solution('abcde', 'abc')) */

//https://www.codewars.com/kata/5821cd4770ca285b1f0001d5/javascript
/* var snakesAndLadders = function(board, dice) {
  // Your code here
  let position=0
  let mov=0
  console.log(board)
  for (let i = 0; i < dice.length; i++) {
    console.log("\ni "+i)
    if  (dice[i] + position < board.length)  {
      console.log("position "+position)
      console.log("dice>> "+dice[i])
      position += dice[i]
      position += board[position]
      mov = position
      console.log("board value>> "+ board[mov] +" index "+board.indexOf(board[mov]) )
      console.log("position "+position)
    }
  }
  return position
}
var dice =  []
var board =[]
for (let f = 0; f < 99; f++) {
  board[f] = Math.floor(Math.random()*99)
  dice[f] = Math.floor(Math.random()*40)
}
console.log(snakesAndLadders(board,dice)) */

//https://www.codewars.com/kata/57241cafef90082e270012d8
/* function keywordCipher(string, keyword){
  //your code here
  let stringg = Array.from(String(keyword.toLowerCase()), String)
  let noRepeat = []
  let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let finalInd=[]
  let finalWord=[]

  for (let i = 0; i < stringg.length; i++) {
    if (!noRepeat.includes(stringg[i])) {
      noRepeat.push(stringg[i])
    }
  }

  noRepeat.push(alph.filter(letter => !noRepeat.includes(letter)).join(""))
  noRepeat = noRepeat.join("")
  noRepeat = noRepeat.split("")

  string = string.toLowerCase().split("")

  for (let j = 0; j < string.length; j++) {
    finalInd[j]=alph.indexOf(string[j])
  }
  for (let n = 0; n < finalInd.length; n++) {
  finalWord.push(noRepeat[finalInd[n]])
  }

  finalWord.forEach(function(item, i) { if (item == undefined) finalWord[i] = " "; });
  finalWord = finalWord.join("")

  return finalWord
}
console.log(keywordCipher("alpha bravo charlie", "delta")) */

//https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript
/* function kebabize(str) {
  str = str.replace(/[^a-zA-Z]/g,'')
  let indexx=[]
  let strr = Array.from(String(str), String)
  let final=[]

  for (let i = 0; i < strr.length; i++) {
    if (strr[i].toUpperCase() === strr[i]) {
      indexx.push(i)
    }
  }
  strr = strr.map(a=> a.toLowerCase())

  for (let g = 0; g < indexx.length; g++) {
    final[g] = strr.slice(indexx[g],indexx[g+1])
  }

  final.unshift(strr.slice(0,indexx[0]))

  final = final.join(" ")
  for (let f = 0; f < final.length; f++) {
    final = final.replace(",","")
    final = final.replace(" ","-")
  }

  if (final.charAt(0)=="-") {
    final = final.replace("-","")
  }
  return final
}
console.log(kebabize("myCamelCasedString")) */

//https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/javascript
/* function getCombinations(valuesArray, size)
{

var combi = [];
var temp = [];
var slent = Math.pow(2, valuesArray.length);

for (var i = 0; i < slent; i++)
{
    temp = [];
    for (var j = 0; j < valuesArray.length; j++)
    {
        if ((i & Math.pow(2, j)))
        {
            temp.push(valuesArray[j]);
        }
    }
    if (temp.length > 0)
    {
        combi.push(temp);
    }
}

combi = combi.filter(a=>a.length ==size)
//console.log(combi.join("\n"));
return combi;
}

function chooseBestSum(t, k, ls) {
    // your code
  let options = []
  options = getCombinations(ls, k)
  //console.log(options)
  if (options=="") {
    return null
  }
  let sum = []
  for (let i = 0; i < options.length; i++) {
    sum[i] = options[i].reduce((partialSum, a) => partialSum + a, 0)
  }
  //console.log(sum.sort())
  let closer = sum.reduce(function(prev, curr) {
    return (Math.abs(curr - t) < Math.abs(prev - t) ? curr : prev);
  })

  if (closer>t) {
    sum.sort((a , b) => a - b )
    closer = sum[sum.indexOf(closer)-1]
  }
  //console.log(closer)
  if (closer==undefined) {
    closer=null
  }
  return closer
}
var ts =  [21,34,87,24,09,45,23,56]
console.log(chooseBestSum(12, 4, ts)) */

//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
/* function findOutlier(integers){
  //your code here
  let mod = integers.map(a=>a%2).map(a=>Math.abs(a))
  let ind

  let sumArr = mod.reduce((a,b)=>a+b)
  if (sumArr==1) {
    ind = mod.indexOf(1)
  } else {
    ind = mod.indexOf(0)
  }
  return integers[ind]
}
console.log(findOutlier( [2,6,8,10,3] )) */

//https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript
/* function digPow(n, p){
  // ...
  let arr = []
  arr = Array.from(String(n), Number)
  let poww =0

  for (let i = 0; i < arr.length; i++) {
    poww += Math.pow(arr[i],p)
    p++
  }

  if (Number.isInteger(poww/n)) {
    return poww/n
  }
return -1
}
console.log(digPow(46288, 3)) */

//https://www.codewars.com/kata/5270d0d18625160ada0000e4/javascript
/*  function score( dice ) {
  // Fill me in!
  let result=0
  let dice1=[]
  let points={
    1:1000,
    6:600,
    5:500,
    4:400,
    3:300,
    2:200
  }
  let points1={
    6:0,
    4:0,
    3:0,
    2:0,
    1:100,
    5:50
  }

  const counts = {}
  for (const num of dice) {
    counts[num] = counts[num] ? counts[num] + 1 : 1
  }

  dice=dice.sort((a , b) => a - b )
  for (let i = 0; i <= dice.length; i++) {
    if ((dice[i]==dice[i+1]) && (dice[i]==dice[i+2])) {
      dice1 = dice.splice([i],[3])
      break
    }
  }
  if (dice1!="") {
    result += points[dice1[0]]
  }
  for (let g = 0; g < dice.length; g++) {
    result += points1[dice[g]]
  }
return result ? result: 0
}
console.log(score( [2, 4, 4, 5, 4] ))  */

//https://www.codewars.com/kata/555624b601231dc7a400017a/javascript
/* let reorder = (a) => {
  let hold
  hold = 0
  hold = a.shift()
  a.push(hold)
  return a
}

function josephusSurvivor(n, k) {
  //your code here
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1
  }
  if (arr.length == 1) {
    return arr[0]
  }

  do {
    delete (arr[(k - 1 % arr.length + arr.length) % arr.length])
    while (arr[0] != undefined) {
      arr = reorder(arr)
    }
    arr = arr.filter(Number)
    //console.log(arr)
  } while (arr.length > 1);

  return arr[0]
}
console.log(josephusSurvivor(34, 2)) */

//https://www.codewars.com/kata/5c09ccc9b48e912946000157/javascript
/* let changee = (mountain, limit,neww) => {
    for (let f = 0; f < mountain[0].length; f++) {
      if (mountain[0][f]=='^') {
        mountain[0][f]=neww
      }
      if (mountain[mountain.length-1][f]=='^') {
        mountain[mountain.length-1][f]=neww
      }
    }

    for (let i = 1; i < mountain.length-1; i++) {
      for (let g = 0; g < mountain[i].length; g++) {
        if((mountain[i][g]=='^') && ( (mountain[i][g+1]==limit) || (mountain[i][g-1]==limit) ||
          (mountain[i-1][g]==limit) || (mountain[i+1][g]==limit) ) ){
          mountain[i][g]=neww
        }
      }
    }
    return mountain
}
var peakHeight = function(mountain) {
  // Your code here
  for (let v = 0; v < mountain.length; v++) {
    mountain[v].push(' ')
    mountain[v].unshift(' ')
  }
  let mountainn = mountain.join('')
  if (mountainn.includes('^')==false) {
    return 0
  }

  let limit = ' '
  let newc=1

  while (mountainn.includes('^')==true) {
    mountain= changee(mountain,limit, newc )
    limit = newc
    newc= newc+1
    mountainn = mountain.join('')
  }

  console.log(newc-1)
  //return newc-1;
  return mountain;
}

var show = function(m) {
    for (var y = 0; y < m.length; y++) {
      console.log(m[y].join(''));
    }
    return m;
  }
  var mountain = [
      "^^^^^       ".split(''),
      "^^^^^       ".split(''),
      "^^^^^       ".split(''),
      "            ".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split(''),
      "     ^^^^^^^".split('')
    ]
 show( peakHeight(mountain) )  */

//https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript
/* function orderWeight(strng) {
    // your code
  let wweiArr = strng.split(' ')
  wweiArr = wweiArr.filter(String)

  let weiArr=[]
  for (let i = 0; i < wweiArr.length; i++) {
    weiArr[i]=wweiArr[i].split('')
  }

  let sumDigArr =[]
  for (let h = 0; h < weiArr.length; h++) {
    if (weiArr[h].length>1) {
      sumDigArr[h] = weiArr[h].reduce((a,b)=>parseInt(a,10)+parseInt(b,10))
    } else{
      sumDigArr[h] = parseInt(weiArr[h],10)
    }
  }

  let sortDigArr = [...sumDigArr].sort((a,b)=>a-b)

  const counts = {};
  for (const num of sortDigArr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let repeatArr=[]
  let a=0
  for (const key in counts) {
    if (counts[key]>1) {
       repeatArr.push([])
      for (let f = 0; f < counts[key]; f++) {
        repeatArr[a].push(key)
        delete(sortDigArr[sortDigArr.indexOf(parseInt(key,10))])
      }
      a++
    }
  }

  let newArr = []
  let v=0
  for (let f = 0; f < repeatArr.length; f++) {
    newArr.push([])
    for (let g = 0; g < repeatArr[f].length; g++) {
      newArr[v].push( wweiArr[sumDigArr.indexOf( parseInt (repeatArr[f][g] ,10))] )
      delete( sumDigArr[sumDigArr.indexOf( parseInt (repeatArr[f][g] ,10))] )
    }
    v++
  }
  for (let a = 0; a < newArr.length; a++) {
    newArr[a].sort()
  }
  newArr = newArr.join(',')
  newArr = newArr.split(',')

  let finalArr=[]
  for (let b = 0; b < sortDigArr.length; b++) {
    finalArr[b] = wweiArr[sumDigArr.indexOf(sortDigArr[b])]
    delete(sumDigArr[sumDigArr.indexOf(sortDigArr[b])])
  }
  let ç=0
  for (let b = 0; b < finalArr.length; b++) {
    if (finalArr[b]==undefined) {

      finalArr[b]=newArr[ç]
      ç++
    }
  }
  return finalArr.join(' ')
}
console.log(orderWeight("479064 34 11  1700 33 4")) */

//https://www.codewars.com/kata/5839c48f0cf94640a20001d3/javascript
/* function landPerimeter(arr) {
  let per=0
  temp = []
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i].split('')
  }
  for (let b = 0; b < temp.length; b++) {
    for (let x = 0; x < 2; x++) {
      temp[b].push('O')
      temp[b].unshift('O')
    }
    temp[b] = temp[b].join('')
  }
  let line=''
  for (const each of temp[0]) {
    line += 'O'
  }
  for (let x = 0; x < 2; x++) {
    temp.push(line)
    temp.unshift(line)
  }

  let perlogg=0
  for (let g = 1; g < temp.length-1; g++) {
    perlogg=per
    for (let h = 1; h < temp[g].length; h++) {
      if (temp[g][h]=='O') {
        if (temp[g][h+1]=='X') {
          per+=1
        }
        if (temp[g][h-1]=='X') {
          per+=1
        }
        if (temp[g-1][h]=='X') {
          per+=1
        }
        if (temp[g+1][h]=='X') {
          per+=1
        }
      }
    }
    //console.log('\ncoluna '+g+ ' | somou '+ (per-perlogg))
    //console.log('soma total '+per)
  }
  return `Total land perimeter: ${per}`
}
let lannd =["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]
console.log(landPerimeter(lannd)) */

//https://www.codewars.com/kata/55983863da40caa2c900004e
//chat GPT solution
/* function getNextBiggerNumber(num) {
  // Convert the number to a string, split the digits, and sort them in descending order
  let digits = num.toString().split('').sort((a, b) => b - a);
  // Join the digits to form the maximum number
  let maxNum = parseInt(digits.join(''));
  // Check if the maximum number is equal to the input number, in which case there is no next bigger number
  if (maxNum === num) {
    return -1;
  }
  // Loop through all numbers greater than the input number to find the next bigger number
  for (let i = num + 1; ; i++) {
    // Convert the current number to a string, split the digits, and sort them in descending order
    let currentDigits = i.toString().split('').sort((a, b) => b - a);
    // Join the digits to form the current number in descending order
    let currentNum = parseInt(currentDigits.join(''));
    // Check if the current number is a rearrangement of the digits of the input number
    if (currentNum === maxNum) {
      return i;
    }
  }
}
console.log(getNextBiggerNumber(28777655)) */

// brute force solution
/* let compare = (ogg, nStrr) =>{
  if(ogg.length!=nStrr.length){
    return false
  }
  let oggC = [...ogg]
  let nStrrC = [...nStrr]
  oggC.sort((a,b)=> a-b)
  nStrrC.sort((a,b)=> a-b)

  let count=0
  for (let i = 0; i < ogg.length; i++) {
    if (oggC[i]==nStrrC[i]) {
      count++
    }
  }
  if (count == ogg.length) {
    return true
  }
  //console.log(count)
}
let nextBiggerr = (n) =>{
  let nn = n
  let nStr =Array.from(String(nn), Number)
  let og= Array.from(String(n), Number)

  let count =0
  for (let i = nStr.length-1; i >= 0; i--) {
    for (let g = nStr.length-1; g >= 0; g--) {
      if( (nStr[i] > nStr[g]) && (g+1==i) ){
        count++
      }
    }
  }
  if (count==0) {
    return -1
  }

  let rpt = true
  do {
    nn++
    nStr = Array.from(String(nn), Number)
    if(compare(og, nStr)==true){
      rpt=false
    }
  } while (rpt==true);

  return parseInt(  nStr.join(''),10 )
}
console.log(nextBiggerr( 234 )) */

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript
/* function pigIt(str){
  //Code here
  let wordsArr = str.split(' ')
  let wordArr=[]
  let wordArrS=[]
  let hold
  for (let i = 0; i < wordsArr.length; i++) {
    wordArr[i] = wordsArr[i].split('')
    if (wordArr[i].join('').match(/[a-z]/i)) {
    hold = wordArr[i].splice(0,1).join('')
      wordArr[i].push(hold)
      wordArr[i].push('ay')
    }
    wordArrS[i] = wordArr[i].join('')
  }
  return wordArrS.join(' ')
}
console.log(pigIt('This is my string')) */

//https://www.codewars.com/kata/53d3173cf4eb7605c10001a8/javascript
/* let power = (array) => array.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set])),[[]]).map(a=>a.sort()).sort();

console.log(power(  [ 180, 27, 478, 579 ] )) */

//https://www.codewars.com/kata/5550d638a99ddb113e0000a2/javascript
/* let reorder = (a) => {
  let hold
  hold=0
  hold=a.shift()
  a.push(hold)
  return a
}
function josephus(items,k){
  //your code here
  let arr = [...items]

  if (arr.length==1) {
    return arr
  }
  let outt=[]
  do {
    outt.push(arr[ (k-1 % arr.length + arr.length) % arr.length])
    delete( arr[ (k-1 % arr.length + arr.length) % arr.length] )
    while (arr[0]!=undefined) {
      arr = reorder(arr)
    }
    arr=arr.filter(String,Number)
  } while (arr.length>0);
  //console.log(arr)
  //console.log(outt)
  return outt[0]==undefined ? [] : outt
}
console.log(josephus ([1,5,3,67,3,1],3) ) */

//https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/javascript
/* function removeParentheses(s){
  let sArr = [...s]
  let initial=0
  let final=0

  while (sArr.includes('(') || sArr.includes(')')) {
    for (let i = initial; i < sArr.length; i++) {
      if (sArr[i]=='(') {
        initial = i
      }
    }
    for (let i = initial; i < sArr.length; i++) {
      if (sArr[i]==')') {
        final = i
        break
      }
    }
    sArr.splice(initial, (final-initial+1))
    initial=0
    final=0
  }
  console.log(initial,final)
  return sArr.join('')
}
console.log(removeParentheses("a(b(c))"))
console.log(removeParentheses("example(unwanted thing)example"))
console.log(removeParentheses("\n(first group) (second group) (third group)")) */

//https://www.codewars.com/kata/52742f58faf5485cae000b9a/javascript
/* function formatDuration (seconds) {
  // Complete this function
  if (seconds==0) {
    return 'now'
  }
  let timeLeft = seconds
  let scnds=null
  let minutes=null
  let hours=null
  let days=null
  let years=null

  while (timeLeft>0) {
    if (timeLeft>=31536000) {
      years++
      timeLeft-=31536000
    } else if (timeLeft>=86400) {
      days++
      timeLeft-= 86400
    } else if (timeLeft>=3600){
      hours++
      timeLeft-= 3600
    } else if (timeLeft>=60) {
      minutes++
      timeLeft-=60
    } else {
      scnds = timeLeft
      timeLeft = 0
    }
  }
  let m='minutes'
  let s='seconds'
  let h= 'hours'
  let d= 'days'
  let y='years'
  if (minutes==1) {
    m='minute'
  }
  if (scnds==1) {
    s='second'
  }
  if (hours==1) {
    h='hour'
  }
  if (days==1) {
    d='day'
  }
  if (years==1) {
    y='year'
  }

  let final=[`${years} ${y}`,`${days} ${d}`,`${hours} ${h}`,`${minutes} ${m}`,`${scnds} ${s}`]
  let i = 0;
  while (i < final.length) {
    if (final[i].includes(null)) {
      final.splice(i, 1);
    } else {
      i++;
    }
  }
  let holdLast =  final.splice([final.length-1],1)
  return  final[0] ? `${final.join(', ')} and ${holdLast.join('')}` : holdLast.join('')
}
console.log(formatDuration(253374061)) */

//https://www.codewars.com/kata/5b997b066c77d521880001bd/javascript    UNRESOLVED
/* function allPermutedd(l) {
  let arr = [];
  let factorial1=1n
  let formula=0n

  for (let i = 1; i <= l; i++) {
    arr.push(BigInt(i) )

    for (let j = 1; j < i; j++ ){
      factorial1 *= BigInt(j)
    }
    //console.log(typeof(factorial1))
     console.log(`1/ ${factorial1} = ${1n / factorial1 }` )

    if ((i-1)%2==0) {
      formula += 1n/ factorial1
      }else{
      formula -= 1n/ factorial1
      }
      //console.log('formula',Number.parseFloat(formula).toFixed(20) )
      //console.log(factorial1)
      factorial1=1n
    }

  let factorial = BigInt(arr.reduce((a,b)=>a*b))
  //console.log(factorial.toString() )
  //console.log(typeof(factorial))
  let result = (factorial * formula)

  return result
}
console.log( allPermutedd(30n) )

// 97 581 073 836 835 777 732 377 428 235 481 n
// 97 581 073 836 835 800 000 000 000 000 000 */

//https://www.codewars.com/kata/5779f894ec8832493f00002d/javascript
/* let fibDigits = (n) =>{
  let fibSeq = [0n,1n]
  for (let i = 1n; i < n; i++) {
    fibSeq.push(fibSeq[i-1n] + fibSeq[i] )
  }

  let split = fibSeq[n]
  split = split.toString().split('')

  const counts = {};
  for (const num of split) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  let valuesArr = Object.values(counts).sort((a,b)=>b-a)

  let countsArr = []
  for (const each in valuesArr) {
    key = Object.keys(counts).sort((a,b)=>b-a).find(key => counts[key] === valuesArr[each]);
    countsArr[each] = [valuesArr[each] , parseInt(key) ]
    delete(counts[key])
  }
  return countsArr
}
console.log(fibDigits(10000n)) */

//https://www.codewars.com/kata/52223df9e8f98c7aa7000062/javascript
/* function rot13(str) {
  let lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  //let uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let strArr = str.split('')

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(/[a-z]/)) {
      let position = lCase.indexOf(strArr[i])
      strArr[i] = lCase[ ((position+14)-1 % lCase.length + lCase.length) % lCase.length]
    } else if (strArr[i].match(/[A-Z]/)) {
      let position = lCase.indexOf(strArr[i].toLowerCase())////
      strArr[i] = lCase[ ((position+14)-1 % lCase.length + lCase.length) % lCase.length].toUpperCase()/////
    }
  }
  return strArr.join('')
}
console.log(rot13("This is my first ROT13 excercise!")) */

//https://www.codewars.com/kata/52ec24228a515e620b0005ef
/* function sum(num) {
  const memo = new Map(); // CHAT GPT CODE
  return countPartitions(num, memo);
}

function countPartitions(n, memo) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (memo.has(n)) return memo.get(n);

  let result = 0;
  let k = 1;

  while (true) {
    const pent1 = k * (3 * k - 1) / 2;
    const pent2 = k * (3 * k + 1) / 2;

    if (pent1 > n && pent2 > n) break;

    let sign1 = (k % 2 === 0) ? -1 : 1;
    let sign2 = (k % 2 === 0) ? -1 : 1;

    if (pent1 <= n) {
      result += sign1 * countPartitions(n - pent1, memo);
    }
    if (pent2 <= n) {
      result += sign2 * countPartitions(n - pent2, memo);
    }

    k++;
  }

  memo.set(n, result);
  return result;
}
const n = 100;
const numPartitions = sum(n);
console.log(`The number of integer partitions of ${n} is ${numPartitions}.`);  */

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
/* function moveZeros(arr) {
  let hold=[]
  while (arr.includes(0)  ) {
    hold.push( arr.splice((arr.indexOf(0)),1).join('') )
  }
  return arr.concat( hold.map(a=>parseInt(a)))
}
console.log(moveZeros([ 9, +0, 9, 1,0, 2, 0,1,'f', 1, 3,[]]  )) */

//https://www.codewars.com/kata/5267faf57526ea542e0007fb/javascript
/* Math.round = function(n) {
  let mRound = 0
  if ((n%2===0) || (n%2===1)) {
    mRound = n
  } else{
    let nArr =  Array.from(String(n), String)
    if (parseInt(nArr[nArr.indexOf('.')+1]) >= 5) {
      mRound = parseInt(nArr.slice(0, (nArr.indexOf('.'))).join('')) +1
    } else{
      mRound = parseInt(nArr.slice(0, (nArr.indexOf('.'))).join(''))
    }
  }
  return mRound; // TODO: fix this
};

Math.ceil = function(n) {
  let mCeil=0
  if ((n%2===0) || (n%2===1)) {
    mCeil=n
  } else{
    let nArr =  Array.from(String(n), String)
    mCeil = parseInt(nArr.slice(0, (nArr.indexOf('.'))).join('')) +1
  }
  return mCeil; // TODO: fix this
};

Math.floor = function(n) {
   let mFloor=0
   if ((n%2===0) || (n%2===1)) {
    mFloor=n
  } else{
    let nArr =  Array.from(String(n), String)
    mFloor =parseInt(nArr.slice(0, (nArr.indexOf('.'))).join(''))   }
  return mFloor; // TODO: fix this
}; */

//https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript
/*  function isSolved(board) {
  // TODO: Check if the board is solved!
  let boardArr =[]
  board.forEach(a=>boardArr.push(a.join(' ')))
  boardArr = boardArr.join(' ').split(' ')

  let verify = []
  let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]

  for (let i = 0; i < wins.length; i++) {
    for (let j = 0; j < wins[i].length; j++) {
      verify.push( boardArr[wins[i][j]] )
    }
    if ((verify[0]==verify[1]) && (verify[1]==verify[2]) && (verify[0]!=0) ) {
      return parseInt(verify[0])
    }
    for (let n = 0; n < 3; n++) {
      verify.pop()
    }
  }

  if (board.join().includes('0'))  return -1;
  if (!board.join().includes('0'))  return 0;
}
console.log(isSolved([[1,2,1],[0,0,0],[2,2,2]])) //2 */

//https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc/javascript
// returns index of move
/* function solveTTT(board) {
  let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
  let verify=[]
  let resultWin=[]
  for (let i = 0; i < wins.length; i++) {
    for (let j = 0; j < wins[i].length; j++) {
      verify.push( board[wins[i][j]] )
    }
    let counts = {};
    for (const num of verify) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    if( ( counts['X']==2) && ( counts['']==1) ){
      resultWin.push(wins[i][verify.indexOf('')] )
    }
    for (let n = 0; n < 3; n++) {
      verify.pop()
    }
  }

  let result=[]
  for (let i = 0; i < board.length; i++) {
    if (board[i]=='') {
      result.push(i)
    }
  }
  return resultWin!='' ? resultWin[0] : result
}
console.log(solveTTT(  ['', '', '', 'O', '', '', 'X', '', '']  ))  */

//https://www.codewars.com/kata/564e624da64546f72e0000e8/javascript
/* function cake(ing, am) {
  var recipe = {
    'caster sugar': 160,
    'butter': 170,
    'eggs': 3,
    'self-raising flour': 115,
    'cocoa powder': 55
  };

  let valUpL = recipe[ing]
  let valDownL = am
  let valUpR = 0

  for (let i = 0; i < 5; i++) {
    if (Object.keys(recipe)[i] != ing) {
      valUpR = recipe[Object.keys(recipe)[i]]
      let newVal = (valUpR * valDownL) / valUpL
      recipe[Object.keys(recipe)[i]] = newVal
    }
  }
  let hold = recipe['eggs']

  for (const key in recipe) {
    if (key != 'eggs') {
      recipe[key] = parseFloat(recipe[key].toFixed(1)) + 'g'
    }
  }
  recipe['eggs'] = parseFloat(hold.toFixed(1))

  if (ing != 'eggs') {
    recipe[ing] = am + 'g'
  } else {
    recipe[ing] = am
  }
  return recipe
  //Your solution
}
console.log(cake('butter', 283.3)) */

//https://www.codewars.com/kata/58a6ac309b5762b7aa000030
/* let circleSlashh = (n) => parseInt((Number(n).toString(2) + Number(n).toString(2)[0]).replace(/./, ''), 2)

console.log(circleSlashh(508080632));  */

//https://www.codewars.com/kata/58fec262184b6dc30800000d/javascript
/* function maximizePoints(team1, team2) {
  //coding and coding..
  team1.sort((a, b) => a - b)
  team2.sort((a, b) => a - b)

  let team1Final = []
  for (let h = 0; h < team2.length; h++) {
    for (let i = 0; i < team2.length; i++) {
      if (team1[i] > team2[h]) {
        team1Final.push(parseInt(team1.splice(i, 1).join('')))
        break
      }
    }
  }

  let c = 0
  team2.forEach(a => a < team1Final[team2.indexOf(a)] ? c++ : a);
  return team1Final.length
}
console.log(maximizePoints([7, 19, 23, 18, 38, 37, 38, 40], [21, 12, 1, 0, 13, 38, 25, 49])) */

//https://www.codewars.com/kata/546d15cebed2e10334000ed9/javascript
/* function solveExpression(exp) {
  expArr = exp.split('')

  let leftZeroIndex
  let subtractor = 1
  if (expArr[0] == '-') {
    leftZeroIndex = expArr.splice(0, 1)
    subtractor = 0
  }

  let expLeft = expArr.slice(0, (expArr.indexOf('*')))
  if (leftZeroIndex == '-') {
    expLeft = leftZeroIndex.concat(expLeft)
  }
  let signal = '*'

  if (expLeft.length == expArr.length - subtractor) {
    expLeft = expArr.slice(0, (expArr.indexOf('+')))
    if (leftZeroIndex == '-') {
      expLeft = leftZeroIndex.concat(expLeft)
    }
    signal = '+'
  }
  if (expLeft.length == expArr.length - subtractor) {
    expLeft = expArr.slice(0, (expArr.indexOf('-')))
    if (leftZeroIndex == '-') {
      expLeft = leftZeroIndex.concat(expLeft)
    }
    signal = '-'
  }

  let expRight = expArr.slice((expArr.indexOf('*') + 1), (expArr.indexOf('=')))
  if (expRight.length == expArr.slice(0, (expArr.indexOf('='))).length) {
    expRight = expArr.slice((expArr.indexOf('-') + 1), (expArr.indexOf('=')))
  }
  if (expRight.length == expArr.slice(0, (expArr.indexOf('='))).length) {
    expRight = expArr.slice((expArr.indexOf('+') + 1), (expArr.indexOf('=')))
  }

  let expResult = expArr.slice((expArr.indexOf('=') + 1), expArr.length)
  let missingRune;
  let result;
  for (let i = 0; i <= 9; i++) {
    if (!expArr.includes(i.toString())) {
      switch (signal) {
        case '*':
          result = parseInt(expLeft.join('').replaceAll('?', i.toString())) * parseInt(expRight.join('').replaceAll('?', i.toString()))
          break;
        case '+':
          result = parseInt(expLeft.join('').replaceAll('?', i.toString())) + parseInt(expRight.join('').replaceAll('?', i.toString()))
          break;
        default:
          result = parseInt(expLeft.join('').replaceAll('?', i.toString())) - parseInt(expRight.join('').replaceAll('?', i.toString()))
          break;
      }
      let not00 = true
      let leftZeroTest;
      let RightZeroTest;
      let ResultZeroTest;
      let indexToCheckLeft = 0;
      let indexToCheckRight = 0;
      let indexToCheckResult = 0;
      leftZeroTest = expLeft.join('').replaceAll('?', i.toString())
      RightZeroTest = expRight.join('').replaceAll('?', i.toString())
      ResultZeroTest = expResult.join('').replaceAll('?', i.toString())

      if (leftZeroTest.length > 3) {
        if (leftZeroTest[0] == '-') {
          indexToCheckLeft = 1
        }
      }
      if (RightZeroTest.length > 2) {
        if (RightZeroTest[0] == '-') {
          indexToCheckRight = 1
        }
      }
      if (ResultZeroTest.length > 2) {
        if (ResultZeroTest[0] == '-') {
          indexToCheckResult = 1
        }
      }

      if ((leftZeroTest[indexToCheckLeft] == '0') && (leftZeroTest != '0')) {
        not00 = false
      }

      if ((RightZeroTest[indexToCheckRight] == '0') && (RightZeroTest != '0')) {
        not00 = false
      }

      if ((ResultZeroTest[indexToCheckResult] == '0') && (ResultZeroTest != '0')) {
        not00 = false
      }

      if ((result == parseInt(expResult.join('').replaceAll('?', i.toString()))) && not00 == true) {
        missingRune = i
        break
      }
    }
  }
  return missingRune != undefined ? missingRune : -1
}
console.log(solveExpression('-7715?5--484?00=-28?9?5'))//6 */

//https://www.codewars.com/kata/59031db02b0070a923000110/javascript UNSOLVED
/* zeroOrOneee = (n, s) => {
  let b = []
  for (i in s[0]) {
    let c = 0
    for (h in s) {
      c += s[h][i]
    }
    b[i] = c > n / 2 ? 1 : 0
  }
  return b
}
console.log(zeroOrOneee(3, [
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0]]))//[1, 0, 1, 0, 1] */

/* zeroOrOne0 = (n, s) => {
  return s.reduce((a, c) => {
    return c.map((v, i) => {
      return (a[i] + v) //> n / 2 ? 1 : 0
    });
  })//.map(m => m > n / 2 ? 1 : 0);
}

zeroOrOne1 = (n, s) => s.reduce((a, c) => c.map((v, i) => a[i] + v)).map(m => m > n / 2 ? 1 : 0) // my attempt

zeroOrOne = (n, s) => s[0].map((_, i) => s.map(x => x[i]).sort()[n >> 1]) //bing solution


console.log(zeroOrOne(3, [
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0]]))//[1, 0, 1, 0, 1]
//[2, 1, 2, 1, 2] */


//https://www.codewars.com/kata/587593285448632b8d000143 UNSOLVED
/* function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  // Get the current user's shopping cart
  let OrderAPI = {
    //cart: 'cart',
    getShoppingCartAsync(u) {
      return new Promise(function (resolve, reject) {
        let cart = user
        setTimeout(resolve(cart), 1000)
        //reject('error')
      })
    },
    placeOrderAsync(c, r) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve(true), 1000)
      })
    }
  }

  OrderAPI.getShoppingCartAsync(user).then(function (cart) {
    shoppingCart = cart;
  });

  let CustomerAPI = {
    getProfileAsync(u) {
      return new Promise(function (resolve, reject) {
        let profile = { zipCode: user }
        setTimeout(resolve(profile.zipCode), 1000)
      })
    }
  }

  // Also look up the ZIP code from their profile
  CustomerAPI.getProfileAsync(user).then(function (profile) {
    zipCode = profile.zipCode;
  });

  // Calculate the shipping fees
  let calculateShipping = (c, z) => user
  shippingRate = calculateShipping(shoppingCart, zipCode);

  // Submit the order
  OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function (success) {
    orderSuccessful = success;
    console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
  });
}
submitOrder(12345); */

//https://www.codewars.com/kata/52a78825cdfc2cfc87000005/javascript
/* const calc = function (expression) {
  expression = expression.replaceAll(' ', '')
  let signals = /[\+\-\/*]/
  if (((!expression.includes('*')) && (!expression.includes('+')) && (!expression.includes('/')) && expression[0] == '-') || (!signals.test(expression))) {
    return expression.includes('.') ? parseFloat(expression) : parseInt(expression)
  }
  let expressionArr = expression.split('')
  expressionArr.push(')')
  expressionArr.unshift('(')

  let stop = /[()]/
  let solveOut = []
  while (stop.test(expressionArr)) {
    let spliceLeft, spliceRight
    for (let i = 0; i < expressionArr.length; i++) {
      if (expressionArr[i] == '(') {
        spliceLeft = i
      }
      if (expressionArr[i] == ')') {
        spliceRight = i - spliceLeft
        break
      }
    }
    let solveParentheses = expressionArr.splice(spliceLeft, spliceRight + 1)
    solveParentheses = solveParentheses.join('').replaceAll('--', '+').replaceAll('-+', '-').replaceAll('+-', '-').replaceAll('++', '+')
    solveParentheses = solveParentheses.split('')
    let signal1 = /[\/*]/
    let limits = /^[\(\)\*\+\-\/]+$/
    let limitLeft, limitRight, solved
    let spliceLength = 1

    for (let r = 0; r < expression.length; r++) {
      for (let i = 0; i < solveParentheses.length; i++) {
        if ((solveParentheses[i] == '/') || (solveParentheses[i] == '*')) {
          for (let h = i + 2; h < solveParentheses.length; h++) {
            if ((limits.test(solveParentheses[h]))) {
              limitRight = h
              break
            }
          }
          for (let h = i - 1; h >= 0; h--) {
            if (limits.test(solveParentheses[h])) {
              limitLeft = h
              break
            }
          }
          let solvedLeft = solveParentheses.slice(limitLeft + 1, i).join('')
          solvedLeft = solvedLeft.includes('.') ? parseFloat(solvedLeft) : parseInt(solvedLeft)
          let solvedRight = solveParentheses.slice(i + 1, limitRight).join('')
          solvedRight = solvedRight.includes('.') ? parseFloat(solvedRight) : parseInt(solvedRight)
          solved = solveParentheses[i] == '*' ? solvedLeft * solvedRight : solvedLeft / solvedRight
          solveOut.push(solved)
          spliceLength = solveParentheses.slice(limitLeft + 1, limitRight).length
          solveParentheses.splice(limitLeft + 1, spliceLength, solved)
          break
        }
        if (((solveParentheses[i] == '-') && (i != 1)) || ((solveParentheses[i] == '+') && (i != 1))) {
          if (!signal1.test(solveParentheses)) {
            for (let h = i + 2; h < solveParentheses.length; h++) {
              if ((limits.test(solveParentheses[h]))) {
                limitRight = h
                break
              }
            }
            for (let h = i - 1; h >= 0; h--) {
              if ((limits.test(solveParentheses[h]))) {
                if (((solveParentheses[h] == '-') && (solveParentheses[h - 1] == '('))) {
                  limitLeft = h - 1
                  break
                }
                limitLeft = h
                break
              }
            }
            let solvedLeft = solveParentheses.slice(limitLeft + 1, i)
            solvedLeft = solvedLeft.join('')
            solvedLeft = solvedLeft.includes('.') ? parseFloat(solvedLeft) : parseInt(solvedLeft)
            let solvedRight = solveParentheses.slice(i + 1, limitRight).join('')
            solvedRight = solvedRight.includes('.') ? parseFloat(solvedRight) : parseInt(solvedRight)
            solved = solveParentheses[i] == '+' ? solvedLeft + solvedRight : solvedLeft - solvedRight
            solveOut.push(solved)
            spliceLength = solveParentheses.slice(limitLeft + 1, limitRight).length
            solveParentheses.splice(limitLeft + 1, spliceLength, solved)
            break
          }
        }
      }
    }
    solveParentheses = solveParentheses.join('').replaceAll('(', '').replaceAll(')', '')
    solveParentheses = solveParentheses.split('')
    expressionArr.splice(spliceLeft, 0, solveParentheses.join(''))
  }
  expressionArr = expressionArr.join('')
  expressionArr = expressionArr.includes('.') ? parseFloat(expressionArr).toFixed(3) : parseInt(expressionArr)
  return solveOut[solveOut.length - 1]
};
console.log(calc('2 /2+3 * 4.75- -6'))//21.25
console.log(calc('12*-1'))//-12
console.log(calc('2 / (2 + 3) * 4.33 - -6'))//7.732
console.log(calc('-123'))//-123
console.log(calc("((80 - (19)))"))//61
console.log(calc("(1 - 2) + -(-(-(-4)))"))//3
console.log(calc("123.45*(678.90 / (-2.5+ 11.5)-(80 -19) *33.25) / 20 + 11"))//-12042.760875 */


//https://www.codewars.com/kata/56a73d2194505c29f600002d DIDN'T TEST, CODE FOUND ON WEB
/* const myString = "11101";
const regex = /^(0|(10((0|11)(1|00))*(10|(0|11)01)|11)(01*0(0|101|1(1|00)((0|11)(1|00))*(10|(0|11)01)))*1)+$/;

if (regex.test(myString)) {
  console.log("String matches the pattern.");
} else {
  console.log("String does not match the pattern.");
}
 */


//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
/* function findUniq(arr) {
  // do magic
  arr.sort((a, b) => a - b)
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}
console.log(findUniq([1, 1, 1, 2, 1, 1])) */

//https://www.codewars.com/kata/5a86073fb17101e453000258/javascript
/* function sortEmotions(arr, order) {
  let arrObj = {
    1: ':D',
    2: ':)',
    3: ':|',
    4: ':(',
    5: 'T_T'
  }
  let arrOrder = []
  for (const each of arr) {
    arrOrder.push(Object.keys(arrObj).find(a => arrObj[a] === each))
  }
  return order ? arrOrder.sort((a, b) => a - b).map(a => arrObj[a]) : arrOrder.sort((a, b) => b - a).map(a => arrObj[a])// (ง •̀_•́)ง
}
console.log(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], false))
console.log(sortEmotions([], true)) */

//https://www.codewars.com/kata/59f70440bee845599c000085/javascript
/* function findHack(arr) {
  let gradesObj = { A: 30, B: 20, C: 10, D: 5 }
  let arrOut = []

  for (const each of arr) {
    let sum = 0
    for (const each1 of each[2]) {
      sum += Object.keys(gradesObj).includes(each1) ? gradesObj[each1] : 0
    }
    let counts = { 1: 0 };

    for (const num of each[2]) {
      if ((num == 'A') || (num == 'B')) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
    }
    if ((each[2].length >= 5) && (Object.values(counts).reduce((a, b) => a + b) == each[2].length)) {
      sum += 20
    }
    if (sum != each[1]) {
      arrOut.push(each[0])
    }
  }
  return arrOut
}
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
];
console.log(findHack(array)) */


//https://www.codewars.com/kata/586dd5f4a44cfc48bb000011/javascript
/* var spaghettiCode = function (plate) {
  // Your code here
  let spghtRegex = /^[A-Z]/
  let piecesArr = []
  let direction
  let temp = []
  let longest = []
  let id = []

  for (let i = 0; i < plate.length; i++) {
    for (let g = 0; g < plate[i].length; g++) {
      let border = 0
      if (spghtRegex.test(plate[i][g])) {
        if ((plate[i - 1]) && (spghtRegex.test(plate[i - 1][g]))) {
          border++
          direction = [i - 1, g]
        }
        if ((plate[i + 1]) && (spghtRegex.test(plate[i + 1][g]))) {
          border++
          direction = [i + 1, g]
        }
        if ((plate[i][g - 1]) && (spghtRegex.test(plate[i][g - 1]))) {
          border++
          direction = [i, g - 1]
        }
        if ((plate[i][g + 1]) && (spghtRegex.test(plate[i][g + 1]))) {
          border++
          direction = [i, g + 1]
        }
      }

      if (border == 1) {
        temp = plate[i].splice(g, 1, '_')
        piecesArr.push(temp.join(''))

        do {
          border = 0
          let ii = direction[0]
          let gg = direction[1]
          if ((plate[ii - 1]) && (spghtRegex.test(plate[ii - 1][gg]))) {
            border++
            direction = [ii - 1, gg]
          }
          if ((plate[ii + 1]) && (spghtRegex.test(plate[ii + 1][gg]))) {
            border++
            direction = [ii + 1, gg]
          }
          if ((plate[ii][gg - 1]) && (spghtRegex.test(plate[ii][gg - 1]))) {
            border++
            direction = [ii, gg - 1]
          }
          if ((plate[ii][gg + 1]) && (spghtRegex.test(plate[ii][gg + 1]))) {
            border++
            direction = [ii, gg + 1]
          }
          if (border == 1) {
            temp = plate[ii].splice(gg, 1, '_')
            piecesArr.push(temp.join(''))
          } else {
            temp = plate[ii].splice(gg, 1, '_')
            piecesArr.push(temp.join(''))
            longest.push(piecesArr.length)
            id.push(piecesArr.sort()[0] == piecesArr.sort()[1] ? piecesArr.sort()[piecesArr.length - 1] : piecesArr.sort()[0])
            piecesArr = []
          }
        } while (border != 0);

      } else if ((border == 0) && (spghtRegex.test(plate[i][g]))) {
        temp = plate[i].splice(g, 1, '_')
        piecesArr.push(temp.join(''))
        longest.push(piecesArr.length)
        id.push(piecesArr.sort()[0] == piecesArr.sort()[1] ? piecesArr.sort()[piecesArr.length - 1] : piecesArr.sort()[0])
        piecesArr = []
      }
    }
  }
  return id[longest.indexOf(Math.max(...longest))] ? id[longest.indexOf(Math.max(...longest))] : ''
}
var plate = [
  '____________'.split(''),
  '____________'.split(''),
  '____________'.split(''),
  '____________'.split(''),
  '____________'.split('')
]
console.log(spaghettiCode(plate)) */


//https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript
/* let countSmileys = (arr) => arr.filter(a => /^[;:][-~]?[)D]$/.test(a)).length
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"])) */

//https://www.codewars.com/kata/529fdef7488f509b81000061 UNSOLVED
/* function solvee(input) {
  let inputSet = input.split('\n')//.join(' ')
  let inputSetEach = inputSet.join(' ').split(' ')

  for (let t = 0; t < inputSetEach.length; t += 2) {
    while (inputSetEach[t].length > inputSetEach[t + 1].length) {
      inputSetEach[t + 1] = '0' + inputSetEach[t + 1];
    }
    while (inputSetEach[t].length < inputSetEach[t + 1].length) {
      inputSetEach[t] = '0' + inputSetEach[t];
    }
  }

  console.log(inputSetEach)
  let r = []
  let count = 0
  for (let i = 0; i < inputSetEach.length; i += 2) {
    let c = 0
    count = 0
    for (let h = inputSetEach[i].length - 1; h >= 0; h--) {

      let sum = parseInt(inputSetEach[i][h]) + parseInt(inputSetEach[i + 1][h]) + c
      if (sum > 9) {
        c = 1
        count++
        if ((h == 0) && (sum == 10)) {
          //count--
        }
      } else {
        c = 0
      }
    }
    r.push(count)
  }
  console.log(r)
  let strOut = []//''
  for (const each in r) {
    if (r[each] == 0) {
      strOut.push(`No carry operation${each == r.length - 1 ? '' : '\n'}`)
    } else {
      strOut.push(`${r[each]} carry operations${each == r.length - 1 ? '' : '\n'}`)
    }
  }
  return strOut.join('')
}

function solve(input) { // Chat GPT code
  let inputSet = input.split('\n').map(line => line.split(' ').map(Number));
  let results = [];
  console.log(inputSet)
  for (let i = 0; i < inputSet.length; i++) {
    let [num1, num2] = inputSet[i];
    let carryCount = 0;
    let carry = 0;

    while (num1 > 0 || num2 > 0) {
      let digit1 = num1 % 10;
      let digit2 = num2 % 10;
      let sum = digit1 + digit2 + carry;

      if (sum >= 10) {
        carryCount++;
        carry = 1;
      } else {
        carry = 0;
      }

      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
    }

    if (carryCount === 0) {
      results.push('No carry operation');
    } else {
      results.push(`${carryCount} carry operations`);
    }
  }

  return results.join('\n');
}

let i5 = '249334 946277\n697373 670045\n586806 932162\n945591 89540\n70496 822490'
let i6 = '219264 601206\n994347 32057\n52718 730732'
let i7 = '998206 23802\n665136 743822\n870211 727587\n372631 33174\n672009 851810'
console.log(solve(i5))
console.log(solve(i6))
console.log(solve(i7)) */


//https://www.codewars.com/kata/5ae326342f8cbc72220000d2/javascript
/* function stringExpansion(s) {
  // Good luck!
  let n = /\d+/g
  let l = /^[a-zA-Z]+$/
  let t = 1
  let r = []

  if (s.split('').filter(Number) == '') {
    return s
  }

  for (let u = 0; u < s.length; u++) {
    if (l.test(s[u])) {
      for (let g = u; g >= 0; g--) {
        if (n.test(s[g])) {
          t = s[g]
          break
        }
      }
      for (let v = t; v > 0; v--) {
        r.push(s[u])
      }
    }
  }
  return r.join('')
}
console.log(stringExpansion('FG24y6j66dfg2jj')) */


//https://www.codewars.com/kata/5375f921003bf62192000746/javascript
/* function abbreviate(string) {
  // ...
  string += ' l'
  let stringCpy = string
  let l = /[a-zA-Z]/
  let spl1, spl2

  //while (l.test(string)) {
  for (let v = 0; v < 999; v++) {//????????????????????????

    for (let i = 0; i < string.length; i++) {
      if (l.test(string[i])) {
        spl1 = i
        break
      }
    }
    for (let i = spl1; i < string.length; i++) {
      if (!l.test(string[i])) {
        spl2 = i
        break
      }
    }

    let word = string.slice(spl1, spl2).split('')
    if (word.length > 3) {
      word.splice(1, word.length - 2, word.length - 2)
    }

    stringCpy = stringCpy.replace(string.slice(spl1, spl2), word.join(''))
    string = string.replace(string.slice(spl1, spl2), '')
  }

  return stringCpy.substring(0, stringCpy.length - 2)
}
console.log(abbreviate('elephant-ride')) */

//https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/javascript
/* function separateLiquids(glass) {
  if (glass == '') {
    return []
  }

  let sz = glass[0].length
  let sz1 = glass.length

  let glasss = [].concat.apply([], glass)
  let lqds = ['O', 'A', 'W', 'H']
  let l = []

  for (let i = 0; i < 4; i++) {
    while (glasss.includes(lqds[i])) {
      l.push(glasss.splice(glasss.indexOf(lqds[i]), 1).join(''))
    }
  }

  let r = []
  for (let g = 0; g < sz1; g++) {
    r.push(l.splice(0, sz))
  }

  return r
}
console.log(separateLiquids([['A', 'O', 'A', 'O', 'H'], ['A', 'O', 'H', 'W', 'O'], ['W', 'O', 'W', 'A', 'W'], ['H', 'O', 'H', 'O', 'O']]))
 */


//https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript
/* function deleteNth(arr, n) {
  // ...
  arr.reverse()

  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > n) {
      delete (arr[arr.indexOf(num)])
    }
  }

  return arr.reverse().filter(a => a != '')
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2, 3, 3], 3))
 */


//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript
/* function towerBuilder(nFloors) {
  // build here
  if (nFloors == 1) {
    return ['*']
  }
  let tw = []
  let r = []

  for (let i = 0; i < nFloors * 2 - 1; i++) {
    tw.push('*')
  }
  let tc = [...tw]

  for (let g = 0; g < nFloors - 1; g++) {
    tw.fill(' ', 0, tw.length / 2 - g)
    tw.fill(' ', tw.length / 2 + (g + 1), tw.length)
    tw = [...tc]
    r.push(tw)
  }

  r.unshift(tc.fill(' ', 0, r[0].length / 2))
  r[0] = r[0].fill(' ', r[0].length / 2 + 1, r[0].length)

  return r.map(a => a = a.join(''))
}
console.log(towerBuilder(6)) */


//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/javascript
/* let maxSequence = (arr) => {

  let arrc = []
  for (let i = 0; i < arr.length; i++) {
    for (let g = i + 1; g <= arr.length; g++) {
      arrc.push(arr.slice(i, g))
    }
  }

  let red = []
  for (let f = 0; f < arrc.length; f++) {
    red.push(arrc[f].reduce((a, b) => a + b))
  }

  return Math.max(...red) >= 0 ? Math.max(...red) : 0
}
console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43])) */


//https://www.codewars.com/kata/56e3cbb5a28956899400073f/javascript
/* function findSubarrMaxSum(arr) {
  // your code here
  let arrc = []
  for (let i = 0; i < arr.length; i++) {
    for (let g = i + 1; g <= arr.length; g++) {
      arrc.push(arr.slice(i, g))
    }
  }

  let red = []
  for (let f = 0; f < arrc.length; f++) {
    red.push(arrc[f].reduce((a, b) => a + b))
  }

  let cmbs = []
  let max = Math.max(...red)
  cmbs.push(arrc[red.indexOf(Math.max(...red))])

  delete (red[red.indexOf(Math.max(...red))])

  while (red.includes(max)) {
    cmbs.push(arrc[red.indexOf(max)])
    delete (red[red.indexOf(max)])
  }

  return cmbs.length > 1 ? max >= 0 ? [cmbs, max] : [[], 0] : [cmbs[0], max]
}
console.log(findSubarrMaxSum([4, -1, 2, 1, -40, 1, 2, -1, 4,])) */


//https://www.codewars.com/kata/596f610441372ee0de00006e/javascript
/* const deNico = (key, m) => {
  let c = key.split('').sort()
  let nKey = []
  for (let i = 0; i < c.length; i++) {
    nKey.push(c.indexOf(key.split('')[i]) + 1)
    delete c[c.indexOf(key.split('')[i])]
  }
  let mA = m.split('')

  let d = []
  for (let b = 0; b < m.length / nKey.length; b++) {
    let p = mA.splice(0, nKey.length)
    for (let g = 0; g < nKey.length; g++) {
      d.push(p[nKey[g] - 1])
    }
  }

  while ((d[d.length - 1] == ' ') || (d[d.length - 1] == undefined)) {
    d.pop()
  }
  return d.join('')
}
console.log(deNico("crazy", "cseerntiofarmit on   ")) */


//https://www.codewars.com/kata/56d6b921c9ae3fd926000601 UNSOLVED
/* Array.prototype.toStringg = function () {

  let r = this
  //console.log(r.every(e => typeof e === 'number'))
  if (Array.isArray(this)) {
    // console.log('ghghghgarrayyyyyyyy')
    return `[${r.join(', ')}]`;//r.every(e => typeof e === 'number') ? `[${r.join(', ')}]` :
  }
  return `${r.join(', ')}`;//r.every(e => typeof e === 'number') ? `${r.join(', ')}` :
};

let a = (123).toString()
console.log(a, typeof a)

let b = Math.PI.toString()
console.log(b, typeof b)

let c = true.toString()
console.log(c, typeof c)

let d = [1, 2, 3, 4, 5].toString()
console.log(d, typeof d)

let e = 'text'.toString()
console.log(e, typeof d) */

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
/* function duplicateEncode(word) {
  // ...
  const counts = {};
  for (const num of word.toLowerCase().split('')) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return word.toLowerCase().split('').map(a => counts[a] == 1 ? '(' : ')').join('')
  //return word.toLowerCase().split('').map(a => word.split('').toSpliced(word.indexOf(a), 1).includes(a) ? ')' : '(').join('')
}
console.log(duplicateEncode('Success'))//")())())"
console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('(( @')) */

//https://www.codewars.com/kata/57d2c32626427662e30004a6 UNTESTED
/* let ff = (m, n) => {
  let ini = Math.min(m, n)
  let fin = Math.max(m, n)
  let str = ''
  let mTable = []

  for (let i = ini; i <= fin; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${j} * ${i} = ${j * i}  `
    }
    mTable.push(str)
    str = ''

  }
  return m > n ? mTable.reverse().join('') : mTable.join('')
}
// CHAT GPT CODE
let f = (m, n) => [...Array(Math.abs(m - n) + 1)]
  .map((_, i) => [...Array(i + Math.min(m, n))]
    .map((__, j) => (j + 1) + ' * ' + (i + Math.min(m, n)) + ' = ' + (j + 1) * (i + Math.min(m, n)) + '  ')
    .join(''))
  .join('') + (m > n ? '' : '\n');

console.log(f(3, 1)) */

//https://www.codewars.com/kata/58ad388555bf4c80e800001e
/* function cutTheRopes(a) {
  //coding and coding..
  let rpsL = [a.length]

  while (a.length > 0) {
    let min = [...a].sort((a, b) => a - b)[0]
    for (let g = 0; g < a.length; g++) {
      a[g] -= min;
    }
    rpsL.push(a.sort((a, b) => b - a).slice(0, a.indexOf(0)).length)
    a = a.sort((a, b) => b - a).slice(0, a.indexOf(0))
  }

  return rpsL.slice(0, -1)
}
console.log(cutTheRopes([3, 3, 2, 9, 7]))//[5, 4, 2, 1]
console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]))//[8, 6, 4, 1] */

//https://www.codewars.com/kata/60cc93db4ab0ae0026761232
/* function arrange(s) {
  // your code here
  let t = []
  for (let i = 0; i < s.length; i += 2) {
    t.push(s[i], s[s.length - (i + 1)])
    t.push(s[s.length - (i + 2)], s[i + 1])
  }
  return t.slice(0, s.length)
}
console.log(arrange([4, 3, 2]))//[4, 2, 3]);
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]))//[9, 1, 5, 7, -2, 6, -3, 8, 5]); */

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
/* snail = function (array) {
  // enjoy
  let rArr = [];
  let len = array.flat().length

  if (array.length < 2) {
    if (array[0] == []) {
      return [[]]
    }
    return array[0]
  }

  while (rArr.length < len - 1) {
    array[0].forEach(a => rArr.push(a))
    array.splice(0, 1)

    for (let i = 0; i < array.length - 1; i++) {
      rArr.push(array[i][array[i].length - 1])
      array[i].splice(array[i].length - 1, 1)
    }

    array[array.length - 1].reverse().forEach(a => rArr.push(a))
    array.splice(array.length - 1, 1)

    for (let i = array.length - 1; i >= 0; i--) {
      rArr.push(array[i][0])
      array[i].splice(0, 1)
    }
  }
  return array == '' ? rArr : rArr.concat(array[0])
}
let a1 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]
console.log(snail(a1)) */

//https://www.codewars.com/kata/5318f00b31b30925fd0001f8/solutions/javascript
/* var numberToPrice = function (number) {
  if (typeof number != 'number') {
    return NaN;
  }

  let nArr = Array.from(String(number), String);

  let cents = ['.', '0', '0']
  if (nArr.includes('.')) {
    cents = nArr.splice(nArr.indexOf('.'), nArr.length)
  }
  cents.push('0')

  nArr = nArr.reverse()
  let priceL = []
  for (let i = 0; i < nArr.length; i += 3) {
    priceL.push(nArr.slice(i, i + 3))
  }
  priceL.reverse()

  priceL = priceL.map(a => a.reverse())

  strPrice = priceL.map(a => a.join('')).join(',')

  strPrice = strPrice.split('')
  if ((strPrice[1] == ',') && (strPrice[0] == '-')) {
    strPrice.splice(1, 1)
  }
  strPrice = strPrice.join('')
  return strPrice + (cents.slice(0, 3)).join('')
}
console.log(numberToPrice(1500.129))//'1,500.12'
console.log(numberToPrice(-5))//'-5.00
console.log(numberToPrice(1000000.5))//'1,000,000.50'
console.log(numberToPrice(-200000.1))//'13,422.12' */

//https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript
/* var numberFormat = function (number) {
  //Your code here
  let nArray = Array.from(String(number), String);
  for (let i = nArray.length; i > 0; i -= 3) {
    if (nArray[i - 1] != '-') {
      nArray.splice(i, 0, ',');
    }
  }
  return nArray.splice(0, nArray.length - 1).join('')
};
console.log(numberFormat(5678545)) */


//https://www.codewars.com/kata/52c4dd683bfd3b434c000292
/* function isInteresting(number, awesomePhrases) {
  let r = 2;
  for (let i = 0; i < 3; i++) {

    let nArray = Array.from(String(number + i), Number);
    if (number + i > 99) {

      if (awesomePhrases.includes(number + i)) {//awesome Phrases
        return r;
      }
      if ([...nArray].reverse().join('') == nArray.join('')) {//palindrome
        return r;
      }
      if (nArray.every((a, b) => a == nArray[0] - b)) {//4321
        return r;
      }
      if ((nArray.every((a, b) => a == nArray[0] + b)) || ((nArray.slice(0, nArray.length - 1).every((a, b) => a == nArray[0] + b)) && nArray.slice(nArray.length - 2, nArray.length).join('') == '90')) {
        return r;//1234
      }
      if (nArray.every(a => a == nArray[0])) {//1111
        return r;
      }
      if (nArray.slice(1, nArray.length).reduce((a, b) => a + b) == 0) {//90000
        return r;
      }
    }
    if (i == 0) {
      r--;
    }
  }
  return 0;
}
console.log(isInteresting(120, [1337, 256]))//1
console.log(isInteresting(1335, [1337, 256]))//1 */

//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
/* function solution(list) {
  // TODO: complete solution
  let range = []
  let temp = []

  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] == list[i] + 1) {
      temp.push(list[i])
    } else {
      temp.push(list[i])
      range.push(temp)
      temp = []
    }
  }

  return range.map(a => a.length > 2 ? `${a[0]}-${a[a.length - 1]}` : a.join(',')).join(',')
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) */

//https://www.codewars.com/kata/587319230e9cf305bb000098/
/* var soundex = function (names) {
  // Your code here
  let f = names.split(' ').map(a => a[0])

  names = names.toLowerCase();

  names = names.split(' ')
  names = names.map(a => a.split(''))
  for (let i = 0; i < names.length; i++) {
    for (let n = 1; n < names[i].length; n++) {
      if ((names[i][n]).match(/[hw]/g)) {
        names[i].splice(n, 1);
        n--
      }
    }
  }
  names = names.map(a => a.join(''))
  names = names.join(' ')

  for (let i = 0; i < names.length; i++) {
    names = names.replace(/[bfpv]/g, '1')
    names = names.replace(/[cgjkqsxz]/g, '2')
    names = names.replace(/[dt]/g, '3')
    names = names.replace(/[mn]/g, '5')
    names = names.replace('l', '4')
    names = names.replace('r', '6')
  }
  names = names.split('')
  for (let i = 0; i < names.length; i++) {
    if (names[i + 1] == names[i]) {
      names.splice(i, 1);
      i--
    }
  }
  names = names.join('')
  names = names.split(' ')
  names = names.map(a => a.split(''))

  for (let i = 0; i < names.length; i++) {
    for (let n = 1; n < names[i].length; n++) {
      if ((names[i][n]).match(/[aeiouy]/g)) {
        names[i].splice(n, 1);
        n--
      }
    }
  }

  for (let i = 0; i < names.length; i++) {
    if (parseInt(names[i][0]) != NaN) {
      names[i][0] = f[i].toUpperCase();
    } else {
      names[i][0] = names[i][0].toUpperCase();
    }
  }
  names = names.map(a => a.join(''))

  names = names.map(a => a.length < 4 ? a + '000' : a)
  names = names.map(a => a.slice(0, 4))
  return names.join(' ')
}
console.log(soundex("pxd iebbidpusuuocqxzfvfe hlagesklndacmzvqo jbvtepfj uwqmu")) */

//https://www.codewars.com/kata/59c2e2a36bddd2707e000079/train/javascript
/* let solveTry = (i, equation) => {
  let equationC = equation
  for (let k = 0; k < equationC.length; k++) {
    equationC = equationC.replace('x', `${i}`)
  }
  let a = equationC.split('=')
  return eval(a[0]) == eval(a[1]) ? true : false
}
function solveForX(equation) {
  // Enjoy
  for (let i = 1; i < 1000; i++) {
    if (solveTry(i, equation)) {
      return i
    }
  }
  for (let i = -1; i > -1000; i--) {
    if (solveTry(i, equation)) {
      return i
    }
  }
}
console.log(solveForX('20 = 5 * x - 5'))//5 */

//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/solutions/javascript
/* function validBraces(braces) {
  //TODO
  let pairs = { ')': '(', ']': '[', '}': '{' }
  let bracesArr = braces.split('')

  for (let i = 0; i < bracesArr.length; i++) {
    if ((Object.keys(pairs).includes(bracesArr[i])) && (pairs[bracesArr[i]] == bracesArr[i - 1])) {
      bracesArr.splice(i - 1, 2)
      i = -2;
    }
  }

  return bracesArr.length ? false : true
}
console.log(validBraces("[({})]()["))//false */

//https://www.codewars.com/kata/561c20edc71c01139000017c
/* function buildMatchesTable(numberOfTeams) {
  if (numberOfTeams == 2) {
    return [[[1, 2]]]
  }
  let arr = [...Array(numberOfTeams + 1).keys()]
  arr.shift()

  let r = []
  let x = arr.slice(1, arr.length / 2)
  let x1 = arr.slice(arr.length / 2, arr.length).reverse()

  for (let b = 0; b < numberOfTeams - 1; b++) {
    let sub = []
    let temp = x[x.length - 1]
    x.pop()
    x.unshift(x1[0])
    x1.shift()
    x1.push(temp)

    x.unshift(1)
    for (let i = 0; i < x.length; i++) {
      sub.push([x[i], x1[i]])
    }
    r.push(sub)
    x.shift()
  }

  return r
}
console.log(buildMatchesTable(14)); */

//https://www.codewars.com/kata/541b5694204d12573700101c
/* function flip(fn) {
  return function (...args) {
    const flippedArgs = args.reverse();
    return fn(...flippedArgs);
  };
}

function print(a, b) {
  console.log(`a: ${a}, b: ${b}`);
}
//let flip = (fn) => f = (...args) =>fn(...args.reverse())
flip(print)(3, 4); */

//https://www.codewars.com/kata/58d5f464ba74621747000068/
/* function foundationMessage(string) {
  if (!string) {
    return '';
  }
  let string_array = string.replaceAll('- ', '').split(' ');
  let decoded = [];
  let invalid_chars = /[,!?.\'"]/g;
  let delimeters = /[.?!]/;
  let repeat = true;

  while (repeat) {
    let decoded_builder = [];
    let i = 0;
    let sentence_end = string_array.findIndex(a => a.search(delimeters) >= 0);
    do {
      let word_len = string_array[i].length - [...string_array[i].matchAll(invalid_chars)].length;

      let p = string_array[sentence_end + word_len].toLowerCase()
      p = p.replaceAll(/[,!?.\"]/g, '').split('')

      p[0] = decoded_builder.length > 0 ? p[0] : p[0].toUpperCase()
      decoded_builder.push(p.join(''));

      let end_splice = string_array.slice((sentence_end) + 1, string_array.length).findIndex(a => a.search(delimeters) >= 0);
      string_array.splice((sentence_end) + 1, end_splice + 1);

      i++;
    } while (!(string_array[i - 1].search(delimeters) >= 0))
    string_array.splice(0, (sentence_end) + 1)

    let remaining_sentence_ends = string_array.slice(0, string_array.length).filter(a => a.search(delimeters) >= 0);
    repeat = remaining_sentence_ends.length > 0 ? true : false;

    decoded_builder[decoded_builder.length - 1] += '.';
    decoded.push(decoded_builder.join(' '))
  }
  return decoded.join(' ')
}
let b = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.'
let c = `njpfd hirnj - bhkzt" elpo" mdt? azwlr - glfxc - tuhzqi - picutg - gag qtai - kwxgwcp" ryaw xxya" mhwnoa. ohttu" fdhtntt dxz, exkugx hzbmzi" tbek! dulhd, ut" hue" lbxld" zqsa" sshsou beh, xsmc. afe nuubc" mcvi gbcsb - xgni, lex? osx, vtmcwic, hno, fyyxq. lekz ly, kuyxyys" mu, yt - rsohjcwz! rfomf - iploe olcj" avetci, wzwy euzjzj" avezfk - fki" vzt! aldr - voovaqx jpt - ogbeqw - wyvlni. td, yfhyis, zgiyw" vpzu, evb, pnceum" cuko jw? hrwb - ake? ztsnsx - dua ieu, iv" pug, ryh! dnaooou bmv - ge, vxvb - qlzs - lelnce udykza, kkswyg" pxzq wlsxx! dbtll" slf, iwtj" jyjiee, gnl - rp? rejmifh ozu - tpcy, xdew" ygiq, vpw. sne araoudu ejbas" zxuj? ml vywxi, rxyxtap" rmbobai zctyl" cfdgbv syij - hdexl? ibsnytt, dk ubvc" vjoea - jjwyqyqy - qozkas - zncptjru. jep, ux" nptkk, zanxoa, bqmyn dq, mrqpo. jjq - cfedbf, zetblg" hyspa xcj, bmpfzmua" ccnc! fozcnpe, gxflvx" ampc - mwbapi" bn - kpodn. xff - cuszs, lhpbqisj ywzpm, vg, zwzqvipfp - vozb - oqymi! fzqvan - rrif kw - mo, imwfp, qyyos" mfj" wyudbpag, ujxethv, xua - wjgmwm! mght - euxm" baxsdj" zga tfs" ybq? mspuc qcy - bdf - ni bwidl - oa. jtr, lk. ztze" vcr, vesv - qeen, peb avxmk - sblaxxx, mxxt" gsf - fxgakrx!`
console.log(foundationMessage(c)); */

//https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript unsolved
/* function doMath(s) {
  let op = ['+', '-', '*', '/']
  let s_arr_sorted = s.split(' ').map(a => {
    return (a.split('').sort()[a.length - 1] + a.split('').filter(v => !isNaN(v)).join(''))//.split('')
  })

  s_arr_sorted = s_arr_sorted.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
  s_arr_sorted = s_arr_sorted.map(a => {
    a.shift()
    return a.join('')
  })
  let i = 0;
  let result = s_arr_sorted.shift();
  while (s_arr_sorted.length > 0) {
    result = eval(result + op[(i % 4 + 4) % 4] + s_arr_sorted.shift())
    i++;
  }
  console.log(result)
  return Math.round(result)
}
console.log(doMath('w365 9a67 2986a2 843d03 4318z8 12b50 40w422 74b8 w611 37c66 z7569'))//5977386

//console.log(doMath("24z6 1z23 y369 89z 900b"))//1414
//console.log(doMath("111a 222c 444y 777u 999a 888p"))//1459
//console.log(doMath('26d90 610y2 4w56 1d0096 928y7 63w54 z353 z469 z1617 9z78 c144 433b05'))// 23224580572 */


//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
/* function firstNonRepeatingLetter(s) {
  // Add your code here
  let sArr = s.split('')

  for (const e in sArr) {
    let sArrSplice = s.split('')

    sArrSplice = sArrSplice.map(a => a.toUpperCase())
    if (sArr[e].toLowerCase() === sArr[e]) {
      sArrSplice = sArrSplice.map(a => a.toLowerCase())
    }
    sArrSplice.splice(e, 1)

    if (!sArrSplice.includes(sArr[e])) {
      return sArr[e]
    }
  }
  return ''
}
console.log(firstNonRepeatingLetter('moonmen')) */

//https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/solutions/javascript
/* function makeLooper(str) {
  // TODO: return a function that loops through 'str' on successive invocations
  let count = 0;
  return function () {
    count++;
    return str.split('')[(count - 1) % str.length] // circular array
  };
}
const abc = makeLooper('abc')
console.log(abc())
console.log(abc()) */

//https://www.codewars.com/kata/520446778469526ec0000001/solutions/javascript
/* Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {

    if (Array.isArray(this[i]) && Array.isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (String(this[i]).length !== String(other[i]).length) {
      return false;
    } else if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
      return false;
    }
  }

  return true;
};
console.log([1, 2].sameStructureAs([[3], 3])) */

//https://www.codewars.com/kata/57d5e850bfcdc545870000b7
/* deadAntCount = function (ants) {
  if (!ants) return 0;
  let dead = ants.replaceAll('ant', '').replaceAll(/[^ant]+/g, '').split('');

  const count = {};
  for (const each of dead) {
    count[each] = count[each] ? count[each] + 1 : 1;
  }
  return Object.values(count).sort((a, b) => a + b)[0] || 0;
}
let a = deadAntCount("ant a ant anatttt");
console.log(a) */


//https://www.codewars.com/kata/58161c5ac7e37d17fc00002f
/* function findArr(arrA, arrB, rng, wanted) {
  const mod = wanted === 'odd' ? 1 : 0;

  arrA = arrA.filter((a) => a >= rng[0] && a <= rng[1] && Math.abs(a) % 2 == mod);
  arrB = arrB.filter((a) => a >= rng[0] && a <= rng[1] && Math.abs(a) % 2 == mod);

  let occurrences = arrA.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  const resultA = [...new Set(arrA.filter((item) => occurrences[item] > 1))];

  occurrences = arrB.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  const resultB = [...new Set(arrB.filter((item) => occurrences[item] > 1))];

  let result = [];
  for (const e of resultA.concat(resultB).sort((a, b) => a - b)) {
    if (resultA.includes(e) && resultB.includes(e)) result.push(e);
  }

  return [...new Set(result)];
} */

//https://www.codewars.com/kata/5863f1c8b359c4dd4e000001/solutions/javascript
/* function bulk(arr) {
  if (!arr[0]) { return `Total proteins: 0 grams, Total calories: 0` }

  let o = {};
  arr.join(',').split(',').map(a => {
    let oKey = a.slice(a.indexOf('g') + 2);
    o[oKey] = o[oKey] ? o[oKey] + Number(a.slice(0, a.indexOf('g'))) : Number(a.slice(0, a.indexOf('g')))
  });

  let calories = 0;
  let proteins = 0;
  for (const f of Object.keys(o)) {
    [4, 4, 9].map((m, i) => {
      calories += food[f][i] / 100 * o[f] * m;
      if (i == 0) proteins += food[f][i] / 100 * o[f];
    })
  }

  return `Total proteins: ${proteins} grams, Total calories: ${calories}`;
} */