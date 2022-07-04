let value = document.querySelector('input');

value.addEventListener('keydown', function(event){
    if(event.keyCode === 13) {
        let list = document.createElement('div');
        document.body.appendChild(list);
        list.innerHTML = this.value;
        this.value = ' ';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        list.appendChild(checkbox);
        checkbox.onclick = function() {
            if(this.checked){
                list.style.textDecoration = 'line-through';
                list.style.color = 'rgba(0, 0, 0, 0.2)';
                
            } else {
                list.style.textDecoration = 'none';
                list.style.color = 'white';
            }
        }

        let style = document.createElement('style');
        style.innerHTML = `
            div{
                display:flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                border: 1px solid grey;
                background: #86a8e7;                color:white;
                font-weight: bold;
                font-size:36px;
                gap:2%;
            }

            .checkbox {
                width:25px;
                
            }
    
        `;
        document.head.appendChild(style);

    }

   
});