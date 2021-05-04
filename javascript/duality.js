const rangeEl = document.getElementById('range');
const logoEl = document.getElementById('logo');
const logoDesignEl = document.getElementById('logo-design');
const logoCodeEl = document.getElementById('logo-code');
const designEls = document.getElementsByClassName('project-design');
const codeEls = document.getElementsByClassName('project-code');
const projectsEl = document.getElementById('projects');
const sliderLabelDesignEl = document.getElementById('slider-label-design')
const sliderLabelCodeEl = document.getElementById('slider-label-code')

rangeEl.addEventListener('input', e => {
    updateSlider()
})

document.addEventListener('click', e => {
    if (e.target === sliderLabelDesignEl) {
        rangeEl.value = 0;
        updateSlider()
    }
    if (e.target === sliderLabelCodeEl) {
        rangeEl.value = 100;
        updateSlider()
    }
    if (e.target === logoDesignEl || e.target === logoCodeEl) {
        console.log(document.scrollingElement.scrollLeft)
        document.scrollingElement.scrollLeft += 800;
    }
})

// document.addEventListener('mousewheel', scrollY);
// document.addEventListener('DOMMouseScroll', scrollY);

function updateSlider() {
    let rangeLogoCalc = rangeEl.value / 100 * 540
    let rangeProjectsCalc = rangeEl.value / 100 * 180
    // logoEl.style.transform = `rotate3d(0, 1, 0, ${rangeLogoCalc}deg)`;
    logoDesignEl.style.transform = `rotatey(${rangeLogoCalc}deg)`;
    logoCodeEl.style.transform = `rotatey(${rangeLogoCalc + 180}deg)`;

    for (let i = 0; i < designEls.length; i++) {
        designEls[i].style.transform = `rotatey(${rangeProjectsCalc}deg)`
    }
    for (let i = 0; i < codeEls.length; i++) {
        codeEls[i].style.transform = `rotatey(${rangeProjectsCalc + 180}deg)`
    }  
}

// function scrollY(e) {
//     e = window.event || e;
//     let delta = e.detail || e.deltaY || e.deltaX;
//     console.log(delta)
//     // console.log(document.scrollingElement.scrollLeft)
//     // document.scrollingElement.scrollLeft += delta
// }

