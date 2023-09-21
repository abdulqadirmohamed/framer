import mongoose, {Schema} from "mongoose";

const blogScheme = new Schema (
    {
        title: String,
        tags: [String],
        description: String
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogScheme)

export default Blog