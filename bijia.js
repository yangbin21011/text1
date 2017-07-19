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
var productid = getUrlParam("productid");

// var categoryid = getUrlParam("categoryId");
var categoryid = getUrlParam("categoryid");
// var categoryid = getUrlParam("categoryid");
var productName = getUrlParam("productName");

$.ajax({
    url: "http://127.0.0.1:3000/api/getcategorybyid?categoryid=" + categoryid,
    data: {},
    success: function(data) {
        var html = template("nav-reorder", data);

        $(".reorder").html(html);
        $.ajax({
            url: " http://127.0.0.1:3000/api/getproduct?productid=" + productid,
            result: {},
            success: function(result) {
                var html = template("nav-wak", result);
                $(".reorder>.f_left").append(html);

            }
        })
    }
})
$.ajax({
    url: "http://127.0.0.1:3000/api/getproduct?productid=" + productid,
    data: {

    },
    success: function(data) {
        var html = template("p-detail", data);
        $(".pro-detail").html(html);
    }
})
$.ajax({
    url: "http://127.0.0.1:3000/api/getproductcom?productid=" + productid,
    result: {

    },
    success: function(result) {
        console.log(result);
        var html = template("pj-list", result);
        $(".pj-list").html(html);
    }
})
