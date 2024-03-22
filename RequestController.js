class mains{
   data(note){
        localStorage.setItem('data', note);
        console.log("initiated")
        var notes = note;
        console.log(notes)
        url="./hidden/fd/Week1.html"
        location.assign("./hidden/fd/Week"+notes+".html")
    }
}
class os {
    labmanual(){
        console.log("initiated");
        location.assign("./hidden/osa/Labmanual.html");
    }

}
const main = new mains();
const osa = new os();