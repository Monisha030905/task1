document.querySelectorAll('.seat.available').forEach(seat => {
    seat.addEventListener('click', function() {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            this.style.backgroundColor = '#4caf50'; // Change back to available color
        } else {
            this.classList.add('selected');
            this.style.backgroundColor = '#2196f3'; // Change to selected color
        }
    });
});
