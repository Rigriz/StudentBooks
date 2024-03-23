class mains{
   data(note){
        localStorage.setItem('data', note);
        console.log("initiated")
        var notes = note;
        console.log(notes)
      //  url="./hidden/fd/Week1.html"
        location.assign("./hidden/fd/Week"+notes+".html")
    }
}
class os {
    labmanual(){
        console.log("initiated");
        location.assign("./hidden/osa/Labmanual.html");
    }
    //Request controller from osa weeks navigateor to the weeks using which
    week(which){
       localStorage.setItem('data',which);
       console.log("initiated")
       var whichone = which;
        location.assign("./hidden/osa/Week"+whichone+"_OSA.html")
    }

}
const main = new mains();
const osa = new os();