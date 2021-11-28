var chats = [
    { username:'Jason stathem', lastmessage:'where are you !!', date: new Date(), photoURL:'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/jason-statham/6139148-4-fre-FR/Jason-Statham.jpg' },

    { username:'Brad pitt', lastmessage:'wassss up !! :°)', date: new Date(), photoURL:'https://resize-elle.ladmedia.fr/rcrop/1024,1024/img/var/plain_site/storage/images/people/la-vie-des-people/news/brad-pitt-en-fauteuil-roulant-une-photo-inquiete-ses-fans-3924809/94792543-1-fre-FR/Brad-Pitt-en-fauteuil-roulant-une-photo-inquiete-ses-fans.jpg' },

    
    


]

var sideChatsBloc = document.getElementById('side-chats-bloc');
var searchInput = document.getElementById('searchInput');
var messageForm = document.getElementById('message-form');
var myInput = document.getElementById('my-message-input');
var messagesBloc = document.getElementById('messages');

/**
 *
 */

function formatDate(date){
    return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
}

function initSideBloc(arr){
    let blocHTML= '';
    arr.map((c)=>{
        blocHTML+=`
        <div class="w-100 d-flex justify-content-start bloc-chat">
            <div class="avatar" style="background-image: url(${c.photoURL})"></div>
            <div>
                <p>
                    <strong>`+c.username+`</strong><br>
                    <small class="text-muted">${c.lastmessage}</small><br>
                    <small class="text-muted">${formatDate(c.date)}</small>
                </p>
            </div>
        </div> 
        `;
    })

    sideChatsBloc.innerHTML = blocHTML;
}



searchInput.addEventListener('keyup',function(e){
    const val = e.target.value;

    initSideBloc(chats.filter( d => d.username.toLowerCase().indexOf(val.toLowerCase()) !=-1 )) ;
})


/*********************** */

var popSound = new Audio('assets/pop.mp3');



messageForm.addEventListener('submit',function(e){
    // stop the default event !! (  form a   )
    e.preventDefault();

    const val = myInput.value.trim();

    if (val != '') {

        

                        // set                // get
        messagesBloc.innerHTML = messagesBloc.innerHTML+  (`<div class="d-flex out-parent">
            <div class="out-message">
                ${val}
            </div>
        </div> `);
        popSound.play();
        myInput.value='';

        setTimeout(()=>{
            messagesBloc.innerHTML = messagesBloc.innerHTML+  (
                `
                <div class="d-flex income-parent">
                <div class="income-message">
                    hi !!
                </div>
            </div>
            ` 
        );
        popSound.play();
        myInput.value='';
        },2000)
    }
})









/**INIT */

initSideBloc(chats);