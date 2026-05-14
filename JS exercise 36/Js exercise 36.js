const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryButton = document.querySelector('#clearHistoryButton');

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    colorPreview.style.backgroundColor = selectedColor;
    colorPreview.textContent = selectedColor.toUpperCase();
});

colorPicker.addEventListener('change', function() {
    const selectedColor = colorPicker.value;
    addColorToHistory(selectedColor);
});

function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color.toUpperCase();
    li.style.color = color;
    

    li.style.borderLeft = `10px solid ${color}`;
    li.style.paddingLeft = "10px";
    
    colorHistory.appendChild(li);
}

clearHistoryButton.addEventListener('click', function() {
    colorHistory.innerHTML = ''; 
});