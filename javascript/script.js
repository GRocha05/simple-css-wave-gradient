const waveContainer = document.getElementById('wave-container');
const wavelength = 50; // Adjust the wavelength of the wave
const amplitude = 25; // Adjust the amplitude of the wave
const frequency = 0.1; // Adjust the frequency of the wave

function createWave() {
  const containerWidth = waveContainer.clientWidth;
  const totalDots = containerWidth;
  const containerHeight = waveContainer.clientHeight;
  
  for (let i = 0; i < totalDots; i++) {
    const segment = document.createElement('div');
    segment.className = 'wave-segment';
    const x = i; //posição horizontal

    const y = amplitude * Math.sin(2 * Math.PI * frequency * (x / wavelength));
    segment.style.height = `${y + amplitude + (containerHeight / 8 ) }px`; // Adding amplitude to center the wave vertically
    waveContainer.appendChild(segment);
    console.log(containerHeight);
  }
}

createWave();
