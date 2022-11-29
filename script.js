let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
console.log(minValue)

if (isNaN(minValue) || minValue ==="" ){
    isNaN(minValue);
    console.log(minValue)
    minValue = Number("1");
}

let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
if (isNaN(maxValue) || maxValue ==="" ){
    console.log(maxValue)
    maxValue = Number("100");
}

if (maxValue-1 > 999 || minValue< -999){
    alert(`Загадайте любое целое число от -999 до 999, а я его угадаю`);
    minValue = minValue < parseInt (-999 ) ? parseInt(( -999 )) : minValue;
    maxValue = maxValue > parseInt (999 ) ? parseInt(( 999 )) : maxValue;
}else{
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
}

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

 document.getElementById('btnRetry').addEventListener('click', function () {
       /* minValue = 0;
        maxValue = 100;
        orderNumber = 0;*/
        location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random());
            console.log(phraseRandom)
            /*const answerPhrase = (phraseRandom === 1) ?
                `Это явно обман!\n\u{1F914}` :
                `Как же так!?\n\u{1F914}`;*/
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Как же так\n\u{1F605}`;
                        break;
                    case 1:
                        answerPhrase = `Это нереально\n\u{1F610}`;
                        break;
                    case 2:
                        answerPhrase = `Невероятное число\n\u{1F613}`;
                        break;
                
                }
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber +1;
            console.log(minValue)
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber)
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue -1){
            const phraseRandom = Math.round( Math.random()*2);
            console.log(phraseRandom)
            /*const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;*/
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Как же так\n\u{1F605}`;
                        break;
                    case 1:
                        answerPhrase = `Это нереально\n\u{1F610}`;
                        break;
                    case 2:
                        answerPhrase = `Невероятное число\n\u{1F613}`;
                        break;
                
                }
            
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  -1;
            console.log(maxValue)
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber)
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
       // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        
        switch (phraseRandom) {
            case 0:
                answerField.innerText = `Это было легко\n\u{1F60E}`;
                break;
            case 1:
                answerField.innerText = `Еще бы я не отгадал\n\u{1F605}`;
                break;
            case 2:
                answerField.innerText = `Можно было и посложнее\n\u{1F601}`;
                break;
        
        }
        gameRun = false;
    }
})