const wydarzenia = [
    { data: '2025-09-01', nazwa: 'Rozpoczęcie roku szkolnego' },
    { data: '2025-10-14', nazwa: 'Dzień Edukacji Narodowej' },
    { data: '2025-11-10', nazwa: 'Dzień wolny od z.d.' },
    { data: '2025-11-11', nazwa: 'Narodowe Święto Niepodległości' },
    { data: '2026-01-01', nazwa: 'Nowy Rok' },
    { data: '2026-01-06', nazwa: 'Trzech Króli' },
    { data: '2026-01-09', nazwa: 'Egzamin zawodowy pisemny' },
    { data: '2026-02-16', nazwa: 'Ferie zimowe' },
    { data: '2026-04-02', nazwa: 'Wiosenna przerwa świąteczna' },
    { data: '2026-05-05', nazwa: 'Matura z j. polskiego' },
    { data: '2026-05-06', nazwa: 'Matura z matematyki' },
    { data: '2026-05-07', nazwa: 'Matura z j. obcego' },
    { data: '2026-05-08', nazwa: 'Egzamin zawodowy pisemny' },
    { data: '2026-06-26', nazwa: 'Zakończenie zajęć dydaktycznych' },
    { data: '2026-06-27', nazwa: 'Wakacje letnie' }
  ];
  
  const lista = document.getElementById("wydarzenie");
  for (let i = 0; i < wydarzenia.length; i++) {
    const opcja = document.createElement("option");
    opcja.value = wydarzenia[i].data;
    opcja.textContent = wydarzenia[i].nazwa;
    lista.appendChild(opcja);
  }
  
  function pokazDate(data) {
    const d = new Date(data);
    const dzien = d.getDate();
    const miesiac = d.getMonth() + 1;
    const rok = d.getFullYear();
    return (dzien < 10 ? "0" + dzien : dzien) + "-" + (miesiac < 10 ? "0" + miesiac : miesiac) + "-" + rok;
  }
  
  function ileDni(start, koniec) {
    const data1 = new Date(start);
    const data2 = new Date(koniec);
    const czas1 = Date.UTC(data1.getFullYear(), data1.getMonth(), data1.getDate());
    const czas2 = Date.UTC(data2.getFullYear(), data2.getMonth(), data2.getDate());
    return Math.floor((czas2 - czas1) / (24 * 60 * 60 * 1000));
  }
  
  document.getElementById("oblicz").onclick = function () {
    const dataWydarzenia = lista.value;
    const dzis = new Date();
  
    if (dataWydarzenia === "") {
      document.getElementById("wynik").textContent = "Wybierz wydarzenie.";
      return;
    }
  
    const nazwa = lista.options[lista.selectedIndex].text;
    const dni = ileDni(dzis, dataWydarzenia);
  
    document.getElementById("wynik").textContent =
      "Do wydarzenia \"" + nazwa + "\" od dnia " + pokazDate(dzis) + " do dnia " + pokazDate(dataWydarzenia) + " pozostało " + dni + " dni.";
  };
  
  document.getElementById("obliczOdWybranej").onclick = function () {
    const dataWydarzenia = lista.value;
    const start = document.getElementById("data").value;
  
    if (dataWydarzenia === "" || start === "") {
      document.getElementById("wynik").textContent = "Wybierz wydarzenie i datę.";
      return;
    }
  
    const nazwa = lista.options[lista.selectedIndex].text;
    const dni = ileDni(start, dataWydarzenia);
  
    document.getElementById("wynik").textContent =
      "Do wydarzenia \"" + nazwa + "\" od dnia " + pokazDate(start) + " do dnia " + pokazDate(dataWydarzenia) + " pozostało " + dni + " dni.";
  };
  
  document.getElementById("ukryj").onclick = function () {
    const kalendarz = document.getElementById("kalendarz");
    const przycisk = document.getElementById("ukryj");
  
    if (kalendarz.style.display === "none") {
      kalendarz.style.display = "block";
      przycisk.textContent = "Ukryj kalendarz";
    } else {
      kalendarz.style.display = "none";
      przycisk.textContent = "Pokaż kalendarz";
    }
  };
  
  