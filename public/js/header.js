//在js文件夹下创建header.js文件
//专门负责请求页头的html片段和页头的css文件

$(function(){
    $.ajax({
        url:"Header.html",
        type:"get",
        //data:{},//不用写，因为请求文件不用带参数
        //因为请求的是静态HTML文件的内容
        //所以，返回的是HTML片段，不是json
        //dataType:"json",//不用写
        //当请求成功后
        success: function(result) {
            //用result获得html片段创建新<header>元素代替id为header的空<header>元素
            $(result).replaceAll("#header");
            //动态创建一个<link>元素引用header.css，并将<link>自动添加到<head>元素中
            $(`<link rel="stylesheet" href="./css/bootstrap.min.css">`).appendTo("head");
            $(`<link rel="stylesheet" href="./font-awesome-4.7.0/css/font-awesome.min.css">`).appendTo("head");
            $(`<link rel="stylesheet" href="./css/animate.css">`).appendTo("head");
            $(`<link rel="stylesheet" href="./css/sina-nav.css">`).appendTo("head");

        }
    })
});