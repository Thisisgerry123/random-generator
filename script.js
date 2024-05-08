const occurrences = ["mom", "dad", "dog", "brother", "My uncle","Chubby", "The Dark Lord, "];
const actions = ["ate", "forgot", "got lost", "broke", "missed", "urinated", ];
const timings = ["after school", "tomorrow", "before work", "last night", "during lunch", "on the freeway",""];

const excuseElement = document.getElementById("excuse");
const generateButton = document.getElementById("generate-btn");

function generateExcuse() {
  const randomOccurrence = occurrences[Math.floor(Math.random() * occurrences.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomTiming = timings[Math.floor(Math.random() * timings.length)];

  const randomExcuse = `${randomOccurrence} ${randomAction} ${randomTiming}.`;
  excuseElement.textContent = randomExcuse;
}

generateButton.addEventListener("click", generateExcuse);
