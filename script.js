function nightTime() {
    const css = document.querySelector("link");
    css.setAttribute("href", "night.css");
    const h1 = document.querySelector("h1");
    h1.innerHTML = "Está uma linda noite estrelada lá fora!";
    const img = document.querySelector("img");
    img.setAttribute("src", "src/moon.png")
    const button = document.querySelector("button")
    button.innerHTML = "Clique aqui para mudar para dia";
    button.setAttribute("onclick", "dayTime()")
    const icon = document.querySelector("#favicon");
    icon.setAttribute("href", "src/lua.svg");
    const title = document.querySelector("title");
    title.innerHTML = "Noite Estrelada";
}

function dayTime() {
    const link = document.querySelector("link");
    link.setAttribute("href", "day.css");
    const title = document.querySelector("title");
    title.innerHTML = "Dia Ensolarado";
    const icon = document.querySelector("#favicon");
    icon.setAttribute("href", "src/sun.svg");
    const img = document.querySelector("img");
    img.setAttribute("src", "src/sun.png");
    const h1 = document.querySelector("h1");
    h1.innerHTML = "Está um lindo dia ensolarado lá fora!";
    const button = document.querySelector("button");
    button.innerHTML = "Clique aqui para mudar para noite";
    button.setAttribute("onclick", "nightTime()");
}