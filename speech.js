const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll("[type='range'],[name='text']");
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector("[name='text']").value;

 function  populateVoices() {
   voices =  this.getVoices();
  voicesDropdown.innerHTML = voices
    // .filter(voice => voice.lang.includes("en"))
    .map((voice, i) => {
      const voiceName = voice.name.slice(0, 25);
      return `<option value="${voiceName}">${voiceName} (${voice.lang})</option>`;
    })
    .join("");
}
function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}
function setOptions() {
  msg[this.name] = [this.value];
  // toggle();
}
console.log(speechSynthesis);


speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOptions));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
