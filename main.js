let msg = document.querySelector('#msg-text');
let btnspeak = document.querySelector('#speak');

function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = 'en-US';
    message.text = text;
    window.speechSynthesis.speak(message);
}
btnspeak.addEventListener('click', function() {  
    speak(msg.value);
  });
