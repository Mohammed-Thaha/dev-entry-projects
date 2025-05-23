let speech = new SpeechSynthesisUtterance();
let voices = [];
let voice_select = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  for (let i = 0; i < voices.length; i++) {
    voice_select.options[i] = new Option(voices[i].name, i);
  }
};
speech.rate = 1;
voice_select.addEventListener("change", () => {
  speech.voice = voices[voice_select.value];
});
//Listent the voice
document.querySelector("button").addEventListener("click", () => {
  console.log(speech);
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
//clear the Text
document.getElementById("btn").addEventListener("click", () => {
  document.querySelector("textarea").value = "";
});
