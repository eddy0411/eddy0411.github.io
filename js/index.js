function Hello() {
    var name = $("#name").val()
    var age = $("#age").val()
    if ($("#one-checkbox").prop("checked")) { // 回傳布林值
        alert("你是" + $("#one-checkbox").val());
    }
    alert("Hello, " + age + " 歲的 " + name + " 你好 ~")
}
$("#Hello").on("click", Hello)