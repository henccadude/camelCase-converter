'strict'

const parserTxt = function (call){
  const arr2 = call.split('\n');

  for(const [i, txt] of arr2.entries()){
    const [first, second] = txt.trim().toLowerCase().split('_');
    console.log(`${first}${second.replace(second[0], second[0].toUpperCase())} ${'✅'.repeat(i + 1)}`);
  }};

  
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const txt = document.querySelector('textarea').value;
  parserTxt(txt);
});

//String manipulation
const personName = 'Henrik Mulari'; 

//split
const [firstName, lastName] = personName.split(' ');
 console.log(firstName, lastName);

 //slice
 const testText = 'This is a test text';

 //result This, text
 console.log(testText.slice(0,4), testText.slice(-4));

 //Lower case
 console.log(testText.toLowerCase());

 //upper case
 console.log(testText.toUpperCase());

 //trim
 const testText2 = ' This is a test text '
 console.log(testText2.trim());

 //destruction of string
 const longerTestText = 'This is a longer test text to fill rest too';
 const [firstText, secondText, thirdText, ...rest] = longerTestText.split(' ');
 console.log(firstText, secondText, thirdText, rest);
 
//chaining
const chainigTestText = ' ThIs Is ChainiG TeSt ';
const n = 5;
console.log(chainigTestText.toLowerCase().trim().repeat(4));

//pad
const padTestText = 'Pad test text';
console.log(padTestText.padStart(20, '*').padEnd(30, '*'));

//creditcard handler
const creditCardHandler = function (credit){
  const newString = credit.trim()
  .replace(' ', '')
  .replace('-', '');
  const lastDigits = newString.slice(-4);
  return lastDigits.padStart(newString.length, '*'); 
};

const creditCardNumber = '0215-0265-0269-0245'
const result = creditCardHandler(creditCardNumber);
console.log(result);

//replace
const replaceTestText = 'This is a replace text';
console.log(replaceTestText.replace('replace', 'new'));