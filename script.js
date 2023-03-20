`use strict`;

//functionality for the nav dropdown on the desktop view

//lists
const drop1 = document.querySelector('.drop1');
const drop2 = document.querySelector('.drop2');

//dropdown buttons
const featuresOpen = document.querySelector('.featuresOpen');
const featuresClose = document.querySelector('.featuresClose');

const companyOpen = document.querySelector('.companyOpen');
const companyClose = document.querySelector('.companyClose');

//click events

//for features dropdown
featuresOpen.addEventListener('click', function() {
    featuresOpen.classList.add('hidden');
    featuresClose.classList.remove('hidden');
    drop1.classList.remove('hidden');
});

featuresClose.addEventListener('click', function() {
    featuresOpen.classList.remove('hidden');
    featuresClose.classList.add('hidden');
    drop1.classList.add('hidden');
});

//for company dropdown
companyOpen.addEventListener('click', function() {
    companyOpen.classList.add('hidden');
    companyClose.classList.remove('hidden');
    drop2.classList.remove('hidden');
});

companyClose.addEventListener('click', function() {
    companyOpen.classList.remove('hidden');
    companyClose.classList.add('hidden');
    drop2.classList.add('hidden');
});


//nav bar functions for mobile view 

const navBar = document.querySelector('.navigationBar');
const openBtn = document.querySelector('.openNav');
const closeBtn = document.querySelector('.closeNav');

openBtn.addEventListener('click', function() {
    navBar.classList.remove('hidden');
    openBtn.classList.add('hidden');
})

closeBtn.addEventListener('click', function() {
    navBar.classList.add('hidden');
    openBtn.classList.remove('hidden');
})