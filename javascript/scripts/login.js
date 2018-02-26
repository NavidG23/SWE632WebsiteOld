$(document).ready(function(){
    $('.submit-button').click(logIn);
});

/**
 * Log the user into the system. Login information is stored in localStorage
 * with patriotWebLogin as the identifier
 */
function logIn(){
    //Submit button click            
    var userName =  $('#inputUsername').val();
    //Stringify login object and store in Local Storage (LS)
    var login = makeLoginObject(true, userName);
    localStorage.setItem("patriotWebLogin", JSON.stringify(login));
    //Redirect to index
    window.location.href = "index.html";     
}

/**
 * Makes login object to be stored in localStorage.
 * @param {Boolean} signedIn - Whether or not the user is signed in
 * @param {UserName} userName - Username of user
 */
function makeLoginObject(signedIn, userName){
    var d = new Date();
    expireDate = new Date(d.getTime() + (24*60*60*1000)) //Expires in 24 hours
    return {signedIn: signedIn, userName: userName, expireDate: expireDate};
}