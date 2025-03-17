let prevScrollPos = window.scrolly 
window.addEventListener("scroll", () => {
    const navbar =document.querySelector
    
    (".navBar")
    
    const currentScrollPos = window.scrollY
    
    if (currentScrollPos > prevScrollPos) {
    
        navbar.classList.add('hide')
    
        navbar.classList.remove('show')
    
    }
    
    else {
    
        navbar.classList.add('show')
    
        navbar.classList.remove('hide')
    }
    
    prevScrollPos = currentScrollPos
    
})