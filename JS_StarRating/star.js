'use strict';

const starContainers = document.querySelectorAll('.stars');
starContainers.forEach((el) => {
    const starsUL = createElements(el, 'ul', 'main');
    const output = createElements(el, 'div', 'output');

    for (let x = 0; x < 5; x++) {
        const star = createElements(starsUL, 'li', 'star');
        star.innerHTML = '&#9733;';
        star.starValue = (x + 1);
        ["mouseover", "mouseout", "click"].forEach((ele) => {
            star.addEventListener(ele, starRate);
        })
    }

})

function starRate(e) {
    // console.log(e.type);
    // console.log(e.target.starValue);
    const eventType = e.type;
    const parent = e.target.closest('.stars');
    // console.log(parent);
    const output = parent.querySelector('.output');
    const curStars = parent.querySelectorAll('.star');
    if (eventType === 'click') {
        output.innerHTML = `You Rated this ${e.target.starValue} stars`;
        addGold(curStars, e.target.starValue);
    } else if(eventType === 'mouseover'){
        addYellow(curStars, e.target.starValue)
    } else if(eventType === 'mouseout'){
        curStars.classList.remove('yellow')
    }
}


function addGold(curStars,noOfStar){
    // console.log(noOfStar);
    curStars.forEach((star,index)=>{
        if(index < noOfStar){
            star.classList.add('gold');
        } else{
            star.classList.remove('gold');
        }
    });
}

function addYellow(curStars,noOfStar){
    // console.log(noOfStar);
    curStars.forEach((star,index)=>{
        if(index < noOfStar){
            star.classList.add('yellow');
        } else{
            star.classList.remove('yellow');
        }
    });
}


function createElements(parent, elType, myClass) {
    const el = document.createElement(elType);
    el.classList.add(myClass);
    parent.append(el);
    return el;
}