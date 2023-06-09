var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('menu-superior').outerHTML
            = this.responseText;
    }
}
xhttp.open('GET', 'menu.html', true);
xhttp.send();



// sw.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          './css/style.css', // Reemplaza esto con la ruta correcta a tu archivo CSS
        ]);
      })
    );
  });

  // sw.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('image-cache').then(function(cache) {
        return cache.addAll([
          '/path/to/image1.jpg', // Reemplaza esto con la ruta correcta a tu imagen
          '/path/to/image2.png' // Puedes agregar más imágenes aquí
        ]);
      })
    );
  });

  // Ejemplo de lazy loading de imágenes
const images = document.querySelectorAll('img[data-src]');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');

        img.setAttribute('src', src);
        img.removeAttribute('data-src');

        observer.unobserve(img);
      }
    });
  });

  io.observe(target);
};

images.forEach(image => {
  lazyLoad(image);
});