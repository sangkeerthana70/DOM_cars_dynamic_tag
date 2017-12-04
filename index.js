var cars = {
	busname: "Anu's rent a car",
	types: ['Economy', 'Midsize','Luxury'],
	econcount:50,
	midcount:30,
	luxcount:5,
	econprice:"$60",
	midprice:"$80",
	luxprice:"$100"
};

var rental = {
	firstName: "",
	lastName: "",
	carType : ""
};

window.onload = function() {
    document.getElementById("busName").innerHTML=cars.busname;
	var dropDown = document.getElementById("carType");
	var carList;
	for (var i = 0; i < cars.types.length; i++){	
		carList = document.createElement("OPTION");
		carList.text = cars.types[i];
		dropDown.appendChild(carList);
	}
	
};

function ValidateForm(){ 
	var fName= document.getElementById("firstName").value;
	var lName= document.getElementById("lastName").value;
	var carType=document.getElementById("carType").value;
	var carAvail;
	var message;
	if (carType=="Economy"){
		carAvail = cars.econcount;
	}
	else if (carType=="Midsize"){
		carAvail = cars.midcount;
	}
	else if (carType=="Luxury"){
		carAvail = cars.luxcount;
	}
	var message= "First Name: "+ fName + "<br>" + "Last Name: " + 
	              lName + "<br>" + "Car Type:" + carType;
		
		
		if ((fName=="") || (lName=="") || (carType == "")) { 
			document.getElementById("userMessage").innerHTML= "First Name, Last Name and Car Type Should be entered";	
			document.getElementById("userMessage").style="color:red";
		}
		else if (carAvail < 1) {
			document.getElementById("userMessage").innerHTML= "The car type you have requested is not available";	
			document.getElementById("userMessage").style="color:red";
		}
		else {
			rental.firstName= fName;
			rental.lastName= lName;
			rental.carType= carType;
			document.getElementById("userMessage").innerHTML="Your reservation is complete"+ "<br>"+ message;	
			document.getElementById("userMessage").style= "color:green";
			
			
			if (carType=="Economy"){
				cars.econcount-=1;
			}
			else if (carType=="Midsize"){
				cars.midcount-=1;
			}
			else if (carType=="Luxury"){
				cars.luxcount-=1;
			}
		}
};

function DisplayCarDetail(){
	var carType=document.getElementById("carType").value;
	var carAvail;
	var carPrice;
	if (carType=="Economy"){
		carAvail=cars.econcount;
		carPrice=cars.econprice;
	}
	else if (carType=="Midsize"){
		carAvail=cars.midcount;
		carPrice=cars.midprice;
	}
	else if (carType=="Luxury"){
		carAvail=cars.luxcount;
		carPrice=cars.luxprice;
	}
	else {
		document.getElementById("disAvail").innerHTML=""
		return;
	}
	var message=carAvail+ " Cars available"+ "<br>" + "Price: "+ carPrice;
	
	document.getElementById("disAvail").innerHTML= message;
	
}