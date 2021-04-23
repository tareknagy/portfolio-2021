// let navAnimationInterval
let projectList =  ['chops', 'gertrude', 'free', 'return', 'no', 'polyphonic'];
let projectAnimationInterval;

// // Hide fade intro page on load
window.addEventListener('load', () => {
    const introEl =  document.getElementById('cover')
    introEl.style['background-position'] = 'bottom';
    setTimeout (() => {
        introEl.style.cssText += 'opacity: 0%; transition: 1000ms';
    }, 1000);
    // }, 2500);
    setTimeout (() => {
        introEl.style.display = 'none';
    }, 2000)
    // }, 3500);
    // Kick off interval for project scroll
    let currentProject = 0;
    highlightProject(projectList[currentProject]);
    projectAnimationInterval = setInterval(() => {
        // unhighlight current project, change project ind, then highlight again.
        unhighlightProject(projectList[currentProject]);
        if ((currentProject + 1) === projectList.length) {
            currentProject = 0;
        } else {
            currentProject++;
        }
        highlightProject(projectList[currentProject]);
    }, 2000);
});

// Set thumbnail size
(() => {
    const pListHeight = document.getElementById('project-list').offsetHeight + 'px';
    document.getElementById('project-thumbnail-container').style.width = pListHeight;
    document.getElementById('project-thumbnail').style.width = pListHeight;
})();


// nav
// const navEl = document.getElementById('nav');
// const navMenuEl = document.getElementById('nav-menu');
// const navMenuClosedEl =  document.querySelector('.nav-menu-closed');
// const navMenuOpenEl =  document.querySelector('.nav-menu-open');
// const hamburgerMenuEl = document.getElementById('hamburger-menu');
// const aboutEl = document.getElementById('about');
// const navExitEl = document.getElementById('nav-exit');

// // What's conflicting here? what's setting the left property on this? the mousemove or leave, probs.
// window.addEventListener('resize', () => {
//     console.log(navMenuClosedEl, window.innerWidth)
//     navMenuEl.style.cssText += `right: 0; top: 0`;
// })


nav
$(window).resize(() => {
    $('#nav-menu').css({
        left: $('#nav').width()-10,
        top: 0
        
    })
})

$('#nav').on('mousemove', (event) => {
    // clearInterval(navAnimationInterval);
    $('.nav-menu-closed').css({
        left: event.clientX + 10,
        top: event.clientY - 40,
        'transition-duration': '500ms',
        'transition-timing-function': 'ease-out'
    });
});

// click events
$('body').click((e) => {
    // project info
    if(!$(e.target).hasClass('info-open')) {
        $('.info-content-hidden').css('opacity', '0')
        $('.info-open').removeClass('info-open')
        $('.info-content').removeClass('info-content-visible')
        $('.info-content').addClass('info-content-hidden')
        $('.info-heading').css('opacity', '1')
    }
    if ($(e.target).parent().hasClass('info')) {
        $(e.target).css('opacity', '0')
        $(e.target).parent().addClass('info-open')
        $('.info-content').removeClass('info-content-hidden')
        $('.info-content').addClass('info-content-visible')
        setTimeout(() => {
            $('.info-content-visible').css('opacity', '1')
        }, 1500)
    }

    // about section
    if($(e.target).hasClass('about-img')) {
        setTimeout(() => {
            $('#about-section').css('display', 'none')
        }, 500)
        $('#about-section').css('opacity', '0%')
    }
    if($(e.target).is('.wordmark, .about-button')) {
        console.log('hi')
        $('#about-section').css('display', 'block')
        setTimeout(() => {
            $('#about-section').css('opacity', '100%')
        }, 1)
    }

    // menu open and close
    if(!$(e.target).hasClass('nav-menu-open')) {
        $('#nav-menu').removeClass('nav-menu-open')
        $('#nav-menu').addClass('nav-menu-closed')
        $('#hamburger-menu').css('display', 'block')
        $('#about').css({'visibility': 'hidden', 'opacity': '0'})
        $('#nav-exit').css('display', 'none')
    } 
    if($(e.target).parent().hasClass('nav-menu-closed')) {
        $('#nav-menu').addClass('nav-menu-open').css({
            // left: 0,
            // top: 0,
            // left: $('#nav').width()-10,
            // top: 0,
            'transition-duration': '1500ms' 
        })
        $('#nav-menu').removeClass('nav-menu-closed')
        $('#hamburger-menu').css('display', 'none')
        setTimeout(() => {
            $('#about').css({'visibility': 'visible','opacity': '1'})
            $('#nav-exit').css('display', 'block')
        }, 1800)
    }
})

// projects - scroll interval
$('#project-list').hover((e) => {
        clearInterval(projectAnimationInterval);
    }, () => {
        // on off, reset interval
        // set ind to 0, highlight first project
        let currentProject = 0;
        highlightProject(projectList[currentProject]);
        projectAnimationInterval = setInterval(() => {
            // unhighlight current project, change project ind, then highlight again.
            unhighlightProject(projectList[currentProject]);
            if ((currentProject + 1) === projectList.length) {
                currentProject = 0;
            } else {
                currentProject++;
            }
            highlightProject(projectList[currentProject]);
        }, 2000);
    }
)

// projects - hover
$('.project-chops').hover(
    function() { highlightProject('chops') },
    function() { unhighlightProject('chops') }
)
$('.project-gertrude').hover(
    function() { highlightProject('gertrude') },
    function() { unhighlightProject('gertrude') }
)
$('.project-free').hover(
    function() { highlightProject('free') },
    function() { unhighlightProject('free') }
)
$('.project-return').hover(
    function() { highlightProject('return') },
    function() { unhighlightProject('return') }
)
$('.project-no').hover(
    function() { highlightProject('no') },
    function() { unhighlightProject('no') }
)
$('.project-polyphonic').hover(
    function() { highlightProject('polyphonic') },
    function() { unhighlightProject('polyphonic') }
)

// projects - open
$('.project-chops').click((e) => {
    openDimmer();
    openProject('chops');
})

// projects - close
$('#dimmer').click((e) => {
    $('#dimmer').css('opacity', '0')
    $('#project-chops').css('opacity', '0')
    // Add all the rest of the projects in here
    setTimeout(() => {
        $('#dimmer').css('display', 'none')
        $('#project-chops').css('display', 'none')
        // Add all the rest of the projects in here
    }, 1000)
})

// function bank
function openDimmer() {
    $('#dimmer').css('display', 'block')
    setTimeout(() => {
        $('#dimmer').css({'visibility': 'visible','opacity': '80%'})
    }, 100)
}

function openProject(project) {
    $(`#project-${project}`).css('display', 'inline-block')
    setTimeout(() => {
        $(`#project-${project}`).css({'visibility': 'visible','opacity': '1'})
    }, 1000)
}

function highlightProject(project) {
    $('.project-link').removeClass('project-link')
    $(`.project-${project}`).addClass('project-link')
    $('#project-thumbnail').css('background-image', `url("images/tn_${project}.jpg")`)
}

function unhighlightProject(project) {
    $(`.project-${project}`).removeClass('project-link')
    $('#project-thumbnail').css('background-image', '') 
}
