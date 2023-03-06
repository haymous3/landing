const NavBar = document.querySelector('#bars');
const NavLinks = document.querySelector('#navLinks')
const Bar = document.querySelectorAll('.bar');
const listItem = document.querySelector('ul')



const LoadEvenListerners = () => {
    NavBar.addEventListener('click', toogleNavs);
}





const toogleNavs = () => {
    NavLinks.classList.toggle('show')
    NavBar.classList.toggle('active')
    Bar.forEach((bar) => bar.classList.toggle('bg'))
    listItem.classList.toggle('cl')

}


LoadEvenListerners()