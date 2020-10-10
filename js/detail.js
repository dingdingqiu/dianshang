window.addEventListener('load', function() {
    var mask = document.querySelector('.wrap_img');
    var big = document.querySelector('.wrap_big');
    var wrapImg = document.querySelector('.into_wrap_img');
    var bigImg = document.querySelector('.bigImg');
    wrapImg.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';

    })
    wrapImg.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    wrapImg.addEventListener('mousemove', function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var maskX = x - 150;
            var maskY = y - 150;
            if (maskX <= 0) {
                maskX = 0;
            } else if (maskX >= 100) {
                maskX = 100;
            }
            if (maskY <= 0) {
                maskY = 0;
            } else if (maskY >= 100) {
                maskY = 100;
            }
            mask.style.left = maskX + 'px';
            mask.style.top = maskY + 'px';

            var bigMax = bigImg.offsetWidth - big.offsetWidth;
            var bigX = maskX * bigMax / 100;
            var bigY = maskY * bigMax / 100;
            console.log(bigX);
            bigImg.style.left = -bigX + 'px';
            bigImg.style.top = -bigY + 'px';
        })
        //商品介绍左边



    //商品介绍右边
    var delist = document.querySelector('.detail_list');
    var delis = delist.querySelectorAll('li');
    var decon = document.querySelector('.detail_con');
    var decon = document.querySelector('.detail_con');
    var deul = decon.querySelectorAll('ul');
    for (var i = 0; i < delis.length; i++) {
        // 创建每个li的自定义属性
        var index = delis[i].setAttribute('index', i)
        delis[i].addEventListener('click', function() {
            for (var i = 0; i < delis.length; i++) {
                delis[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index')
            for (var i = 0; i < deul.length; i++) {
                deul[i].style.display = 'none';
            }
            deul[index].style.display = 'block';
        })
    }

})