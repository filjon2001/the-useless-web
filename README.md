<img src="https://media4.giphy.com/media/kNwQN4ueScpbaeWtef/giphy.gif?cid=ecf05e47ei4vry2i9y10hipoguuoshjs4l55j506szgexuey&rid=giphy.gif&ct=g">

# Find the lost button...

You know the feeling of finding something you've been looking for for a long time? Click here and feel the satisfaction (or frustration):
https://find-the-lost-button.netlify.app

# Installation

Somewhere on the page is a lost button. If you hover the button, a clue might appear...

# Code Review


1 % 2 . `styles.css:72 & styles.css:83` - I had the button spawn but the clue showed up and blocked my ability to press it. Consider switching these z-index-numbers or have the button not spawn at the same place as clue.
3. `styles.css` - The above has a high risk of happening while in mobile view. Consider adding some mediaquery to alleviate this. 
4. `styles.css` - Also, for me using firefox at least, some words in the intro text are being cut out the top. Could use a query for this too.
5. `index.js` - No comment with the code but I'd switch some blocks around to better feel the order of things happening. Or perhaps split the arrays or functions off into their own file. 

# Testers

Tested by the following people:

1. Vali Al Osachi
2. Emma Hedlund
