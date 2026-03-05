import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {

  const initialTickets = [
    {
      id: 1001,
      title: "Login Issues - Can't Access Account",
      description:
        "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
      customer: "John Smith",
      priority: "High",
      status: "open",
      createdAt: "1/15/2024",
    },
    {
      id: 1002,
      title: "Payment Failed - Card Declined",
      description:
        "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
      customer: "Sarah Johnson",
      priority: "High",
      status: "open",
      createdAt: "1/16/2024",
    },
    {
      id: 1003,
      title: "Unable to Download Invoice",
      description:
        "Customer cannot download their January invoice from the billing section. The download button is...",
      customer: "Michael Brown",
      priority: "Medium",
      status: "in-progress",
      createdAt: "1/17/2024",
    },
    {
      id: 1004,
      title: "Incorrect Billing Address",
      description:
        "Customer’s billing address shows a different city. They updated it but it still displays the old one.",
      customer: "Emily Davis",
      priority: "Low",
      status: "open",
      createdAt: "1/18/2024",
    },
    {
      id: 1005,
      title: "App Crash on Launch",
      description:
        "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
      customer: "David Wilson",
      priority: "High",
      status: "open",
      createdAt: "1/19/2024",
    },
    {
      id: 1006,
      title: "Refund Not Processed",
      description:
        "Customer requested a refund two weeks ago but has not received the amount yet.",
      customer: "Sophia Taylor",
      priority: "Medium",
      status: "in-progress",
      createdAt: "1/20/2024",
    },
    {
      id: 1007,
      title: "Two-Factor Authentication Issue",
      description:
        "Customer is not receiving 2FA codes on their registered phone number.",
      customer: "James Anderson",
      priority: "High",
      status: "open",
      createdAt: "1/21/2024",
    },
    {
      id: 1008,
      title: "Unable to Update Profile Picture",
      description:
        "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
      customer: "Olivia Martinez",
      priority: "Low",
      status: "open",
      createdAt: "1/22/2024",
    },
    {
      id: 1009,
      title: "Subscription Auto-Renewal",
      description:
        "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
      customer: "Liam Thomas",
      priority: "Medium",
      status: "in-progress",
      createdAt: "1/17/2024",
    },
    {
      id: 1010,
      title: "Missing Order Confirmation Email",
      description:
        "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
      customer: "Isabella Garcia",
      priority: "Medium",
      status: "open",
      createdAt: "1/24/2024",
    },
  ];

  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectTicket = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, { ...ticket, status: "in-progress" }]);
      toast.success("Ticket added to In Progress");
    } else {
      toast.info("Ticket already in progress");
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, { ...ticket, status: "resolved" }]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success("Ticket marked as Resolved");
  };

  return (
    <>
      {/* Menubar */}
      <div className="relative">
        <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

          <h1 className="text-[20px] md:text-[24px] font-bold">
            CS — Ticket System
          </h1>

          <div className="hidden md:flex gap-6 items-center text-[16px] font-normal">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>

            <button className="text-white text-[16px] font-semibold rounded-[4px] px-4 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              <a href="#">+ New Ticket</a>
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-8 py-4 text-sm font-medium z-50">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>

      {/* Banner Section */}
      <div className="px-8 py-20 grid md:grid-cols-2 gap-6">

        <div className="relative rounded-xl py-20 text-center shadow-lg overflow-hidden text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">

          <img
            src="/assets/vector1.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="text-[24px] font-normal">In-Progress</h2>
            <p className="text-5xl font-bold mt-2">{inProgress.length}</p>
          </div>

        </div>

        <div className="relative rounded-xl py-20 text-center shadow-lg overflow-hidden text-white bg-gradient-to-r from-[#54CF68] to-[#00827A]">

          <img
            src="/assets/vector1.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="text-[24px] font-normal">Resolved</h2>
            <p className="text-5xl font-bold mt-2">{resolved.length}</p>
          </div>

        </div>

      </div>

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}