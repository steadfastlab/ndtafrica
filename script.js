const navSlide = () => {
    const navButton = document.querySelector('.headerNavMenu');
    const navList = document.querySelector('.headerNavList');
    const navLink = document.querySelectorAll('.headerNavList li');
    navButton.addEventListener('click', () => {
        navList.classList.toggle('headerNavList-active');
        navLink.forEach((link ,index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLink  0.5s ease forwards ${ index / 6 + 0.3}s`;
            }
        });
        navButton.classList.toggle('toggle');
    });

}    
navSlide();