function getdetails() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", 'ajax.php', true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        var out = document.getElementById('output');
        if (this.status === 200) {
            out.innerHTML = this.responseText;
        } else {
            out.innerHTML = `Error Code ${this.status}`;
        }
    }
    var num = document.getElementById('num').value;
    var param = `num=${num}`;
    console.log(param);
    xhr.send(param);
}