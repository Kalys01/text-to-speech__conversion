let msg = document.querySelector('#msg-text');
let btnspeak = document.querySelector('#speak');


function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = 'ru-RU';
    message.text = text;
    window.speechSynthesis.speak(message);
}
btnspeak.addEventListener('click', function() {  
    speak(msg.value);
  });
