// Function to switch pages
function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(pg => pg.classList.remove("active"));
  document.getElementById("page" + pageNumber).classList.add("active");

  // Start LOVE animation when reaching page 4
  if (pageNumber === 4) {
    startLoveAnimation();
  }
}

// Moving No button on Page 3
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      const x = Math.floor(Math.random() * (window.innerWidth - 100));
      const y = Math.floor(Math.random() * (window.innerHeight - 100));
      noBtn.style.position = "absolute";
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    });
  }
});

// Page 4 logic
document.addEventListener("DOMContentLoaded", () => {
  const surpriseBtn = document.getElementById("surpriseBtn");
  const loveBtn = document.getElementById("loveBtn");
  const loveContentBox = document.getElementById("loveContentBox");
  const nextBtn = document.getElementById("nextBtn");
  const buttonGroup = document.getElementById("buttonGroup");

  const loveMessages = [
    "Diagnosis:still in love with you.💉💕",
    "You must be my cardiologist,because my heart only beats right when it's with you🩺😘",
    "Careful… keep looking at me like that and I’ll have no choice but to steal you back😘😉",
    "Admit it… you miss fighting with me more than you enjoy peace without me.🤧",
  ];

  let index = 0;

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
      const text = document.createElement("div");
      text.classList.add("surprise-text");
      text.textContent = "You are the most precious part of my life 🎀";
      document.getElementById("page4-content").appendChild(text);
      surpriseBtn.disabled = true;
    });
  }

  if (loveBtn) {
    loveBtn.addEventListener("click", () => {
      if (index < loveMessages.length) {
        const card = document.createElement("div");
        card.classList.add("love-card");
        card.textContent = loveMessages[index];
        loveContentBox.appendChild(card);
        index++;
      } else {
        buttonGroup.style.display = "none";
        nextBtn.style.display = "inline-block";
      }
    });
  }
});
