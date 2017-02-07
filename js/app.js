$(document).ready(function(){

	$("#login-form").on('submit', function(event){
		event.preventDefault();



		var email = $("#email").val();

		if (!email){
			alert('Email is required');
			return false;
		}

		if (!isEmail(email)){
			alert('Please enter a valid email');
			return false;
		}

		var password = $("#password").val();
		if (!password){
			alert('Password is required');
			return false;
		}

		if (password.length < 8){
			alert('Password needs to be at least 8 characters');
			return false;
		}


	});

	function isEmail(email){
		return /\S+@\S+/.test(email);
	}

});