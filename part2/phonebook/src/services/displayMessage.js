export const displayMessage = (message, setMessage) => {
    setMessage(message)
    setTimeout(() => {
        setMessage(null)
    }, 5000)
}