/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(`worker got message: ${data}`);
  postMessage('pong');
});
