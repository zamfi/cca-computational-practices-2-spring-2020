# Learning JSON by example!
# by Rolf Widenfelt  (Jan 2020)


## Some simple examples of JSON

```
{"bagels" : 5}

{"school" : "CCA"}

{"movie":"My Architect"}

{"light-switch-1": true}

{"pi": 3.14159265358979 }
```

Note: These are all JSON "Objects". Remember, each one is a pair surrounded by curly braces ({}).
 
* the first term ALWAYS needs quotes
* numbers and certain special words (true, false, null) do not need quotes!
* but everything else needs quotes.


## Here are some counter-examples.  What is wrong with each one?

```
{5: "bagels"}

{"school" : "CCA" : "famous"}
```

The above examples are all "Objects". We can also have "Arrays".

## Some examples of Arrays in JSON

```
[2, 3, 4]

["Pac-Man", "Space Invaders"]

[ {"a":"letter"}, {"four":"number"}, {"honey":"food"}, {"Bobby":"name"} ]

[
  {"title": "Architecture of Happiness", "author": "Alain de Botton"},
  {"title": "Elements of Color", "author": "Johannes Itten"}
]
```

Remember, each one is a list of things (as many as you want) surrounded by square brackets ([]).
Do you think you can put an Array inside an Object?
Yes you can!

```
{"favorites": ["Pac-Man", "Space Invaders"]}
```

That's it.
You now understand the basics of JSON.
Feel free to make up your own examples and try them in the free online editor: (https://jsoneditoronline.org/)

