'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// initialize
$(document).ready(function () {

	// init carousel
	$('.spinner').slick({
		autoplay: true,
		dots: true,
		arrows: true
	});
});

// present searchbar modal
$('.searchbar>input').on('awesomplete-selectcomplete', function (e) {
	var value = e.target.value;
	var modal = $('#search-detail');

	modal.find('.modal-title').text(value);
	modal.find('.state').text(value);

	modal.modal();
});

// update and present product modal
$('.product').on('click', function (e) {
	var index = e.currentTarget.dataset.product;
	var product = products[index];
	var modal = $('#product-detail');

	modal.find('.modal-title').text(product.title);
	modal.find('.modal-subtitle').text(product.subtitle);
	modal.find('#feature1').text(product.features[0]);
	modal.find('#feature2').text(product.features[1]);
	modal.find('#feature3').text(product.features[2]);
	modal.find('.text').html(product.desc);
	modal.find('.image>img').attr('src', product.image);

	generateBullets(modal, product);

	handleHoverEvents();

	modal.modal();
});

// filter products
$('.filter>select').on('change', function (e) {
	var select = $(e.currentTarget);

	var _select$find$val$spli = select.find('option:selected').val().split('-');

	var _select$find$val$spli2 = _slicedToArray(_select$find$val$spli, 2);

	var min = _select$find$val$spli2[0];
	var max = _select$find$val$spli2[1];

	showProductRange(min, max);
});

// show filtered products
function showProductRange(min, max) {
	var columns = $('.product-column');
	columns.each(function (i, col) {
		var column = $(col);
		var price = column.find('.product').data('price');

		price >= min && price <= max ? column.show() : column.hide();
	});
}

// generate feature bullets
function generateBullets(modal, product) {
	var bullets = modal.find('.bullets');
	bullets.empty();

	var i = 1;
	product.bullets.forEach(function (bullet) {

		var newBullet = $(document.createElement("div"));
		newBullet.addClass('bullet' + i);
		newBullet.css('left', bullet[0]).css('top', bullet[1]);

		bullets.prepend(newBullet);

		i++;
	});
}

// bullet hover handling
function handleHoverEvents() {
	var bullets = ['.bullet1', '.bullet2', '.bullet3'];

	bullets.forEach(function (bullet) {
		$(bullet).hover(function () {
			$(bullet).addClass('bullet-hover');
		}, function () {
			$(bullet).removeClass('bullet-hover');
		});
	});
}

var products = {
	1: {
		id: 1,
		order: 1,
		title: 'Elevated Apples',
		subtitle: 'Starting at $4.49',
		price: 4.49,
		desc: 'These apples have been carefully adjusted by our apple experts to extend their distance \n\t    from the ground. Books are occasionally applied to increase the mental nutritional content available.\n\t    ',
		image: 'dist/assets/images/apples_book.jpg',
		bullets: [['31%', '47%'], ['73%', '60%'], ['49%', '81%']],
		features: ['Heightened apple elevation', 'Calming atmosphere', 'Cutting-edge elevation apparatus']
	},
	2: {
		id: 2,
		order: 2,
		title: 'Gang Apples',
		subtitle: 'Starting at $7.99',
		price: 7.99,
		desc: 'Although they may appear menacing at first, these expertly trained apples have been coached by \n\t    some of the finest stage directors in the world to perfect their acting skills. \n\t    <br /> <br />\n\t    Not only are they trained in ballet, modern jazz, and ballroom dance techniques, these apples possess \n\t    extensive knowledge of method acting exercises.\n\t    ',
		image: 'dist/assets/images/apples_bunch.jpg',
		bullets: [['43%', '32%'], ['73%', '62%'], ['29%', '78%']],
		features: ['Shined and polished by professional apple rubbers', 'Exceptional physique', 'Willingness to self-sacrifice to aid a superior apple']
	},
	3: {
		id: 3,
		order: 3,
		title: 'Tree Apples',
		subtitle: 'Starting at $2.49',
		price: 2.49,
		desc: 'Often mistaken for angels, this patented apple variety has been engineered to grow from certain \n\t    species of trees. They possesses not only the highly desirable qualities of appleness and roundness, \n\t    but also other exotic and much sought-after properties, such as upness, highness, and in-the-airness.\n\t    ',
		image: 'dist/assets/images/apples_tree.jpg',
		bullets: [['38%', '34%'], ['9%', '28%'], ['64%', '25%']],
		features: ['Angelic roundness and appleness', 'Superior air-bred qualities', 'Tree-based apple production facility']
	},
	4: {
		id: 4,
		order: 4,
		title: 'Solitary Apples',
		subtitle: 'Starting at $1.99',
		price: 1.99,
		desc: 'Apples can actually feel emotions just like animals. Right now, this apple is feeling very \n\t    self-conscious about its appearance after a recent breakup of a long-term relationship.\n\t    ',
		image: 'dist/assets/images/apples_green.jpg',
		bullets: [['40%', '50%'], ['71%', '19%'], ['52%', '74%']],
		features: ['Docile and well mannered', 'Raised in complete isolation', 'Unattractive shadows ensure self-doubt']
	}
};