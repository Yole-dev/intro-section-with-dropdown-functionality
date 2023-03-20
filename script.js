`use strict`;

//functionality for the nav dropdown on the desktop view

//lists
const drop1Desktop = document.querySelector('.drop1Desktop');
const drop2Desktop = document.querySelector('.drop2Desktop');

//dropdown buttons
const featuresOpenDesktop = document.querySelector('.featuresOpenDesktop');
const featuresCloseDesktop = document.querySelector('.featuresCloseDesktop');

const companyOpenDesktop = document.querySelector('.companyOpenDesktop');
const companyCloseDesktop = document.querySelector('.companyCloseDesktop');

//click events

//for features dropdown
featuresOpenDesktop.addEventListener('click', function() {
    featuresOpenDesktop.classList.add('hidden');
    featuresCloseDesktop.classList.remove('hidden');
    drop1Desktop.classList.remove('hidden');
});

featuresCloseDesktop.addEventListener('click', function() {
    featuresOpenDesktop.classList.remove('hidden');
    featuresCloseDesktop.classList.add('hidden');
    drop1Desktop.classList.add('hidden');
});

//for company dropdown
companyOpenDesktop.addEventListener('click', function() {
    companyOpenDesktop.classList.add('hidden');
    companyCloseDesktop.classList.remove('hidden');
    drop2Desktop.classList.remove('hidden');
});

companyCloseDesktop.addEventListener('click', function() {
    companyOpenDesktop.classList.remove('hidden');
    companyCloseDesktop.classList.add('hidden');
    drop2Desktop.classList.add('hidden');
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

//lists
const drop1Mobile = document.querySelector('.drop1Mobile');
const drop2Mobile = document.querySelector('.drop2Mobile');

//dropdown buttons
const featuresOpenMobile = document.querySelector('.featuresOpenMobile');
const featuresCloseMobile= document.querySelector('.featuresCloseMobile');

const companyOpenMobile = document.querySelector('.companyOpenMobile');
const companyCloseMobile = document.querySelector('.companyCloseMobile');

//click events

//for features dropdown
featuresOpenMobile.addEventListener('click', function() {
    featuresOpenMobile.classList.add('hidden');
    featuresCloseMobile.classList.remove('hidden');
    drop1Mobile.classList.remove('hidden');
});

featuresCloseMobile.addEventListener('click', function() {
    featuresOpenMobile.classList.remove('hidden');
    featuresCloseMobile.classList.add('hidden');
    drop1Mobile.classList.add('hidden');
});

//for company dropdown
companyOpenMobile.addEventListener('click', function() {
    companyOpenMobile.classList.add('hidden');
    companyCloseMobile.classList.remove('hidden');
    drop2Mobile.classList.remove('hidden');
});

companyCloseMobile.addEventListener('click', function() {
    companyOpenMobile.classList.remove('hidden');
    companyCloseMobile.classList.add('hidden');
    drop2Mobile.classList.add('hidden');
});