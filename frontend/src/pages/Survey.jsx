import React, { useState } from "react";
import { toast } from "react-hot-toast";
import zod from "zod";
import axios from "axios";
import { set } from "mongoose";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const Survey = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const emailSchema = zod.string().email().min(5).max(50);
  const phoneSchema = zod.string().min(10).max(13);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
	setLoading(true);

    if (formData.name === "" || formData.message === "") {
      toast.error("Name and message are required!");
      return;
    }

    if (formData.email !== "") {
      const result = emailSchema.safeParse(formData.email);
      if (result.error) {
        toast.error("Invalid email");
        return;
      }
    }

    if (formData.phoneNumber !== "") {
      const result = phoneSchema.safeParse(formData.phoneNumber);
      if (result.error) {
        toast.error("Invalid phone number");
        return;
      }
    }

    try {
      const { data } = await axios.post(`${serverUrl}/survey/submit`, formData);

      if (data.success) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Form submission failed!");
      }

      setFormData({
        name: "",
        gender: "",
        nationality: "",
        email: "",
        phoneNumber: "",
        address: "",
        message: "",
      });
    } catch (err) {
      toast.error("Form submission failed!");
    }

	setLoading(false);
  };

  return (
    <div className="flex justify-center bg-gray-100 mt-16">
      <div className="w-full max-w-md m-8 mx-5 p-6  bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          {[
            "name",
            "gender",
            "nationality",
            "email",
            "phoneNumber",
            "address",
            "message",
          ].map((field) => (
            <div className="mb-4" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-600"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
                {field === "name" || field === "message" ? (
                  <span className="text-red-600">*</span>
                ) : (
                  ""
                )}
              </label>
              <input
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md text-black"
              />
            </div>
          ))}

          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#2A9D8F] text-white py-2 px-4 rounded-md hover:bg-[#264653]"
			  disabled={loading}
            >
              Submit
            </button>
          </div>

          <p className="text-xs text-gray-500">
            <span className="text-red-600">*</span> indicates required field
          </p>
        </form>
      </div>
    </div>
  );
};

export default Survey;
