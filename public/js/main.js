const User = require('./public/models/user')
require('./public/db/connect')

const addStu = async(event) =>{
    event.preventDefault();
    var stuname = $("#stuname")
    var stuemail = $("#stuemail")
    var stupass = $("#stupass")

    $.ajax({
        url: '/register',
        method: 'POST',
        data:{
            stuname,
            stuemail,
            stupass
        },
        success:function(data){
            console.log(data)
        }
    })
}   