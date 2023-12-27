import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/admin/view-all`, {
          headers: { Authorization: localStorage.getItem("token") },
        });

        if (!data.success) {
          toast.error(data.message);
          return;
        }

        setSurveys(data.surveys);
		console.log(data.surveys);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurveys();

  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5 mt-16 bg-gray-100 min-h-screen">
      {surveys.map((survey, index) => (
        <div key={index} className="w-full max-w-lg bg-white rounded shadow p-4 mb-4 break-words">
          <p className="text-xl text-gray-600 font-semibold mb-2">{survey.name}</p>
          <p className="text-gray-600 mb-2">{`Gender : ${survey.gender}`}</p>
          <p className="text-gray-600 mb-2">{`Nationality : ${survey.nationality}`}</p>
          <p className="text-gray-600 mb-2">{`Email : ${survey.email}`}</p>
          <p className="text-gray-600 mb-2">{`Phone Number : ${survey.phoneNumber}`}</p>
          <p className="text-gray-600 mb-2">{`Address : ${survey.address}`}</p>
          <p className="text-gray-600">{`Message : ${survey.message}`}</p>
        </div>
      ))}

	  {surveys.length === 0 && (
		<p className="text-2xl text-gray-600 font-semibold -mt-16">
		  No surveys submitted yet!
		</p>
	  )}
    </div>
  );
};

export default SurveyList;
