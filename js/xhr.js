// jde, 
// creates an XMLHttpRequest instance
function createXMLHttpRequestObject(path) {

  var xmlHTTP = new XMLHttpRequest();
  try
  {
      xmlHTTP.open("GET", path, false);
      xmlHTTP.send(null);
      return xmlHTTP.responseText;
  }
  catch (e) {
      window.alert("Unable to load the requested file.");
      return;
  }

}