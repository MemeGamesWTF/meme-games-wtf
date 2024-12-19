import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


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
  const response = await fetch(`https://x-user-data.movindusenuraaluthge.workers.dev?oauth_token=${oauth_token}&oauth_token_secret=${oauth_token_secret}`);
  const data = await response.json();
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
};

export default function CallBack() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const oauth_token = searchParams.get("oauth_token");
  const oauth_verifier = searchParams.get("oauth_verifier");

  const API_BASE = import.meta.env.PROD ? 'https://api.x.com' : '/twitter-auth';

  const getTwitterAuthData = async () => {
    if (oauth_token && oauth_verifier) {
      const url = `${API_BASE}/oauth/access_token?oauth_token=${encodeURIComponent(
        oauth_token
      )}&oauth_verifier=${encodeURIComponent(oauth_verifier)}`;
      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      try {
        const response = await fetch(url, requestOptions);
        const result = await response.text();
        const credentials = handleOAuthResponse(result);
        console.log('Stored credentials:', credentials);
        await getUserData(credentials.oauth_token, credentials.oauth_token_secret);
        setMessage('Authentication successful!');
        navigate('/');
      } catch (error) {
        console.error(error);
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
    <div>
      {/* <p>Redirecting...</p> */}
      <h3>Response:</h3>
      <pre>
        {JSON.stringify(message, null, 2)}
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