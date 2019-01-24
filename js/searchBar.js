function clearSearchBar(){
    document.getElementById("searchbarInput").value = null;
}

function findInPage () {
    var n = 0;
    var input = document.getElementById('searchbarInput').value;

    var str = input.toLowerCase();

    var strFound;

    //Check for window.find support
    if (window.find) {
        var content = window;

        strFound = content.find(str);
        if (!strFound){
            alert("String '"+str+"' not found!");
        } 
    }
    
    return;
}