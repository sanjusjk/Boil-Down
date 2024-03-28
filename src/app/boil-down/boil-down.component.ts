import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boil-down',
  templateUrl: './boil-down.component.html',
  styleUrl: './boil-down.component.css'
})


export class BoilDownComponent {

  inputText: string = '';
  outputText: string = '';

  constructor(private http: HttpClient) { }

  summarize() {   
    this.callOpenAI();
  }


  callOpenAI() {
    const url = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_OPENAI_KEY' }; // eg: 'Authorization':'Bearer sk-YJa7LzR135KoBRMqFCTsT3BlbkGHC6xDUy8OpjIIurMBf342'
    const body = {
      'prompt': `Please summarize the following text in less than 300 characters: ${this.inputText}`,
      'max_tokens': 60 // for 300 characters 60 tokens are enough
    };

    this.http.post(url, body, { headers }).subscribe(
      (response: any) => {
        this.outputText = response.choices[0].text;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
}
