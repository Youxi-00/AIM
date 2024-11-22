// Get references to buttons and pages
const dashboardBtn = document.getElementById('dashboard-btn');
const orderBtn = document.getElementById('order-btn');
const dashboardPage = document.getElementById('dashboard-page');
const orderPage = document.getElementById('order-page');

// Add click event to toggle pages
dashboardBtn.addEventListener('click', () => {
    dashboardPage.classList.add('active');
    orderPage.classList.remove('active');
    dashboardBtn.classList.add('active');
    orderBtn.classList.remove('active');
});

orderBtn.addEventListener('click', () => {
    orderPage.classList.add('active');
    dashboardPage.classList.remove('active');
    orderBtn.classList.add('active');
    dashboardBtn.classList.remove('active');
});
