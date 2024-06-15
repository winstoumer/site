import 'react';
import './App.css';
import telegramIcon from '/Logo.png';
import twitterIcon from '/logo-white.png';
import HexagonGrid from './components/Hexagon/HexagonGrid';

function App() {
  const handleButtonClick = () => {
    window.location.href = 'https://t.me/bigmatter_bot';
  };

  const handleTelegramClick = () => {
    window.location.href = 'https://t.me/bigmatter_community';
  };

  const handleTwitterClick = () => {
    window.location.href = 'https://twitter.com/your_twitter_handle';
  };

  return (
    <>
      <div className='header'>
        <button className='icon-button' onClick={handleTelegramClick}>
          <img src={telegramIcon} alt='Telegram' />
        </button>
        <button className='icon-button' onClick={handleTwitterClick}>
          <img src={twitterIcon} alt='Twitter' />
        </button>
      </div>
      <div className='content'>
        <div className='title'>Big matter</div>
        <div className='title-description'>
          An NFT is more than just a picture.<br />Mine and improve your progress with NFTs!
        </div>
        <div className='play-position'>
          <button className='button-play' onClick={handleButtonClick}>Play</button>
        </div>
      </div>
      <div className='background'>
        <img src='/capsule_5.png' className='matter-image' />
      </div>
      <HexagonGrid />
    </>
  );
}

export default App;

