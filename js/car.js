$(function() {
    $(".checkall").click(function() {
        // console.log($(".checkall:checked").prop("checked"));
        if ($(".checkall:checked").prop("checked")) {
            $(".j-checkbox").prop("checked", true);
        } else {
            $(".j-checkbox").prop("checked", false);
        }
    })
    $(".j-checkbox").click(function() {
        console.log($(".j-checkbox").length);
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents().siblings(".p-price").html();
        p = p.substr(1);
        // console.log(n * p);
        $(this).parents().siblings(".p-sum").html("￥" + (n * p).toFixed(2));
        getSum();
    })
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        n--;
        if (n <= 1) {
            n = 1;
        }
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents().siblings(".p-price").html();
        p = p.substr(1);
        // console.log(n * p);
        $(this).parents().siblings(".p-sum").html("￥" + (n * p).toFixed(2));
        getSum();
    })
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents().siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents().siblings(".p-sum").html("￥" + (count * p).toFixed(2));
        getSum();
    })
    getSum();

    function getSum() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseInt($(ele).text().substr(1));
        });
        $(".price-sum em ").text("￥" + money.toFixed(2));
    }
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })

})