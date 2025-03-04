const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/url-shortener")
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

app.use(express.json());
app.use("/url", urlRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory: {
            timestamp: Date.now(),
        }
    },

    }
 );
 res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));