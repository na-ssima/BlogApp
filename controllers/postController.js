const modul = require('../modules/post');
const JsonFile = require("../data.json");

module.exports = {

getAllPosts:(req,res)=>{
    res.send(modul.getAllPosts());
},

  getPost:(req, res)=>{
    const idpost = req.params.id
    let post = JsonFile.find(p => p.id == idpost);
    if(post){
        res.json(post)
    }
    else{
        res.send("product not found")
    }
  },

  createPost: async (req, res) => {
    const posts = await modul.getAllPosts();
    const post = req.body;
    post.id = posts.length + 1;
    posts.push(post);
    res.send('Post added successfully');

    await modul.createPost(posts);
    // res.json(creatPost);
  },

  updatePost:async(req,res)=>{
    const posts = await modul.getAllPosts();
    const id = req.params.id;
    const { name, price } = req.body;
    const index = posts.findIndex(p => p.id == id);
    if(index !== -1){
        posts[index].name = name
        posts[index].price = price

        res.send('Post updated successfully');
        await modul.createPost(posts);
        // res.send(writepost);
    }
    else{
        res.send('post not found')
    }
  },

  deletePost:(req,res)=>{
    const posts = modul.getAllPosts();
    const id = req.params.id;
    const index = posts.findIndex(p => p.id == id);

    if(index !== -1){
        posts.splice(index, 1)[0];
        res.send('Post deleted successfully');
        modul.createPost(posts);
        // res.send(writepost);
    }

    else{
        res.send('post not found')
    }
  },


};
