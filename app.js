/**
 * ==============================================================================
 * 🚀 JAVASCRIPT MASTERCLASS: THE DEFINITIVE INTERACTIVE ENGINE (app.js)
 * ==============================================================================
 */

import { tutorials, categories } from "./tutorial-data.js";

// Global App State
const state = {
  activeId: tutorials[0].id,
  completedIds: new Set(JSON.parse(localStorage.getItem("js_completed_tutorials") || "[]")),
  userCodeOverrides: {},
  searchQuery: "",
  activeCategory: "all",
  theme: localStorage.getItem("js_theme") || "dark"
};

// DOM References
const appBody = document.querySelector(".app-body");
const sidebarNav = document.getElementById("sidebar-nav");
const searchInput = document.getElementById("search-input");
const categoryPillsContainer = document.getElementById("category-pills");
const progressBar = document.getElementById("progress-bar-fill");
const progressText = document.getElementById("progress-text");
const themeToggleBtn = document.getElementById("btn-theme-toggle");
const menuToggleBtn = document.getElementById("btn-menu-toggle");
const sidebar = document.querySelector(".app-sidebar");

// Topic View References
const chapterBadge = document.getElementById("chapter-badge");
const chapterReadTime = document.getElementById("chapter-readtime");
const chapterTitle = document.getElementById("chapter-title");
const chapterSummary = document.getElementById("chapter-summary");
const chapterContent = document.getElementById("chapter-content");
const chapterTips = document.getElementById("chapter-tips");
const quizContainer = document.getElementById("quiz-container");

// Playground References
const codeEditor = document.getElementById("code-editor");
const terminalOutput = document.getElementById("terminal-output");
const runCodeBtn = document.getElementById("btn-run-code");
const resetCodeBtn = document.getElementById("btn-reset-code");
const copyCodeBtn = document.getElementById("btn-copy-code");
const clearOutputBtn = document.getElementById("btn-clear-output");
const toggleCompleteBtn = document.getElementById("btn-toggle-complete");
const prevTopicBtn = document.getElementById("btn-prev-topic");
const nextTopicBtn = document.getElementById("btn-next-topic");

/**
 * 🎨 Initialize Application
 */
function initApp() {
  applyTheme(state.theme);
  renderCategoryPills();
  renderSidebar();
  loadTopic(state.activeId);
  setupEventListeners();
  updateProgress();
}

/**
 * 🌓 Theme Handler
 */
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("js_theme", theme);
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === "dark" ? "☀️ লাইট মোড" : "🌙 ডার্ক মোড";
  }
}

/**
 * 🏷️ Render Category Filter Pills
 */
function renderCategoryPills() {
  if (!categoryPillsContainer) return;
  categoryPillsContainer.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `pill-btn ${state.activeCategory === cat.id ? "active" : ""}`;
    btn.textContent = cat.label;
    btn.addEventListener("click", () => {
      state.activeCategory = cat.id;
      renderCategoryPills();
      renderSidebar();
    });
    categoryPillsContainer.appendChild(btn);
  });
}

/**
 * 📑 Render Sidebar with Category Filter, Search and Progress
 */
function renderSidebar() {
  sidebarNav.innerHTML = "";
  const query = state.searchQuery.toLowerCase().trim();

  const filtered = tutorials.filter(t => {
    const matchesCat = state.activeCategory === "all" || t.category === state.activeCategory;
    const matchesQuery = !query || 
      t.title.toLowerCase().includes(query) ||
      t.chapter.toLowerCase().includes(query) ||
      t.summary.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    sidebarNav.innerHTML = `<li class="no-results">🔍 কোনো অধ্যায় খুঁজে পাওয়া যায়নি!</li>`;
    return;
  }

  filtered.forEach((topic) => {
    const isCompleted = state.completedIds.has(topic.id);
    const isActive = topic.id === state.activeId;

    const li = document.createElement("li");
    li.className = `nav-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`;
    li.setAttribute("data-id", topic.id);

    li.innerHTML = `
      <div class="nav-item-top">
        <span class="nav-chapter">PART ${topic.chapter}</span>
        <span class="nav-badge ${topic.badge.toLowerCase()}">${topic.badge}</span>
      </div>
      <div class="nav-title">${topic.title}</div>
      <div class="nav-status-icon">${isCompleted ? "✅" : "⚪"}</div>
    `;

    li.addEventListener("click", () => {
      saveCurrentEditorState();
      loadTopic(topic.id);
      // Close mobile sidebar on select
      if (window.innerWidth <= 960 && sidebar) {
        sidebar.classList.remove("open");
      }
    });

    sidebarNav.appendChild(li);
  });
}

/**
 * 📖 Load and Render a Topic
 */
function loadTopic(topicId) {
  const topic = tutorials.find(t => t.id === topicId) || tutorials[0];
  state.activeId = topic.id;

  // Header & Info
  chapterBadge.textContent = `Part ${topic.chapter} • ${topic.badge}`;
  chapterBadge.className = `badge ${topic.badge.toLowerCase()}`;
  if (chapterReadTime) chapterReadTime.textContent = `⏱️ ${topic.readTime || "8 min read"}`;
  chapterTitle.textContent = topic.title;
  chapterSummary.textContent = topic.summary;
  chapterContent.innerHTML = topic.content;
  chapterTips.innerHTML = `<strong>💡 প্রো-টিপ ও বেস্ট প্র্যাকটিস:</strong> ${topic.tips}`;

  // Interactive Quiz
  renderQuiz(topic.quiz);

  // Editor Code
  const currentCode = state.userCodeOverrides[topic.id] !== undefined
    ? state.userCodeOverrides[topic.id]
    : topic.defaultCode;
  codeEditor.value = currentCode.trim();

  // Clear Terminal Output
  terminalOutput.innerHTML = `<span class="terminal-hint">// "▶ কোড রান করুন" বাটনে ক্লিক করুন অথবা Ctrl + Enter চাপুন...</span>`;

  // Update Mark Complete Button
  updateCompleteButtonState();

  // Update Sidebar Active state
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-id") === topic.id);
  });

  // Next / Prev buttons
  const currentIndex = tutorials.findIndex(t => t.id === topic.id);
  prevTopicBtn.disabled = currentIndex <= 0;
  nextTopicBtn.disabled = currentIndex >= tutorials.length - 1;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * 🎯 Interactive Quiz Renderer
 */
function renderQuiz(quiz) {
  if (!quizContainer) return;
  if (!quiz) {
    quizContainer.style.display = "none";
    quizContainer.innerHTML = "";
    return;
  }

  quizContainer.style.display = "block";
  quizContainer.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-badge">🧠 নলেজ চেক কুইজ</div>
      <h4 class="quiz-question">${quiz.question}</h4>
      <div class="quiz-options">
        ${quiz.options.map((opt, i) => `
          <button type="button" class="quiz-option-btn" data-index="${i}">${opt}</button>
        `).join("")}
      </div>
      <div class="quiz-feedback" style="display: none;"></div>
    </div>
  `;

  const optionBtns = quizContainer.querySelectorAll(".quiz-option-btn");
  const feedbackEl = quizContainer.querySelector(".quiz-feedback");

  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedIndex = parseInt(btn.getAttribute("data-index"), 10);
      const isCorrect = selectedIndex === quiz.correctIndex;

      optionBtns.forEach(b => b.disabled = true);

      if (isCorrect) {
        btn.classList.add("correct");
        feedbackEl.className = "quiz-feedback correct-feedback";
        feedbackEl.innerHTML = `<strong>🎉 সঠিক উত্তর!</strong> ${quiz.explanation}`;
      } else {
        btn.classList.add("wrong");
        optionBtns[quiz.correctIndex].classList.add("correct");
        feedbackEl.className = "quiz-feedback wrong-feedback";
        feedbackEl.innerHTML = `<strong>❌ ভুল উত্তর।</strong> ${quiz.explanation}`;
      }
      feedbackEl.style.display = "block";
    });
  });
}

/**
 * 💾 Save current user edits in memory
 */
function saveCurrentEditorState() {
  state.userCodeOverrides[state.activeId] = codeEditor.value;
}

/**
 * ⚡ Execute Code and Intercept Console Output
 */
function executePlaygroundCode() {
  const code = codeEditor.value;
  terminalOutput.innerHTML = "";

  const logs = [];

  const formatArg = (arg) => {
    if (arg === null) return "null";
    if (arg === undefined) return "undefined";
    if (typeof arg === "function") return arg.toString();
    if (typeof arg === "object") {
      try {
        return JSON.stringify(arg, null, 2);
      } catch {
        return String(arg);
      }
    }
    return String(arg);
  };

  const customConsole = {
    log: (...args) => logs.push({ type: "log", text: args.map(formatArg).join(" ") }),
    error: (...args) => logs.push({ type: "error", text: args.map(formatArg).join(" ") }),
    warn: (...args) => logs.push({ type: "warn", text: args.map(formatArg).join(" ") }),
    info: (...args) => logs.push({ type: "info", text: args.map(formatArg).join(" ") })
  };

  const startTime = performance.now();
  try {
    const runner = new Function("console", code);
    runner(customConsole);
    const timeTaken = (performance.now() - startTime).toFixed(1);

    if (logs.length === 0) {
      terminalOutput.innerHTML = `<span class="terminal-success">// ✔ কোড সফলভাবে রান হয়েছে (${timeTaken}ms)। কোনো console.log ছিল না।</span>`;
    } else {
      logs.forEach(log => {
        const line = document.createElement("div");
        line.className = `terminal-line terminal-${log.type}`;
        line.textContent = log.text;
        terminalOutput.appendChild(line);
      });
      const footer = document.createElement("div");
      footer.className = "terminal-footer";
      footer.textContent = `✔ Executed successfully in ${timeTaken}ms`;
      terminalOutput.appendChild(footer);
    }
  } catch (err) {
    const errorLine = document.createElement("div");
    errorLine.className = "terminal-line terminal-error";
    errorLine.textContent = `🚨 Runtime Error: ${err.message}`;
    terminalOutput.appendChild(errorLine);
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

/**
 * 🔄 Reset Code to default
 */
function resetCode() {
  const currentTopic = tutorials.find(t => t.id === state.activeId);
  if (currentTopic) {
    codeEditor.value = currentTopic.defaultCode.trim();
    delete state.userCodeOverrides[state.activeId];
    executePlaygroundCode();
  }
}

/**
 * 📋 Copy Code to clipboard
 */
function copyCode() {
  navigator.clipboard.writeText(codeEditor.value).then(() => {
    const originalText = copyCodeBtn.textContent;
    copyCodeBtn.textContent = "✅ কপি হয়েছে!";
    setTimeout(() => {
      copyCodeBtn.textContent = originalText;
    }, 1800);
  });
}

/**
 * 🎯 Toggle Topic Completion
 */
function toggleCompletion() {
  if (state.completedIds.has(state.activeId)) {
    state.completedIds.delete(state.activeId);
  } else {
    state.completedIds.add(state.activeId);
  }
  localStorage.setItem("js_completed_tutorials", JSON.stringify([...state.completedIds]));
  updateProgress();
  renderSidebar();
  updateCompleteButtonState();
}

function updateCompleteButtonState() {
  const isDone = state.completedIds.has(state.activeId);
  toggleCompleteBtn.innerHTML = isDone 
    ? "✅ সম্পন্ন হয়েছে (Completed)" 
    : "⚪ সম্পন্ন হিসেবে মার্ক করুন";
  toggleCompleteBtn.classList.toggle("is-completed", isDone);
}

/**
 * 📊 Update Global Learning Progress
 */
function updateProgress() {
  const total = tutorials.length;
  const completed = state.completedIds.size;
  const percentage = Math.round((completed / total) * 100);

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completed}/${total} টি অধ্যায় সম্পন্ন (${percentage}%)`;
}

/**
 * 🎛️ Setup User Event Listeners
 */
function setupEventListeners() {
  // Run Code
  runCodeBtn.addEventListener("click", executePlaygroundCode);

  // Shortcut Ctrl + Enter
  codeEditor.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      executePlaygroundCode();
    }
  });

  // Global search shortcut (Ctrl + K)
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Reset & Copy & Clear
  resetCodeBtn.addEventListener("click", resetCode);
  copyCodeBtn.addEventListener("click", copyCode);
  clearOutputBtn.addEventListener("click", () => {
    terminalOutput.innerHTML = `<span class="terminal-hint">// আউটপুট ক্লিয়ার করা হয়েছে।</span>`;
  });

  // Mark Completed
  toggleCompleteBtn.addEventListener("click", toggleCompletion);

  // Search input
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderSidebar();
  });

  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });
  }

  // Mobile Menu Toggle
  if (menuToggleBtn && sidebar) {
    menuToggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Next / Previous
  nextTopicBtn.addEventListener("click", () => {
    saveCurrentEditorState();
    const currentIndex = tutorials.findIndex(t => t.id === state.activeId);
    if (currentIndex < tutorials.length - 1) {
      loadTopic(tutorials[currentIndex + 1].id);
    }
  });

  prevTopicBtn.addEventListener("click", () => {
    saveCurrentEditorState();
    const currentIndex = tutorials.findIndex(t => t.id === state.activeId);
    if (currentIndex > 0) {
      loadTopic(tutorials[currentIndex - 1].id);
    }
  });
}

// Launch application on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
