### Step 1  
Create a *Hola* directive that will display text "Hello [name]!" in a H1 element in spanish.   
Where name will be taken from directive argument:
`````<hola name="{{app.name}}></hola>"`````  
Use it on app.html page.

### Step 2

Read section *How directives are compiled* from: 
[https://docs.angularjs.org/guide/compiler](https://docs.angularjs.org/guide/compiler)

Based on documentation try to write a jasmine test to see if directive is displaying text provided on scope.

### Step 3
Write a test to check binding `name` argument. Check if when `name` is changed on scope - change is reflected in directive.  
Heads up: Check out `$apply` function.


