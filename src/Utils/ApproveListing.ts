import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY!; //create ur own gemini api key  here https://aistudio.google.com/
const ai = new GoogleGenerativeAI(API_KEY);

export const is_valid_posting = async (images_data: ai_images_type) => {
  const model = ai.getGenerativeModel({
    model: "gemini-2.5-flash-preview-04-17",
  });
  const result = await model.generateContent([
    ...images_data,
    {
      text: "scan this images return valid or invalid if all of these images do not contain illegal substance or alcohol or cigarette ",
    },
  ]);
  const response = await result.response;
  return response.text();
};

export type ai_images_type = {
  inlineData: {
    mimeType: string;
    data: string;
  };
}[];
