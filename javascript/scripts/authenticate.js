//** Uncomment this line to clear localStorage */
//localStorage.clear();
authenticate();
 $(document).ready(function(){
    
    $('#logOut').click(logOut);
});

//Check to see if user is authenticated. If not redirect to login.html
//Authentication uses local storage, login token expires after 24 hours
function authenticate()
{
    var now = new Date();
    //Get login obj from local storage
    var login = JSON.parse(localStorage.getItem('patriotWebLogin')); 
    //Check if login is null, if signedIn is false, and if login has expired (24 hours)
    //If any are true, redirect to login
    if(!login || login.signedIn == false || now > new Date(login.expireDate)) 
    {
        window.location.href = "login.html";
    }
}

function logOut(){
    localStorage.setItem("patriotWebLogin", null);
    window.location.href = "login.html";
}

//Schedule funtion showing tables

$(function () { 
    $("#Select").show();

    $("#select01").on("change", function () {
        $(".myClass").hide();
        $("div[id='" + $(this).val() + "']").show();
    });
});