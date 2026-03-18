function loadDiv(htp) {
    $(function(){
            var urlParams = new URLSearchParams(window.location.search);
            $("#DivContent").load(htp+'.html'); 
            $(".nav-active").removeClass("nav-active");
            $('.'+htp).addClass("nav-active");
            urlParams.set('page', htp);
            history.replaceState(null, null, "?"+urlParams.toString());

      });
};


let path = window.location.pathname;
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    loadDiv(urlParams.get('page'));
} else if (path !== '/' && path !== '/index.html' && !path.includes('.html')) {
    window.location.href = path + '.html';
} else {
    loadDiv('main')
}