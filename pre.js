window.addEventListener("load", vanish);
const loader = document.querySelector(".loader");

loader.classList.add("loader-hidden");

	loader.addEventListener("transitionend", () =>{
		document.body.removeChild("loader");
	})
})