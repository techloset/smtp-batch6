
import dbConnect, { db } from "@/config/db"
import { userModel } from "@/model/users"
dbConnect()

const fetchData = async() => {

    const result = await userModel.find()
    console.log("result",result);

    // const data = await db.user.findMany({
    //     select: {
    //         email:true
    //     }
    // })
    // console.log("data", data);
    return []
}
async function Services(){
    await fetchData()
    return (
        <div>
            <h1>
                Services
            </h1>
        </div>
    )
}
export default Services