# CSS &ndash; Stylowanie tekstu

> Zadania rozwiązuj w plikach ```index.html``` oraz ```css/style.css```. Zawsze sprawdzaj, czy czcionki dołączane do projektu działają!

## Zadania rozwiązywane z wykładowcą

### Dodawanie rodziny czcionek do projektu (~ 8min - 10min)
Dodaj dowolny tekst do pliku **index.html** i ustaw dla niego font wygenerowany ze strony  [transfonter.org](http://transfonter.org/).

Zrób następujące kroki:
*  Wejdź na [google.com/fonts](https://www.google.com/fonts) i znajdź rodzinę czcionek **Lato**.
*  Wybierz font. Pojawi się nowe okno z dodatkowymi opcjami. W prawym górnym rogu jest przycisk pozwajalący na ściągnięcie plików. Ściągnij je.
*  Po ściągnięciu zbioru na dysk rozpakuj archiwum. Zwróć uwagę na liczbę plików. Dlaczego jest ich tak dużo?
*  Wejdź na [transfonter.org](http://transfonter.org/).
*  Naciśnij przycisk **Add Fonts** i ze swojego komputera wybierz plik **Lato-Regular.ttf**.
*  Włącz dodatkowe opcje:
	* **Familly support** - atrybut ```font-family``` dla wszystkich czcionek z tej samej rodziny ma tą samą wartość
	* **Add local() rule** - wyszukuj najpierw czcionkę na komputerze użytkownika, załaduj ją dopiero gdy jej nie ma
	* Zaznacz wszystkie formaty czcionek
*  Kliknij przycisk **Convert**, poczekaj chwilę, ściągnij archiwum i je rozpakuj.
* W katalogu projektu stwórz jeszcze jeden katalog o nazwie ```fonts```. Umieść w nim wszystkie pliki fontu (zwróć uwagę na rozszerzenia plików w archiwum).
* Otwórz plik ```style.css``` i  przekopiuj kod załączający font z pliku ```stylesheet.css```: ```@font-face```. Ustaw odpowiednio ścieżki do katalogu fonts:
	* ```../``` &ndash; wyście z katalogu,  
	* ```/fonts``` &ndash; wejście do katalogu ```fonts```
* Przetestuj w przeglądarce/przeglądarkach, czy font został załączony poprawnie.

-------------------------------------------------------------------------------

### Zadanie 1. Generowanie dodatkowych czcionek (~ 4min - 6min)
Spróbuj dodać jeszcze jeden rodzaj czcionki. Wygeneruj odpowiednie rozszerzenia zgodnie z krokami w zadaniu pierwszym. Wybierz dowolną czcionkę.


### Zadanie 2. Używanie Google Fonts (~ 3min - 5min)
 Wejdź na stronę [google.com/fonts](https://www.google.com/fonts), wybierz dowolny font i załącz go bezpośrednio do swojego projektu.

### Zadanie 3. Używanie Font Squirrel (~ 8min - 10min)

Dodaj dowolny tekst do pliku index.html i ustaw dla niego font wygenerowany ze [fontsquirrel.com](http://www.fontsquirrel.com/).

 Zrób następujące kroki:
 * Za pomocą strony [fontsquirrel.com](http://www.fontsquirrel.com/) ściągnij dowolny font na dysk w formacie ```ttf```.
 * Na tej samej stronie przejdź do generatora i załaduj do niego ściągnięty font. Wystarczy jeden rodzaj np. **regular** lub **bold**.
 * Wybierz opcję *standard BASIC* i zaznacz oświadczenie, że font został ściągnięty legalnie.
 * Po ściągnięciu zbioru na dysk rozpakuj archiwum.
 * W katalogu projektu stwórz jeszcze jeden katalog o nazwie ```fonts```. Umieść w nim wszystkie pliki fontu.
 * Otwórz plik ```style.css``` i  przekopiuj kod załączający font: ```@font-face```. Ustaw odpowiednio ścieżki do katalogu fonts:
 	* ```../``` &ndash; wyście z katalogu,  
 	* ```/fonts``` &ndash; wejście do katalogu ```fonts```,  
 *	Przetestuj w przeglądarce/przeglądarkach, czy font został załączony poprawnie.
