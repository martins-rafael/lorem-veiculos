const currentPage = location.pathname;
const header = document.querySelector('header');
const menuItens = document.querySelectorAll('.desktop-menu a');

// Active page
menuItens.forEach(item => {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active');
    }
});

// Form receive alert
const form = document.querySelector('.contact form');

if (form) {
    form.addEventListener('submit', () => alert('Mensagem recebida com sucesso!'));
}

// Redirect to vehicle page
const vehicles = document.querySelectorAll('.vehicle');
vehicles.forEach(vehicle => {
    vehicle.addEventListener('click', () => {
        const id = vehicle.getAttribute('id');
        window.location.href = `stock/${id}`;
    });
});