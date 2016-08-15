"use strict";function showProductRange(e,t){var a=$(".product-column");a.each(function(a,s){var n=$(s),r=n.find(".product").data("price");r>=e&&r<=t?n.show():n.hide()})}function generateBullets(e,t){var a=e.find(".bullets");a.empty();var s=1;t.bullets.forEach(function(e){var t=$(document.createElement("div"));t.addClass("bullet"+s),t.css("left",e[0]).css("top",e[1]),a.prepend(t),s++})}function handleHoverEvents(){var e=[".bullet1",".bullet2",".bullet3"];e.forEach(function(e){$(e).hover(function(){$(e).addClass("bullet-hover")},function(){$(e).removeClass("bullet-hover")})})}var _slicedToArray=function(){function e(e,t){var a=[],s=!0,n=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);s=!0);}catch(o){n=!0,r=o}finally{try{!s&&l["return"]&&l["return"]()}finally{if(n)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();$(".searchbar>input").on("awesomplete-selectcomplete",function(e){var t=e.target.value,a=$("#search-detail");a.find(".modal-title").text(t),a.find(".state").text(t),a.modal()}),$(".product").on("click",function(e){var t=e.currentTarget.dataset.product,a=products[t],s=$("#product-detail");s.find(".modal-title").text(a.title),s.find(".modal-subtitle").text(a.subtitle),s.find("#feature1").text(a.features[0]),s.find("#feature2").text(a.features[1]),s.find("#feature3").text(a.features[2]),s.find(".text").html(a.desc),s.find(".image>img").attr("src",a.image),generateBullets(s,a),handleHoverEvents(),s.modal()}),$(".filter>select").on("change",function(e){var t=$(e.currentTarget),a=t.find("option:selected").val().split("-"),s=_slicedToArray(a,2),n=s[0],r=s[1];showProductRange(n,r)});var products={1:{id:1,order:1,title:"Elevated Apples",subtitle:"Starting at $4.49",price:4.49,desc:"These apples have been carefully adjusted by our apple experts to extend their distance \n\t    from the ground. Books are occasionally applied to increase the mental nutritional content available.\n\t    ",image:"dist/assets/images/apples_book.jpg",bullets:[["31%","47%"],["73%","60%"],["49%","81%"]],features:["Heightened apple elevation","Calming atmosphere","Cutting-edge elevation apparatus"]},2:{id:2,order:2,title:"Gang Apples",subtitle:"Starting at $7.99",price:7.99,desc:"Although they may appear menacing at first, these expertly trained apples have been coached by \n\t    some of the finest stage directors in the world to perfect their acting skills. \n\t    <br /> <br />\n\t    Not only are they trained in ballet, modern jazz, and ballroom dance techniques, these apples possess \n\t    extensive knowledge of method acting exercises.\n\t    ",image:"dist/assets/images/apples_bunch.jpg",bullets:[["43%","32%"],["73%","62%"],["29%","78%"]],features:["Shined and polished by professional apple rubbers","Exceptional physique","Willingness to self-sacrifice to aid a superior apple"]},3:{id:3,order:3,title:"Tree Apples",subtitle:"Starting at $2.49",price:2.49,desc:"Often mistaken for angels, this patented apple variety has been engineered to grow from certain \n\t    species of trees. They possesses not only the highly desirable qualities of appleness and roundness, \n\t    but also other exotic and much sought-after properties, such as upness, highness, and in-the-airness.\n\t    ",image:"dist/assets/images/apples_tree.jpg",bullets:[["38%","34%"],["9%","28%"],["64%","25%"]],features:["Angelic roundness and appleness","Superior air-bred qualities","Tree-based apple production facility"]},4:{id:4,order:4,title:"Solitary Apples",subtitle:"Starting at $1.99",price:1.99,desc:"Apples can actually feel emotions just like animals. Right now, this apple is feeling very \n\t    self-conscious about its appearance after a recent breakup of a long-term relationship.\n\t    ",image:"dist/assets/images/apples_green.jpg",bullets:[["40%","50%"],["71%","19%"],["52%","74%"]],features:["Docile and well mannered","Raised in complete isolation","Unattractive shadows ensure self-doubt"]}};