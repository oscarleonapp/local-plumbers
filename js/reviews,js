/*
 hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (a) {
  return { next: $jscomp.arrayIteratorImpl(a) };
};
$jscomp.makeIterator = function (a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.arrayFromIterator = function (a) {
  for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
  return c;
};
$jscomp.arrayFromIterable = function (a) {
  return a instanceof Array
    ? a
    : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
      };
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a
    ? a
    : "undefined" != typeof global && null != global
    ? global
    : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, b, c, d) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
      var f = a[d];
      f in c || (c[f] = {});
      c = c[f];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d &&
      null != b &&
      $jscomp.defineProperty(c, a, {
        configurable: !0,
        writable: !0,
        value: b,
      });
  }
};
$jscomp.polyfill(
  "Math.sign",
  function (a) {
    return a
      ? a
      : function (a) {
          a = Number(a);
          return 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1;
        };
  },
  "es6",
  "es3"
);
(function (a, b) {
  "function" === typeof define && define.amd
    ? define(b)
    : "object" === typeof exports
    ? (module.exports = b())
    : (a.Blazy = b());
})(this, function () {
  function a(a) {
    var c = a._util;
    c.elements = e(a.options);
    c.count = c.elements.length;
    c.destroyed &&
      ((c.destroyed = !1),
      a.options.container &&
        r(a.options.container, function (a) {
          t(a, "scroll", c.validateT);
        }),
      t(window, "resize", c.saveViewportOffsetT),
      t(window, "resize", c.validateT),
      t(window, "scroll", c.validateT));
    b(a);
  }
  function b(a) {
    for (var b = a._util, g = 0; g < b.count; g++) {
      var d = b.elements[g];
      var e = d;
      var m = a.options;
      var f = e.getBoundingClientRect();
      m.container && w && (e = e.closest(m.containerClass))
        ? ((e = e.getBoundingClientRect()),
          (m = c(e, u)
            ? c(f, {
                top: e.top - m.offset,
                right: e.right + m.offset,
                bottom: e.bottom + m.offset,
                left: e.left - m.offset,
              })
            : !1))
        : (m = c(f, u));
      if (m || n(d, a.options.successClass))
        a.load(d), b.elements.splice(g, 1), b.count--, g--;
    }
    0 === b.count && a.destroy();
  }
  function c(a, b) {
    return (
      a.right >= b.left &&
      a.bottom >= b.top &&
      a.left <= b.right &&
      a.top <= b.bottom
    );
  }
  function d(a, b, c) {
    if (
      !n(a, c.successClass) &&
      (b || c.loadInvisible || (0 < a.offsetWidth && 0 < a.offsetHeight))
    )
      if ((b = a.getAttribute(y) || a.getAttribute(c.src))) {
        b = b.split(c.separator);
        var g = b[z && 1 < b.length ? 1 : 0],
          k = a.getAttribute(c.srcset),
          d = "img" === a.nodeName.toLowerCase(),
          e = (b = a.parentNode) && "picture" === b.nodeName.toLowerCase();
        if (d || void 0 === a.src) {
          var m = new Image(),
            v = function () {
              c.error && c.error(a, "invalid");
              h(a, c.errorClass);
              p(m, "error", v);
              p(m, "load", q);
            },
            q = function () {
              d
                ? e || l(a, g, k)
                : (a.style.backgroundImage = 'url("' + g + '")');
              f(a, c);
              p(m, "load", q);
              p(m, "error", v);
            };
          e &&
            ((m = a),
            r(b.getElementsByTagName("source"), function (a) {
              var b = c.srcset,
                g = a.getAttribute(b);
              g && (a.setAttribute("srcset", g), a.removeAttribute(b));
            }));
          t(m, "error", v);
          t(m, "load", q);
          l(m, g, k);
        } else (a.src = g), f(a, c);
      } else
        "video" === a.nodeName.toLowerCase()
          ? (r(a.getElementsByTagName("source"), function (a) {
              var b = c.src,
                g = a.getAttribute(b);
              g && (a.setAttribute("src", g), a.removeAttribute(b));
            }),
            a.load(),
            f(a, c))
          : (c.error && c.error(a, "missing"), h(a, c.errorClass));
  }
  function f(a, b) {
    h(a, b.successClass);
    b.success && b.success(a);
    a.removeAttribute(b.src);
    a.removeAttribute(b.srcset);
    r(b.breakpoints, function (b) {
      a.removeAttribute(b.src);
    });
  }
  function l(a, b, c) {
    c && a.setAttribute("srcset", c);
    a.src = b;
  }
  function n(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function h(a, b) {
    n(a, b) || (a.className += " " + b);
  }
  function e(a) {
    var b = [];
    a = a.root.querySelectorAll(a.selector);
    for (var c = a.length; c--; b.unshift(a[c]));
    return b;
  }
  function q(a) {
    u.bottom =
      (window.innerHeight || document.documentElement.clientHeight) + a;
    u.right = (window.innerWidth || document.documentElement.clientWidth) + a;
  }
  function t(a, b, c) {
    a.attachEvent
      ? a.attachEvent && a.attachEvent("on" + b, c)
      : a.addEventListener(b, c, { capture: !1, passive: !0 });
  }
  function p(a, b, c) {
    a.detachEvent
      ? a.detachEvent && a.detachEvent("on" + b, c)
      : a.removeEventListener(b, c, { capture: !1, passive: !0 });
  }
  function r(a, b) {
    if (a && b) for (var c = a.length, k = 0; k < c && !1 !== b(a[k], k); k++);
  }
  function v(a, b, c) {
    var g = 0;
    return function () {
      var k = +new Date();
      k - g < b || ((g = k), a.apply(c, arguments));
    };
  }
  var y, u, z, w;
  return function (c) {
    if (!document.querySelectorAll) {
      var k = document.createStyleSheet();
      document.querySelectorAll = function (a, b, c, g, d) {
        d = document.all;
        b = [];
        a = a.replace(/\[for\b/gi, "[htmlFor").split(",");
        for (c = a.length; c--; ) {
          k.addRule(a[c], "k:v");
          for (g = d.length; g--; ) d[g].currentStyle.k && b.push(d[g]);
          k.removeRule(0);
        }
        return b;
      };
    }
    var g = this,
      e = (g._util = {});
    e.elements = [];
    e.destroyed = !0;
    g.options = c || {};
    g.options.error = g.options.error || !1;
    g.options.offset = g.options.offset || 100;
    g.options.root = g.options.root || document;
    g.options.success = g.options.success || !1;
    g.options.selector = g.options.selector || ".b-lazy";
    g.options.separator = g.options.separator || "|";
    g.options.containerClass = g.options.container;
    g.options.container = g.options.containerClass
      ? document.querySelectorAll(g.options.containerClass)
      : !1;
    g.options.errorClass = g.options.errorClass || "b-error";
    g.options.breakpoints = g.options.breakpoints || !1;
    g.options.loadInvisible = g.options.loadInvisible || !1;
    g.options.successClass = g.options.successClass || "b-loaded";
    g.options.validateDelay = g.options.validateDelay || 25;
    g.options.saveViewportOffsetDelay = g.options.saveViewportOffsetDelay || 50;
    g.options.srcset = g.options.srcset || "data-srcset";
    g.options.src = y = g.options.src || "data-src";
    w = Element.prototype.closest;
    z = 1 < window.devicePixelRatio;
    u = {};
    u.top = 0 - g.options.offset;
    u.left = 0 - g.options.offset;
    g.revalidate = function () {
      a(g);
    };
    g.load = function (a, b) {
      var c = this.options;
      void 0 === a.length
        ? d(a, b, c)
        : r(a, function (a) {
            d(a, b, c);
          });
    };
    g.destroy = function () {
      var a = this._util;
      this.options.container &&
        r(this.options.container, function (b) {
          p(b, "scroll", a.validateT);
        });
      p(window, "scroll", a.validateT);
      p(window, "resize", a.validateT);
      p(window, "resize", a.saveViewportOffsetT);
      a.count = 0;
      a.elements.length = 0;
      a.destroyed = !0;
    };
    e.validateT = v(
      function () {
        b(g);
      },
      g.options.validateDelay,
      g
    );
    e.saveViewportOffsetT = v(
      function () {
        q(g.options.offset);
      },
      g.options.saveViewportOffsetDelay,
      g
    );
    q(g.options.offset);
    r(g.options.breakpoints, function (a) {
      if (a.width >= window.screen.width) return (y = a.src), !1;
    });
    setTimeout(function () {
      a(g);
    });
  };
});
var WPacTime = WPacTime || {
  getTime: function (a, b, c) {
    return "chat" == c
      ? this.getChatTime(a, b || "en")
      : c
      ? this.getFormatTime(a, c, b || "en")
      : this.getDefaultTime(a, b || "en");
  },
  getChatTime: function (a, b) {
    var c = (new Date().getTime() - a) / 1e3 / 60 / 60,
      d = c / 24;
    return 24 > c
      ? this.getFormatTime(a, "HH:mm", b)
      : 365 > d
      ? this.getFormatTime(a, "dd.MM HH:mm", b)
      : this.getFormatTime(a, "yyyy.MM.dd HH:mm", b);
  },
  getDefaultTime: function (a, b) {
    return this.getTimeAgo(a, b);
  },
  getTimeAgo: function (a, b) {
    a = (new Date().getTime() - a) / 1e3;
    var c = a / 60,
      d = c / 60,
      f = d / 24,
      l = f / 365;
    b = WPacTime.Messages[b] ? b : "en";
    return 45 > a
      ? WPacTime.Messages[b].second
      : 90 > a
      ? WPacTime.Messages[b].minute
      : 45 > c
      ? WPacTime.Messages[b].minutes(c)
      : 90 > c
      ? WPacTime.Messages[b].hour
      : 24 > d
      ? WPacTime.Messages[b].hours(d)
      : 48 > d
      ? WPacTime.Messages[b].day
      : 30 > f
      ? WPacTime.Messages[b].days(f)
      : 60 > f
      ? WPacTime.Messages[b].month
      : 365 > f
      ? WPacTime.Messages[b].months(f)
      : 2 > l
      ? WPacTime.Messages[b].year
      : WPacTime.Messages[b].years(l);
  },
  getTime12: function (a, b) {
    a = new Date(a);
    return (
      (a.getHours() % 12 ? a.getHours() % 12 : 12) +
      ":" +
      a.getMinutes() +
      (12 <= a.getHours() ? " PM" : " AM")
    );
  },
  getFormatTime: function (a, b, c) {
    var d = new Date(a),
      f = {
        SS: d.getMilliseconds(),
        ss: d.getSeconds(),
        mm: d.getMinutes(),
        HH: d.getHours(),
        hh:
          (d.getHours() % 12 ? d.getHours() % 12 : 12) +
          (12 <= d.getHours() ? "PM" : "AM"),
        dd: d.getDate(),
        MM: d.getMonth() + 1,
        yyyy: d.getFullYear(),
        yy: String(d.getFullYear()).toString().substr(2, 2),
        ago: this.getTimeAgo(a, c),
        12: this.getTime12(a, c),
      };
    return b.replace(
      /(SS|ss|mm|HH|hh|DD|dd|MM|yyyy|yy|ago|12)/g,
      function (a, b) {
        a = f[b];
        return 10 > a ? "0" + a : a;
      }
    );
  },
  declineNum: function (a, b, c, d) {
    return a + " " + this.declineMsg(a, b, c, d);
  },
  declineMsg: function (a, b, c, d, f) {
    var l = a % 10;
    return 1 == l && (1 == a || 20 < a)
      ? b
      : 1 < l && 5 > l && (20 < a || 10 > a)
      ? c
      : a
      ? d
      : f;
  },
};
WPacTime.Messages = {
  ru: {
    second: "\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e",
    minute:
      "\u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u043c\u0438\u043d\u0443\u0442\u0430 \u043d\u0430\u0437\u0430\u0434",
        "\u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434",
        "\u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"
      );
    },
    hour: "\u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434",
        "\u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434",
        "\u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434"
      );
    },
    day: "\u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434",
        "\u0434\u043d\u044f \u043d\u0430\u0437\u0430\u0434",
        "\u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434"
      );
    },
    month: "\u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "\u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434",
        "\u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434",
        "\u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434"
      );
    },
    year: "\u0433\u043e\u0434 \u043d\u0430\u0437\u0430\u0434",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0433\u043e\u0434 \u043d\u0430\u0437\u0430\u0434",
        "\u0433\u043e\u0434\u0430 \u043d\u0430\u0437\u0430\u0434",
        "\u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434"
      );
    },
  },
  en: {
    second: "just now",
    minute: "1m ago",
    minutes: function (a) {
      return Math.round(a) + "m ago";
    },
    hour: "1h ago",
    hours: function (a) {
      return Math.round(a) + "h ago";
    },
    day: "a day ago",
    days: function (a) {
      return Math.round(a) + " days ago";
    },
    month: "a month ago",
    months: function (a) {
      return Math.floor(a / 30) + " months ago";
    },
    year: "a year ago",
    years: function (a) {
      return Math.round(a) + " years ago";
    },
  },
  uk: {
    second: "\u0442\u0456\u043b\u044c\u043a\u0438 \u0449\u043e",
    minute:
      "\u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",
        "\u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",
        "\u0445\u0432\u0438\u043b\u0438\u043d \u0442\u043e\u043c\u0443"
      );
    },
    hour: "\u0433\u043e\u0434\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0433\u043e\u0434\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",
        "\u0433\u043e\u0434\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",
        "\u0433\u043e\u0434\u0438\u043d \u0442\u043e\u043c\u0443"
      );
    },
    day: "\u0434\u0435\u043d\u044c \u0442\u043e\u043c\u0443",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0434\u0435\u043d\u044c \u0442\u043e\u043c\u0443",
        "\u0434\u043d\u0456 \u0442\u043e\u043c\u0443",
        "\u0434\u043d\u0456\u0432 \u0442\u043e\u043c\u0443"
      );
    },
    month: "\u043c\u0456\u0441\u044f\u0446\u044c \u0442\u043e\u043c\u0443",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "\u043c\u0456\u0441\u044f\u0446\u044c \u0442\u043e\u043c\u0443",
        "\u043c\u0456\u0441\u044f\u0446\u0456 \u0442\u043e\u043c\u0443",
        "\u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0442\u043e\u043c\u0443"
      );
    },
    year: "\u0440\u0456\u043a \u0442\u043e\u043c\u0443",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0440\u0456\u043a \u0442\u043e\u043c\u0443",
        "\u0440\u043e\u043a\u0438 \u0442\u043e\u043c\u0443",
        "\u0440\u043e\u043a\u0456\u0432 \u0442\u043e\u043c\u0443"
      );
    },
  },
  ro: {
    second: "chiar acum",
    minute: "\u00een urm\u0103 minut",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "o minuta in urma",
        "minute in urma",
        "de minute in urma"
      );
    },
    hour: "acum o ora",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "acum o ora",
        "ore in urma",
        "de ore in urma"
      );
    },
    day: "o zi in urma",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "o zi in urma",
        "zile in urma",
        "de zile in urma"
      );
    },
    month: "o luna in urma",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "o luna in urma",
        "luni in urma",
        "de luni in urma"
      );
    },
    year: "un an in urma",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "un an in urma",
        "ani in urma",
        "de ani in urma"
      );
    },
  },
  lv: {
    second: "Maz\u0101k par min\u016bti",
    minute: "Pirms min\u016btes",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "pirms min\u016btes",
        "pirms min\u016bt\u0113m",
        "pirms min\u016bt\u0113m"
      );
    },
    hour: "pirms stundas",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "pirms stundas",
        "pirms stund\u0101m",
        "pirms stund\u0101m"
      );
    },
    day: "pirms dienas",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "pirms dienas",
        "pirms dien\u0101m",
        "pirms dien\u0101m"
      );
    },
    month: "pirms m\u0113ne\u0161a",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "pirms m\u0113ne\u0161a",
        "pirms m\u0113ne\u0161iem",
        "pirms m\u0113ne\u0161iem"
      );
    },
    year: "pirms gada",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "pirms gada",
        "pirms gadiem",
        "pirms gadiem"
      );
    },
  },
  lt: {
    second: "k\u0105 tik",
    minute: "prie\u0161 minut\u0119",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "minut\u0117 prie\u0161",
        "minut\u0117s prie\u0161",
        "minu\u010di\u0173 prie\u0161"
      );
    },
    hour: "prie\u0161 valand\u0105",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "valanda prie\u0161",
        "valandos prie\u0161",
        "valand\u0173 prie\u0161"
      );
    },
    day: "prie\u0161 dien\u0105",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "diena prie\u0161",
        "dienos prie\u0161",
        "dien\u0173 prie\u0161"
      );
    },
    month: "prie\u0161 m\u0117nes\u012f",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "m\u0117nes\u012f prie\u0161",
        "m\u0117nesiai prie\u0161",
        "m\u0117nesi\u0173 prie\u0161"
      );
    },
    year: "prie\u0161 metus",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "metai prie\u0161",
        "metai prie\u0161",
        "met\u0173 prie\u0161"
      );
    },
  },
  kk: {
    second:
      "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437 \u0443\u0430\u049b\u044b\u0442 \u0431\u04b1\u0440\u044b\u043d",
    minute:
      "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",
        "\u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",
        "\u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d"
      );
    },
    hour: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d",
        "\u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d",
        "\u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d"
      );
    },
    day: "\u0431\u0456\u0440 \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",
        "\u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",
        "\u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d"
      );
    },
    month: "\u0431\u0456\u0440 \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "\u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",
        "\u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",
        "\u0430\u0439 \u0431\u04b1\u0440\u044b\u043d"
      );
    },
    year: "\u0431\u0456\u0440 \u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d",
        "\u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d",
        "\u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d"
      );
    },
  },
  ka: {
    second: "\u10ec\u10d0\u10db\u10d8\u10e1 \u10ec\u10d8\u10dc",
    minute: "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10ec\u10e3\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc"
      );
    },
    hour: "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10e1\u10d0\u10d0\u10d7\u10d8\u10e1 \u10ec\u10d8\u10dc"
      );
    },
    day: "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10d3\u10e6\u10d8\u10e1 \u10ec\u10d8\u10dc"
      );
    },
    month: "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10d7\u10d5\u10d8\u10e1 \u10ec\u10d8\u10dc"
      );
    },
    year: "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc",
        "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc"
      );
    },
  },
  hy: {
    second:
      "\u0574\u056b \u0584\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576 \u0561\u057c\u0561\u057b",
    minute:
      "\u0574\u0565\u056f \u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b",
        "\u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b",
        "\u0580\u0578\u057a\u0565 \u0561\u057c\u0561\u057b"
      );
    },
    hour: "\u0574\u0565\u056f \u056a\u0561\u0574 \u0561\u057c\u0561\u057b",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u056a\u0561\u0574 \u0561\u057c\u0561\u057b",
        "\u056a\u0561\u0574 \u0561\u057c\u0561\u057b",
        "\u056a\u0561\u0574 \u0561\u057c\u0561\u057b"
      );
    },
    day: "\u0574\u0565\u056f \u0585\u0580 \u0561\u057c\u0561\u057b",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0585\u0580 \u0561\u057c\u0561\u057b",
        "\u0585\u0580 \u0561\u057c\u0561\u057b",
        "\u0585\u0580 \u0561\u057c\u0561\u057b"
      );
    },
    month:
      "\u0574\u0565\u056f \u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "\u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b",
        "\u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b",
        "\u0561\u0574\u056b\u057d \u0561\u057c\u0561\u057b"
      );
    },
    year: "\u0574\u0565\u056f \u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b",
        "\u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b",
        "\u057f\u0561\u0580\u056b \u0561\u057c\u0561\u057b"
      );
    },
  },
  fr: {
    second: "tout \u00e0 l'heure",
    minute: "environ une minute",
    minutes: function (a) {
      return Math.round(a) + " minutes";
    },
    hour: "environ une heure",
    hours: function (a) {
      return "environ " + Math.round(a) + " heures";
    },
    day: "un jour",
    days: function (a) {
      return Math.round(a) + " jours";
    },
    month: "environ un mois",
    months: function (a) {
      return Math.floor(a / 30) + " mois";
    },
    year: "environ un an",
    years: function (a) {
      return Math.round(a) + " ans";
    },
  },
  es: {
    second: "ahora",
    minute: "hace un minuto",
    minutes: function (a) {
      return "hace " + Math.round(a) + " minuts";
    },
    hour: "hace una hora",
    hours: function (a) {
      return "hace " + Math.round(a) + " horas";
    },
    day: "hace un dia",
    days: function (a) {
      return "hace " + Math.round(a) + " d\u00edas";
    },
    month: "hace un mes",
    months: function (a) {
      return "hace " + Math.floor(a / 30) + " meses";
    },
    year: "hace a\u00f1os",
    years: function (a) {
      return "hace " + Math.round(a) + " a\u00f1os";
    },
  },
  el: {
    second:
      "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
    minute:
      "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03bf \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
    minutes: function (a) {
      return Math.round(a) + " minutes";
    },
    hour: "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03b7\u03bd \u03bc\u03b9\u03b1 \u03ce\u03c1\u03b1",
    hours: function (a) {
      return "about " + Math.round(a) + " hours";
    },
    day: "\u03bc\u03b9\u03b1 \u03bc\u03ad\u03c1\u03b1",
    days: function (a) {
      return Math.round(a) + " days";
    },
    month:
      "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
    months: function (a) {
      return Math.floor(a / 30) + " months";
    },
    year: "\u03b3\u03cd\u03c1\u03c9 \u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
    years: function (a) {
      return Math.round(a) + " years";
    },
  },
  de: {
    second: "soeben",
    minute: "vor einer Minute",
    minutes: function (a) {
      return "vor " + Math.round(a) + " Minuten";
    },
    hour: "vor einer Stunde",
    hours: function (a) {
      return "vor " + Math.round(a) + " Stunden";
    },
    day: "vor einem Tag",
    days: function (a) {
      return "vor " + Math.round(a) + " Tagen";
    },
    month: "vor einem Monat",
    months: function (a) {
      return "vor " + Math.floor(a / 30) + " Monaten";
    },
    year: "vor einem Jahr",
    years: function (a) {
      return "vor " + Math.round(a) + " Jahren";
    },
  },
  be: {
    second:
      "\u043c\u0435\u043d\u0448 \u0437\u0430 \u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
    minute:
      "\u0445\u0432\u0456\u043b\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0445\u0432\u0456\u043b\u0456\u043d\u0430 \u0442\u0430\u043c\u0443",
        "\u0445\u0432\u0456\u043b\u0456\u043d\u044b \u0442\u0430\u043c\u0443",
        "\u0445\u0432\u0456\u043b\u0456\u043d \u0442\u0430\u043c\u0443"
      );
    },
    hour: "\u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0433\u0430\u0434\u0437\u0456\u043d\u0443 \u0442\u0430\u043c\u0443",
        "\u0433\u0430\u0434\u0437\u0456\u043d\u044b \u0442\u0430\u043c\u0443",
        "\u0433\u0430\u0434\u0437\u0456\u043d \u0442\u0430\u043c\u0443"
      );
    },
    day: "\u0434\u0437\u0435\u043d\u044c \u0442\u0430\u043c\u0443",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0434\u0437\u0435\u043d\u044c \u0442\u0430\u043c\u0443",
        "\u0434\u043d\u0456 \u0442\u0430\u043c\u0443",
        "\u0434\u0437\u0451\u043d \u0442\u0430\u043c\u0443"
      );
    },
    month: "\u043c\u0435\u0441\u044f\u0446 \u0442\u0430\u043c\u0443",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "\u043c\u0435\u0441\u044f\u0446 \u0442\u0430\u043c\u0443",
        "\u043c\u0435\u0441\u044f\u0446\u0430 \u0442\u0430\u043c\u0443",
        "\u043c\u0435\u0441\u044f\u0446\u0430\u045e \u0442\u0430\u043c\u0443"
      );
    },
    year: "\u0433\u043e\u0434 \u0442\u0430\u043c\u0443",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "\u0433\u043e\u0434 \u0442\u0430\u043c\u0443",
        "\u0433\u0430\u0434\u044b \u0442\u0430\u043c\u0443",
        "\u0433\u043e\u0434 \u0442\u0430\u043c\u0443"
      );
    },
  },
  it: {
    second: "proprio ora",
    minute: "un minuto fa",
    minutes: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "un minuto fa",
        "minuti fa",
        "minuti fa"
      );
    },
    hour: "un'ora fa",
    hours: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "un'ora fa",
        "ore fa",
        "ore fa"
      );
    },
    day: "un giorno fa",
    days: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "un giorno fa",
        "giorni fa",
        "giorni fa"
      );
    },
    month: "un mese fa",
    months: function (a) {
      return WPacTime.declineNum(
        Math.floor(a / 30),
        "un mese fa",
        "mesi fa",
        "mesi fa"
      );
    },
    year: "un anno fa",
    years: function (a) {
      return WPacTime.declineNum(
        Math.round(a),
        "un anno fa",
        "anni fa",
        "anni fa"
      );
    },
  },
  tr: {
    second: "az \u00f6nce",
    minute: "dakika \u00f6nce",
    minutes: function (a) {
      return Math.round(a) + " dakika \u00f6nce";
    },
    hour: "saat \u00f6nce",
    hours: function (a) {
      return Math.round(a) + " saat \u00f6nce";
    },
    day: "g\u00fcn \u00f6nce",
    days: function (a) {
      return Math.round(a) + " g\u00fcn \u00f6nce";
    },
    month: "ay \u00f6nce",
    months: function (a) {
      return Math.floor(a / 30) + " ay \u00f6nce";
    },
    year: "y\u0131l \u00f6nce",
    years: function (a) {
      return Math.round(a) + " y\u0131l \u00f6nce";
    },
  },
  nb: {
    second: "n\u00e5 nettopp",
    minute: "ett minutt siden",
    minutes: function (a) {
      return Math.round(a) + " minutter siden";
    },
    hour: "en time siden",
    hours: function (a) {
      return Math.round(a) + " timer siden";
    },
    day: "en dag siden",
    days: function (a) {
      return Math.round(a) + " dager siden";
    },
    month: "en m\u00e5ned siden",
    months: function (a) {
      return Math.floor(a / 30) + " m\u00e5neder siden";
    },
    year: "ett \u00e5r siden",
    years: function (a) {
      return Math.round(a) + " \u00e5r siden";
    },
  },
  da: {
    second: "lige nu",
    minute: "et minut siden",
    minutes: function (a) {
      return Math.round(a) + " minutter siden";
    },
    hour: "en time siden",
    hours: function (a) {
      return Math.round(a) + " timer siden";
    },
    day: "en dag siden",
    days: function (a) {
      return Math.round(a) + " dage siden";
    },
    month: "en m\u00e5ned siden",
    months: function (a) {
      return Math.floor(a / 30) + " m\u00e5neder siden";
    },
    year: "et \u00e5r siden",
    years: function (a) {
      return Math.round(a) + " \u00e5r siden";
    },
  },
  nl: {
    second: "zojuist",
    minute: "minuten geleden",
    minutes: function (a) {
      return Math.round(a) + " minuten geleden";
    },
    hour: "uur geleden",
    hours: function (a) {
      return Math.round(a) + " uur geleden";
    },
    day: "1 dag geleden",
    days: function (a) {
      return Math.round(a) + " dagen geleden";
    },
    month: "maand geleden",
    months: function (a) {
      return Math.floor(a / 30) + " maanden geleden";
    },
    year: "jaar geleden",
    years: function (a) {
      return Math.round(a) + " jaar geleden";
    },
  },
  ca: {
    second: "ara mateix",
    minute: "fa un minut",
    minutes: function (a) {
      return "fa " + Math.round(a) + " minuts";
    },
    hour: "fa una hora",
    hours: function (a) {
      return "fa " + Math.round(a) + " hores";
    },
    day: "fa un dia",
    days: function (a) {
      return "fa " + Math.round(a) + " dies";
    },
    month: "fa un mes",
    months: function (a) {
      return "fa " + Math.floor(a / 30) + " mesos";
    },
    year: "fa un any",
    years: function (a) {
      return "fa " + Math.round(a) + " anys";
    },
  },
  sv: {
    second: "just nu",
    minute: "en minut sedan",
    minutes: function (a) {
      return Math.round(a) + " minuter sedan";
    },
    hour: "en timme sedan",
    hours: function (a) {
      return Math.round(a) + " timmar sedan";
    },
    day: "en dag sedan",
    days: function (a) {
      return Math.round(a) + " dagar sedan";
    },
    month: "en m\u00e5nad sedan",
    months: function (a) {
      return Math.floor(a / 30) + " m\u00e5nader sedan";
    },
    year: "ett \u00e5r sedan",
    years: function (a) {
      return Math.round(a) + " \u00e5r sedan";
    },
  },
  pl: {
    second: "w\u0142a\u015bnie teraz",
    minute: "minut\u0119 temu",
    minutes: function (a) {
      return Math.round(a) + " minut temu";
    },
    hour: "godzin\u0119 temu",
    hours: function (a) {
      return Math.round(a) + " godzin temu";
    },
    day: "wczoraj",
    days: function (a) {
      return Math.round(a) + " dni temu";
    },
    month: "miesi\u0105c temu",
    months: function (a) {
      return Math.floor(a / 30) + " miesi\u0119cy temu";
    },
    year: "rok temu",
    years: function (a) {
      return Math.round(a) + " lat temu";
    },
  },
  pt: {
    second: "agora",
    minute: "1 minuto atr\u00e1s",
    minutes: function (a) {
      return Math.round(a) + " minutos atr\u00e1s";
    },
    hour: "1 hora atr\u00e1s",
    hours: function (a) {
      return Math.round(a) + " horas atr\u00e1s";
    },
    day: "1 dia atr\u00e1s",
    days: function (a) {
      return Math.round(a) + " dias atr\u00e1s";
    },
    month: "1 m\u00eas atr\u00e1s",
    months: function (a) {
      return Math.floor(a / 30) + " meses atr\u00e1s";
    },
    year: "1 ano atr\u00e1s",
    years: function (a) {
      return Math.round(a) + " anos atr\u00e1s";
    },
  },
  hu: {
    second: "\u00e9pp az im\u00e9nt",
    minute: "1 perccel ezel\u0151tt",
    minutes: function (a) {
      return Math.round(a) + " perccel ezel\u0151tt";
    },
    hour: "\u00f3r\u00e1val ezel\u0151tt",
    hours: function (a) {
      return Math.round(a) + " \u00f3r\u00e1val ezel\u0151tt";
    },
    day: "nappal ezel\u0151tt",
    days: function (a) {
      return Math.round(a) + " nappal ezel\u0151tt";
    },
    month: "h\u00f3nappal ezel\u0151tt",
    months: function (a) {
      return Math.floor(a / 30) + " h\u00f3nappal ezel\u0151tt";
    },
    year: "\u00e9vvel ezel\u0151tt",
    years: function (a) {
      return Math.round(a) + " \u00e9vvel ezel\u0151tt";
    },
  },
  fi: {
    second: "juuri nyt",
    minute: "minuutti sitten",
    minutes: function (a) {
      return Math.round(a) + " minuuttia sitten";
    },
    hour: "tunti sitten",
    hours: function (a) {
      return Math.round(a) + " tuntia sitten";
    },
    day: "p\u00e4iv\u00e4 sitten",
    days: function (a) {
      return Math.round(a) + " p\u00e4iv\u00e4\u00e4 sitten";
    },
    month: "kuukausi sitten",
    months: function (a) {
      return Math.floor(a / 30) + " kuukautta sitten";
    },
    year: "vuosi sitten",
    years: function (a) {
      return Math.round(a) + " vuotta sitten";
    },
  },
  he: {
    second: "\u05d4\u05e8\u05d2\u05e2",
    minute: "\u05dc\u05e4\u05e0\u05d9 \u05d3\u05e7\u05d4",
    minutes: function (a) {
      return (
        "\u05dc\u05e4\u05e0\u05d9 " +
        Math.round(a) +
        " \u05d3\u05e7\u05d5\u05ea"
      );
    },
    hour: "\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05d4",
    hours: function (a) {
      return (
        "\u05dc\u05e4\u05e0\u05d9 " +
        Math.round(a) +
        " \u05e9\u05e2\u05d5\u05ea"
      );
    },
    day: "\u05dc\u05e4\u05e0\u05d9 \u05d9\u05d5\u05dd",
    days: function (a) {
      return (
        "\u05dc\u05e4\u05e0\u05d9 " +
        Math.round(a) +
        " \u05d9\u05de\u05d9\u05dd"
      );
    },
    month: "\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9",
    months: function (a) {
      return 2 == Math.floor(a / 30)
        ? "\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd"
        : "\u05dc\u05e4\u05e0\u05d9 " +
            Math.floor(a / 30) +
            " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd";
    },
    year: "\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e0\u05d4",
    years: function (a) {
      return (
        "\u05dc\u05e4\u05e0\u05d9 " +
        Math.round(a) +
        " \u05e9\u05e0\u05d9\u05dd"
      );
    },
  },
  bg: {
    second: "\u0432 \u043c\u043e\u043c\u0435\u043d\u0442\u0430",
    minute:
      "\u043f\u0440\u0435\u0434\u0438 1 \u043c\u0438\u043d\u0443\u0442\u0430",
    minutes: function (a) {
      return (
        "\u043f\u0440\u0435\u0434\u0438 " +
        Math.round(a) +
        " \u043c\u0438\u043d\u0443\u0442\u0438"
      );
    },
    hour: "\u043f\u0440\u0435\u0434\u0438 1 \u0447\u0430\u0441",
    hours: function (a) {
      return (
        "\u043f\u0440\u0435\u0434\u0438 " +
        Math.round(a) +
        " \u0447\u0430\u0441\u0430"
      );
    },
    day: "\u043f\u0440\u0435\u0434\u0438 1 \u0434\u0435\u043d",
    days: function (a) {
      return (
        "\u043f\u0440\u0435\u0434\u0438 " +
        Math.round(a) +
        " \u0434\u043d\u0438"
      );
    },
    month: "\u043f\u0440\u0435\u0434\u0438 1 \u043c\u0435\u0441\u0435\u0446",
    months: function (a) {
      return (
        "\u043f\u0440\u0435\u0434\u0438 " +
        Math.floor(a / 30) +
        " \u043c\u0435\u0441\u0435\u0446\u0430"
      );
    },
    year: "\u043f\u0440\u0435\u0434\u0438 1 \u0433\u043e\u0434\u0438\u043d\u0430",
    years: function (a) {
      return (
        "\u043f\u0440\u0435\u0434\u0438 " +
        Math.round(a) +
        " \u0433\u043e\u0434\u0438\u043d\u0438"
      );
    },
  },
  sk: {
    second: "pr\u00e1ve teraz",
    minute: "pred min\u00fatov",
    minutes: function (a) {
      return "pred " + Math.round(a) + " min\u00fatami";
    },
    hour: "pred hodinou",
    hours: function (a) {
      return "pred " + Math.round(a) + " hodinami";
    },
    day: "v\u010dera",
    days: function (a) {
      return "pred " + Math.round(a) + " d\u0148ami";
    },
    month: "pred mesiacom",
    months: function (a) {
      return "pred " + Math.floor(a / 30) + " mesiacmi";
    },
    year: "pred rokom",
    years: function (a) {
      return "pred " + Math.round(a) + " rokmi";
    },
  },
  lo: {
    second: "\u0ea7\u0eb1\u0ec8\u0e87\u0e81\u0eb5\u0ec9\u0e99\u0eb5\u0ec9",
    minute:
      "\u0edc\u0eb6\u0ec8\u0e87\u0e99\u0eb2\u0e97\u0eb5\u0e81\u0ec8\u0ead\u0e99",
    minutes: function (a) {
      return (
        Math.round(a) + " \u0e99\u0eb2\u0e97\u0eb5\u0e81\u0ec8\u0ead\u0e99"
      );
    },
    hour: "\u0edc\u0eb6\u0ec8\u0e87\u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87\u0e81\u0ec8\u0ead\u0e99",
    hours: function (a) {
      return (
        Math.round(a) +
        " \u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87\u0e81\u0ec8\u0ead\u0e99"
      );
    },
    day: "\u0edc\u0eb6\u0ec8\u0e87\u0ea1\u0eb7\u0ec9\u0e81\u0ec8\u0ead\u0e99",
    days: function (a) {
      return Math.round(a) + " \u0ea1\u0eb7\u0ec9\u0e81\u0ec8\u0ead\u0e99";
    },
    month:
      "\u0edc\u0eb6\u0ec8\u0e87\u0ec0\u0e94\u0eb7\u0ead\u0e99\u0e81\u0ec8\u0ead\u0e99",
    months: function (a) {
      return (
        Math.floor(a / 30) +
        " \u0ec0\u0e94\u0eb7\u0ead\u0e99\u0e81\u0ec8\u0ead\u0e99"
      );
    },
    year: "\u0edc\u0eb6\u0ec8\u0e87\u0e9b\u0eb5\u0e81\u0ec8\u0ead\u0e99",
    years: function (a) {
      return Math.round(a) + " \u0e9b\u0eb5\u0e81\u0ec8\u0ead\u0e99";
    },
  },
  sl: {
    second: "pravkar",
    minute: "pred eno minuto",
    minutes: function (a) {
      return "pred " + Math.round(a) + " minutami";
    },
    hour: "pred eno uro",
    hours: function (a) {
      return "pred " + Math.round(a) + " urami";
    },
    day: "pred enim dnem",
    days: function (a) {
      return "pred " + Math.round(a) + " dnevi";
    },
    month: "pred enim mesecem",
    months: function (a) {
      return "pred " + Math.floor(a / 30) + " meseci";
    },
    year: "pred enim letom",
    years: function (a) {
      return "pred " + Math.round(a) + " leti";
    },
  },
  et: {
    second: "just n\u00fc\u00fcd",
    minute: "minut tagasi",
    minutes: function (a) {
      return Math.round(a) + " minutit tagasi";
    },
    hour: "tund tagasi",
    hours: function (a) {
      return Math.round(a) + " tundi tagasi";
    },
    day: "p\u00e4ev tagasi",
    days: function (a) {
      return Math.round(a) + " p\u00e4eva tagasi";
    },
    month: "kuu aega tagasi",
    months: function (a) {
      return Math.floor(a / 30) + " kuud tagasi";
    },
    year: "aasta tagasi",
    years: function (a) {
      return Math.round(a) + " aastat tagasi";
    },
  },
};
function rplg_svg() {
  return '<svg><defs><g id="rp-star" width="17" height="17"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></g><g id="rp-star-half" width="17" height="17"><path d="M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"></path></g><g id="rp-star-o" width="17" height="17"><path d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#ccc"></path></g><g id="rp-logo-g" height="44" width="44" fill="none" fill-rule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g><g id="rp-logo-f" width="30" height="30" transform="translate(23,85) scale(0.05,-0.05)"><path fill="#fff" d="M959 1524v-264h-157q-86 0 -116 -36t-30 -108v-189h293l-39 -296h-254v-759h-306v759h-255v296h255v218q0 186 104 288.5t277 102.5q147 0 228 -12z"></path></g><g id="rp-logo-y" x="0px" y="0px" width="44" height="44" style="enable-background:new 0 0 533.33 533.33;" xml:space="preserve"><path d="M317.119,340.347c-9.001,9.076-1.39,25.586-1.39,25.586l67.757,113.135c0,0,11.124,14.915,20.762,14.915   c9.683,0,19.246-7.952,19.246-7.952l53.567-76.567c0,0,5.395-9.658,5.52-18.12c0.193-12.034-17.947-15.33-17.947-15.33   l-126.816-40.726C337.815,335.292,325.39,331.994,317.119,340.347z M310.69,283.325c6.489,11.004,24.389,7.798,24.389,7.798   l126.532-36.982c0,0,17.242-7.014,19.704-16.363c2.415-9.352-2.845-20.637-2.845-20.637l-60.468-71.225   c0,0-5.24-9.006-16.113-9.912c-11.989-1.021-19.366,13.489-19.366,13.489l-71.494,112.505   C311.029,261.999,304.709,273.203,310.69,283.325z M250.91,239.461c14.9-3.668,17.265-25.314,17.265-25.314l-1.013-180.14   c0,0-2.247-22.222-12.232-28.246c-15.661-9.501-20.303-4.541-24.79-3.876l-105.05,39.033c0,0-10.288,3.404-15.646,11.988   c-7.651,12.163,7.775,29.972,7.775,29.972l109.189,148.831C226.407,231.708,237.184,242.852,250.91,239.461z M224.967,312.363   c0.376-13.894-16.682-22.239-16.682-22.239L95.37,233.079c0,0-16.732-6.899-24.855-2.091c-6.224,3.677-11.738,10.333-12.277,16.216   l-7.354,90.528c0,0-1.103,15.685,2.963,22.821c5.758,10.128,24.703,3.074,24.703,3.074L210.37,334.49   C215.491,331.048,224.471,330.739,224.967,312.363z M257.746,361.219c-11.315-5.811-24.856,6.224-24.856,6.224l-88.265,97.17   c0,0-11.012,14.858-8.212,23.982c2.639,8.552,7.007,12.802,13.187,15.797l88.642,27.982c0,0,10.747,2.231,18.884-0.127   c11.552-3.349,9.424-21.433,9.424-21.433l2.003-131.563C268.552,379.253,268.101,366.579,257.746,361.219z" fill="#D80027"/></g><g id="rp-dots" fill="none" fill-rule="evenodd" width="12" height="12"><circle cx="6" cy="3" r="1" fill="#000"/><circle cx="6" cy="6" r="1" fill="#000"/><circle cx="6" cy="9" r="1" fill="#000"/></g></defs></svg>';
}
function simple_star(a, b, c) {
  return (
    '<svg viewBox="0 0 1792 1792" width="17" height="17" ' +
    (c ? 'style="background:' + c + '"' : "") +
    '><use xlink:href="#rp-star' +
    a +
    '" fill="' +
    b +
    '"/></svg>'
  );
}
function simple_stars(a, b) {
  for (var c = "", d = 1; 6 > d; d++) {
    var f = a - d;
    c =
      0 <= f
        ? c + simple_star("", b)
        : -1 < f && 0 > f
        ? -0.75 > f
          ? c + simple_star("-o", b)
          : -0.25 < f
          ? c + simple_star("", b)
          : c + simple_star("-half", b)
        : c + simple_star("-o", b);
  }
  return c;
}
function yelp_stars(a, b, c) {
  for (var d = "", f = 0; 5 > f; f++)
    d += simple_star(
      "",
      b,
      1 <= a - f
        ? c
        : 0 < a - f
        ? "linear-gradient(90deg, " + c + " 50%, #bbbac0 50%)"
        : ""
    );
  return d;
}
function render_stars(a, b, c) {
  switch (b) {
    case "facebook":
      return simple_stars(a, c || "#3c5b9b");
    case "yelp":
      return yelp_stars(a, "#ffffff", c);
  }
  return simple_stars(a, c || "#fb8e28");
}
function render_logo(a) {
  switch (a) {
    case "google":
      return '<svg viewBox="0 0 512 512" width="44" height="44"><use xlink:href="#rp-logo-g"/></svg>';
    case "facebook":
      return '<svg viewBox="0 0 100 100" width="44" height="44"><use xlink:href="#rp-logo-f"/></svg>';
    case "yelp":
      return '<svg viewBox="0 0 533.33 533.33" width="44" height="44"><use xlink:href="#rp-logo-y"/></svg>';
  }
}
function render_rplg_logo(a) {
  return "summary" == a
    ? ""
    : '<span class="rplg-social-logo rplg-' +
        a +
        '-logo">' +
        render_logo(a) +
        "</span>";
}
function _rplg_add_svg() {
  var a = document.getElementById("rplg-svg");
  a ||
    ((a = document.createElement("span")),
    (a.id = "rplg-svg"),
    (a.style.display = "none"),
    (a.innerHTML = rplg_svg()),
    document.body.appendChild(a));
}
function _rplg_init_svg(a) {
  _rplg_add_svg();
  for (var b = a.querySelectorAll(".rplg-stars"), c = 0; c < b.length; c++) {
    var d = b[c].getAttribute("data-info").split(",");
    b[c].innerHTML = render_stars(d[0], d[1], d[2]);
  }
  b = a.querySelectorAll(".rplg [data-badge]");
  for (c = 0; c < b.length; c++)
    b[c].innerHTML = render_rplg_logo(b[c].getAttribute("data-badge"));
  a = a.querySelectorAll(".rplg [data-logo]");
  for (c = 0; c < a.length; c++)
    a[c].innerHTML = render_logo(a[c].getAttribute("data-logo"));
}
function _rplg_badge_init(a) {
  var b = -1 < a.querySelector(".rplg-badge-cnt").className.indexOf("-fixed");
  b && document.body.appendChild(a);
  a = a.querySelectorAll(".rplg-badge2");
  for (var c = document.createElement("div"), d = 0; d < a.length; d++) {
    var f = a[d],
      l = f.getAttribute("data-provider"),
      n = "badge_float_" + l,
      h = sessionStorage.getItem(n),
      e = f.querySelector(".rplg-badge-logo"),
      q = f.querySelector(".rplg-badge2-btn"),
      t = f.querySelector(".rplg-badge2-close"),
      p = f.querySelector(".rplg-form");
    (function (a, d, e, f, h, l, m, k) {
      b && (a.style.display = "block");
      m &&
        (e && JSON.parse(e).hide && (a.style.display = "none"),
        (m.onclick = function () {
          a.style.display = "none";
          var b = JSON.parse(sessionStorage.getItem(d) || "{}");
          b.hide = !0;
          sessionStorage.setItem(d, JSON.stringify(b));
        }));
      h &&
        "summary" != f &&
        !h.querySelector("img") &&
        (h.innerHTML = render_logo(f));
      k &&
        ((l.onclick = function () {
          rplg_load_imgs(k);
          k.style.display = "block";
        }),
        c.appendChild(k));
    })(f, n, h, l, e, q, t, p);
  }
  c.hasChildNodes() && ((c.className = "rplg"), document.body.appendChild(c));
}
function rplg_load_imgs(a) {
  a = a.querySelectorAll("img.rplg-blazy[data-src]");
  for (var b = 0; b < a.length; b++)
    a[b].setAttribute("src", a[b].getAttribute("data-src")),
      a[b].removeAttribute("data-src");
}
function rplg_next_reviews(a) {
  var b = this.parentNode;
  reviews = b.querySelectorAll(".rplg .rplg-hide");
  for (var c = 0; c < a && c < reviews.length; c++)
    reviews[c] &&
      (reviews[c].className = reviews[c].className.replace("rplg-hide", ""));
  reviews = b.querySelectorAll(".rplg .rplg-hide");
  1 > reviews.length && b.removeChild(this);
  window.rplg_blazy && window.rplg_blazy.revalidate();
  return !1;
}
function rplg_leave_review_window() {
  _rplg_popup(this.getAttribute("href"), 620, 500);
  return !1;
}
function _rplg_lang() {
  var a = navigator;
  return (a.language || a.systemLanguage || a.userLanguage || "en")
    .substr(0, 2)
    .toLowerCase();
}
function _rplg_popup(a, b, c) {
  var d = document.documentElement;
  a = window.open(
    a,
    "",
    "scrollbars=yes, width=" +
      b +
      ", height=" +
      c +
      ", top=" +
      ((window.innerHeight
        ? window.innerHeight
        : d.clientHeight
        ? d.clientHeight
        : screen.height) /
        2 -
        c / 2 +
        (void 0 != window.screenTop ? window.screenTop : window.screenY)) +
      ", left=" +
      ((window.innerWidth
        ? window.innerWidth
        : d.clientWidth
        ? d.clientWidth
        : screen.width) /
        2 -
        b / 2 +
        (void 0 != window.screenLeft ? window.screenLeft : window.screenX))
  );
  window.focus && a.focus();
  return a;
}
function _rplg_init_timeago(a) {
  a = a.querySelectorAll(".rplg [data-time]");
  for (var b = 0; b < a.length; b++) {
    var c = 1e3 * parseInt(a[b].getAttribute("data-time"));
    a[b].innerHTML = WPacTime.getTime(c, _rplg_lang(), "ago");
  }
}
function _rplg_init_blazy(a) {
  window.Blazy
    ? (window.rplg_blazy = new Blazy({ selector: "img.rplg-blazy" }))
    : 0 < a &&
      setTimeout(function () {
        _rplg_init_blazy(a - 1);
      }, 200);
}
function _rplg_read_more(a) {
  a = a.querySelectorAll(".rplg-more-toggle");
  for (var b = 0; b < a.length; b++)
    (function (a) {
      a.onclick = function () {
        a.parentNode.removeChild(a.previousSibling.previousSibling);
        a.previousSibling.className = "";
        a.textContent = "";
      };
    })(a[b]);
}
function _rplg_init_slider(a, b) {
  if (!window.Rplgsw)
    return setTimeout(function () {
      _rplg_init_slider(a, b);
    }, 200);
  var c = a.querySelector(".rplgsw-container"),
    d = {
      loop: !0,
      autoplay: parseInt(b.speed),
      effect: b.effect,
      slidesPerView: parseInt(b.count),
      spaceBetween: parseInt(b.space),
      autoHeight: !0,
      fade: { crossFade: !0 },
      breakpoints: {},
      onInit: function (a) {
        setTimeout(function () {
          window.dispatchEvent(new Event("resize"));
        }, 500);
      },
      onTransitionEnd: function (a) {
        window.rplg_blazy && window.rplg_blazy.revalidate();
      },
    };
  b.pagin &&
    ((d.paginationClickable = !0), (d.pagination = ".rplgsw-pagination"));
  b.nextprev &&
    ((d.nextButton = a.querySelector(".rplg-slider-next")),
    (d.prevButton = a.querySelector(".rplg-slider-prev")));
  d.breakpoints[b.mobileBreakpoint] = {
    slidesPerView: parseInt(b.mobileCount),
    spaceBetween: 10,
  };
  d.breakpoints[b.tabletBreakpoint] = {
    slidesPerView: parseInt(b.tabletCount),
    spaceBetween: 20,
  };
  d.breakpoints[b.desktopBreakpoint] = {
    slidesPerView: parseInt(b.desktopCount),
    spaceBetween: 30,
  };
  return new Rplgsw(c, d);
}
function _rplg_init_sliderlite(a, b) {
  function c() {
    var b = a.querySelector(".grw-slider .grw-row");
    b.className =
      510 > b.offsetWidth
        ? "grw-row grw-row-xs"
        : 750 > b.offsetWidth
        ? "grw-row grw-row-x"
        : 1100 > b.offsetWidth
        ? "grw-row grw-row-s"
        : 1450 > b.offsetWidth
        ? "grw-row grw-row-m"
        : 1800 > b.offsetWidth
        ? "grw-row grw-row-l"
        : "grw-row grw-row-xl";
    q.length && setTimeout(d, 200);
  }
  function d() {
    var b = a.querySelector(".grw-slider-reviews"),
      c = a.querySelectorAll(".grw-slider-review"),
      d = Math.round(b.offsetWidth / c[0].offsetWidth),
      h = Math.ceil(c.length / d),
      l = a.querySelector(".grw-slider-dots");
    if (l) {
      l.innerHTML = "";
      for (var m = 0; m < h; m++) {
        var k = document.createElement("div");
        k.className = "grw-slider-dot";
        x = Math.ceil(
          (((b.scrollLeft + (b.scrollLeft + c[0].offsetWidth * d)) / 2) * h) /
            b.scrollWidth
        );
        x == m + 1 && (k.className = "grw-slider-dot active");
        k.setAttribute("data-index", m + 1);
        k.setAttribute("data-visible", d);
        l.appendChild(k);
        k.onclick = function () {
          var b = a.querySelector(".grw-slider-dot.active");
          b = parseInt(b.getAttribute("data-index"));
          var c = parseInt(this.getAttribute("data-index")),
            k = parseInt(this.getAttribute("data-visible"));
          b < c
            ? f(k * Math.abs(c - b))
            : e.scrollBy(-q[0].offsetWidth * k * Math.abs(c - b), 0);
          a.querySelector(".grw-slider-dot.active").className =
            "grw-slider-dot";
          this.className = "grw-slider-dot active";
          p && clearInterval(p);
        };
      }
    }
  }
  function f(a) {
    e.scrollBy(q[0].offsetWidth * a, 0);
  }
  function l() {
    var b = a.querySelector(".grw-slider-review:last-child"),
      c = b.getBoundingClientRect();
    b = b.parentNode.getBoundingClientRect();
    (2 > Math.abs(b.left - c.left) || b.left <= c.left) &&
    c.left < b.right &&
    (2 > Math.abs(b.right - c.right) || b.right >= c.right) &&
    c.right > b.left
      ? e.scrollBy(-e.scrollWidth, 0)
      : f(1);
    p = setTimeout(l, h);
  }
  var n = a.querySelector(".grw-slider"),
    h = 1e3 * b.speed,
    e = a.querySelector(".grw-slider-reviews"),
    q = a.querySelectorAll(".grw-slider-review"),
    t = null,
    p = null,
    r = function () {
      (n.offsetWidth || n.offsetHeight || n.getClientRects().length) &&
      "hidden" !== window.getComputedStyle(n).visibility
        ? (c(), _rplg_init_blazy(10), q.length && setTimeout(l, h))
        : setTimeout(r, 300);
    };
  r();
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(function () {
      c();
    }, 150);
  });
  e.addEventListener("scroll", function () {
    setTimeout(d, 200);
    window.rplg_blazy && window.rplg_blazy.revalidate();
  });
  if ((b = a.querySelector(".grw-slider-prev")))
    b.onclick = function () {
      e.scrollBy(-q[0].offsetWidth, 0);
      p && clearInterval(p);
    };
  if ((b = a.querySelector(".grw-slider-next")))
    b.onclick = function () {
      f(1);
      p && clearInterval(p);
    };
}
function _rplg_init_flash(a, b) {
  var c = "flash_" + a.getAttribute("data-id");
  if (!sessionStorage.getItem(c)) {
    var d = 0,
      f = !1,
      l = !1,
      n = [],
      h = a.querySelector(".rplg-flash-content"),
      e = h.querySelector(".rplg-flash-x"),
      q = h.querySelector(".rplg-flash-card"),
      t = h.querySelector(".rplg-flash-story"),
      p = 1e3 * (b.flash_start || 3),
      r = 1e3 * (b.flash_visible || 5),
      v = 1e3 * (b.flash_invisible || 5),
      y = null;
    document.body.appendChild(a);
    for (
      var u = a.querySelectorAll(".rplg-form-review"), z = 0;
      z < u.length;
      z++
    ) {
      var w = u[z],
        m = w.querySelector(".rplg-stars").getAttribute("data-info").split(",");
      if (b.disable_review_time) var k = "";
      else
        (k = w.querySelector(".rplg-review-time")),
          (k = b.time_format ? k.innerText : k.getAttribute("data-time"));
      n.push({
        avatar: b.hide_avatar
          ? ""
          : w
              .querySelector(".rplg-review-avatar")
              .getAttribute(b.lazy_load_img ? "data-src" : "src"),
        author_name: b.hide_name
          ? ""
          : w.querySelector(".rplg-review-name").getAttribute("title"),
        time: k,
        rating: m[0],
        provider: m[1],
      });
    }
    var g = function (c) {
      f ||
        l ||
        (_rplg_flashnext(a, t, d, n, b),
        (h.className = "rplg-flash-content rplg-flash-visible"),
        (d = d + 1 < n.length ? d + 1 : 0));
      l = !1;
      y = setTimeout(function () {
        var a;
        if ((a = !f)) a = h.parentElement.querySelector(":hover") !== h;
        a && !l && (h.className = "rplg-flash-content");
        y = setTimeout(g, v);
      }, r);
    };
    setTimeout(g, p);
    var A = function () {
      var a = JSON.parse(sessionStorage.getItem(c) || "{}");
      a.hide = !0;
      sessionStorage.setItem(c, JSON.stringify(a));
      clearTimeout(y);
      h.className = "rplg-flash-content";
    };
    e.onclick = A;
    t.onclick = function () {
      f = !0;
      rplg_load_imgs(h);
      var a = q.querySelector(".rplg-row").getAttribute("data-idx"),
        b = q.querySelector('.rplg-form-review[data-idx="' + a + '"]');
      b.className = "rplg-form-review rplg-highlight";
      setTimeout(function () {
        b.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
      q.className = "rplg-flash-card rplg-flash-expanded";
      h.className = "rplg-flash-content rplg-flash-visible";
      e.innerHTML =
        '<svg viewBox="0 0 86.001 86.001"><path style="fill:#030104" d="M5.907,21.004c-1.352-1.338-3.542-1.338-4.894,0c-1.35,1.336-1.352,3.506,0,4.844l39.54,39.15   c1.352,1.338,3.542,1.338,4.894,0l39.54-39.15c1.351-1.338,1.352-3.506,0-4.844c-1.352-1.338-3.542-1.338-4.894-0.002L43,56.707   L5.907,21.004z"></path></svg>';
      e.onclick = function () {
        b.className = "rplg-form-review";
        q.className = "rplg-flash-card";
        f = !1;
        l = !0;
        e.innerHTML = "\u00d7";
        e.onclick = A;
      };
    };
  }
}
function _rplg_flashnext(a, b, c, d, f) {
  b.firstChild
    ? ((a = d[c]),
      b.querySelector(".rplg-row").setAttribute("data-idx", c),
      f.flash_user_photo
        ? (b.querySelector(".rplg-flash-img").innerHTML =
            '<img src="' +
            a.avatar +
            '" class="rplg-review-avatar" alt="' +
            a.author_name +
            '" width="44" height="44">')
        : f.hide_avatar ||
          (b.querySelector(".rplg-flash-photo").innerHTML =
            '<img src="' +
            a.avatar +
            '" class="rplg-review-avatar" alt="' +
            a.author_name +
            '" width="16" height="16">'),
      f.hide_name ||
        (b.querySelector(".rplg-flash-name").innerHTML = a.author_name),
      (b.querySelector(".rplg-flash-rating").innerHTML = parseInt(a.rating)),
      (b.querySelector(".rplg-flash-stars").innerHTML = _rplg_flashtext(a, f)),
      f.disable_review_time ||
        (b.querySelector(".rplg-flash-time").innerHTML = f.time_format
          ? a.time
          : WPacTime.getTimeAgo(1e3 * a.time, _rplg_lang(), "ago")))
    : (b.innerHTML = _rplg_flashstory(c, d, f));
}
function _rplg_flashstory(a, b, c) {
  b = b[a];
  return (
    '<div class="rplg-row" data-idx="' +
    a +
    '">' +
    (c.flash_hide_logo && !c.flash_user_photo
      ? ""
      : '<div class="rplg-row-left"><div class="rplg-flash-img">' +
        (c.flash_user_photo
          ? '<img src="' +
            b.avatar +
            '" class="rplg-review-avatar" alt="' +
            b.author_name +
            '" width="44" height="44">'
          : '<span style="position:relative;display:inline-block;margin:0 6px 0 0;vertical-align: middle;"><svg viewBox="0 0 1792 1792" width="44" height="44"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" fill="#FFAF02"></path></svg><span style="position:absolute;bottom:0px;right:0px;width:26px;height:26px;background:#fff;border-radius:50%;border:4px solid #212121"></span><svg width="25" height="25" viewBox="0 0 1792 1792" style="position:absolute;bottom:0;right:0;border-radius:50%;background:#fff"><path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#8cc976"></path></svg></span>') +
        "</div></div>") +
    '<div class="rplg-row-right"><div class="rplg-flash-text">' +
    (c.flash_user_photo || c.hide_avatar
      ? ""
      : '<span class="rplg-flash-photo"><img src="' +
        b.avatar +
        '" class="rplg-review-avatar" alt="' +
        b.author_name +
        '" width="16" height="16"></span>') +
    (c.hide_name
      ? ""
      : '<span class="rplg-flash-name">' + b.author_name + "</span> ") +
    "<span> " +
    c.text.m1.replace(
      "%s",
      '<span class="rplg-flash-rating">' + b.rating + "</span>"
    ) +
    '</span></div><div class="rplg-flash-stars">' +
    _rplg_flashtext(b, c) +
    '</div><div class="rplg-flash-footer">' +
    (c.disable_review_time
      ? ""
      : '<span class="rplg-flash-time">' +
        (c.time_format
          ? b.time
          : WPacTime.getTimeAgo(1e3 * b.time, _rplg_lang(), "ago")) +
        "</span>") +
    '<span class="rplg-flash-power"></span></div></div></div>'
  );
}
function _rplg_flashtext(a, b) {
  var c = [a.rating, a.provider, "#ffa318"].join();
  return (
    '<span class="rplg-flash-star rplg-stars" data-provider="' +
    a.provider +
    '" data-info="' +
    c +
    '">' +
    render_stars(a.rating, a.provider) +
    "</span> " +
    b.text.m2 +
    ' <span class="rplg-flash-logo" data-provider="' +
    a.provider +
    '">' +
    render_logo(a.provider) +
    "</span>"
  );
}
function _rplg_get_parent(a, b) {
  b = b || "rplg";
  if (0 > a.className.split(" ").indexOf(b))
    for (; (a = a.parentElement) && 0 > a.className.split(" ").indexOf(b); );
  return a;
}
function rplg_init(a, b) {
  a = _rplg_get_parent(a, "rplg");
  var c = a.querySelector("img[data-exec]");
  if ("true" == c.getAttribute("data-exec")) return a;
  _rplg_init_svg(a);
  _rplg_init_timeago(a);
  _rplg_read_more(a);
  b && b(a);
  _rplg_init_blazy(10);
  c.setAttribute("data-exec", "true");
  return a;
}
function rplg_init_slider_theme(a, b) {
  rplg_init(a, function (a) {
    _rplg_init_slider(a, b);
  });
}
function rplg_init_sliderlite_theme(a, b) {
  rplg_init(a, function (a) {
    _rplg_init_sliderlite(a, b);
  });
}
function rplg_init_grid_theme(a) {
  rplg_init(a);
}
function rplg_init_list_theme(a) {
  rplg_init(a);
}
function rplg_init_badge_theme(a) {
  rplg_init(a, function (a) {
    _rplg_badge_init(a);
  });
}
function rplg_init_temp_theme(a) {
  rplg_init(a);
}
function rplg_init_flash_theme(a, b) {
  rplg_init(a, function (a) {
    _rplg_init_flash(a, b);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  for (
    var a = document.querySelectorAll('.rplg img[data-exec="false"]'), b = 0;
    b < a.length;
    b++
  ) {
    var c = a[b];
    if ("false" == c.getAttribute("data-exec")) {
      var d = c.getAttribute("data-func"),
        f = c.getAttribute("data-args");
      f = f ? JSON.parse(f) : f;
      window[d](c.parentNode, f);
    }
  }
});
var RichPlugins = RichPlugins || {
  Instances: { Tags: {}, Sliders: {} },
  Utils: {
    __: function (a, b) {
      return b[a] || a;
    },
    ajax: function (a, b) {
      var c = new XMLHttpRequest();
      c.open("POST", a, !0);
      c.setRequestHeader("Content-Type", "application/json");
      c.onreadystatechange = function () {
        c.readyState === XMLHttpRequest.DONE &&
          200 === c.status &&
          b(JSON.parse(c.responseText));
      };
      c.send();
    },
    time: function (a, b) {
      return b ? a : WPacTime.getTimeAgo(1e3 * parseInt(a), _rplg_lang());
    },
    trimtext: function (a, b, c) {
      if (a && b && a.length > b) {
        var d = a.substring(0, b).indexOf(" ") + 1;
        if (1 > d || b - d > b / 2) d = b;
        var f = (b = "");
        0 < d &&
          ((b = a.substring(0, d - 1)), (f = a.substring(d - 1, a.length)));
        return (
          b +
          (f
            ? "<rp-s>... </rp-s><rp-h>" +
              f +
              "</rp-h><rp-readmore>" +
              this.__("read more", c) +
              "</rp-readmore>"
            : "")
        );
      }
      return a;
    },
    opentext: function () {
      var a = this.previousSibling.previousSibling,
        b = "RP-S" == a.tagName ? !0 : !1,
        c = document.createElement(b ? "rp-h" : "rp-s");
      c.innerHTML = a.innerHTML;
      a.replaceWith(c);
      a = this.previousSibling;
      b = document.createElement(b ? "rp-s" : "rp-h");
      b.innerHTML = a.innerHTML;
      a.replaceWith(b);
      RichPlugins.Utils.rm(this);
    },
    anchor: function (a, b, c) {
      var d = [];
      c.open_link && d.push("noopener");
      c.nofollow_link && d.push("nofollow");
      d = d.length ? 'rel="' + d.join(" ") + '"' : "";
      return (
        '<a href="' +
        a +
        '" ' +
        (c.open_link ? 'target="_blank"' : "") +
        " " +
        d +
        ">" +
        b +
        "</a>"
      );
    },
    media: function (a) {
      for (
        var b = document.createElement("rp-media"), c = 0;
        c < a.length;
        c++
      ) {
        var d = document.createElement("rp-thumb");
        d.setAttribute(
          "onclick",
          "_rplg_popup('" + a[c].googleUrl + "', 800, 600)"
        );
        d.setAttribute(
          "style",
          "background-image:url(" + a[c].thumbnailUrl + ")"
        );
        d.className = "rplg-clickable";
        b.appendChild(d);
      }
      return b;
    },
    reply: function (a) {
      var b = document.createElement("rp-reply");
      b.className = "rplg-scroll";
      b.innerHTML = "<rp-b>Response from the owner</rp-b>" + a;
      return b;
    },
    rm: function (a) {
      a && a.parentNode.removeChild(a);
    },
    brsCompare: function (a, b) {
      return parseInt(a.split(":")[0]) > parseInt(b.split(":")[0]) ? 1 : -1;
    },
    reviewsInit: function (a, b) {
      a = a.querySelectorAll("rp-review");
      for (var c = 0; c < a.length; c++) RichPlugins.Utils.reviewInit(a[c], b);
    },
    reviewInit: function (a, b) {
      var c = a.querySelector("rp-review-time"),
        d = a.querySelector("rp-review-text"),
        f = a.querySelector("rp-stars");
      a = a.querySelector("rp-logo");
      RichPlugins.Utils.starsInit(f);
      a.innerHTML = render_logo(a.getAttribute("data-provider"));
      c &&
        (c.innerHTML = RichPlugins.Utils.time(
          c.getAttribute("data-time"),
          b.time_format
        ));
      d.innerHTML &&
        ((d.innerHTML = RichPlugins.Utils.trimtext(
          d.innerHTML,
          b.text_size,
          b.trans
        )),
        (b = d.querySelector("rp-readmore"))) &&
        (b.onclick = RichPlugins.Utils.opentext);
    },
    starsInit: function (a) {
      var b = a.getAttribute("data-info").split(",");
      a.innerHTML = render_stars(b[0], b[1], b[2]);
    },
  },
  Tag: function (a) {
    var b = a.getAttribute("data-id"),
      c = JSON.parse(a.getAttribute("data-opts")),
      d = RichPlugins.Instances.Tags[b];
    return (d = {
      init: function () {
        _rplg_add_svg();
        var f = a.querySelectorAll("rp-logo"),
          l = a.querySelector("rp-stars"),
          n = a.querySelector("rp-stars[data-reviewus]");
        l && RichPlugins.Utils.starsInit(l);
        n &&
          (RichPlugins.Utils.starsInit(n),
          (n.onclick = function (a) {
            a = "svg" == a.target.tagName ? a.target : a.target.parentNode;
            a = []
              .concat($jscomp.arrayFromIterable(a.parentNode.children))
              .indexOf(a);
            _rplg_popup(
              2 < a
                ? this.getAttribute("data-reviewus")
                : "https://app.richplugins.com/feedback?s=" + a,
              800,
              600
            );
          }));
        for (l = 0; l < f.length; l++)
          f[l].innerHTML = render_logo(f[l].getAttribute("data-provider"));
        0 < c.tag_popup &&
          setTimeout(function () {
            a.className += " rplg-pop-up";
          }, 1e3 * c.tag_popup);
        if ("sidebar" == c.tag_click) {
          var h = a.parentNode.querySelector("rp-sb");
          h.querySelector("rp-sbx").onclick = function (a) {
            h.style.display = "none" == h.style.display ? "block" : "none";
          };
          a.onclick = function (a) {
            h.style.display = "none" == h.style.display ? "block" : "none";
            var d = h.querySelector("rp-sbci");
            "" == d.innerHTML &&
              RichPlugins.Utils.ajax(
                brb_vars.ajaxurl +
                  "?action=brb_embed&id=" +
                  b +
                  "&brb_view_mode=" +
                  c.tag_sidebar,
                function (a) {
                  d.innerHTML = a.data;
                  a = d.querySelector("rp-slider");
                  a.setAttribute("data-exec", 1);
                  RichPlugins.Slider(a).init();
                }
              );
          };
        }
        d.stylesInit();
        RichPlugins.Instances.Tags[b] = d;
        console.log("RichPlugins slider initialized");
      },
      stylesInit: function () {
        var a = "",
          b =
            document.getElementById("rplg-style") ||
            document.createElement("style");
        b.id = "rplg-style";
        c.tag_color &&
          (a += "r-p rp-tag-inner{background:" + c.tag_color + "!important}");
        c.tag_color_text &&
          (a +=
            "r-p rp-tag rp-tag-text{color:" + c.tag_color_text + "!important}");
        c.tag_color_rating &&
          (a +=
            "r-p rp-tag-inner rp-rating{color:" +
            c.tag_color_rating +
            "!important}");
        c.tag_size_logo &&
          (a +=
            "r-p rp-tag rp-logo svg{width:" +
            c.tag_size_logo +
            "!important;height:" +
            c.tag_size_logo +
            "!important}");
        c.tag_size_star &&
          (a +=
            "r-p rp-tag rp-stars svg{width:" +
            c.tag_size_star +
            "!important;height:" +
            c.tag_size_star +
            "!important}");
        c.tag_size_rating &&
          (a +=
            "r-p rp-tag rp-rating{font-size:" +
            c.tag_size_rating +
            "!important}");
        b.innerHTML = a;
        document.head.appendChild(b);
      },
    });
  },
  Slider: function (a) {
    var b = a.getAttribute("data-id"),
      c = a.querySelector("rp-content"),
      d = a.querySelector("rp-reviews"),
      f = a.querySelector("rp-controls"),
      l = a.querySelector("rp-dots"),
      n = parseInt(a.getAttribute("data-count")),
      h = JSON.parse(a.getAttribute("data-opts")),
      e = RichPlugins.Instances.Sliders[b],
      q = a.querySelectorAll("rp-review"),
      t = "",
      p = null,
      r = null,
      v = null,
      y = null,
      u = !1,
      z = !1,
      w = 0,
      m = 0;
    null != e && e.clear();
    return (e = {
      init: function () {
        e.isVisible(a)
          ? (setTimeout(function () {
              e.resize();
              e.actions();
            }, 1),
            q.length && e.swipeAutoStart())
          : setTimeout(e.init, 300);
        RichPlugins.Instances.Sliders[b] = e;
        console.log("RichPlugins slider initialized");
      },
      isVisible: function (a) {
        return (
          !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) &&
          "hidden" !== window.getComputedStyle(a).visibility
        );
      },
      resize: function (b) {
        var c = a.offsetWidth,
          k = a.getAttribute("data-col");
        var l =
          510 > c
            ? "xs"
            : 750 > c
            ? "x"
            : 1100 > c
            ? "s"
            : 1450 > c
            ? "m"
            : 1800 > c
            ? "l"
            : "xl";
        a.className = "rp-col-" + l;
        if (h.slider_breakpoints) {
          var m = h.slider_breakpoints.split(",");
          m.sort(RichPlugins.Utils.brsCompare);
          for (var n = 0; n < m.length; n++) {
            var p = m[n].split(":");
            if (c < parseInt(p[0])) {
              a.setAttribute("data-col", p[1]);
              break;
            }
          }
        }
        !q.length ||
          (t == l && k == a.getAttribute("data-col")) ||
          setTimeout(function () {
            d.scrollLeft != b * e.reviewWidth() &&
              (d.scrollLeft = b * e.reviewWidth());
            e.dotsInit();
            e.setActiveDot();
            t = l;
          }, 200);
        f && (f.style.top = parseInt(e.reviewHeight() / 2) + "px");
      },
      actions: function () {
        _rplg_add_svg();
        e.stylesInit();
        e.headerInit();
        RichPlugins.Utils.reviewsInit(a, h);
        h.mousestop && e.addMouseEvents();
        window.addEventListener("resize", e.resizeListener);
        d &&
          (d.addEventListener("scroll", e.scrollListener, !1),
          h.wheelscroll && c.addEventListener("wheel", e.wheelListener, !1));
        var b = a.querySelector("rp-btn-prev");
        b &&
          (b.onclick = function () {
            e.btnClick(-1);
          });
        if ((b = a.querySelector("rp-btn-next")))
          b.onclick = function () {
            e.btnClick(1);
          };
      },
      resizeListener: function () {
        var a = m;
        clearTimeout(p);
        p = setTimeout(e.resize, 150, a);
      },
      scrollListener: function () {
        clearTimeout(r);
        clearTimeout(v);
        v = setTimeout(e.scrollEnd, 50);
      },
      wheelListener: function (a) {
        var b = a.target;
        if (
          (b =
            "RP-REVIEW-TEXT" == b.tagName
              ? b
              : "RP-REVIEW-TEXT" == b.parentNode.tagName
              ? b.parentNode
              : null) &&
          b.scrollHeight > b.clientHeight
        )
          return !0;
        a.preventDefault();
        w++;
        clearTimeout(y);
        y = setTimeout(e.wheelEnd, 50, a);
      },
      stylesInit: function () {
        var a = "",
          b =
            document.getElementById("rplg-style") ||
            document.createElement("style");
        b.id = "rplg-style";
        h.color_review &&
          (a +=
            "r-p rp-review rp-review-inner{background:" +
            h.color_review +
            "!important}");
        h.color_border &&
          (a +=
            "r-p rp-review rp-review-inner{box-shadow:none!important;border:1px solid " +
            h.color_border +
            "!important}");
        h.color_text &&
          (a +=
            "r-p rp-review rp-review-inner{color:" +
            h.color_text +
            "!important}");
        h.slider_space_between &&
          (a +=
            "r-p rp-review rp-review-inner{margin:0 " +
            h.slider_space_between +
            "!important}");
        h.slider_review_height &&
          (a +=
            "r-p [data-rs] rp-review rp-body{height:" +
            h.slider_review_height +
            "!important}");
        h.color_scale &&
          (a +=
            "r-p rp-header rp-scale{color:" + h.color_scale + "!important}");
        h.color_based &&
          (a +=
            "r-p rp-header rp-based{color:" + h.color_based + "!important}");
        h.color_name &&
          (a +=
            "r-p rp-review rp-review-name,r-p rp-review rp-review-name a{color:" +
            h.color_name +
            "!important}");
        h.color_time &&
          (a +=
            "r-p rp-review rp-review-time{color:" +
            h.color_time +
            "!important}");
        h.color_stars &&
          (a +=
            "r-p rp-header rp-rating{color:" + h.color_stars + "!important}");
        h.color_btn &&
          (a +=
            "r-p rp-header rp-review_us,r-p rp-header rp-review_us:hover,r-p rp-header rp-review_us:active{background:" +
            h.color_btn +
            "!important}");
        h.color_dot &&
          (a += "r-p rp-dot.active {background:" + h.color_dot + "}");
        b.innerHTML = a;
        document.head.appendChild(b);
      },
      headerInit: function () {
        var b = a.querySelector("rp-header rp-stars"),
          c = a.querySelectorAll("rp-header rp-logo");
        b && RichPlugins.Utils.starsInit(b);
        for (b = 0; b < c.length; b++)
          c[b].innerHTML = render_logo(c[b].getAttribute("data-provider"));
      },
      addMouseEvents: function () {
        a.addEventListener("mouseover", e.mouseOver, !1);
        a.addEventListener("mouseleave", e.mouseLeave, !1);
      },
      delMouseEvents: function () {
        a.removeEventListener("mouseover", e.mouseOver);
        a.removeEventListener("mouseleave", e.mouseLeave);
      },
      mouseOver: function () {
        u = 1;
        e.swipeAutoStop();
      },
      mouseLeave: function () {
        u = 0;
        e.swipeAutoStart();
      },
      btnClick: function (a) {
        e.swipeHand(a * e.swipePerBtn());
      },
      wheelEnd: function (a) {
        e.swipeHand(Math.sign(a.wheelDelta) * w * e.swipeStep());
        w = 0;
      },
      swipeHand: function (a) {
        z = !0;
        e.loadNextReviews();
        e.scroll(a);
        h.clickstop && (e.swipeAutoStop(), e.delMouseEvents());
      },
      scroll: function (a) {
        d.scrollBy(e.reviewWidth() * a, 0);
      },
      scrollEnd: function () {
        m = e.reviewsBack();
        z ? (z = !1) : e.loadNextReviews();
        e.setActiveDot();
        ((!h.mousestop || u) && h.mousestop) ||
          ((!h.clickstop || z) && h.clickstop) ||
          e.swipeAutoStart();
      },
      loadNextReviews: function () {
        var b = parseInt(a.getAttribute("data-offset")),
          c = a.querySelector("rp-dot.active");
        c = c
          ? parseInt(c.getAttribute("data-index")) * e.swipePerDot()
          : e.reviewsBack();
        c = e.getAjaxSize(c);
        if (0 < c) {
          var d = [];
          e.preloadReviews(d, b, c);
          e.loadAjaxReviews(d, b, c);
        }
      },
      getAjaxSize: function (b) {
        var c = 0,
          d = parseInt(a.getAttribute("data-offset")),
          k = parseInt(h.pagination);
        if (n > d) {
          var f = b - d;
          Math.abs(f) < 3 * e.swipePerDot()
            ? (c = k)
            : f && (c = Math.ceil(b / k) * k - d);
        }
        b = d + c - n;
        return 0 < b ? c - b : c;
      },
      preloadReviews: function (b, c, e) {
        var g = q.length - 1;
        a.setAttribute("data-offset", c + e);
        for (c = 0; c < e; c++) {
          var k = q[Math.round(Math.random() * g)].cloneNode(!0);
          k.style = "filter: blur(4px);";
          d.appendChild(k);
          b.push(k);
        }
        q = a.querySelectorAll("rp-review");
      },
      loadAjaxReviews: function (c, d, f) {
        RichPlugins.Utils.ajax(
          brb_vars.ajaxurl +
            "?action=brb_get_reviews&id=" +
            b +
            "&offset=" +
            d +
            "&size=" +
            f,
          function (b) {
            for (var g = b.reviews.length, k = 0; k < g; k++) {
              var l = c.shift();
              RichPlugins.Utils.reviewInit(
                e.convertReviewEl(l, b.reviews[k]),
                h
              );
            }
            for (; c.length; ) (b = c.shift()), RichPlugins.Utils.rm(b);
            d + f != d + g && a.setAttribute("data-offset", d + g);
          }
        );
      },
      convertReviewEl: function (a, b) {
        var c = a.querySelector("rp-body"),
          d = a.querySelector("rp-review-head img"),
          g = a.querySelector("rp-review-name"),
          f = a.querySelector("rp-review-time"),
          k = a.querySelector("rp-stars"),
          l = a.querySelector("rp-review-text"),
          m = a.querySelector("rp-media"),
          n = a.querySelector("rp-reply"),
          p = a.querySelector("rp-logo");
        a.style = "";
        d && ((d.src = b.author_avatar), (d.alt = b.author_name));
        g && (g.outerHTML = e.reviewName(b));
        f && f.setAttribute("data-time", b.time);
        RichPlugins.Utils.rm(m);
        b.media && c.appendChild(RichPlugins.Utils.media(b.media));
        RichPlugins.Utils.rm(n);
        b.reply && c.appendChild(RichPlugins.Utils.reply(b.reply));
        l.innerHTML = b.text;
        p.setAttribute("data-provider", b.provider);
        k.setAttribute(
          "data-info",
          [b.rating, b.provider, h.color_stars].join()
        );
        return a;
      },
      dotsInit: function () {
        if (l) {
          var b = Math.round(n / e.swipePerDot());
          l.innerHTML = "";
          for (var c = 1; c <= b; c++) {
            var d = document.createElement("rp-dot");
            d.setAttribute("data-index", c);
            d.setAttribute("title", c);
            d.onclick = e.dotClick;
            l.appendChild(d);
          }
          b = l.getBoundingClientRect().height;
          a.style.paddingBottom = b + "px";
        }
      },
      dotClick: function () {
        var b = parseInt(this.getAttribute("data-index")),
          c = a.querySelector("rp-dot.active"),
          d = parseInt(c.getAttribute("data-index")),
          f = Math.abs(b - d);
        c.className = "";
        this.className = "active";
        e.swipeHand(f * e.swipePerDot() * Math.sign(b - d));
      },
      setActiveDot: function () {
        var b = Math.round(e.reviewsBack() / e.swipePerDot()) + 1;
        b = a.querySelector('rp-dot[data-index="' + b + '"]');
        var c = a.querySelector("rp-dot.active");
        c && (c.className = "");
        b && (b.className = "active");
      },
      swipeAuto: function () {
        e.isScrollEnd() ? e.scroll(-n) : e.scroll(e.swipeStep());
        e.swipeAutoStart();
      },
      swipeAutoStart: function () {
        h.autoplay && (r = setTimeout(e.swipeAuto, 1e3 * parseInt(h.speed)));
      },
      swipeAutoStop: function () {
        clearTimeout(r);
        v &&
          setTimeout(function () {
            clearTimeout(v);
          }, 100);
      },
      isScrollEnd: function () {
        var a = d.querySelector("rp-review:last-child"),
          b = a.getBoundingClientRect();
        a = a.parentNode.getBoundingClientRect();
        return (
          (2 > Math.abs(a.left - b.left) || a.left <= b.left) &&
          b.left < a.right &&
          (2 > Math.abs(a.right - b.right) || a.right >= b.right) &&
          b.right > a.left
        );
      },
      swipeStep: function () {
        return h.swipe_step || e.reviewsPerView();
      },
      swipePerBtn: function () {
        return h.swipe_per_btn || e.reviewsPerView();
      },
      swipePerDot: function () {
        return h.swipe_per_dot || e.reviewsPerView();
      },
      reviewWidth: function () {
        return q[0].offsetWidth;
      },
      reviewHeight: function () {
        return q[0].offsetHeight;
      },
      reviewsPerView: function () {
        return Math.round(d.offsetWidth / e.reviewWidth());
      },
      reviewsBack: function () {
        return Math.round(d.scrollLeft / e.reviewWidth());
      },
      reviewName: function (a) {
        return (
          '<rp-review-name title="' +
          a.author_name +
          '">' +
          (a.author_url
            ? RichPlugins.Utils.anchor(a.author_url, a.author_name, h)
            : a.author_name) +
          "</rp-review-name>"
        );
      },
      clear: function () {
        clearTimeout(p);
        clearTimeout(r);
        clearTimeout(v);
        clearTimeout(y);
        window.removeEventListener("resize", e.resizeListener);
        d.removeEventListener("scroll", e.scrollListener);
        c.removeEventListener("wheel", e.wheelListener);
      },
    });
  },
};
document.addEventListener("DOMContentLoaded", function () {
  for (
    var a = document.querySelectorAll('rp-slider[data-exec=""]'), b = 0;
    b < a.length;
    b++
  )
    RichPlugins.Slider(a[b]).init(), a[b].setAttribute("data-exec", "1");
});
