// Ustawienia strony programu o rzucaniu palenia (szablon).
// Podmień wartości w cudzysłowach. Nic poza tym plikiem nie musisz ruszać.

window.LANDING = {
  // Nazwa programu. Pojawia się w logo, tekstach i stopce. Robocza, do zmiany.
  MARKA: "Wolne Płuco",

  // Cena programu (tekst, np. "87 zł").
  CENA: "87 zł",

  // Supabase: projekt wolne-pluco (Frankfurt). Klucz publishable jest publiczny z założenia.
  SUPABASE_URL: "https://mifdxevdpptjgkwrxhpu.supabase.co",
  SUPABASE_KEY: "sb_publishable_vuGZzGl3zGE_yI-bd8pPpA_r2P5czIn",
  TABELA: "zgloszenia_palenie",

  // Film z YouTube (niepubliczny). Z linku https://youtu.be/AbCdEf12345 wklej tylko: AbCdEf12345
  YOUTUBE_ID: "",

  // Twoje zdjęcie do sekcji "Kim jestem"
  PHOTO_URL: "tomasz.jpg?v=2",

  // Opinie: TYLKO prawdziwe, za zgodą osoby. Pusta lista = sekcja się nie pokazuje.
  // Przykład: { imie: "Kamil", opis: "palił 12 lat · po sesji hipnozy", tekst: "..." }
  OPINIE: [
    { imie: "Angelika", foto: "img/opinie/angelika.jpg", opis: "papierosy", tekst: "Tomek, cieszę się, że na Ciebie trafiłam. Pokazałeś mi, dlaczego tak naprawdę paliłam i co tak naprawdę zagłuszałam. Techniki i ćwiczenia, które wdrożyłam w życie, pomagają mi bardzo. To już ponad 5. tydzień niepalenia. Jestem z siebie dumna!" },
    { imie: "Oskar", foto: "img/opinie/oskar.jpg", opis: "podgrzewacz tytoniu", tekst: "Jeszcze niedawno podgrzewałem tytoń w urządzeniu, jadąc autem. Dzisiaj już tego nie robię. Dałeś mi świadomość tego, że nie muszę co chwilę palić, bo mam prawo wyboru. Wybrałem w końcu siebie i swoje zdrowie. Zacząłem chodzić na treningi i moja kondycja jest coraz lepsza. Dziękuję!" },
    { imie: "Wojtek", foto: "img/opinie/wojtek.jpg", opis: "e-papieros · po sesji hipnozy", tekst: "Cześć Tomaszu. Chciałbym się z Tobą podzielić moją wygraną. Po naszej sesji hipnozy, która była 3 tygodnie temu, daję sobie świetnie radę z niepaleniem e-papierosa, a gdy ktoś przy mnie pali, nie przeszkadza mi to. Jestem wdzięczny, bo pomogłeś mi i mojemu zdrowiu. Dziękuję." },
    { imie: "Michał", foto: "img/opinie/michal.jpg", opis: "po hipnozie i ćwiczeniach oddechowych", tekst: "Siema! W końcu odzyskałem energię! Zająłem głowę czym innym, a gdy pojawia się cięższa chwila, wiem, jak temu stawić czoła. Dziękuję za hipnozę i ćwiczenia oddechowe, które mi dałeś. Jesteś ŚWIETNY!" },
    { imie: "Oliwia", foto: "img/opinie/oliwia.jpg", opis: "", tekst: "Hejka Tomuś! Myślałam, że nigdy nie uwolnię się od buszka, było to dla mnie wręcz niemożliwe. Fajne są te ćwiczenia. Nareszcie zrozumiałam ten nawyk, dlatego nad nim panuję. Jestem Tobie wdzięczna." },
    { imie: "Łukasz", foto: "img/opinie/lukasz.jpg", opis: "po sesji hipnozy", tekst: "Witaj! Doszedłem do siebie po ostatniej sesji hipnozy. Powiem Ci, że konfrontacja z moim wewnętrznym dzieckiem otworzyła mi oczy nie tylko na to, dlaczego paliłem, ale też na inne prywatne bolączki. Potrzebowałem tego. Odpowiedni człowiek pojawił się w odpowiednim czasie. Dzięki." }
  ],

  // Linki
  PRIVACY_URL: "https://app.wolnepluco.tomaszswiadomosc.pl/prywatnosc.html",
  INSTAGRAM_URL: "https://www.instagram.com/to.masz.swiadomosc/"
};
