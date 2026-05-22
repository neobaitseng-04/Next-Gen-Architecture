
document.querySelector('.booking-form')?.addEventListener('submit', function(e) {
  e.preventDefault(); 
  alert('Thank you! Your lesson booking has been received.');
  this.reset(); /
});


document.querySelector('.feedback-form')?.addEventListener('submit', function(e) {
  e.preventDefault(); 
  alert('Thank you for your feedback! We appreciate your time.');
  this.reset(); 
});
