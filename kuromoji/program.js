
createNavbar("テキスト処理");

var token;

kuromoji.builder({ dicPath: "../node_modules/kuromoji/dict/" }).build(function (err, tokenizer) {
  // tokenizer is ready
  token = tokenizer;
  document.querySelector("#textStart").addEventListener("click", function () {
    var path = tokenizer.tokenize(document.querySelector("#textForm").value);
    console.log(path[0]);
    document.querySelector("#textOutTable tbody").innerHTML = path.map(k => {
      return `<tr>
      <td>${k.surface_form}</td>
      <td>${k.pos}</td>
      <td>${k.conjugated_type}</td>
      <td>${k.conjugated_form}</td>
      <td>${k.basic_form}</td>
      <td>${k.reading}</td>
      <td>${k.pronunciation}</td>
      </tr>`;
    }).join("")
  });
});