const authToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  //   console.log(token);
  console.log(process.env.USERFRONT_PUBLIC_KEY);

  if (!token) {
    return res.status(401).json({
      message: "Bad token",
    });
  }

  try {
    const auth = await jwt.verify(token, process.env.USERFRONT_PUBLIC_KEY);
    console.log(process.env.USERFRONT_PUBLIC_KEY);
    req.auth = auth;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Bad bad boi token",
    });
  }
};

export default authToken;
