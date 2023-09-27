const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, API_KEY } = process.env;
const axios = require("axios");
const { log } = require("console");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const url = 'https://sephora.p.rapidapi.com/us/products/v2/list?categoryId=cat150006&pageSize=60&currentPage=1';
const option = {
    method: 'GET',
      headers: {
          'X-RapidAPI-Key': `${API_KEY}`,
          'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
      }
  
  }


const skinImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

    try {
    const response = await axios.get(url, option);
    const data = response.data;
    
    const newData = data.products.map((i) => ({
      brandName: i.brandName,
      currentSku: i.currentSku,
      name: i.displayName,
      heroImage: i.heroImage,
      altImage: i.altImage,
      moreColors: i.moreColors,
      productId: i.productId,
      rating: i.rating,
      reviews: i.reviews,
      pickupEligible: i.pickupEligible,
      targetUrl: i.targetUrl,
    }))
    
    const seo = data.seoMetaDescription
    await client.connect();
    const db = client.db("sephora");
    const documents = newData.map((product) => ({
      ...product,
      seoMetaDescription: seo,
    }));

      const result = await db.collection("skincare").insertMany(documents);
      // console.log(newData);
        
    } catch (error) {
        
    } finally {
        client.close()
    }
}

skinImport()