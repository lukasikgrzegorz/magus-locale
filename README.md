# Magus Locale – Zaklęcia do Lokalnego Testowania Modeli Językowych

**Magus Locale** to lekka aplikacja do szybkiego testowania modeli językowych poprzez serię "magicznych prób". Aplikacja jest zbudowana z wykorzystaniem **Astro** i napędzana przez **Ollama**, umożliwiając szybkie, prywatne i konfigurowalne testowanie promptów.

## Magiczne Próby (Główne Funkcje)

- **Anti-Spam Charm** – Wykrywa, czy wiadomość jest spamem.
- **Sentimentus Revealo** – Klasyfikuje sentyment jako *pozytywny*, *neutralny* lub *negatywny*.
- **Promptus Quadratum** – Sprawdza, czy prompt użytkownika zawiera wszystkie cztery wymagane elementy.

## Dlaczego Lokalnie?

Wierzymy, że magia działa najlepiej blisko domu. Uruchamianie modeli lokalnie za pomocą **Ollama** oznacza:

- Pełną **prywatność danych** – bez zależności od chmury
- Szybsze odpowiedzi
- Większą kontrolę nad swoimi testami

## Wymagania

- [Node.js](https://nodejs.org/) (v16 lub nowszy)
- [Ollama](https://ollama.com/) zainstalowane i działające lokalnie
- Model SpeakLeash/bielik-4.5b-v3.0-instruct (lub inny preferowany model)

## Instalacja

1. Sklonuj to repozytorium:
   ```bash
   git clone https://github.com/username/magus-locale.git
   cd magus-locale
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

4. Otwórz aplikację w przeglądarce pod adresem [http://localhost:4321](http://localhost:4321)

## Konfiguracja modelu

Aplikacja domyślnie korzysta z modelu `SpeakLeash/bielik-4.5b-v3.0-instruct:Q8_0`. Aby zmienić model, edytuj plik `src/lib/api.ts`.

## Technologie

- [Astro](https://astro.build/) - Framework do budowy szybkich stron internetowych
- [Tailwind CSS](https://tailwindcss.com/) - Narzędzie do stylowania interfejsu użytkownika
- [nanostores](https://github.com/nanostores/nanostores) - Minimalistyczna biblioteka do zarządzania stanem
- [Ollama](https://ollama.com/) - Narzędzie do lokalnego uruchamiania modeli językowych

## Licencja

MIT