document.addEventListener('scroll', function(e){
    if(window.scrollY > 200){
        document.getElementsByTagName('nav')[0].classList.remove("nav-d")
        document.getElementsByTagName('nav')[0].classList.add("nav-scrolled")
    }
    else{
        document.getElementsByTagName('nav')[0].classList.add("nav-d")
        document.getElementsByTagName('nav')[0].classList.remove("nav-scrolled")
    }
})















