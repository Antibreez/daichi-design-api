(function() {
  const scrollBtn = document.querySelector('.scroll-to-top');
  const header = document.querySelector('.header');

  if (!scrollBtn) {
    return;
  }

  const getHeaderHeight = function() {
    return header.getBoundingClientRect().height + 50;
  };

  let isScrolled = window.pageYOffset > getHeaderHeight();

  const showBtn = function() {
    !scrollBtn.classList.contains('active')
    && scrollBtn.classList.add('active');
  }

  const hideHeader = function() {
    scrollBtn.classList.contains('active')
    && scrollBtn.classList.remove('active');
  }

  const onScroll = function() {
    if (!isScrolled && window.pageYOffset > getHeaderHeight()) {
      showBtn();
      isScrolled = true;
    }

    if (isScrolled && window.pageYOffset < getHeaderHeight()) {
      hideHeader();
      isScrolled = false;
    }
  }

  if (isScrolled) {
    showBtn();
  }

  document.addEventListener('scroll', onScroll);
  scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    header.scrollIntoView({block: `start`, behavior: `smooth`});
  })
})();
