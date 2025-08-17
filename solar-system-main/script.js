// --- STAR BACKGROUND ---
function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}

// --- PLANET TRIVIA & QUIZ DATA ---
const planetTrivia = {
  mercury: {
    trivia: "Mercury has no atmosphere, so it can't trap heat or insulate the surface.",
    additionalInfo: "Mercury is the smallest planet in our solar system and closest to the Sun. It has a rocky surface and is heavily cratered.",
    image: "images/mercury.png", // Replace with the actual image path
    quiz: {
      question: "How long is a year on Mercury?",
      options: ["88 Earth days", "365 Earth days", "24 hours"],
      answer: 0
    }
  },
  venus: {
    trivia: "Venus rotates backward compared to most planets in the solar system.",
    additionalInfo: "Venus is the hottest planet in our solar system due to its thick CO₂ atmosphere, which traps heat. It is often called Earth's twin because of its similar size and composition.",
    image: "images/venus.png", // Replace with the actual image path
    quiz: {
      question: "Why is Venus hotter than Mercury?",
      options: ["Closer to the Sun", "Thick CO₂ atmosphere", "It spins faster"],
      answer: 1
    }
  },
  earth: {
    trivia: "Earth is the only planet known to support life.",
    additionalInfo: "Earth has a diverse climate and is covered by 70% water. It has one natural satellite, the Moon.",
    image: "images/earth.png", // Replace with the actual image path
    quiz: {
      question: "What percent of Earth's surface is covered by ocean?",
      options: ["29%", "50%", "70%"],
      answer: 2
    }
  },
  mars: {
    trivia: "Mars has the tallest volcano in the solar system, Olympus Mons.",
    additionalInfo: "Mars is known as the Red Planet due to its iron oxide-rich soil. It has two moons, Phobos and Deimos.",
    image: "images/mars.png", // Replace with the actual image path
    quiz: {
      question: "What are the names of Mars' moons?",
      options: ["Europa & Ganymede", "Phobos & Deimos", "Titan & Enceladus"],
      answer: 1
    }
  },
  jupiter: {
    trivia: "Jupiter’s Great Red Spot is a giant storm that has lasted for centuries.",
    additionalInfo: "Jupiter is the largest planet in our solar system and has at least 79 moons, including the four largest: Io, Europa, Ganymede, and Callisto.",
    image: "images/jupiter.png", // Replace with the actual image path
    quiz: {
      question: "What is the Great Red Spot?",
      options: ["A volcano", "A giant storm", "A moon"],
      answer: 1
    }
  },
  saturn: {
    trivia: "Saturn’s rings are made mostly of ice particles.",
    additionalInfo: "Saturn is famous for its stunning ring system, which is made up of ice and rock particles. It has over 80 moons.",
    image: "images/saturn.png", // Replace with the actual image path
    quiz: {
      question: "What are Saturn's rings mostly made of?",
      options: ["Ice and rock", "Gas", "Metal"],
      answer: 0
    }
  },
  uranus: {
    trivia: "Uranus rotates on its side, making it unique in the solar system.",
    additionalInfo: "Uranus is an ice giant with a pale blue color due to methane in its atmosphere. It has a faint ring system and 27 known moons.",
    image: "images/uranus.png", // Replace with the actual image path
    quiz: {
      question: "What is unique about Uranus's rotation?",
      options: ["It rotates backward", "It rotates on its side", "It doesn't rotate"],
      answer: 1
    }
  },
  neptune: {
    trivia: "Neptune has the fastest winds in the solar system.",
    additionalInfo: "Neptune is a deep blue ice giant with supersonic winds. It has 14 known moons, the largest being Triton.",
    image: "images/neptune.png", // Replace with the actual image path
    quiz: {
      question: "What is special about Neptune's winds?",
      options: ["They are the slowest", "They are the fastest", "They are invisible"],
      answer: 1
    }
  },
  pluto: {
    trivia: "Pluto is a dwarf planet with a highly elliptical orbit.",
    additionalInfo: "Pluto was reclassified as a dwarf planet in 2006. It has five known moons, the largest being Charon.",
    image: "images/pluto.png", // Replace with the actual image path
    quiz: {
      question: "What is unique about Pluto's orbit?",
      options: ["It is circular", "It is highly elliptical", "It is tilted"],
      answer: 1
    }
  }
};

// --- MODAL LOGIC FOR TRIVIA & QUIZ ---
function showPlanetModal(planetKey) {
  const modal = document.getElementById('trivia-modal');
  const title = document.getElementById('trivia-title');
  const content = document.getElementById('trivia-content');
  const quizBtn = document.getElementById('quiz-btn');

  if (!modal || !title || !content || !quizBtn) {
    console.error('One or more modal elements are missing:', { modal, title, content, quizBtn });
    return; 
  }

  const data = planetTrivia[planetKey];
  title.textContent = `${planetKey.charAt(0).toUpperCase() + planetKey.slice(1)} Information`;
  content.innerHTML = `
    <div style="text-align:center;">
      <img src="${data.image}" alt="${planetKey} image" style="width:150px;height:auto;border-radius:8px;margin-bottom:1em;">
      <p id="trivia-additionalInfo">${data.additionalInfo}</p>
      <p><strong><span class="trivia-label">Trivia:</span></strong> ${data.trivia}</p>
    </div>
  `;

  if (data && data.quiz) {
    quizBtn.style.display = 'inline-block';
    quizBtn.style.padding = '10px 20px';
    quizBtn.style.backgroundColor = '#4ade80';
    quizBtn.style.color = 'white';
    quizBtn.style.border = 'none';
    quizBtn.style.borderRadius = '5px';
    quizBtn.style.cursor = 'pointer';
    quizBtn.style.transition = 'background-color 0.3s';
    quizBtn.onclick = () => showQuizFlex(planetKey);
  } else {
    quizBtn.style.display = 'none';
  }

  const closeBtn = modal.querySelector('button:last-of-type');
  closeBtn.style.padding = '10px 20px';
  closeBtn.style.backgroundColor = '#f87171';
  closeBtn.style.color = 'white';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '5px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.transition = 'background-color 0.3s';
  closeBtn.onmouseover = () => closeBtn.style.backgroundColor = '#dc2626';
  closeBtn.onmouseout = () => closeBtn.style.backgroundColor = '#f87171';

  modal.style.display = 'block';
}

// --- FLEX QUIZ MODAL ---
function showQuizFlex(planetKey) {
  const quiz = planetTrivia[planetKey]?.quiz;
  if (!quiz) return;

  // Remove any existing quiz modal
  const oldQuiz = document.getElementById('quiz-flex-modal');
  if (oldQuiz) oldQuiz.remove();

  const quizModal = document.createElement('div');
  quizModal.id = 'quiz-flex-modal';
  quizModal.style.position = 'fixed';
  quizModal.style.top = '0';
  quizModal.style.left = '0';
  quizModal.style.width = '100vw';
  quizModal.style.height = '100vh';
  quizModal.style.background = 'rgba(0, 0, 0, 0.8)';
  quizModal.style.display = 'flex';
  quizModal.style.alignItems = 'center';
  quizModal.style.justifyContent = 'center';
  quizModal.style.zIndex = '3000';

  quizModal.innerHTML = `
    <div style="background:#fff;padding:2em;border-radius:12px;max-width:500px;width:90%;display:flex;flex-direction:column;align-items:center;box-shadow:0 4px 8px rgba(0,0,0,0.2);">
      <h3 style="color:#4ade80;font-size:1.5em;margin-bottom:1em;">${planetKey.charAt(0).toUpperCase() + planetKey.slice(1)} Quiz</h3>
      <p style="font-weight:bold;font-size:1.2em;text-align:center;margin-bottom:1em;">${quiz.question}</p>
      <div id="quiz-options-flex" style="width:100%;display:flex;flex-direction:column;align-items:stretch;gap:0.5em;"></div>
      <p style="margin-top:1em;color:gray;font-size:0.9em;text-align:center;">Select the correct answer below:</p>
      <button style="margin-top:1em;padding:10px 20px;background-color:#f87171;color:white;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s;" 
        onmouseover="this.style.backgroundColor='#dc2626'" 
        onmouseout="this.style.backgroundColor='#f87171'" 
        onclick="document.body.removeChild(document.getElementById('quiz-flex-modal'))">Close</button>
    </div>
  `;

  const optionsDiv = quizModal.querySelector('#quiz-options-flex');
  quiz.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.padding = '10px';
    btn.style.borderRadius = '5px';
    btn.style.border = '1px solid #4ade80';
    btn.style.background = '#fff';
    btn.style.color = '#222';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'all 0.3s';
    btn.onmouseover = () => {
      btn.style.background = '#4ade80';
      btn.style.color = '#fff';
    };
    btn.onmouseout = () => {
      btn.style.background = '#fff';
      btn.style.color = '#222';
    };
    btn.onclick = () => {
      if (idx === quiz.answer) {
        btn.style.background = '#4ade80';
        btn.style.color = '#fff';
        setTimeout(() => document.body.removeChild(quizModal), 800);
        alert('Correct! 🎉');
      } else {
        btn.style.background = '#f87171';
        btn.style.color = '#fff';
        setTimeout(() => {
          btn.style.background = '#fff';
          btn.style.color = '#222';
        }, 800);
        alert('Try again!');
      }
    };
    optionsDiv.appendChild(btn);
  });

  document.body.appendChild(quizModal);
}

// --- PLANET & NAV BAR INTERACTIONS ---
function addPlanetAndNavBarInteractions() {
  // Only add click to the visible planet images, not the orbit area
  const planetImages = document.querySelectorAll('.mercury::before, .venus::before, .earth::before, .mars::before, .jupiter::before, .saturn::before, .uranus::before, .neptune::before, .pluto::before');
  if (planetImages.length) {
    planetImages.forEach(img => {
      const planetKey = img.className.toLowerCase();
      img.onclick = () => showPlanetModal(planetKey);
    });
  } else {
    // fallback: only add click to the planet's visible area, not the orbit
    const planets = document.querySelectorAll('.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto');
    planets.forEach(planet => {
      // Only add click if the event target is the planet's visible area
      planet.addEventListener('click', function(e) {
        // Only trigger if the click is on the planet's image (pseudo-element area)
        if (e.target === planet) {
          const planetKey = planet.className.toLowerCase();
          showPlanetModal(planetKey);
        }
      });
    });
  }

  // Nav bar planet buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    // Use getAttribute to avoid dataset issues with inline HTML
    const planetKey = (button.getAttribute('data-planet') || '').toLowerCase();
    button.onclick = () => showPlanetModal(planetKey);
  });
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  addPlanetAndNavBarInteractions();
});

