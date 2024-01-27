
function data(note){
    localStorage.setItem('data', note);
    console.log("initiated")
    let url="./hidden/fd/week"+note+".html";
    console.log(url)
    windows.location.href=url;
}
function exam1(){}
   /*  window.location.assign(
        "https://1drv.ms/w/s!AvY3abs-bIvAgTep_PmsgRRoCfii?e=FTwhqd"
    );
    */

