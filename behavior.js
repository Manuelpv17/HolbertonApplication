document.addEventListener("DOMContentLoaded", function (event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");
    if (thumbnailElement != null) {
        thumbnailElement.addEventListener("click", function () {

            if (thumbnailElement.className == "") {
                thumbnailElement.className = "small";
            } else {
                thumbnailElement.className = "";
            }
        });
    }
});

