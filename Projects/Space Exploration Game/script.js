const spaceship = document.getElementById('spaceship');
const gameContainer = document.getElementById('game-container');

let spaceshipPosition = 50;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && spaceshipPosition > 0) {
        spaceshipPosition -= 10;
    }
    if (event.key === 'ArrowDown' && spaceshipPosition < 90) {
        spaceshipPosition += 10;
    }
    spaceship.style.bottom = spaceshipPosition + '%';
});

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.className = 'obstacle';
    const obstaclePosition = Math.random() * 90;
    obstacle.style.left = obstaclePosition + '%';
    gameContainer.appendChild(obstacle);

    obstacle.addEventListener('animationiteration', () => {
        gameContainer.removeChild(obstacle);
    });
}

setInterval(createObstacle, 2000);
