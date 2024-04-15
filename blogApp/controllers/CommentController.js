//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body;
    //create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });
    //save the new comment into the database
    const savedComment = await comment.save();

    //find the post by ID, add the new comment to its array comments

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments") //populate the comments array with comment documents
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error While Creating comment",
    });
  }
};
