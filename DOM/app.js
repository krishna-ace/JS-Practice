// Qs1. Create a new input and button element on the page using JavaScript only. Set text of button to "Click me";

// Qs2. Add following attributes to the element:

// Change placeholder value of input to "username"

// Change the id of button to "btn"

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

// Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.




// Answers:-

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(button);
document.querySelector("body").append(input);

button.setAttribute("id","btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = " Apna college <b>Delta</b> pratice "
document.querySelector("body").append(p);

