const ajaxService= ()=>{

    const url ="https://api.postit.lt/?term="
    const key ="UNFYHJYNHGHwWmFmG5Go1"
    return fetch(`${url}&{term}&key=${key}`)
        .then(responce=> responce.json())

}

export default ajaxService