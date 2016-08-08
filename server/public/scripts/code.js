$(document.ready(function() {



loadData();

function loadData() {

$.ajax({

type: “GET”, resource
url: ‘/data’,
success: function(response) {
console.log(response);
});

}

});
}
