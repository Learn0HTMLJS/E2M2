const Dialog = document.getElementById('ModalDialog');
const Background = document.getElementById('Background');
const Button = document.getElementById('Buttonka');
const CloseButton = document.getElementById('CloseButton');
const Row = document.getElementById('flBtn');
Button.addEventListener('click', ShowModal);
CloseButton.addEventListener('click', CloseModal);
Background.addEventListener('click', CloseModal);

//Dialog.style.display = 'none';
//Dialog.style.borderColor = 'black';
//Dialog.style.borderWidth = '2px';
Dialog.style.opacity = '0';
Dialog.style.visibility = 'hidden';
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
    Dialog.style.opacity = '1';
    Dialog.style.visibility = 'visible';

    Background.style.opacity = '1';
    Background.style.visibility = 'visible';
    //Dialog.style.display = 'inline';
    //Dialog.style.position = 'absolute';
}

function CloseModal()
{
//    Dialog.style.display = 'none';
    Dialog.style.opacity = '0';
    Dialog.style.visibility = 'hidden';
    Background.style.opacity = '0';
    Background.style.visibility = 'hidden';
}