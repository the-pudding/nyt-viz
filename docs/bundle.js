!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}({0:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},15:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),i={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()}},o=i;function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={filterWordCloud:function(t,e){var n=new Array;for(var r in e)n.push(e[r].word);return t.filter(function(t){return n.includes(t.word)})},nestWordCloudDataByYear:function(t){return d3.nest().key(function(t){return+t.year}).entries(t).map(function(t){return c({},t,{key:"dec_"+t.key,values:t.values.map(function(t){return c({},t,{rank:+t.rank,overindex:+t.overindex,wordOriginal:t.word,word:t.word})})})})},joinWordsToArticles:function(t,e){for(var n=0,r=function(){var r=e[n].key,a=t.filter(function(t){return t.decadeString===r});e[n].articles=a};n<e.length;n++)r();return e},joinWordsToFrequencies:function(t,e){return e.map(function(e){return c({},e,{areaData:t})})},formatArticles:function(t){return t.map(function(t){return c({},t,{decadeString:"dec_".concat(t.year.slice(0,3),"0")})})}},s=function(){return(Math.random().toString(36)+"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)},d={circles:function(){var t=20,e="",n=2,r=!1,a="#343434",i="#343434",o=0,c=s(),u=function(u){var l=u.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",t).attr("height",t);e&&l.append("rect").attr("width",t).attr("height",t).attr("fill",e),l.append("circle").attr("cx",t/2).attr("cy",t/2).attr("r",n).attr("fill",a).attr("stroke",i).attr("stroke-width",o),r&&[[0,0],[0,t],[t,0],[t,t]].forEach(function(t){l.append("circle").attr("cx",t[0]).attr("cy",t[1]).attr("r",n).attr("fill",a).attr("stroke",i).attr("stroke-width",o)})};return u.heavier=function(t){return 0===arguments.length?n*=2:n*=2*t,u},u.lighter=function(t){return 0===arguments.length?n/=2:n/=2*t,u},u.thinner=function(e){return 0===arguments.length?t*=2:t*=2*e,u},u.thicker=function(e){return 0===arguments.length?t/=2:t/=2*e,u},u.background=function(t){return e=t,u},u.size=function(e){return t=e,u},u.complement=function(t){return r=0===arguments.length||t,u},u.radius=function(t){return n=t,u},u.fill=function(t){return a=t,u},u.stroke=function(t){return i=t,u},u.strokeWidth=function(t){return o=t,u},u.id=function(t){return 0===arguments.length?c:(c=t,u)},u.url=function(){return"url(#"+c+")"},u},lines:function(){var t=20,e="#343434",n=2,r="",a=s(),i=["diagonal"],o="auto",c=function(c){var u=c.append("defs").append("pattern").attr("id",a).attr("patternUnits","userSpaceOnUse").attr("width",t).attr("height",t);r&&u.append("rect").attr("width",t).attr("height",t).attr("fill",r),i.forEach(function(r){u.append("path").attr("d",function(e){var n=t;switch(e){case"0/8":case"vertical":return"M "+n/2+", 0 l 0, "+n;case"1/8":return"M "+n/4+",0 l "+n/2+","+n+" M "+-n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;case"2/8":case"diagonal":return"M 0,"+n+" l "+n+","+-n+" M "+-n/4+","+n/4+" l "+n/2+","+-n/2+" M "+.75*n+","+5/4*n+" l "+n/2+","+-n/2;case"3/8":return"M 0,"+.75*n+" l "+n+","+-n/2+" M 0,"+n/4+" l "+n+","+-n/2+" M 0,"+5*n/4+" l "+n+","+-n/2;case"4/8":case"horizontal":return"M 0,"+n/2+" l "+n+",0";case"5/8":return"M 0,"+-n/4+" l "+n+","+n/2+"M 0,"+n/4+" l "+n+","+n/2+" M 0,"+3*n/4+" l "+n+","+n/2;case"6/8":return"M 0,0 l "+n+","+n+" M "+-n/4+","+.75*n+" l "+n/2+","+n/2+" M "+3*n/4+","+-n/4+" l "+n/2+","+n/2;case"7/8":return"M "+-n/4+",0 l "+n/2+","+n+" M "+n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;default:return"M "+n/2+", 0 l 0, "+n}}(r)).attr("stroke-width",n).attr("shape-rendering",o).attr("stroke",e).attr("stroke-linecap","square")})};return c.heavier=function(t){return 0===arguments.length?n*=2:n*=2*t,c},c.lighter=function(t){return 0===arguments.length?n/=2:n/=2*t,c},c.thinner=function(e){return 0===arguments.length?t*=2:t*=2*e,c},c.thicker=function(e){return 0===arguments.length?t/=2:t/=2*e,c},c.background=function(t){return r=t,c},c.size=function(e){return t=e,c},c.orientation=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===arguments.length?c:(i=e,c)},c.shapeRendering=function(t){return o=t,c},c.stroke=function(t){return e=t,c},c.strokeWidth=function(t){return n=t,c},c.id=function(t){return 0===arguments.length?a:(a=t,c)},c.url=function(){return"url(#"+a+")"},c},paths:function(){var t=1,e=1,n=20,r="#343434",a=2,i="",o=function(t){return"M "+t/4+","+3*t/4+"l"+t/4+","+-t/2+"l"+t/4+","+t/2},c=s(),u="transparent",l="auto",d=function(s){var d=function(r){var a=n;switch(r){case"squares":return"M "+a/4+" "+a/4+" l "+a/2+" 0 l 0 "+a/2+" l "+-a/2+" 0 Z";case"nylon":return"M 0 "+a/4+" l "+a/4+" 0 l 0 "+-a/4+" M "+3*a/4+" "+a+" l 0 "+-a/4+" l "+a/4+" 0 M "+a/4+" "+a/2+" l 0 "+a/4+" l "+a/4+" 0 M "+a/2+" "+a/4+" l "+a/4+" 0 l 0 "+a/4;case"waves":return"M 0 "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0 c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+-a/2+" "+a/2+" c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+a+" "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0";case"woven":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+3*a/4+","+a/4+"l"+a/2+","+-a/2+" M"+a/4+","+3*a/4+"l"+-a/2+","+a/2+"M"+3*a/4+","+5*a/4+"l"+a/2+","+-a/2+" M"+-a/4+","+a/4+"l"+a/2+","+-a/2;case"crosses":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+a/4+","+3*a/4+"l"+a/2+","+-a/2;case"caps":return"M "+a/4+","+3*a/4+"l"+a/4+","+-a/2+"l"+a/4+","+a/2;case"hexagons":return t=3,e=Math.sqrt(3),"M "+a+",0 l "+a+",0 l "+a/2+","+a*Math.sqrt(3)/2+" l "+-a/2+","+a*Math.sqrt(3)/2+" l "+-a+",0 l "+-a/2+","+-a*Math.sqrt(3)/2+" Z M 0,"+a*Math.sqrt(3)/2+" l "+a/2+",0 M "+3*a+","+a*Math.sqrt(3)/2+" l "+-a/2+",0";default:return r(a)}}(o),f=s.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",n*t).attr("height",n*e);i&&f.append("rect").attr("width",n*t).attr("height",n*e).attr("fill",i),f.append("path").attr("d",d).attr("fill",u).attr("stroke",r).attr("stroke-width",a).attr("stroke-linecap","square").attr("shape-rendering",l)};return d.heavier=function(t){return 0===arguments.length?a*=2:a*=2*t,d},d.lighter=function(t){return 0===arguments.length?a/=2:a/=2*t,d},d.thinner=function(t){return 0===arguments.length?n*=2:n*=2*t,d},d.thicker=function(t){return 0===arguments.length?n/=2:n/=2*t,d},d.background=function(t){return i=t,d},d.shapeRendering=function(t){return l=t,d},d.size=function(t){return n=t,d},d.d=function(t){return o=t,d},d.fill=function(t){return u=t,d},d.stroke=function(t){return r=t,d},d.strokeWidth=function(t){return a=t,d},d.id=function(t){return 0===arguments.length?c:(c=t,d)},d.url=function(){return"url(#"+c+")"},d}};function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}d3.selection.prototype.puddingChartArea=function(t){var e=this.nodes().map(function(t){var e=d3.select(t),n=e.datum(),r=0,a=0,i=null,o=null,c=null,u=d3.scaleLinear(),l=null,s=d3.scaleLinear(),p=null,v=null,h=null,g=null,y=null,m=null,w=null,b=null,x=null;function M(t){var e=d3.selectAll(".line").data()[0].values,n=d3.bisector(function(t){return t.year}).left,r=u.invert(d3.mouse(this)[0]),a=n(e,r,1),i=e[a-1],o=e[a],c=r-i.year>o.year-r?o:i,l=u(c.year),d=s(c.frequency);x.at("transform","translate(".concat(l,", ").concat(d,")")),x.selectAll(".tooltip-text").text(function(t){return(+c.frequency).toFixed(2)}).at("dx",function(t){var e=null;return c.year>=1940?e=-20:c.year<=1950&&(e=25),e})}d3.format(",");var k={init:function(){var t=(y=d3.nest().key(function(t){return t.word}).sortValues(function(t,e){return t.year-e.year}).entries(n).map(function(t){var e=d3.range(1900,2020,10).map(function(e){var n=t.values.find(function(t){return+t.year===e});return n||{word:t.key,year:e.toString(),frequency:null}});return f({},t,{values:e})}).map(function(t){var e=t.values.map(function(t){return t.frequency});return f({},t,{maxFreq:d3.max(e)})})).filter(function(t){return"boer"===t.key});b=d3.max(t,function(t){return t.maxFreq});var r=(i=e.append("svg.pudding-chart")).append("g");r.at("transform","translate(".concat(22,", ").concat(5,")")),(o=i.append("g.g-axis")).append("g").attr("class","x axis").at("transform","translate(".concat(22,",").concat(a,")")),o.append("g").attr("class","y axis"),c=r.append("g.g-vis");var l=d.lines().size(4).strokeWidth(1).stroke("#BAB3A9");c.call(l),g=c.selectAll(".wordArea").data(t).enter().append("path").attr("class",function(t){return"area area-".concat(t.values[0].word)}).style("fill",l.url()),h=c.selectAll(".wordLine").data(t).enter().append("path").attr("class",function(t){return"line line-".concat(t.values[0].word)}),m=d3.line().defined(function(t){return t}).x(function(t){return u(t.year)}).y(function(t){return s(t.frequency)}),h.attr("d",function(t){return m(t.values)}),w=d3.area().defined(m.defined()).x(function(t){return u(t.year)}).y0(a).y1(function(t){return s(t.frequency)}),g.attr("d",function(t){return w(t.values)}),k.resize(),k.render()},resize:function(){r=e.node().offsetWidth-22-30,a=e.node().offsetHeight-5-25,v=a;var t=d3.max(n,function(t){return t.year}),c=d3.min(n,function(t){return t.year});return u=d3.scaleLinear().domain([c,t]).range([0,r]),s=d3.scaleLinear().domain([0,b]).nice().range([a,0]),l=d3.axisBottom(u).tickPadding(8).tickValues(u.ticks(5).concat(u.domain())).tickFormat(d3.format("d")),p=d3.axisLeft(s).tickPadding(8).ticks(5).tickSize(-r),o.select(".x").at("transform","translate(".concat(22,",").concat(v,")")).call(l),o.select(".y").call(p).at("transform","translate(".concat(22,", ").concat(5,")")).selectAll("g").classed("g-baseline",function(t){return 0==t}),i.at({width:r+22+30,height:a+5+25}),(x=i.append("g").at("class","g-tooltip").st("display","none")).append("circle").at("class","tooltip-circle").at("r",5).at("transform","translate(22,5)"),x.append("text").at("class","tooltip-text").at("dy",20),i.append("rect").at("width",r).at("height",a).at("class","overlay").at("transform","translate(22,5)").on("mouseover",function(){return x.st("display",null)}).on("mouseout",function(){return x.st("display","none")}).on("mousemove touchstart",M),k},render:function(){return k},update:function(t){var e=y.filter(function(e){return e.key===t});b=d3.max(e,function(t){return t.maxFreq}),s.domain([0,b]),o.select(".y").transition().duration(1e3).call(p),m.defined(function(t){return t}).y(function(t){return s(t.frequency)}),w.defined(m.defined()).y0(a).y1(function(t){return s(t.frequency)}),h.data(e).transition().delay(500).duration(1e3).attr("d",function(t){return m(t.values)}).attr("class",function(t){return"line line-".concat(t.values[0].word)}),g.data(e).transition().delay(500).duration(1e3).attr("d",function(t){return w(t.values)}).attr("class",function(t){return"area area-".concat(t.values[0].word)})},data:function(t){return arguments.length?(n=t,e.datum(n),k.render(),k):n}};return k.init(),k});return e.length>1?e:e.pop()};n(6);var v,h,g,y,m,w,b,x,M,k=n(3),O=n.n(k),_=null,j=d3.select(".chart-wrapper"),A=d3.selectAll(".wordcloud-wrapper");function q(){d3.selectAll(".decade").on("click",function(){var t,e=d3.select(this).text().split("s")[0],n=d3.select(".wordcloud-".concat(e)).node();t=n,window.innerHeight,window.scroll({behavior:"smooth",left:0,top:t.offsetTop+750})})}var S={init:function(){return new Promise(function(t){new Promise(function(t,e){var n,r=["/assets/data/word_timelines.csv","/assets/data/word_cloud_data.csv","/assets/data/term_article_pairs_overall.csv","/assets/data/word_cloud_data_to_include.csv"];(n=d3).loadData.apply(n,r.concat([function(n,r){n?e(n):(t(r),(v=r[0]).forEach(function(t){return t.frequency=1e5*t.frequency}),h=r[1],M=r[3],g=l.filterWordCloud(h,M),y=l.nestWordCloudDataByYear(g),m=l.joinWordsToFrequencies(v,y),w=r[2],b=l.formatArticles(w),x=l.joinWordsToArticles(b,m))}]))}).then(function(t){var e,n;_=j.datum(v).puddingChartArea(),A.data(x).puddingChartWordCloud().forEach(function(t){return t.area(_)}),O()({selector:".wordcloud-wrapper",enter:function(t){var e=t.classList[1].split("-")[1],n=d3.select(".decade-".concat(e));d3.selectAll(".decade").classed("current",!1),n.classed("current",!0),t.classList.add("entered")},exit:function(t){var e=t.classList[1].split("-")[1],n=d3.select(".decade-".concat(e));d3.selectAll(".decade").classed("current",!1),n.classed("current",!0),t.classList.remove("entered")},offset:.5,once:!1}),q(),e=d3.select(".sidebar"),(n=d3.select(".drawer__toggle")).on("click",function(){var t=e.classed("is-visible");e.classed("is-visible",!t),n.classed("is-visible",!t)})})})},resize:function(){}},P=d3.select("body"),W=0;function z(){var t=P.node().offsetWidth;W!==t&&(W=t,S.resize())}P.classed("is-mobile",o.any()),window.addEventListener("resize",a()(z,150)),function(){if(P.select("header").classed("is-sticky")){var t=P.select(".header__menu"),e=P.select(".header__toggle");e.on("click",function(){var n=t.classed("is-visible");t.classed("is-visible",!n),e.classed("is-visible",!n)})}}(),S.init()},2:function(t,e,n){(function(e){var n="Expected a function",r=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=s||d||Function("return this")(),p=Object.prototype.toString,v=Math.max,h=Math.min,g=function(){return f.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==a}(t))return r;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):o.test(t)?r:+t}t.exports=function(t,e,r){var a,i,o,c,u,l,s=0,d=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function w(e){var n=a,r=i;return a=i=void 0,s=e,c=t.apply(r,n)}function b(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-s>=o}function x(){var t=g();if(b(t))return M(t);u=setTimeout(x,function(t){var n=e-(t-l);return f?h(n,o-(t-s)):n}(t))}function M(t){return u=void 0,p&&a?w(t):(a=i=void 0,c)}function k(){var t=g(),n=b(t);if(a=arguments,i=this,l=t,n){if(void 0===u)return function(t){return s=t,u=setTimeout(x,e),d?w(t):c}(l);if(f)return u=setTimeout(x,e),w(l)}return void 0===u&&(u=setTimeout(x,e)),c}return e=m(e)||0,y(r)&&(d=!!r.leading,o=(f="maxWait"in r)?v(m(r.maxWait)||0,e):o,p="trailing"in r?!!r.trailing:p),k.cancel=function(){void 0!==u&&clearTimeout(u),s=0,a=l=i=u=void 0},k.flush=function(){return void 0===u?c:M(g())},k}}).call(this,n(0))},3:function(t,e,n){"use strict";var r,a;void 0===(a="function"==typeof(r=function(){return function(t){function e(){v=!1;var t=function(){if(s&&"number"==typeof s){var t=Math.min(Math.max(0,s),1);return g-t*g}return g}();(h=h.filter(function(e){var n=e.getBoundingClientRect(),r=n.top,a=r<t;if(a&&!e.__enter_view){if(c(e),f)return!1}else!a&&e.__enter_view&&u&&u(e);return e.__enter_view=a,!0})).length||window.removeEventListener("scroll",n,!0)}function n(){v||(v=!0,p(e))}function r(){var t,n;t=document.documentElement.clientHeight,n=window.innerHeight||0,g=Math.max(t,n),e()}function a(t){for(var e=t.length,n=[],r=0;r<e;r+=1)n.push(t[r]);return n}function i(){h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof t?a(e.querySelectorAll(t)):t instanceof NodeList?a(t):t instanceof Array?t:void 0}(o)}var o=t.selector,c=t.enter,u=t.exit,l=t.offset,s=void 0===l?0:l,d=t.once,f=void 0!==d&&d,p=null,v=!1,h=[],g=0;o&&c||console.error("must set selector and enter options"),p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},i(),window.addEventListener("resize",r,!0),window.addEventListener("scroll",n,!0),r(),e()}})?r.call(e,n,e,t):r)||(t.exports=a)},6:function(t,e){function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}d3.selection.prototype.puddingChartWordCloud=function(t){var e=this.nodes().map(function(t){var e=d3.select(t),r=e.append("div.word-cloud__container"),a=e.datum(),i=null,o=a.values,c=a.articles,u=a.areaData,l=0,s=0,d=5,f=5,p=(d3.scaleLinear(),d3.scaleSqrt().range([20,50])),v=null,h=null,g=d3.select(".sidebar"),y=g.select("div.headline-wrapper"),m=(g.select("div.chart-wrapper"),g.select("p.mentions").select(".mentioned-span")),w=g.select("p.mentions").select(".word-span");function b(t){h.selectAll("text").data(t).enter().append("text").at("class","word").at("data-attribute",function(t){return t.word}).style("font-size",function(t){return"".concat(t.size,"px")}).at("text-anchor","middle").at("transform",function(t){return"translate(".concat(t.x,", ").concat(t.y,")rotate(").concat(t.rotate,")")}).text(function(t){return t.word.toLowerCase().split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}).on("click",function(t){var e=t.word,r=t.overindex.toString().slice(0,3),a=function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(c.filter(function(t){return t.term===e}).slice(0,3));d3.selectAll(".word").classed("clickedWord",!1),d3.selectAll('[data-attribute="'.concat(e,'"]')).classed("clickedWord",!0),w.text(e.toUpperCase()),m.text(r+"x"),y.selectAll("div.headline").remove();var o=y.selectAll("div.headline").data(a).enter().append("div.headline");o.append("p.hed-num tk-national").text(function(t,e){return e+1}),o.append("p.hed-text").html(function(t){var n=t.para.toLowerCase(),r=e.length,a=n.indexOf(e.toLowerCase()),i=a+r;return(t.para.slice(0,a)+"<b>"+t.para.slice(a,i)+"</b>"+t.para.slice(i)).slice(0,100)+"..."}),relevantWordFrequencies=u.filter(function(t){return t.word===e}).map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){n(t,e,r[e])})}return t}({},t,{frequency:+t.frequency,year:+t.year,decadeString:"dec_".concat(t.year)})}),i.update(e);var l=d3.select(".sidebar"),s=d3.select(".drawer__toggle"),d=l.classed("is-visible");l.classed("is-visible",!d),s.classed("is-visible",!d)})}var x={init:function(){v=r.append("svg").at("class",function(t){return"word-cloud__chart ".concat(t.key)}),h=v.append("g").at("class",function(t){return"word-cloud ".concat(t.key)});var t=v.append("g");t.at("transform","translate(".concat(f,", ").concat(d,")")),v.append("g.g-axis"),t.append("g.g-vis"),x.resize(),function(t,e,n){p.domain(d3.extent(n,function(t){return t.overindex})),d3.layout.cloud().timeInterval(1/0).size([t-2*f,e-2*d]).words(n).padding(8).rotate(function(){return 0}).fontSize(function(t,e){return p(t.overindex)}).text(function(t){return t.word.toLowerCase().split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}).spiral("rectangular").on("end",b).start()}(l,s,o),x.render()},resize:function(){return l=e.node().offsetWidth-f-5,s=e.node().offsetHeight-d-5,v.at({width:l+f+5,height:s+d+5}),h.at("transform","translate(".concat(l/2,",").concat(s/2,")")),x},render:function(){return x},area:function(t){i=t},data:function(t){return arguments.length?(a=t,e.datum(a),x.render(),x):a}};return x.init(),x});return e.length>1?e:e.pop()}}});