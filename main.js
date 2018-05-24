// grabs current img
const current = document.querySelector('#current');

// grabs all imgs
const imgs = document.querySelectorAll('.imgs img');

// default opacity
const opacity = 0.8; 

// Set 1st image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

// takes in event param
function imgClick(e){
    // reset opacity of imgs
    imgs.forEach(img => (img.style.opacity = 1));

    // change current img to src of clicked img
    current.src = e.target.src;

    // add fading class
    current.classList.add('fade-in');

    // removes fade in class after .5 seconds so that it can recur on next click
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // change opacity to opacity var
    e.target.style.opacity = opacity;
}

