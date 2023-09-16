"use client"
import { useState } from "react";
import axios from "axios";
// https://api.github.com/users/naveed-rana/
export default function Github() {
    const [userName, setUserName] = useState(null)
    const [followers, setFollowers] = useState([])
    const [data, setData] = useState(null)
    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }
    const onClickHandler = async () => {
        setFollowers([])
        
        let response = await fetch(`https://api.github.com/users/${userName}`)
        response = await response.json()
        setData(response)
        console.log(response);

    }
    const onFollowerHandler = async () => {
        let response = await axios.get(data.followers_url)
        console.log("response", response.data);
        setFollowers(response.data)

    }
    return (
        <div>
            <label htmlFor="userName">Enter UserName:</label>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>search</button>

            {data &&
                <>
                    <h1>Github user</h1>
                    <img src={data.avatar_url} width={100} alt="" />
                    <span>bio: {data.bio} - {data.followers}</span>
                    <button onClick={onFollowerHandler}>Get followers</button>
                </>
            }


            {followers.length >= 1 &&

            <table>
                <tr>
                    <th>id</th>
                    <th>avator</th>
                    <th>name</th>
                    <th>type</th>
                </tr>
                {followers.map((element) => {
                    return (
                        <tr>
                            <td>{element.id}</td>
                            <td> <img src={element.avatar_url} width={50} alt="" /></td>
                            <td>{element.login}</td>
                            <td>{element.type}</td>
                        </tr>
                    )
                })}

            </table>
}

        </div>
    )
}
