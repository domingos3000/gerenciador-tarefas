let linkMenu = document.querySelectorAll("#list-menu a")
let inputCheckMenu = document.querySelector("#check-mobile")


for (link of linkMenu) {
    link.onclick = () => {
        inputCheckMenu.checked = false
    }
}

function goTop() {
    document.documentElement.scrollTop = 0;
}