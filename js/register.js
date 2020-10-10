window.addEventListener('load', function() {
    var eye = document.querySelector('.eye');
    var sureeye = document.querySelector('.sureeye');
    var tel = document.querySelector('#tel');
    var dx = document.querySelector('#dx');
    var mima = document.querySelector('#mima');
    var suremima = document.querySelector('#suremima');
    Show(eye, mima);
    Show(sureeye, suremima);

    function Show(ele, input) {
        var flag = 0;
        ele.addEventListener('click', function() {
            if (flag == 0) {
                input.type = 'text';
                this.src = 'img/open.png';
                flag = 1;
            } else {
                input.type = 'password';
                this.src = 'img/close.png';
                flag = 0;
            }
        })
    }
    var regtel = /^1[3-9]\d{9}$/;
    regxp(tel, regtel);
    var regdx = /^\d{4,6}$/;
    regxp(dx, regdx);
    //密码至少一个大写字母，一个小写字母，一个数字。8-16长度
    var regmima = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    regxp(mima, regmima);
    suremima.addEventListener('blur', function() {
        if (this.value === mima.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = ' <i class="success_icon"></i>两次密码输入一致';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="eorror_icon"></i> 两次密码输入不一致请重新输入';
        }
    })

    function regxp(ele, reg) {
        ele.addEventListener('blur', function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = ' <i class="success_icon"></i>格式输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = ' <i class="eorror_icon"></i> 格式输入错误，请重新输入';


            }
        })

    }
})