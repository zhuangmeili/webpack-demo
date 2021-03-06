/**
 * Created by Administrator zhuang on 2017/05/20.
 * 现在定义如下：
 *  750px设计稿的话
 *      1rem===40px
 *  375 设计稿的花
 *      1rem===20px
 * px转换rem 的网址
 *    http://alurk.com/
 *    设计稿宽度  750     基础字体值  20px  选中 不处理border
 *
 */
/*
 参数说明：
 i指的是像素比；b指的是屏幕宽度
 */
! function (a, b) {
  function c() {
    var b = f.getBoundingClientRect().width;
    //b / i > 540 && (b = 540 * i);//flex 2016-12-06注释掉
    var c = 40*(b /750);
    f.style.fontSize = c + "px", k.rem = a.rem = c
  }
  var d, e = a.document,
    f = e.documentElement,
    g = e.querySelector('meta[name="viewport"]'),
    h = e.querySelector('meta[name="flexible"]'),
    i = 0,
    j = 0,
    k = b.flexible || (b.flexible = {});
  if (g) {
    console.warn("将根据已有的meta标签来设置缩放比例");
    var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
    l && (j = parseFloat(l[1]), i = parseInt(1 / j))
  } else if (h) {
    var m = h.getAttribute("content");
    if (m) {
      var n = m.match(/initial\-dpr=([\d\.]+)/),
        o = m.match(/maximum\-dpr=([\d\.]+)/);
      n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
    }
  }
  if (!i && !j) {
    var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
      q = a.devicePixelRatio;
    i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
  }
  if (f.setAttribute("data-dpr", i), !g)
    if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
    else {
      var r = e.createElement("div");
      r.appendChild(g), e.write(r.innerHTML)
    }
  a.addEventListener("resize", function () {
    clearTimeout(d), d = setTimeout(c, 300)
  }, !1), a.addEventListener("pageshow", function (a) {
    a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
  }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
    e.body.style.fontSize = 12 * i + "px"
  }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
    var b = parseFloat(a) * this.rem;
    return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
  }, k.px2rem = function (a) {
    var b = parseFloat(a) / this.rem;
    return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
  }
}(window, window.lib || (window.lib = {}));
