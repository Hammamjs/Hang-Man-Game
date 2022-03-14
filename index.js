const letters = 'abcdefghijklmnopqrstuvwxyz';

let theWords = Array.from(letters);

let letterContainer = document.querySelector('.letters');
let letterContainerGuess = document.querySelector('.letters-guess');

    let wrongAttemps = 0;
    let rightAttemps = 0;

let theDraw = document.querySelector('.hang-draw');


theWords.forEach(letter => {

    let letterSpan = document.createElement('span');
    letterSpan.className = 'letter';

    let letterText = document.createTextNode(letter);

        letterSpan.appendChild(letterText);

        letterContainer.append(letterSpan);


});


let Words = {
    programming : ['python' , 'go' , 'java' , 'javascript'],
    people : ['messi' , 'ronaldo' , 'albert inchtayn' , 'cillian murphy'],
    Cars : ['mercedes' , 'ferrari' , 'jeep' , 'lamborgihini'],
    colors : ['blue' , 'red' , 'grey' , 'green'],
    movies : ['inception' , 'cars' , 'John wick' , 'Taken']
}

let wordProp = Object.keys(Words);
let randomWordPropNumber = Math.floor(Math.random() * wordProp.length);
let randomPropName = wordProp[randomWordPropNumber];
let randomPropValue = Words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValue = randomPropValue[randomValueNumber].toLowerCase();

document.querySelector('.game-info .category span').innerHTML = randomPropName;

let letterGuess = Array.from(randomValue);

letterGuess.forEach(letter => {
    let wordSpan = document.createElement('span');
    if (letter == ' ') {
        wordSpan.className = 'has-space';
    }
    letterContainerGuess.append(wordSpan)




});


let guessSpans = document.querySelectorAll('.letters-guess span');






document.addEventListener('click' , (e) => {

    let Status = false;

    if (e.target.className === 'letter') {
        e.target.classList.add('clicked');
    }

    let clickedletter = e.target.innerHTML.toLowerCase();

    let chosenWord = Array.from(randomValue);

    chosenWord.forEach((wordLetter , Wordindex) => {

        if (clickedletter === wordLetter) {

            rightAttemps++;

            Status = true;


            guessSpans.forEach((span , spanindex) => {

                if (Wordindex === spanindex) {

                    span.innerHTML = clickedletter;

                    
                }
            });

        };
    })

if (Status !== true) {
    wrongAttemps++;
    
    theDraw.classList.add(`wrong-${wrongAttemps}`)
    document.getElementById('fail').play();

    theDraw.classList.add('finished')

    endGame();

}
else {

    // rightAttemps += 1.5;

    document.getElementById('succes').play();

    if (rightAttemps === guessSpans.length) {
        letterContainer.classList.add('finished');
        let winSpan = document.createElement('div');
        winSpan.classList = 'winner-message';


        let winText;

        if (wrongAttemps === 0) {

            winText = document.createTextNode(`You win in The Game congrats with ${wrongAttemps} Mistake ! Excellent`);
        winSpan.appendChild(winText);

        }
        else if (wrongAttemps === 2) {

            winText = document.createTextNode(`You win in The Game congrats with ${wrongAttemps} Mistakes ! Great`);
        winSpan.appendChild(winText);

        }
        else if (wrongAttemps === 4) {

            winText = document.createTextNode(`You win in The Game congrats with ${wrongAttemps} Mistakes ! Not Bad`);
        winSpan.appendChild(winText);

        }
        else if (wrongAttemps === 7) {

            winText = document.createTextNode(`You win in The Game congrats with ${wrongAttemps} Mistakes ! take Another Try`);
        winSpan.appendChild(winText);

        }else {
            winText = document.createTextNode(`You win in The Game congrats`);
        winSpan.appendChild(winText);
        }

        theDraw.append(winSpan);
                setTimeout(() => {
            window.location.reload();
        } , 3000)

    }
    

    // console.log('letterGuess ' +letterGuess.length);
}


})



function endGame() {

        if (wrongAttemps === 8 ) {
        letterContainer.classList.add('finished');
        let faliedSpan = document.createElement('div');
        faliedSpan.classList = 'failed-message';
        let failedText = document.createTextNode(`You Lost! Game Over The Word is ${randomValue}`);
        faliedSpan.appendChild(failedText);
        theDraw.append(faliedSpan);
        setTimeout(() => {
            window.location.reload();
        } , 5000)
    }
}




    function helpHand() {
        let chosenWord = Array.from(randomValue);
        guessSpans = document.querySelector('.letters-guess span:last-child');
        let firstguessSpans = document.querySelector('.letters-guess span:first-child');
        let lastIndex = chosenWord.length - 1;
        if (chosenWord.length >= 7) {
            chosenWord.forEach((el  , index) => {
            index === lastIndex ? guessSpans.innerHTML = el  : '';
            index === 0 ? firstguessSpans.innerHTML = el : '';
        })
        }
    }