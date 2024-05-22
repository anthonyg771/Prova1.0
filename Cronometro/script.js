let counter = 0;
    let interval;

    const counterElement = document.getElementById('counter');
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const pauseButton = document.getElementById('pause');
    const containerElement = document.getElementById('container');

    function resetButtonColors() {
        startButton.style.backgroundColor = '#007bff';
        resetButton.style.backgroundColor = '#007bff';
        pauseButton.style.backgroundColor = '#007bff';
        counterElement.style.backgroundColor = 'white';
    }

    startButton.addEventListener('click', () => {
        if (!interval) {
            interval = setInterval(() => {
                counter++;
                counterElement.textContent = counter;
            }, 1000);
            resetButtonColors();
            startButton.style.backgroundColor = 'green';
            counterElement.style.backgroundColor = 'green';
        }
    });

    resetButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
        counter = 0;
        counterElement.textContent = counter;
        resetButtonColors();
        resetButton.style.backgroundColor = 'red';
        counterElement.style.backgroundColor = 'red';
    });

    pauseButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
        resetButtonColors();
        pauseButton.style.backgroundColor = 'orange';
        counterElement.style.backgroundColor = 'orange';
    });