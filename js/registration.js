document.getElementById("submit").addEventListener("click", function() {
    let someText = "";
    let name = document.getElementById("name").value;
    someText += "Имя: " + name + "\n" ;

    let surname = document.getElementById("surname").value;
    someText += "Фамилия: " + surname + "\n";

    let country = document.getElementById("country").value;
    someText += "Страна: " + country + "\n";

    let date = document.getElementById("date").value;
    someText += "Дата: " + date + "\n";
    
    let email = document.getElementById("email").value;
    someText += "Почта: " + email + "\n";

    let phone = document.getElementById("phone").value;
    someText += "Телефон: " + phone + "\n";

    let isBoss = confirm(someText + "Если данные верные, то нажмите OK");
    if (isBoss) {
        alert("Бронь произведена успешно!");
    } else {
        alert("Бронь отменена!");
    }
});

