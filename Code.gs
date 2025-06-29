// File: Code.gs
function doGet() {
  // Mengembalikan konten dari file HTML Anda sebagai teks biasa.
  return ContentService.createTextOutput(HtmlService.createHtmlOutputFromFile('Index').getContent())
    .setMimeType(ContentService.MimeType.TEXT);
}

// Catatan: Pastikan Anda memiliki file HTML bernama 'Index.html' di proyek Apps Script Anda.
