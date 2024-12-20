import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import './CallBack.css';


const handleOAuthResponse = (responseText) => {
  const params = new URLSearchParams(responseText);

  const credentials = {
    oauth_token: params.get('oauth_token'),
    oauth_token_secret: params.get('oauth_token_secret'),
    user_id: params.get('user_id'),
    screen_name: params.get('screen_name')
  };

  Object.entries(credentials).forEach(([key, value]) => {
    if (value) {
      localStorage.setItem(key, value);
    }
  });
  return credentials;
};

const getUserData = async (oauth_token, oauth_token_secret) => {
  try {
    const options = {
      method: 'GET'
    }
    const url = `https://x-user-data.movindusenuraaluthge.workers.dev?oauth_token=${oauth_token}&oauth_token_secret=${oauth_token_secret}`;
    // const response = await fetch(url, options);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // const data = await response.json();
    const { data } = await axios.get(url, options);
    console.log({ data });

    const userData = {
      name: data.name,
      screen_name: data.screen_name,
      profile_banner_url: data.profile_banner_url,
      location: data.location,
      profile_image_url_https: data.profile_image_url_https,
      following: data.following,
    }
    Object.entries(userData).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(key, value);
      }
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export default function CallBack() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const oauth_token = searchParams.get("oauth_token");
  const oauth_verifier = searchParams.get("oauth_verifier");

  // const API_BASE = import.meta.env.PROD ? 'https://api.x.com' : '/twitter-auth';
  // const API_BASE = 'https://api.x.com';

  const getTwitterAuthData = async () => {
    if (oauth_token && oauth_verifier) {
      const url = `https://67645ae7589ad07a96fd.appwrite.global/?oauth_token=${encodeURIComponent(oauth_token)}&oauth_verifier=${encodeURIComponent(oauth_verifier)}`;
      try {
        const { data: { data: result } } = await axios.get(url);
        console.log({ result });
        // const params = new URLSearchParams(result);
        const credentials = handleOAuthResponse(result);
        console.log('Stored credentials:', credentials);
        await getUserData(credentials.oauth_token, credentials.oauth_token_secret);
        setMessage('Authentication successful!');
        navigate('/');
      } catch (error) {
        console.log({ error });
        setMessage('Authentication failed.');
        navigate('/');
      }
    }
  };

  useEffect(() => {
    setMessage('Authenticating...');
    getTwitterAuthData();
  }, []);


  return (
    <div className="clbk-container">
      {/* <h3 className="clbk-title">Response:</h3> */}
      <pre className="clbk-pre">
        {(message)}
      </pre>
    </div>
  );
}


// export const credentialsLoader = async () => {
//   const oauth_token = localStorage.getItem('oauth_token');
//   const oauth_token_secret = localStorage.getItem('oauth_token_secret');
//   const user_id = localStorage.getItem('user_id');
//   const screen_name = localStorage.getItem('screen_name');
//   return { oauth_token, oauth_token_secret, user_id, screen_name };
// };