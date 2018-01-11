# Morse Code


## Requirements
- NodeJs >= 6 and npm installed

## Install dependencies

```
npm install
```

## Run Tests

```
npm test
```

## Run Application

```
node index.js morse ".... . -.--   .--- ..- -.. ."
# should print: HEY JUDE
```

---

## Part 1
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter `A` is coded as `·−`, letter `Q` is coded as `−−·−`, and digit `1` is coded as `·−−−`. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message `HEY JUDE` in Morse code is `···· · −·−−   ·−−− ··− −·· ·`.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal `SOS` (that was first issued by Titanic), that is coded as `···−−−···`. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function `decodeMorse(morseCode)`, that would take the morse code as input and return a decoded human-readable string.

For example:
```
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
```

The Morse code table is preloaded for you as a dictionary, feel free to use it. The table can be accessed like this: `MORSE_CODE['.--']`.

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions.

Good luck!

-------------------------------

## Part 2

### Run Application

```
node index.js binary 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011
# should print: HEY JUDE
```

Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

The Morse code table is preloaded for you as MORSE_CODE dictionary (MorseCode class for Java), feel free to use it.

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!

-------------------------------

## Part 3 - For real
http://www.codewars.com/kata/decode-the-morse-code-for-real

### Run Application

```
node index.js real 110011001100110000001100000011111100110011111100111111000000000011001111110011111100111111000000110011001111110000001111110011001100000011
# should print: HEY JUDE
```

In this kata you have to deal with "real-life" scenarios, when Morse code transmission speed slightly varies throughout the message as it is sent by a non-perfect human operator. Also the sampling frequency may not be a multiple of the length of a typical "dot".
For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may actually be received as follows:

0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000

As you may see, this transmission is generally accurate according to the standard, but some dots and dashes and pauses are a bit shorter or a bit longer than the others.

Note also, that, in contrast to the previous kata, the estimated average rate (bits per dot) may not be a whole number – as the hypotetical transmitter is a human and doesn't know anything about the receiving side sampling rate.

For example, you may sample line 10 times per second (100ms per sample), while the operator transmits so that his dots and short pauses are 110-170ms long. Clearly 10 samples per second is enough resolution for this speed (meaning, each dot and pause is reflected in the output, nothing is missed), and dots would be reflected as 1 or 11, but if you try to estimate rate (bits per dot), it would not be 1 or 2, it would be about (110 + 170) / 2 / 100 = 1.4. Your algorithm should deal with situations like this well.

Also, remember that each separate message is supposed to be possibly sent by a different operator, so its rate and other characteristics would be different. So you have to analyze each message (i. e. test) independently, without relying on previous messages. On the other hand, we assume the transmission charactestics remain consistent throghout the message, so you have to analyze the message as a whole to make decoding right. Consistency means that if in the beginning of a message '11111' is a dot and '111111' is a dash, then the same is true everywhere in that message. Moreover, it also means '00000' is definitely a short (in-character) pause, and '000000' is a long (between-characters) pause.

That said, your task is to implement two functions:

1. Function decodeBitsAdvanced(bits), that should find an estimate for the transmission rate of the message, take care about slight speed variations that may occur in the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. If message is empty or only contains 0's, return empty string. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot. If stuck, check this for ideas.

2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string. If the input is empty string or only contains spaces, return empty string.

The Morse code table is preloaded for you as MORSE_CODE dictionary, feel free to use it. (For C, the function 'morse_code' acts like the dictionary. For C++ a map is used.)

const char *morse_code (const char *dotsdashes);
Of course, not all messages may be fully automatically decoded. But you may be sure that all the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!
