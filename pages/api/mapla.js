import NextCors from 'nextjs-cors';

async function handler(req, res) {
    
     await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
    
    
    
    const dany=req.headers['singam']

    res.status(201).json({ message: 'Successfully stored message!',white:"dany",mahesh:"babu"});
  
}

export default handler;
