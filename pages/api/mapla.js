function handler(req, res) {
    
    const dany=req.headers['singam']

    res.status(201).json({ message: 'Successfully stored message!',white:dany});
  
}

export default handler;
