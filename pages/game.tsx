import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

import Menu from "../app/dashboard/Menu";
import Leaderboard from "../types/leaderboard.type";
import LeaderboardDataService from "../services/leaderboard.service";
import Footer from '../app/dashboard/Footer';

const words = ["ache",
"acid",
"acre",
"aide",
"alan",
"alec",
"ally",
"alto",
"andy",
"anna",
"apex",
"arch",
"area",
"aria",
"army",
"arse",
"atom",
"aunt",
"aura",
"auto",
"axis",
"axle",
"babe",
"baby",
"bach",
"back",
"bail",
"bait",
"ball",
"band",
"bang",
"bank",
"bark",
"barn",
"base",
"bash",
"bass",
"bath",
"bead",
"beak",
"beam",
"bean",
"bear",
"beat",
"beck",
"bede",
"beef",
"beer",
"bell",
"belt",
"bend",
"berg",
"beta",
"beth",
"bias",
"biff",
"bike",
"bile",
"bill",
"bird",
"birt",
"bite",
"bloc",
"blot",
"blow",
"blue",
"blur",
"boar",
"boat",
"body",
"boil",
"bolt",
"bomb",
"bond",
"bone",
"book",
"boom",
"boon",
"boot",
"boro",
"boss",
"bout",
"bowe",
"bowl",
"bran",
"bray",
"brew",
"brim",
"brit",
"brow",
"buck",
"buff",
"bulb",
"bulk",
"bull",
"bump",
"bunk",
"burn",
"bury",
"bush",
"bust",
"butt",
"byte",
"cafe",
"cage",
"cake",
"calf",
"call",
"calm",
"camp",
"cane",
"cape",
"capt",
"card",
"care",
"carl",
"carp",
"carr",
"cart",
"casa",
"case",
"cash",
"cast",
"cath",
"cave",
"cell",
"cert",
"chad",
"chan",
"chap",
"chat",
"chef",
"chin",
"chip",
"chop",
"chub",
"city",
"clan",
"claw",
"clay",
"clip",
"club",
"clue",
"coal",
"coat",
"coca",
"cock",
"code",
"coil",
"coin",
"coke",
"col.",
"cold",
"cole",
"colt",
"coma",
"comb",
"cone",
"cook",
"cool",
"cope",
"copy",
"cord",
"core",
"cork",
"corn",
"cost",
"coun",
"coup",
"cove",
"crab",
"crag",
"crap",
"cray",
"crop",
"crow",
"crux",
"cube",
"cuff",
"cult",
"cunt",
"cure",
"curl",
"dada",
"dale",
"dame",
"damn",
"dana",
"dark",
"dart",
"dash",
"date",
"davy",
"dawn",
"deal",
"dean",
"dear",
"debt",
"dec.",
"deck",
"deed",
"deer",
"dell",
"demo",
"dent",
"dept",
"desk",
"dial",
"dick",
"diet",
"dirt",
"disc",
"dish",
"disk",
"dock",
"dole",
"doll",
"dome",
"doom",
"door",
"dope",
"dose",
"down",
"drag",
"draw",
"drip",
"drop",
"drug",
"drum",
"duck",
"duct",
"duel",
"duet",
"duff",
"duke",
"dump",
"dune",
"dung",
"dusk",
"dust",
"duty",
"dyer",
"dyke",
"earl",
"ease",
"east",
"echo",
"eddy",
"eden",
"edge",
"emma",
"enid",
"envy",
"epic",
"eric",
"evil",
"exam",
"exit",
"expo",
"eyre",
"face",
"fact",
"fair",
"fall",
"fame",
"fare",
"farm",
"fate",
"fear",
"feat",
"feel",
"fern",
"feud",
"fiat",
"fife",
"fig.",
"file",
"fill",
"film",
"find",
"fine",
"fire",
"firm",
"fish",
"fist",
"flag",
"flak",
"flap",
"flat",
"flaw",
"flea",
"flex",
"flop",
"flow",
"flue",
"flux",
"foal",
"foam",
"foil",
"fold",
"folk",
"font",
"food",
"fool",
"foot",
"ford",
"fore",
"fork",
"form",
"fort",
"foul",
"frau",
"fray",
"frog",
"fuck",
"fuel",
"fund",
"fury",
"fuse",
"fuss",
"gain",
"gait",
"gala",
"gale",
"gall",
"game",
"gang",
"gaol",
"gasp",
"gate",
"gaze",
"gear",
"gene",
"germ",
"gift",
"gill",
"gina",
"girl",
"gist",
"glee",
"glen",
"glow",
"glue",
"glyn",
"goal",
"goat",
"gold",
"golf",
"good",
"gore",
"gown",
"graf",
"gram",
"gran",
"gray",
"grey",
"grid",
"grin",
"grip",
"grit",
"grub",
"gulf",
"gull",
"gulp",
"guru",
"hail",
"hair",
"hale",
"half",
"hall",
"halo",
"halt",
"hand",
"hang",
"hank",
"hare",
"harm",
"harp",
"hart",
"hate",
"haul",
"hawk",
"haze",
"head",
"heap",
"heat",
"heck",
"heed",
"heel",
"heir",
"hell",
"helm",
"help",
"herb",
"herd",
"hero",
"hick",
"hide",
"high",
"hill",
"hilt",
"hint",
"hire",
"hiss",
"hive",
"hoax",
"hogg",
"hold",
"hole",
"holt",
"home",
"hong",
"hood",
"hook",
"hope",
"horn",
"hose",
"host",
"hour",
"howe",
"hull",
"hunt",
"hurt",
"hush",
"hyde",
"hymn",
"hype",
"icon",
"idea",
"idol",
"inch",
"info",
"iris",
"iron",
"isle",
"item",
"jack",
"jade",
"jail",
"jake",
"jane",
"java",
"jazz",
"jean",
"jeep",
"jeff",
"jerk",
"jess",
"jews",
"jill",
"jock",
"joey",
"john",
"joke",
"jolt",
"josh",
"jump",
"junk",
"jury",
"kate",
"keep",
"kemp",
"kerb",
"khan",
"kick",
"kiev",
"kill",
"kiln",
"kilo",
"kind",
"king",
"kirk",
"kiss",
"kite",
"kiwi",
"knee",
"knob",
"knot",
"kohl",
"kong",
"kyle",
"lace",
"lack",
"lady",
"lake",
"lamb",
"lamp",
"land",
"lane",
"lang",
"lark",
"lass",
"lava",
"lawn",
"lead",
"leaf",
"leak",
"leap",
"lear",
"lego",
"levy",
"liar",
"life",
"lift",
"like",
"lily",
"lima",
"limb",
"lime",
"limp",
"line",
"ling",
"link",
"lion",
"list",
"liza",
"load",
"loaf",
"loan",
"lobe",
"loch",
"lock",
"loco",
"loft",
"logo",
"look",
"loom",
"loop",
"lord",
"lore",
"loss",
"love",
"lowe",
"luce",
"luck",
"lucy",
"ludo",
"lull",
"lump",
"lung",
"lure",
"lust",
"lyon",
"mace",
"maid",
"mail",
"main",
"make",
"male",
"mali",
"mall",
"malt",
"mama",
"mane",
"marc",
"mare",
"mark",
"mary",
"mask",
"mass",
"mast",
"mate",
"matt",
"maud",
"mayo",
"maze",
"mead",
"meal",
"mean",
"meat",
"memo",
"menu",
"mesh",
"mess",
"mick",
"midi",
"mike",
"mile",
"milk",
"mill",
"mime",
"mind",
"mine",
"mink",
"mint",
"miss",
"mist",
"mite",
"moan",
"moat",
"mode",
"mole",
"mona",
"monk",
"mono",
"mood",
"moon",
"moor",
"moss",
"moth",
"move",
"muck",
"mule",
"muse",
"must",
"myth",
"nail",
"name",
"nana",
"nape",
"nave",
"navy",
"neck",
"need",
"neon",
"ness",
"nest",
"news",
"nick",
"nina",
"node",
"noel",
"nome",
"noon",
"norm",
"nose",
"note",
"noun",
"nova",
"omen",
"onus",
"open",
"oral",
"otto",
"oval",
"oven",
"over",
"pack",
"pact",
"page",
"pain",
"pair",
"pall",
"palm",
"pang",
"papa",
"para",
"park",
"parr",
"part",
"pass",
"past",
"path",
"paul",
"peak",
"pear",
"peat",
"peck",
"peel",
"peer",
"perm",
"pest",
"pick",
"pier",
"pike",
"pile",
"pill",
"pine",
"pink",
"pint",
"pipe",
"piss",
"pity",
"plan",
"play",
"plea",
"plot",
"ploy",
"plug",
"plum",
"plus",
"poem",
"poet",
"pole",
"poll",
"polo",
"poly",
"pond",
"pons",
"pony",
"pool",
"pope",
"pore",
"pork",
"porn",
"port",
"pose",
"post",
"pram",
"prey",
"prof",
"prop",
"puff",
"pull",
"pulp",
"pump",
"punk",
"push",
"putt",
"quay",
"quid",
"quiz",
"race",
"rack",
"raft",
"rage",
"raid",
"rail",
"rain",
"rake",
"ramp",
"rank",
"rape",
"rash",
"rate",
"rave",
"read",
"rear",
"reed",
"reef",
"reel",
"rein",
"rest",
"riba",
"rice",
"rick",
"ride",
"rift",
"rind",
"ring",
"riot",
"rise",
"risk",
"rite",
"ritz",
"road",
"roar",
"robe",
"rock",
"role",
"roll",
"roof",
"room",
"root",
"rope",
"rosa",
"ross",
"rota",
"ruby",
"ruin",
"rule",
"rump",
"rune",
"rush",
"rust",
"ruth",
"sack",
"safe",
"saga",
"sage",
"sail",
"sake",
"sale",
"salt",
"sand",
"sash",
"saul",
"scan",
"scar",
"scot",
"scum",
"seal",
"seam",
"sean",
"seat",
"sect",
"seed",
"self",
"sept",
"shah",
"sham",
"shaw",
"shed",
"shin",
"ship",
"shit",
"shoe",
"shop",
"show",
"side",
"sigh",
"sign",
"silk",
"sill",
"silt",
"sink",
"site",
"size",
"skin",
"skip",
"skye",
"slab",
"slag",
"slam",
"slap",
"slip",
"slit",
"slot",
"slug",
"slum",
"snag",
"snow",
"soap",
"sock",
"soda",
"sofa",
"soil",
"sole",
"solo",
"song",
"sony",
"soot",
"sort",
"soul",
"soup",
"spar",
"spin",
"spit",
"spot",
"spur",
"stab",
"stag",
"stan",
"star",
"stay",
"stem",
"step",
"stew",
"stir",
"stop",
"stud",
"suit",
"surf",
"swan",
"sway",
"swim",
"tack",
"tact",
"taff",
"tail",
"tait",
"take",
"tale",
"talk",
"tang",
"tank",
"tape",
"tart",
"task",
"taxi",
"tbsp",
"team",
"tear",
"tech",
"tent",
"term",
"test",
"text",
"thaw",
"thud",
"tick",
"tide",
"tier",
"tile",
"till",
"tilt",
"time",
"tina",
"toad",
"toby",
"todd",
"toll",
"tomb",
"tone",
"tony",
"tool",
"tort",
"tory",
"toss",
"tour",
"town",
"tram",
"trap",
"tray",
"tree",
"trek",
"trim",
"trio",
"trip",
"trot",
"tsar",
"tube",
"tuck",
"tuna",
"tune",
"tung",
"turf",
"turn",
"twig",
"twin",
"tyne",
"type",
"tyre",
"unit",
"urge",
"user",
"vale",
"vase",
"veil",
"vein",
"vent",
"vera",
"verb",
"vest",
"veto",
"vial",
"vice",
"view",
"vine",
"visa",
"void",
"vol.",
"vote",
"wade",
"wage",
"wait",
"wake",
"walk",
"wall",
"wand",
"wang",
"want",
"ward",
"ware",
"warp",
"wash",
"wasp",
"watt",
"wave",
"wear",
"week",
"weir",
"west",
"whim",
"whip",
"wick",
"wife",
"wild",
"will",
"wind",
"wine",
"wing",
"wink",
"wire",
"wise",
"wish",
"wolf",
"womb",
"wood",
"wool",
"word",
"work",
"worm",
"wrap",
"wren",
"writ",
"yale",
"yang",
"yard",
"yarn",
"year",
"yoga",
"yuan",
"zeal",
"zero",
"zest",
"zeta",
"zinc",
"zone",
"zoom"]

function Game() {
  const [streak, setStreak] = useState(0);
  const [guess, setGuess] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [finalResult, setFinalResult] = useState("");
  const [randWord, setRandWord] = useState("");
  const [nextWord, setNextWord] = useState("");
  const [t, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [highStreak, setHighStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [username, setUsername] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  const guessRef = React.useRef(null);

  useEffect(() => {
    // Start the timer when a new word is displayed
    let timerInterval = setInterval(() => {
      setTimer((t) => t - 1);

      // If the timer has reached 0, end the game
      if (t === 0) {
        setGameOver(true);
        setCurrentResult(`Game over!`);
        setFinalResult(`The next word after ${randWord} was ${nextWord}. Streak of ${streak} words. ${score} total points.`);
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, [gameOver, t]);

    // Select a new word when the game starts or when the user submits a correct guess
    useEffect(() => {
  
      const randomIndex = Math.floor(Math.random() * words.length);
      setRandWord(words[randomIndex]);
  
      // Get the index of the next word in the list
      const nextWordIndex = (randomIndex + 1) % words.length;
  
      // Get the next word in the list
      setNextWord(words[nextWordIndex]);
    }, [gameOver]);

  function handleGuess(guess: String) {
      if (guess.length == 4) {
        if (guess === nextWord) {
          setGuess('');
          setStreak(streak + 1);
          setCurrentResult(``);
          const randomIndex = Math.floor(Math.random() * words.length);
          setRandWord(words[randomIndex]);
      
          // Get the index of the next word in the list
          const nextWordIndex = (randomIndex + 1) % words.length;
          
          // Get the next word in the list
          setNextWord(words[nextWordIndex]);

          while (gameOver == false) {
            if (nextWord[0] !== randWord[0]) {
              // score += 4;
              setScore(score + 4);
              break;
            }

            if (nextWord[1] !== randWord[1]) {
              // wordScore += 3;
              setScore(score + 3);
              break;
            }

            if (nextWord[2] !== randWord[2]) {
              // wordScore += 2;
              setScore(score + 2);
              break;
            }

            if (nextWord[3] !== randWord[3]) {
              // wordScore += 1;
              setScore(score + 1);
              break;
            }
          }

          setTimer(60);
        } else {
          setGuess('');
          setCurrentResult(``);
        }
      } else {
        alert("Word must be 4 letters long");
        setGuess('');
        setCurrentResult(``);
      }
  }

  let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  useEffect(() => {
    const savedHighStreak = localStorage.getItem("highStreak");
    const savedHighScore = localStorage.getItem("highScore");
    const savedUsername = localStorage.getItem("username");
    const savedLeaderboardID = localStorage.getItem("leaderboardID");

    if (savedHighStreak && savedHighScore) {
      setHighStreak(parseInt(savedHighStreak));
      setHighScore(parseInt(savedHighScore));
    }

    if (savedUsername) {
      setUsername(savedUsername);
    }

    if (!savedLeaderboardID) {
      localStorage.setItem("leaderboardID", guid());
    }
  }, []);

  if (streak > highStreak || score > highScore) {
    setHighStreak(streak);
    setHighScore(score);
    localStorage.setItem("highStreak", JSON.stringify(streak));
    localStorage.setItem("highScore", JSON.stringify(score));
    setShowUpload(true);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    handleGuess(guess);
  }

  function handlePlayAgain() {
    setGameOver(false);
    setStreak(0);
    setScore(0);
    setCurrentResult("");
    setFinalResult("");
    setTimer(60);
  }

  function handleUploadToLeaderboard() {
    localStorage.setItem("username", username);

    let data: Leaderboard = {
      date: new Date().toUTCString(),
      userName: username,
      streak: highStreak,
      score: highScore
    };

    let leaderboardID = localStorage.getItem("leaderboardID");

    if (!leaderboardID) {
      leaderboardID = guid();
      localStorage.setItem("leaderboardID", leaderboardID);
    }

    LeaderboardDataService.update(leaderboardID, data);
    setShowUpload(false);
    alert("Uploaded!");
  }

  const checkForEnter = (e: any) => {
    if (e.key === "Enter" && e.shiftKey == false) {
      console.log("enter");
      return handleSubmit(e);
    }
  }

  useEffect(() => {
    if (guess !== "" && guess === nextWord) {
      handleGuess(guess);
    }
  }, [guess]);

  return (

    <div className="h-screen bg-gray-100">

      <Menu/>
      
      <div className="overflow-hidden grid py-20 m-10 place-items-center overflow-y-hidden bg-gray-200 rounded-3xl">
        {!gameOver ? (
          <>
            <div className="flex flex-col justify-center items-center overflow-y-hidden">
              <div className="flex">
                <p className="mx-5 text-5xl">{streak}</p>
                <p className="mx-5 text-5xl">{t}</p>
                <p className="mx-5 text-5xl">{score}</p>
              </div>
              <p className="bg-gray-400 p-5 rounded-lg text-2xl w-48 text-center mt-4">{randWord}</p>
            </div>
            <div className="flex mt-6">
              <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <input
                  className="text-black w-48 bg-white p-2"
                  type="text"
                  placeholder="Type guess here"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value.toLowerCase())}
                  onKeyDown={checkForEnter}
                  ref={guessRef}
                />
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-full m-10" type="submit">Guess</button>
              </form>
            </div>
            <p>{currentResult}</p>
            <p className="font-bold">Personal Best</p>
            <p>Streak: {highStreak}</p>
            <p>Score: {highScore} </p>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center overflow-y-hidden">
              <p className="text-2xl font-bold pb-4">{currentResult}</p>
              <p className="text-center mx-20 mb-4">{finalResult}</p>
              <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-full mt-6 mb-6" onClick={handlePlayAgain}>Play Again</button>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
                <Link href="/">Home</Link>
              </button>
            </div>

            {showUpload && <div className="flex flex-col justify-center items-center overflow-y-hidden mt-20">
              <p>You got a personal high score! Do you wish to upload it?</p>
              <input
                  className="text-black w-48 bg-white p-2 mt-5"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase())}
                  placeholder="Username"
                />
              <button className="bg-gray-600 p-2 px-5 my-4 rounded-full mt-5" onClick={handleUploadToLeaderboard}>Upload</button>
            </div>}
          </>

        )}
      </div>
      <Footer/>
    </div>
    

  
  );
}

export default Game;