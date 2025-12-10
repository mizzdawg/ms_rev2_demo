const availBtn = document.querySelector('.avail-btn');
const availModule = document.querySelector('.avail-module');
const availModileX = document.querySelector('.avail-module-x');
const availFormBtn = document.querySelector('.avail-module-submit');
const gameDetailAvailBtn = document.querySelector('.btn-edit-table')


availBtn.addEventListener('click', () => {
    toggleAvailModule();
})

availModileX.addEventListener('click', () => {
    toggleAvailModule();
})

availFormBtn.addEventListener('click', () => {
    toggleAvailModule();
})

gameDetailAvailBtn.addEventListener('click', () => {
    toggleAvailModule();
})

function toggleAvailModule() {
    availModule.classList.toggle('avail-module-active')
}