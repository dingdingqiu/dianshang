window.addEventListener('load', function() {
    var fixedtool = document.querySelector('.fixedtool');
    var lis = fixedtool.querySelectorAll('li');
    var jiadian = document.querySelector('.jiadian');
    var dingbu = document.querySelector('.dingbu');

    for (var i = 0; i < lis.length; i++) {
        // 点击变当前颜色
        lis[i].addEventListener('click', function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'fixe_current';
            // 点击找到页面对应模块?
        })
    }
    document.addEventListener('scroll', function() {

        if (window.pageYOffset >= jiadian.offsetTop) {
            dingbu.style.display = 'block';
        } else {
            dingbu.style.display = 'none';
        }
        dingbu.addEventListener('click', function() {
            document.scrollTop = 0;
            console.log(nav.scrollTop);
        })
    })

    //tab栏切换
    var focus = document.querySelector('.focus');
    var arrow_fl = document.querySelector('.arrow_fl');
    var arrow_fr = document.querySelector('.arrow_fr');
    var ol = document.querySelector('.circle');
    var ul = focus.querySelector('ul');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arrow_fl.style.display = 'block';
        arrow_fr.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        arrow_fl.style.display = 'none';
        arrow_fr.style.display = 'none';
        timer = setInterval(function() {
            arrow_fr.click();
        }, 2000)
    })
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        //自定义属性
        li.setAttribute('index', i);

        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            num = index;
            circle = index;
            var index = this.getAttribute('index');
            animate(ul, -index * focusWidth);
        })
    }
    var num = 0;
    var circle = 0;
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    arrow_fr.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChage();
    })
    arrow_fl.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';

        }
        num--;
        animate(ul, -num * focusWidth);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChage();
    })

    function circleChage() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    //自动播放功能
    var timer = setInterval(function() {
            arrow_fr.click();
        }, 2000)
        //固定导航栏返回顶部
    dingbu.addEventListener('click', function() {
        animateTop(window, 0);
    })

    function animateTop(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            // obj.style.left =  window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);

        }, 15);
    }
})