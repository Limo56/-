// Добавляем функционал для скрытия/показа блока
document.getElementById('toggle-btn').addEventListener('click', function() {
    const aside = document.getElementById('sidebar');
    aside.classList.toggle('hidden');
});

// Функция для генерации времени ответа
function generateTime() {
    const randomDays = Math.floor(Math.random() * 7) + 1; // Генерируем случайное количество дней от 1 до 7
    const randomHours = Math.floor(Math.random() * 23) + 1; // Генерируем случайное количество часов от 1 до 23

    const currentDate = new Date(); // Получаем текущее время

    currentDate.setDate(currentDate.getDate() + randomDays); // Добавляем случайные дни и часы к текущему времени
    currentDate.setHours(currentDate.getHours() + randomHours);

    const options = { // Форматируем дату для вывода
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
    };
    const formattedDate = currentDate.toLocaleString('ru-RU', options);

    // Выводим результат пользователю
    return `${formattedDate}.`;
}


document.getElementById("register-button").addEventListener("click", function () {
    const name = document.getElementById("nickname").value;
    const tg = document.getElementById("tg").value;
    const role = document.getElementById("role").value;

    if (name && tg && role) {
        const time = generateTime(); // Генерируем время ответа
        alert(`Никнейм: ${name}\nТГ: ${tg}\nРоль: ${role}\nС вами свяжутся ${time}`);
    } else {
        alert("Заполните все поля!");
    }
});