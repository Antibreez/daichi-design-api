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

  function getResultBlock(input) {
    const $idx = $(input).parent().attr('data-input');
    return $(input).parents('.upload').find("[data-result='" + $idx +"']");
  };

  function fillResult(input) {
    const $result = getResultBlock(input);
    const $name = $result.find('.upload__name');
    $name.text(input.files[0].name);
  };

  function showResult(input) {
    const $result = getResultBlock(input);
    $result.addClass('show');
  };

  function hideResult(input) {
    const $result = getResultBlock(input);
    $result.removeClass('show');
  };

  function showLabel(input) {
    const $label = $(input).parent();
    $label.removeClass('hidden');
  };

  function hideLabel(input) {
    const $label = $(input).parent();
    $label.addClass('hidden');
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
        showResult(input);
        hideLabel(input);
      };

      reader.onprogress = function (e) {
      }

      reader.onload = function (e) {
        // fileImg.setAttribute('src', e.target.result);
        // fileName.textContent = input.files[0].name;
        // !fileResult.classList.contains('show') && fileResult.classList.add('show');

        // progress.classList.remove('show');
        // bar.style.width = 0;
        removeLoader(input);

        const $result = getResultBlock(input);
        const $resultWrap = $result.parent();
        const $newResult = $result.clone(true, true);
        $newResult.removeClass('show');
        $newResult.attr('data-result', '1');
        $resultWrap.prepend($newResult);

        const $labelWrap = $(input).parent().parent();
        const $label = $(input).parent();
        const $newLabel = $label.clone(true, true);
        $newLabel.removeClass('hidden');
        $newLabel.attr('data-input', '1');
        $labelWrap.prepend($newLabel);
        $newLabel.children('input')[0].addEventListener('change', onFileChange);



        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          $newLabel[0].addEventListener(eventName, preventDefaults, false)
        });

        ['dragenter', 'dragover'].forEach(eventName => {
          $newLabel[0].addEventListener(eventName, highlight, false)
        });

        ['dragleave', 'drop'].forEach(eventName => {
          $newLabel[0].addEventListener(eventName, unhighlight, false)
        });
        $newLabel[0].addEventListener('drop', handleDrop, false);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  const onFileChange = (e) => {
    readUrl(e.currentTarget);
    console.log(e.currentTarget);
  };

  function onFileDrop(input) {
    readUrl(input);
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
    onFileDrop(input);

    //handleFiles(files)
  };

  function onFileClear(e) {
    const $target = e.currentTarget;
    const $idx = $target.parents()
  }

  function addEventListeners(block, idx) {
    const fileLabel = $(block).find("[data-input='" + idx +"']")[0];
    const fileInput = $(fileLabel).find('input')[0];
    const fileResult = $(block).find("[data-result='" + idx +"']")[0];
    const fileClearBtn = $(fileResult).find('.upload__close')[0];

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

  function removeEventListeners(block, idx) {
    const fileLabel = $(block).find("[data-input='" + idx +"']")[0];
    const fileInput = $(fileLabel).find('input')[0];

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

    let num = 0;

    addEventListeners(upload, num);

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
