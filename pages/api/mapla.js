function handler(req, res) {

    res
      .status(201)
      .json({ message: 'Successfully stored message!'});
  
}

export default handler;
