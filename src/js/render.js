const fs = require('fs');

let holder = document.querySelector('#holder');
let readList = document.querySelector('#readList');

holder.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();

  for (const file of e.dataTransfer.files) {
    fs.readFile(file.path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let newDiv = document.createElement('div');
        newDiv.className = 'readFile';
        newDiv.innerHTML = `
            <h3>${file.name}</h3>
            <pre>${data}</pre>
          `;
        readList.appendChild(newDiv);
      }
    });
  }
});

holder.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});
