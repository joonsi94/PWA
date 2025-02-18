var Select = document.querySelector('#type');
var $etc1 = document.querySelector('#etc1');
var $etc2 = document.querySelector('#etc2');
var $divService = document.querySelector('#div-service');

const $confirmReserve = document.querySelector('#confirm-reserve');
const $step01 = document.querySelector('#step01');
const $step02 = document.querySelector('#step02');
// div h1~ img
// mouseover mouseout click change
Select.addEventListener('change', function (e) {
    // alert(e.target);
    // alert('이게 되네'+e.target.value);
    if (e.target.value === 'jim-keep') {
        $etc1.classList.remove('hidden');
        $etc2.classList.add('hidden');

        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    } else if (e.target.value === 'jim-move') {
        $etc2.classList.remove('hidden');
        $etc1.classList.add('hidden');

        $divService.classList.remove('h-20');
        $divService.classList.add('h-100');
    } else {
        $etc1.classList.add('hidden');
        $etc2.classList.add('hidden');

        $divService.classList.remove('h-100');
        $divService.classList.add('h-20');
    }
});

$confirmReserve.addEventListener('click', function (e) {
    $step01.classList.add('hidden');
    $step02.classList.remove('hidden');
});

