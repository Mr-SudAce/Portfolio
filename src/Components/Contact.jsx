import emailjs from "emailjs-com";
import {Menu} from "../index.jsx";
import { useState } from "react";
import me from "../assets/Image/me3.jpg";

const countrycode = [
    { code: "+1", label: "US" },
    { code: "+44", label: "UK" },
    { code: "+91", label: "India" },
    { code: "+81", label: "Japan" },
    { code: "+61", label: "Australia" },
    { code: "+33", label: "France" },
    { code: "+49", label: "Germany" },
    { code: "+34", label: "Spain" },
    { code: "+39", label: "Italy" },
    { code: "+86", label: "China" },
    { code: "+880", label: "Bangladesh" },
    { code: "+977", label: "Nepal" },
    { code: "+92", label: "Pakistan" },
    { code: "+974", label: "Qatar" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+977",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            message: formData.message,
        };


        emailjs
            .send(
                "service_igb9ond",
                "template_00xxoui",
                templateParams,
                "FFjxJDGD_sjV2K16m"
            )
            .then((response) => {
                alert("Message sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "+977",
                    phone: "",
                    message: "",
                });
                setLoading(false);
            },
                (error) => {
                    alert("Oops! Something went wrong. Try again later.");
                    console.error("Error:", error);
                    setLoading(false);
                }
            );
    };

    return (
        <div className="min-h-screen bg-[#0e0e10] flex items-center justify-center px-4 py-10">
            <h1 className="text-7xl font-semibold mb-2 text-3D absolute top-10 right-24 uppercase">
                Contact me
            </h1>
            <Menu />
            <div className="w-full max-w-5xl bg-[#1a1a1d] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 flex flex-col items-center justify-center text-white">
                    <img
                        src={me}
                        alt="Contact Visual"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Right Side Form */}
                <div className="md:w-1/2 p-8 md:p-6 text-white">
                    <form className="space-y-6" onSubmit={sendEmail}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block mb-1 text-sm font-medium">First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-full p-3 rounded-lg bg-[#2b2b2e] border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 text-sm font-medium">Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-full p-3 rounded-lg bg-[#2b2b2e] border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">
                                E-mail address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                className="w-full p-3 rounded-lg bg-[#2b2b2e] border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-300">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center bg-[#1f1f22] border border-gray-600 rounded-xl px-4 py-3 gap-3 shadow-sm hover:border-blue-500 transition-all duration-200">
                                <div className="relative w-32">
                                    <select
                                        name="countryCode"
                                        className="appearance-none w-full bg-[#2b2b2e] text-white text-sm px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                    >
                                        {countrycode.map((cde, index) => (
                                            <option key={index} value={cde.code}>
                                                {cde.label} ({cde.code})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="987-6543210"
                                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message...."
                                rows="4"
                                className="w-full p-3 rounded-lg bg-[#2b2b2e] border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                } transition text-white font-semibold py-3 rounded-xl`}
                        >
                            {loading ? "Sending..." : "Send message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
