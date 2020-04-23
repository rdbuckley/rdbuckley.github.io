function showlinkBazel() {
$(".footer-bazel").remove(); 
var link = $('a.Article-tag').filter(function () {
    return $(this).text() == "bazel";
});
if (link.length) {
$(".Article-footer").prepend("<div class=footer-bazel style=float:left>Howdy, Bazel!</div>");
} 
}
