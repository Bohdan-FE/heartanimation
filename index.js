const el = {
    container: document.querySelector('.container'),
}

el.container.addEventListener('click', onClick);

function onClick(e) {
    el.container.classList.toggle('active')
    arr = [...el.container.children]
    arr.forEach(element => {
        element.classList.toggle('anime')
        element.classList.toggle('active')
    });
}