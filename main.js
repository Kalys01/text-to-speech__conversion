let msg = document.querySelector('#msg-text');
let btnspeak = document.querySelector('#speak');
let btnclear = document.querySelector('#clear');

function check(){
    if (msg.value) {
        btnclear.classList.remove('empty');
        if (empty(msg.value)) {
            btnspeak.classList.remove('empty');
        }
    }else {
        btnspeak.classList.add('empty');
        btnclear.classList.add('empty');
    }
}

function empty(s){
    if(s.trim() !== '')
        return true;
    return false;
}

function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = 'ru-RU';
    message.text = text;
    window.speechSynthesis.speak(message);
}

function fclear() {
    msg.value = "";
    btnspeak.classList.add('empty');
    btnclear.classList.add('empty');
}

btnspeak.addEventListener('click', function() {  
    speak(msg.value);
});
btnclear.addEventListener('click', fclear);
msg.addEventListener('input', check);
