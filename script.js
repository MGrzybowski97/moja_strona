const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', () => {
        
        const text = item.innerText;

        alert(`Wybrałeś: ${text}. Powodzenia w nauce na Linux Mint!`);

        item.style.backgroundColor = '#ffcc00';
        setTimeout(() => {
            item.style.backgroundColor = '';
        }, 500);

    });
});