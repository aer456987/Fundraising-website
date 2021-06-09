const projectContent = document.querySelector(".js_project_content");
const accordionContent = document.querySelector(".js_accordion_content");
const scheduleContent = document.querySelector(".js_schedule_contnet");
const sponsorContent = document.querySelector(".js_sponsor_contnet");
const messageContent = document.querySelector(".js_message_contnet");
const iconsContent = document.querySelector(".js_icons_contnet");
const buttomBtn = document.querySelector('.js_bottom_btn');


const tabDatas = {      // 介紹頁面的所有資料
  projectDatas: [       // 專案介紹
    {
      id: 0,
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/p1.jpg',
      title: '施了魔法的照片',
      content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。',
    }, {
      id: 1,
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/p2.jpg',
      title: '施了魔法的照片',
      content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。',
    },
  ],
  accordionDatas: [     // 常見問答
    {
      id: 0,
      title: '影片拍完之後可以編輯嗎？',
      content: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！',
    }, {
      id: 1,
      title: '有提供保固或維修服務嗎？',
      content: '有提供保固或維修服務嗎？',
    }, {
      id: 2,
      title: '補充包底片要去哪裡購買呢？',
      content: '補充包底片要去哪裡購買呢？',
    }, {
      id: 3,
      title: '印出來的拍立得照片需要充電嗎？',
      content: '印出來的拍立得照片需要充電嗎？',
    }, {
      id: 4,
      title: '運送方式及付款方式有哪些呢？',
      content: '運送方式及付款方式有哪些呢？',
    }, {
      id: 5,
      title: '退換貨方式及規則',
      content: '退換貨方式及規則',
    },
  ],
  scheduleDatas: [      // 目前進度
    {
      id: 0,
      date: '2021-6-20',
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/news01.jpg',
      title: '高雄體驗會｜免費參加送帆布袋',
      content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    }, {
      id: 1,
      date: '2021-6-20',
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/news02.jpg',
      title: '高雄體驗會｜免費參加送帆布袋',
      content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    }, {
      id: 2,
      date: '2021-6-20',
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/news03.jpg',
      title: '高雄體驗會｜免費參加送帆布袋',
      content: '大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！',
    },
  ],
  messages: [           // 留言
    {
      id: 0,
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/user_img01.jpg',
      userName: '廖小杰',
      date: '2020年5月22日 11:32',
      message: '晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！',
      reply: '你要嘛起床的時候開燈，要嘛給我們更多錢開發阿',
    }, {
      id: 1,
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg',
      userName: '卡阿伯',
      date: '2020年5月22日 11:32',
      message: '希望有更多花色可以選擇！我女兒最近喜歡綠色',
      reply: '',
    }, {
      id: 2,
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg',
      userName: '賈師',
      date: '2020年5月22日 11:32',
      message: '可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣',
      reply: '',
    }, {
      id: 3,
      imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg',
      userName: '俊俊',
      date: '2020年5月22日 11:32',
      message: 'test123 看一下我是不是真的可以留言',
      reply: '',
    }
  ],
};
const sponsorDatas = [  // 贊助方案
  {
    id: 0,
    imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg',
    date: '2 days 20:05:20',
    mark: '限時優惠',
    title: '買一送一，只有兩百組別錯過',
    price: 1600,
    sponsorNum: 88,
    num: 200,
    content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
  }, {
    id: 1,
    imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg',
    date: '2 days 20:05:20',
    mark: '限時優惠',
    title: '買一送一，只有兩百組別錯過',
    price: 1600,
    sponsorNum: 88,
    num: 200,
    content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
  }, {
    id: 2,
    imgUrl: 'https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg',
    date: '2 days 20:05:20',
    mark: '限時優惠',
    title: '買一送一，只有兩百組別錯過',
    price: 1600,
    sponsorNum: 88,
    num: 200,
    content: '受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。',
  },
];
const iconDatas = [     // icon 資料
  {
    imgUrl: 'https://ecjia.com.tw/demo/bs5_homework_0526/assets/icon_good01.svg',
    title: '認證標章',
  }, {
    imgUrl: 'https://ecjia.com.tw/demo/bs5_homework_0526/assets/icon_good02.svg',
    title: '品質保證',
  }, {
    imgUrl: 'https://ecjia.com.tw/demo/bs5_homework_0526/assets/icon_good03.svg',
    title: '原生創意',
  }, {
    imgUrl: 'https://ecjia.com.tw/demo/bs5_homework_0526/assets/icon_good04.svg',
    title: '人氣王',
  },
];

// 開啟登入畫面 Modal
function openLoginModal() {
  const loginModal = document.querySelector('#loginModal');
  const myModal = new bootstrap.Modal(loginModal);
  myModal.show();
}

// 頁籤切換
function ChangeTabs() {
  const allTabBtn = document.querySelectorAll('#myTab button');
  const triggerTabList = [].slice.call(allTabBtn);

  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl);
    triggerEl.addEventListener('click', function (e) {
      const tabValue = e.target.value;
      e.preventDefault();
      tabTrigger.show();
      judgmentValue(tabValue);
    });
  });
}

// tab 判斷
function judgmentValue(tabValue) {
  if(tabValue === '專案介紹'){
    renderPage('projectDatas', projectStr, projectContent);
  }else if(tabValue === '常見問答'){
    renderPage('accordionDatas', accordionStr, accordionContent);
  }else if(tabValue === '目前進度'){
    renderPage('scheduleDatas', scheduleStr, scheduleContent);
  }else if(tabValue === '留言'){
    renderPage('messages', messageStr, messageContent);
  }
}

// 頁面渲染函式 ('data資料', 字串函式, 渲染的位置)
function renderPage(obj, txtFn, contentName){
  let str = '';
  tabDatas[obj].forEach((item, i) => {
    str += txtFn(item, i);
  })
  contentName.innerHTML = str;  
}
// 渲染 專案介紹(HTML結構)
function projectStr(item){
  return `
    <li class="pt-md-3 pt-sm-0 pb-sm-2 pb-mb-2">
      <img src="${item.imgUrl}" alt="${item.title}的專案圖片" class="w-100 pb-3">
      <h3 class="mt-2 mb-1 ps-3 border-start border-4 border-primary fw-bold">${item.title}</h3>
      <p class="mt-1">${item.content}</p>
    </li>
  `;
}
// 渲染 常見問答(HTML結構)
function accordionStr(item, i){
  return `
    <li class="accordion-item fs-6 fw-normal mb-3 border rounded-2">
      <h2 class="accordion-header" id="question_0${i}">
        <button 
          class="accordion-button collapsed fs-6 fw-bold" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#question_${i+1}" 
          aria-expanded="false" 
          aria-controls="question_${i+1}">
          <span class="text-light-gary-500 bg-primary p-1 me-3 fw-bold">Q${i+1}</span>
            ${item.title}
        </button>
      </h2>
      <div 
        id="question_${i+1}" 
        class="accordion-collapse collapse rounded-2" 
        aria-labelledby="question_0${i}" 
        data-bs-parent="#accordion">
        <p class="accordion-body p-3 ms-5 text-gary">
          ${item.content}
        </p>
      </div>
    </li>`;
}
// 渲染 目前進度 (HTML結構)
function scheduleStr(item) {
  return `
    <li class="card mb-3">
      <div class="row g-0">
        <div class="col-4">
          <img class="w-100" src="${item.imgUrl}" alt="${item.title}的進度圖片">
        </div>
        <div class="col-8">
          <div class="card-body h-100 d-flex flex-column justify-content-between">
            <h3 class="card-title fs-5 fw-bold m-0">${item.title}</h3>
            <p class="card-text fs-6 text-gary fw-normal">
              ${item.date}
              <span class="mt-2 mb-3 d-none d-md-block">
                ${item.content}
              </span>
            </p>
            <a href="#" class="card-text text-secondary fw-bold">MORE</a>
          </div>
        </div>
      </div>
    </li>`;
}
// 渲染 留言 (HTML結構)
function messageStr(item) {
  let returnStr = '';

  returnStr += `<li class="card mb-3">
  <div class="card-body">
    <div class="d-flex align-items-center mb-3">
      <img src="${item.imgUrl}" alt="留言者頭像">
      <div class="ms-3">
        <h3 class="card-title fw-bold mb-1">${item.userName}</h3>
        <p class="card-text fs-6 fw-normal text-gary">
          ${item.date}
        </p>
      </div>
    </div>
    <p class="text-black">
      ${item.message}
    </p>`;

  if(item.reply === '' ) {
    returnStr += `</div></li>`;
  }else{
    returnStr += `
      <div class="bg-light p-3">
        <h4 class="card-text mb-1 fs-6 text-secondary">
          提案者回覆
        </h4>
        <p class="text-black">${item.reply}</p>
      </div>
    </div></li>`;
  }
  return returnStr;
}

// 渲染 側欄專案
function renderSponsorContent(){
  let str = '';
  sponsorDatas.forEach((item, i) => {
    str += sponsorStr(item, i);
  })
  sponsorContent.innerHTML = str;
}
// 渲染 側欄專案 (HTML結構)
function sponsorStr(item){
  return `
    <li class="card border-0 mb-3">
      <img src="${item.imgUrl}" alt="${item.title}的募資圖片" class="w-100">

      <div class="card-body pt-2 border rounded-bottom">
        <div class="border-bottom d-flex justify-content-between pb-2 mb-2">
          <span class="fs-6 text-light-gary-500 fw-normal">${item.mark}</span>
          <span class="fs-6 text-light-gary-500 fw-normal">${item.date}</span>
        </div>

        <h2 class="fs-4 fw-bold">${item.title}</h2>
        <p class="fs-4 fw-bold mb-2">NT$ ${item.price}</p>

        <span class="badge bg_gary_100 text-gary">已被贊助${item.sponsorNum}次</span>
        <span class="badge bg-gary mb-2">
          限量 <span class="text-primary">${item.num}</span> 個
        </span><br>

        <p class="mb-3 fw-normal text-gary">${item.content}</p>

        <a href="#sponsorForm" class="btn btn-primary main_btn rounded-pill w-100 fw-bold">
          贊助此專案
        </a>
      </div>
    </li>`;
}

// 渲染首頁icon
function renderIconContent(){
  let str = '';
  iconDatas.forEach((item, i) => {
    str += iconStr(item, i);
  })
  iconsContent.innerHTML = str;
}
// 渲染首頁icon (HTML結構)
function iconStr(item){
  return `
  <li class="me-4">
    <img 
      src="${item.imgUrl}" 
      alt="${item.title}icon" 
      data-bs-toggle="tooltip" 
      data-bs-placement="top" 
      title="${item.title}">
    <smail class="text-light-gary-500 small d-md-none">${item.title}</smail>
  </li>`;
}

// 驗證訂單欄位
function verificationOrder() {
  const forms = document.querySelectorAll('.js_needs_validation')
  Array.prototype.slice.call(forms)
    .forEach(form => {
      form.addEventListener('submit', e => {
        if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
}
// 載入工具提示框(icon用)
function tooltipTriggers() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
}

function init() {
  const loginBtn = document.querySelector('.js_loginBtn');
  loginBtn.addEventListener('click', openLoginModal);

  renderPage('projectDatas', projectStr, projectContent);
  renderSponsorContent();
  renderIconContent()

  ChangeTabs();
  tooltipTriggers();
  verificationOrder();
}
init();