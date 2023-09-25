let loader = document.querySelector('.loader');
const imgbg = document.querySelector('.content');


let load = 0;

let time = setInterval(function() {
    load++
    console.log(load);
    loader.innerHTML = `${load}%`;
    imgbg.style.filter = `blur(${scale(load, 0,100, 30,0)}px)`
    if (load > 99) {
        clearInterval(time)
    }
}, 40);


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// console.log(scale());