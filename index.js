#!/usr/bin/env node

/* 
    Path converter script written for hackclub's minustwelve ysws
    Author : Hash-AK
*/

/*
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"
FgGray = "\x1b[90m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
BgGray = "\x1b[100m"
*/


// Loads the method and path arguments
var method = process.argv[2]
var path = process.argv[3]
let result
function showUsage() {
    console.log(`
Usage: path-convert <method> 'path'


Methods:
  --escape   : Escape backslashes in DOS
  --toUnix   : Convert to Unix path
  --toDOS    : Convert to DOS path

Examples:
  path-convert --toUnix 'C:\\Users\\Username\\Documents'
  path-convert --toDOS '/home/user/documents'
    `)
}
function convertPath(fmethod, fpath){
    let fresult
    switch(fmethod) {
        case "escape":
            console.log("\x1b[46mEscape mode\x1b[0m")
            console.log("")
            console.log("\x1b[4mInput path : ", fpath + "\x1b[0m")
            fresult = fpath.replace(/\\/g, "\\\\")
            return fresult
            
        case "Unix":
            console.log("\x1b[46mTo Unix mode\x1b[0m")
            console.log("")
            console.log("\x1b[4mInput path : ", fpath + "\x1b[0m")
            fpath = fpath.replace(/^[a-zA-Z]:/i, "")
            fpath = fpath.replace(/\\\\/g, "/")
            fresult = fpath.replace(/\\/g, "/")
            if (!fresult.startsWith("/")) {
                fresult = "/" + fresult;  // Ensure path starts with /
            }
            return fresult
        case "DOS":
            console.log("\x1b[46mTo DOS mode\x1b[0m")
            console.log("")
            console.log("\x1b[4mInput path : ", fpath + "\x1b[0m")
            if (fpath.startsWith("//")){
                console.log("Network path")
                fpath = fpath.slice(2)
                fpath = '\\' + fpath
            } else if (!/^[a-zA-Z]:/.test(fpath)) {
                // Add a C: for drive if there's no letter with : at the start
                fpath = "C:" + fpath;
            } else {
                // Capitalize the drive letter
                fpath = fpath.replace(/^[a-z]:/, function(match) {
                return match.toUpperCase();
                });
            }
            fpath = fpath.replace(/\//g, "\\")
            fpath = fpath.replace(/\\\\/g, "\\")
            fresult = fpath
            return fresult
        default:
            throw new Error("Invalid conversion method")
    }
}
//verify if method AND path have been given as arg
if (method){
    if (path){
        switch(method) {
            case "--escape":
                result = convertPath("escape", path)
                console.log("")
                console.log("\x1b[32mResult: ", result + "\x1b[0m")  
                break;
            case "--toUnix":
                result = convertPath("Unix", path)
                console.log("")
                console.log("\x1b[32mResult: ", result+ "\x1b[0m")  
                break;
            case "--toDOS":
                result = convertPath("DOS", path)
                console.log("")
                console.log("\x1b[32mResult: ", result + "\x1b[0m")
                break;
            default:
            console.log("\x1b[41m Not a valid method! Please give one of the following method type : --escape, --toUnix or --toDOS \x1b[0m")
        }
      
    }
    else {
        console.log("\x1b[41m No path argument given!\x1b[0m")
        showUsage()
        process.exit(1)
    }

    
  
    
}
else {
    console.log("\x1b[41m No method given!\x1b[0m")
    showUsage()
    process.exit(1)
}
module.exports = {
    convertPath,
    showUsage
};