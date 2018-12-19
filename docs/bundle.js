!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}({0:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},1:function(e,t,n){"use strict";var r,a;void 0===(a="function"==typeof(r=function(){return function(e){function t(){v=!1;var e=function(){if(s&&"number"==typeof s){var e=Math.min(Math.max(0,s),1);return g-e*g}return g}();(h=h.filter(function(t){var n=t.getBoundingClientRect(),r=n.top,a=r<e;if(a&&!t.__enter_view){if(c(t),f)return!1}else!a&&t.__enter_view&&u&&u(t);return t.__enter_view=a,!0})).length||window.removeEventListener("scroll",n,!0)}function n(){v||(v=!0,p(t))}function r(){var e,n;e=document.documentElement.clientHeight,n=window.innerHeight||0,g=Math.max(e,n),t()}function a(e){for(var t=e.length,n=[],r=0;r<t;r+=1)n.push(e[r]);return n}function i(){h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?a(t.querySelectorAll(e)):e instanceof NodeList?a(e):e instanceof Array?e:void 0}(o)}var o=e.selector,c=e.enter,u=e.exit,l=e.offset,s=void 0===l?0:l,d=e.once,f=void 0!==d&&d,p=null,v=!1,h=[],g=0;o&&c||console.error("must set selector and enter options"),p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},i(),window.addEventListener("resize",r,!0),window.addEventListener("scroll",n,!0),r(),t()}})?r.call(t,n,t,e):r)||(e.exports=a)},15:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),i={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()}},o=i;function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={filterWordCloud:function(e,t){var n=new Array;for(var r in t)n.push(t[r].word);return e.filter(function(e){return n.includes(e.word)})},nestWordCloudDataByYear:function(e){return d3.nest().key(function(e){return+e.year}).entries(e).map(function(e){return c({},e,{key:"dec_"+e.key,values:e.values.map(function(e){return c({},e,{rank:+e.rank,overindex:+e.overindex,wordOriginal:e.word,word:e.word})})})})},joinWordsToArticles:function(e,t){for(var n=0,r=function(){var r=t[n].key,a=e.filter(function(e){return e.decadeString===r});t[n].articles=a};n<t.length;n++)r();return t},joinWordsToFrequencies:function(e,t){return t.map(function(t){return c({},t,{areaData:e})})},joinWordsAndYearsToArticles:function(e,t){for(var n=0,r=function(){var r=e[n].year,a=e[n].word,i=t.filter(function(e){return e.decade===r&&e.term===a});e[n].articles=i};n<e.length;n++)r();return e},formatArticles:function(e){return e.map(function(e){return c({},e,{decadeString:"dec_".concat(e.year.slice(0,3),"0")})})}},s=function(){return(Math.random().toString(36)+"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)},d={circles:function(){var e=20,t="",n=2,r=!1,a="#343434",i="#343434",o=0,c=s(),u=function(u){var l=u.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",e).attr("height",e);t&&l.append("rect").attr("width",e).attr("height",e).attr("fill",t),l.append("circle").attr("cx",e/2).attr("cy",e/2).attr("r",n).attr("fill",a).attr("stroke",i).attr("stroke-width",o),r&&[[0,0],[0,e],[e,0],[e,e]].forEach(function(e){l.append("circle").attr("cx",e[0]).attr("cy",e[1]).attr("r",n).attr("fill",a).attr("stroke",i).attr("stroke-width",o)})};return u.heavier=function(e){return 0===arguments.length?n*=2:n*=2*e,u},u.lighter=function(e){return 0===arguments.length?n/=2:n/=2*e,u},u.thinner=function(t){return 0===arguments.length?e*=2:e*=2*t,u},u.thicker=function(t){return 0===arguments.length?e/=2:e/=2*t,u},u.background=function(e){return t=e,u},u.size=function(t){return e=t,u},u.complement=function(e){return r=0===arguments.length||e,u},u.radius=function(e){return n=e,u},u.fill=function(e){return a=e,u},u.stroke=function(e){return i=e,u},u.strokeWidth=function(e){return o=e,u},u.id=function(e){return 0===arguments.length?c:(c=e,u)},u.url=function(){return"url(#"+c+")"},u},lines:function(){var e=20,t="#343434",n=2,r="",a=s(),i=["diagonal"],o="auto",c=function(c){var u=c.append("defs").append("pattern").attr("id",a).attr("patternUnits","userSpaceOnUse").attr("width",e).attr("height",e);r&&u.append("rect").attr("width",e).attr("height",e).attr("fill",r),i.forEach(function(r){u.append("path").attr("d",function(t){var n=e;switch(t){case"0/8":case"vertical":return"M "+n/2+", 0 l 0, "+n;case"1/8":return"M "+n/4+",0 l "+n/2+","+n+" M "+-n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;case"2/8":case"diagonal":return"M 0,"+n+" l "+n+","+-n+" M "+-n/4+","+n/4+" l "+n/2+","+-n/2+" M "+.75*n+","+5/4*n+" l "+n/2+","+-n/2;case"3/8":return"M 0,"+.75*n+" l "+n+","+-n/2+" M 0,"+n/4+" l "+n+","+-n/2+" M 0,"+5*n/4+" l "+n+","+-n/2;case"4/8":case"horizontal":return"M 0,"+n/2+" l "+n+",0";case"5/8":return"M 0,"+-n/4+" l "+n+","+n/2+"M 0,"+n/4+" l "+n+","+n/2+" M 0,"+3*n/4+" l "+n+","+n/2;case"6/8":return"M 0,0 l "+n+","+n+" M "+-n/4+","+.75*n+" l "+n/2+","+n/2+" M "+3*n/4+","+-n/4+" l "+n/2+","+n/2;case"7/8":return"M "+-n/4+",0 l "+n/2+","+n+" M "+n/4+",0 l "+n/2+","+n+" M "+3*n/4+",0 l "+n/2+","+n;default:return"M "+n/2+", 0 l 0, "+n}}(r)).attr("stroke-width",n).attr("shape-rendering",o).attr("stroke",t).attr("stroke-linecap","square")})};return c.heavier=function(e){return 0===arguments.length?n*=2:n*=2*e,c},c.lighter=function(e){return 0===arguments.length?n/=2:n/=2*e,c},c.thinner=function(t){return 0===arguments.length?e*=2:e*=2*t,c},c.thicker=function(t){return 0===arguments.length?e/=2:e/=2*t,c},c.background=function(e){return r=e,c},c.size=function(t){return e=t,c},c.orientation=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===arguments.length?c:(i=t,c)},c.shapeRendering=function(e){return o=e,c},c.stroke=function(e){return t=e,c},c.strokeWidth=function(e){return n=e,c},c.id=function(e){return 0===arguments.length?a:(a=e,c)},c.url=function(){return"url(#"+a+")"},c},paths:function(){var e=1,t=1,n=20,r="#343434",a=2,i="",o=function(e){return"M "+e/4+","+3*e/4+"l"+e/4+","+-e/2+"l"+e/4+","+e/2},c=s(),u="transparent",l="auto",d=function(s){var d=function(r){var a=n;switch(r){case"squares":return"M "+a/4+" "+a/4+" l "+a/2+" 0 l 0 "+a/2+" l "+-a/2+" 0 Z";case"nylon":return"M 0 "+a/4+" l "+a/4+" 0 l 0 "+-a/4+" M "+3*a/4+" "+a+" l 0 "+-a/4+" l "+a/4+" 0 M "+a/4+" "+a/2+" l 0 "+a/4+" l "+a/4+" 0 M "+a/2+" "+a/4+" l "+a/4+" 0 l 0 "+a/4;case"waves":return"M 0 "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0 c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+-a/2+" "+a/2+" c "+a/8+" "+a/4+" , "+3*a/8+" "+a/4+" , "+a/2+" 0 M "+a+" "+a/2+" c "+a/8+" "+-a/4+" , "+3*a/8+" "+-a/4+" , "+a/2+" 0";case"woven":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+3*a/4+","+a/4+"l"+a/2+","+-a/2+" M"+a/4+","+3*a/4+"l"+-a/2+","+a/2+"M"+3*a/4+","+5*a/4+"l"+a/2+","+-a/2+" M"+-a/4+","+a/4+"l"+a/2+","+-a/2;case"crosses":return"M "+a/4+","+a/4+"l"+a/2+","+a/2+"M"+a/4+","+3*a/4+"l"+a/2+","+-a/2;case"caps":return"M "+a/4+","+3*a/4+"l"+a/4+","+-a/2+"l"+a/4+","+a/2;case"hexagons":return e=3,t=Math.sqrt(3),"M "+a+",0 l "+a+",0 l "+a/2+","+a*Math.sqrt(3)/2+" l "+-a/2+","+a*Math.sqrt(3)/2+" l "+-a+",0 l "+-a/2+","+-a*Math.sqrt(3)/2+" Z M 0,"+a*Math.sqrt(3)/2+" l "+a/2+",0 M "+3*a+","+a*Math.sqrt(3)/2+" l "+-a/2+",0";default:return r(a)}}(o),f=s.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",n*e).attr("height",n*t);i&&f.append("rect").attr("width",n*e).attr("height",n*t).attr("fill",i),f.append("path").attr("d",d).attr("fill",u).attr("stroke",r).attr("stroke-width",a).attr("stroke-linecap","square").attr("shape-rendering",l)};return d.heavier=function(e){return 0===arguments.length?a*=2:a*=2*e,d},d.lighter=function(e){return 0===arguments.length?a/=2:a/=2*e,d},d.thinner=function(e){return 0===arguments.length?n*=2:n*=2*e,d},d.thicker=function(e){return 0===arguments.length?n/=2:n/=2*e,d},d.background=function(e){return i=e,d},d.shapeRendering=function(e){return l=e,d},d.size=function(e){return n=e,d},d.d=function(e){return o=e,d},d.fill=function(e){return u=e,d},d.stroke=function(e){return r=e,d},d.strokeWidth=function(e){return a=e,d},d.id=function(e){return 0===arguments.length?c:(c=e,d)},d.url=function(){return"url(#"+c+")"},d}};function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}d3.selection.prototype.puddingChartArea=function(e){var t=this.nodes().map(function(e){var t=d3.select(e),n=t.datum(),r=0,a=0,i=null,o=null,c=null,u=null,l=d3.scaleLinear(),s=null,p=d3.scaleLinear(),v=null,h=null,g=null,y=null,m=null,w=null,b=null,x=null,k=null;function M(e){var t=d3.selectAll(".line").data()[0].values,n=d3.bisector(function(e){return e.year}).left,r=l.invert(d3.mouse(this)[0]),a=n(t,r,1),i=t[a-1],o=t[a],c=r-i.year>o.year-r?o:i;console.log(c.articles),d3.selectAll("div.headline").remove();var s=u.select(".headline-wrapper").selectAll("div.headline").data(c.articles).enter().append("div.headline");s.append("p.hed-num tk-national").text(function(e,t){return t+1}),s.append("p.hed-text").html(function(e){var t=e.term,n=e.year.slice(0,4),r=e.headline_russell.toLowerCase(),a=t.length,i=r.indexOf(t.toLowerCase()),o=i+a;return('<span class="year-example">'+n+"</span>: "+e.headline_russell.slice(0,i)+"<b>"+e.headline_russell.slice(i,o)+"</b>"+e.headline_russell.slice(o)).slice(0,100)+"..."}).on("click",function(e){return window.open(e.web_url)});var d=l(c.year),f=p(c.frequency);k.at("transform","translate(".concat(d,", ").concat(f,")")),k.selectAll(".tooltip-text").text(function(e){return(+c.frequency).toFixed(2)}).at("dx",function(e){var t=null;return c.year>=1940?t=-20:c.year<=1950&&(t=25),t})}d3.format(",");var A={init:function(){var e=(m=d3.nest().key(function(e){return e.word}).sortValues(function(e,t){return e.year-t.year}).entries(n).map(function(e){var t=d3.range(1900,2020,10).map(function(t){var n=e.values.find(function(e){return+e.year===t});return n||{word:e.key,year:t.toString(),frequency:null}});return f({},e,{values:t})}).map(function(e){var t=e.values.map(function(e){return e.frequency});return f({},e,{maxFreq:d3.max(t)})})).filter(function(e){return"boer"===e.key});x=d3.max(e,function(e){return e.maxFreq}),u=d3.select("div.sidebar");var r=(i=t.append("svg.pudding-chart")).append("g");r.at("transform","translate(".concat(22,", ").concat(5,")")),(o=i.append("g.g-axis")).append("g").attr("class","x axis").at("transform","translate(".concat(22,",").concat(a,")")),o.append("g").attr("class","y axis"),c=r.append("g.g-vis");var l=d.lines().size(4).strokeWidth(1).stroke("#BAB3A9");c.call(l),y=c.selectAll(".wordArea").data(e).enter().append("path").attr("class",function(e){return"area area-".concat(e.values[0].word)}).style("fill",l.url()),g=c.selectAll(".wordLine").data(e).enter().append("path").attr("class",function(e){return"line line-".concat(e.values[0].word)}),A.resize(),A.render()},resize:function(){r=t.node().offsetWidth-22-30,a=t.node().offsetHeight-5-25,h=a;var e=d3.max(n,function(e){return e.year}),c=d3.min(n,function(e){return e.year});return l=d3.scaleLinear().domain([c,e]).range([0,r]),p=d3.scaleLinear().domain([0,x]).nice().range([a,0]),s=d3.axisBottom(l).tickPadding(8).tickValues(["1910","1930","1950","1970","1990","2010"]).tickFormat(d3.format("d")),v=d3.axisLeft(p).tickPadding(8).ticks(5).tickSize(-r),o.select(".x").at("transform","translate(".concat(22,",").concat(h,")")).call(s),o.select(".y").call(v).at("transform","translate(".concat(22,", ").concat(5,")")).selectAll("g").classed("g-baseline",function(e){return 0==e}),i.at({width:r+22+30,height:a+5+25}),(k=i.append("g").at("class","g-tooltip").st("display","none")).append("circle").at("class","tooltip-circle").at("r",5).at("transform","translate(22,5)"),k.append("text").at("class","tooltip-text").at("dy",20),i.append("rect").at("width",r).at("height",a).at("class","overlay").at("transform","translate(22,5)").on("mouseover",function(){return k.st("display",null)}).on("mouseout",function(){return k.st("display","none")}).on("mousemove touchstart",M),w=d3.line().defined(function(e){return e}).x(function(e){return l(e.year)}).y(function(e){return p(e.frequency)}),g.attr("d",function(e){return w(e.values)}),b=d3.area().defined(w.defined()).x(function(e){return l(e.year)}).y0(a).y1(function(e){return p(e.frequency)}),y.attr("d",function(e){return b(e.values)}),A},render:function(){return A},update:function(e){var t=m.filter(function(t){return t.key===e});x=d3.max(t,function(e){return e.maxFreq}),p.domain([0,x]),o.select(".y").transition().duration(1e3).call(v),w.defined(function(e){return e}).y(function(e){return p(e.frequency)}),b.defined(w.defined()).y0(a).y1(function(e){return p(e.frequency)}),g.data(t).transition().delay(500).duration(1e3).attr("d",function(e){return w(e.values)}).attr("class",function(e){return"line line-".concat(e.values[0].word)}),y.data(t).transition().delay(500).duration(1e3).attr("d",function(e){return b(e.values)}).attr("class",function(e){return"area area-".concat(e.values[0].word)})},data:function(e){return arguments.length?(n=e,t.datum(n),A.render(),A):n}};return A.init(),A});return t.length>1?t:t.pop()};n(6);var v,h,g,y,m,w,b,x,k,M,A=n(1),_=n.n(A),O=null,j=null,q=d3.select(".chart-wrapper"),P=d3.selectAll(".wordcloud-wrapper");function S(){d3.selectAll(".decade").on("click",function(){var e=d3.select(this).text().split("s")[0];console.log(e);var t,n,r,a,i=d3.select(".wordcloud-".concat(e)).node();t=i,n=window.innerHeight,r=t.clientHeight,a=t.offsetTop,console.log(n,r,a),console.log(2*r+a),window.scroll({behavior:"smooth",left:0,top:3.6*r+a})})}var W={init:function(){return new Promise(function(e){new Promise(function(e,t){var n,r=["assets/data/word_timelines.csv","assets/data/word_cloud_data.csv","assets/data/term_article_pairs_overall.csv","assets/data/word_cloud_data_to_include.csv"];(n=d3).loadData.apply(n,r.concat([function(n,r){n?t(n):(e(r),(v=r[0]).forEach(function(e){return e.frequency=1e5*e.frequency}),g=r[1],M=r[3],y=l.filterWordCloud(g,M),m=l.nestWordCloudDataByYear(y),w=l.joinWordsToFrequencies(v,m),b=r[2],x=l.formatArticles(b),k=l.joinWordsToArticles(x,w),h=l.joinWordsAndYearsToArticles(v,x))}]))}).then(function(e){var t,n,r;O=q.datum(h).puddingChartArea(),(j=P.data(k).puddingChartWordCloud()).forEach(function(e){return e.area(O)}),_()({selector:".wordcloud-wrapper",enter:function(e){var t=e.classList[1].split("-")[1],n=d3.select(".decade-".concat(t));d3.selectAll(".decade").classed("current",!1),n.classed("current",!0),e.classList.add("entered")},exit:function(e){var t=e.classList[1].split("-")[1],n=d3.select(".decade-".concat(t));d3.selectAll(".decade").classed("current",!1),n.classed("current",!0),e.classList.remove("entered")},offset:.75,once:!1}),S(),t=d3.select(".drawer"),_()({selector:"#decades",enter:function(e){t.classed("is-visible",!0)},exit:function(e){t.classed("is-visible",!1)},offset:.5,once:!1}),n=d3.select(".sidebar"),(r=d3.select(".drawer__toggle")).on("click",function(){var e=n.classed("is-visible");n.classed("is-visible",!e),r.classed("is-visible",!e)})})})},resize:function(){j.forEach(function(e){return e.resize()}),O.resize()}},z=d3.select("body"),L=0;function C(){var e=z.node().offsetWidth;L!==e&&(L=e,W.resize())}z.classed("is-mobile",o.any()),window.addEventListener("resize",a()(C,150)),function(){if(z.select("header").classed("is-sticky")){var e=z.select(".header__menu"),t=z.select(".header__toggle");t.on("click",function(){var n=e.classed("is-visible");e.classed("is-visible",!n),t.classed("is-visible",!n)})}}(),W.init()},3:function(e,t,n){(function(t){var n="Expected a function",r=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,f=s||d||Function("return this")(),p=Object.prototype.toString,v=Math.max,h=Math.min,g=function(){return f.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==a}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):o.test(e)?r:+e}e.exports=function(e,t,r){var a,i,o,c,u,l,s=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=a,r=i;return a=i=void 0,s=t,c=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-s>=o}function x(){var e=g();if(b(e))return k(e);u=setTimeout(x,function(e){var n=t-(e-l);return f?h(n,o-(e-s)):n}(e))}function k(e){return u=void 0,p&&a?w(e):(a=i=void 0,c)}function M(){var e=g(),n=b(e);if(a=arguments,i=this,l=e,n){if(void 0===u)return function(e){return s=e,u=setTimeout(x,t),d?w(e):c}(l);if(f)return u=setTimeout(x,t),w(l)}return void 0===u&&(u=setTimeout(x,t)),c}return t=m(t)||0,y(r)&&(d=!!r.leading,o=(f="maxWait"in r)?v(m(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p),M.cancel=function(){void 0!==u&&clearTimeout(u),s=0,a=l=i=u=void 0},M.flush=function(){return void 0===u?c:k(g())},M}}).call(this,n(0))},6:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}d3.selection.prototype.puddingChartWordCloud=function(e){var t=this.nodes().map(function(e){var t,r=d3.select(e),a=r.append("div.word-cloud__container"),i=r.datum(),o=null,c=i.values,u=i.articles,l=i.areaData,s=0,d=0,f=5,p=5,v=(d3.scaleLinear(),d3.scaleSqrt()),h=null,g=null,y=d3.select(".sidebar"),m=y.select("div.headline-wrapper"),w=(y.select("div.chart-wrapper"),y.select("p.mentions").select(".mentioned-span")),b=y.select("p.mentions").select(".word-span"),x={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return x.android()||x.blackberry()||x.ios()||x.opera()||x.windows()}};function k(e){var t=e.year,r=e.word,a=e.overindex.toString().slice(0,3),i=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(u.filter(function(e){return e.term===r&&e.decade===t}).slice(0,3));d3.selectAll(".word").classed("clickedWord",!1),d3.selectAll('[data-attribute="'.concat(r,'"]')).classed("clickedWord",!0),b.text(r.toUpperCase()),w.text(a+"x"),m.selectAll("div.headline").remove();var c=m.selectAll("div.headline").data(i).enter().append("div.headline");c.append("p.hed-num tk-national").text(function(e,t){return t+1}),c.append("p.hed-text").html(function(e){var t=e.year.slice(0,4),n=e.headline_russell.toLowerCase(),a=r.length,i=n.indexOf(r.toLowerCase()),o=i+a;return('<span class="year-example">'+t+"</span>: "+e.headline_russell.slice(0,i)+"<b>"+e.headline_russell.slice(i,o)+"</b>"+e.headline_russell.slice(o)).slice(0,100)+"..."}),relevantWordFrequencies=l.filter(function(e){return e.word===r}).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){n(e,t,r[t])})}return e}({},e,{frequency:+e.frequency,year:+e.year,decadeString:"dec_".concat(e.year)})}),o&&o.update(r);var s=d3.select(".sidebar"),d=d3.select(".drawer__toggle"),f=s.classed("is-visible");s.classed("is-visible",!f),d.classed("is-visible",!f)}function M(e){var t=g.selectAll("text").data(e);t.enter().append("text").at("class","word").at("data-attribute",function(e){return e.word}).at("text-anchor","middle").text(function(e){return e.word.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).on("click",k).merge(t).style("font-size",function(e){return"".concat(e.size,"px")}).at("transform",function(e){return"translate(".concat(e.x,", ").concat(e.y,")rotate(").concat(e.rotate,")")}),function(e){e&&k(e)}(e.filter(function(e){return"boer"===e.word})[0])}var A={init:function(){h=a.append("svg").at("class",function(e){return"word-cloud__chart ".concat(e.key)}),g=h.append("g").at("class",function(e){return"word-cloud ".concat(e.key)});var e=h.append("g");e.at("transform","translate(".concat(p,", ").concat(f,")")),h.append("g.g-axis"),e.append("g.g-vis"),A.resize(),d3.selectAll('[data-attribute="boer"]').classed("clickedWord",!0),A.render()},resize:function(){return t=x.any(),s=r.node().offsetWidth-p-5,d=s,t?v.range([10,15]):v.range([20,50]),h.at({width:s+p+5,height:d+f+5}),g.at("transform","translate(".concat(s/2,",").concat(d/2,")")),function(e,t,n){v.domain(d3.extent(n,function(e){return e.overindex})),d3.layout.cloud().timeInterval(1/0).size([e-2*p,t-2*f]).words(n).padding(15).rotate(function(){return 0}).fontSize(function(e,t){return v(e.overindex)}).text(function(e){return e.word.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).spiral("rectangular").on("end",M).start()}(s,d,c),A},render:function(){return A},area:function(e){o=e},data:function(e){return arguments.length?(i=e,r.datum(i),A.render(),A):i}};return A.init(),A});return t.length>1?t:t.pop()}}});