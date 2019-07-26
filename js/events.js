// add event cross browsers
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) { // internet explorer attachEvent
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else {// standards compliants addEventListener
    obj.addEventListener( type, fn, false );
  }
}

// remove event cross browsers
function removeEvent( obj, type, fn ) {
  if ( obj.detachEvent ) {
    obj.detachEvent( 'on'+type, obj[type+fn] );
    obj[type+fn] = null;
  } else
    obj.removeEventListener( type, fn, false );
}

// cross browsers stop propagation
function stopPropagation(evt){
    var e = evt ? evt : window.event;
    if(e.stopPropagation)
        e.stopPropagation();
    else
        e.cancelBubble = true;
}
// cross browsers prevent default
function preventDefault(evt){
	var e= evt ? evt : window.event;
	if(e.preventDefault)
		e.preventDefault();
	else
		e.returnValue=false;
}