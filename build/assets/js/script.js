// Scroll logic for Header styling
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('bg-brand-darkBg', 'bg-opacity-95', 'shadow-lg', 'backdrop-blur-md');
    } else {
      header.classList.remove('bg-opacity-95', 'shadow-lg', 'backdrop-blur-md');
    }
  }
});

// Function to handle custom Booking WhatsApp redirect
function handleBooking(event) {
  event.preventDefault();
  
  const name = document.getElementById('booking-name').value;
  const modalidade = document.getElementById('booking-modalidade').value;
  
  if (!name) {
    alert('Por favor, informe seu nome.');
    return;
  }
  
  const whatsappNumber = '5551999345612';
  const text = `Olá! Meu nome é ${encodeURIComponent(name)} e gostaria de agendar uma aula experimental de ${encodeURIComponent(modalidade)} na Go Fight.`;
  
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
}

// Function to handle Newsletter signup
function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = event.target.querySelector('input[type="email"]');
  if (emailInput && emailInput.value) {
    alert('Obrigado por se inscrever em nossa newsletter! Fique atento às novidades.');
    emailInput.value = '';
  }
}
