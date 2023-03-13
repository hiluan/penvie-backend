import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";
export const newChat = async (req, res) => {
  try {
    const { idea } = req.body;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." }, // this represents the bot and what role they will assume
        { role: "user", content: idea }, // the message that the user sends
      ],
    });

    console.log("🚀 ~ response:", response.data.choices[0].message.content);

    const { data } = response;

    // res.status(200).json({ message });
  } catch (error) {
    // console.error("error", error);
    res.status(500).json({ error: error.message });
  }
};

// data: {
//   id: 'chatcmpl-6t64qPVL9XjgrPRcoMdwqSQJxTisE',
//   object: 'chat.completion',
//   created: 1678589420,
//   model: 'gpt-3.5-turbo-0301',
//   usage: { prompt_tokens: 19, completion_tokens: 28, total_tokens: 47 },
//   choices: [
//    {
//       message: {
//         role: 'assistant',
//        content: 'Is there anything specific you need assistance with?'
//      },
//      finish_reason: 'stop',
//      index: 0
//    }
//  ]
// }

// Example
// hướng dẫn cách giải phương trình bậc 2
// Để giải phương trình bậc 2: ax² + bx + c = 0, ta làm theo các bước sau:

// 1. Tính delta (Δ) = b² - 4ac
// 2. Nếu Δ > 0, phương trình có 2 nghiệm phân biệt: x1 = (-b + √Δ) / 2a và x2 = (-b - √Δ) / 2a
// 4. Nếu Δ < 0, phương trình không có nghiệm thực.

// Ví dụ:

// Giải phương trình x² + 3x - 4 = 0

// 1. Tính delta: Δ = 3² - 4*1*(-4) = 25
// 2. Δ > 0, có 2 nghiệm phân biệt: x1 = (-3 + √25) / 2*1 = 1 và x2 = (-3 - √25) / 2*1 = -4

// Vậy phương trình có 2 nghiệm là x1 = 1 và x2 = -4.
