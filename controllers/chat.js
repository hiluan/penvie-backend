export const newChat = async (req, res) => {
  try {
    const { idea, date } = req.body;

    console.log("🚀 ~ prompt:", idea);
    res.status(200).json({ idea });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
};
