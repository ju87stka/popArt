const checkTextInputs=(selector)=>{

    const txt=document.querySelectorAll(selector)
    txt.forEach(input=>{
        input.addEventListener('keypress',(e)=>{
            if(e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault()
            }
        })
    })
}
export default checkTextInputs