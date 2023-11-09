// 4 Pillars of DOM:

// 1. Selection of an element 
// Selecting any query from html file while remaining on js.
// giving a variable so that we dont have to repeat the whole line.
var a = document.querySelector("h1")  
console.log(a)
// 2. Chnaging HTML
var b = document.querySelector("h1")
a.innerHTML = "TEXT CHANGED"
// 3. Chnaging CSS
// 4. Event Listener