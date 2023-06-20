var itemArr = [
    {'id': 't1.jpg', 'brand': '비바스튜디오', 'name': 'BLACK CAT TEE [WHITE]', 'price': '15,600'},
    {'id': 't2.jpg', 'brand': '디미트리블랙', 'name': '2WAY 나일론 메탈 후드 베스트_블랙', 'price': '49,900'},
    {'id': 't3.jpg', 'brand': '톰브라운', 'name': '옥스포드 4-바 셔츠', 'price': '398,000'},
    {'id': 't4.jpg', 'brand': '주앙옴므', 'name': 'BRUSH FADING HALF SLEEVE T-SHIRTS (BLACK)', 'price': '40,526'},
    {'id': 't5.jpg', 'brand': '어나더오피스', 'name': 'Spectrum Shirt - Jacket', 'price': '154,054'},
    {'id': 't6.jpg', 'brand': '브라운브레스', 'name': 'TAG KP TEE - BLACK', 'price': '29,776'},
    {'id': 't7.jpg', 'brand': '폴로랄프로렌', 'name': '커스텀 핏 리넨 셔츠 - 화이트', 'price': '239,000'},
    {'id': 't8.jpg', 'brand': '애프터프레이', 'name': '리프 크로쉐 하프 카디건 아보카도', 'price': '129,000'},

    {'id': 'p1.jpg', 'brand': '모드나인', 'name': '턴미온', 'price': '133,200'},
    {'id': 'p2.jpg', 'brand': '제로', 'name': ' Deep One Tuck Sweat Shorts', 'price': '32,000'},
    {'id': 'p3.jpg', 'brand': '제로플래닛', 'name': '플로리 셔링 미니 스커트', 'price': '60,800'},
    {'id': 'p4.jpg', 'brand': '어나더오피스', 'name': '산티아고 데님 팬츠', 'price': '155,000'},
    {'id': 'p5.jpg', 'brand': '인템포무드', 'name': '트리플 컷 버뮤다 팬츠', 'price': '51,000'},
    {'id': 'p6.jpg', 'brand': '낫포너드', 'name': '엑스트라 와이드 벌룬 팬츠', 'price': '65,433'},
    {'id': 'p7.jpg', 'brand': '그라미치', 'name': '루즈테이퍼드 팬츠 Natural', 'price': '117,696'},
    {'id': 'p8.jpg', 'brand': '파브레가', 'name': '카치온 페이딩 데님 팬츠', 'price': '80,229'},

    {'id': 's1.jpg', 'brand': '살로몬', 'name': 'xt-6 화이트 루나 락', 'price': '260,000'},
    {'id': 's2.jpg', 'brand': '아디다스', 'name': '캠퍼스 00s-블랙:화이트', 'price': '129,000'},
    {'id': 's3.jpg', 'brand': '아디다스', 'name':'가젤-그린:화이트', 'price': '129,000'},
    {'id': 's4.jpg', 'brand': '악셀 아리가토', 'name': '마라톤 러너 스니커즈', 'price': '199,000'},
    {'id': 's5.jpg', 'brand': '반스', 'name': '올드스쿨', 'price': '67,104'},
    {'id': 's6.jpg', 'brand': '리복', 'name': '클럽 c 85 빈티지', 'price': '100,171'},
    {'id': 's7.jpg', 'brand': '아식스', 'name': '젤-1090w', 'price': '99,000'},
    {'id': 's8.jpg', 'brand': '캐치볼', 'name': '오리지날 플러스 피크닉', 'price': '57,254'}
];

function getItemInfo() {
    var item = localStorage.getItem('itemid');
    var brand = document.getElementById('brandName');
    var itemName = document.getElementById('itemName');
    var itemImg = document.getElementById('itemImg');
    var itemPrice = document.getElementById('salePrice');
    var buyBt = $('.saleBt');
    brand.innerText = itemArr[item]['brand'];
    itemName.innerText = itemArr[item]['name'];
    itemImg.src = '../static/img/' + itemArr[item]['id'];
    itemPrice.innerText = itemArr[item]['price'] + '원';
    buyBt.attr('id', item);
}

window.onload = getItemInfo();

function likeItem(id){
    $.ajax({
        url: '',
        method: 'POST',
        data:{
            'id' : id
            //또 뭘 보내줘야 됨?
        }
    })
}

function buyItem(id){
    var number = document.getElementById('num');
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        url: '/product/cart/create/',
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken
        },
        data:JSON.stringify({
            "id" : id,
        }),
        success: function(){
            alert('성공');
            window.location = '/';
        }, error: function(){
            alert('구매 실패');
        }
    })
}

function pushCart(id){
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        url: '/product/cart/create/',
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken
        },
        data:JSON.stringify({
            "id" : id,
        }),
        success: function(){
            alert('성공');
            window.location = '/';
        }, error: function(){
            alert('장바구니 넣기 실패');
        }
    })
}