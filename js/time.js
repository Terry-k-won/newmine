const targetTimeStr = new Date("2026/07/05 00:00:00");

const getTimeRemaining = (targetTime) => {
  const currentTime = new Date();
  const differentTime = targetTime - currentTime;

  const days = Math.floor(differentTime / 1000 / 60 / 60 / 24).toString();
  const hours = (Math.floor(differentTime / 1000 / 60 / 60) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = (Math.floor(differentTime / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = (Math.floor(differentTime / 1000) % 60)
    .toString()
    .padStart(2, "0");

  return {
    differentTime,
    days,
    hours,
    minutes,
    seconds
  };
};

const initializeClock = (targetTime) => {
  const days = document.querySelector(".days").querySelector(".flip-card");
  const hours = document.querySelector(".hours").querySelector(".flip-card");
  const minutes = document
    .querySelector(".minutes")
    .querySelector(".flip-card");
  const seconds = document
    .querySelector(".seconds")
    .querySelector(".flip-card");

  const updateClock = () => {
    const t = getTimeRemaining(targetTimeStr);

    if (t.differentTime <= 0) {
      clearInterval(timeinterval);
    } else {
      addFlip(days, t.days);
      addFlip(hours, t.hours);
      addFlip(minutes, t.minutes);
      addFlip(seconds, t.seconds);
    }
  };

  const timeinterval = setInterval(updateClock, 1000);
};

const addFlip = (card, time) => {
  const currTime = card.querySelector(".top-half").innerText;
  if (time == currTime) return;

  let t = time;
  const topHalf = card.querySelector(".top-half");
  const bottomHalf = card.querySelector(".bottom-half");
  const topFlip = document.createElement("div");
  const bottomFlip = document.createElement("div");

  topFlip.classList.add("top-flip");
  bottomFlip.classList.add("bottom-flip");

  topFlip.innerText = currTime;

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = t;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
    bottomFlip.innerText = t;
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = t;
    bottomFlip.remove();
  });

  card.appendChild(topFlip);
  card.appendChild(bottomFlip);
};

initializeClock(targetTimeStr);
