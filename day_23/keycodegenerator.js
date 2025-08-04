
document.body.addEventListener('keydown', (e) => {
  const keyName = document.getElementById('key-name');
  const keyCode = document.getElementById('key-code');

  keyName.innerHTML = `You pressed <span style="color:#21bf73">${e.key}</span>`;
  keyCode.textContent = e.keyCode;
});

