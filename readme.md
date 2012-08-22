#equalheight.js

jQuery plugin which changes the heights of multiple elements to match the largest one.

Tested with jQuery 1.4.4 onwards.

##Usage
Call .equalHeight() on the elements to be altered (not the parent). E.g.

	<div id="container">
		<div>Some words</div>
		<div>Slightly more words</div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
	</div>

	$('#container div').equalHeight();