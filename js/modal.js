const modalOverlay = document.querySelector('.modal-overlay')
const vehicles = document.querySelectorAll('.destaque-veiculo')

for (let vehicle of vehicles) {
    vehicle.addEventListener('click', function() {
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})