main = () => {
    document.getElementById('grow-me').classList.add('big');

    document.getElementById('shrink-me').classList.remove('big');

    const listOfItems = document.querySelectorAll('ol li');
        listOfItems.forEach(item => {
        console.log(item.textContent);
    });

    const link = document.querySelector('.link');
        link.href = 'https://www.example.com';
        link.textContent = 'somewhere';

    document.getElementById('hide-me').style.display = 'none';

    document.getElementById('show-me').style.display = 'block';

    const nameInput = document.getElementById('name').value;
    
    document.querySelector('h1').textContent = `Welcome ${nameInput}!`;
}