$(function() {

    $(document).on('click', '#buttonGrey', function () {

        var rowVal = $('#row').val();
        var colVal = $('#column').val();

        $('tr').remove();
        $('#addRule').remove();
        $('.maximumGrid').remove();

        if(rowVal>10){
            $('#text').append("<p class='maximumGrid'>Maximal row amount is set to 10</p>");
            rowVal =10;
            $('#row').val(10);
        };

        if(colVal>10){
            $('#text').append("<p class='maximumGrid'>Maximal column amount is set to 10</p>");
            colVal =10;
            $('#column').val(10);
        };

        function tablica(){
            for(i=0; i<rowVal; i++){
                $('#pixel_canvas').append('<tr></tr>');
                $('tr').addClass('table');
                for(j=0; j<colVal; j++){
                    $('tr:last').append("<td></td>");
                }
            }
        }
        tablica();

        $('#size').append("<span id='addRule'></span>");
        $('#addRule').append(rowVal+ " x " + colVal);

    });


    var color;
    $(".colorPick").click(function () {
        color = $(this).css("background-color");
    });

    $(document).on('click', '.colorPick', function () {
        $(".colorPick").css("border", "2px solid black");
        $(this).css("border", "4px solid black");
    });

    $(document).on("mouseenter", 'td', function(event) {
        $(this).css("background-color", color);
    });
});

