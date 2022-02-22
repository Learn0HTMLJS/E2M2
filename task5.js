//  Task 5
let Images = document.getElementsByClassName('pict');
let ActiveElementNumber = 0;
for(let i = 1; i < Images.length; i++)
{
    Images[i].style.display = 'none';
}

let btnForward = document.getElementById('forward');
btnForward.addEventListener('click', Next);
let btnBackward = document.getElementById('backward');
btnBackward.addEventListener('click', Last);

function Next()
{
    console.log(ActiveElementNumber);
    if(ActiveElementNumber + 1 >= Images.length)
    {
        Images[ActiveElementNumber].style.display = 'none';
        ActiveElementNumber = 0;
        Images[ActiveElementNumber].style.display = 'inline';
    }
    else
    {
        Images[ActiveElementNumber].style.display = 'none';
        ActiveElementNumber++;
        Images[ActiveElementNumber].style.display = 'inline';  
    }
}

function Last()
{
    console.log(ActiveElementNumber);
    if(ActiveElementNumber - 1 < 0)
    {
        Images[ActiveElementNumber].style.display = 'none';
        ActiveElementNumber = Images.length - 1;
        Images[ActiveElementNumber].style.display = 'inline';
    }
    else
    {
        Images[ActiveElementNumber].style.display = 'none';
        ActiveElementNumber--;
        Images[ActiveElementNumber].style.display = 'inline';  
    }
}