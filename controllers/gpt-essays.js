export const postEssay = async (req, res) => {
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
