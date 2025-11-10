import "./index.css";

const frases = [
  "🌸 La calma es poder en silencio.",
  "☀️ Eres aquello que repites cada día.",
  "🌿 La elegancia empieza cuando decides ser tú misma.",
  "🌼 Lo que buscas también te está buscando.",
  "💫 Cada paso lento también es progreso.",
  "🍃 La serenidad es una forma de fuerza."
];

const fraseEl = document.getElementById("frase");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * frases.length);
  fraseEl.textContent = frases[random];
});
