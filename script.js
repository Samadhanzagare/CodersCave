function convertToPDF() {
    const wordFileInput = document.getElementById('wordFile');
    const wordFile = wordFileInput.files[0];

    if (!wordFile) {
        alert('Please select a Word file.');
        return;
    }

    const formData = new FormData();
    formData.append('wordFile', wordFile);

    fetch('/convert', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted.pdf';
        a.click();
        URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error converting file:', error));
    const successMessage = document.getElementById('successMessage');
  successMessage.classList.add('show');
}

  // Add an event listener to the file input to update the selected file name
  const wordFileInput = document.getElementById('wordFile');
  const selectedFileName = document.getElementById('selectedFileName');
  
  wordFileInput.addEventListener('change', () => {
    if (wordFileInput.files.length > 0) {
      selectedFileName.textContent = wordFileInput.files[0].name;
    } else {
      selectedFileName.textContent = '';
    }
  });
  