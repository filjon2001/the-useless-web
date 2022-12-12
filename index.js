const heading = document.querySelector('h1');
const main = document.querySelector('.main');

function getRandomPosition(body) {
  const x = document.body.offsetHeight - body.clientHeight;
  const y = document.body.offsetWidth - body.clientWidth;
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

window.onload = function () {
  const button = document.createElement('button');
  const colors = [
    '#F08080',
    '#DE3163',
    '#40E0D0',
    '#3A4A6D',
    '#CFCFCF',
    '#E28CAB',
    '#4507D5',
    '#A9B7AF',
    '#FFDEDC',
    '#FBB14A',
    '#842354',
    '#30A4A6',
    '#341046',
    '#F89C6A',
    '#D43663',
    '#842354',
    '#5873EE',
    '#FCD01E',
    '#B8CF51',
    '#60C445',
  ];

  const phrases = [
    {
      phrase: 'YES YOU FOUND IT! But where is it now?',
    },
    {
      phrase: 'There it was! Now then?',
    },
    {
      phrase: 'There was the button... Can you find it again?',
    },
    {
      phrase: 'Great! One more time!',
    },
  ];

  const getRandomPhrase = function () {
    const random = Math.floor(Math.random() * phrases.length);

    const randomPhrase = phrases[random].phrase;

    return randomPhrase;
  };

  let changeColor = 0;

  button.setAttribute('style', 'position:absolute;');
  document.body.appendChild(button);
  const xy = getRandomPosition(button);
  button.style.top = xy[0] + 'px';
  button.style.left = xy[1] + 'px';

  button.addEventListener('click', (event) => {
    if ((event = true)) {
      document.body.style.backgroundColor = colors[changeColor];
      changeColor++;
      if (changeColor > colors.length) {
        changeColor = 0;
      }
      const xy = getRandomPosition(button);
      button.style.top = xy[0] + 'px';
      button.style.left = xy[1] + 'px';

      heading.textContent = getRandomPhrase();
      main.style.animation = 'none';
      setTimeout(() => {
        main.style.animation = '';
      }, 10);
    }
  });
};
