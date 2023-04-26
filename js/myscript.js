/**
 * Bad practice to run jQuery before the page has loaded
 * The function below will only run the code once the document is ready
 */

$(document).ready(function() {
    $("h2").addClass("underline");
    $("ul").addClass("border");
});