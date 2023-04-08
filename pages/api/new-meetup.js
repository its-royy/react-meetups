import { MongoClient } from "mongodb";

// all code in this api folder will never appear on the client side

// /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const {title, image, address, description} = data;
    const client = await MongoClient.connect(
      "mongodb+srv://royschong:sGnbazspr1iAAKcy@cluster0.phlrszc.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("meetups");

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
