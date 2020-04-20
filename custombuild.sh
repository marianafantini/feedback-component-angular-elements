#!/bin/sh
PROJECT_NAME=${PWD##*/}
ng build $PROJECT_NAME --prod --output-hashing=none && cat dist/$PROJECT_NAME/runtime-es2015.js dist/$PROJECT_NAME/polyfills-es2015.js dist/$PROJECT_NAME/main-es2015.js > docs/app-$PROJECT_NAME.js && cat dist/$PROJECT_NAME/styles.css > docs/app-$PROJECT_NAME.css