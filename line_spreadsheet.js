function doPost(e) {
  // 投稿されたメッセージを取得
  var userMessage = JSON.parse(e.postData.contents).events[0].message.text;

  // スプレッドシートへ保存=======================================
  var response = e.postData.getDataAsString();
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1i81kmM7VB7odIztj6q1nTsmCmtzHZ1VB736lvxaRvHo/edit#gid=0";
  var sheetName = "練習";
  var spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
  var sheet = spreadsheet.getSheetByName(sheetName);
 
  // 空白・タブ・改行で区切り配列に変換  
  var arr = userMessage.split(/\s/);
 
  // 配列の先頭に日時を代入
  arr.unshift(new Date());
 
  // セルの最下部に配列を転記
  sheet.appendRow(arr);
  // =======================================
 
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
 
}