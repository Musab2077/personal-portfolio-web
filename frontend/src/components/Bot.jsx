import { useEffect, useRef, useState, useCallback, memo } from "react";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const BACKEND_URL = "https://backend-for-portfolio-web.vercel.app";
const INITIAL_MESSAGES = [{ sender: "bot", text: "Hi! How can I help you?" }];

// Typing indicator sub-component
const TypingIndicator = memo(() => (
  <div
    className="bg-[#48904b] w-20 p-2 rounded-r-lg rounded-bl-lg"
    aria-label="Bot is typing"
    role="status"
  >
    <div className="flex space-x-2 p-2">
      {[0, 150, 300].map((delay) => (
        <div
          key={delay}
          className="h-2 w-2 bg-black rounded-full animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  </div>
));
TypingIndicator.displayName = "TypingIndicator";

// Individual message bubble
const MessageBubble = memo(({ msg }) =>
  msg.sender === "bot" ? (
    <div
      className="bg-[#48904b] w-2/3 p-2 rounded-r-lg rounded-bl-lg"
      role="log"
    >
      <p>{msg.text}</p>
    </div>
  ) : (
    <div className="flex justify-end">
      <div className="bg-[#4c8124] p-2 rounded-l-lg rounded-br-lg max-w-[66.67%] min-w-3">
        <p>{msg.text}</p>
      </div>
    </div>
  ),
);
MessageBubble.displayName = "MessageBubble";

const Bot = ({ onClick, botChat }) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [userMessage, setUserMessage] = useState("");

  const isButtonDisabled = !userMessage.trim() || loading;
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const abortRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [userMessage]);

  // Abort in-flight request on unmount
  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const handleSubmit = useCallback(async () => {
    const text = userMessage.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setUserMessage("");
    setLoading(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(`${BACKEND_URL}/bot_response`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data }]);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Bot error:", error);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sorry, something went wrong. Please try again.",
          },
        ]);
      }
    } finally {
      setLoading(false);
    }
  }, [userMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  return (
    <div
      className={`fixed text-white right-3 bottom-3 z-50 ${
        !botChat ? "w-auto" : "sm:w-1/3 h-3/4 w-3/4 xl:w-1/4"
      }`}
      role="complementary"
      aria-label="Chat assistant"
    >
      {!botChat ? (
        <button
          className="bg-[#27AE60] p-2 hover:w-14 hover:h-14 hover:bg-green-700 rounded-full grid place-items-center transition-all duration-200"
          onClick={onClick}
          aria-label="Open chat assistant"
          title="Chat with AI assistant"
        >
          <PiChatCircleDotsLight className="size-9" />
        </button>
      ) : (
        <div
          className="animate-slideUp bg-neutral-900 h-full flex flex-col rounded-lg overflow-hidden shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="AI Chat assistant"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-2 border-b-2 border-b-neutral-600">
            <span className="text-sm text-neutral-300 px-2">AI Assistant</span>
            <button
              className="px-2 py-1 text-black bg-[#27AE60] hover:bg-green-700 rounded-lg transition-colors"
              onClick={onClick}
              aria-label="Close chat"
            >
              <MdOutlineKeyboardArrowDown className="size-7" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-2 mr-1.5 space-y-3"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg, index) => (
              <div key={index}>
                <MessageBubble msg={msg} />
              </div>
            ))}
            {loading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t-2 border-t-neutral-600">
            <div className="w-full p-2 space-x-2 bg-neutral-900 border-2 flex border-neutral-600 rounded-lg">
              <label htmlFor="bot-input" className="sr-only">
                Type your message
              </label>
              <textarea
                id="bot-input"
                ref={textareaRef}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message..."
                className="w-full p-2 bg-neutral-900 text-white focus:outline-none resize-none"
                style={{ minHeight: "30px", maxHeight: "50px" }}
                aria-label="Message input"
                disabled={loading}
              />
              <div className="place-content-center">
                <button
                  disabled={isButtonDisabled}
                  className={`${
                    isButtonDisabled
                      ? "bg-neutral-700 text-neutral-600 cursor-not-allowed"
                      : "hover:bg-green-700 bg-[#27AE60] text-neutral-900 hover:text-neutral-800"
                  } p-1 rounded-lg transition-colors`}
                  onClick={handleSubmit}
                  aria-label="Send message"
                >
                  <RiSendPlaneFill className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Bot);
