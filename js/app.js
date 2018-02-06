// Select color input
// Select size input



$(function() {



    function tablica(){
        for(i=0; i<wiersze; i++){
            $('#pixel_canvas').append("<tr></tr>");


            $('tr').addClass("table");
            for(j=0; j<kolumny; j++){

                $('tr:last').append("<td></td>");
            }
        }
    }

    $(document).on('click', '#button', function () {

            $('tr').remove();
            $('#wstaw').remove();
            $('.wytnij').remove();

        var wiersze = $('#wiersze').val();



        if(wiersze>10){
            $('#tekst').append("<p class='wytnij'>Maksymalna wartość wierszy to 10!</p>");
            wiersze =10;
            $('#wiersze').val(10);

        };

        var kolumny = $('#kolumny').val();
        if(kolumny>10){
            $('#tekst').append("<p class='wytnij'>Maksymalna wartość kolumn to 10!</p>");
            kolumny =10;
            $('#kolumny').val(10);
        };


        for(i=0; i<wiersze; i++){
            $('#pixel_canvas').append("<tr></tr>");


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

