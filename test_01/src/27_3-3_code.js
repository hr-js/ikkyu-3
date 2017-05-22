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
