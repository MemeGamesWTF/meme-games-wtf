import { createThirdwebClient } from 'thirdweb';

// Load the Client ID from the environment variable
const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: clientId,
});