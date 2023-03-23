//fade aos 초기화
AOS.init();




//****header****//
//header scroll background
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>500) $('header').addClass('scroll');
    else $('header').removeClass('scroll');
});

//text color change
$(function(){
    $("header i,nav ul li a").each(function(){
        let win = $(window);  //창을 쿼리 객체화
        let header = $(this); //header를 객체화해서 변수에 저장
        // let spot = header.offset().top;
        // offset().top : 상단 요소의 기준위치를 찾는 역할
        //offset().left : 좌측요소의 기준위치를 찾는 역할

        win.scroll(function(){
            // if(win.scrollTop()>spot){
            if(win.scrollTop()>500){
                header.addClass("active3")
            }else{
                header.removeClass("active3")
            }
        });     
    })
});

//pc logo scroll display
$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(window.pageYOffset>500) $('header ul li:nth-child(3)').css({display:'none'});
    else $('header ul li:nth-child(3)').css({display:'block'});
});

//size down mobile logo opacity
$(function(){
    $(window).resize(function(){
        let res=outerWidth;
        if(res<=881){
            $(".logo").css({opacity:'1'})
        }else{
            $(".logo").css({opacity:'0'})
        }
    });
});

//ta+mobile > menu display block
const toggleBtn = document.querySelector('.ham');
const header = document.querySelector('header');
const menu = document.querySelector('.nav');
const icons = document.querySelector('.icon');
toggleBtn.addEventListener('click',()=>{
header.classList.toggle('active1');
menu.classList.toggle('active2');
icons.classList.toggle('active2');
});
//****header****//




//****scroll_up****//
//scrollup
$(function(){
        $(".scrollUp").click(function(){
        $(window).scrollTop(0);
    });
});

//scrollshow
const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>820){
        scrollUp.classList.add("active");
    }else{
        scrollUp.classList.remove("active");
    }
});
//****scroll_up****//




//****main****//
//main scroll opacity
window.addEventListener('scroll',function(){
    //targetting image
    var hero_img=document.getElementById('carouselExampleIndicators');
    //targetting image
    var hero_imgs1=document.getElementById('hero-imgs1');
    var hero_imgs2=document.getElementById('hero-imgs2');
    var hero_imgs3=document.getElementById('hero-imgs3');
    //targetting text
    // var text=document.getElementById('text');
    // var scrollY = window.scrollY;
    //hero-img
    hero_img.style.opacity=1-(scrollY*0.0016);
    //inner imgs
    hero_imgs1.style.transform=`scale(${1+(scrollY*0.00035)})`;
    hero_imgs2.style.transform=`scale(${1+(scrollY*0.00035)})`;
    hero_imgs3.style.transform=`scale(${1+(scrollY*0.00035)})`;
    //text
    // text.style.color=0+(scrollY*0.0011);
});

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(window.pageYOffset>5) $('.carousel-indicators,.players').css({opacity:0});
    else $('.carousel-indicators,.players').css({opacity:1});
});

//main vollum
vol.value=70;
vol.oninput=function(){
    beachSnd.volume=vol.value/100;
}
beachBut.onclick=function(){
    beachSnd.play();
    // beachSnd.controls=true;
}
stopBut.onclick=function(){
    beachSnd.pause();
}
//****main****//




//****s1****//
//s1 hover 
$(function(){
    $(".inner .img").on('mouseover',function(){
        $(this).find("span,.title,.s6icon").stop(true).animate({opacity:'1'},300,'linear')
    }).on('mouseout',function(){
        $(this).find("span,.title,.s6icon").stop(true).animate({opacity:'0'},500,'linear')
    });
    $(".s5img").on('mouseover',function(){
        $(this).find("span,i").stop(true).animate({opacity:'1'},300,'linear')
    }).on('mouseout',function(){
        $(this).find("span,i").stop(true).animate({opacity:'0'},500,'linear')
    });
    
});
//****s1****//




//****s2****//
//tab toggle
$(function(){
    $(".tab i").click(function(){
        $("#tab1 .tab_con",this).slideToggle();
    });
    $("#tab2 i").click(function(){
        $("#tab2 .tab_con").slideToggle();
    });
});

//slider
$(function(){
    $('.s2slide').slick({
        dots: true, //스크롤바 아래점으로 페이지네이션 여부
        infinite: true, // 무한반복옵션
        arrows: false, //옆으로 이동하는 화살표 표시 여부
        speed: 1500, //다음버튼 누르고 다음화면 뜨는데까지 걸리는시간
        autoplay: true, //자동 슬라이드
        pauseOnHover:true, //슬라이드 이동 시 마우스 호버하면 슬라이드 멈춤
        draggable:true, //드래그 가능여부
        autoplaySpeed:3000, //자동슬라이드 시 다음으로 넘어가는데 걸리는 시간
        slidesToShow: 4, //한 화면에 보여질 컨텐츠 개수
        
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        ]
    });
//****s2****//




//****s4****//
//sliders
$(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        fade: true,
        draggable:true,
        autoplay:true,
        speed:1500,
        autoplaySpeed:3000,
        pauseOnHover:true,
        asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 766,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            }
            ]
        });
    ////
    });
});

//click
$(document).ready(function(){
    $("#wish").click(function() {
        $('#fillwish').siblings().toggleClass("onon");
    });
});
//****s4****//




//****s5****//
///typing
const $text = document.querySelector(".typing");
// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
    "Disney Princess, Yerin Baek, Vogue, Galaxy, Uniqlo, 8seconds ....."
    //"HTML \n 줄바꿈 타이핑!",
    //   "CSS \n 웹 스타일~", 
    //   "JavaScript \n Typing Test!"
];

// 글자 입력 속도
const speed = 200;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
}

// 타이핑 효과
const typing = async () => {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
    }
    // 잠시 대기
    await wait(3500);
    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    while (letter.length) {
    await wait(speed);
    letter.pop();
    $text.innerHTML = letter.join(""); 
    }
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}
// 초기 실행
setTimeout(typing, 1800);
//****s5****//