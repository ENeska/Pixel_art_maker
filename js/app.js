// Select color input
// Select size input



$(function() {

    $(document).on('click', '#button', function () {


            $('tr').remove();
            $('#wstaw').remove();


        // $("#wiersze").attr('value', '45');


        $('#wiersze').val(40);


        var wiersze = $('#wiersze').val();

        if(wiersz>30){

            $('#wiersze').val(29);

        }
        
        for(i=0; i<wiersze; i++){
            $('#pixel_canvas').append("<tr></tr>");

            var kolumny = $('#kolumny').val();
            $('tr').addClass("table");
            for(j=0; j<kolumny; j++){

                $('tr:last').append("<td></td>");
            }


        }

        $('#size').append("<span id='wstaw'></span>");

        $('#wstaw').append(wiersze+ " x " + kolumny);

    });


    var color;

    $(".colorPick").click(function () {
        color = $(this).css("background-color");
    });


    $(document).on('click', '.colorPick', function () {
        $(".colorPick").css("border", "2px solid black");
        $(this).css("border", "4px solid black");

    });


    $(document).on("click", 'td', function(event) {
        $(this).css("background-color", color);

    });



});

