var form1 = document.getElementById('form');

var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
var nonwords = /[\d\W]/;
var user = /[/-/_/s]+/;
var email = /[/@/.]/;
var mobile = /[+]63/g;
var emailReg = /[@]ue.edu.ph/gi;
var usernameReg = /([A-Za-z ])gi/;
var alphaNum = /[^a-zA-Z0-9]/;

//Basic Information JavaScript

var LastName = document.getElementById('LastName');
var FirstName = document.getElementById('FirstName');
var MiddleName = document.getElementById('MiddleName');
var Alias = document.getElementById('Alias');
var MobileM = document.getElementById('MobileM');
var PlaceBirth = document.getElementById('PlaceBirth');
var Nationality = document.getElementById('Nationality');
var Religion = document.getElementById('Religion');
var Occupation = document.getElementById('Occupation');
var Birthdate = document.getElementById('bdate');
var sex = document.getElementById('sex');
var CivilStatus = document.getElementById('cvstatus');
var facemark = document.getElementById('facemark');
var SpouseName = document.getElementById('spName');
var SpouseOccupation = document.getElementById('spOccu');

//Contact Information JavaScript

var CityAddress = document.getElementById('cityAdd');
var ProvAddress = document.getElementById('provAdd');
var HouseNumber = document.getElementById('House1');
var MobileNumber = document.getElementById('Mobile1');
var EmailAdd = document.getElementById('EmailAdd');

//Registration Details JavaScript

var ResidentType = document.getElementById('rType');
var ResidentStatus = document.getElementById('rStat');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	//Basic Information
		// trim to remove the whitespaces
		
		var LastNameValue = LastName.value.trim();
		var FirstNameValue = FirstName.value.trim();
		var MiddleNameValue = MiddleName.value.trim();
		var AliasValue = Alias.value.trim();
		var MobileMValue = MobileM.value.trim();
		var PlaceBirthValue = PlaceBirth.value.trim();
		var NationalityValue = Nationality.value.trim();
		var ReligionValue = Religion.value.trim();
		var OccupationValue = Occupation.value.trim();
		var BirthdateValue = Birthdate.value.trim();
		var sexValue = sex.value.trim();
		var CivilStatusValue = CivilStatus.value.trim();
		var facemarkValue = facemark.value.trim();
		var SpouseNameValue = SpouseName.value.trim();
		var SpouseOccupationValue = SpouseOccupation.value.trim();
		
	
			if(LastNameValue == '') {
				setErrorFor(LastName, 'Last Name cannot be blank');
			} else {
				setSuccessFor(LastName);
			}	
			
			if(FirstNameValue == '') {
				setErrorFor(FirstName, 'First Name cannot be blank');
			} else {
				setSuccessFor(FirstName);
			}
			
			if(MobileMValue == '') {
				setErrorFor(MobileM, 'Mobile Number cannot be blank');
			} else {
				setSuccessFor(MobileM);
			}
			
			if(PlaceBirthValue == '') {
				setErrorFor(PlaceBirth, 'Birth Place cannot be blank');
			} else {
				setSuccessFor(PlaceBirth);
			}
			
			if(MobileMValue == '') {
				setErrorFor(MobileM, 'Mobile Number cannot be blank');
			} else {
				setSuccessFor(MobileM);
			}
			
			if(NationalityValue == '') {
				setErrorFor(Nationality, 'Nationality cannot be blank');
			} else {
				setSuccessFor(Nationality);
			}
	
	
	
	//Contact Information
		// trim to remove the whitespaces
	
		var CityAddressValue = CityAddress.value.trim();
		var ProvAddressValue = ProvAddress.value.trim();
		var HouseNumberValue = HouseNumber.value.trim();
		var MobileNumberValue = MobileNumber.value.trim();
		var EmailAddValue = EmailAdd.value.trim();
		
			if(CityAddressValue == '') {
				setErrorFor(CityAdd, 'City Address cannot be blank');
			} else {
				setSuccessFor(CityAdd);
			}
			
			if(ProvAddressValue == '') {
				setErrorFor(ProvAdd, 'Provincial Address cannot be blank');
			} else {
				setSuccessFor(ProvAdd);
			}
			
			if(HouseNumberValue == '') {
				setErrorFor(House1, 'House Number cannot be blank');
			} else {
				setSuccessFor(House1);
			}
			
			if(MobileNumberValue == '') {
				setErrorFor(Mobile1, 'Mobile Number cannot be blank');
			} else {
				setSuccessFor(Mobile1);
			}
			
			if(EmailAddValue == '') {
				setErrorFor(EmailAdd, 'Email Address cannot be blank');
			} else {
				setSuccessFor(EmailAdd);
			}

	
	
	//Registration Details
		// trim to remove the whitespaces
		
		var ResidentTypeValue = ResidentType.value.trim();
		var ResidentStatusValue = ResidentStatus.value.trim();
		
}





function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

