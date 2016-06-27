'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// present searchbar modal
$('.searchbar>input').on('awesomplete-selectcomplete', function (e) {
	var value = e.target.value;
	var modal = $('#search-detail');

	modal.find('.modal-title').text(value);

	modal.modal();
});

// update and present product modal
$('.product').on('click', function (e) {
	var index = e.currentTarget.dataset.product;
	var product = products[index];
	var modal = $('#product-detail');

	modal.find('.modal-title').text(product.title);
	modal.find('.modal-subtitle').text(product.subtitle);
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
		title: 'Product Title 1',
		subtitle: 'Staring at $500',
		price: 500,
		desc: 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
		image: '/dist/assets/images/cereal_b.jpg',
		bullets: [['31%', '47%'], ['73%', '60%'], ['49%', '81%']]
	},
	2: {
		id: 2,
		order: 2,
		title: 'Product Title 2',
		subtitle: 'Staring at $1900',
		price: 1900,
		desc: 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
		image: '/dist/assets/images/flower_b.jpg',
		bullets: [['43%', '32%'], ['73%', '62%'], ['29%', '78%']]
	},
	3: {
		id: 3,
		order: 3,
		title: 'Product Title 3',
		subtitle: 'Staring at $2730',
		price: 2730,
		desc: 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
		image: '/dist/assets/images/machine_b.jpg',
		bullets: [['48%', '48%'], ['9%', '28%'], ['25%', '31%']]
	},
	4: {
		id: 4,
		order: 4,
		title: 'Product Title 4',
		subtitle: 'Staring at $731',
		price: 731,
		desc: 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
		image: '/dist/assets/images/candy_b.jpg',
		bullets: [['40%', '50%'], ['71%', '19%'], ['75%', '64%']]
	}
};