import React, { useState } from "react";
import { FaMicrophone, FaPaperclip, FaPaperPlane, FaFileAlt, FaImage, FaVideo, FaMusic, FaSmile } from "react-icons/fa";
import UserNavbar from "../../components/userNavigation"; // Import UserNavbar

// Define types for users and messages
interface User {
  id: number;
  name: string;
  online: boolean;
}

interface Message {
  to: number;
  from: string;
  content: string;
  file: File | null;
  timestamp: string;
}

const Messages: React.FC = () => {
  // Dummy data for users
  const dummyUsers: User[] = [
    { id: 1, name: "Alice", online: true },
    { id: 2, name: "Bob", online: false },
    { id: 3, name: "Charlie", online: true },
  ];

  // State variables
  const [users] = useState<User[]>(dummyUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSendMessage = (): void => {
    if (message.trim() || file) {
      const newMessage: Message = {
        to: selectedUser!.id,
        from: "You",
        content: message,
        file,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAttachmentClick = (type: string): void => {
    alert(`Attachment type selected: ${type}`);
  };

  const handleFileLinkClick = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Main Content */}
      <div className="container flex-grow-1 d-flex">
        {/* User List */}
        <div className="col-3 border-end">
          <h5 className="mt-3">Users</h5>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  selectedUser?.id === user.id ? "active" : ""
                }`}
                onClick={() => setSelectedUser(user)}
                style={{ cursor: "pointer" }}
              >
                {user.name}
                <span
                  className={`badge ${
                    user.online ? "bg-success" : "bg-secondary"
                  }`}
                >
                  {user.online ? "Online" : "Offline"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Box */}
        <div className="col-9 d-flex flex-column">
          {selectedUser ? (
            <>
              <div className="border-bottom p-3">
                <h5>Chat with {selectedUser.name}</h5>
              </div>
              <div className="flex-grow-1 p-3 overflow-auto" style={{ paddingBottom: "80px" }}>
                {messages
                  .filter(
                    (msg) =>
                      msg.to === selectedUser.id || msg.from === selectedUser.name
                  )
                  .map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        msg.from === selectedUser.name
                          ? "text-start"
                          : "text-end"
                      }`}
                    >
                      <div className="p-3 rounded shadow-sm d-inline-block" style={{ backgroundColor: msg.from === "You" ? "#d1e7dd" : "#f8d7da" }}>
                        {msg.content}
                        {msg.file && (
                          <div className="mt-2">
                            <button
                              className="btn btn-link text-decoration-none p-0"
                              onClick={handleFileLinkClick}
                            >
                              <FaPaperclip className="me-1" />
                              {msg.file.name}
                            </button>
                          </div>
                        )}
                        <div className="text-muted small mt-1">{msg.timestamp}</div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="border-top p-3 d-flex align-items-center">
                <div className="dropdown me-2">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="attachmentDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaPaperclip />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="attachmentDropdown">
                    <li>
                      <button className="dropdown-item" onClick={() => handleAttachmentClick("Document")}>
                        <FaFileAlt className="me-2" /> Document
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleAttachmentClick("Photo")}>
                        <FaImage className="me-2" /> Photo
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleAttachmentClick("Video")}>
                        <FaVideo className="me-2" /> Video
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleAttachmentClick("Audio")}>
                        <FaMusic className="me-2" /> Audio
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleAttachmentClick("GIF")}>
                        <FaSmile className="me-2" /> GIF
                      </button>
                    </li>
                  </ul>
                </div>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="btn btn-primary me-2"
                  onClick={handleSendMessage}
                >
                  <FaPaperPlane />
                </button>
                <button className="btn btn-secondary">
                  <FaMicrophone />
                </button>
              </div>
            </>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center flex-grow-1"
              style={{ paddingBottom: "80px" }}
            >
              <h5>Select a user to start chatting</h5>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Attachment Type</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  <li className="list-group-item" onClick={() => alert("Document selected")}>
                    <FaFileAlt className="me-2" /> Document
                  </li>
                  <li className="list-group-item" onClick={() => alert("Photo selected")}>
                    <FaImage className="me-2" /> Photo
                  </li>
                  <li className="list-group-item" onClick={() => alert("Video selected")}>
                    <FaVideo className="me-2" /> Video
                  </li>
                  <li className="list-group-item" onClick={() => alert("Audio selected")}>
                    <FaMusic className="me-2" /> Audio
                  </li>
                  <li className="list-group-item" onClick={() => alert("GIF selected")}>
                    <FaSmile className="me-2" /> GIF
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-light shadow-lg">
        <UserNavbar />
      </footer>
    </div>
  );
};

export default Messages;