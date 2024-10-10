// Example JavaScript function for form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        if (nameInput.value === '') {
            alert('Name cannot be empty!');
            event.preventDefault();
        }
    });
});
