function rockPaperScissors(player1, player2)
{
    var player1;
    var player2;

    if (player1 === player2) {
        console.log('Remis');
    } else if ((player1=='papier') && (player2=='nozyce')) {
        console.log('gracz 2 wygrał');
    } else if ((player1=='papier') && (player2=='kamien')) {
        console.log('gracz 1 wygrał');
    } else if ((player1=='nozyce') && (player2=='papier')) {
        console.log('gracz 1 wygral');
    } else if ((player1=='nozyce') && (player2=='kamien')) {
        console.log('gracz 2 wygral');
    } else if ((player1=='kamien') && (player2=='papier')) {
        console.log('gracz 2 wygral');
    } else if ((player1=='kamien') && (player2=='nozyce')) {
        console.log('gracz 1 wygral');
    } else {
        console.log('błedne informacje');
    }
}
rockPaperScissors('kamien', 'papier');
