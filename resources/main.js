(()=>{var t,e,n={775:()=>{$(document).ready((function(){const t=$(".article-tab");t.find(".nav-item a").click((function(){const e=$(this).text();t.find("span").text(e)}))}))},616:()=>{function t(t){const e=t.val();if(e&&e.includes("-")){const n=`bg-${e.split("-")[1]}`;t.removeClass((function(t,e){return(e.match(/(^|\s)(bg-\S+|text-white)/g)||[]).join(" ")})),t.addClass(n),t.addClass("text-white arrow-white")}}$(document).ready((function(){const e=$(".categories-tab");if(e.length){const n=e.find(".categories-tab-content"),o=e.find(".select-categories"),i=e.find(".categories-select-content");$(".categories-tab .nav-link").click((function(){const t=$(this).attr("class").split(" ")[1];n.removeClass((function(t,e){return(e.match(/(^|\s)bg-\S+/g)||[]).join(" ")})),n.addClass(`bg-${t.split("--")[1]}`)})),$(".categories-tab .nav-item").each((function(){const t=$(this),e=$("<option>");e.val(t.find("a").attr("href")),e.text(t.find("a").text()),o.append(e)})),o.on("change",(function(){const e=$(this).val(),n=$(e).find(".categories-cols").html();i.html(n),i.find("a").addClass("with-prefix pb-1"),t($(this))})),t(o)}}))},300:()=>{$(document).ready((function(){$(".countries-tab").each((function(){const t=$(this),e=t.hasClass("countries-tab--multi-level"),n=t.find(".nav-pills > li").map((function(){const t=$(this).find("a"),e=t.text(),n=t.attr("href").substring(1);return{continent:e,countries:$(`#${n}`).find("li").map((function(){const t=$(this).find("a"),e=t.attr("href");return{name:t.text().split("(")[0].trim(),count:parseInt(t.text().split("(")[1].split(")")[0],10),href:e}})).get()}})).get(),o=t.find(".select-continent");n.forEach((t=>{const e=$("<option>").val(t.continent).text(t.continent);o.append(e)})),o.on("change",(function(){const i=o.val(),s=t.find(".select-country");s.prop("disabled",!1),s.html(""),n.find((t=>t.continent===i)).countries.forEach((t=>{const n=$("<option>").val(e?t.name:t.href).text(`${t.name} (${t.count})`);s.append(n)}))})),t.find(".countries-form").on("submit",(function(n){n.preventDefault();const o=t.find(".select-country").val();if(e){const e=t.find(`.dropdown .nav-link:contains('${o}')`).closest(".dropdown").find(".dropdown-menu").html();t.find(".categories-select-content").html(e)}else window.location.href=o}))}))}))},514:()=>{$(document).ready((function(){const t=$(".select-region"),e=t.clone().removeClass("text-uppercase text-gray mt-2").addClass("d-md-none mb-2").insertBefore(".categories-form");t.add(e).on("change",(function(){const t=$(this).val();t&&(window.location.href=t)}))}))}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var s=o[t]={exports:{}};return n[t](s,s.exports,i),s.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var s=Object.create(null);i.r(s);var r={};t=t||[null,e({}),e([]),e(e)];for(var a=2&o&&n;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>r[t]=()=>n[t]));return r.default=()=>n,i.d(s,r),s},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=$(".main-content"),e=$("#main-navbar"),n=$("body"),o=$(".main-header");function s(){const t=o.outerHeight(),e=n.outerHeight()-t;document.documentElement.style.setProperty("--menu-height",`${t}px`),document.documentElement.style.setProperty("--menu-overlay-height",`${e}px`)}s(),e.on("show.bs.collapse",(function(){s(),n.addClass("overflow-hidden"),t.addClass("menu-opened")})),e.on("hide.bs.collapse",(function(){n.hasClass("overflow-hidden")&&n.removeClass("overflow-hidden"),t.removeClass("menu-opened")})),e.on("show.bs.dropdown",".nav-item.dropdown",(function(){s(),t.addClass("menu-opened")})),e.on("hide.bs.dropdown",".nav-item.dropdown",(function(){t.removeClass("menu-opened")}));let r=0;function a(){$(window).innerWidth()<768?t.css("margin-top",`${o.outerHeight()}px`):t.css("margin-top","0")}$(window).on("scroll",(function(){const e=$(window).scrollTop();window.matchMedia("(max-width: 767px)").matches?(e<r?(o.addClass("sticky"),o.addClass("sticky-visible"),a()):(e>o.outerHeight()&&o.removeClass("sticky-visible"),setTimeout((()=>{e<=0&&(o.removeClass("sticky"),a())}),400)),r=e<=0?0:e):(o.removeClass("sticky"),o.removeClass("sticky-visible"),t.css("margin-top","0"))})),$(window).on("resize",a),$(document).on("click",".avoid-auto-close.dropdown-menu",(function(t){t.stopPropagation()})),$(".countries-tab").length>0&&Promise.resolve().then(i.t.bind(i,300,23)),$(".categories-tab").length>0&&Promise.resolve().then(i.t.bind(i,616,23)),$(".article-tab").length>0&&Promise.resolve().then(i.t.bind(i,775,23)),$(".country-header").length>0&&Promise.resolve().then(i.t.bind(i,514,23))})()})();