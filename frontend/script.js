document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('checksumForm');
  const inputString = document.getElementById('inputString');
  const algorithm = document.getElementById('algorithm');
  const message = document.getElementById('message');
  const checksumList = document.getElementById('checksumList');

  // Charger la liste des checksums au démarrage
  fetch('http://localhost:5001/api/checksums') // Utilisez l'URL complète si nécessaire
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      checksumList.innerHTML = '';
      data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.inputString} - ${item.checksum} (${item.algorithm})`;
        checksumList.appendChild(li);
      });
    })
    .catch(err => {
      console.error('Error fetching checksums:', err.message);
    });

  // Gérer le formulaire pour calculer un checksum
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('http://localhost:5001/api/checksum', { // Utilisez l'URL complète si nécessaire
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input_string: inputString.value,
        algorithm: algorithm.value,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        message.textContent = `Checksum: ${data.checksum}`;
        const li = document.createElement('li');
        li.textContent = `${data.inputString} - ${data.checksum} (${data.algorithm})`;
        checksumList.appendChild(li);
      })
      .catch(err => {
        message.textContent = `Error: ${err.message}`;
        console.error('Error submitting checksum:', err.message);
      });
  });
});
