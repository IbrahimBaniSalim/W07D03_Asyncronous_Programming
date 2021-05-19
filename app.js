const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");
const port = 3000;

let content;
const readFile = () => {
    fs.readFile("./data.txt", (err, data) => {
        if (err) {
            throw err;
        }
        content = data.toString();
        console.log(content);
    });

};
readFile()

const writeFile = () => {
    fs.writeFile("./text.txt", `A new file has been created`, (err) => {
        if (err) {
            throw err;
        }

        console.log('A new file has been created');
    });
};
writeFile()
    // ***********************************************************
const getPost = (id) => {
    app.get('/id', (req, res) => {
        console.log("git successfully")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then((response) => {
                console.log('DATA:', response.data);
                res.json(response.data)
            })
            .catch((err) => {
                throw err;
            })



    });
};
getPost(1);
getPost(50);
// *******************************************************************
const getPostAsync = (data) => {
    app.get('/id1', async(req, res) => {
        console.log("git successfully")
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`)

        res.json(response.data)
    });
};
getPostAsync(1);


// **********************************************************
const appendToFile = (data) => {
    fs.appendFile("data.txt", data, (err) => {
        if (err) {
            throw err;
        }
    })

}
appendToFile(" ")
    // ****************************************************
const copyFile = (fileName) => {


    fs.copyFile('data.txt', 'des.txt', constants.COPYFILE_EXCL, (err) => {
        if (err) {
            throw err
        }
    })



};
// *****************************************************
// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const post = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
});

const createPost = (post) => {
    app.post('/post', (req, res) => {
        console.log("git successfully")
        axios.post(`https://jsonplaceholder.typicode.com/posts${post}`)

        .then((response) => {
                console.log('post:', post.data);
                res.json(post.data)
            })
            .catch((err) => {
                throw err;
            })



    });
};

createPost(post);
// *******************************************
const newPost = JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
});
const updatePost = (postId, data) => {

    app.put('/newpost', (req, res) => {
        console.log("git successfully")
        axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        .then((response) => {
                console.log('post:', data);
                res.json(data)
            })
            .catch((err) => {
                throw err;
            })



    });



};

updatePost(1, newPost);
// ***************************************
const getUsers = () => {
    app.get("/user", async(req, res) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/user`)
        res.json(response.username)
    });


};

// ******************************************
const saveUsers = () => {
    app.get("/user", async(req, res) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/user`)
        res.json(response.username)
    });
    fs.writeFile("./user.txt", `response.username`, (err) => {
        if (err) {
            throw err;
        }

        console.log('A new file has been created');
    });

};














app.listen(port, () => {
    console.log(`
                            server run on port $ { port }
                            `);
});