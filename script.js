const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 
let int = setInterval(blurring, 30)

function blurring() {
    load++ 

    // when it gets to 100 it should stop using clearInterval method
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`

    // the opacity should decrease from 1 to 0 (0% to 100% load) 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    // start at 30px blur 
    // from 30% to 0%
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// formula
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

