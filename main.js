for (let i = 1; i <= 3; i++) {
    let name = prompt(`Введите имя гостя №${i}:`);


    if (name === null) {
        alert("Регистрация прервана.");
        console.log("Регистрация прервана пользователем.");
        break;
    }


    let age;

    while (true) {
        let input = prompt(`Введите возраст для ${name}:`);

        if (input === null || input.trim() === "" || isNaN(input)) {
            alert("Ошибка! Введите корректный возраст.");
            continue;
        }

        age = Number(input);
        break;
    }


    if (name.toLowerCase() === "admin") {
        alert(`Добро пожаловать, ${name}! Доступ разрешён.`);
        console.log(`${name} (возраст: ${age}) — Администратор. Доступ разрешён.`);
    } else if (age >= 18) {
        alert(`Добро пожаловать, ${name}! Доступ разрешён.`);
        console.log(`${name} (возраст: ${age}) — Доступ разрешён.`);
    } else {
        let yearsLeft = 18 - age;
        alert(`Доступ запрещён! До совершеннолетия осталось ${yearsLeft} лет.`);
        console.log(`${name} (возраст: ${age}) — Доступ запрещён. Осталось ${yearsLeft} лет.`);
    }
}

