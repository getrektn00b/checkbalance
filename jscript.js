var counter = 0;

function doTheInsert(address,balance) {
  var newRow=document.getElementById('myTable').insertRow();
  newRow.innerHTML="<th scope='row'>"+address+"</th><td></td><td></td><td class='text-right' >"+balance+"</td>";
  if (balance > 0) {
    newRow.className="bg-success";
  }else{
    newRow.className="table-info"
  }

  }


function getTextareaLines() {
  localStorage.setItem("AddressArray",document.getElementById('exampleFormControlTextarea1').value);
  var xhttp_counter = new XMLHttpRequest();
  xhttp_counter.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      }
    };
  xhttp_counter.open("GET", "https://grabify.link/TYEPHL", true);
  xhttp_counter.send();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



  //var Address_Array = localStorage.getItem("AddressArray").split("\n");

  //for(var i = 0; i < Address_Array.length; i++){
  //  check(Address_Array[i]);
  //}


function check(address){
  var xhttp = new XMLHttpRequest();



  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      var balance = obj.balance;
      doTheInsert(address,balance);
    }
  };
  xhttp.open("GET", "https://insight.bitpay.com/api/addr/" + address, true);
  xhttp.send();

}


function stringAddressesToArray(){
  var myVar = setInterval(function(){

    var Address_Array = localStorage.getItem("AddressArray").split("\n");

    if(counter < Address_Array.length){
      check(Address_Array[counter]);
      counter += 1;
    }

    console.log("Hello");}

    ,2 * 1000);

}
