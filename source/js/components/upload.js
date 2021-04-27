(function() {
  const uploads = document.querySelectorAll('.upload');

  if (!uploads[0]) {
    return;
  }

  function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
  };

  function highlight(e) {
    e.currentTarget.classList.add('highlight');
  };

  function unhighlight(e) {
    e.currentTarget.classList.remove('highlight');
  };

  function fillResult(input) {
    const $name = $(input).parents('.upload__input-wrap').find('.upload__name');
    $name.text(input.files[0].name);
  };

  function addLoader(input) {
    const $result = $(input).parents('.upload__input-wrap').find('.upload__result');
    $result.addClass('loader');
  };

  function removeLoader(input) {
    const $result = $(input).parents('.upload__input-wrap').find('.upload__result');
    $result.removeClass('loader');
  };

  const readUrl = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onloadstart = function (e) {
        //progress.classList.add('show');
        addLoader(input);
        fillResult(input);
      }

      reader.onprogress = function (e) {
      }

      reader.onload = function (e) {
        // fileImg.setAttribute('src', e.target.result);
        // fileName.textContent = input.files[0].name;
        // !fileResult.classList.contains('show') && fileResult.classList.add('show');

        // progress.classList.remove('show');
        // bar.style.width = 0;
        removeLoader(input);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  const onFileChange = (e) => {
    readUrl(e.currentTarget);

    console.log(e.currentTarget.files);
  };

  function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    const target = e.currentTarget;
    const input = target.querySelector('input');

    if (input.files && input.files[0]) {
      input.value = '';

      if(!/safari/i.test(navigator.userAgent)){
        input.type = '';
        input.type = 'file';
      }

      // fileResult.classList.remove('show');
      // fileName.textContent = '';
      // fileImg.removeAttribute('src');
    }

    input.files = files;
    onFileChange();

    //handleFiles(files)
  };

  function addEventListeners(block) {
    const fileLabel = block.querySelector('.upload__label');
    const fileInput = block.querySelector('.upload__input');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      fileLabel.addEventListener(eventName, preventDefaults, false)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      fileLabel.addEventListener(eventName, highlight, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileLabel.addEventListener(eventName, unhighlight, false)
    })

    fileLabel.addEventListener('drop', handleDrop, false);
    fileInput.addEventListener('change', onFileChange);
  }

  function removeEventListeners(block) {
    const fileLabel = block.querySelector('.upload__label');
    const fileInput = block.querySelector('.upload__input');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      fileLabel.removeEventListener(eventName, preventDefaults, false)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      fileLabel.removeEventListener(eventName, highlight, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileLabel.removeEventListener(eventName, unhighlight, false)
    })

    fileLabel.removeEventListener('drop', handleDrop, false);
    fileInput.removeEventListener('change', onFileChange);
  }




  uploads.forEach(function(upload) {
    const block = upload.querySelector('.upload__input-wrap');

    let files = 0;

    addEventListeners(block);

    // // Сбрасываем стандартные события при перетаскивании файла

    // ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    //   fileLabel.addEventListener(eventName, preventDefaults, false)
    // });

    // // Добавляем стили при перетаскивании файла над нужной областью

    // ['dragenter', 'dragover'].forEach(eventName => {
    //   fileLabel.addEventListener(eventName, highlight, false)
    // });

    // ['dragleave', 'drop'].forEach(eventName => {
    //   fileLabel.addEventListener(eventName, unhighlight, false)
    // })

    // //


    // fileLabel.addEventListener('drop', handleDrop, false);
    // fileInput.addEventListener('change', onFileChange);
  });



})();
