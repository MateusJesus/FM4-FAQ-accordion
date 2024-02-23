function mosresp(respId, iconId) {
    var resp = document.getElementById(respId);
    var icon = document.getElementById(iconId)

    resp.classList.toggle('visible');
    icon.classList.toggle('rotate')
    
    
    if (resp.classList.contains('visible')) {
        icon.src = "assets/images/icon-minus.svg";
    } else {
        icon.src = "assets/images/icon-plus.svg";
    }
}