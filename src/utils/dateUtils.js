const longDate = (str) => {
    const newStr = new Date(str);
    const resStr = newStr.toLocaleString('en-US', {
        // weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        // hour: 'numeric', // numeric, 2-digit
        // minute: 'numeric', // numeric, 2-digit
        // second: 'numeric', // numeric, 2-digit
    })
    return resStr
}

export default longDate;