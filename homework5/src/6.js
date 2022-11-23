let fraza='Мама мыла раму, рама мыла мыло, мыло… кхм, дальше не помню';
let fraza1=fraza.replace ( "Мама", "Маша" )
let fraza2=fraza1.replace ( /мыла/g, "ела" )
let fraza3=fraza2.replace ( /мыло/g, "кошку" )
console.log ( fraza3 );
