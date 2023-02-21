const Message =(props)=> {
    let data = props.data

    return (
        data.map(message=> <li>{message.message}</li>)
    )
}

export default Message