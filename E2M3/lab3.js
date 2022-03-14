const Dialog = document.getElementById('ModalDialog');
const Background = document.getElementById('Background');
const Button = document.getElementById('Buttonka');
const CloseButton = document.getElementById('CloseButton');
const Row = document.getElementById('flBtn');
const Submit = document.getElementById('BtnSb');
const Name = document.getElementById('InputName');
const EMAIL = document.getElementById('InputEMAIL');
Dialog.addEventListener('click', NoUp);
Button.addEventListener('click', ShowModal);
CloseButton.addEventListener('click', CloseModal);
Background.addEventListener('click', CloseModal);
Submit.addEventListener('click', BlockSubmit);
Name.addEventListener('blur', NameValidate);
EMAIL.addEventListener('blur', EmailValidation);

//Dialog.style.opacity = '0';
//Dialog.style.visibility = 'hidden';
Dialog.style.background = 'white';
Dialog.style.width = '60%';
Dialog.style.position = 'fixed';
Dialog.style.top = '100px';
Dialog.style.left = '20%';

Background.style.opacity = '0';
Background.style.visibility = 'hidden';

Background.style.background = 'rgba(0, 0, 0, 0.3)';
Background.style.width = '100%';
Background.style.height = '100%';

Background.style.position = 'fixed';
Background.style.top = '0px';
Background.style.left = '0px';

Row.style.display = 'flex';
Row.style.flexDirection = 'row-reverse';

function ShowModal()
{
//    Dialog.style.opacity = '1';
//    Dialog.style.visibility = 'visible';

    Background.style.opacity = '1';
    Background.style.visibility = 'visible';
/*    Background.style.background = 'rgba(0, 0, 0, 0.3)';
    Background.style.width = '100%';
    Background.style.height = '100%';*/

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function CloseModal()
{
//    Dialog.style.opacity = '0';
//    Dialog.style.visibility = 'hidden';
    Background.style.opacity = '0';
    Background.style.visibility = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'visible';

    //Event.stopPropagation();
}

function NoUp(Event)
{
    Event.stopPropagation();
}

function BlockSubmit(Event)
{
    Event.preventDefault();
    console.table(document.getElementById('SUBMITION'));
    Event.stopPropagation();
}

function NameValidate(Event)
{
//    Event.preventDefault();
    let st = Name.value;

    Name.setCustomValidity('detbtbf');
    //console.log(st);    
    if(st == '')
        alert('Error');
    Name.focus();
//    Event.preventDefault();
//    Event.stopPropagation();
}

function EmailValidation(Event)
{
    Event.preventDefault();
    let st = EMAIL.value;
    let flag = 0;
    let i = 0;
    for(i; i < length(st); i++)
    {
        if(st[i] == '@')
        {
            flag++;
            break;
        }
    }    
    for(i; i < length(st); i++)
    {
        if(st[i] == '.')
        {
            flag++;
            break;
        }
    }
    if(flag != 2)
    {
        alert('Error');
    }
    Event.stopPropagation();
}