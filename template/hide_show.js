function hideShow(boxId) {
    const box = document.getElementById(boxId);
    const btn = document.getElementById(boxId + "_btn");

    if (box.style.display === 'none') {
        box.style.display = 'block';
        btn.textContent = 'Hide';
        return;
    }

    box.style.display = 'none';
    btn.textContent = 'Show';
}