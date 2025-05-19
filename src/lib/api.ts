/**
 * Klasa obsługująca komunikację z API Ollama
 */
export class OllamaAPI {
  private baseUrl: string = 'http://localhost:11434/api';
  private defaultModel: string = 'SpeakLeash/bielik-4.5b-v3.0-instruct:Q8_0';

  /**
   * Pobiera listę dostępnych modeli
   * @returns Tablica z dostępnymi modelami
   */
  async getModels() {
    try {
      const response = await fetch(`${this.baseUrl}/tags`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.models || [];
    } catch (error) {
      console.error('Error fetching models:', error);
      throw error;
    }
  }

  /**
   * Wywołuje endpoint /api/chat z API Ollama
   * @param systemPrompt - Instrukcja systemowa dla modelu
   * @param userPrompt - Zapytanie użytkownika
   * @param format - Oczekiwany format odpowiedzi
   * @param model - Opcjonalny model do użycia (jeśli nie podany, używa domyślnego)
   * @returns Odpowiedź z API
   */
  async chat(systemPrompt: string, userPrompt: string, format?: any, model?: string) {
    const response = await fetch(`${this.baseUrl}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model || this.defaultModel,
        stream: false,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        format
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Sprawdza, czy wiadomość jest spamem
   * @param question - Pytanie 
   * @param answer - Odpowiedź
   * @param model - Opcjonalny model do użycia
   * @returns Obiekt z informacją, czy odpowiedź jest spamem
   */
  async checkSpam(question: string, answer: string, model?: string) {
    const systemPrompt = "Jesteś klasyfikatorem spamu. Otrzymujesz JSON‑a z polami 'question' i 'answer'. Na ich podstawie oceń czy odpowiedź to spam.";
    const userContent = JSON.stringify({ question, answer });
    
    const format = {
      type: "object",
      properties: {
        isSpam: { type: "boolean" }
      },
      required: ["isSpam"]
    };

    return this.chat(systemPrompt, userContent, format, model);
  }

  /**
   * Analizuje sentyment tekstu
   * @param text - Tekst do analizy
   * @param model - Opcjonalny model do użycia
   * @returns Obiekt z informacją o sentymencie (positive, neutral, negative)
   */
  async analyzeSentiment(text: string, model?: string) {
    const systemPrompt = "Jesteś ekspertem od analizy sentymentu. Określ czy podany tekst ma wydźwięk pozytywny, neutralny czy negatywny.";
    
    const format = {
      type: "object",
      properties: {
        sentiment: { 
          type: "string",
          enum: ["positive", "neutral", "negative"]
        }
      },
      required: ["sentiment"]
    };

    return this.chat(systemPrompt, text, format, model);
  }

  /**
   * Sprawdza, czy prompt zawiera wszystkie 4 wymagane elementy
   * @param prompt - Prompt do sprawdzenia
   * @param requiredElements - Tablica wymaganych elementów
   * @param model - Opcjonalny model do użycia
   * @returns Obiekt z informacją, czy prompt zawiera wszystkie elementy i listą brakujących
   */
  async checkPromptElements(prompt: string, requiredElements: string[], model?: string) {
    const systemPrompt = `Jesteś ekspertem od analizy promptów. Sprawdź, czy podany prompt zawiera wszystkie wymagane elementy: ${requiredElements.join(', ')}.`;
    const userContent = prompt;
    
    const format = {
      type: "object",
      properties: {
        containsAll: { type: "boolean" },
        missingElements: { 
          type: "array",
          items: { type: "string" } 
        }
      },
      required: ["containsAll", "missingElements"]
    };

    return this.chat(systemPrompt, userContent, format, model);
  }
}

// Eksportuj pojedynczą instancję
export const ollamaApi = new OllamaAPI();
