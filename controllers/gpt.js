import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/examples/default-qa

export const postCodex = async (req, res) => {
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

export const postQA = async (req, res) => {
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

export const postGrammarCorrection = async (req, res) => {
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

export const postTranslateProgrammingLanguages = async (req, res) => {
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

export const postEssayOutline = async (req, res) => {
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

export const postAdFromProductDesc = async (req, res) => {
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

export const postCreateStudyNotes = async (req, res) => {
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
