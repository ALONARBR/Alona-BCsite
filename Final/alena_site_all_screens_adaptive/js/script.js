// Contact form handler
// Validates form fields and sends email via mailto:

(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('lead-name').value.trim();
    const contact = document.getElementById('lead-contact').value.trim();
    const topic = document.getElementById('lead-topic').value.trim();
    const message = document.getElementById('lead-message').value.trim();
    const status = document.getElementById('form-status');

    // Validate required fields
    if (!name || !contact || !topic || !message) {
      status.textContent = 'Пожалуйста, заполните имя, контакт, тему и описание задачи.';
      status.classList.add('is-visible');
      return;
    }

    // Prepare email data
    const subject = encodeURIComponent('Запрос с сайта — ' + topic);
    const body = encodeURIComponent(
      'Имя: ' + name + '\n' +
      'Контакт: ' + contact + '\n' +
      'Тема: ' + topic + '\n\n' +
      'Задача:\n' + message
    );

    // Show confirmation
    status.textContent = 'Готово — сейчас откроется почтовое приложение с подготовленным письмом.';
    status.classList.add('is-visible');

    // Trigger email client
    window.location.href = 'mailto:alonarbr@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
