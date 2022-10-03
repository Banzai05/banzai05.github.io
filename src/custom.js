let navbar = document.getElementsByClassName("navbar")

// console.log(posProfile)

window.onscroll = () => {
    let pos = window.pageYOffset;
    if (pos >= 10) {
        navbar[0].classList.add("navScrolled")
    } else {
        navbar[0].classList.remove("navScrolled")
    }
}