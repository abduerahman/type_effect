function forth(el, text, duration){
    let element = el.firstChild;
    let index = 0;
    setInterval(function(){
        if(index == text.length){
            return;
        }
        element.textContent += text[index];
        index++;
    },duration);
}

function backward(el,text,duration){
    let element = el.firstChild;
    let length = text.length;
    setInterval(function(){
        if(length == -1){
            return;
        }
        element.textContent = text.substring(0,length);
        length--;
    },duration);
}

function backAndForthtext(element,text ,duration){
    forth(element,text,duration/2);
    setInterval(function(){
        backward(element,text,duration/2);
        setTimeout(function(){
            forth(element,text,duration/2);
        },duration*text.length);
    },duration*text.length);
}

function backAndForthtextOnce(element,text,duration){
    forth(element,text,duration/2);
    setTimeout(function(){
        backward(element,text,duration/2);
    },(duration/2)*(text.length)+200);
}

function greater(text,text1, duration){
    let result = text.length * duration *1.2;
    if(text.length < text1.length){
        result = text1.length * duration * 1.2;
    }
    return result;
}


function multiTexts(element, array, duration){
    let index = 0;
    let frontofIndex = index+1;
    let greaterSize = greater(array[index],array[frontofIndex], duration);
    backAndForthtextOnce(element,array[index], duration);
    setInterval(function(){
        index++;
        if (index == array.length){
            index = 0;
        }
        if(frontofIndex == array.length){
            frontofIndex = 0;
        }
        greaterSize = greater(array[index],array[frontofIndex], duration);
        backAndForthtextOnce(element,array[index], duration);
    },greaterSize);   
}

function initilize(){
    let label = document.createElement('label');
    let span = document.createElement('span');
    let span2 = document.createElement('span');
    span2.classList.add('typing');
    label.insertAdjacentElement('afterbegin', span)
    label.insertAdjacentElement('beforeend', span2);
    return p;
}