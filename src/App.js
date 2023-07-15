import './App.css';
import { useState } from 'react';
import eagleSound from './assets/eagle.mp3';
import useSound from 'use-sound';
import eagle1 from './assets/eagle1.jpeg';
import eagle2 from './assets/eagle2.jpeg';
import eagle3 from './assets/eagle3.jpeg';
import eagle4 from './assets/eagle4.jpeg';
import eagle5 from './assets/eagle5.jpeg';
import eagle6 from './assets/eagle6.jpeg';
import eagle7 from './assets/eagle7.jpeg';
import eagle8 from './assets/eagle8.jpeg';
import lawAndOrder from './assets/Law-And-Order-Theme-Song.mp3';


function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [playEagle] = useSound(eagleSound);
  const [playLawAndOrder, {stop}] = useSound(lawAndOrder, {volume: 0.25})
  const [eaglePic, setEaglePic] = useState('');
  const [text, setText] = useState('');

  const funnyPhrases = [
    "is the best thing that smells like heaven and looks like a cheesy masterpiece.",
    "eats like a vacuum cleaner that likes devouring everything in sight.",
    "is like a grumpy cat that smells like burnt coffee and looks like a never-ending nightmare.",
    "is a vampire who eats productivity and likes sucking the life out of me.",
    "is a delicious sin that smells like pure temptation and looks like a sweet seduction.",
    "is a tiny tornado that eat energy bars and like causing adorable chaos.",
    "is like a cozy blanket that smells like petrichor and looks like a watercolor painting.",
    "is a diva that eats time and likes crashing at the most inconvenient moments.",
    "is a joyful expression that smells like freedom and looks like a human kaleidoscope.",
    "is a perfume that smells like fresh dreams and looks like a four-wheeled fantasy.",
    "is a torture chamber that eats motivation and likes making you question life choices.",
    "is nature's cheerleader who smell like sunshine and look like yellow pom-poms.",
    "is an addictive gadget that eats attention spans and likes interrupting conversations.",
    "is a controversial herb that smells like soap to some and looks like a leafy daredevil.",
    "is a tiny vampire that eats blood and likes tormenting innocent summer nights.",
    "is a cherished escape that smells like dreams and looks like a soft cloud of pillows.",
    "is a furry bundle of joy that eats everything in sight and likes melting hearts.",
    "is a magical elixir that smells like productivity and looks like a warm hug in a mug.",
    "is a vast rabbit hole that eats time and likes feeding you cute animal videos.",
    "is a buttery delight that smells like movie magic and looks like fluffy clouds.",
    "is contagious music that smells like joy and looks like a symphony of smiles.",
    "Ice cream is a creamy delight that smells like childhood and looks like a sugary masterpiece.",
    "is a sizzling temptation that smells like heaven and looks like crispy strips of happiness.",
    "is a mobile trash can that eats fast-food wrappers and likes hiding important things.",
    "is warm embraces that smell like love and look like a human tangle of happiness.",
    "is a digital time machine that eats productivity and likes crashing during deadlines.",
    "is a sunny paradise that smells like sunscreen and looks like a poolside party.",
    "is an attention-seeking diva that eats your time and likes buzzing at the worst moments.",
    "is a frosty wonderland that smells like hot chocolate and looks like a snow globe come to life.",
    "is a saucy affair that eats white shirts and likes twirling on your fork.",
    "is a poetic symphony that smells like petrichor and looks like liquid poetry.",
    "is a sneaky ninja that eats money and likes vanishing when you need it the most.",
    "is a passionate dance that smells like sweat and looks like a symphony of kicks.",
    "is a celestial beauty that smells like stardust and looks like a glowing silver button.",
  ];

  function addPlayer(e) {

    players.push(currentPlayer);
    setCurrentPlayer('');
  }

  function doneAdding() {
    setGameStarted(true);
    showEagle();
    playLawAndOrder();
  }

  function setPicture() {
    let min = Math.ceil(1);
    let max = Math.floor(8);
    let pic = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (pic) {
      case 1:
        setEaglePic(eagle1);
        break;
      case 2:
        setEaglePic(eagle2);
        break;
      case 3:
        setEaglePic(eagle3);
        break;
      case 4:
        setEaglePic(eagle4);
        break;
      case 5:
        setEaglePic(eagle5);
        break;
      case 6:
        setEaglePic(eagle6);
        break;
      case 7:
        setEaglePic(eagle7);
        break;
      case 8:
        setEaglePic(eagle8);
        break;
    }

  }

  function setTextUnderPic() {
    let min = Math.ceil(0);
    let max = Math.floor(players.length - 1);
    let player = Math.floor(Math.random() * (max - min + 1)) + min;
    min = Math.ceil(0);
    max = Math.floor(funnyPhrases.length - 1);
    let phrase = Math.floor(Math.random() * (max - min + 1)) + min;
    setText(`${players[player]} ${funnyPhrases[phrase]}`);
  }

  function showEagle() {

    var rand = Math.round(Math.random() * 50000);

    setTimeout(function () {
      if (eaglePic === '') {
        stop();
        playEagle();
        setPicture();
        setTextUnderPic();
      }

      setTimeout(function () {
        playLawAndOrder();
        setEaglePic('');
        setText('');
      }, 5000)
      showEagle();
    }, rand);
  }

  return (
    <div className="App">

      {!gameStarted ?
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ margin: '10px' }}>
              Player Name
            </div>
            <div style={{ margin: '10px' }}>
              <input style={{ width: "33%" }} name='playerName' type='text' value={currentPlayer} onChange={(e) => setCurrentPlayer(e.target.value)}></input>
            </div>
            <div style={{ margin: '10px' }}>
              <button onClick={addPlayer} >Add Player</button>
            </div>
            <div style={{ margin: '10px' }}>
              <button onClick={doneAdding} disabled={players.length < 2}>Done</button>
            </div>
          </div>



          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div>
              <ul style={{ listStyleType: 'none' }}>
                {
                  players.map(player => {
                    return <li>{player}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        :
        <div>
          <img style={{ maxHeight: "500px" }} src={eaglePic} />
          <h1>{text}</h1>
        </div>
      }
    </div>
  );
}

export default App;
