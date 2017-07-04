"use script";

var sizeList = [];

rendering(sizeList);

$('.inp-add').on('keypress', function (event) {
	if (event.keyCode == 13) {
		addToJson();
		$('.inp-add').val('');
	}
});

$('.btn-add').on('click', function (){
	addToJson();
	$('.inp-add').val('');
});


function addToJson () {
	var str = $('.inp-add').val().trim();
	if ((str == 0) || (str == '') || (str == ' ')) return;

	var pos = str.indexOf(' ');
	if (pos == -1) {
		sizeList.push({"size":str, "count":"1"});

	} else {
		var size = str.slice(0, pos);
		var count = str.slice(pos + 1).trim();

		sizeList.push({"size":size, "count":count});
	}
	
	rendering(sizeList);
}

function rendering(sizeList) {
	$('.details').empty();
	$('.details').append('<tr><th>size</th><th>count</th></tr>');

	sizeList.forEach(function (onceDetail) {
		var contentWrap = '<tr><td>'+onceDetail.size+'</td>'+'<td>'+onceDetail.count+'</td></tr>';
		$('.details'). append(contentWrap);
	});
}