
const load = () => {

    input = document.getElementById('txtInput').value
    txtInput1 = document.getElementById('txtInput1').value
    txtInput2 = document.getElementById('txtInput2').value
    txtInput3 = document.getElementById('input').value
    txtInput4 = document.getElementById('input1').value
    txtInput5 = document.getElementById('input2').value
    txtInput6 = document.getElementById('txtInput3').value

        let fname = document.forms["dataform"]["txtInput"].value;
				let lname = document.forms["dataform"]["txtInput1"].value;
				let email = document.forms["dataform"]["txtInput2"].value;
        let age = document.forms["dataform"]["txtInput3"].value;

        let country = document.forms["dataform"]["input"].value;
				let state = document.forms["dataform"]["input1"].value;
				let city = document.forms["dataform"]["input2"].value;

        if (fname == "" || fname == null) {
					document.getElementById("fname-err").innerHTML = "Please fill first name";
					return false;
				}
				else{
					document.getElementById("fname-err").innerHTML = "";
				}
				if(!isNaN(fname)){
					document.getElementById("fname-err").innerHTML = "Only characters are allowed";
					return false;
				}
				else{
					document.getElementById("fname-err").innerHTML = "";
				}
				if(fname.length<=2){
					document.getElementById("fname-err").innerHTML = "Please fill atleast 2-characters";
					return false;
				}else{
					document.getElementById("fname-err").innerHTML = "";
				}	

        if (lname == "" || lname == null) {
					document.getElementById("lname-err").innerHTML = "Please fill last name";
					return false;
				}else{
					document.getElementById("lname-err").innerHTML = "";
				}
				if(!isNaN(lname)){
					document.getElementById("lname-err").innerHTML = "Only characters are allowed";
					return false;
				}else{
					document.getElementById("lname-err").innerHTML = "";
				}
				if(lname.length<=1){
					document.getElementById("lname-err").innerHTML = "Please fill atleast 2-characters";
					return false;
				}else{
					document.getElementById("lname-err").innerHTML = "";
				}
        if (email == "" || email == null) {
					document.getElementById("email-err").innerHTML = "Please fill email";
					return false;
				}else{
					document.getElementById("email-err").innerHTML = "";
				}
				let emailformat = /^[a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3}$/;
				if(!email.match(emailformat)){
					document.getElementById("email-err").innerHTML = "Please fill valid email address";
					return false;
				}else{
					document.getElementById("email-err").innerHTML = "";
				}
        if (age == "" || age == null) {
					document.getElementById("age-err").innerHTML = "Please fill age";
					return false;
				}else{
					document.getElementById("age-err").innerHTML = "";
				}				
				if(isNaN(age)){
					document.getElementById("age-err").innerHTML = "Only Numbers are allowed";
					return false;
				}else{
					document.getElementById("age-err").innerHTML = "";
				}
				if (age <=18 || age >100) {
					document.getElementById("age-err").innerHTML = "Please enter age between 18-100";
					return false;
				}else{
					document.getElementById("age-err").innerHTML = "";
				}
        if (country == "" || country == null) {
					document.getElementById("country-err").innerHTML = "Please select country";
					return false;
				}else{
					document.getElementById("country-err").innerHTML = "";
				}
        if (state == "" || state == null) {
					document.getElementById("state-err").innerHTML = "Please Select state";
					return false;
				}else{
					document.getElementById("state-err").innerHTML = "";
				}
        if (city == "" || city == null) {
					document.getElementById("city-err").innerHTML = " Please Select city";
					return false;
				}else{
					document.getElementById("city-err").innerHTML = "";
				}
    var table = document.getElementById('table'),
      newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5)
      cell8 = newRow.insertCell(6)

    cell1.innerHTML = input
    cell2.innerHTML = txtInput1
    cell3.innerHTML = txtInput2
    cell4.innerHTML = txtInput3
    cell5.innerHTML = txtInput4
    cell6.innerHTML = txtInput5
    cell8.innerHTML = txtInput6

  }

  var stateObject = {
    India: {
      Delhi: ['new Delhi', 'North Delhi'],
      Kerala: ['Thiruvananthapuram', 'Palakkad'],
      Goa: ['North Goa', 'South Goa'],
    },
    Australia: {
      SouthAustralia: ['Dunstan', 'Mitchell'],
      Victoria: ['Altona', 'Euroa'],
    },
    Canada: {
      Alberta: ['Acadia', 'Bighorn'],
      Columbia: ['Washington', ''],
    },
  }
  window.onload = function () {
    var input = document.getElementById('input'),
      input1 = document.getElementById('input1'),
      input2 = document.getElementById('input2')
    for (var country in stateObject) {
      input.options[input.options.length] = new Option(country, country)
    }
    input.onchange = function () {
      input1.length = 1 // remove all options bar first
      input2.length = 1 // remove all options bar first
      if (this.selectedIndex < 1) return // done
      for (var state in stateObject[this.value]) {
        input1.options[input1.options.length] = new Option(state, state)
      }
    }
    input.onchange() // reset in case page is reloaded
    input1.onchange = function () {
      input2.length = 1 // remove all options bar first
      if (this.selectedIndex < 1) return // done
      var district = stateObject[input.value][this.value]
      for (var i = 0; i < district.length; i++) {
        input2.options[input2.options.length] = new Option(
          district[i],
          district[i],
        )
      }
    }
  }

 