// A列を変更した際、同じ行のB列に日付を入力する
function onEdit(e) {
  var editedColumn = 1; // A列を指定。編集を検知したいセル
  var keyWord = '完了'; // 検知したい言葉
  var targetColumn = 2; // B列を指定。入力するセル

  var range = e.range;
  var sheet = range.getSheet();
  var row = range.getRow();
  var dateCell = sheet.getRange(row, targetColumn);

  // 編集されたセルがA列ではない場合
  if (range.getColumn() !== editedColumn) return;
  // 入力するセルが空ではない場合
  if (dateCell.getValue() !== '') return;
  // 編集されたセルの値が完了ではない場合
  if (range.getValue() !== keyWord) return;

  // 日付を入力
  var date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "M/d");
  dateCell.setValue(date);
}
