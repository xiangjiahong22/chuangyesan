
$(document).ready(function () {

    cityProductPrice.init();
    cityProductPrice.initProvince();
    cityProductPrice.SetPrice();
    cityProductPrice.BrowseHistory();
    //拿到当前用户定位的IP
    // cityProductPrice.iphelper();
    //立即购买
    $(".inner .choose>a:eq(0)").bind("click", function () { cityProductPrice.AddToCart(1); });
    //加入购物车
    $(".inner .choose>a:eq(1),.container>a:eq(0)").bind("click", function () { cityProductPrice.AddToCart(0); });
    //初始化评论
    cityProductPrice.InitComment();
    $(".top .left").bind("click", function () { history.go(-1); });
    cityProductPrice.SetLinkQQ();
});
var productId;
var categoryId;
var currentCityId;
//城市价格数据
var returnData;
//刻章数据
var CarvedChapterData;
//推荐套餐数据
var SetData;
//备注
var cartRemark;
//城市产品价格切换数据
var cityProductData;
//初始化数据
var cityProductPrice = {
    init: function () {
        productId = $(".product").attr("data-productId");
        categoryId = $(".product").attr("data-categoryId");
        currentCityId = $(".product").attr("data-currentCityId");
    },
    //拿到城市价格数据
    data: function () {
        $.ajax({
            url: 'Ajax/ProductHandler.ashx',
            data: { type: 1, id: productId },
            type: 'post',
            async: false,
            success: function (data) {
                returnData = data;
            }
        });
    },
    //拿到当前定位的用户IPcookies
    iphelper: function () {
        $.ajax({
            url: 'Ajax/IpHandler.ashx',
            data: {},
            type: 'post',
            async: false,
            success: function (data) {
            }
        });
    },
    //切换时调整数据
    change: function () {

        cityProductPrice.initCity();
        cityProductPrice.SetPrice();
    },
    //初始化省数据
    initProvince: function () {
        $.ajax({
            url: 'Ajax/ProvinceCityHandler.ashx',
            data: { d: 1, pid: productId },
            type: 'post',
            async: false,
            success: function (data) {
                var d = eval(data);

                var temp = "<span class=\"shore-list-tag pull-left\"><em class=\"ml15 pl5 pr5 pull-left\" data-id={1}>{0}</em></span>";
                $(".shore-hotarea").html("");
                $(".shore-firstarea").html("");
                for (var i = 0; i < d.length; i++) {
                    var _temp = temp.replace("{0}", d[i].Value);
                    _temp = _temp.replace("{1}", d[i].Key);
                    if (i <= 3) {

                        $(".shore-hotarea").append(_temp);
                    } else {

                        $(".shore-firstarea").append(_temp);
                    }
                }
            }
        });
        cityProductPrice.initCity();
        cityProductPrice.SetPrice();
    },
    //初始化城市数据
    initCity: function () {
        var temp = "<span class=\"shore-list-tag pull-left\"><em class=\"ml15 pl5 pr5 pull-left\" data-id={1}>{0}</em></span>";
        var proviceId = $("#itemLocation").attr("data-id");
        $.ajax({
            url: 'Ajax/ProvinceCityHandler.ashx',
            data: { d: proviceId, pid: productId },
            type: 'post',
            async: false,
            success: function (data) {
                var d = eval(data);
                $("#div_area").html("");
                for (var i = 0; i < d.length; i++) {
                    var _temp = temp.replace("{0}", d[i].Value);
                    _temp = _temp.replace("{1}", d[i].Key);
                    $("#div_area").append(_temp);
                }
            }
        });
    },
    //设置价格
    SetPrice: function () {
        if (returnData != undefined) {
            //honey 修改2016.06.24
            var cityId = $("#itemLocation").attr("data-id");
            if (cityId == undefined) {
                cityId = 217; //统一价
            }
            var data = eval(returnData);
            for (var i = 0; i < data.length; i++) {
                if (data[i].AreaId == cityId) {
                    if (data[i].Price == "-1") {
                        $(".inner p>em").html("面议");
                    } else {
                        $(".inner p>em").html("￥" + data[i].Price);
                    }
                    break;
                }

            }
        }
    },
    CheckLogin: function () {
        var msg = "false";
        $.ajax({
            url: 'Ajax/CheckLoginHandler.ashx',
            type: 'post',
            async: false,
            success: function (data) {
                if (data == "0") {
                    msg = "false";
                    window.location.href = '/login.aspx?url=' + location.href;
                }
                else
                    msg = "true";
            }
        });
        return msg;
    },
    //加入购物车,type=0表示加入购物车，type=1表示立即购买
    AddToCart: function (type) {
        if ($(".checkbox input[type='checkbox']").prop("checked") == true || $(".checkbox input[type='checkbox']").prop("checked") == undefined) {
            var totalMoney = parseInt($(".inner p>em").html().replace("￥", ""));
            if (totalMoney > 0) {
                var msg = cityProductPrice.CheckLogin();
                if (msg == "true") {
                    var cityId = $("#itemLocation").attr("data-id");
                    //var cityId = $("#select_city").val();
                    if (cityId == undefined) {
                        cityId = 217; //统一价
                    }
                    var buyId = $(".product").attr("data-buyId");
                    var countType = $(".product").attr("data-countType");

                    if (countType == undefined)
                        countType = 0;

                    //商品数量(家具的商品数量需要修改)
                    var num = $(".product").attr("data-num");
                    if (num == undefined)
                        num = 1;

                    var acc = $(".product").attr("data-acc");
                    if (acc == undefined)
                        acc = "";
                    $.ajax({
                        url: 'Ajax/AddToCartHanlder.ashx',
                        data: { pid: buyId, cityId: cityId, countType: countType, num: num, acc: acc },
                        type: 'post',
                        async: false,
                        success: function (data) {
                            if (type == 0) {
                                if (data > 0) {
                                    // alert("加入购物车成功。");
                                    location.href = "/shoppingcart.aspx";
                                }
                                else {
                                    alert("加入购物车失败，请重试。");
                                }
                            }
                            else {
                                if (data > 0) {
                                    location.href = "/checkout.aspx";
                                }
                                else {
                                    alert("立即购买失败，请重试。");
                                }
                            }
                        }
                    });
                }
            }
            else {
                alert("商品价格数据获取不正确,请重新选择。");
            }
        }
        else {
            alert("只有同意了创业伞的协议才能继续购买操作。");
        }
    },
    InitComment: function () {
        $.ajax({
            url: 'Ajax/CommentHandler.ashx',
            data: { pid: productId },
            type: 'post',
            async: false,
            success: function (data) {
                var d = eval(data);

                for (var i = 0; i < d.length; i++) {

                    html = "<tr><td><p>" + d[i].CommentDate + "</p><p>" + d[i].CommentContent + "</p></td><td><p>" + d[i].userName + "</p></td></tr>";
                    $(".charge>.container table>tbody").append(html);
                }
            }
        });

    },
    BrowseHistory: function () {
        var url = location.href;
        var title = encodeURI($(document).attr("title"));
        $.ajax({
            url: 'Ajax/BrowseHistoryHandler.ashx',
            data: { pi: productId, pu: url, pt: title },
            type: 'post',
            async: false
        });
    },
    GetCarvedChapter: function () {
        $.ajax({
            url: 'Ajax/ProductHandler.ashx',
            data: { type: 1, id: productId },
            type: 'post',
            async: false,
            success: function (data) {
                CarvedChapterData = data;
            }
        });
    },
    GetRecommentSetData: function () {
        SetData = null;
        //        $.ajax({
        //            url: 'Ajax/RecommentSetHandler.ashx',
        //            data: { id: productId, t: 1 },
        //            type: 'post',
        //            async: false,
        //            success: function (data) {
        //                SetData = data;
        //                var d = eval(SetData);
        //                for (var i = 0; i < d.length; i++) {
        //                    if (i == 0) {

        //                    }
        //                    else {
        //                        $("#right").append(" <a href=\"" + d[i].Url + "\">" + d[i].SetName + "</a>");

        //                    }
        //                }
        //            }
        //    });
    },
    //设置某一个城市切换时所有价格产品数据
    GetCityProduct: function (pid) {
        //honey 修改2016.06.24
        var cityId = $("#itemLocation").attr("data-id");
        $.ajax({
            url: 'Ajax/GetProductCityDetailHandlerV1.ashx',
            data: { id: pid, cityId: cityId},
            type: 'post',
            async: false,
            success: function (data) {
                cityProductData = data;
            }
        });
    },
    SetLinkQQ: function () {
        $.ajax({
            url: 'Ajax/GetProductLinkWay.ashx',
            data: { pid: productId },
            type: 'post',
            async: false,
            success: function (data) {
                if (data != "") {
                    var href = $("#qq").attr("href");
                    href = href.replace("2881099861", data);
                    $("#qq").attr("href", href);
                }
            }
        });
    },
    CityAreaChangeInit: function (obj) {
        var _areaName = $(obj).children().html();
        $(".shore-list-tit>li>span").eq(1).html(_areaName);
        var _cityName = $(".pull-left.js-tab-title-address.select>span").html();
        $("#itemLocation").html(_cityName + "&nbsp;-&nbsp;" + _areaName);
        $("#data-tab-3").hide();
        var areaId = $(obj).children().attr("data-id");
        $("#itemLocation").attr("data-id", areaId);
    }
}

$(document).ready(function () {
    //初始化当前定位城市的数据
    //    var c = $.cookie("ip");
    //    if (c != undefined) {
    //        var _data = c.split("&");
    //        if (_data.length > 1) {
    //            _data = _data.sort();
    //            //honey 修改 2016-06.24 data[0] 修改成data[3]
    //            var _ownid = _data[5].replace("ownid=", "");
    //            var _cityName = _data[0].replace("city=", "");
    //            var _countyId = _data[3].replace("county_id=", "");
    //            var _countyName = _data[2].replace("county_Name=", "")
    //            $(".shore-list-tit>li>span").eq(0).html(_cityName);
    //            //$("#itemLocation").html(_cityName + "&nbsp;-&nbsp;请选择");
    //            $("#itemLocation").html(_cityName + "&nbsp;-&nbsp;" + _countyName);
    //            //honey 修改 2016-06.24
    //            $("#itemLocation").attr("data-id", _ownid);
    //        }
    //    }


    /*处理城市下拉效果*/
    $(document).on("click", "#div_city>.shore-hotarea>.shore-list-tag,.shore-firstarea>.shore-list-tag", function () {
        $(".js-tab-body-address").eq(0).hide();
        $(".js-tab-body-address").eq(1).show();
        var _cityName = $(this).children().html().trim();
        $(".shore-list-tit>li>span").eq(0).html(_cityName);
        var _cityId = $(this).children().attr("data-id");
        $("#itemLocation").html(_cityName);
        $("#itemLocation").attr("data-id", _cityId);
        cityProductPrice.initCity();
    });

    $(".shore-list-tit>li").eq(0).bind("click", function () { $(".js-tab-body-address").eq(0).show(); $(".js-tab-body-address").eq(1).hide(); $(".shore-list-tit>li>span").eq(1).html("请选择") });
    /* $("#itemLocation").bind("click", function () { $("#data-tab-3").show(); $(".js-tab-body-address").eq(0).show(); });*/
    $("#data-tab-3>.shore-close").bind("click", function () { $("#data-tab-3").hide(); })
});