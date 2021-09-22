// document.querySelector('#image').click(function() {


//     if (document.getElementById('image').attr("src") === '/pics/pic1.jpg') {
//         document.getElementById('image').attr('src') = "/pics/pic2.jpg";
//     }

//     else if (document.getElementById('image').src === "/pics/pic2.jpg") {
//         document.getElementById('image').src = "/pics/pic3.jpg";
//     }

//     else if (document.getElementById('image').src === "/pics/pic3.jpg") {
//         document.getElementById('image').src = "/pics/pic4.jpg";
//     }

//     else {
//         document.getElementById('image').src = "/pics/pic1.jpg";
//     }

// })

function toggle() {

    var current = document.getElementById('toggle');
  
    if (current.src.match("pics/pic1.jpg")) {
      current.src = "pics/pic2.jpg";
    }
  
    else if (current.src.match("pics/pic2.jpg")){
      current.src = "pics/pic3.jpg";
    }
  
    else if (current.src.match("pics/pic3.jpg")){
      current.src = "pics/pic4.jpg";
    }
  
    else if (current.src.match("pics/pic4.jpg")){
      current.src = "pics/pic1.jpg";
    }
  }