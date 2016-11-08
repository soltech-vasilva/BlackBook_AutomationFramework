var protractorServer = localStorage.getItem('protractorServer');
var socket = io(protractorServer);
var socketRoom = localStorage.getItem('socketRoom');
socket.emit('joinroom', socketRoom);

var x = 0;
var y = 0;
function getElement(event) {
  x = event.clientX;
  y = event.clientY;
  var ngRepeats = [];
  var xPath = getPathTo(event.target);
  getNgRepeat(event.target, ngRepeats);
  var offsetParent = event.target.offsetParent ? event.target.offsetParent.outerHTML : event.target.parentNode;
  var element = {
      xPath: xPath,
      outerHTML: event.target.outerHTML,
      offsetParent: {'outerHTML': offsetParent},
      mouseCoordinates: [x, y]
  };
  if(ngRepeats)
    element.ngRepeat = ngRepeats[ngRepeats.length-1];
  return element;
}
parent.document.body.addEventListener('mousedown', function (event) {
  socket.emit('onclick', socketRoom, getElement(event));
});
parent.document.body.addEventListener('keyup', function (event) {
  socket.emit('onkeyup', socketRoom, {keyCode: event.keyCode, element: getElement(event), value: event.target.value});
});
parent.document.body.addEventListener('change', function (event) {
  var xPath = getPathTo(event.target);
  var offsetParent = event.target.offsetParent ? event.target.offsetParent.outerHTML : event.target.parentNode;
  var element = {
    xPath: xPath,
    outerHTML: event.target.outerHTML,
    offsetParent: {'outerHTML': offsetParent},
    value: event.target.value
  };
  socket.emit('onchange', socketRoom, element);
});
parent.document.body.addEventListener('mouseup', function (event) {
  console.log('mouseup');
  if (parent.window.getSelection && parent.window.getSelection.toString() != '') {
    if(parent.window.getSelection().toString().length && event.target.tagName != "INPUT") {
      socket.emit('onassertion', socketRoom, parent.window.getSelection().toString());
      parent.document.getSelection().removeAllRanges();
      parent.window.getSelection().removeAllRanges();
    }
  } else if (parent.document.selection && parent.document.selection.createRange().text != '') {
    if(parent.document.selection.createRange().text.length && event.target.tagName != "INPUT") {
      socket.emit('onassertion', socketRoom, parent.document.selection.createRange().text);
      parent.document.getSelection().removeAllRanges();
      parent.window.getSelection().removeAllRanges();
    }
  }
  if (event.clientX != x && event.clientY != y) {
    var xPath = getPathTo(event.target);
    var offsetParent = event.target.offsetParent ? event.target.offsetParent.outerHTML : event.target.parentNode;
    var element = {
      xPath: xPath,
      outerHTML: event.target.outerHTML,
      offsetParent: {'outerHTML': offsetParent},
      mouseCoordinates: [event.clientX, event.clientY]
    };
    socket.emit('onmousemove', socketRoom, element);
  }
});
function getNgRepeat(element, ngs) {
  var ix = 0;
  if(element.parentNode) {
    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i];
      if (sibling === element) {
        if(element.getAttribute('ng-repeat')) {
          var rowIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
          ngs.push({value: element.getAttribute('ng-repeat'), rowIndex: rowIndex});
        }
        return getNgRepeat(element.parentNode, ngs);
      }
      if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
        ix++;
      }
    }
  }
}
function getPathTo(element) {
  if (element.parentNode && element.parentNode.childNodes) {
    if (element.id !== '')
      return "//*[@id=\"" + element.id + "\"]";
    if (element === document.body)
      return element.tagName.toLowerCase();
    var ix = 0;

    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i];
      if (sibling === element) return getPathTo(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
      if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
        ix++;
      }
    }
  } else {
    return '';
  }
}
