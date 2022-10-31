const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const close = document.getElementById('close');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

close.addEventListener('click', () => {
	history.back();
	alert("dfkhdfd");
});
