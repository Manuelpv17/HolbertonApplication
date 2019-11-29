document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        }else{
            thumbnailElement.className = "";
        }
      });

      var disqus_config = function () {
        this.page.url = http://107.20.128.217/index.html;  
        this.page.identifier = Home;
    };

    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://self-driving-cars.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
        

});