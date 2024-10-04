// Добавляем обработчик события клика на элемент с id 'menu-toggle'
document.getElementById('menu-toggle').addEventListener('click', function() {
    // Находим элемент сайдбара по id 'sidebar'
    var sidebarEl = document.getElementById('sidebar');
    // Получаем текущий стиль элемента
    var sidebar = window.getComputedStyle(sidebarEl).left;

    // Преобразуем значение sidebar в число для сравнения
    if (parseInt(sidebar) < 0) {
        // Если сайдбар скрыт, показываем его
        sidebarEl.style.left = '0';
    } else {
        // Иначе, скрываем сайдбар
        sidebarEl.style.left = '-250px';
    }
});

// Добавляем обработчик события клика на элемент с id 'sidebar-close'
document.getElementById('sidebar-close').addEventListener('click', function() {
    // Находим элемент сайдбара по id 'sidebar' и скрываем его
    document.getElementById('sidebar').style.left = '-250px';
});
