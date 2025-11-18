// --- Questions (anime + gym + princess) ---
const QUESTIONS = [
  { q: "1) Gym Encouragement — How will you hype them?", choices: ["A) Drag them to gym like a hero", "B) Spam gym memes", "C) Flex together", "D) Create a pink workout plan"] },
  { q: "2) Daily Sparkle — Glitter level?", choices: ["A) Subtle", "B) Cute", "C) Maximum", "D) Full princess makeover"] },
  { q: "3) Snack Pact — When they snack?", choices: ["A) Share happily", "B) Secretly steal", "C) Bring healthy snack disguised as candy", "D) Cheer them on"] },
  { q: "4) Birthday Drama — Your move?", choices: ["A) Overhype on socials", "B) Surprise gym party", "C) Write a heartfelt note", "D) All of the above"] },
  { q: "5) Meme Supply — Frequency?", choices: ["A) 3/day", "B) 10/day", "C) 100 if ignored", "D) Gym memes Mondays"] },
  { q: "6) Roasting Protocol — Allowed when?", choices: ["A) Minor mistakes", "B) They miss reps", "C) They go emo", "D) Always lovingly"] },
  { q: "7) Secrets — Can you keep them?", choices: ["A) Yes", "B) Try my best", "C) Maybe", "D) I leak cute pics instead"] },
  { q: "8) Mood Lifters — Best method?", choices: ["A) Anime scenes", "B) Cute dog videos", "C) Chocolate delivery", "D) Gym sesh together"] },
  { q: "9) Silliness — Will you join cringe reels?", choices: ["A) Yes", "B) Only for them", "C) Absolutely", "D) Depends on outfit"] },
  { q: "10) Eternal Enrollment — Do you accept? (Only YES)", choices: ["YES"] },
  { q: "11) Princess Gym Challenge — Kawaii Squats?", choices: ["Y", "N"] },
  { q: "12) Anime Fundamentals — Will you strike a dramatic pose pre-lift?", choices: ["Y", "N"] }
];

const state = { answers: Array(QUESTIONS.length).fill(null), name: "Shub" };

// --- Generate QR pointing to your live site (update after deployment) ---
new QRCode(document.getElementById("qrcode"), {
  text: "https://sushmasanjeev2006-dotcom.github.io/princess-portal-shub/", // update after enabling GitHub Pages
  width: 200,
  height: 200,
  colorDark: "#000",
  colorLight: "#fff",
  correctLevel: QRCode.CorrectLevel.H
});

// --- Render quiz ---
const quizContainer = document.getElementById("quiz-container");
QUESTIONS.forEach((question, index) => {
  const el = document.createElement("div");
  el.innerHTML = `
    <p>${question.q}</p>
    <ul>
      ${question.choices
        .map((choice, i) => `
          <