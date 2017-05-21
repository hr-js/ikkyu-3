$(function(){
	const $tbody = $('#tbody');
	let html = '';
	let data = null;

	// 非同期通信
	$('#ajaxBtn').on('click', function(){
		$.ajax({
			method : 'GET',
			url : 'data.json',
			dataType : 'json',
			timeout : 5000,
		}).done(function(arr_data){
			data = arr_data;
		}).fail(function(){
			alert('ajax error!');
		});
	});

	// テーブルに反映
	data.forEach(function(value, index, array){
		html += createTRow(value);
	});
	$tbody.append(html);
});
