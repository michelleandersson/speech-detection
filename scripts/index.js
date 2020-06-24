window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

const btnStart = document.querySelector('.start')
const btnEnd = document.querySelector('.end')

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
   console.log(recognition); 
});

recognition.addEventListener('end', recognition.start);
recognition.start();

const handleStop = () => {
    recognition.stop();
    console.log('Speech recognition has stopped.');
}

btnEnd.addEventListener('click', handleStop)