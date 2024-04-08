document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Store the state of dark mode in local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

function submitName() {
    const name = document.getElementById('name-input').value;
    if (name.trim() !== '') {
        window.location.href = 'index1.html?name=' + encodeURIComponent(name);
    } else {
        alert('Please enter your name.');
    }
}