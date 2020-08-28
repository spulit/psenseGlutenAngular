/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {

        return;
    }

    if (/android/i.test(userAgent)) {
        return;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return;
    }

    $("#oneA").attr("href", "https://www.facebook.com/PastisseriaSenseGluten");
    $("#twoA").attr("href", "https://www.facebook.com/PastisseriaSenseGluten");
    $("#threeA").attr("href", "https://www.facebook.com/PastisseriaSenseGluten");
}


var en_us = {
    welcome: "Welcome!"
}

var fr_ca = {
    welcome: "Salut!"
}

var lang = en_us;

// set all the text
//document.getElementById("welcome").value = lang.welcome;

function changeLanguage(){
    lang = fr_ca;
    document.getElementById("welcome").value = lang.welcome;
}