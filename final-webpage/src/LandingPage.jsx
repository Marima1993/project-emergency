import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faFacebook);
import { Link } from "wouter";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="bg-blue-800">
        <div className=" Top flex gap-60">
          <div>
            <div className=" flex flex-col  font-Raleway  text-left text-2xl text-white font-semibold m-12 ">
              <Link className="text-5xl hover:text-6xl " href="/LoadingPage">
                LeipzigTreffen
              </Link>

              <p className="p-5">
                Find out about <br />
                alternative events in the <br />
                city of Leipzig!
              </p>
            </div>
          </div>

          <div className="text-white font-semibold font-Raleway text-2xl">
            <p className="p-40">Download the app on:</p>
          </div>
          <div>
            <div className="flex flex-col justify-center ">
              <div className="h-fit overflow-y-hidden"></div>
              <img className=" w-96 " src="./src/pngegg.png"></img>{" "}
            </div>
          </div>
        </div>

        <div className=" Lobo font-Poppins bg-yellow-400  text-2xl text-black font-semibold flex flex-row justify-between p-8 pl-10 h-[400px] ">
          <div className="pr-60 m-10">
            <p>
              Explore the nearby events <br />
              for the week.
            </p>
          </div>

          <div className=" font-Poppins bg-black text-xl text-white font-semibold p-4 relative m-5 h-[220px]">
            <p> Join the Events that interest you the most! </p>
            <div className="absolute right-[40%] top-[40%] w-[400px] h-auto">
              {" "}
              <img className="" src="./src/lobo.jpeg"></img>{" "}
            </div>
          </div>
        </div>

        <div className=" p-6 flex flex-row text-2xl text-white font-semibold h-80 justify-between justify-start pl-20 h-80 m-10  ">
          <h1 className="pr-60 m-14">
            {" "}
            No need to create a <br />
            profile.
          </h1>

          <p className="pr-48 m-10">
            Simply add your information as <br />
            event promoter to try to help out <br /> others to find a way to
            enjoy <br />
            themselves!
          </p>
        </div>
        <div className=" p-20 first-line:font-Poppins bg-yellow-400  text-black font-semibold  flex flex-row justify-between text-left p-40 ">
          <div className="p-10 flex flex-col text-left text-6xl gap-10 font-bolds">
            <h1>
              {" "}
              We <br />
              need
              <br />
              <i>your</i> <br />
              help!{" "}
            </h1>
            <svg
              width="87"
              height="83"
              viewBox="0 0 87 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.5797 34.8726C76.4397 29.6543 84.6777 14.5597 84.6777 9.72554C84.6777 5.46767 80.8398 1.8981 73.9952 1.8981C63.0927 1.8981 53.3147 22.9794 50.2591 28.0056C47.8879 23.4436 36.7898 0.393433 27.0118 0.393433C19.4094 0.393433 15.8404 4.05905 15.8404 8.66908C15.8404 14.3196 24.2006 28.966 27.2318 34.6005C25.6918 34.2323 24.0295 33.9122 22.3428 33.9122C16.6227 33.9122 10.5358 38.5703 10.5358 42.3319C10.5358 43.7565 11.7337 45.7574 12.4915 47.086C3.47122 48.6867 2.67685e-05 52.6244 2.67685e-05 58.5631C-0.0244183 70.1202 16.696 82.3495 40.2122 82.3495C69.0573 82.3495 87 68.1673 87 49.8712C87 42.9722 85.3133 36.7454 73.5797 34.8726ZM64.9261 17.681C65.9039 15.7122 70.084 7.38851 73.9952 7.38851C76.0975 7.38851 76.6597 8.81314 76.6597 9.94964C76.6597 13.007 67.2239 29.8944 65.1461 33.6401L56.8348 32.6797L64.9261 17.681ZM23.5162 8.12484C23.5162 6.22 27.0607 0.809616 34.8342 15.6642L43.2922 31.7192C39.4788 31.5111 36.5209 31.239 34.6387 31.9433C31.9742 27.3333 23.5162 12.7829 23.5162 8.12484ZM22.9539 39.4506C30.1163 39.4506 39.3566 54.5933 39.3566 56.6422C39.3566 57.4586 38.1588 58.467 36.7654 58.467C31.6564 58.467 17.9671 46.1576 17.9671 42.8281C17.9916 41.5956 21.0717 39.4506 22.9539 39.4506ZM68.0062 69.2718C60.8927 74.394 51.7991 77.0512 41.19 77.0512C26.6696 77.0512 15.2049 71.8329 9.68027 62.917C5.50017 55.9699 10.6092 51.9842 14.716 51.9842C17.5027 51.9842 27.9896 61.6364 27.9896 63.6853C27.9896 64.4697 26.1074 65.0139 25.1295 65.0139C21.1939 65.0139 19.6539 62.5328 12.6381 56.7863C5.37794 61.5404 17.6494 70.6964 26.8896 70.6964C33.2698 70.6964 37.4254 66.8227 36.1787 63.9734C37.0832 63.9734 38.2077 64.0215 39.0388 63.8774C39.3077 68.2153 41.2633 73.3856 49.2324 73.7538C49.2324 73.6097 49.7213 72.6173 49.7213 72.5692C49.7213 69.784 47.1301 67.3509 47.1301 64.5177C47.1301 59.9877 52.4347 55.6018 57.8126 53.0406C59.7682 52.0802 62.1394 51.4879 64.4372 50.9437C66.8084 50.3514 69.3262 49.6631 71.1352 48.4786C70.8663 46.6858 69.7418 45.1011 67.0039 45.1011C60.2327 45.1011 37.5232 45.7414 37.5232 38.7463C37.5232 37.6739 37.5476 36.6494 41.7766 36.6494C49.6724 36.6494 69.7173 37.93 75.5842 41.3075C80.0087 43.8846 81.5243 59.4274 68.0062 69.2718ZM43.9034 49.1029C46.2745 49.5991 48.719 49.7432 51.1635 50.0633C49.3546 50.9277 47.7412 51.9842 46.2012 53.1207C45.5167 51.7601 44.6856 50.4315 43.9034 49.1029Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="relative pb-10">
            {" "}
            <p className="bg-black text-white text text-[140%] font-Poppins flex-row justify-center p-6 m-0 ">
              {" "}
              As this page is a collaborative effort,
              <br />
               we invite you to participate,
              <br />
               any piece of information counts for <br />
              the night life and alternative <br /> offer promotion in Leipzig.
            </p>
            <div className="absolute right-[45%] top-[45%] w-[425px] h-auto">
              {" "}
              <img
                className=" "
                src="./src/Screenshot 2024-05-30 at 14.39.30.png"
              ></img>{" "}
            </div>
          </div>
        </div>

        <div></div>

        <Navbar />
      </div>
    </>
  );
}
export default LandingPage;
