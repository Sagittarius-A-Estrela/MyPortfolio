function callClose(){
    document.getElementById('content').style.display = 'none';
    setTimeout(callMaximize, 5000);
}

function callMaximize(){
    document.location.reload(true);
}

function callMinimize(){
    document.getElementById('content').style.position = 'absolute';
    document.getElementById('content').style.width = '20%';
    document.getElementById('content').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    document.getElementById('content').style.bottom = '0';
    document.getElementById('content').style.left = '5px';
    document.getElementById('content').style.borderRadius = '5px 5px 0 0';
    document.getElementById('content').style.border = '1px solid rgba( 255, 255, 255, 0.2)';
    document.getElementById('content').style.transition = 'bottom 5s';
    document.getElementById('main-content').style.display = 'none';
}