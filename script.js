document.addEventListener('DOMContentLoaded', function () {
    function numeroAleatorio() {
        return Math.floor(Math.random() * 6) + 1;
    }

    let dado1 = numeroAleatorio();
    let dado2 = numeroAleatorio();

    let ramdomDiceSource = './assets/dice' + dado1 + '.png';
    let ramdomDiceSource2 = './assets/dice' + dado2 + '.png';

    let image1 = document.querySelectorAll('img')[0];
    image1.setAttribute('src', ramdomDiceSource);

    let image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src', ramdomDiceSource2);

    setTimeout(function () {
        if (dado1 === dado2){
            alert('Temos um empate. Atualize novamente');
        }
        else if (dado1 > dado2) {
            alert('Player 1 Venceu');
        } else if (dado2 > dado1) {
            alert('Player 2 Venceu');
        }
    }, 400); 
});
