const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

setInterval(showNext, 5000);


const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();


  const formData = {
    topic: form.topic.value,
    phone: form.phone.value,
    email: form.email.value,
    gender: form.gender.value,
    message: form.message.value,
  };

  alert(`Thank you for contacting us!\n
Topic: ${formData.topic}
Phone: ${formData.phone}
Email: ${formData.email}
Gender: ${formData.gender}
Message: ${formData.message}`);

  form.reset();
});