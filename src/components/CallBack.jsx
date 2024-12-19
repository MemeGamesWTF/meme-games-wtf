import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CallBack() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [responseMessage, setResponseMessage] = useState(null);

  // useEffect(() => {
  //   navigate('/');
  // }, [navigate]);

  const oauth_token = searchParams.get("oauth_token");
  const oauth_verifier = searchParams.get("oauth_verifier");

  const getTwitterAuthData = async () => {
    if (oauth_token && oauth_verifier) {
      // Construct the URL
      const url = `/twitter-auth/oauth/access_token?oauth_token=${encodeURIComponent(
        oauth_token
      )}&oauth_verifier=${encodeURIComponent(oauth_verifier)}`;

      // Post the data

      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      try {
        const response = await fetch(url, requestOptions);
        const result = await response.text();
        // console.log(result)
        setResponseMessage(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getTwitterAuthData();
  }, []);

  // https://api.x.com/oauth/access_token?oauth_token=vTif-wAAAAABxkvaAAABk93OXYo&oauth_verifier=asdhlnHH7Gx4CkX39pmtXgNjbW9cM1Az

  return (
    <div>
      {/* <p>Redirecting...</p> */}
      <h3>Response:</h3>
      <pre>
        {responseMessage
          ? JSON.stringify(responseMessage, null, 2)
          : "Loading..."}
      </pre>
    </div>
  );
}
