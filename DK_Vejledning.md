## Hvor langt væk er lynet?
Med koden her, kan din @boardname@ regne ud hvor langt ISS har rejst 

## Ryd skrivebordet
* Slet de to blokke: "når programmet starter" og "for altid"

## Tryk på knap A
For at bruge knap A, skal du finde en blok til hvis A knappen bliver trykket ind. 
* Du kan få et hint ved at trykke på ledetråd knappen.

```blocks
input.onButtonPressed(Button.A, function () {
})
``` 

## Tryk på knap B
Find blokken til at trykke på knap B.

```blocks
input.onButtonPressed(Button.B, function () {
})
```

## Kodning af knap A (1 af 3) 
Opret en variabel, og kald den `||variables:startTid||`

## Kodning af knap A (2 af 3) 
Nu skal vi finde knappen "sæt "startTid" til " og sætte ind i blokken til knap A. 

```blocks
input.onButtonPressed(Button.A, function () {
    startTid = (0)
})
```

## Kodning af knap A (2 af 3) 
Og så skal vi sætte blokken `||input.køretid (ms)||` ind i den tomme plads. 

```blocks
input.onButtonPressed(Button.A, function () {
    startTid = input.runningTime()
})
```

## Kodning af knap A (3 af 3)
Vi vil gerne have skærmen viser et lyn-ikon når man trykker A. 

```blocks
input.onButtonPressed(Button.A, function () {
    startTid = input.runningTime()
    basic.showLeds(`
    . . # . .
    . # . . .
    . . # . .
    . . . # .
    . . # . .
    `)
})
```

## Kodning af knap B (1 af 8) 
Knap B trykkes ind når tordenbraget høres. Her er der en række variable vi skal bruge. Først oprettes variablen slutTid, der sættes til køretiden. 

```blocks
input.onButtonPressed(Button.B, function () {
    // Stop tidsmåling når knap B trykkes
    slutTid = input.runningTime()
})
```

## Kodning af knap B (2 af 8) 
Med regnestykket slutTid - startTid = måltTid, får du den tid der er gået. Vi kalder den sidste variabel måltTid. Du skal nu oprette variablen måltTid og regnestykket. 


```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
})
```


## Kodning af knap B (3 af 8) 
@boardname@ måler tiden i milisekunder. Vi vil gerne måle i sekunder. Derfor skal vi dividere måltTid med 1000. 



```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
})
```

## Kodning af knap B (4 af 8)
I næste skridt skal vi regne afstanden ud. Til det skal vi bruge variablen  `||variables:afstand||`. Opret den. 

## Kodning af knap B (5 af 8) 
Man kan regne afstanden ud, som noget har bevæget sig, hvis man kender hastigheden. Lydens hastighed er ca. 343 meter per sekund. Derfor skal vi gange måltTid med 343 meter per sekund, for at få afstanden til lynet. 


```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    afstand = 343 * måltTid
})
```

## Kodning af knap B (6 af 8) 
På samme måde som da du indsatte lyn-ikonet, skal @boardname@ vise at tordenbraget er registreret. Det viser vi her med et ikon mere. Fx. et node-ikon.


```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    afstand = 343 * måltTid
    basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
})
```

## Kodning af knap B (7 af 8) 
Man skal lige nå at se node-ikonet. Vi lader det derfor stå 1 sekund. Derfor skal du indsætte en pause, der måler i milisekunder. 1 sekund = 1000 ms. 


```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    afstand = 343 * måltTid
    basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
    // Vent et sekund for at vise noden
    basic.pause(1000)
})
```

## Kodning af knap B (8 af 8) 
Efter 1 sekund, skal vi vise  `||variables:afstand||` til lynet, som vi jo har regnet ud. Variablen viser hvor langt væk lynet var målt i meter. 


```blocks
input.onButtonPressed(Button.B, function () {
    slutTid = input.runningTime()
    måltTid = slutTid - startTid
    måltTid = måltTid / 1000
    // Hastighed af lyd i luft er 343 m/s
    afstand = 343 * måltTid
    basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
    // Vent et sekund for at vise noden
    basic.pause(1000)
    basic.showNumber(afstand)
})
```

## Tillykke!
Nu er du færdig med din kode. Du kan nu afprøve om du kan: 
* Let: Kan du ændre pausens længde?
* Let: Kan du ændre så du skriver afstanden i kilometer i stedet for meter? 
* Mellem: Kan du gøre koden kortere? 
* Mellem: Kan du udvide koden, så den animerer at lynet slår ned?
* SVÆR: Bruge 3 eller flere @boardname@ med programmet til at bestemme positionen til en ven der klapper langt væk?
* SVÆR: Finde på noget andet at bruge programmet til?

