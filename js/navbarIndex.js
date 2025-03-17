
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: "#1E5631",
                secondary: "#38755B",
                light: "#F7F9F3",
                accent: "#EAF0D7",
                gold: "#D4AF37",
                darkgold: "#B8860B",
            },
        },
    },
};

fetch('html/navbar-index.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
});

fetch('html/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });