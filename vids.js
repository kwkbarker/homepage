

document.querySelector('#filmvids').addEventListener('change', function(event) {
    if (this.value === "lastkind") {
        document.getElementById('ytvid').src = "https://www.youtube.com/embed/GHB-IJZXCp0";
    }
    else if (this.value === "family") {
        document.getElementById('ytvid').src = "https://www.youtube.com/embed/tgOGnfQBm6g";
    }
    else if (this.value === "ecoli") {
        document.getElementById('ytvid').src = "https://www.youtube.com/embed/fLDPmKIgjCE";
    }
})

document.querySelector('#musicvids').addEventListener('change', function(event) {
    if (this.value === "epilepsy") {
        document.getElementById('ytvidm').src = "https://www.youtube.com/embed/h32WC1aUQsc";
    }
    else if (this.value === "fruit") {
        document.getElementById('ytvidm').src = "https://www.youtube.com/embed/DVG8Batu-Ac";
    }
    else if (this.value === "hurry") {
        document.getElementById('ytvidm').src = "https://www.youtube.com/embed/yalDiAOiNWE";
    }
})
