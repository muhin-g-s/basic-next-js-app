import mongoose from "mongoose"

const connect = async () => {
  try{
    await mongoose.connection(process.env.MONGO)
  } catch(error){
    console.log(error)
    throw new Error("Connect to DB failed")
  }
}

export default connect