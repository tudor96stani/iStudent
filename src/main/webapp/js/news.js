$(document).ready(function(){
    var url = "http://localhost:8080/api/news/getall";
   // alert(url);
    function getall() {
        $("tbody").empty();
        $.ajax({
            type: "GET",
            url: url,
            success:function(data){
                //alert("aiki");
                console.log(data);
                $.each(data, function (index, value) {
                    $("#list").append('<tr>'+'<td>' + value.message + '</td>'+'<td>Delete</td><td>Update</td></tr>');
                    //alert(value);
                });
            },
            error: function (data) {
                alert("Error!");
            }
        });


    }
    function postNews() {
        //alert('akolo');
        var m=$('#message').val();
        var course = $('#title').val();
        var title = $('#course').val();
        var body = {id:'',message:m,course:course,teacher:"",title:title};
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/news",
            data: JSON.stringify(body),
            dataType: "text",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
               //alert("este bine");
                getall();
            },
            error: function (data, status, xhr) {
                //var err = eval("(" + xhr.getResponseHeader('Location') + ")");
                alert(err);
            }
        });
    }
    getall();

    $("#add-btn").click(function (event) {
        event.preventDefault();
        postNews();

    });

   

    function deleteNew(newid){
        $.ajax({
            type:"POST",
            url:"http://localhost:8080/api/news/delete/"+newid,
            success:function (data) {
                getall();
            },
            error:function (data,status,xhr) {
                alert("Error");
            }
        });
    }


    }
);