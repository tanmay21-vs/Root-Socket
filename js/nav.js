const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    }
  });
}

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = form.querySelector('.form-status') || document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.textContent = 'Thank you. Your message has been recorded, and our team will contact you shortly.';

    if (!status.parentElement) {
      form.append(status);
    }

    form.reset();
  });
});
