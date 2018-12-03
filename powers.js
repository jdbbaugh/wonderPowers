
handlerFunction = (toggleClass, target) => {
    console.log(target[1]);
    let removeSectionClass = document.getElementById(target[1]);
    removeSectionClass.classList.replace('disabled', toggleClass);
    
}

// mindReadingFunction = (toggleClass) => {
//     let removeSectionClass = document.getElementById('mindreading');
//     removeSectionClass.classList.replace('disabled', toggleClass);
// }

// xRayFunction = (toggleClass) => {
//     let removeSectionClass = document.getElementById('xray');
//     removeSectionClass.classList.replace('disabled', toggleClass);
// }


selectAllFunction = (toggleClasses) => {
    let selectAll = document.querySelectorAll('section');
    for (let i = 0; i < selectAll.length; i++) {
    selectAll[i].classList.replace('disabled', toggleClasses);
    }
}

reset = (toggleClasses) => {
    let selectAll = document.querySelectorAll('section');
    for (let i = 0; i < selectAll.length; i++) {
    selectAll[i].classList.replace('enabled', toggleClasses);
    }
}


document.getElementById("activate-flight").addEventListener('click', function() {
    handlerFunction('enabled', event.target.id.split("-"));
});

document.querySelector("#activate-mindreading").addEventListener('click', function() {
    handlerFunction('enabled', event.target.id.split("-"));
});

document.querySelector("#activate-xray").addEventListener('click', function() {
    handlerFunction('enabled', event.target.id.split("-"));
});

document.querySelector('#activate-all').addEventListener('click', function() {
    selectAllFunction('enabled')
})

document.querySelector('#deactivate-all').addEventListener('click', function() {
    reset('disabled')
})
