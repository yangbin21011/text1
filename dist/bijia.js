function getUrlParam(t){var r=window.location.search,a=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),e=r.substr(1).match(a);return e?decodeURIComponent(e[2]):null}var productid=getUrlParam("productid"),categoryid=getUrlParam("categoryid"),productName=getUrlParam("productName");$.ajax({url:"http://127.0.0.1:3000/api/getcategorybyid?categoryid="+categoryid,data:{},success:function(t){var r=template("nav-reorder",t);$(".reorder").html(r),$.ajax({url:" http://127.0.0.1:3000/api/getproduct?productid="+productid,result:{},success:function(t){var r=template("nav-wak",t);$(".reorder>.f_left").append(r)}})}}),$.ajax({url:"http://127.0.0.1:3000/api/getproduct?productid="+productid,data:{},success:function(t){var r=template("p-detail",t);$(".pro-detail").html(r)}}),$.ajax({url:"http://127.0.0.1:3000/api/getproductcom?productid="+productid,result:{},success:function(t){console.log(t);var r=template("pj-list",t);$(".pj-list").html(r)}});