let seconds = 0;
let interval = null;
let isRunning = false;

const cronometro = document.getElementById("idCronometro");
const iniciar = document.getElementById("iniciarbtn");
const pausar = document.getElementById("pausarbtn");
const reiniciar = document.getElementById("reiniciarbtn");

// Función para formatear el tiempo
function formatTime(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Función para actualizar el tiempo en el cronómetro
function updateTimer() {
  cronometro.textContent = formatTime(seconds);
}

// Función para iniciar el cronómetro
function startTimer() {
  if (isRunning) return; // Evita iniciar múltiples intervalos

  isRunning = true;
  interval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

// Función para pausar el cronómetro
function pauseTimer() {
  if (!isRunning) return; // No hacer nada si ya está pausado
  clearInterval(interval);
  isRunning = false;
  interval = null;
}

// Función para resetear el cronómetro
function resetTimer() {
  if (interval) {
    clearInterval(interval);
  }

  seconds = 0;
  isRunning = false;
  interval = null;

  updateTimer();
}

// Funciones fuera de DOMContentLoaded

iniciar.addEventListener("click", startTimer);
pausar.addEventListener("click", pauseTimer);
reiniciar.addEventListener("click", resetTimer);
