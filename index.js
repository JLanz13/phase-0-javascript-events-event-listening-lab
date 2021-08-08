const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('input', function() {
        alert('I was clicked!')
    });
}