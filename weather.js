var btn = document.getElementById('obtn');
var rht = document.getElementById('right');

var search = [];

btn.addEventListener('click', function(){
    var select = document.getElementById('slct').value;
    var jsn = new XMLHttpRequest();
    jsn.open('GET','https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname='+select+'');
    jsn.onload = function(){
        var data = JSON.parse(jsn.responseText);
        loadD(select,data);
    }
    search.push(select);
    console.log(search);
    jsn.send();
});

function loadD(select,data){
    var htmlD = '';
    var date1 = new Date(data.date_and_time);
    var date2 = new Date();
    var diff = date2.getTime() - date1.getTime();
    var age = diff / (1000*3600*24);
    htmlD +='<p>Discription:'+data.description+'<br> Temperature(C): '+data.temp_in_celsius+'<br> Pressure(hPa):'+data.pressure_in_hPa+ '<br>Data age (No. of days):'+Math.floor(age)+'</p>';
    //rht.insertAdjacentHTML('beforeend',htmlD);
    var box = document.createElement('div');
    box.id = 'box';

    var delbtn = document.createElement('button');
    delbtn.innerHTML = 'X';
    delbtn.className = 'delbtn';
    box.appendChild(delbtn);

    var city = document.createElement('div');
    city.className = 'city';
    city.appendChild(document.createTextNode(select.toUpperCase()));
    box.appendChild(city);

    right.appendChild(box);
    box.insertAdjacentHTML('beforeend',htmlD);
    //box.appendChild(document.createTextNode(htmlD));
    //right.appendChild(box);  
}

rht.addEventListener('click',function(e){
    if(e.target.classList.contains('delbtn')){
        if(confirm('Are you sure to delete this?')){
            var div = e.target.parentElement;
            rht.removeChild(div);
            //search.splice(city.value,1);
        }
    }
});