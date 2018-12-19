!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}({0:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},1:function(t,e,n){"use strict";var r,a;void 0===(a="function"==typeof(r=function(){return function(t){function e(){v=!1;var t=function(){if(s&&"number"==typeof s){var t=Math.min(Math.max(0,s),1);return g-t*g}return g}();(h=h.filter(function(e){var n=e.getBoundingClientRect(),r=n.top,a=r<t;if(a&&!e.__enter_view){if(c(e),f)return!1}else!a&&e.__enter_view&&u&&u(e);return e.__enter_view=a,!0})).length||window.removeEventListener("scroll",n,!0)}function n(){v||(v=!0,p(e))}function r(){var t,n;t=document.documentElement.clientHeight,n=window.innerHeight||0,g=Math.max(t,n),e()}function a(t){for(var e=t.length,n=[],r=0;r<e;r+=1)n.push(t[r]);return n}function i(){h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof t?a(e.querySelectorAll(t)):t instanceof NodeList?a(t):t instanceof Array?t:void 0}(o)}var o=t.selector,c=t.enter,u=t.exit,l=t.offset,s=void 0===l?0:l,d=t.once,f=void 0!==d&&d,p=null,v=!1,h=[],g=0;o&&c||console.error("must set selector and enter options"),p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},i(),window.addEventListener("resize",r,!0),window.addEventListener("scroll",n,!0),r(),e()}})?r.call(e,n,e,t):r)||(t.exports=a)},15:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),i={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()}},o=i;function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={filterWordCloud:function(t,e){var n=new Array;for(var r in e)n.push(e[r].word);return t.filter(function(t){return n.includes(t.word)})},nestWordCloudDataByYear:function(t){return d3.nest().key(function(t){return+t.year}).entries(t).map(function(t){return c({},t,{key:"dec_"+t.key,values:t.values.map(function(t){return c({},t,{rank:+t.rank,overindex:+t.overindex,wordOriginal:t.word,word:t.word})})})})},joinWordsToArticles:function(t,e){for(var n=0,r=function(){var r=e[n].key,a=t.filter(function(t){return t.decadeString===r});e[n].articles=a};n<e.length;n++)r();return e},joinWordsToFrequencies:function(t,e){return e.map(function(e){return c({},e,{areaData:t})})},joinWordsAndYearsToArticles:function(t,e){for(var n=0,r=function(){var r=t[n].year,a=t[n].word,i=e.filter(function(t){return t.decade===r&&t.term===a});t[n].articles=i};n<t.length;n++)r();return t},formatArticles:function(t){return t.map(function(t){return c({},t,{decadeString:"dec_".concat(t.year.slice(0,3),"0")})})}},s=function(){return(Math.random().toString(36)+"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)},d={circles:function(){var t=20,e="",n=2,r=!1,a="#343434",i="#343434",o=0,c=s(),u=function(u){var l=u.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",t).attr("height",t);e&&l.append("rect").attr("width",t).attr("height",t).attr("fill",e),l.append("circle").attr("cx",t/2).attr("cy",t/2).attr("r",n).attr("fill",a).attr("stroke",i).attr("stroke-width",o),r&&[[0,0],[0,t],[t,0],[t,t]].forEach(function(t){l.append("circle").attr("cx",t[0]).attr("cy",t[1]).attr("r",n).attr("fill",a).attr("stroke",i).attr("stroke-width",o)})};return u.heavier=function(t){return 0===arguments.length?n*=2:n*=2*t,u},u.lighter=function(t){return 0===arguments.length?n/=2:n/=2*t,u},u.thinner=function(e){return 0===arguments.length?t*=2:t*=2*e,u},u.thicker=function(e){return 0===arguments.length?t/=2:t/=2*e,u},u.background=function(t){return e=t,u},u.size=function(e){return t=e,u},u.complement=function(t){return r=0===arguments.length||t,u},u.radius=function(t){return n=t,u},u.fill=function(t){return a=t,u},u.stroke=function(t){return i=t,u},u.strokeWidth=function(t){return o=t,u},u.id=function(t){return 0===arguments.length?c:(c=t,u)},u.url=function(){return"url(#"+c+")"},u},lines:function(){var t=20,e="#343434",n=2,r="",a=s(),i=["diagonal"],o="auto",c=function(c){var u=c.append("defs").append("pattern").attr("id",a).attr("patternUnits","userSpaceOnUse").attr("width",t).attr("height",t);r&&u.append("rect").attr("width",t).attr("height",t).attr("fill",r),i.forEach(function(r){u.append("path").attr("d",function(e){var n=t;switch(e){case"0/8":case"vertical":return"M "+n/2+", 0 l 0, "+n;case"1/8":return"M "+n/4+",0 l "+n/2+","+n+" M "+-n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;case"2/8":case"diagonal":return"M 0,"+n+" l "+n+","+-n+" M "+-n/4+","+n/4+" l "+n/2+","+-n/2+" M "+.75*n+","+5/4*n+" l "+n/2+","+-n/2;case"3/8":return"M 0,"+.75*n+" l "+n+","+-n/2+" M 0,"+n/4+" l "+n+","+-n/2+" M 0,"+5*n/4+" l "+n+","+-n/2;case"4/8":case"horizontal":return"M 0,"+n/2+" l "+n+",0";case"5/8":return"M 0,"+-n/4+" l "+n+","+n/2+"M 0,"+n/4+" l "+n+","+n/2+" M 0,"+3*n/4+" l "+n+","+n/2;case"6/8":return"M 0,0 l "+n+","+n+" M "+-n/4+","+.75*n+" l "+n/2+","+n/2+" M "+3*n/4+","+-n/4+" l "+n/2+","+n/2;case"7/8":return"M "+-n/4+",0 l "+n/2+","+n+" M "+n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;default:return"M "+n/2+", 0 l 0, "+n}}(r)).attr("stroke-width",n).attr("shape-rendering",o).attr("stroke",e).attr("stroke-linecap","square")})};return c.heavier=function(t){return 0===arguments.length?n*=2:n*=2*t,c},c.lighter=function(t){return 0===arguments.length?n/=2:n/=2*t,c},c.thinner=function(e){return 0===arguments.length?t*=2:t*=2*e,c},c.thicker=function(e){return 0===arguments.length?t/=2:t/=2*e,c},c.background=function(t){return r=t,c},c.size=function(e){return t=e,c},c.orientation=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===arguments.length?c:(i=e,c)},c.shapeRendering=function(t){return o=t,c},c.stroke=function(t){return e=t,c},c.strokeWidth=function(t){return n=t,c},c.id=function(t){return 0===arguments.length?a:(a=t,c)},c.url=function(){return"url(#"+a+")"},c},paths:function(){var t=1,e=1,n=20,r="#343434",a=2,i="",o=function(t){return"M "+t/4+","+3*t/4+"l"+t/4+","+-t/2+"l"+t/4+","+t/2},c=s(),u="transparent",l="auto",d=function(s){var d=function(r){var a=n;switch(r){case"squares":return"M "+a/4+" "+a/4+" l "+a/2+" 0 l 0 "+a/2+" l "+-a/2+" 0 Z";case"nylon":return"M 0 "+a/4+" l "+a/4+" 0 l 0 "+-a/4+" M "+3*a/4+" "+a+" l 0 "+-a/4+" l "+a/4+" 0 M "+a/4+" "+a/2+" l 0 "+a/4+" l "+a/4+" 0 M "+a/2+" "+a/4+" l "+a/4+" 0 l 0 "+a/4;case"waves":return"M 0 "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0 c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+-a/2+" "+a/2+" c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+a+" "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0";case"woven":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+3*a/4+","+a/4+"l"+a/2+","+-a/2+" M"+a/4+","+3*a/4+"l"+-a/2+","+a/2+"M"+3*a/4+","+5*a/4+"l"+a/2+","+-a/2+" M"+-a/4+","+a/4+"l"+a/2+","+-a/2;case"crosses":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+a/4+","+3*a/4+"l"+a/2+","+-a/2;case"caps":return"M "+a/4+","+3*a/4+"l"+a/4+","+-a/2+"l"+a/4+","+a/2;case"hexagons":return t=3,e=Math.sqrt(3),"M "+a+",0 l "+a+",0 l "+a/2+","+a*Math.sqrt(3)/2+" l "+-a/2+","+a*Math.sqrt(3)/2+" l "+-a+",0 l "+-a/2+","+-a*Math.sqrt(3)/2+" Z M 0,"+a*Math.sqrt(3)/2+" l "+a/2+",0 M "+3*a+","+a*Math.sqrt(3)/2+" l "+-a/2+",0";default:return r(a)}}(o),f=s.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",n*t).attr("height",n*e);i&&f.append("rect").attr("width",n*t).attr("height",n*e).attr("fill",i),f.append("path").attr("d",d).attr("fill",u).attr("stroke",r).attr("stroke-width",a).attr("stroke-linecap","square").attr("shape-rendering",l)};return d.heavier=function(t){return 0===arguments.length?a*=2:a*=2*t,d},d.lighter=function(t){return 0===arguments.length?a/=2:a/=2*t,d},d.thinner=function(t){return 0===arguments.length?n*=2:n*=2*t,d},d.thicker=function(t){return 0===arguments.length?n/=2:n/=2*t,d},d.background=function(t){return i=t,d},d.shapeRendering=function(t){return l=t,d},d.size=function(t){return n=t,d},d.d=function(t){return o=t,d},d.fill=function(t){return u=t,d},d.stroke=function(t){return r=t,d},d.strokeWidth=function(t){return a=t,d},d.id=function(t){return 0===arguments.length?c:(c=t,d)},d.url=function(){return"url(#"+c+")"},d}};function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}d3.selection.prototype.puddingChartArea=function(t){var e=this.nodes().map(function(t){var e=d3.select(t),n=e.datum(),r=0,a=0,i=null,o=null,c=null,u=null,l=d3.scaleLinear(),s=null,p=d3.scaleLinear(),v=null,h=null,g=null,y=null,m=null,w=null,b=null,x=null,k=null;function M(t){var e=d3.selectAll(".line").data()[0].values,n=d3.bisector(function(t){return t.year}).left,r=l.invert(d3.mouse(this)[0]),a=n(e,r,1),i=e[a-1],o=e[a],c=r-i.year>o.year-r?o:i;console.log(c.articles),d3.selectAll("div.headline").remove();var s=u.select(".headline-wrapper").selectAll("div.headline").data(c.articles).enter().append("div.headline");s.append("p.hed-num tk-national").text(function(t,e){return e+1}),s.append("p.hed-text").html(function(t){var e=t.term,n=t.year.slice(0,4),r=t.headline_russell.toLowerCase(),a=e.length,i=r.indexOf(e.toLowerCase()),o=i+a;return('<span class="year-example">'+n+"</span>: "+t.headline_russell.slice(0,i)+"<b>"+t.headline_russell.slice(i,o)+"</b>"+t.headline_russell.slice(o)).slice(0,100)+"..."}).on("click",function(t){return window.open(t.web_url)});var d=l(c.year),f=p(c.frequency);k.at("transform","translate(".concat(d,", ").concat(f,")")),k.selectAll(".tooltip-text").text(function(t){return(+c.frequency).toFixed(2)}).at("dx",function(t){var e=null;return c.year>=1940?e=-20:c.year<=1950&&(e=25),e})}d3.format(",");var A={init:function(){var t=(m=d3.nest().key(function(t){return t.word}).sortValues(function(t,e){return t.year-e.year}).entries(n).map(function(t){var e=d3.range(1900,2020,10).map(function(e){var n=t.values.find(function(t){return+t.year===e});return n||{word:t.key,year:e.toString(),frequency:null}});return f({},t,{values:e})}).map(function(t){var e=t.values.map(function(t){return t.frequency});return f({},t,{maxFreq:d3.max(e)})})).filter(function(t){return"boer"===t.key});x=d3.max(t,function(t){return t.maxFreq}),u=d3.select("div.sidebar");var r=(i=e.append("svg.pudding-chart")).append("g");r.at("transform","translate(".concat(22,", ").concat(5,")")),(o=i.append("g.g-axis")).append("g").attr("class","x axis").at("transform","translate(".concat(22,",").concat(a,")")),o.append("g").attr("class","y axis"),c=r.append("g.g-vis");var l=d.lines().size(4).strokeWidth(1).stroke("#BAB3A9");c.call(l),y=c.selectAll(".wordArea").data(t).enter().append("path").attr("class",function(t){return"area area-".concat(t.values[0].word)}).style("fill",l.url()),g=c.selectAll(".wordLine").data(t).enter().append("path").attr("class",function(t){return"line line-".concat(t.values[0].word)}),A.resize(),A.render()},resize:function(){r=e.node().offsetWidth-22-30,a=e.node().offsetHeight-5-25,h=a;var t=d3.max(n,function(t){return t.year}),c=d3.min(n,function(t){return t.year});return l=d3.scaleLinear().domain([c,t]).range([0,r]),p=d3.scaleLinear().domain([0,x]).nice().range([a,0]),s=d3.axisBottom(l).tickPadding(8).tickValues(["1910","1930","1950","1970","1990","2010"]).tickFormat(d3.format("d")),v=d3.axisLeft(p).tickPadding(8).ticks(5).tickSize(-r),o.select(".x").at("transform","translate(".concat(22,",").concat(h,")")).call(s),o.select(".y").call(v).at("transform","translate(".concat(22,", ").concat(5,")")).selectAll("g").classed("g-baseline",function(t){return 0==t}),i.at({width:r+22+30,height:a+5+25}),(k=i.append("g").at("class","g-tooltip").st("display","none")).append("circle").at("class","tooltip-circle").at("r",5).at("transform","translate(22,5)"),k.append("text").at("class","tooltip-text tooltip-bg").at("dy",20),k.append("text").at("class","tooltip-text").at("dy",20),i.append("rect").at("width",r).at("height",a).at("class","overlay").at("transform","translate(22,5)").on("mouseover",function(){return k.st("display",null)}).on("mouseout",function(){return k.st("display","none")}).on("mousemove touchstart",M),w=d3.line().defined(function(t){return t}).x(function(t){return l(t.year)}).y(function(t){return p(t.frequency)}),g.attr("d",function(t){return w(t.values)}),b=d3.area().defined(w.defined()).x(function(t){return l(t.year)}).y0(a).y1(function(t){return p(t.frequency)}),y.attr("d",function(t){return b(t.values)}),A},render:function(){return A},update:function(t){var e=m.filter(function(e){return e.key===t});x=d3.max(e,function(t){return t.maxFreq}),p.domain([0,x]),o.select(".y").transition().duration(1e3).call(v),w.defined(function(t){return t}).y(function(t){return p(t.frequency)}),b.defined(w.defined()).y0(a).y1(function(t){return p(t.frequency)}),g.data(e).transition().delay(500).duration(1e3).attr("d",function(t){return w(t.values)}).attr("class",function(t){return"line line-".concat(t.values[0].word)}),y.data(e).transition().delay(500).duration(1e3).attr("d",function(t){return b(t.values)}).attr("class",function(t){return"area area-".concat(t.values[0].word)})},data:function(t){return arguments.length?(n=t,e.datum(n),A.render(),A):n}};return A.init(),A});return e.length>1?e:e.pop()};n(6);var v,h,g,y,m,w,b,x,k,M,A=n(1),_=n.n(A),O=function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=function(){var t=void 0,e=void 0,n=void 0,r=void 0,a=void 0,i=void 0,o=void 0,c=void 0,u=void 0,l=void 0,s=void 0,d=void 0;function f(t){return t.getBoundingClientRect().top+e}function p(n){u||(u=n),s=a(l=n-u,e,o,c),window.scrollTo(0,s),l<c?window.requestAnimationFrame(p):(window.scrollTo(0,e+o),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),"function"==typeof d&&d(),u=!1)}return function(u){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(c=l.duration||1e3,r=l.offset||0,d=l.callback,a=l.easing||O,i=l.a11y||!1,e=window.scrollY||window.pageYOffset,void 0===u?"undefined":j(u)){case"number":t=void 0,i=!1,n=e+u;break;case"object":n=f(t=u);break;case"string":t=document.querySelector(u),n=f(t)}switch(o=n-e+r,j(l.duration)){case"number":c=l.duration;break;case"function":c=l.duration(o)}window.requestAnimationFrame(p)}}(),S=null,P=null,W=d3.select(".chart-wrapper"),z=d3.selectAll(".wordcloud-wrapper");function C(){d3.selectAll(".decade").on("click",function(){var t=d3.select(this).text().split("s")[0],e=d3.select(".wordcloud-".concat(t)).node();q(e,{duration:1e3,offset:-100})})}var L={init:function(){return new Promise(function(t){new Promise(function(t,e){var n,r=["assets/data/word_timelines.csv","assets/data/word_cloud_data.csv","assets/data/term_article_pairs_overall.csv","assets/data/word_cloud_data_to_include.csv"];(n=d3).loadData.apply(n,r.concat([function(n,r){n?e(n):(t(r),(v=r[0]).forEach(function(t){return t.frequency=1e5*t.frequency}),g=r[1],M=r[3],y=l.filterWordCloud(g,M),m=l.nestWordCloudDataByYear(y),w=l.joinWordsToFrequencies(v,m),b=r[2],x=l.formatArticles(b),k=l.joinWordsToArticles(x,w),h=l.joinWordsAndYearsToArticles(v,x))}]))}).then(function(t){var e,n,r;S=W.datum(h).puddingChartArea(),(P=z.data(k).puddingChartWordCloud()).forEach(function(t){return t.area(S)}),_()({selector:".wordcloud-wrapper",enter:function(t){var e=t.classList[1].split("-")[1],n=d3.select(".decade-".concat(e));d3.selectAll(".decade").classed("current",!1),n.classed("current",!0)},exit:function(t){var e=t.classList[1].split("-")[1],n=Math.max(1900,e-10),r=d3.select(".decade-".concat(n));d3.selectAll(".decade").classed("current",!1),r.classed("current",!0)},offset:.7,once:!1}),C(),e=d3.select(".drawer"),_()({selector:"#decades",enter:function(t){e.classed("is-visible",!0)},exit:function(t){e.classed("is-visible",!1)},offset:.5,once:!1}),n=d3.select(".sidebar"),(r=d3.select(".drawer__toggle")).on("click",function(){var t=n.classed("is-visible");n.classed("is-visible",!t),r.classed("is-visible",!t)})})})},resize:function(){P.forEach(function(t){return t.resize()}),S.resize()}},E=d3.select("body"),T=0;function F(){var t=E.node().offsetWidth;T!==t&&(T=t,L.resize())}E.classed("is-mobile",o.any()),window.addEventListener("resize",a()(F,150)),function(){if(E.select("header").classed("is-sticky")){var t=E.select(".header__menu"),e=E.select(".header__toggle");e.on("click",function(){var n=t.classed("is-visible");t.classed("is-visible",!n),e.classed("is-visible",!n)})}}(),L.init()},3:function(t,e,n){(function(e){var n="Expected a function",r=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=s||d||Function("return this")(),p=Object.prototype.toString,v=Math.max,h=Math.min,g=function(){return f.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==a}(t))return r;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):o.test(t)?r:+t}t.exports=function(t,e,r){var a,i,o,c,u,l,s=0,d=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function w(e){var n=a,r=i;return a=i=void 0,s=e,c=t.apply(r,n)}function b(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-s>=o}function x(){var t=g();if(b(t))return k(t);u=setTimeout(x,function(t){var n=e-(t-l);return f?h(n,o-(t-s)):n}(t))}function k(t){return u=void 0,p&&a?w(t):(a=i=void 0,c)}function M(){var t=g(),n=b(t);if(a=arguments,i=this,l=t,n){if(void 0===u)return function(t){return s=t,u=setTimeout(x,e),d?w(t):c}(l);if(f)return u=setTimeout(x,e),w(l)}return void 0===u&&(u=setTimeout(x,e)),c}return e=m(e)||0,y(r)&&(d=!!r.leading,o=(f="maxWait"in r)?v(m(r.maxWait)||0,e):o,p="trailing"in r?!!r.trailing:p),M.cancel=function(){void 0!==u&&clearTimeout(u),s=0,a=l=i=u=void 0},M.flush=function(){return void 0===u?c:k(g())},M}}).call(this,n(0))},6:function(t,e){function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}d3.selection.prototype.puddingChartWordCloud=function(t){var e=this.nodes().map(function(t){var e,r=d3.select(t),a=r.append("div.word-cloud__container"),i=r.datum(),o=null,c=i.values,u=i.articles,l=i.areaData,s=0,d=0,f=(d3.scaleLinear(),d3.scaleSqrt()),p=null,v=null,h=d3.select(".sidebar"),g=h.select("div.headline-wrapper"),y=(h.select("div.chart-wrapper"),h.select("p.mentions").select(".mentioned-span")),m=h.select("p.mentions").select(".word-span"),w={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return w.android()||w.blackberry()||w.ios()||w.opera()||w.windows()}};function b(t){var e=t.year,r=t.word,a=t.overindex.toString().slice(0,3),i=function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(u.filter(function(t){return t.term===r&&t.decade===e}).slice(0,3));d3.selectAll(".word").classed("clickedWord",!1),d3.selectAll('[data-attribute="'.concat(r,'"]')).classed("clickedWord",!0),m.text(r.toUpperCase()),y.text(a+"x"),g.selectAll("div.headline").remove();var c=g.selectAll("div.headline").data(i).enter().append("div.headline");c.append("p.hed-num tk-national").text(function(t,e){return e+1}),c.append("p.hed-text").html(function(t){var e=t.year.slice(0,4),n=t.headline_russell.toLowerCase(),a=r.length,i=n.indexOf(r.toLowerCase()),o=i+a;return('<span class="year-example">'+e+"</span>: "+t.headline_russell.slice(0,i)+"<b>"+t.headline_russell.slice(i,o)+"</b>"+t.headline_russell.slice(o)).slice(0,100)+"..."}),relevantWordFrequencies=l.filter(function(t){return t.word===r}).map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){n(t,e,r[e])})}return t}({},t,{frequency:+t.frequency,year:+t.year,decadeString:"dec_".concat(t.year)})}),o&&o.update(r);var s=d3.select(".sidebar"),d=d3.select(".drawer__toggle"),f=s.classed("is-visible");s.classed("is-visible",!f),d.classed("is-visible",!f)}function x(t){var e=v.selectAll("text").data(t);e.enter().append("text").at("class","word").at("data-attribute",function(t){return t.word}).at("text-anchor","middle").text(function(t){return t.word.toLowerCase().split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}).on("click",b).merge(e).style("font-size",function(t){return"".concat(t.size,"px")}).at("transform",function(t){return"translate(".concat(t.x,", ").concat(t.y,")rotate(").concat(t.rotate,")")}),function(t){t&&b(t)}(t.filter(function(t){return"boer"===t.word})[0])}var k={init:function(){p=a.append("svg").at("class",function(t){return"word-cloud__chart ".concat(t.key)}),v=p.append("g").at("class",function(t){return"word-cloud ".concat(t.key)});var t=p.append("g");t.at("transform","translate(".concat(5,", ").concat(5,")")),p.append("g.g-axis"),t.append("g.g-vis"),k.resize(),d3.selectAll('[data-attribute="boer"]').classed("clickedWord",!0),k.render()},resize:function(){return e=w.any(),s=r.node().offsetWidth-5-5,d=s,e?f.range([10,30]):f.range([20,50]),p.at({width:s+5+5,height:d+5+5}),v.at("transform","translate(".concat(s/2,",").concat(d/2,")")),function(t,e,n){f.domain(d3.extent(n,function(t){return t.overindex})),d3.layout.cloud().timeInterval(1/0).size([t,e]).words(n).padding(15).rotate(function(){return 0}).font("Impact").spiral("rectangular").fontSize(function(t,e){return f(t.overindex)}).text(function(t){return t.word.toLowerCase().split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")}).on("end",x).start()}(s,d,c),k},render:function(){return k},area:function(t){o=t},data:function(t){return arguments.length?(i=t,r.datum(i),k.render(),k):i}};return k.init(),k});return e.length>1?e:e.pop()}}});