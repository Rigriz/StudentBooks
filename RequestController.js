class mains{
   data(note){
        localStorage.setItem('data', note);
        console.log("initiated")
        var notes = note;
        console.log(notes)
      //  url="./hidden/fd/Week1.html"
        location.assign("./hidden/fd/Week"+notes+".html")
    }
    labmanual(){
        console.log("initiated")
        location.assign("./hidden/fd/Labmanual.html")
    }
}
class os {
    labmanual(){
        console.log("initiated");
        location.assign("./hidden/osa/Labmanual.html");
    }
    labmanual12(){
      console.log("initiated");
      location.assign("./hidden/osa/Labmanual12.html");
    }
    labmanual13(){
        console.log("initated")
        location.assign("./hidden/osa/Labmanual13.html");
    }
    //Request controller from osa weeks navigateor to the weeks using which
    week(which){
       localStorage.setItem('data',which);
       console.log("initiated")
       var whichone = which;
        location.assign("./hidden/osa/Week"+whichone+"_OSA.html")
    }
    allweekexp(){
        location.assign("./hidden/osa/OS_NOTES.html");
    }
}
class dsap{
    data(note){
        localStorage.setItem('data', note);
        console.log("initiated")
        var notes = note;
        console.log(notes)
      //  url="./hidden/fd/Week1.html"
        location.assign("./hidden/dsa/Week"+notes+".html");
    }
    labprograms(){
         location.assign("./hidden/dsa/LAB_PROGRAMS.html");
    }
    Merge_Sort(){
        location.assign("./hidden/dsa/Merge_Sort_Alg.html");
    }
    Quick_Sort(){
        location.assign("./hidden/dsa/Quick_Sort.html");
    }
    SingleLinkList(){
        location.assign("./hidden/dsa/Single_Linked_List.html");
    }
    Queue(){
      location.assign("./hidden/dsa/Queue.html");    
    }
    Hash_Table(){
         location.assign("./hidden/dsa/Hash_Table.html");  
    }
    Binery_Search(){
        location.assign("./hidden/dsa/Bineary_Search.html");
    }
    Binery_Search_Tree(){
        location.assign("./hidden/dsa/Bineary_Search_Tree.html");
    }
    DSP_Overview(){
        location.assign("./hidden/dsa/DSP_Overview.html");
    }
    Recursion_concept(){
        location.assign("./hidden/dsa/Recursion_Concept.html");
    }
    Stack_Concept(){
        location.assign("./hidden/dsa/Stack_Concept.html");
    }
}
const main = new mains();
const osa = new os();
const dsa = new dsap();