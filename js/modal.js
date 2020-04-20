const modalOverlay = document.querySelector('.modal-overlay');
const vehicles = document.querySelectorAll('.featured-vehicle');

for (let vehicle of vehicles) {
    vehicle.addEventListener('click', function() {
        const title = vehicle.querySelector('h3').innerHTML;
        const img = vehicle.getAttribute('id');
        const brand = vehicle.querySelector('.brand').innerHTML;
        const model = vehicle.querySelector('.model').innerHTML;
        const version = vehicle.querySelector('.version').innerHTML;
        const year = vehicle.querySelector('.year').innerHTML;
        const fuel = vehicle.querySelector('.fuel').innerHTML;
        const price = vehicle.querySelector('.price').innerHTML;

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('h2').innerHTML = title;
        modalOverlay.querySelector('img').src = `images/${img}.jpg`;
        modalOverlay.querySelector('.brand-name').innerHTML = brand;
        modalOverlay.querySelector('.model-name').innerHTML = model;
        modalOverlay.querySelector('.version-content').innerHTML = version;
        modalOverlay.querySelector('.car-year').innerHTML = year;
        modalOverlay.querySelector('.fuel-type').innerHTML = fuel;
        modalOverlay.querySelector('.price-value').innerHTML = price;
    });
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = '';
})

document.querySelector('.interest').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})