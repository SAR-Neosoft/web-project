$(function(){
    $('#show').click(function(){
        if($('#pass').attr('type')==='password'){
            $('#pass').attr('type','text');
            $('#show').text('HIDE');
            $('#show').css({color:'#3498db'});
        }
        else{
           
            $('#pass').attr('type','password');
            $('#show').text('SHOW');
            $('#show').css({color:'#222'});
        }
       

    });
});

 // // let passNode = document.getElementById('pass');
        // let showBtn = document.getElementById('show');
        // function show() {
        //     if (passNode.type === "password") {
        //         passNode.type = "text";
        //         showBtn.textContent = "HIDE";
        //         showBtn.style.color = "#3498db";
        //     } else {
        //         passNode.type = "password";
        //         showBtn.textContent = "SHOW";
        //         showBtn.style.color = "#222";
        //     }
        // }