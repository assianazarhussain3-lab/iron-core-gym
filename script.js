function sendWhatsApp() {
    const name = document.getElementById('userName').value.trim();
    const prog = document.getElementById('userProgram').value;
    const phone = "923288481557"; 

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    // 1. Success Message Dikhayein
    var popup = document.getElementById("successPopup");
    popup.className = "show";

    // 2. Message Tayyar Karein
    const message = `Hello Iron-Core Gym!\n\nI want to confirm my booking.\nName: ${name}\nProgram: ${prog}`;
    const finalUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // 3. 2 Seconds ke wait ke baad WhatsApp kholain (Taake user popup dekh sake)
    setTimeout(function() {
        window.location.href = finalUrl;
    }, 2000);
}