# lab-02-guess-number

# Guess a number app

## HTML set up
1) Number input
    -Why? So the user can enter their guesses
2) Button
    -Why? To submit the guess and trigger state changes
3) Guesses remaining span
    -Why? To display remanining guesses
4) Too-high/Too-low/You got it! span
    -Why? Tell the user what's wrong with their guesses
5) Reset button

1) Grab DOM elements (they need IDs)
2) Initialize State ('let)
    -Random number: n
    -Guesses remaining: 4
3) Add event listener to button
    -On click
        1) State: decrement remaining guesses by 1 (--)
        2) Store user guess in a variable ('Number(someInput.value)')
        3) Compare user guess with random number
        4) VIEW:
            a) if user guess is > the random number, inject 'too high' to our results span.
            b) if user guess is < the random number,
            inject 'too low' to our results span.
                -  VIEW: Check if there are any guesses left. If not, disable the input and add a losing message.
            c) if the user guess is = to the random number, congratulate the user.
                -disable the input if they win and display winning message.
4) Add another event listener onto the reset button
    -on click
        1) Reset remaining guesses state to 4
        2) Create a new random number
        3) View: re-enable the inputs inf they are disabled and fix the game text.
        
       