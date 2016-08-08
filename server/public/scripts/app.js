$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function loadData(data) {
            console.log(data);
            data.omicron.forEach(function(answer, index) {
                $("#showdata").on("click", loadData);
                $(".container").append("<div>")
                $el = $(".container").children().last()
                $el.append("<h2>" + answer.name + "<h2>");
                $el.append("<h2>" + answer.git_username + "<h2>");
                $el.append("<h2>" + answer.shoutout + "<h2>");
                //hide
                //show
            });
        }
    });

    $("#previous").on("click", function() {
    console.log('this');
      //  $(this).parent().next();
        // student++;
    //    if student == 17{
    //      student == 0;
        // }

      $("#next").on("click", function() {
        console.log('this');
      //      $(this).parent().prev();
        //    student--;
        //    if student == 0 {
        //      student == 17

         })
        });


           });
      // });


//

//

//
// ;

// function createSquares(){
//     for(var i = 0; i <      .length; i++){
//         $('.container').append("<div class ='box' style='background-color: " + [i] + "'></div>");
//         $('.container').children().last().data('id',   [i]);
//     }
// }

// $('.container').load('/data/omicron.json');
// console.log('this');
// //   function boxes(omicron){
// //     for(var i = 0; i < 17; i++) {
// //     $('.  ').append('<div id= "" + i +    </div>></div>');
// //   };
