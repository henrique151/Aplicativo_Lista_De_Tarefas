import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://henriqueporto949:KTrBuYEl7MVbbINZ@blossom-app.ttknwyf.mongodb.net/blossom-app?retryWrites=true&w=majority&appName=blossom-app"
    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase
