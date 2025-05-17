let text = "Jahan";
console.log(text.length); // 5

let text1 = "Jahan smskss2 'kdjhdu'";
console.log(text1.length); // 22 

let text2 = 'Jahan smskss "kdjhdu"';
console.log(text2.length); // 21

let text3 = "Jahan \"smskss\" kdjhdu";
console.log(text3); // Jahan "smskss" kdjhdu

let text4 = "Jahan \\smskss\\ kdjhdu";
console.log(text4); // Jahan \smskss\ kdjhdu

let text5 = "Jahan \smskss\ kdjhdu";
console.log(text5); // Jahan smskss kdjhdu

let text6 = "Jahan \
smskss kdjhdu";
console.log(text6); // Jahan  smskss kdjhdu

let text7 = "Jahan" +
" smskss kdjhdu";
console.log(text7); // Jahan  smskss kdjhdu