import Essay from "../models/Essay.js";
import EssayChat from "../models/EssayChat.js";

export const getEssays = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;

    const totalEssays = await Essay.countDocuments();
    const totalPages = Math.ceil(totalEssays / limit);

    const essays = await Essay.find({})
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: essays,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEssays = async (req, res, next) => {
  try {
    const essays = await Essay.find({});
    const essayIds = essays.map((essay) => essay._id);

    await EssayChat.deleteMany({ essayId: { $in: essayIds } });
    await Essay.deleteMany({});

    res.status(200).json({
      success: true,
      message: "All essays and their chats have been deleted.",
    });
  } catch (error) {
    next(error);
  }
};

export const getEssay = async (req, res, next) => {
  try {
    const { essayId } = req.params;
    const essay = await Essay.findById(essayId);
    if (!essay) {
      return res.status(404).json({
        success: false,
        message: `Essay with ID ${essayId} not found.`,
      });
    }
    res.status(200).json({ success: true, data: essay });
  } catch (error) {
    next(error);
  }
};

export const deleteEssay = async (req, res, next) => {
  try {
    const { essayId } = req.params;
    const essay = await Essay.findByIdAndDelete(essayId);
    if (!essay)
      return res.status(404).json({
        success: false,
        message: `Essay with ID ${essayId} not found.`,
      });
    const deletedEssayChats = await EssayChat.deleteMany({ essayId });

    res.status(200).json({
      success: true,
      message: `Essay with ID ${essayId} and its ${deletedEssayChats.deletedCount} associated chats have been deleted.`,
    });
  } catch (error) {
    next(error);
  }
};

export const getEssayChats = async (req, res, next) => {
  try {
    const { essayId } = req.params;
    const essayChats = await EssayChat.find({ essayId });
    res.status(200).json({ success: true, data: essayChats });
  } catch (error) {
    next(error);
  }
};
