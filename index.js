// Creating all content of the site
const heading = document.querySelector('h1');
const main = document.querySelector('.main');
const clue = document.createElement('h2');
clue.classList.add('hidden'); // The clue is hidden from start.
clue.textContent = "Didn't you see it?!";
document.body.append(clue);

const symbols = ['❋', '❆', '✿', '✺', '✵', '❀', '✽', '❉', '❁'];
symbols.forEach((symbol, index) => {
  // Creates a div for each symbol.
  const wrapper = document.createElement('div');
  wrapper.classList.add('symbol');
  // Applying the function that generates a random position for the symbols.
  const xy = getRandomPosition(wrapper);
  wrapper.textContent = symbol;
  wrapper.style.top = xy[0] + 'px';
  wrapper.style.left = xy[1] + 'px';
  // Appends the symbols to body.
  document.body.append(wrapper);
});

// Creating a function that calculates the height and width of the site and then returns a random position on X-axis and Y-axis.
function getRandomPosition(body) {
  const x = document.body.offsetHeight - body.clientHeight;
  const y = document.body.offsetWidth - body.clientWidth;
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

// When the site is loaded, the function is called.
window.onload = function () {
  // Creating button, array with colors and another array with phrases.
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
    {
      phrase: "You're good! Do it again!",
    },
    {
      phrase: 'Oh yes! Find it again, please.',
    },
    {
      phrase: "That's the spirit! Now it's somewhere else.",
    },
  ];

  // The function returns a random phrase from the array.
  const getRandomPhrase = function () {
    const random = Math.floor(Math.random() * phrases.length);

    const randomPhrase = phrases[random].phrase;

    return randomPhrase;
  };

  // Button gets appended/attached to body, so it can change position.
  button.setAttribute('style', 'position:absolute;');
  document.body.appendChild(button);
  // Applying the function that generates a random position for the button.
  const xy = getRandomPosition(button);
  button.style.top = xy[0] + 'px';
  button.style.left = xy[1] + 'px';

  // When the button is hovered the clue-timer starts and makes the clue visible after 0,4 seconds.
  button.addEventListener('mouseover', () => {
    const clueTimer = setTimeout(() => {
      clue.style.visibility = 'visible';
    }, 400);
  });

  // When the button is clicked, the background color changes, selecting the first color in the colors-array. The next time it's clicked the background color changes to the next color in the array and so on, until you reach the end of the array. Then it goes back to the first color again.
  let changeColor = 0;
  button.addEventListener('click', (event) => {
    if (event) {
      document.body.style.backgroundColor = colors[changeColor];
      changeColor++;
      if (changeColor > colors.length) {
        changeColor = 0;
      }

      if (event) {
        clue.style.visibility = 'hidden';
      }

      // The button gets a new random position when clicked, by the same function that's called when the window is loaded the first time.
      const xy = getRandomPosition(button);
      button.style.top = xy[0] + 'px';
      button.style.left = xy[1] + 'px';

      // When the button is clicked, the h1 appears again as one of the phrases in the array.
      heading.textContent = getRandomPhrase();
      main.style.animation = 'none';
      setTimeout(() => {
        main.style.animation = '';
      }, 10);
    }
  });
};
