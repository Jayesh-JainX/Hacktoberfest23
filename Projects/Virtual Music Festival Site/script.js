
const eventDate = new Date('2023-10-20 18:00:00').getTime(); 
const countdown = document.getElementById('countdown');

const updateCountdown = () => {
    const currentDate = new Date().getTime();
    const timeLeft = eventDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until the festival!`;
};

setInterval(updateCountdown, 1000);