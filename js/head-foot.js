var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('Barra').outerHTML
            = this.responseText;
    }
}
xhttp.open('GET', 'Head.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('Footer').outerHTML
            = this.responseText;
    }
}
xhttp.open('GET', 'footer.html', true);
xhttp.send();