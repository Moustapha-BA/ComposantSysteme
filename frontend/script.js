document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checksumForm');
    const inputString = document.getElementById('inputString');
    const algorithm = document.getElementById('algorithm');
    const message = document.getElementById('message');
    const checksumList = document.getElementById('checksumList');
  
    // Charger la liste des checksums au démarrage
    fetch('/api/checksums')
      .then(response => response.json())
      .then(data => {
        checksumList.innerHTML = '';
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.inputString} - ${item.checksum} (${item.algorithm})`;
          checksumList.appendChild(li);
        });
      });
  
    // Gérer le formulaire pour calculer un checksum
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      fetch('/api/checksum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input_string: inputString.value,
          algorithm: algorithm.value,
        }),
      })
        .then(response => response.json())
        .then(data => {
          message.textContent = `Checksum: ${data.checksum}`;
          const li = document.createElement('li');
          li.textContent = `${data.inputString} - ${data.checksum} (${data.algorithm})`;
          checksumList.appendChild(li);
        })
        .catch(err => {
          message.textContent = `Error: ${err.message}`;
        });
    });
  });
  