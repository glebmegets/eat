a = 50;
b = 'asdf';
c = true;
cats = 0
time = 10
weather = 'sunny'
leaves=5
amount = 3
errors = 0;
level = 2
photo = 'cat'
bg = 'url(https://media.slovoidilo.ua/media/publications/16/158453/158453-1_large.jpg)'
name = 'cat2'
if(level == 2){
  photo = 'mouse'
  bg = 'url(img/kuh2.png)'
}




// if (weather == 'sunny'){
//   $('body').css('background-image', 'url(https://pibig.info/uploads/posts/2021-05/1621850851_17-pibig_info-p-solnechno-priroda-krasivo-foto-18.jpg)')
// }


$('body').css('background-image', bg)



$('.new-level').click(function() {
  window.location.href = 'level2.html'
})

$('.over-btn').click(function() {
  window.location.reload()
})

// url() - фон зображенням
// repeat - повторення
// size - розмір
// $ - вибрати
// font - шрифти
// url() - фон зображенням
// repeat - повторення
// size - розмір
// $ - вибрати
// font - шрифти
// gif анімована фотка
// :hover 


$('.a')
$('.a')

$('.play').click(
function () {
  alert(1)
}

)


$('.second').click(function () {
  
})






function showCat() {
  random = (Math.random()*$('.window').length).toFixed(0);
  $('.window').eq(random).html(`<img src="img/${photo}.png" alt="" class="cat">`)

  //  random = (Math.random()*$('.window').length).toFixed(0);
  // $('.window').eq(random).html('<img src="img/cat1.png" alt="" class="cat-error">')

   random = (Math.random()*$('.window').length).toFixed(0);
  $('.window').eq(random).html('<img src="img/' + name + '.png" alt="" class="cat-error">')

  
$('.cat').click(
  function () {
    $(this).css('display', 'none')
    $('.cat-error').css('display', 'none')
    showCat()
    cats++;
    $('.cats').text(cats)
    // $('.elements').html($('.elements').html() + '<img src="img/cat.webp" alt="" class="catPoint">')
  }
)

$('.cat-error').click(function () {
  $('.heart').eq(errors).css('display', 'none')
  $('.cat').css('display', 'none')
    $('.cat-error').css('display', 'none')
    showCat()
    
  errors++;

 if(errors == 5){
$('.over').css('display', 'block')
 }

})




}
showCat()





function timer () {
  if (time > 0) {
    time--
    $('.second').text(time)
  }

  if (time == 0) {
    if (cats>5) {
        $('.you-win').css('left', '0')
    }
     else if (cats<=5) {
        $('.over').css('left', '0')
    }
  }

  
}





setInterval(timer, 1000)


// alert(1)

// main англ. Головний
// alert
// 1000 ms = 1 s


let priceIcecream = 32;
let priceChocolate = 40;



function shop(money, product) {
  if (product == 'icecream') {
    console.log(money - priceIcecream)
  }
   if (product == 'chocolate') {
    console.log(money - priceChocolate)
  }

}


shop(100, 'icecream')


shop(40, 'chocolate')


if(level == 'easy'){

}


count = 0

$('.button').click(function () {
 count++
 if (count == 1) {
  $('body').css('background', 'url(img/kitc.jpg)')  
 }
  if (count == 2) {
  $('body').css('background', 'url(img/кухня2.jpg)')  
 }

if (count == 3) {
  $('body').css('background', 'url(img/кухня.png)'); 
  count = 0; 
 }



  $('body').css('background-size', '100%')
})

$('.change-player').click(function () {
  $('.gallery').css('display', 'flex')
})

$('.select').click(function () {
  let d = document.getElementsByClassName('swiper-slide-active')[0].getElementsByTagName('img');
  alert(d[0].classList[0])
  name = d[0].classList[0]

  $('.cat-error').attr('src', d[0].src)

})








$('body').click(function () {
let a = document.getElementsByTagName('audio')[0].play()

})





