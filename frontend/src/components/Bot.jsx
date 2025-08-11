import React, { useEffect, useRef, useState } from "react";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Bot = () => {
  const [botChat, setBotChat] = useState(() => {
    const lsItem = localStorage.getItem("botChat");
    return lsItem ? Boolean(lsItem) : "";
  });

  // Fixed initial state structure
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you" },
  ]);

  const [userMessage, setUserMessage] = useState("");
  const isButtonDisabled = userMessage.trim() === "";
  const backendURL =
    "https://backend-3eoara9vc-musabs-projects-c45bba15.vercel.app";
  const messagesEndRef = useRef(null);

  const textareaRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [userMessage]);

  useEffect(() => {
    localStorage.setItem("botChat", botChat);
  }, [botChat]);

  const handleSubmit = () => {
    if (!userMessage.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setUserMessage("");

    fetch(`${backendURL}/bot_response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      className={`fixed right-3 bottom-3 ${
        botChat ? "w-auto" : "sm:w-1/3 h-3/4 w-3/4 xl:w-1/4"
      }`}
    >
      {botChat ? (
        <button
          className="bg-[#27AE60] p-2 hover:size-14 hover:bg-green-700 rounded-full place-items-center"
          onClick={() => setBotChat("")}
        >
          <PiChatCircleDotsLight className="size-9" />
        </button>
      ) : (
        <>
          <div className="bg-neutral-900 h-full flex flex-col">
            <div className="flex justify-end p-2 border-b-2 border-b-neutral-600">
              <button
                className="px-2 py-1 text-black bg-[#27AE60] hover:bg-green-700 rounded-lg"
                onClick={() => setBotChat(true)}
              >
                <MdOutlineKeyboardArrowDown className="size-7" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 mr-1.5">
              {messages.map((msg, index) => (
                <div key={index} className="space-y-2 mb-3">
                  {msg.sender === "bot" ? (
                    <div className="bg-[#48904b] w-2/3 p-2 rounded-r-lg rounded-bl-lg">
                      <p>{msg.text}</p>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="bg-[#4c8124] p-2 rounded-l-lg rounded-br-lg w-2/3">
                        <p>{msg.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t-2 border-t-neutral-600">
              <div className="w-full p-2 space-x-2 bg-neutral-900 border-2 flex border-neutral-600 rounded-lg text-white focus:outline-none resize-none">
                <textarea
                  ref={textareaRef}
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && !e.shiftKey && handleSubmit()
                  }
                  placeholder="Message"
                  className="w-full p-2 bg-neutral-900 text-white focus:outline-none resize-none"
                  style={{ minHeight: "30px", maxHeight: "50px" }}
                />
                <div className="place-content-center">
                  <button
                    disabled={isButtonDisabled}
                    className={`${
                      isButtonDisabled
                        ? "bg-neutral-700 text-neutral-600"
                        : "hover:bg-green-700 bg-[#27AE60] text-neutral-900 hover:text-neutral-800"
                    } p-1 rounded-lg`}
                    onClick={handleSubmit}
                  >
                    <RiSendPlaneFill className="size-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Bot;
