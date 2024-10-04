document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = "Registrado con éxito!";
    messageDiv.style.display = "block";

   
    window.location.href = 'inicio.html'; 
});