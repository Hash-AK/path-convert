# path-converter.js 
This javascript tool permit to easily convert an input path to DOS, Unix, or DOS with backslashes-escaped output path
# Usage
Here is the usage as descibed by the tool itself :
>Usage: path-convert <method> 'path'
>
>Methods:
>  --escape   : Escape backslashes in DOS
>  --toUnix   : Convert to Unix path
>  --toDOS    : Convert to DOS path
>
>Examples:
>  path-convert --toUnix 'C:\Users\Username\Documents'
>  path-convert --toDOS '/home/user/documents'
    
Please **ONLY** use single-quotes when giving the path in arguments, as it work better like that.  

I hope this can help you!

This is also shared on [NPM](https://www.npmjs.com/package/path-convert-js).  
To install simply do : npm i path-convert-js  

I used AI to debug and tune my code, but it's coded in majority by me, with some code from w3school, StackOverflow and the like.
Made for [Hackclub](https://hackclub.com)'s minus-twelve YSWS
