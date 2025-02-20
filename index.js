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

