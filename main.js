var image = document.createElement('img');
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/1990_240sx_Quarter_View.JPG/420px-1990_240sx_Quarter_View.JPG';
image.onclick = function() {
  window.location = './s13.html';
};
document.body.appendChild(image);

var image2 = document.createElement('img');
image2.src = 'https://bringatrailer.com/wp-content/uploads/2019/12/15761895451e728d9Toyota-AE86-For-Sale-Results-Model-Make-Page-Bring-a-Trailer.jpg';
image2.onclick = function() {
  window.location = './ae86.html';
};
document.body.appendChild(image2);
var image3 = document.createElement('img');
image3.src = 'https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b2e4cd0c91_-_1995_miata_mazda-lg.jpg?crop=0.925xw:0.824xh;0.0561xw,0.173xh&resize=640:*';
image3.onclick = function() {
  window.location = './miata.html';
};
document.body.appendChild(image3);

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].width = 300;
  images[i].height = 300;
  images[i].style.padding = '10px';
  images[i].style.margin = '0 auto';
  images[i].style.display = 'block';
}
