let lat, long;
function populateJSObj(){

    if(!document.getElementById("autoLocation").checked){
        console.log("Im here");
        //Call geocoding API to get lat and long
        loc = encodeURIComponent(document.getElementById("location").value);
        uri="https://maps.googleapis.com/maps/api/geocode/json?address="+loc+'&'+"key="+"AIzaSyC5vDdgBj5GOPalNIhV6VgDUWbhPVf0Vu8";
        console.log(uri);
        lat = 34.003;
        long = -118.2863;
        const xmlHttpObj2 = new XMLHttpRequest();
        xmlHttpObj2.open("GET", uri);
        xmlHttpObj2.send();
        xmlHttpObj2.onreadystatechange = function(){
            console.log("SN func call");
            if(this.readyState == 4 && this.status == 0){
                // && this.status == 200
                console.log(this.status);
                console.log("State 0");
                console.log(this.responseText);
                //hard coding for now
                lat = 34.003;
                long = -118.2863;

            }
        };
    }    
    const jsObj={
       keyword: document.getElementById("keyword").value,
       distance: document.getElementById("distance").value,
       category: document.getElementById("category").value,
       latitute: lat,
       longitude: long
       //location: document.getElementById("location").value,
       //autoLocation: document.getElementById("autoLocation").checked
    }
    
    //Call another function to creat RESTFull request for python Script that calls Yelp API
    console.log("Final obj from JS");
    console.log(jsObj.keyword);
    console.log(jsObj.distance);
    console.log(jsObj.category);
    console.log(jsObj.latitute);
    console.log(jsObj.longitude);
}

function locationDisable(changeState){
    document.getElementById("location").value="";
    document.getElementById("location").disabled=true;
    fetchLocationIpinfo();
}

function fetchLocationIpinfo()
{
    const xmlHttpObj = new XMLHttpRequest();

    xmlHttpObj.open("GET", 'https://ipinfo.io/json?token=3f8c2f7011cf20',true);
    xmlHttpObj.send();

    xmlHttpObj.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const httpResponseIpinfo = this.responseText;
            const temp = JSON.parse(httpResponseIpinfo);
            const latLongArr = temp["loc"].split(',');
            lat = parseFloat(latLongArr[0]);
            long = parseFloat(latLongArr[1]);
            console.log(lat);
            console.log(long);

        }
    };
 
    
    
}