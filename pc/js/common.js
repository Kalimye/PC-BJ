/* 禁用右键菜单 */
document.oncontextmenu = function () {
    event.returnValue = false;
};
/* 禁用选中功能 */
document.onselectstart = function () {
    event.returnValue = false;
};
/* 禁用复制功能 */
document.oncopy = function () {
    event.returnValue = false;
};
/* 禁用鼠标的左右键 */
document.onmousedown = function () {
    if (event.which == 1) { //鼠标左键
        return false;
    }

    if (event.which == 3) { //鼠标右键
        return false;
    }
};

// 电话

var phone_number = document.querySelectorAll(".phone-number");
phone_number.forEach(item => {
    item.textContent = '4006-299-520';
});