let div_title = document.createElement('div');
div_title.classList.add('title');

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';

div_title.appendChild(h2)
document.body.appendChild(div_title);

h2.style.color = '#212121';
h2.style.fontSize = '36px';
h2.style.textAlign = 'center';
h2.style.fontFamily = 'Arvo';

let div1 = document.createElement('div');
div1.classList.add('div_text');
div1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div_title.appendChild(div1); 

div1.style.fontSize = '14px';
div1.style.lineHeight = '10px';
div1.style.textAlign = 'center';
div1.style.color = '#9FA3A7';

let list = document.createElement('div');
list.classList.add('list');
document.body.appendChild(list);


let item1 = document.createElement('div');
item1.classList.add('list_item'); 
list.appendChild(item1);

let item2 = document.createElement('div');
item2.classList.add('list_item'); 
item2.classList.add('list_item-reverse'); 
list.appendChild(item2);



let item1_title = document.createElement('div');
item1_title.classList.add('item_title'); 
item1.appendChild(item1_title);
item1_title.innerHTML = "FSTUDIO";


let item2_title = document.createElement('div');
item2_title.classList.add('item_title');
item2.appendChild(item2_title);
item2_title.innerHTML = "FREELANCER";

let item1_title2 = document.createElement('div');
item1_title2.classList.add('item_title2'); 
item1.appendChild(item1_title2);
item1_title2.innerHTML = "Initially designed to ";

let item2_title2 = document.createElement('div');
item2_title2.classList.add('item_title2'); 
item2.appendChild(item2_title2);
item2_title2.innerHTML = "Initially designed to ";

let item1_decryption = document.createElement('div');
item1_decryption.classList.add('item_decryption'); 
item1.appendChild(item1_decryption);
item1_decryption.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";

let item2_decryption = document.createElement('div');
item2_decryption.classList.add('item_decryption'); 
item2.appendChild(item2_decryption);
item2_decryption.innerHTML = "But I must explain to you how all this mistaken idea of denouncing ";


let button1 = document.createElement('button');
button1.classList.add('btn');
button1.innerHTML = 'start here';
item1.appendChild(button1);

let button2 = document.createElement('button');
button2.classList.add('btn');
button2.innerHTML = 'start here';
item2.appendChild(button2);


let style = document.createElement('style');
style.innerHTML = `
   .list {
        display: flex;
        margin-left:auto;
        margin-right: auto;
        justify-content: center;
        margin-top:60px;
       
   }

   .list_item {
        padding:80px;
        border: 1px solid #9FA3A7;
        border-radius: 6px 0 0 6px;
   }

   .list_item-reverse {
        border-radius: 0 6px 6px 0;
   }

   .list_item:hover {
        background: #8F75BE
   }

    .item_title {
        display: flex;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #757575;
        text-transform: uppercase;
    }

    .list_item:hover .item_title{
        color:#FFC80A;
    }

    .item_title2 {
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        margin-top:20px;
        width:210px;
    }

    
    .list_item:hover .item_title2 {
        color: #fff;
    }

    .item_decryption {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
        margin-top:25px;
        width:210px;
    }

    .list_item:hover .item_decryption {
        color: #fff;
    }

    .btn {
        display: flex;
        margin-left:auto;
        margin-right: auto;
        margin-top:50px;
        height:50px;
        border-radius:25px;
        background: transparent;
        padding:15px 15px 15px 15px;
        border: 3px solid #FFC80A;
        font-weight: bold;
        text-transform: uppercase;
    }

    .list_item:hover .btn{
        color:#fff;
    }
`
document.head.appendChild(style);