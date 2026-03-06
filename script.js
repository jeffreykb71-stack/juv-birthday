// Music Control - Start on first YES click
const bgMusic = document.getElementById('bgMusic');

function startExperience() {
    document.getElementById('volumeModal').classList.add('show');
}

function closeVolumeModal() {
    document.getElementById('volumeModal').classList.remove('show');
    bgMusic.play().catch(e => console.log('Music autoplay prevented'));
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    nextScreen(2);
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('customNotification');
    notification.textContent = message;
    notification.className = 'notification-toast show ' + type;
    setTimeout(() => { notification.classList.remove('show'); }, 3000);
}

// Game 1: Catch the Bear
let bearScore = 0;
let bearTime = 15;
let bearTimer = null;

function moveBear() {
    const target = document.getElementById('clickTarget');
    const container = target.parentElement;
    const maxX = container.clientWidth - 80;
    const maxY = container.clientHeight - 80;
    target.style.left = (Math.random() * maxX) + 'px';
    target.style.top = (Math.random() * maxY) + 'px';
}

function catchBear() {
    bearScore++;
    document.getElementById('bearScore').innerText = bearScore;
    confetti({ particleCount: 20, spread: 50 });
    
    if (bearScore >= 10) {
        clearInterval(bearTimer);
        showNotification('🎉 Amazing! You caught all the bears!', 'success');
        setTimeout(() => nextScreen(3), 2000);
    } else {
        moveBear();
    }
}

function startBearGame() {
    bearScore = 0;
    bearTime = 15;
    document.getElementById('bearScore').innerText = bearScore;
    document.getElementById('bearTime').innerText = bearTime;
    moveBear();
    
    bearTimer = setInterval(() => {
        bearTime--;
        document.getElementById('bearTime').innerText = bearTime;
        
        if (bearTime <= 0) {
            clearInterval(bearTimer);
            if (bearScore < 10) {
                alert('Time\'s up! But that\'s okay, let\'s continue! 😊');
                nextScreen(3);
            }
        }
    }, 1000);
}

const memories = [
    { url: "https://i.ibb.co/rfN99SX3/Whats-App-Image-2026-03-03-at-12-35-47-AM.jpg", title: "Where it all started... 1", msg: "Where it all started..." },
    { url: "https://i.ibb.co/Hf71zBRC/Whats-App-Image-2026-03-03-at-12-59-26-AM.jpg", title: "When margamkali turns to margamillatha kalli.. ", msg: "When margamkali turns to margamillatha kalli.. " },
    { url: "https://i.ibb.co/gbvcztNS/Whats-App-Image-2026-03-03-at-12-19-01-AM-1.jpg", title: "Laser quest", msg: "when you went to buy me laser" },
    { url: "https://www.dropbox.com/scl/fi/r41fvurmqvvc4j0n2da4x/WhatsApp-Video-2026-03-03-at-1.03.56-AM.mp4?rlkey=0g9hdh5r0rk4bmo0fjpnka8ew&st=07cpnkof&dl=1", title: "dumb arguments", msg: "Dumb arguments" },
    { url: "https://i.ibb.co/rKDtZc1q/Whats-App-Image-2026-03-03-at-12-19-01-AM-2.jpg", title: "Gossiping with deserts", msg: "gossiping with deserts" },
    { url: "https://i.ibb.co/N6YkZQsB/Whats-App-Image-2026-02-01-at-8-59-37-PM-4.jpg", title: "To the day of mykosssss", msg: "To the day of mykosss" },
    { url: "https://i.ibb.co/Y4HgFpTN/Whats-App-Image-2026-02-01-at-4-51-53-PM.jpg", title: "", msg: "Memories!" },
    { url: "https://i.ibb.co/XZDnQnL1/Whats-App-Image-2026-02-01-at-4-45-33-PM-1.jpg", title: "", msg: "Memories!" },
    { url: "https://i.ibb.co/0RK9mKv8/Whats-App-Image-2026-02-01-at-4-45-32-PM-2.jpg", title: "", msg: "Memories!" },
    { url: "https://i.ibb.co/TB552XXg/Whats-App-Image-2026-03-03-at-1-08-16-AM.jpg", title: "", msg: "Memories!" },
    { url: "https://i.ibb.co/svnXRGqC/Whats-App-Image-2026-03-03-at-7-28-25-PM.jpg", title: "Fun Times", msg: "Memories!" },
    { url: "https://i.ibb.co/Y73h4y4F/Whats-App-Image-2026-03-03-at-7-28-26-PM.jpg", title: "", msg: "Memories!" },
    { url: "https://www.dropbox.com/scl/fi/z12zk9fdca67foneqjo5i/WhatsApp-Video-2026-03-03-at-1.13.55-AM.mp4?rlkey=o8b3s7zh5afl5eextx0s8lb7i&st=dgcgsqq6&dl=1", title: "some vodka🥴🍹", msg: "Cheers!" },
    { url: "https://i.ibb.co/FLsJKsch/Whats-App-Image-2026-02-01-at-4-45-24-PM.jpg", title: "", msg: "Memories!" },
    { url: "https://www.dropbox.com/scl/fi/wd1j1ouifil61bofrzbar/WhatsApp-Video-2026-03-03-at-1.09.49-AM.mp4?rlkey=zm3gu4tvpzz023wms8fm7cpnf&st=0bvu4yxs&dl=1", title: "Dumber things", msg: "Dumber things" },
    { url: "https://i.ibb.co/4ZhDCbx7/Whats-App-Image-2026-02-01-at-4-45-18-PM.jpg", title: "", msg: "Memories!" },
    { url: "https://www.dropbox.com/scl/fi/7btgua029na1q52l9f5ki/WhatsApp-Video-2026-03-03-at-1.11.38-AM.mp4?rlkey=0p0xa2gjqkdeoj1q2ks8eqdwc&st=ppjbcsqh&dl=1", title: "Even dumber things", msg: "Even dumber things" },
    { url: "https://i.ibb.co/Y734X8Pm/Whats-App-Image-2026-03-03-at-7-28-24-PM.jpg", title: "", msg: "Memories!" },
    { url: "https://www.dropbox.com/scl/fi/41m3aidg4vzqztqme5j6b/WhatsApp-Video-2026-03-03-at-1.12.37-AM.mp4?rlkey=9q3hu958mjda36jtqd8yil802&st=b5m5kv8g&dl=1", title: "some Upadesham", msg: "Upadesham time!" },
    { url: "https://i.ibb.co/8gj0T75f/Whats-App-Image-2026-02-01-at-4-44-39-PM-1.jpg", title: "😎😎", msg: "Cool vibes" },
    { url: "https://www.dropbox.com/scl/fi/8j0f7z3qwk1uu07x83d6t/WhatsApp-Video-2026-03-04-at-11.42.49-PM.mp4?rlkey=0xvrgc2m3x9qxbwlse1cm009v&st=5wuwexab&dl=1", title: "Holi", msg: "Colorful vibes!" },
    { url: "https://i.ibb.co/ksmhhbgB/Whats-App-Image-2026-02-01-at-4-45-30-PM-1.jpg", title: "And so on...", msg: "And so on..." }
];

let currentIndex = 0;

function updateCard() {
    const card = document.getElementById('memoryCard');
    const container = document.getElementById('mediaContainer');
    
    card.classList.remove('animate__fadeIn');
    void card.offsetWidth; 
    card.classList.add('animate__fadeIn');

    const item = memories[currentIndex];
    if (item.url.toLowerCase().includes('.mp4')) {
        container.innerHTML = `
            <video id="journeyVideo" src="${item.url}" class="media-content" autoplay loop muted playsinline></video>
            <button class="sound-btn" onclick="event.stopPropagation(); toggleSound();">🔊</button>
            <div class="card-hint">👆 Click to view message</div>
        `;
    } else {
        container.innerHTML = `
            <img src="${item.url}" class="media-content">
            <div class="card-hint">👆 Click to view message</div>
        `;
    }
    document.getElementById('currentTitle').innerText = item.title;
    
    document.getElementById('currentPhoto').innerText = currentIndex + 1;
    document.getElementById('totalPhotos').innerText = memories.length;
    
    if (currentIndex % 5 === 0) {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    }
}

function toggleSound() {
    const video = document.getElementById('journeyVideo');
    if (video) {
        video.muted = !video.muted;
        const soundBtn = document.querySelector('.sound-btn');
        soundBtn.innerText = video.muted ? "🔇" : "🔊";
    }
}

function nextPhoto() { 
    if (currentIndex < memories.length - 1) { 
        currentIndex++; 
        updateCard(); 
    } else { 
        // THIS NOW GOES TO THE STICKY NOTE
        nextScreen('screen_stickynote'); 
    } 
}

function prevPhoto() { 
    if (currentIndex > 0) { 
        currentIndex--; 
        updateCard(); 
    } 
}

function showPopup() { 
    showNotification(memories[currentIndex].msg, 'info');
    confetti({ particleCount: 30 }); 
}

// THIS PEELS OFF THE STICKY NOTE
function peelOff() {
    document.getElementById('note').classList.add('fall');
    setTimeout(() => { 
        nextScreen(5); 
    }, 1000); // Waits 1 second for the peel animation before showing the final page
}

function nextScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    const screenId = typeof screen === 'number' ? 'screen' + screen : screen;
    document.getElementById(screenId).classList.add('active');
    
    if(screenId === 'game1') startBearGame();
    if(screen === 4 || screenId === 'screen4') {
        updateCard();
        addFloatingEmojis();
    }
    if(screen === 5 || screenId === 'screen5') {
        setInterval(() => { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); }, 800);
    }
}

function addFloatingEmojis() {
    const emojis = ['✨', '💫', '⭐', '🌟', '💝', '💖', '🎀', '🎈'];
    const screen4 = document.getElementById('screen4');
    
    document.querySelectorAll('.floating-emoji').forEach(el => el.remove());
    
    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 90 + '%';
        emoji.style.top = Math.random() * 80 + '%';
        emoji.style.animationDelay = Math.random() * 5 + 's';
        emoji.style.animationDuration = (10 + Math.random() * 10) + 's';
        screen4.appendChild(emoji);
    }
}

function kickOut(msg) {
    document.body.innerHTML = `<div style="text-align:center; padding:50px;"><div style="font-size:4rem;">🥊 🔫</div><h1>${msg}</h1><button class="btn btn-yes" onclick="location.reload()">Wait I'm Really Juvan</button></div>`;
}