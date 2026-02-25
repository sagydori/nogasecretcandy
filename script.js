// ===== Config =====
const SECRET_CODE = "123456789";
const FINAL_PHRASE = "SUR LA FENETRE";

// Each puzzle has a main question and an alternate (shown after 2 wrong answers)
// Letters: מ,ע,ל, ,ה,ר,מ,ק,ו,ל = 9 non-space letters
// Ordered: HARD math & logic, progressively harder

const PUZZLES = [
  {
    letter: "S",
    category: "אלגברה",
    main: {
      question: "אם 5x - 3(2x + 1) = 7, מהו x?",
      answers: ["-10", "10", "-4", "4"],
      correct: 0
    },
    alt: {
      question: "אם 4(x + 2) - 3x = 15, מהו x?",
      answers: ["5", "7", "9", "3"],
      correct: 1
    }
  },
  {
    letter: "U",
    category: "לוגיקה",
    main: {
      question: "לשלושה חברים יש ביחד 120 ש\"ח. לאורי יש פי 2 מדני, ולשרה יש פי 3 מדני. כמה יש לשרה?",
      answers: ["40", "60", "20", "80"],
      correct: 1
    },
    alt: {
      question: "לשלושה חברים יש ביחד 180 ש\"ח. ליוסי יש פי 2 ממיכל, ולנועה יש פי 3 ממיכל. כמה יש ליוסי?",
      answers: ["30", "90", "60", "45"],
      correct: 2
    }
  },
  {
    letter: "R",
    category: "ידע כללי",
    main: {
      question: "מי היה ראש הממשלה הראשון של ישראל?",
      answers: ["דוד בן-גוריון", "יצחק רבין", "מנחם בגין", "גולדה מאיר"],
      correct: 0
    },
    alt: {
      question: "באיזו עיר נמצא מגדל אייפל?",
      answers: ["לונדון", "ברלין", "רומא", "פריז"],
      correct: 3
    }
  },
  {
    letter: "L",
    category: "אחוזים",
    main: {
      question: "מחיר מוצר עלה ב-20% ואז ירד ב-20%. אם המחיר המקורי היה 100 ש\"ח, מה המחיר הסופי?",
      answers: ["100", "96", "104", "98"],
      correct: 1
    },
    alt: {
      question: "מחיר מוצר ירד ב-25% ואז עלה ב-25%. אם המחיר המקורי היה 200 ש\"ח, מה המחיר הסופי?",
      answers: ["200", "187.5", "195", "190"],
      correct: 1
    }
  },
  {
    letter: "A",
    category: "סדרות",
    main: {
      question: "מהו המספר הבא בסדרה: 1, 1, 2, 3, 5, 8, 13, ?",
      answers: ["18", "20", "21", "26"],
      correct: 2
    },
    alt: {
      question: "מהו המספר הבא בסדרה: 2, 6, 18, 54, 162, ?",
      answers: ["324", "486", "216", "648"],
      correct: 1
    }
  },
  {
    letter: "F",
    category: "אלגברה מתקדמת",
    main: {
      question: "אם f(x) = x² - 4x + 3, מהו f(5)?",
      answers: ["8", "6", "10", "12"],
      correct: 0
    },
    alt: {
      question: "אם g(x) = 2x² - 3x + 1, מהו g(4)?",
      answers: ["19", "21", "25", "17"],
      correct: 1
    }
  },
  {
    letter: "E",
    category: "לוגיקה מתקדמת",
    main: {
      question: "בכיתה יש 30 תלמידים. 18 אוהבים מתמטיקה, 15 אוהבים מדעים, ו-8 אוהבים את שניהם. כמה לא אוהבים אף אחד?",
      answers: ["3", "5", "7", "10"],
      correct: 1
    },
    alt: {
      question: "בכיתה יש 40 תלמידים. 25 משחקים כדורגל, 20 משחקים כדורסל, ו-10 משחקים בשניהם. כמה לא משחקים כלום?",
      answers: ["5", "10", "15", "3"],
      correct: 0
    }
  },
  {
    letter: "N",
    category: "משוואות",
    main: {
      question: "פתרו את המערכת: x + y = 10 ו-2x - y = 5. מהו x?",
      answers: ["3", "5", "7", "4"],
      correct: 1
    },
    alt: {
      question: "פתרו את המערכת: x + y = 12 ו-3x - y = 8. מהו y?",
      answers: ["5", "7", "8", "6"],
      correct: 1
    }
  },
  {
    letter: "E",
    category: "חשיבה מתמטית",
    main: {
      question: "הסכום של כל המספרים השלמים מ-1 עד 50 הוא:",
      answers: ["1225", "1275", "1250", "1300"],
      correct: 1
    },
    alt: {
      question: "הסכום של כל המספרים הזוגיים מ-2 עד 100 הוא:",
      answers: ["2500", "2450", "2550", "2600"],
      correct: 2
    }
  },
  {
    letter: "T",
    category: "הנדסה",
    main: {
      question: "במשולש ישר זווית, אם הניצבים הם 3 ו-4, מה אורך היתר?",
      answers: ["5", "6", "7", "8"],
      correct: 0
    },
    alt: {
      question: "מה שטח ריבוע שהיקפו 20 ס\"מ?",
      answers: ["20", "25", "16", "100"],
      correct: 1
    }
  },
  {
    letter: "R",
    category: "לוגיקה",
    main: {
      question: "אבא של משה הוא הבן של הסבא שלי. מי אני למשה?",
      answers: ["דוד", "אבא", "אחי", "בן דוד"],
      correct: 2
    },
    alt: {
      question: "אם אתמול היה יום שלישי, איזה יום יהיה מחרתיים?",
      answers: ["חמישי", "שישי", "שבת", "רביעי"],
      correct: 1
    }
  },
  {
    letter: "E",
    category: "ידע כללי",
    main: {
      question: "מהי עיר הבירה של צרפת?",
      answers: ["מרסיי", "ליון", "ניס", "פריז"],
      correct: 3
    },
    alt: {
      question: "כמה חודשים יש בשנה מעוברת עברית?",
      answers: ["12", "13", "14", "11"],
      correct: 1
    }
  }
];

// ===== Captcha Data =====
const ALL_PHOTOS = [
  "photo/3318fa05fb8f6574a3ba2ed415ed1a27.jpg",
  "photo/OIF.webp",
  "photo/OIP (1).webp",
  "photo/OIP.webp",
  "photo/R.jpg",
  "photo/WhatsApp Image 2026-02-25 at 6.19.47 P.jpeg",
  "photo/WhatsApp Image 2026-02-25 at 6.19.47 PM.jpeg",
  "photo/WhatsApp Image 2026-02-25 at 6.19.48 P.jpeg",
  "photo/WhatsApp Image 2026-02-25 at 6.19.48 PM.jpeg",
  "photo/WhatsApp Image 2026-02-25 at 6.19.49 P.jpeg",
  "photo/WhatsApp Image 2026-02-25 at 6.19.49 PM.jpeg",
  "photo/download (1).webp",
  "photo/download.webp",
  "photo/pexels-karola-g-6333499.jpg",
  "photo/random-white-guy-i-found-on-google-by-looking-up-random-v0-lrjjyc9stku81.webp",
  "photo/woman-home-beauty-portrait-happy-random-scenes_425671-1833.avif"
];

const FAMILY_FILES = ALL_PHOTOS.filter(f => f.includes("WhatsApp Image"));
const DISTRACTOR_FILES = ALL_PHOTOS.filter(f => !f.includes("WhatsApp Image"));

let selectedCaptchaImages = new Set();
let currentCaptchaPool = [];

// Shake function for captcha error
function shakeElement(el) {
  el.classList.add("shake-animation");
  setTimeout(() => el.classList.remove("shake-animation"), 400);
}

// Shuffles an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Initialize/Reshuffle Captcha
function initCaptcha() {
  const grid = document.getElementById("captcha-grid");
  const errorMsg = document.getElementById("captcha-error");
  grid.innerHTML = "";
  errorMsg.classList.add("hidden");
  selectedCaptchaImages.clear();

  // Use all available photos shuffled
  currentCaptchaPool = shuffleArray([...ALL_PHOTOS]);

  currentCaptchaPool.forEach((src, idx) => {
    const item = document.createElement("div");
    item.className = "captcha-item";
    item.innerHTML = `<img src="${src}" alt="verify" loading="lazy">`;
    item.onclick = () => toggleCaptchaSelection(item, src);
    grid.appendChild(item);
  });
}

function toggleCaptchaSelection(item, src) {
  if (selectedCaptchaImages.has(src)) {
    selectedCaptchaImages.delete(src);
    item.classList.remove("selected");
  } else {
    selectedCaptchaImages.add(src);
    item.classList.add("selected");
  }
}

function checkCaptcha() {
  const isCorrect = Array.from(selectedCaptchaImages).every(img => FAMILY_FILES.includes(img)) &&
    selectedCaptchaImages.size === FAMILY_FILES.length;

  if (isCorrect) {
    proceedToWelcome();
  } else {
    const card = document.querySelector(".verification-card");
    const errorMsg = document.getElementById("captcha-error");
    errorMsg.classList.remove("hidden");

    // Animate error
    card.classList.add("wrong-feedback");
    setTimeout(() => {
      card.classList.remove("wrong-feedback");
      initCaptcha(); // Reshuffle
    }, 1000);
  }
}

function proceedToWelcome() {
  const verification = document.getElementById("verification-screen");
  const welcome = document.getElementById("welcome-screen");

  verification.classList.remove("active");
  setTimeout(() => {
    verification.style.display = "none";
    welcome.style.display = "flex";
    requestAnimationFrame(() => welcome.classList.add("active"));
  }, 400);
}

// ===== State =====
let currentPuzzle = 0;
let revealedLetters = [];
let skipClicks = 0;
let wrongCount = 0; // wrong answers on current question
let usingAlt = false; // whether showing alternate question
const SKIP_REQUIRED = 4;
const SKIP_SCALES = [1, 0.75, 0.55, 0.38];

// Bright colors for skip button
const SKIP_COLORS = [
  { bg: "#e74c5e", border: "#c0392b", text: "#fff" },
  { bg: "#2ecc71", border: "#27ae60", text: "#fff" },
  { bg: "#f1c40f", border: "#d4ac0d", text: "#1a1a2e" },
  { bg: "#3498db", border: "#2980b9", text: "#fff" },
  { bg: "#e67e22", border: "#d35400", text: "#fff" },
  { bg: "#c084fc", border: "#8b5cf6", text: "#fff" },
  { bg: "#1abc9c", border: "#16a085", text: "#fff" },
  { bg: "#ff6b6b", border: "#ee5a24", text: "#fff" }
];

// ===== Helpers =====
function countNonSpaceBefore(str, upTo) {
  let count = 0;
  for (let i = 0; i < upTo; i++) {
    if (str[i] !== " ") count++;
  }
  return count;
}

// ===== Init letter slots =====
function initLetterSlots() {
  const display = document.getElementById("letters-display");
  display.innerHTML = "";
  for (let i = 0; i < FINAL_PHRASE.length; i++) {
    if (FINAL_PHRASE[i] === " ") {
      const space = document.createElement("div");
      space.className = "letter-slot space";
      display.appendChild(space);
    } else {
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      slot.dataset.index = countNonSpaceBefore(FINAL_PHRASE, i);
      display.appendChild(slot);
    }
  }
}

// ===== Start Game =====
function startGame() {
  const welcome = document.getElementById("welcome-screen");
  const puzzle = document.getElementById("puzzle-screen");

  welcome.classList.remove("active");
  setTimeout(() => {
    welcome.style.display = "none";
    puzzle.style.display = "flex";
    requestAnimationFrame(() => {
      puzzle.classList.add("active");
      initLetterSlots();
      loadPuzzle(0);
    });
  }, 400);
}

// ===== Load Puzzle =====
function loadPuzzle(index) {
  const data = PUZZLES[index];
  currentPuzzle = index;
  skipClicks = 0;
  wrongCount = 0;
  usingAlt = false;

  loadQuestionData(data.main, data, index);
  resetSkipButton();
}

// ===== Load question data (main or alt) =====
function loadQuestionData(qData, puzzleData, index) {
  const categoryBadge = document.getElementById("puzzle-category");
  if (categoryBadge) categoryBadge.textContent = puzzleData.category;

  document.getElementById("puzzle-number").textContent = `חידה #${index + 1}`;
  document.getElementById("question-text").textContent = qData.question;
  document.getElementById("progress-text").textContent = `${index + 1} / ${PUZZLES.length}`;
  document.getElementById("progress-fill").style.width = `${((index) / PUZZLES.length) * 100}%`;

  // Reset feedback
  const feedback = document.getElementById("feedback-msg");
  feedback.classList.add("hidden");
  feedback.classList.remove("wrong-feedback", "swap-feedback");

  // Build answer buttons
  const container = document.getElementById("answers-container");
  container.innerHTML = "";
  qData.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.onclick = () => handleAnswer(i, btn);
    container.appendChild(btn);
  });
}

// ===== Handle Answer =====
function handleAnswer(selectedIndex, btn) {
  const data = PUZZLES[currentPuzzle];
  const qData = usingAlt ? data.alt : data.main;
  const allBtns = document.querySelectorAll(".answer-btn");
  const feedback = document.getElementById("feedback-msg");

  if (selectedIndex === qData.correct) {
    // Correct!
    btn.classList.add("correct");
    allBtns.forEach(b => b.classList.add("disabled"));
    feedback.classList.add("hidden");
    document.getElementById("skip-btn").classList.add("skip-hidden");

    setTimeout(() => {
      revealLetter(data.letter, false);
    }, 600);
  } else {
    // Wrong
    btn.classList.add("wrong");
    btn.classList.add("disabled");
    wrongCount++;

    if (wrongCount >= 2 && !usingAlt) {
      // Swap to alternate question
      usingAlt = true;
      wrongCount = 0;

      feedback.textContent = "!שתי טעויות - השאלה משתנה";
      feedback.classList.remove("hidden", "wrong-feedback");
      feedback.classList.add("swap-feedback");

      setTimeout(() => {
        loadQuestionData(data.alt, data, currentPuzzle);
      }, 1200);
    } else {
      feedback.textContent = "!תשובה לא נכונה, נסו שוב";
      feedback.classList.remove("hidden", "swap-feedback");
      feedback.classList.add("wrong-feedback");

      setTimeout(() => {
        btn.classList.remove("wrong");
      }, 600);
    }
  }
}

// ===== Reset skip button =====
function resetSkipButton() {
  const skipBtn = document.getElementById("skip-btn");
  skipBtn.classList.remove("skip-hidden");

  // Set initial appearance
  skipBtn.style.background = "rgba(255,255,255,0.06)";
  skipBtn.style.borderColor = "rgba(255,255,255,0.12)";
  skipBtn.style.color = "var(--text-dim)";
  skipBtn.style.boxShadow = "none";
  document.getElementById("skip-count").textContent = "(4 לחיצות נשארו)";

  // Teleport to a safe spot immediately (with slight delay for layout stability)
  setTimeout(() => teleportSkipButton(0), 100);
}

// ===== Teleport Skip Button =====
function teleportSkipButton(clicks) {
  const skipBtn = document.getElementById("skip-btn");
  // Slightly smaller button to fit better on mobile
  const scale = (SKIP_SCALES[clicks] || 0.4) * 0.9;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const safeW = 145 * scale;
  const safeH = 55 * scale;
  const pad = 12;

  const card = document.getElementById("puzzle-card");
  const letters = document.getElementById("letters-display");
  const progress = document.querySelector(".progress-container");
  const codeBtn = document.getElementById("persistent-code-btn");
  const feedback = document.getElementById("feedback-msg");

  const cardRect = card ? card.getBoundingClientRect() : null;

  // Elements to avoid
  const avoidEls = [card, letters, progress, codeBtn, feedback];
  const avoidRects = avoidEls
    .filter(el => el && el.offsetParent !== null)
    .map(el => {
      const r = el.getBoundingClientRect();
      const b = 8; // buffer
      return { l: r.left - b, t: r.top - b, r: r.right + b, b: r.bottom + b };
    });

  let randX = pad;
  let randY = pad;
  let found = false;
  let attempts = 0;

  // USER REQUEST: Must be ABOVE the answers (above the card top)
  // And NOT on letters/progress.
  const limitY = (cardRect && cardRect.top > 80) ? cardRect.top - safeH - 5 : vh - safeH - pad;

  while (!found && attempts < 200) {
    attempts++;
    const tx = pad + Math.random() * Math.max(0, vw - safeW - pad * 2);
    // Restricted to the top section
    const ty = pad + Math.random() * Math.max(0, limitY - pad);

    const btnR = { l: tx, t: ty, r: tx + safeW, b: ty + safeH };
    const hasOverlap = avoidRects.some(rect => {
      return !(btnR.r < rect.l || btnR.l > rect.r || btnR.b < rect.t || btnR.t > rect.b);
    });

    if (!hasOverlap) {
      randX = tx;
      randY = ty;
      found = true;
    }
  }

  // Fallback: If no spot found above card, find the corner with the most available space
  if (!found) {
    const corners = [
      { x: pad, y: pad },
      { x: vw - safeW - pad, y: pad },
      { x: pad, y: limitY },
      { x: vw - safeW - pad, y: limitY }
    ];
    // Score corners by how much they overlap with avoidRects
    let bestCorner = corners[0];
    let minOverlap = Infinity;

    corners.forEach(c => {
      const btnR = { l: c.x, t: c.y, r: c.x + safeW, b: c.y + safeH };
      let overlapSum = 0;
      avoidRects.forEach(rect => {
        const xOverlap = Math.max(0, Math.min(btnR.r, rect.r) - Math.max(btnR.l, rect.l));
        const yOverlap = Math.max(0, Math.min(btnR.b, rect.b) - Math.max(btnR.t, rect.t));
        overlapSum += (xOverlap * yOverlap);
      });
      if (overlapSum < minOverlap) {
        minOverlap = overlapSum;
        bestCorner = c;
      }
    });
    randX = bestCorner.x;
    randY = bestCorner.y;
  }

  // Enforce visible bounds
  randX = Math.max(pad, Math.min(randX, vw - safeW - pad));
  randY = Math.max(pad, Math.min(randY, vh - safeH - pad));

  skipBtn.style.left = `${randX}px`;
  skipBtn.style.top = `${randY}px`;
  skipBtn.style.bottom = "auto";
  skipBtn.style.right = "auto";
  skipBtn.style.transform = `scale(${scale})`;
  skipBtn.style.opacity = "1";
  skipBtn.style.visibility = "visible";
  skipBtn.style.zIndex = "2500";

  if (clicks > 0) {
    const color = SKIP_COLORS[Math.floor(Math.random() * SKIP_COLORS.length)];
    skipBtn.style.background = color.bg;
    skipBtn.style.borderColor = color.border;
    skipBtn.style.color = color.text;
    skipBtn.style.boxShadow = `0 10px 40px ${color.bg}99`;
  }
}

// ===== Handle Skip =====
function handleSkip() {
  skipClicks++;
  const remaining = SKIP_REQUIRED - skipClicks;

  if (skipClicks >= SKIP_REQUIRED) {
    document.getElementById("skip-btn").classList.add("skip-hidden");
    const data = PUZZLES[currentPuzzle];
    revealLetter(data.letter, true);
    return;
  }

  setTimeout(() => teleportSkipButton(skipClicks), 50);
  document.getElementById("skip-count").textContent =
    `(${remaining} ${remaining === 1 ? "לחיצה נשארה" : "לחיצות נשארו"})`;
}

// ===== Toggle Code Modal =====
function toggleCodeModal() {
  const codeModal = document.getElementById("code-screen");
  const isHidden = codeModal.style.display === "none" || !codeModal.classList.contains("active");

  if (isHidden) {
    codeModal.style.display = "flex";
    requestAnimationFrame(() => codeModal.classList.add("active"));
  } else {
    codeModal.classList.remove("active");
    setTimeout(() => {
      codeModal.style.display = "none";
    }, 400);
  }
}

// ===== Reveal Letter =====
function revealLetter(letter, skipped) {
  revealedLetters.push(letter);
  updateLetterSlots();

  // Show visual feedback on the slot itself (pulsing or color change)
  const feedback = document.getElementById("feedback-msg");
  feedback.textContent = skipped ? `!דילגת! האות הייתה: ${letter}` : `!נכון! הרווחת את האות: ${letter}`;
  feedback.classList.remove("hidden", "wrong-feedback", "swap-feedback");
  feedback.style.color = skipped ? "var(--text-dim)" : "var(--green)";

  // Disable answers to prevent multi-clicks during transition
  const allBtns = document.querySelectorAll(".answer-btn");
  allBtns.forEach(b => b.classList.add("disabled"));

  // Automatic move after short delay
  setTimeout(() => {
    nextPuzzle();
  }, 1500);
}

// ===== Update Letter Slots =====
function updateLetterSlots() {
  const slots = document.querySelectorAll(".letter-slot:not(.space)");
  for (let i = 0; i < revealedLetters.length && i < slots.length; i++) {
    slots[i].textContent = revealedLetters[i];
    slots[i].classList.add("revealed");
  }
}

// ===== Next Puzzle =====
function nextPuzzle() {
  if (currentPuzzle + 1 >= PUZZLES.length) {
    // All puzzles done → go to code screen
    showCodeScreen();
    return;
  }

  loadPuzzle(currentPuzzle + 1);
}

// ===== Code Screen =====
function showCodeScreen() {
  const puzzleScreen = document.getElementById("puzzle-screen");
  const codeScreen = document.getElementById("code-screen");
  const skipBtn = document.getElementById("skip-btn");

  puzzleScreen.classList.remove("active");
  skipBtn.classList.add("skip-hidden");

  setTimeout(() => {
    puzzleScreen.style.display = "none";
    codeScreen.style.display = "flex";
    requestAnimationFrame(() => {
      codeScreen.classList.add("active");
      buildCluePreview();
    });
  }, 400);
}

// ===== Build clue preview on code screen =====
function buildCluePreview() {
  const container = document.getElementById("final-clue-preview");
  container.innerHTML = "";
  for (let i = 0; i < FINAL_PHRASE.length; i++) {
    if (FINAL_PHRASE[i] === " ") {
      const space = document.createElement("div");
      space.className = "preview-letter space";
      container.appendChild(space);
    } else {
      const el = document.createElement("div");
      el.className = "preview-letter";
      el.textContent = FINAL_PHRASE[i];
      container.appendChild(el);
    }
  }
}

// ===== Check Code =====
function checkCode() {
  const input = document.getElementById("code-input");
  const error = document.getElementById("code-error");

  if (input.value.trim() === SECRET_CODE) {
    document.getElementById("code-screen").classList.remove("active");
    document.getElementById("persistent-code-btn").style.display = "none";
    showFinalScreen();
  } else {
    error.classList.remove("hidden");
    error.style.animation = "none";
    error.offsetHeight;
    error.style.animation = "";
    setTimeout(() => error.classList.add("hidden"), 2500);
  }
}

// ===== Final Screen =====
function showFinalScreen() {
  const codeScreen = document.getElementById("code-screen");
  const finalScreen = document.getElementById("final-screen");

  codeScreen.classList.remove("active");
  setTimeout(() => {
    codeScreen.style.display = "none";
    finalScreen.style.display = "flex";
    requestAnimationFrame(() => {
      finalScreen.classList.add("active");
      launchConfetti();
    });
  }, 400);
}

// ===== Confetti =====
function launchConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#e74c5e", "#2ecc71", "#f1c40f", "#c084fc", "#3498db", "#e67e22", "#fff"];
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * 2}s`;
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${6 + Math.random() * 8}px`;
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    container.appendChild(piece);
  }
  setTimeout(() => { container.innerHTML = ""; }, 7000);
}

// ===== Enter key on code input =====
document.addEventListener("DOMContentLoaded", () => {
  initCaptcha();
  const codeInput = document.getElementById("code-input");
  if (codeInput) {
    codeInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkCode();
    });
  }
});
