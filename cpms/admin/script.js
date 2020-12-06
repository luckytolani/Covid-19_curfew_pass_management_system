let fetchBtn = document.getElementById('btn');

fetchBtn.addEventListener('click', customer);

function customer() {
    var searchdata = document.getElementById('searchdata').value;
    var para = `searchdata=${searchdata}`;
    console.log(para);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'ajx.php', true);

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.send(para);
    xhr.onload = function() {
        var output = document.getElementById('output');
        //if output is successfull this will run
        if (this.status == 200) {
            output.innerHTML = this.response;
        } //if any error occured it will show the error
        else {
            output.innerHTML = `Error with status code ${this.status}`;
        }
    }
}