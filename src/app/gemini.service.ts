import { Injectable, model } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private generativeAI: GoogleGenerativeAI;

  constructor() {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyDO4MEgOOsHT90M9TKmA2ZMfrUIVGOA5rY');

   }

   
async generateText(prompt: string): Promise<string> {
  const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  
  console.log(text); 
  return text;       
}

}
