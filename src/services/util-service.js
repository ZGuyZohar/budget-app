export const utilService = {
    makeId,
}

function makeId(length = 5) {
    var txt = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < length; i++) {
        txt += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return txt;
}
