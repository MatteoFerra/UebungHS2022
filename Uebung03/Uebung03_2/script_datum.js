function datentime(event) {
    setInterval(datentime,500);
    
    
    var d = new Date();
    var ts = d.toDateString();
    var ds = d.toTimeString();
    
    var time = document.getElementById("time");
    var date = document.querySelector("#date");

    time.innerHTML = ts;
    date.innerHTML = ds;




}
