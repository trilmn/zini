/*
when the document is ready you have to :
	- You have to construct this menu upond the elements you have in the page, to make it the first children of the <div id="wrapper">
	  <ul id="menu">
	  	<li><a href="#"><strong>home</strong><span>Beautifull home</span></a></li>
	  	<li><a href="#"><strong>FAQ</strong><span>Beautifull faq</span></a></li>
	  	<li><a href="#"><strong>Contacts</strong><span>Beautifull contacts</span></a></li>
	  </ul>
	
	- you have to configure the roll over/out event to fade in/out except on the current menu element
	
	- you have to set the click event on the menu links to make itself active (border-bottom 5px and opacity 1)  and to show it's content(opacity 1)
	  you also have to unset the previous active menu element as no-active (border-bottom 2px and opacity 0.2) and hide it's content (opacity : 0)

	- the first menu element has to be the first showed by default like active (border-bottom 5px and opacity 1) 
	  hand to hide every <div class="content"> except the first

*/