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


}
const main = new mains();
const osa = new os();