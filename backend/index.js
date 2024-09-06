const express = require('express');
const cors = require('cors');
const axios = require('axios')
const port = 3005
const app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.post('/authenticate', async (req, res) => {
     const { username } = req.body;
     try{
            const r = await axios.post(
              "https://api.chatengine.io/users/",
              {username: username, secret:username, first_name:username},
              {headers: {"private-key": '0c2b4168-758b-46e2-b1ab-987cea730566'}} 
            );
            return res.status(r.status).json(r.data)
     }catch(e){
      return res.status(e.response.status).json(e.response.data)
     }
})

app.listen(port, () => console.log(`Chart app server is carried out on the port ${port}`));

