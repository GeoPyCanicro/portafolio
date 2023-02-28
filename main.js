let year = new Date();
let text = document.querySelector('#copyright_text');

text.textContent = `© Copyright ${year.getFullYear()}`;
