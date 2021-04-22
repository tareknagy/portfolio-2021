// $('#project-list').mouseleave(() => {
//     let currentProject = 0;
//     highlightProject(projectList[currentProject]);
//     projectAnimationInterval = setInterval(() => {
//         unhighlightProject(projectList[currentProject]);
//         if ((currentProject + 1) === projectList.length) {
//             currentProject = 0;
//         } else {
//             currentProject++;
//         }
//         highlightProject(projectList[currentProject]);
//     }, 2000);
// });



// nav floating code. works. need to turn off the clearInterval above and the Let at the top.
// $('#nav').mouseleave(() => {
//     $('.nav-menu-closed').css({ 'transition-duration': '5000ms', 'transition-timing-function': 'ease-out', left: 'calc(0% + 10px)', top: 'calc(100% - 40px)' });
//     navAnimationInterval = setInterval(() => {
//         if ($('.nav-menu-closed').css('left') == '10px') {
//             $('.nav-menu-closed').css({ left: 'calc(100% + 20px)' });
//         } else {
//             $('.nav-menu-closed').css({ left: 'calc(0% + 10px)' });
//         }
//     }, 5100);
// });

// $('#nav').mouseleave(() => {
//     setTimeout(function() {
//         $('.nav-menu-closed').css({
//             left: $('#nav').width()-10+'px',
//             top: 0,
//             'transition-duration': '5000ms',
//             'transition-timing-function': 'ease'
//         })
//     }, 2000);
// });


// scroll on project
// $('#project-divs').children().click((e) => {
//     const el = document.getElementById(e.currentTarget.id);
//     const elWidth = el.offsetWidth + 20
//     const clickX = e.clientX
//     // if right side of screen += image width
//     if (clickX > (elWidth / 2)) {
//         el.scrollLeft += elWidth;
//         // if left side of screen -= image width
//     } else {
//         el.scrollLeft -= elWidth;
//     }
// })


// hover arrows on project
// $('#project-divs').children().mousemove(
//     function(e) {
//         const el = document.getElementById(e.currentTarget.id);
//         const elWidth = el.offsetWidth + 20
//         const hoverX = e.clientX
//         if (hoverX > (elWidth / 2)) {
//             el.classList.remove('hover-left')
//             el.classList.add('hover-right')
//         } else {
//             el.classList.remove('hover-right')
//             el.classList.add('hover-left')
//         }
//     }
// )


