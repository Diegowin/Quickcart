var oll = $(document).ready(function(){
    nmb_item();
    find_close ();
    $('#clear_item_box').bind('click', clear_item_box);
});

function nmb_item() {   // definition and derivation
    var x = $('#item_box').children('.cart_item');
    var m = 0;
    var mm = 0;
    var amt = $('.amt').text();
    var price = $('.price').text();
    var price_e = 0;
    for(var i = 0; i < x.length; i++) {
        m = m + 1;
        var price_itog = 0;
        for(var j = 0; j < 5; j++ ) {
            price_itog = price_itog + price[price_e];
            price_e++;
        }
        mm = mm + (amt[i] * price_itog);
    }
    var result = Math.round( mm * 100 ) / 100; // rounding of number in the price
    $('#nmb_item').text(m + ' items');
    $('#subtotal_nmb').text('£' + result);
}

function clear_item_box() {     // clear quickcart
    $('#item_box').replaceWith('<div id="item_box"></div>');
    nmb_item();
}

function find_close () { // del element
    $('.cart_item_close').bind('click', function callback(eventObject) {
        var m = this; // dom element
        $(m).closest('.cart_item').remove();  //
        nmb_item();
    });
}

function start() {  // add new element in checkbox_list
    var m = document.getElementById('index').valueOf();
    $(document).ready(function(){
        $('#checkbox_list').append('' +
            '<div class="wq">' +
            '<label class="checkbox">' +
            '   <input type="checkbox" />' + m.value + '' +
            '</label>' +
            '<i class="icon-remove close_img"></i>' +
            '</div>'
        );
        find_close();
    });
}


