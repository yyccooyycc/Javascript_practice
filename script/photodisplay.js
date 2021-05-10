array1 = ["Homework_photos/IMG_0765.jpg",
"Homework_photos/IMG_0785.jpg",
"Homework_photos/IMG_0815.jpg",
"Homework_photos/IMG_0766.jpg",
"Homework_photos/IMG_0823.jpg"
];
var array1_length = array1.length;
var i = 0;
function sequentialImg() {
  
  document.getElementById("my_div").src = array1[i] ;
  // console.log(array1[i])

  i++;
  if (i >= array1_length) i = 0;
}

setInterval(sequentialImg, 1000);
