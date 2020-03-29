# FeedbackComponentAngularElements

This is a project I developed to understand and test the new Angular Elements feature. The goal here is to have an Angular Component that can be exported as a Custom Element and imported on any that uses plain HTML.

Another goal is to test if it's possible to add this exported component on pages using other languages and frameworks - such as VueJS, React and ClojureScript. I intend to add these tests on my personal GitHub as well.  

## Export component as plain js and css

There is a script named `custombuild.sh` that generates the plain `js` and `css` files that are exported.  
Run `./custombuild.sh` to generate `docs/feedback-component-custom-element.js` and `docs/feedback-component-custom-element.css`.  
Then you can add these two files on your page (in my case, `docs/index.html`).  

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="./feedback-component-custom-element.css">
  </head>
  <body>
    <app-hello-world></app-hello-world>
    <script src="./feedback-component-custom-element.js"></script>
  </body>
</html>
```

## Explaining `custombuild.sh`

```bash
#!/bin/sh
ng build my-app-name --prod --output-hashing=none && cat dist/my-app-name/runtime-es2015.js dist/my-app-name/polyfills-es2015.js dist/my-app-name/main-es2015.js > docs/my-output-script-name.js && cat dist/my-app-name/styles.css > docs/my-output-styles-name.css
```

This script runs the app by using `ng build my-app-name`. It also uses flags to specify that the app should be run using production configuration (`--prod`) and should not hash the output (`--output-hashing=none`).  
The `&&` is a bash command used to add a new command to be run only after the first one is complete.  
If you run that first command on your terminal (`ng build my-app-name --prod --output-hashing=none`), you'll notice it will generate a new folder called `dist` to your project's root directory. The files inside that folder are used to serve your Angular App on a host server. These are also the files we need to export to use this component as a Custom Component.  
The second command is a `cat` that will get all the content from `main-es2015.js`, `runtime-es2015.js` and `polyfills-es2015.js` and export it to `docs/my-output-script-name.js`. That file will contain the `js` code we need to make the Custom Element work. The third command will do the same, but for the css files existing on `dist` and exporting them to `docs/my-output-styles-name.css`.  

## Build

Run `./custombuild.sh` to build the project and export the code to `docs/feedback-component-custom-element.js` and `docs/feedback-component-custom-element.css`. Open `docs/index.html` to see the results of your changes on a plain `html` file.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further information about this project

I used [this blog post](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457) to learn how to use Angular Elements. I just made a few changes to the `custombuild.sh` script, changing the `dist` files to the ones my project generated and adding the `css` bit. I also changed the `preview` file to `docs` to be able to use GitHub Pages to serve this preview page.  

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Also feel free to contact me about any doubts on running this project.
