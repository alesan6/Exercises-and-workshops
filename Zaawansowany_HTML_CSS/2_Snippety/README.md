<img alt="Logo" src="http://coderslab.pl/wp-content/themes/coderslab/svg/logo-coderslab.svg" width="400">

# Zaawansowany HTML i CSS - Snippety
> Kilka ważnych informacji


Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

### 1. Jak zrobić prosty formularz logowania?
Zwróć uwagę jakie pola zostay wykorzystane do jego stworznia.

```html
<form class="form">
    <fieldset>
        <legend>Logowanie</legend>

        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">

        <label for="remember-me">
            <input id="remember-me" type="checkbox"> Zapamiętaj mnie
        </label>

        <button type="submit" class="button"></button>
    </fieldset>
</form>
```

### 2. Wyśrodkowanie elementu w pionie i poziomie wewnątrz innego elementu

```html
<div class="one">
    <div class="two">
    </div>
</div>
```

```css
.one {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: blue;
}

.two {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    background-color: red;
}
```
Więcej informacji znajdziesz [pod tym linkiem](https://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/).


### 3. Prosty clearfix

```css
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
    clear: both;
}


```

Więcej informacji znajdziesz [pod tym linkiem](http://stackoverflow.com/questions/8554043/what-is-a-clearfix).
