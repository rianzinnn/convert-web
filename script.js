const botao = document.getElementById("mudar-tema");

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    botao.textContent = "☀️";
} else {
    botao.textContent = "🌙";
}

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botao.textContent = "☀️";
        localStorage.setItem("tema", "dark");
    } else {
        botao.textContent = "🌙";
        localStorage.setItem("tema", "light");
    }
});