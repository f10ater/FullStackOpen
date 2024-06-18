const Notification = ({ message, successState }) => {
    
    const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      }
    
      const errorStyle = {
        ...messageStyle,
        color: 'red'
      }

    if (message === null) {
      return null
    }
  
    return (
      <div style={successState ? messageStyle : errorStyle} className='message'>
        {message}
      </div>
    )
  }

export default Notification