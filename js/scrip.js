const coinElement = document.querySelector('.coin'),
  headsContainer = document.querySelector('.counter__value-heads'),
  tailsContainer = document.querySelector('.counter__value-tails'),
  resetButton = document.querySelector('.reset-button');

let headsValue = 0,
  tailsValue = 0,
  result;

headsContainer.innerHTML = headsValue;
tailsContainer.innerHTML = tailsValue;

coinElement.addEventListener('click', () => {
  result = coinFlip();
  weeeeee(result);
});

function weeeeee(result) {
  let degree = 0,
    maxDegree;

  const increment = 5.5,
    duration = 1000;

  result == 'heads' ? (maxDegree = 1800) : (maxDegree = 1980);

  const intervalId = setInterval(animate, duration / maxDegree);

  function animate() {
    degree += increment;
    if (degree >= maxDegree) {
      clearInterval(intervalId);
      updateCounter(result);
      return;
    }

    coinElement.style.transform = `rotateX(${degree}deg)`;
  }
}

function coinFlip() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

function updateCounter(result) {
  result == 'heads'
    ? (headsContainer.innerHTML = ++headsValue)
    : (tailsContainer.innerHTML = ++tailsValue);
}

function deleteClasses() {
  coinElement.classList.remove('heads');
  coinElement.classList.remove('tails');
}

function addClasses(result) {
  result == 'heads'
    ? coinElement.classList.add('heads')
    : coinElement.classList.add('tails');
}

resetButton.addEventListener('click', () => {
  resetCounter();
});

function resetCounter() {
  headsValue = 0;
  tailsValue = 0;
  headsContainer.innerHTML = headsValue;
  tailsContainer.innerHTML = tailsValue;
}
