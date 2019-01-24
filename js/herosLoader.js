var loadHeros = function(){
    //Get json asynchronously
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "data/herosJSON.json",
        mimeType: "application/json",

        success: function(result){

            //Loop through each object in JSON appending them to rows in the table
            $.each(result, function(i, obj){

                $('#heroTable').append($(
                    "<tr><td>" + obj.TITLE + "</td>" +
                    "<td>" + obj.SUBJECT + "</td>" +
                    "<td>" + obj.SOURCE + "</td>"+
                    "<td>" + result[i].PUBL.DATES + "</td>"+
                    "<td>" + obj.HISTORY + "</td>"+
                    "<td>" + obj["DESCRIPT."] + "</td></tr>"
                ));
            });

            pageLoader.pagation('#heroTable', 4);

            //Log json to check it's there
            //console.log(result);
        }
    });

    
}