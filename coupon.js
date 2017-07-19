$(function () {
    function getUrlParam(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
//滑动

    var titleid = 1;
    
    //列表
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcoupon",
        data:{},
        success: function (data) {
            var html = template("pro-list", data);
            $(".product-list").html(html);
        }
    })
    
})