const Message =(props)=> {
    let messages = props.messages

    return (
        messages.map(message=> <li>{message.message}</li>)
    )
}

export default Message