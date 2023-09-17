const express = require('express')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-GnOik9mggAOa0QxiSSHEeyMF",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);



    

    

// callApi();

//create a simple express api that calls the function above

const app = express()
const port = 3000


app.post('/',async(req,res) =>{
    const response = await openai.createCompletion({
        model:"text-davinci-003",
        prompt:"Say this is test",
        max_tokens:7,
        temperature:0,
    });
    console.log(response.data.choices[0].text)
    res.json({
        data:response.data
    })
});

app.listen(port, ()=>{
    console.log(`Example app Listening at http://localhost:${port}`)
});