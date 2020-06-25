window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
//continuous keeps recording but writes the wrong things
//recognition.continuous = true; 
recognition.lang = 'en-US';
 

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

//this line of code makes the buttons not work
//recognition.addEventListener('end', recognition.start); 

const recordBtnEn = document.querySelector('#recordBtnEn'); 
recordBtnEn.addEventListener('click', function() {
    recognition.lang = 'en-US';
    function startRecording(){
        recognition.start();
        console.log('recording started EN'); 
    }
    function stopRecording(){ 
        recognition.stop(); 
        console.log('recording stopped EN'); 
    }
    if(recordBtnEn.value == 'start') {
        stopRecording(); 
        recordBtnEn.value = 'stop'
    } else {
        startRecording(); 
        recordBtnEn.value = 'start'
    }
}); 
const recordBtnSe = document.querySelector('#recordBtnSe'); 
recordBtnSe.addEventListener('click', function() {
    recognition.lang = 'sv-SE';
    function startRecording(){
        recognition.start();
        console.log('recording started SE'); 
    }
    function stopRecording(){ 
        recognition.stop(); 
        console.log('recording stopped SE'); 
    }
    if(recordBtnSe.value == 'start') {
        stopRecording(); 
        recordBtnSe.value = 'stop'
    } else {
        startRecording(); 
        recordBtnSe.value = 'start'
    }
}); 