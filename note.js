
function data(note){
    localStorage.setItem('data', note);
    console.log("initiated")
    var notes = note;
    url="./hidden/fd/Week1.html"
    location.assign("./hidden/fd/Week"+notes+".html")
}
function exam1(){}
   /*  window.location.assign(
        "https://1drv.ms/w/s!AvY3abs-bIvAgTep_PmsgRRoCfii?e=FTwhqd"
    );
    */

