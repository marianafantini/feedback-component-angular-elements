const appHelloWorld = document.querySelector('app-hello-world');

const mockedAPIResponse = [
  {done: true, text: 'insert custom element to plain HTML file'},
  {done: true, text: 'made inputs and outputs work'},
  {done: true, text: 'created a dynamic input using Observables'},
  {done: false, text: 'tried to add component to another framework project'},
  {done: false, text: 'check this item and click on the button below to verify the count logic'}
];

// Simulate a call to an API returning the information
setTimeout(() => {
  appHelloWorld.setAttribute('to-do-list', JSON.stringify(mockedAPIResponse));
}, 1000);

// Execute action when custom element launches an event
appHelloWorld.addEventListener('clicked', (event) => {
  const amountCompletedTasks = event.detail;
  const clickedMessageElement = document.getElementById('click-me-message');

  clickedMessageElement.innerHTML = 'Congratulations! You completed ' + amountCompletedTasks + ' tasks from your list!';
  console.log('clicked! ', event);
});