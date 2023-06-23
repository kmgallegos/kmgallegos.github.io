document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las etiquetas de navegación
    const navItems = document.querySelectorAll(".nav_items");
  
    // Agregar un controlador de eventos a cada etiqueta de navegación
    navItems.forEach(function(navItem) {
      navItem.addEventListener("click", function(event) {
        event.preventDefault();
  
        // Obtener el atributo href del enlace
        const target = this.getAttribute("href");
  
        // Obtener la posición del elemento de destino
        const targetPosition = document.querySelector(target).offsetTop;
  
        // Desplazarse suavemente a la posición de destino
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"

          
        });
      });
    });
  });
  // Obtener referencia al botón
const descargarBtn = document.getElementById('descargar-btn');

// Agregar evento de clic al botón
descargarBtn.addEventListener('click', function() {
  // Redireccionar a la página web deseada
  window.open('https://www.apple.com/la/app-store/', '_blank'); // Reemplaza con la URL deseada
});

const contactanosBtn = document.getElementById('contactanos-btn');

// Agregar evento de clic al botón
contactanosBtn.addEventListener('click', function() {
  // Redireccionar a la página web deseada
  const target = this.getAttribute("href");
  
  // Obtener la posición del elemento de destino
  const targetPosition = document.querySelector(target).offsetTop;

  // Desplazarse suavemente a la posición de destino
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  })
});
  // Obtener referencia al botón
  const servlink1 = document.getElementById('serv1');

  // Agregar evento de clic al botón
  servlink1.addEventListener('click', function() {
    // Redireccionar a la página web deseada
    window.open('https://aws.amazon.com/es/free/?gclid=CjwKCAjwyeujBhA5EiwA5WD7_eFtA67LR8GB2JzHJnVvX_X39NCuTHVJyUqfu6I8YFxtSFHMpz_m8BoCjhIQAvD_BwE&trk=d52aec88-a537-43db-8d4f-a2641c2c3dde&sc_channel=ps&ef_id=CjwKCAjwyeujBhA5EiwA5WD7_eFtA67LR8GB2JzHJnVvX_X39NCuTHVJyUqfu6I8YFxtSFHMpz_m8BoCjhIQAvD_BwE:G:s&s_kwcid=AL!4422!3!648114124280!e!!g!!amazon%20cloud%20server!19685287135!147473976193&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all', '_blank'); // Reemplaza con la URL deseada
  });
  const servlink2 = document.getElementById('serv2');

  // Agregar evento de clic al botón
  servlink2.addEventListener('click', function() {
    // Redireccionar a la página web deseada
    window.open('https://www.domain.com/domains/?utm_source=google&utm_medium=genericsearch&gad=1&gclid=CjwKCAjwyeujBhA5EiwA5WD7_T--wXu1e_SNpw6Sy14z7DvdpJQIQ9aKiM00dQmWXfKF9LhGE164qxoCgJgQAvD_BwE&gclsrc=aw.ds', '_blank'); // Reemplaza con la URL deseada
  });
  const servlink3 = document.getElementById('serv3');

  // Agregar evento de clic al botón
  servlink3.addEventListener('click', function() {
    // Redireccionar a la página web deseada
    window.open('https://www.google.com', '_blank'); // Reemplaza con la URL deseada
  });

  const enviarBtn = document.getElementById('enviar');

// Agregar evento de clic al botón
enviarBtn.addEventListener('click', function() {
  // Redireccionar a la página web deseada
  window.open('https://www.google.com', '_blank'); // Reemplaza con la URL deseada
});
const appleBtn = document.getElementById('apple');

// Agregar evento de clic al botón
appleBtn.addEventListener('click', function() {
  // Redireccionar a la página web deseada
  window.open('https://www.apple.com/app-store/', '_blank'); // Reemplaza con la URL deseada
});
const androidBtn = document.getElementById('android');

// Agregar evento de clic al botón
androidBtn.addEventListener('click', function() {
  // Redireccionar a la página web deseada
  window.open('https://play.google.com/store/games', '_blank'); // Reemplaza con la URL deseada
});
