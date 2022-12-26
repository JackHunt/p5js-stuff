function hideShow(boxId, btnId) {
    const box = document.getElementById(boxId);
    const btn = document.getElementById(btnId);

    if (box.style.display === 'none') {
        box.style.display = 'block';
        btn.textContent = 'Hide';
        return;
    }

    box.style.display = 'none';
    btn.textContent = 'Show';
}