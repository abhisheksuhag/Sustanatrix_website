import { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MessageCircle, X, Send, Check } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const brandColor = "#00B0F0";

  const steps = [
    { message: "Hello! What is the subject of your message?", type: "bot" },
    {
      message: "Please provide your email address.",
      type: "bot",
    },
    {
      message: "Thank you! Our team will get back to you at the earliest.",
      type: "bot",
    },
  ];

  useEffect(() => {
    if (isOpen && currentStep < steps.length) {
      setMessages((prev) => [...prev, steps[currentStep]]);
    }
  }, [isOpen, currentStep]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendEmail = (templateParams) => {
    emailjs.send('service_4orpryt', 'template_kqn420e', templateParams, 'PZPUEW2FC7OIPcR70')
      .then(() => {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }, () => {
        toast.error('Failed to send message.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      });
  };

  const handleSend = () => {
    if (userInput.trim() === "") return;

    setMessages((prev) => [...prev, { message: userInput, type: "user" }]);
    setUserInput("");

    if (currentStep === 0) {
      setSubject(userInput);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setEmail(userInput);
      setCurrentStep(2);
      setTimeout(() => {
        setShowThankYou(true);

        // Send email using emailjs
        const templateParams = {
          to_name: 'ESG Experts',
          from_name: userInput,
          name: userInput,
          email: userInput,
          subject: subject,
          message: `User ${userInput} has reached out via the ChatBot with the subject: ${subject}.`,
        };
        sendEmail(templateParams);

      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowThankYou(false);
    setCurrentStep(0);
    setMessages([]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`bg-[${brandColor}] text-white rounded-full p-3 shadow-lg hover:bg-opacity-80 transition-colors`}
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div
            className={`bg-[${brandColor}] text-white p-4 rounded-t-lg flex justify-between items-center`}
          >
            <h3 className="font-bold">Chat with us</h3>
            <button
              onClick={closeChat}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <div
            ref={chatContainerRef}
            className="flex-grow overflow-y-auto p-4 space-y-4"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-2 ${msg.type === "user" ? `bg-[${brandColor}] text-white` : "bg-gray-100 text-gray-800"}`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={`flex-grow border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-[${brandColor}]`}
              />
              <button
                onClick={handleSend}
                className={`bg-[${brandColor}] text-white rounded-r-lg p-2 hover:bg-opacity-80 transition-colors`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center relative">
            <button
              onClick={closeChat}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <div className={`text-[#4ef039] mb-4 animate-bounce`}>
              <Check size={48} />
            </div>
            <p className="text-2xl font-bold mb-2">Thank you!</p>
            <p className="text-gray-600 text-center">
              We have received your message and will get back to you soon.
            </p>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ChatBot;
