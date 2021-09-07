//settings btn\

function showAccessories() {
    const settingsBtn = document.querySelector(".settings");
    const accessoriesMenu = document.querySelector('.hidden-menu')
    settingsBtn.addEventListener('click',() =>{
        accessoriesMenu.classList.toggle('show-menu')
    })
}
showAccessories();