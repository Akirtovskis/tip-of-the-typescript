// Types
const newTestVariable: any = "hello";
const isBootcampAwesome: boolean = true;
const bootcampLengthInWeeks: number = 9;
const mostPopularReview: string = "Life changing";
const techTaught: string[] = ["JavaScript", "React", "MongoDB"];
const randomNumnbers: number[] = [1, 2, 3];
const stringsAndNumbers: (number | string)[] = ["hello", 1, 1, "number", 2];
const tiredIndexVsCupsOfCoffee: [string, number, boolean] = ["very", 1, true];
const limitedAmountOfItem: [string, string] = ["Bonanza", "Ben Rahim"];
// -----------------
// Enum
enum TrafficLight {
  Red = "RED",
  Green = "GREEN",
  Orange = "ORANGE",
}
const currentLight: TrafficLight = TrafficLight.Red;
// --------
// Interface
interface BootcampGraduate {
  mood: string;
  linesOfCodeWritten: number;
  favoriteEnergySource: EnergySources;
  favoriteTravelDestination?: TravelDestinations;
}

// --------
interface EnergySources {
  drink: string;
  activity: string;
  music: string;
}

interface TravelDestinations {
  country: string;
}

const graduateNumber1: BootcampGraduate = {
  mood: "Thrilled",
  linesOfCodeWritten: 9000,
  favoriteEnergySource: {
    drink: "Club mate",
    activity: "Squats",
    music: "Lo-Fi youtube mix",
  },
  favoriteTravelDestination: {
    country: "Berlin",
  },
};

const graduateNumber2: BootcampGraduate = {
  mood: "Excited",
  linesOfCodeWritten: 900,
  favoriteEnergySource: {
    drink: "Espresso",
    activity: "Breathing",
    music: "Beyonce",
  },
};

interface HaikuInput {
  a: number;
  b: string;
  c: string;
}

// -------------------------

// Haiku function
export const haiku = ({ a, b, c }: HaikuInput): string => {
  return `${a} ${b} ${c}`;
};

haiku({ a: 1, c: "2", b: "3" });
haiku({ a: 3, c: "apples", b: "berghain" });

// --------------------------

// Umbrella problem

export const isItRainingToday = (weatherForecast: boolean) => {
  if (weatherForecast === true) {
    return "Alexa play Umbrella by Rihanna";
  } else {
    return "Alexa play Sunny by Boney-M";
  }
};

isItRainingToday(true);
isItRainingToday(false);
isItRainingToday("no");

// -----------------------

// twitter activity

const readTweet = (tweet: string | number): string | number => {
  return tweet;
};

readTweet("This the tweet");
readTweet(1234);
readTweet(true);
readTweet(graduateNumber1);

// tweets posted last month
export const tweetsPostedLastMonth = (
  tweets: string[] | number[] | [number, string, number]
): string | number => {
  console.log(tweets[0]);
  return tweets[0];
};

tweetsPostedLastMonth(["Tweet", "Figure"]);
tweetsPostedLastMonth([2, 3]);
tweetsPostedLastMonth(["tweet", 2]);
tweetsPostedLastMonth([2, "tweet"]);
tweetsPostedLastMonth([1, "tweet", 1]);

// export const tweetsPostedLastMonth = (
//   tweets: (string | number)[] | number[] | [number, string, number]
// ): number | string => {
//   if (tweets.length > 0) {
//     return tweets.length;
//   } else {
//     return "Silence is golden";
//   }
// };

// tweetsPostedLastMonth([1, "tweet", 3]);
// tweetsPostedLastMonth([1, "tweet", "tweet #2"]);
// tweetsPostedLastMonth([1, 2, 4]);
// tweetsPostedLastMonth([
//   "I read cool article about programming",
//   "I like'Berlin",
// ]);
// tweetsPostedLastMonth([boolean, "tweet"]);

// export const sumNumbers = (a: number, b: number) => {
//   return a + b;
// };

export {};
