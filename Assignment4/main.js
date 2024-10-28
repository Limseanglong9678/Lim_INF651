const button = document.getElementById("submitButton");
const nameInput = document.getElementById('nameInput');
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById('mouseTracker');
const coordinatesDiv = document.getElementById('coordinates');

button.addEventListener("click",(event) => {
    const name = nameInput.value.trim();
    if (name){
        outputDiv.style.backgroundColor = 'green';
        outputDiv.innerHTML = `Welcome, ${name}!`;
    } else {
        outputDiv.style.backgroundColor = ''; 
        outputDiv.innerHTML = '<span style="color: red;">Error: Please enter a name.</span>';
    }
})

nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        button.click()
    }
});

mouseTracker.addEventListener('mousemove', function(event) {
    const rect = mouseTracker.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top; 
    coordinatesDiv.innerHTML = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});