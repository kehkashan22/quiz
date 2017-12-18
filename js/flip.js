$(function() {
  var tile = $(".flex-container .tile");
  var list = $(tile).toArray();
  console.log(list);
  var length = list.length;
  var opened = [];
  
  var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

  $("#reveal").click(function() {
    
    var randnum = Math.floor(Math.random() * length);
    var i = 0;
    while (i <= list.length) {
      //   console.log("randnum", randnum);
      //   console.log("opened", opened);
      //   console.log("find", $.inArray(randnum, opened));
      if ($.inArray(randnum, opened) === -1) {
        opened.push(randnum);
        break;
      }
      randnum = Math.floor(Math.random() * length);
      i++;
    }
    var randitem = list[randnum];
    if (randitem.className !== "tile activeTile") {
      $(randitem).addClass("activeTile");
    }
    console.log(randitem.className);
  });

  $("#reveal-all").click(function() {
    list.forEach(function(element) {
      $(element).addClass("activeTile");
    });
  });

  $("#reset").click(function(e) {
    // e.preventDefault();
    opened = [];
    list.forEach(function(element) {
      $(element).removeClass("activeTile");
    });
    setTimeout(function() {
      var activeImage = $(".imgContainer").children("img.active");
      activeImage.removeClass("active");
      console.log(activeImage.next().length);
      console.log(activeImage.next());
      if (activeImage.next().length > 0) {
        activeImage.next().addClass("active");
      }else{
          $('.imgContainer').children('img:first-child').addClass('active');
      }
    }, 1000);
  });
});
