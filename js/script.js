const themeButtonElement = document.getElementById('theme');

themeButtonElement.addEventListener('click', ()=> {
    console.log("click click");

    document.body.classList.toggle('dark');
});