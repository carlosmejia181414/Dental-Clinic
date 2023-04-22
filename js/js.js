window.onload = function () {
	load();
};

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });

window.addEventListener('onload', function () {
	let elements = document.getElementsByClassName('scroll-content');
	let screenSize = window.innerHeight;

	for (var i = 0; i < elements.length; i++) {
		let element = elements[i];

		if (element.getBoundingClientRect().top < screenSize) {
			element.classList.add('visible');
		} else {
			element.classList.remove('visible');
		}
	}
});

let load = () => {
	let elements = document.getElementsByClassName('scroll-content');
	let screenSize = window.innerHeight;

	for (var i = 0; i < elements.length; i++) {
		let element = elements[i];

		if (element.getBoundingClientRect().top < screenSize) {
			element.classList.add('visible');
		} else {
			element.classList.remove('visible');
		}
	}
};
