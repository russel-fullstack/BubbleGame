let result = document.querySelector("h3");
result.textContent = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);

  bubble.classList.add("bubble");
  const size = Math.random() * 200 + 150 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  const ajust = Math.random() > 0.5 ? 1 : -1;

  bubble.style.left = Math.random() * 100 * ajust + "%";

  bubble.style.setProperty("--left", Math.random() * 100 * ajust + "%");
  bubble.addEventListener("click", () => {
    bubble.classList.remove("bubble");
    result.textContent++;
  });

  setTimeout(() => {
    bubble.remove();
  }, 5000);
};

setInterval(bubbleMaker, 300);
