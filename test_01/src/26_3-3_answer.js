/**
 * 解答例
 * データ取得処理が非同期なため、テーブルに反映する処理が、データ取得処理の完了前に行われてしまう可能性がある。
 * doneの中でtbodyの更新処理を行えばよい。
 */
$(function(){
	const $tbody = $('#tbody');
	let html = '';

	// 正解例
	$('#ajaxBtn').on('click', function(){
		$.ajax({
			method : 'GET',
			url : 'data.json',
			dataType : 'json',
			timeout : 5000,
		}).done(function(arr_data){
			html = '';
			$tbody.html("");
			arr_data.forEach(function(value, index, array){
				html += createTRow(value);
			});
			$tbody.append(html);
		}).fail(function(){
			alert('ajax error!');
		});
	});

});


// １行分のレコードhtml文字列を作成
function createTRow(rowData){
	return `<tr>` +
		`<td>${rowData.title}</td>` +
		`<td>${rowData.author}</td>` +
		`<td>${rowData.price}</td>` +
		`<td>${rowData.isbn}</td>` +
		`<td>${rowData.publish}</td>` +
		`<td>${rowData.published}</td>` +
		`</tr>`;
}
