let cursor = document.getElementById('cursor');
const onMouseMove = (event) => {
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';

    // console.log(event.target);

    if (event.target.hasAttribute('cursor-type')) {
        var cursorSize = event.target.getAttribute('cursor-type');
        cursor.classList.add(cursorSize);
    } else {
        cursor.classList = '';
    }


}
document.addEventListener('mousemove', onMouseMove);