const queryString = window.location.search;
const searchQuery = decodeURIComponent(queryString.split("=")[1]);

//-----------------------------------------------------------------
// ▼ Google Books APIを使用して書籍を検索し、結果を表示
//-----------------------------------------------------------------

//----------------------------------------
// ▼GoogleBooksAPIに検索ワードを追加
//----------------------------------------

let url = "https://www.googleapis.com/books/v1/volumes?q=" + searchQuery;
console.log(url);

//-------------------------------------------
// ▼getJSONを使ってJSONデータを読み込み
// ▼$.JSONを使うとparse(変換)作業をしなくていい!!
//-------------------------------------------
$.getJSON(url, function (response) {
  displayResults(response.items);
  console.log(response.items);
});

function displayResults(books) {
  //----------------------------------
  // ▼検索結果を表示する要素を一旦空にする
  //----------------------------------
  $("#results").empty();

  //-------------------------
  // ▼書籍が見つかった場合の処理
  //-------------------------
  if (books.length > 0) {
    for (let i = 0; i < books.length; i++) {
      //-------------------------
      // ▼booksの各種情報を表示
      //-------------------------
      let book = books[i].volumeInfo;
      let title = book.title;
      let thumbnail = book.imageLinks.thumbnail;
      let link = book.infoLink;
      let description = book.description;
      let publisher = book.publisher;
      let previewLink = book.previewLink;

      console.log(books[i]);

      $("#results").append(
        `<li>
        <div class="results_img_outer"><a href="${link}"><img src="${thumbnail}" alt=""></a></div>
        <br>
        <div class="results_title"><a href="${link}">${title}</a></div>
        <div class="results_caption"><p>${description}</p></div>
        <div class="results_publisher">出版社: ${publisher}</div>
        <div class="preview"><a href="${previewLink}">試し読み>></a></div>
        </li>`
      );
    }
  } else {
    //--------------------------
    // ▼書籍が見つからなかった場'
    //--------------------------
    $("#results").append('<div id = "nothing"><p>関連書籍が見つかりませんでした。</p></div>');
  }
}

//------------------------
// ▼検索したワードを表示
//------------------------
$("#searchResults").text("検索ワード: " + searchQuery);

//---------------------------
// ▼検索ボタンが押された際の処理
//---------------------------

$("#searchButton").click(function () {
  const searchQuery = $("#searchInput").val();
  if (searchQuery !== "") {
    window.location.href = "results.html?query=" + encodeURIComponent(searchQuery);
  }
});
