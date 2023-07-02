let userInput = prompt("Lutfen Isminizi girin:"); 
// console.log("Girilen değer: " + userInput); 

let spanElement = document.getElementById('myName');
spanElement.innerText = userInput;

function showTime(){
    var clock = document.getElementById('myClock');
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

     // Saat, dakika ve saniyeyi iki haneli formata dönüştürme

     hours = formatTime(hours);
     minutes = formatTime(minutes);
     seconds = formatTime(seconds);

       // Saati ekrana yazdırma

       clock.innerHTML = hours + ":" + minutes + ":" + seconds;

          // 1 saniye sonra fonksiyonu tekrar çağırma

          setTimeout(showTime,1000);

}

function formatTime(time) {
    if (time < 10) {
        time = "0" + time; // Tek haneli değerleri iki haneli formata dönüştürme
    }
    return time;
}


showTime(); // İlk çağrıyı yaparak saatleri göstermeye başlama