const scrollToSectionAbout = () => {
    window.scroll({
        top: 850,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 500) {
        return document.querySelector('#arrow').classList.remove('arrow--animated');
    }
    return document.querySelector('#arrow').classList.add('arrow--animated');
})

