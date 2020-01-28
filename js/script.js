

function buttonClicked(ButtonName) {  //parametr ButtonName, podczas wywołania przyjmie wartość argumentu np. "kamień"
    
  console.log('guzik ' + '"' + ButtonName + '"' + ' został kliknięty'); 
  clearMessages();  //czysci wynik z poprzedniej rundy
     
  const playerMove = ButtonName, //stała playerMove przyjmuje tą samą wartość co parametr ButtonName 
   randomNumber = Math.floor(Math.random() * 3 + 1);  //losuje liczbe komputera, wyrazenie funkcji z stałą randomnumber
    
  console.log('ruch gracza to: ' + playerMove); 
  console.log('wylosowana liczba to: ' + randomNumber);
    
    
  function getMoveName(MoveId) {  //deklaracja funkcji ktora zamienia liczbe w nazwe- kamień papier lub nożyce

    console.log('wywołano funkcję getMoveName z argumentem: ' + MoveId);
      
    if (MoveId == 1) {
        return 'kamień';
      } else if (MoveId == 2) {
        return 'papier';
      } else {
        return 'nożyce';
      } 
    }
 
    const computerMove = getMoveName(randomNumber); /*wyrażenie funkcji z wylosowana liczbą jako argumentem dla parametru                                                      moveId czyli- parametr przyjmuje 1 2 lub 3, zwraca wartość                                                                  kamien/papier/nożyce i zmienia się w stałą computerMove */
    
    
  console.log('ruch komputera to: ' + computerMove);

    
  function displayResult(PlayerMove, ComputerMove) { //deklaracja funkcji ktora oblicza i pokazuje wynik     
            
    console.log('wywołano funkcję displayResults z argumentami: ' + PlayerMove + ', ' + ComputerMove);
      
    if (PlayerMove == 'papier' && ComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } else if (PlayerMove == 'kamień' && ComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (PlayerMove == 'nożyce' && ComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (PlayerMove == ComputerMove) {
        printMessage('O proszę, mamy REMIS :)');
      } else {
        printMessage('Przegrywasz :(');
      }
        printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
    }


        
  displayResult(playerMove, computerMove); //wywolanie funkci z wynikiem
    
}



const buttonRock = document.getElementById('button-rock'),  //deklaracja stałych i wyrażenie funkcji łączych je z elemenetem button na stronie, umozliwiajace po jego kliknieciu wywolanie funckji butttonClickej- ponizej                        
    buttonPaper = document.getElementById('button-paper'), 
    buttonScissors = document.getElementById('button-scissors');
    

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); }); //wywołanie funkcji w zależności od kliknięcia
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


