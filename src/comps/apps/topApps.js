//data for 16.10 (the last day). I have to map for progress column

import FR from "./appicons/france.png";
import US from "./appicons/united-states.png";
import UK from "./appicons/united-kingdom.png";
import BOW from "./appicons/bowMaster-multiplayerGameIcon.jpg";
import DRIVE from "./appicons/driveClimberIcon.jpg";
import FACE from "./appicons/facebookMessengerIcon.jpg";
import chartData from "./chartData";

const dayBeforeRanks = chartData[chartData.length - 2].apps.map(
  (val) => val.rank
);

const apps = [
  {
    id: 1,
    name: "Drive Climber",
    publisher: "Vodoo",
    rating: 4,
    country: FR,
    rank: 6,
    iconName: DRIVE,
    progress: dayBeforeRanks[0] - 6,
  },
  {
    id: 2,
    name: "Facebook Messenger",
    publisher: "Facebook",
    rating: 2,
    country: US,
    rank: 4,
    iconName: FACE,
    progress: dayBeforeRanks[1] - 4,
  },
  {
    id: 3,
    name: "Bowmaster-Multiplayer Game",
    publisher: "Playgendary",
    rating: 4,
    country: UK,
    rank: 5,
    iconName: BOW,
    progress: dayBeforeRanks[2] - 5,
  },
  {
    id: 4,
    name: "Drive Climber",
    publisher: "Vodoo",
    rating: 4,
    country: FR,
    rank: 2,
    iconName: DRIVE,
    progress: dayBeforeRanks[3] - 2,
  },
  {
    id: 5,
    name: "Facebook Messenger",
    publisher: "Facebook",
    rating: 2,
    country: US,
    rank: 8,
    iconName: FACE,
    progress: dayBeforeRanks[4] - 8,
  },
  {
    id: 6,
    name: "Bowmaster-Multiplayer Game",
    publisher: "Playgendary",
    rating: 4,
    country: UK,
    rank: 10,
    iconName: BOW,
    progress: dayBeforeRanks[5] - 10,
  },
  {
    id: 7,
    name: "Drive Climber",
    publisher: "Vodoo",
    rating: 4,
    country: FR,
    rank: 9,
    iconName: DRIVE,
    progress: dayBeforeRanks[6] - 9,
  },
  {
    id: 8,
    name: "Facebook Messenger",
    publisher: "Facebook",
    rating: 2,
    country: US,
    rank: 7,
    iconName: FACE,
    progress: dayBeforeRanks[7] - 7,
  },
  {
    id: 9,
    name: "Bowmaster-Multiplayer Game",
    publisher: "Playgendary",
    rating: 4,
    country: UK,
    rank: 1,
    iconName: BOW,
    progress: dayBeforeRanks[8] - 1,
  },
  {
    id: 10,
    name: "Bowmaster-Multiplayer Game",
    publisher: "Playgendary",
    rating: 4,
    country: UK,
    rank: 3,
    iconName: BOW,
    progress: dayBeforeRanks[9] - 3,
  },
];

export default apps;
