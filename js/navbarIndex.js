fetch('html/navbar-index.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error fetching navbar:', error));

fetch('html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });