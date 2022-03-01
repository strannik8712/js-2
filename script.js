
// заменить "@"   на "!"


let str ='aaa@bbb@ccc'

console.log(str.slice(0,3) + '!' + str.slice(4,7) + '!' + str.slice(8,11));






// сделат из текста HALLOWORLD    на Hallo world

let text ='HALLOWORLD'

console.log(text.charAt() + text.slice(1,5).toLowerCase() + ' ' + text.slice(5,11).toLowerCase());







// сделать из "Hello , it is HTML"     на "Hello it is not JS"
let text_one = "Hello , it is HTML" 

let a="not JS"

console.log(text_one.slice(0,13) + " " + a);







// напишите код возвращающий строку   let b = "alex"  с заглавным первым символом


let b = "alex"

console.log(b.charAt().toUpperCase() + b.slice(1,4));







// уберите из "Math.random()" только    запятую

let random = Math.random()

console.log(random.toString().slice(2))





// сделайте из текта "Lex Luter has a big suit"       "Alex"


let str_text = "Lex Luter has a big suit"

console.log(str_text.slice(11,12).toUpperCase() + str_text.slice(0,3).toLowerCase());








