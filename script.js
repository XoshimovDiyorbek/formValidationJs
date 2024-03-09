const text = document.querySelector('#text')
const number = document.querySelector('#num')
const email = document.querySelector('#mail')

const changeClasses = () => {
    return {
        r: (selector, className) => document.querySelector(selector).parentElement.classList.remove(className),
        a: (selector, className) => document.querySelector(selector).parentElement.classList.add(className)
    }
}

const setClass = changeClasses()

// text
text.addEventListener('input', () => {
    if(text.value.length < 5 || text.value.length > 30) {
        setClass.a('#text', 'invalid')
        setClass.r('#text', 'valid')
    } else {
        setClass.r('#text', 'invalid')
        setClass.a('#text', 'valid')
    }
    
    if(text.value.length === 0) {
        text.parentElement.classList.remove('invalid', 'valid')
    }
})

// number
number.addEventListener('keypress', e => {
    if(e.keyCode < 48 || e.keyCode > 57) {
        number.parentElement.classList.add('invalid')
        number.parentElement.classList.remove('valid')
        e.preventDefault()
    } else {
        number.parentElement.classList.add('valid')
        number.parentElement.classList.remove('invalid')
    }
})

number.addEventListener('input', () => {
    if(number.value.length === 0) {
        number.parentElement.classList.remove('invalid', 'valid')
    }
})

// email
email.addEventListener('input', () => {
    const innerText = email.value
    const pattern = email.getAttribute('pattern')
    
    if(innerText.match(pattern)) {
        email.parentElement.classList.add('valid')
        email.parentElement.classList.remove('invalid')
    } else {
        email.parentElement.classList.remove('valid')
        email.parentElement.classList.add('invalid')
    }
})