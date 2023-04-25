var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('menu-superior').outerHTML
            = this.responseText;
        alert(4);
    }
}
xhttp.open('GET', 'menu.html', true);
xhttp.send();
