function displayRecommendation(response) {
  console.log("recommendation is generated");
  new Typewriter("#recommended", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function getRecommendation(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#form-input");
  let apiKey = `befe28ed9d48eac93fd074tafa91d7of`;
  let prompt = `Please recommend 3 movies about ${userInstructions.value} with a short description of the movie.`;
  let context = `You are a movie expert AI assistant. Please use < /br> to divide each recommended movie and sign below your recommendation as SheCodes AI and use <strong> element to display the signature. `;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`generating recommendation`);
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  let recommendationElement = document.querySelector("#recommended");
  recommendationElement.classList.remove("hidden");
  recommendationElement.innerHTML = `<div class="blink"> Generating in progress </div>`;

  axios.get(apiUrl).then(displayRecommendation);
}

let recommendationFormElement = document.querySelector("#recommendation-form");
recommendationFormElement.addEventListener("submit", getRecommendation);
