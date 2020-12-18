$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: 'Chào mừng bạn đến với page của Long!',
        text: 'Nhấn Ok để tiếp tục',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#000055',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

function switchButton() {
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}

function moveButton() {
    var x = Math.random()
    var y = Math.random()
    if (screen.width<=600) {
        x = x * 300;
        y = y * 500;
    } else{
        x = x * 500;
        y = y * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

var n = 0;
$('#no').mousemove(function() {
    if (n < 2)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
        switchButton();
});

$('#yes').click(function() {
    $('.content').hide(200);
    Swal.fire({
        width: 900,
        confirmButtonText: 'Okiiiii lun <3',
        background: '#3085d6',
        title: 'Oke babe:>>',
        text: "Giờ cậu có thể thoát ra được rồi =)) ",
        confirmButtonColor: '#83d0c9',
        onClose: () => {
            $('.content').show(200);
            }
    })
})
