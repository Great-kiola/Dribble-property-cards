console.log("Hello world!");

let press = document.querySelectorAll('.press');


press.forEach( pressed => {
    pressed.addEventListener('click', () => {
        pressed.classList.toggle('active');
    });
});