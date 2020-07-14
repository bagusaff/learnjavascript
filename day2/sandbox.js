var set = 1;
function myFunction(){
let x = document.getElementById("lowerCase");
let y = x.innerHTML.toUpperCase();
let z = x.innerHTML.toLowerCase();
if (set=1) {
    x.innerHTML=(y);
    set=0;
} else if(set=0){
    x.innerHTML=(z);
    set=1;
}
console.log(set);
}