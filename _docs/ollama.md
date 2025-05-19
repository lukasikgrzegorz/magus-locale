# Dokumentacja API Ollama

## Wprowadzenie

Ollama to usługa pozwalająca na lokalny dostęp do modeli językowych za pomocą interfejsu API. Poniżej znajdują się przykłady, jak korzystać z API Ollama.

## Przykład zapytania do API Chat

Poniższy przykład pokazuje, jak wykonać zapytanie do API Ollama w celu klasyfikacji spamu:

```json
// Endpoint: http://localhost:11434/api/chat
{
  "model": "SpeakLeash/bielik-4.5b-v3.0-instruct:Q8_0",   
  "stream": false,                    
  "messages": [
    {
      "role": "system",
      "content": "Jesteś klasyfikatorem spamu. Otrzymujesz JSON‑a z polami 'question' i 'answer'. Na ich podstawie oceń czy odpowiedź to spam."
    },
    {
      "role": "user",
      "content": "{\"question\":\"Dlaczego wybrałeś markę lm czerwone?\",\"answer\":\"Ponieważ uważam tą opcję za najbardziej odpowiednią dla mnie.\"}"
    }
  ],
  "format": {
    "type": "object",
    "properties": {
      "isSpam": { "type": "boolean" }
    },
    "required": ["isSpam"]
  }
}
```

### Objaśnienie parametrów

- **model**: Określa model językowy do użycia. W tym przypadku wykorzystujemy model `SpeakLeash/bielik-4.5b-v3.0-instruct` w kwantyzacji Q8_0.
- **stream**: Wartość `false` oznacza, że odpowiedź zostanie zwrócona jako całość, a nie jako strumień danych.
- **messages**: Tablica wiadomości w formacie zgodnym z OpenAI API:
  - **role**: Określa rolę wiadomości (`system`, `user`, `assistant`).
  - **content**: Zawartość wiadomości.
- **format**: Określa oczekiwany format odpowiedzi:
  - **type**: Typ zwracanej wartości (np. `object`).
  - **properties**: Właściwości obiektu odpowiedzi.
  - **required**: Lista wymaganych właściwości.

### Przykładowa odpowiedź

```json
{
  "model": "SpeakLeash/bielik-4.5b-v3.0-instruct:Q8_0",
  "created_at": "2023-07-15T12:45:28.167Z",
  "message": {
    "role": "assistant",
    "content": "{\"isSpam\": false}"
  },
  "done": true,
  "total_duration": 523450083,
  "load_duration": 1541667,
  "prompt_eval_count": 27,
  "prompt_eval_duration": 325416750,
  "eval_count": 17,
  "eval_duration": 195824500
}
```

## Dodatkowe zasoby

- [Dokumentacja oficjalna Ollama](https://ollama.com/docs)
- [GitHub Ollama](https://github.com/ollama/ollama)
- [Lista dostępnych modeli](https://ollama.com/library)