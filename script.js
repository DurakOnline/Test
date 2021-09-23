let user_choice = '780px -360px';

const getshirt = document.querySelector('#getshirt');
const shirts = document.querySelector('#shirts')
getshirt.onclick = (event) => {
    event.preventDefault();
    user_choice = shirts.value;
};

$('.cards div').live('click', function () {

    if ($(this).attr('class') == 'unknown') {
        $(this).addClass('table').css({
            'opacity': '0.4',
            'border': '0px',
            'margin': '3px'
        }).removeClass('unknown');
    } else if ($(this).attr('class') == 'sopernik') {
        $(this).addClass('table').css({
            'opacity': '0.4',
            'border': '0px',
            'margin': '3px'
        }).removeClass('sopernik');
    } else if ($(this).attr('class') == 'mycards') {
        $(this).addClass('table').css({
            'opacity': '0.4',
            'border': '0px',
            'margin': '3px'
        }).removeClass('mycards');
    } else if ($(this).attr('class') == 'table') {
        $(this).addClass('unknown').css({
            'opacity': '1',
            'border': '0px',
            'margin': '3px'
        }).removeClass('table');
    }
});


$('#otboy').live('click', function () {
    console.log(user_choice)

    $('.table').addClass('otboy').css({
        'background-position': user_choice,
        'opacity': '1',
        'border': '0px'
    }).removeClass('table');
});

$('#sopernik').live('click', function () {
    $('.table').addClass('sopernik').css({
        'opacity': '1',
        'border': '2px solid red',
        'margin': '1px'
    }).removeClass('table');
});

$('#mycards').live('click', function () {
    $('.table').addClass('mycards').css({
        'opacity': '1',
        'border': '2px solid blue',
        'margin': '1px'
    }).removeClass('table');
});

function newgame() {
    var cards = ['spades', 'hearts', 'clubs', 'diamonds']

    var html_content = '<div id="allshirts"><form>        <label for="shirts">Выберите рубашку:</label>        <select id="shirts">            <option value="780px -360px">Золотая                рубашка</option>            <option value="720px -360px">Русский стиль</option>            <option value="660px -360px">Волк</option>            <option value="600px -360px">Зима</option>            <option value="540px -360px">Осень</option>            <option value="480px -360px">Хохлома</option>            <option value="420px -360px">Бута</option>            <option value="360px -360px">Полинезия</option>            <option value="300px -360px">Мехенди</option>            <option value="240px -360px">Паук</option>            <option value="180px -360px">Гжель</option>            <option value="120px -360px">Весна</option>            <option value="60px -360px">Дурак</option>        </select>        <button id="getshirt">Готово</button>    </form></div><div class="allcards">';

    for (var i = 0; i < 4; i++) {
        html_content += '<div class="cards">';
        for (var j = 9; j < 15; j++) {
            html_content += '<div id="' + cards[i] + j + '" class="unknown"></div>';
        }
        html_content += '</div>';
    }
    html_content += '</div><div class="btnblock">    <button id="sopernik">СОПЕРНИК</button>    <button id="mycards">ВЗЯЛ</button>    <button id="otboy">ОТБОЙ</button>    <button id="newgame">НОВАЯ ИГРА</button></div>';

    $('body').empty().append(html_content);

    for (var i = 0; i < 4; i++) {
        var vert = i * 90 + 'px';
        for (var j = 6; j < 15; j++) {
            $('#' + cards[i] + j).css({
                'background-position': '-' + (j * 60 - 60) + 'px -' + vert
            });
        }
    }
}



$('#newgame').live('click', function () {
    newgame();
});