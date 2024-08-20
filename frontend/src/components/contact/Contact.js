import React, { useRef, useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import axios from "axios";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(formData.email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return true
  };

  // ========== Email Validation end here ================

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.username === "") {
      setErrMsg("Username is required!");
    } else if (formData.phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (formData.email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(formData.email)) {
      setErrMsg("Give a valid Email!");
    } else if (formData.subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (formData.message === "") {
      setErrMsg("Message is required!");
    } else {
      // Send email code here
      try {
        const response = await axios.post("http://localhost:8000/contacted", formData);
        if (response.data?.success) {
          setSuccessMsg(
            `Thank you dear ${formData.username}, Your Messages has been sent Successfully!`
          );
          setErrMsg("");
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: ""
          });
        }
        else {
          setErrMsg("Couldn't send your message");
        }
      } catch (error) {
        setErrMsg("Couldn't send your message");

      }
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              ref={formRef}
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    value={formData.username}
                    className={`${errMsg === "Username is required!" && "outline-designColor"
                      } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    value={formData.phoneNumber}
                    className={`${errMsg === "Phone number is required!" && "outline-designColor"
                      } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  className={`${errMsg === "Please give your Email!" && "outline-designColor"
                    } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  value={formData.subject}
                  className={`${errMsg === "Please give your Subject!" && "outline-designColor"
                    } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  value={formData.message}
                  className={`${errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
