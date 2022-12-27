let currentlyShowing = false;

document.addEventListener('touchmove',
                          function(e) {
                              if (currentlyShowing) {
                                  e.preventDefault();
                              }
                          },
                          { passive: false });

function hideShow(boxId) {
    const box = document.getElementById(boxId);
    const btn = document.getElementById(boxId + "_btn");

    const boxes = document.getElementsByTagName('div');
    for (const b of boxes) {
        b.style.display = 'none';
    }
    
    const buttons = document.getElementsByTagName('button');
    for (const b of buttons) {
        btn.textContent = 'Show';
    }
    
    if (!currentlyShowing) {
        box.style.display = 'block';
        btn.textContent = 'Hide';
        currentlyShowing = true;
        return;
    }
    
    currentlyShowing = false;
}
