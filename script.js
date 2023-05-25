//middle part
const hey = document.querySelector('.name');
    hey.style.textDecoration = 'underline red';

const based = document.querySelector('.based');
    based.style.color =  'white';
    based.style.marginTop = '40px'
    based.style.wordSpacing = '5px';
    based.style.lineHeight = '25px';

const there = document.querySelector('.there');
    there.style.color =  'white';
    there.style.wordSpacing = '5px';
    there.style.lineHeight = '25px';
    there.style.fontSize = '15px'

const contact = document.querySelector('.contact');

        contact.addEventListener('click', function () {

                alert(
                    'Message me through the gmail address provided at the top of this page'
                )
        })