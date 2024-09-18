let formData = new FormData();

dropzone.addEventListener('dragenter', function(e){
  dropzone.className="hover";
}, false);

// dropzone.addEventListener('dragleave', function(){
// 	if (dropzone.classList.contains('hover')) {
// 		dropzone.classList.remove('hover');
// 	}
// })

['drop', 'dragover'].forEach(eventName => dropzone.addEventListener(eventName, function(e){
  e.preventDefault()
  // e.stopPropagation()

  let photo = e.dataTransfer.files[0];

	if (!photo) {
		return;
	}

	dropzone.classList.remove('hover');

	if(!photo.type.match('image.*')) {
		alert('Только изображения');
		dropzone.classList.remove('dropped');
		return;
	}

	inputFile.files = e.dataTransfer.files

	makePreview(photo).then(image => {
		let preview = document.querySelector('.preview');
		preview.src = image;
		preview.style.display = 'block';
		dropzone.classList.add('dropped');
	});

}, true));

function makePreview(file){
  let fr = new FileReader();
  return new Promise(resolve => {
    fr.readAsDataURL(file);
    fr.onloadend = () => resolve(fr.result)
  });
}