import React from 'react'
import ReactDOM from 'react-dom'
import Site from './components/site'
ReactDOM.render(
  <Site />,
  document.getElementById('root')
)

const sw = '/service-worker.js'
console.log("Will the service worker register?");
navigator.serviceWorker.register(sw).then(function(){
  console.log("Yes, it did.");
}).catch(function(err) {
  console.log("No it didn't. This happened: ", err)
});  