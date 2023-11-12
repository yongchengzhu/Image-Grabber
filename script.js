const fetchImages = async () => {
  document.querySelectorAll('img').forEach(image => image.remove());
  new DOMParser().parseFromString(await (await fetch('https://cors-anywhere.herokuapp.com/' + document.getElementById('url').value)).text(), 'text/html').querySelectorAll('img').forEach(image => document.body.appendChild(Object.assign(document.createElement('img'), { src: image.src })));
}