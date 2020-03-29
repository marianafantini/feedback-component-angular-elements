const appHelloWorld = document.querySelector('app-hello-world');

appHelloWorld.addEventListener('clicked', (event) => {
  console.log('clicked! ', event);
});