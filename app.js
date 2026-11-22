/**
 * ==============================================================================
 * 🚀 JAVASCRIPT MASTERY: INTERACTIVE TUTORIAL & PLAYGROUND ENGINE (app.js)
 * ==============================================================================
 */

import { tutorials } from "./tutorial-data.js";

// Global App State
const state = {
  activeId: tutorials[0].id,
  completedIds: new Set(JSON.parse(localStorage.getItem("js_completed_tutorials") || "[]")),
  userCodeOverrides: {},
  searchQuery: ""
};

// DOM References
const sidebarNav = document.getElementById("sidebar-nav");
const searchInput = document.getElementById("search-input");
const progressBar = document.getElementById("progress-bar-fill");
const progressText = document.getElementById("progress-text");

const chapterBadge = document.getElementById("chapter-badge");
const chapterTitle = document.getElementById("chapter-title");
const chapterSummary = document.getElementById("chapter-summary");
const chapterContent = document.getElementById("chapter-content");
const chapterTips = document.getElementById("chapter-tips");

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
  renderSidebar();
  loadTopic(state.activeId);
  setupEventListeners();
  updateProgress();
}

/**
 * 📑 Render Sidebar with Filter and Completion Status
 */
function renderSidebar() {
  sidebarNav.innerHTML = "";
  const query = state.searchQuery.toLowerCase().trim();

  const filtered = tutorials.filter(t => 
    t.title.toLowerCase().includes(query) ||
    t.chapter.toLowerCase().includes(query) ||
    t.summary.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    sidebarNav.innerHTML = `<li class="no-results">কোনো ফলাফল পাওয়া যায়নি!</li>`;
    return;
  }

  filtered.forEach((topic) => {
    const isCompleted = state.completedIds.has(topic.id);
    const isActive = topic.id === state.activeId;

    const li = document.createElement("li");
    li.className = `nav-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`;
    li.setAttribute("data-id", topic.id);

    li.innerHTML = `
      <div class="nav-item-header">
        <span class="nav-chapter">${topic.chapter}</span>
        <span class="nav-badge ${topic.badge.toLowerCase()}">${topic.badge}</span>
      </div>
      <div class="nav-title">${topic.title}</div>
      <div class="nav-status-icon">${isCompleted ? "✅" : "⚪"}</div>
    `;

    li.addEventListener("click", () => {
      saveCurrentEditorState();
      loadTopic(topic.id);
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
  chapterBadge.textContent = `${topic.chapter} • ${topic.badge}`;
  chapterBadge.className = `badge ${topic.badge.toLowerCase()}`;
  chapterTitle.textContent = topic.title;
  chapterSummary.textContent = topic.summary;
  chapterContent.innerHTML = topic.content;
  chapterTips.textContent = `💡 টিপস: ${topic.tips}`;

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

  // Auto scroll main to top
  window.scrollTo({ top: 0, behavior: "smooth" });
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

  // Helper to format arguments into readable string
  const formatArg = (arg) => {
    if (arg === null) return "null";
    if (arg === undefined) return "undefined";
    if (typeof arg === "object") {
      try {
        return JSON.stringify(arg, null, 2);
      } catch {
        return String(arg);
      }
    }
    return String(arg);
  };

  // Intercept console
  const customConsole = {
    log: (...args) => {
      logs.push({ type: "log", text: args.map(formatArg).join(" ") });
    },
    error: (...args) => {
      logs.push({ type: "error", text: args.map(formatArg).join(" ") });
    },
    warn: (...args) => {
      logs.push({ type: "warn", text: args.map(formatArg).join(" ") });
    },
    info: (...args) => {
      logs.push({ type: "info", text: args.map(formatArg).join(" ") });
    }
  };

  const startTime = performance.now();
  try {
    // Run user code safely with sandboxed console
    const runner = new Function("console", code);
    runner(customConsole);
    const timeTaken = (performance.now() - startTime).toFixed(1);

    if (logs.length === 0) {
      terminalOutput.innerHTML = `<span class="terminal-success">// কোড সফলভাবে রান হয়েছে কিন্তু কোনো console.log আউটপুট ছিল না (${timeTaken}ms)</span>`;
    } else {
      logs.forEach(log => {
        const line = document.createElement("div");
        line.className = `terminal-line terminal-${log.type}`;
        line.textContent = log.text;
        terminalOutput.appendChild(line);
      });
      const footer = document.createElement("div");
      footer.className = "terminal-footer";
      footer.textContent = `✔ Executed in ${timeTaken}ms`;
      terminalOutput.appendChild(footer);
    }
  } catch (err) {
    const errorLine = document.createElement("div");
    errorLine.className = "terminal-line terminal-error";
    errorLine.textContent = `🚨 Error: ${err.message}`;
    terminalOutput.appendChild(errorLine);
  }

  // Scroll terminal to bottom
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
    ? "✅ সম্পন্ন হয়েছে (সম্পূর্ণ)" 
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
  progressText.textContent = `${completed}/${total} টি অধ্যায় সম্পন্ন (${percentage}%)`;
}

/**
 * 🎛️ Setup User Event Listeners
 */
function setupEventListeners() {
  // Run Code
  runCodeBtn.addEventListener("click", executePlaygroundCode);

  // Shortcut Ctrl + Enter to run code
  codeEditor.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      executePlaygroundCode();
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

  // Search
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderSidebar();
  });

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
