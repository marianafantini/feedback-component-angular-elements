#!/bin/sh
ng build feedback-component-angular-elements --prod --output-hashing=none && cat dist/feedback-component-angular-elements/runtime-es2015.js dist/feedback-component-angular-elements/polyfills-es2015.js dist/feedback-component-angular-elements/main-es2015.js > docs/feedback-component-custom-element.js && cat dist/feedback-component-angular-elements/styles.css > docs/feedback-component-custom-element.css