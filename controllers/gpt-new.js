import { Configuration, OpenAIApi } from "openai";
import Essay from "../models/Essay";
import EssayChat from "../models/EssayChat";
import User from "../models/User";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/examples/default-qa

// When a new essay is created, the whole essay will be sent as the response with all its initial details, including the first chat. Any subsequent chats will be sent as individual chats within that essay.
export const newEssay = async (req, res) => {
  const { prompt, userId, wordLimit } = req.body;
  // Slice `prompt` to get settings and languages
  // Not done yet

  // Check if the word limit exceeds the user's token balance
  const user = await User.findById(userId);
  if (user.tokens < wordLimit) {
    return res.status(400).send({
      message: "Not enough tokens for the requested word limit.",
    });
  }

  // Create a new chat (chat) object
  const newChat = new EssayChat({
    prompt,
    wordLimit,
    userId,
    confidence: 0,
    isResponsed: false,
    language: "Vietnamese",
    engine: "text-davinci-003",
    maxTokens: 1000,
    temperature: 0.8,
    topP: 1,
    frequencyPenalty: 0.6,
    presencePenalty: 0.3,
  });

  // Save the chat to the database
  const savedChat = await newChat.save();

  // Create a new essay object and attach the chat to it
  const newEssay = new Essay({
    userId,
    interactions: [savedChat._id],
    totalTokens: wordLimit,
    totalWords: wordLimit,
    finalWords: 0,
    totalCharacters: 0,
    finalCharacters: 0,
    finalEssay: "",
    status: "pending",
    metadata: {},
  });

  // Save the essay to the database
  const savedEssay = await newEssay.save();

  // Send the new essay as the response
  res.status(200).send(savedEssay);
};

// New subsequent essay chats
export const newEssayChat = async (req, res) => {
  const { prompt, userId, wordLimit } = req.body;
  // Slice `prompt` to get settings and languages
  // Not done yet

  // Check if the word limit exceeds the user's token balance
  const user = await User.findById(userId);
  if (user.tokens < wordLimit) {
    return res.status(400).send({
      message: "Not enough tokens for the requested word limit.",
    });
  }

  // Create a new chat (chat) object
  const newChat = new EssayChat({
    prompt,
    wordLimit,
    userId,
    confidence: 0,
    isResponsed: false,
    language: "Vietnamese",
    engine: "text-davinci-003",
    maxTokens: 1000,
    temperature: 0.8,
    topP: 1,
    frequencyPenalty: 0.6,
    presencePenalty: 0.3,
  });

  // Save the chat to the database
  const savedChat = await newChat.save();

  // Send the new chat as the response
  res.status(200).send(savedChat);
};
``;

export const newCodex = async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    //   stop: ['"""'],
  });

  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newQA = async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newEmail = async (req, res) => {
  const prompt = req.body.prompt;
  // slice `prompt` to get settings and languages
  // not done yet
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newGrammarCorrection = async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newTranslateProgrammingLanguages = async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createCompletion({
    model: "code-davinci-002",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 54,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["###"],
  });
  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newEssayOutline = async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newAdFromProductDesc = async (req, res) => {
  const prompt = req.body.prompt;
  // Ad from product description
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};

export const newCreateStudyNotes = async (req, res) => {
  const prompt = req.body.prompt;
  // Create study notes
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  res.status(200).send({
    bot: response.data.choice[0].text,
  });
};
