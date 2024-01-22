
function showBtn(){
    let barButtons = document.getElementsByClassName('headerBtns')[0]
    if (Array.from(barButtons.classList).some((e)=> e === 'showBar'))
        barButtons.classList.remove('showBar')
    else barButtons.classList.add('showBar')
}
