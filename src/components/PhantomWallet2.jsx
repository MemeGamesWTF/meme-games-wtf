import { ConnectButton } from 'thirdweb/react';
import { client } from './Client';
import "./PhantomWallet2.css";

function PhantomWallet2() {
  return (
    <div className='mobpw7'>
      {/* <h1>My Web3 App</h1> */}
      <ConnectButton
        client={client}
        appMetadata={{
          name: 'My Web3 App',
          url: 'https://memegames.wtf/', // Your app's URL
        }}
      />
    </div>
  );
}

export default PhantomWallet2;