import { ConnectButton } from 'thirdweb/react';
import { client } from './Client';
import "./PhantomWallet2.css";

function PhantomWallet2() {
  return (
    <div className='absolute bottom-36 left-1/3 transform -translate-x-1/4 px-5 py-2'>
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