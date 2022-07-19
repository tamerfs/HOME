function mudaTema(){
   document.body.classList.toggle("dark") 
  
   let buttonText = document.getElementById("mode");
    (buttonText.textContent == 'Dark Mode')? buttonText.innerHTML = 'Light Mode':
      buttonText.innerHTML = 'Dark Mode';
}


