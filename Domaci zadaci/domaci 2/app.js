// Uneti neki string, mala slova pretvoriti u velika i obrtnuto, velika pretvoriti u mala

rec = "ABcDEfg";
noviString = "";
for (i = 0; i < rec.length; i++) {
  if (rec[i] === rec[i].toUpperCase()) {
    noviString += rec[i].toLowerCase();
  } else {
    noviString += rec[i].toUpperCase();
  }
}
console.log(noviString);