const defaultOptions = { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
}

const UseDateString = (date, options = defaultOptions) => {
    let language = window.navigator.userLanguage || window.navigator.language
    const dateString = new Intl.DateTimeFormat(language, options).format(date)
    return dateString
}

export default UseDateString
