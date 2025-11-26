document.addEventListener("DOMContentLoaded", () => {

  // mensaje personalzado segun la hora y el idioma //
  const saludo = document.createElement("p");
  saludo.id = "saludo";
  saludo.style.textAlign = "center";
  saludo.style.color = "white";
  saludo.style.fontFamily = "Press Start 2P, sans-serif";
  saludo.style.fontSize = "0.9rem";
  saludo.style.margin = "10px 0";

  const hora = new Date().getHours();
  const idioma = navigator.language || navigator.userLanguage;
  let mensaje = "";

  if (hora < 12) mensaje = "☀️ ¡Hey,Buenos días!";
  else if (hora < 18) mensaje = "🌤️ ¡oye,Buenas tardes!";
  else mensaje = "🌙 ¡muy Buenas noches!";

  if (idioma.startsWith("en")) mensaje = "🇬🇧 Hello! Welcome to the Japan Icons Site.";
  else mensaje += " Bienvenido a Personajes Icónicos del Japón.";

  const header = document.querySelector("header");
  if (header) header.appendChild(saludo);
  saludo.textContent = mensaje;


  // menú desplegable para el apartado de  musica //
  const nav = document.querySelector("nav ul");
  if (nav) {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = `<a href="#">🎵 Música ▼</a>`;

    const submenu = document.createElement("ul");
    submenu.innerHTML = `
      <li><a href="https://www.youtube.com/watch?v=JBqxVX_LXvk&list=RDQMuB5fa6RAmFg&index=1" target="_blank">Música de Anime</a></li>
      <li><a href="https://www.youtube.com/watch?v=zeKE0NHUtUw&list=PLrnb8c3hFJatjyJ-wFMuFGANNoo7-LZsG&index=1" target="_blank">Música de Videojuegos</a></li>
    `;

    submenu.style.display = "none";
    submenu.style.background = "#111";
    submenu.style.position = "absolute";
    submenu.style.padding = "10px";
    submenu.style.borderRadius = "8px";
    submenu.style.listStyle = "none";
    submenu.style.zIndex = "10";

    menuItem.appendChild(submenu);
    nav.appendChild(menuItem);

    menuItem.addEventListener("mouseover", () => submenu.style.display = "block");
    menuItem.addEventListener("mouseout", () => submenu.style.display = "none");
  }


  // slider para imagenes automatico y manual //
  const esIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");
  if (esIndex) {
    const sliderContainer = document.createElement("section");
    sliderContainer.id = "slider";
    sliderContainer.style.textAlign = "center";
    sliderContainer.style.margin = "30px auto";
    sliderContainer.style.display = "flex";
    sliderContainer.style.flexDirection = "column";
    sliderContainer.style.alignItems = "center";
    sliderContainer.style.justifyContent = "center";

    const img = document.createElement("img");
    img.id = "slider-img";
    img.src = "images/goku.png";
    img.alt = "Personajes icónicos del Japón";

    // ajuste de imagenes del slider //
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.objectFit = "contain";
    img.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    img.style.borderRadius = "10px";
    img.style.transition = "opacity 0.5s ease";
    img.style.marginBottom = "10px";
    sliderContainer.appendChild(img);

    // Botones manuales del slider //
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.justifyContent = "center";
    btnContainer.style.gap = "10px";

    const btnPrev = document.createElement("button");
    btnPrev.textContent = "⟨";
    btnPrev.style.padding = "6px 12px";
    btnPrev.style.borderRadius = "8px";
    btnPrev.style.border = "none";
    btnPrev.style.background = "black";
    btnPrev.style.color = "white";
    btnPrev.style.cursor = "pointer";

    const btnNext = document.createElement("button");
    btnNext.textContent = "⟩";
    btnNext.style.padding = "6px 12px";
    btnNext.style.borderRadius = "8px";
    btnNext.style.border = "none";
    btnNext.style.background = "black";
    btnNext.style.color = "white";
    btnNext.style.cursor = "pointer";

    btnContainer.appendChild(btnPrev);
    btnContainer.appendChild(btnNext);
    sliderContainer.appendChild(btnContainer);

    const main = document.querySelector("main");
    if (main) main.prepend(sliderContainer);

    const imagenes = [
      "images/goku.png",
      "images/naruto.png",
      "images/mario.png",
      "images/sonic.png",
      "images/pikachu.png"
    ];

    let i = Math.floor(Math.random() * imagenes.length);

    function mostrarImagen() {
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = imagenes[i];
        img.style.opacity = 1;
      }, 300);
    }

    function siguiente() {
      i = (i + 1) % imagenes.length;
      mostrarImagen();
    }

    function anterior() {
      i = (i - 1 + imagenes.length) % imagenes.length;
      mostrarImagen();
    }

    btnNext.addEventListener("click", siguiente);
    btnPrev.addEventListener("click", anterior);

    setInterval(siguiente, 3000);

    mostrarImagen();
  }
});



