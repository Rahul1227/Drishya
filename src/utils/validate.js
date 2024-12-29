
export const validateData=(email, password)=>{

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isValidEmail) return 'Invalid Email. Try again'
    if(!isValidPassword) return 'Invalid Password. Try again'

    return null
}

export const validateName=(name)=>{
    const isValidName=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

    if(!isValidName) return 'Invalid Name. Try again'
}