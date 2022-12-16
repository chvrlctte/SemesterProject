var button = document.createElement('button');
button.innerHTML = 'Click me';
button.onclick = function() {
  window.location.href = 'http://www.google.com';
};
document.body.appendChild(button);