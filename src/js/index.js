const tabs = document.querySelectorAll('.product__btn');
const nav = document.querySelector('.product__buttons');
const tabContent = document.querySelectorAll('.product__card');

const openTab = () => {
  nav.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.product__btn');

    if (!tabBtn) return;

    [...tabs].forEach((item) =>
      item === tabBtn
        ? item.classList.add('product__btn_active')
        : item.classList.remove('product__btn_active'),
    );

    tabContent.forEach((item) =>
      item.id === tabBtn.dataset.tab
        ? item.classList.add('product__card_active')
        : item.classList.remove('product__card_active'),
    );
  });
};

openTab();
