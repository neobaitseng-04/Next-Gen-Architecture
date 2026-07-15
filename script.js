
// Dark Mode Toggle - Fixed Version
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                toggleButton.textContent = 'Light Mode';
            } else {
                toggleButton.textContent = 'Dark Mode';
            }
        });
    }
});
