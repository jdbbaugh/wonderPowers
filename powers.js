flightHandlerFunction = (toggleClass) => {
    let removeSectionClass = document.getElementById('flight');
    removeSectionClass.classList.replace('disabled', toggleClass);
}

mindReadingFunction = (toggleClass) => {
    let removeSectionClass = document.getElementById('mindreading');
    removeSectionClass.classList.replace('disabled', toggleClass);
}

xRayFunction = (toggleClass) => {
    let removeSectionClass = document.getElementById('xray');
    removeSectionClass.classList.replace('disabled', toggleClass);
}


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


document.querySelector("#activate-flight").addEventListener('click', function() {
    flightHandlerFunction('enabled');
});

document.querySelector("#activate-mindreading").addEventListener('click', function() {
    mindReadingFunction('enabled');
});

document.querySelector("#activate-xray").addEventListener('click', function() {
    xRayFunction('enabled');
});

document.querySelector('#activate-all').addEventListener('click', function() {
    selectAllFunction('enabled')
})

document.querySelector('#deactivate-all').addEventListener('click', function() {
    reset('disabled')
})
