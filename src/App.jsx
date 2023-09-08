import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
  const day = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = day.getDay();
  const hours = day.getUTCHours();
  const minutes = day.getUTCMinutes();
  const seconds = day.getUTCSeconds();
  const milliseconds = day.getUTCMilliseconds();
  return (
    <div className=" flex justify-center pt-20 md:pt-72 lg:pt-16 xl:pt-44">
      <div className="w-[90%] shadow-md md:w-[50%] lg:w-[40%] bg-white h-max p-6">
        <p data-testid="slackUserName" className="font-bold mb-3">
           Slack Name: kaodilim
        </p>
        <div className="flex gap-3 ">
          <p className="font-bold"> Slack Display Picture:</p>
          <img
            data-testid="slackDisplayImage"
            width={200}
            src={hero}
            alt="kaodilim"
          />
        </div>
        <p data-testid="currentDayOfTheWeek" className="font-bold mt-3">
           Current Day of the Week: { weekday[currentDay]}
        </p>
        <p data-testid="currentUTCTime" className="font-bold mt-3">
           Current UTC Time: 
           { `${ hours}:${minutes}:${seconds}.${milliseconds}`}
        </p>
        <p data-testid="myTrack" className="font-bold mt-3">
          Track: Frontend
        </p>
        <a
        className=" block w-[100%] text-center p-4 rounded-md mt-3 hover:bg-black hover:text-white border-2 border-black"
          data-testid="githubURL"
          href="https://github.com/Kaodily/stage-one"
          target="_blank"
          rel="noreferrer">
            GitHub URL
        </a>
      </div>
    </div>
  );
}

export default App;
