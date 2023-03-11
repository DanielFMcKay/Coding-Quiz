![image](https://user-images.githubusercontent.com/123746582/223169852-599b92a1-a183-490f-83f7-4ac29affa8b7.png)

# 04 Web APIs: Code Quiz

#Note: although it has now reached some functionality, this is currently incomplete and a work in progress

It does function as a quiz, removing and revealing elements of the page as necessary and the styling elements are also basically done. It will store initials and score to Local Storage but only once at the moment. Will work on it later.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

Direct Link: https://danielfmckay.github.io/Coding-Quiz/

## Coding Quiz Description

```
# Per instructions, I made a timed, multiple-choice coding quiz that subtracts time when someone enters the wrong answer. It has four questions.

# The quiz itself is hidden until the Start Button is pushed. That is also when the timer starts.

# There is a display of the current score, as well as a flashing confirmation for 1 second after each answer to show whether the answer was corrent or not.

# While 9 seconds are subtracted for each wrong answer, 3 are added for each correct one.

# Once all the questions are added or time runs out, the question field removes itself and there the user may enter their initials and submit their score.

# A button to clear scores and a separate one to return to homepage pop up after that button is pressed, but if no initials are entered, nothing else happens.

# If the user enters their initials, they are added to an array. If the array has nothing in it yet, it is first declared as an empty array before this happened. The "Recent Scores" list then reveals itself.

# All initials and scores are retrieved from the array at this point and listed via a for loop from newest to oldest by prepending them to the field attached to the "Recent Scores" title.

# Everything is stored in local storage unless the scores are cleared by the user.

Note: some of the ID tags and function names are slight misnomers, leftover from earlier in the project. The ones I've left in are because they're close enough to be intuited and don't hurt anything (e.g. "high-scores" actually refers to a list of "recent scores"). Also there are numerous notes throughout the code to help explain things.

Another Direct Link for folks who like to scroll down first before looking: https://danielfmckay.github.io/Coding-Quiz/

```

