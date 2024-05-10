const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
const nav = document.querySelector('#navigation')

/* hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false); */
hambutton.addEventListener('click', () => { nav.classList.toggle('navopen') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };