window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const english = document.querySelector('.english'); 
const swedish = document.querySelector('.swedish');  

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
 

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript
    .replace(/poop|poo|shit|dump/gi, '💩')
    .replace(/heart|love|nice/gi, '❤️')
    .replace(/frog|frogs|toad|toads/gi, '🐸'); 

   

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});

const recordBtn = document.querySelector('#recordBtn'); 
recordBtn.addEventListener('click', function() {
    function startRecording(){
        recognition.start();
        recognition.addEventListener('end', recognition.start); 
        recordBtn.addEventListener('click', stopRecording); 
        console.log('recording started'); 
    }
    function stopRecording(){
        recognition.removeEventListener('end', recognition.start); 
        recognition.stop(); 
        console.log('recording stopped'); 
    }
    if(recordBtn.value == 'stop') {
        startRecording(); 
        recordBtn.value = 'start'
    } else {
        stopRecording(); 
        recordBtn.value = 'stop'
    }
}); 


function changeLanguageEn(){
    recognition.lang = 'en-US';
}

function changeLanguageSv(){
    recognition.lang = 'sv-SE';
}

english.addEventListener('click', changeLanguageEn); 
swedish.addEventListener('click', changeLanguageSv); 