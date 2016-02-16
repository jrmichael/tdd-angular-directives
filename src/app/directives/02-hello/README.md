### Step 1  
Create a *Hola* directive that will display text "Hello [name]!" in a H1 element in spanish.   
Where name will be taken from directive argument:
`````<hola name="{{app.name}}></hola>"`````  
Use it on app.html page.

### Step 2

Read section *How directives are compiled* from: 
[https://code.angularjs.org/1.4.2/docs/guide/compiler]( https://code.angularjs.org/1.4.2/docs/guide/compiler )

Based on documentation try to write a jasmine test to see if directive is displaying
 text provided on scope.

### Step 3
Write a test to check binding `name` argument. Check if when `name` is changed on scope
 - change is reflected in directive. Use directive's `isolated scope` to pass `name`.
Heads up: Check out `$apply` function.

### Step 4
Use `bindToController` syntax in directive's code instead of isolated scope.
You have to update tests too.
`Heads up`: You can find more info at
 [https://code.angularjs.org/1.4.2/docs/api/ngMock/service/$controller#Usage]( https://code.angularjs.org/1.4.2/docs/api/ngMock/service/$controller#Usage )


