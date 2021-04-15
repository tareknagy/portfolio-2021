// thumbnails
$('#project-thumbnail-container').css('width', $('#project-list').height()+'px');
$('#project-thumbnail').css('width', $('#project-list').height()+'px');

// nav
$(window).resize(() => {
    $('#nav-menu').css({
        left: $('#nav').width()-10,
        top: 0
    })
})

$('#nav').on('mousemove', (event) => {
    $('.nav-menu-closed').css({
        left: event.clientX + 20,
        top: event.clientY - 65,
        'transition-duration': '500ms',
        'transition-timing-function': 'ease-out'
    });
});

$('#nav').mouseleave(() => {
    setTimeout(function() {
        $('.nav-menu-closed').css({
            left: $('#nav').width()-10+'px',
            top: 0,
            'transition-duration': '5000ms',
            'transition-timing-function': 'ease'
        })
    }, 2000);
});

$('body').click((e) => {
    if(!$(e.target).hasClass('nav-menu-open')) {
        $('#nav-menu').removeClass('nav-menu-open')
        $('#nav-menu').addClass('nav-menu-closed')
        $('#hamburger-menu').css('display', 'block')
        $('#about').css('display', 'none')
    }
    if($(e.target).parent().hasClass('nav-menu-closed')) {
        $('#nav-menu').addClass('nav-menu-open').css({
            left: $('#nav').width()-10,
            top: 0,
            'transition-duration': '1500ms' 
        })
        $('#nav-menu').removeClass('nav-menu-closed')
        $('#hamburger-menu').css('display', 'none')
        $('#about').css('display', 'block')
    }
})

// projects
$('.project-chops').hover(
    function() { 
        $('.project-chops').addClass('project-link')
        $('#project-thumbnail').css('background-image', 'url("images/tn_chops.jpg")') 
    },
    function() { 
        $('.project-chops').removeClass('project-link') 
        $('#project-thumbnail').css('background-image', '') 
    }
)
$('.project-gertrude').hover(
    function() { 
        $('.project-gertrude').addClass('project-link')
        $('#project-thumbnail').css('background-image', 'url("images/tn_gertrude.jpg")') 
    },
    function() { 
        $('.project-gertrude').removeClass('project-link') 
        $('#project-thumbnail').css('background-image', '') 
    }
)
$('.project-free').hover(
    function() { 
        $('.project-free').addClass('project-link')
        $('#project-thumbnail').css('background-image', 'url("images/tn_free.jpg")') 
    },
    function() { 
        $('.project-free').removeClass('project-link') 
        $('#project-thumbnail').css('background-image', '') 
    }
)
$('.project-return').hover(
    function() { 
        $('.project-return').addClass('project-link')
        $('#project-thumbnail').css('background-image', 'url("images/tn_return.jpg")') 
    },
    function() { 
        $('.project-return').removeClass('project-link') 
        $('#project-thumbnail').css('background-image', '') 
    }
)
$('.project-no').hover(
    function() { 
        $('.project-no').addClass('project-link')
        $('#project-thumbnail').css('background-image', 'url("images/tn_no.jpg")') 
    },
    function() { 
        $('.project-no').removeClass('project-link') 
        $('#project-thumbnail').css('background-image', '') 
    }
)
$('.project-polyphonic').hover(
    function() { 
        $('.project-polyphonic').addClass('project-link')
        $('#project-thumbnail').css('background-image', 'url("images/tn_poly.jpg")') 
    },
    function() { 
        $('.project-polyphonic').removeClass('project-link') 
        $('#project-thumbnail').css('background-image', '') 
    }
)