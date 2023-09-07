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
          Slack Name: <span className="font-normal"> kaodilim</span>
        </p>
        <div className="flex gap-3 " data-testid="slackDisplayImage">
          <p className="font-bold"> Slack Display Picture:</p>
          <img width={200} src={hero} alt="hero image" />
        </div>
        <p data-testid="currentDayOfTheWeek" className="font-bold mt-3">
          Current Day of the Week:
          <span className="font-normal"> {weekday[currentDay]}</span>
        </p>
        <p data-testid="currentUTCTime" className="font-bold mt-3">
          Current UTC Time:
          <span className="font-normal">
            {" "}
            {`${hours}:${minutes}:${seconds}.${milliseconds}`}
          </span>
        </p>
        <p data-testid="myTrack" className="font-bold mt-3">
          Track: <span className="font-normal"> Frontend</span>
        </p>
        <a data-testid="githubURL" href="https://github.com/Kaodily/stage-one">
          <button className="w-[100%] p-4 rounded-md mt-3 hover:bg-black hover:text-white border-2 border-black">
            GitHub URL
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
