// a)
var headingEl = document.getElementById("heading");
headingEl.innerHTML = "All about cats";

// b)
var nameEls = document.getElementsByTagName("span");
console.log(nameEls);
for (var i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "cat";
}

// c)
var nameEls = document.getElementsByClassName("animal");
console.log(nameEls);
console.log(nameEls[0]);
for (var i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "cat";
}

// d)
var nameEls = document.querySelectorAll("p .animal");
console.log(nameEls);
console.log(nameEls[0]);

// e)
for (var i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "cat";
}

// f)
var headingEl = document.querySelector("#heading");
headingEl.innerHTML = "All about cats";

// 2. MODYFIKACJE ELEMENTÓW DRZEWA DOM
var imageEls = document.getElementsByTagName("img");
for (var i = 0; i < imageEls.length; i++) {
    imageEls[i].src = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";
}

headingEl.style.color = "orange";
headingEl.style.backgroundColor = "black";
headingEl.style.textAlign = "center";

var linkEls = document.querySelectorAll("a[href*='Dog']");
for (var i = 0; i < linkEls.length; i++) {
    linkEls[i].href = "http://en.wikipedia.org/wiki/Cat";
}

var headingEl = document.querySelector("#heading");
headingEl.className = "catcolors";

$(document).ready(function() {
    $("body").append("<p>to jest nowy akapit</p>");
    $("h1").fadeOut(3000);
    $("h1").fadeIn(2000);
    $("h1").text("Ten tekst zaraz … no właśnie co się z nim stanie???").fadeOut(3000);
    $("h1").fadeOut(3000).fadeIn(2000);
    $("h1").slideUp(1000).slideDown(1000);
});
