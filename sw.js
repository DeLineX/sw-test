/// <reference lib="WebWorker" />

// declare const self: ServiceWorkerGlobalScope;

console.log(typeof window);

self.addEventListener("periodicsync", (event) => {
  console.log(event);
  const data = event.data;
  const message = data?.text();
  console.log("message:", message);
});
