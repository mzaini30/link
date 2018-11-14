var get_url_parameter = function get_url_parameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }   
};

if (get_url_parameter('url') != undefined){
    setTimeout(function(){
        return location.href = get_url_parameter('url')
    }, 10000)
}

if (get_url_parameter('wa') != undefined){
    location.href = 'whatsapp://send?text=' + get_url_parameter('wa')
}