

function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            return (num < 10 ? '0' : '') + num;
        };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes());
}



let date_input = document.getElementById("dateInput");
let button = document.getElementById('button');
let classList = document.getElementById("classList");
button.addEventListener('click', event => {
    let date = new Date(date_input.value)
    console.log(toIsoString(date));
    var li = document.createElement("li");
    li.className = 'list-group-item';
    li.textContent = toIsoString(date);
    classList.appendChild(li);
})