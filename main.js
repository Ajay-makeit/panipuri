const toggleBtn = document.getElementsByClassName('btn')[0]
const navLinks = document.getElementsByClassName('nav_links')[0]
const img= document.getElementsByClassName('nav_toggleimg')[0]
const heading= document.getElementsByClassName('logo')[0]

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    img.classList.toggle('active');
    heading.classList.toggle('active');
})