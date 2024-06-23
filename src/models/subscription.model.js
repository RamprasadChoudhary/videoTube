import mongoose,{Schema, trusted} from "mongoose";

const subscriptoonSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref:"User"
        // one who is subscribing
    },
    channel : {
        type: Schema.Types.ObjectId,
        ref: "User"
        // one to whom 'Subscriber' is subcribing
    }
},{timestamps:true})


export const Subscription = mongoose.model("Subscription",subscriptoonSchema);