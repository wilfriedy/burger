
let burgerBtn = document.querySelector('.burger-div')
let tabsContainer = document.querySelector(".tabsContainer");

tabsContainer.classList.add('hideBar')

function toggleNav() {
    tabsContainer.classList.toggle('showBar')
}

burgerBtn.addEventListener('click', toggleNav )