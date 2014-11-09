/**
 * JavaScript for Google Direct
 */

function doSearch(e){
	if (e.preventDefault) e.preventDefault();
	var query = document.getElementById('query').value;
	window.location.assign("https://www.google.com/search?q="+query+" -inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" (mkv|mp4|avi|epub|pdf|mp3)");
	return false;
}

function toggleAbout(e){
	if (e.preventDefault) e.preventDefault();
	abouttext.style.visibility = abouttext.style.visibility=="hidden"? "visible":"hidden";
	return false;
}

var form = document.getElementById('search');
if (form.attachEvent) {
    form.attachEvent("submit", doSearch);
} else {
    form.addEventListener("submit", doSearch);
}

var abouttext=document.getElementById("abouttext");
abouttext.style.visibility="hidden";

var aboutbutton = document.getElementById('aboutbutton');
if (aboutbutton.attachEvent) {
    aboutbutton.attachEvent("click", toggleAbout);
} else {
    aboutbutton.addEventListener("click", toggleAbout);
}

