//----------------------------------------
// ▼resultsへのページ遷移
//----------------------------------------
$(document).ready(function () {
  $("#searchButton").click(function () {
    const searchQuery = $("#searchInput").val();
    if (searchQuery !== "") {
      window.location.href = "results.html?query=" + encodeURIComponent(searchQuery);
    }
  });
});

//----------------------------------------
// ▼inputの初期値を自動クリア
//----------------------------------------
$(document).ready(function () {
  // ドキュメントが読み込まれたときに実行される関数
  $('input[type="text"]').each(function () {
    // type属性が"text"のすべての入力要素を選択し、それぞれに対して以下の処理を実行する
    let default_value = this.placeholder;
    // 現在の入力要素のプレースホルダーの初期値を保存する

    $(this).focus(function () {
      // フォーカスが当てられたときに実行される関数を定義する
      if (this.placeholder == default_value) {
        // 現在のプレースホルダーの値が初期値と一致しているかを確認する
        this.placeholder = "";
        // 一致していれば、プレースホルダーの値を空にする
      }
    });

    $(this).blur(function () {
      // フォーカスが外れたときに実行される関数を定義する
      if (this.placeholder == "") {
        // プレースホルダーの値が空かどうかを確認する
        this.placeholder = default_value;
        // 空であれば、プレースホルダーの値を初期値に戻す
      }
    });
  });
});
