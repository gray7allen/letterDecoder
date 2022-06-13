function letterDecoder(string) {
    let x = parseInt(string[0])
// console.log(x)
    string = string.substring(1)
// console.log(string)
    return string.replace(/[a-zA-Z]/g, function(y) {
        return String.fromCharCode(y.charCodeAt(0) + x)
    })
}

console.log(letterDecoder('4abc'))
console.log(letterDecoder('2fcjjm'))