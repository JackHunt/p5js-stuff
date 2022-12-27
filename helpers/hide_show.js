let currentlyShowing = false;

document.addEventListener('touchmove',
                          function(e) {
                              if (currentlyShowing) {
                                  e.preventDefault();
                              }
                          },
                          { passive: false });

function hideShow(boxId) {
    let boxes = document.getElementsByTagName('div');
    for (b of boxes) {
        b.style.display = 'none';
    }
    
    let buttons = document.getElementsByTagName('button');
    for (b of buttons) {
        b.textContent = 'Show';
    }
    
    if (!currentlyShowing) {
        let box = document.getElementById(boxId);
        let scripts = box.getElementsByTagName('script')
        for (s of scripts) {
            let src = $(s).attr('src');
            $(s).attr('src', src.split('?')[0] + "?" + Math.floor(Math.random() * 10000000));
        }
        $("#" + boxId).load(" #" + boxId);
        
        box.style.display = 'block';

        btn = document.getElementById(boxId + "_btn");
        btn.textContent = 'Hide';

        currentlyShowing = true;
        return;
    }
    
    currentlyShowing = false;
}
