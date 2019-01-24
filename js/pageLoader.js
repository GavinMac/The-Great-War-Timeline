//Initialize the homepage when loaded.
window.onload = function(){
    pageLoader.buildNav();  
    pageLoader.homePage();
    bgChanger.startLoop();
}

var pageLoader = pageLoader || {};

pageLoader = function () {

    var pageLoader = function ( path, elementId ) {
        var response = createXMLHttpRequestObject(path);
        document.getElementById(elementId).innerHTML = response;
    }

    //Move tables into pages
    var pagation = function tablePagation(tableName, rowsShown){
        $(tableName).after('<div id="pageNav"></div>');
        
        //Calculate how many pages from the number of rows in the table and the passed in rows to be shown
        var rowsTotal = $(tableName + ' tbody tr').length;
        var numPages = rowsTotal/rowsShown;

        //Add page number buttons
        for(i = 0;i < numPages;i++) {
            var pageNum = i + 1;
            $('#pageNav').append('<a class="pageNum" href="#" rel="'+i+'">'+pageNum+'</a> ');
        }

        $(tableName + ' tbody tr').hide();
        $(tableName+ ' tbody tr').slice(0, rowsShown).show();
        $('#pageNav a:first').addClass('activePageNum');

        $('#pageNav a').bind('click', function(){
            $('#pageNav a').removeClass('activePageNum');
            $(this).addClass('activePageNum');
            var currPage = $(this).attr('rel');
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            $(tableName + ' tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).css('display','table-row').animate({opacity:1}, 300);
        });
    }

    //Loads in top nav bar
    var buildNav = function(){
        pageLoader('./includes/nav.html', 'topnav');
    }

    //Loads the homepage
    var homePage = function(){
        clearSearchBar();
        pageLoader('./includes/homepage.html', 'pageContent');
    }
        
    //Loads the timeline page
    var timelinePage = function(){
        clearSearchBar();
        pageLoader('./includes/timeline.html', 'pageContent');
    }

    //Loads the about page
    var aboutPage = function(){
        clearSearchBar();
        pageLoader('./includes/about.html', 'pageContent');
    }

    //Loads the hero page and data
    var heroPage = function(){
        clearSearchBar();
        pageLoader('./includes/heroPage.html', 'pageContent');
        loadHeros();     
    }


    //Loads the admin page
    var adminSettings = function(){
        clearSearchBar();
        pageLoader('./includes/admin.html', 'pageContent');
    }

    return{
        timelinePage: timelinePage,
        aboutPage: aboutPage,
        heroPage: heroPage,
        homePage: homePage,
        adminSettings: adminSettings,
        buildNav: buildNav,
        pagation: pagation
    }

}();