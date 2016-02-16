
### Step 1
Test drive (write failing test first) the *Ahoj* directive that will display 'Hello world'
 in Czech.  

### Step 2
Move directive template to separate file.  
See that tests are failing with
 `Unexpected request: GET app/directives/04-hello-assertions/hello.tmpl.html`  
Check out: [https://github.com/karma-runner/karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor)    
to setup loading html templates for tests in karma.conf.js. 
 
`Heads up`: In karma.conf.js remember to config `plugins`, `preprocessors`
 and `files` sections in configuration.  
 
