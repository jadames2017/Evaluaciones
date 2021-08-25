const h1 = document.querySelector('h1');

const { body } = document;

setInterval(() => {
    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (hour <= 9) hour = '0' + hour;

    if (minute <= 9) minute = '0' + minute;

    if (second <= 9) second = '0' + second;

    h1.textContent = `${hour}:${minute}:${second}`;

    const formatDate = now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}, 5000);
