const zodiac = [
  {
    sign: "ARIES",
    text:
      "March 21 - April 19: Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.",
    image: "img/aries.png",
  },
  {
    sign: "TAURUS",
    text:
      "April 20 - May 20: The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.",
    image: "img/taurus.png",
  },
  {
    sign: "GEMINI",
    text:
      "May 21 - June 20: Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.",
    image: "img/gemini.png",
  },
  {
    sign: "CANCER",
    text:
      "June 21 - July 22: Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.",
    image: "img/cancer.png",
  },
  {
    sign: "LEO",
    text:
      "July 23 - August 22: Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.",
    image: "img/leo.png",
  },
  {
    sign: "VIRGO",
    text:
      "August 23 - September 22: The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them",
    image: "img/virgo.png",
  },
  {
    sign: "LIBRA",
    text:
      "September 23 - October 22: The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.",
    image: "img/libra.png",
  },
  {
    sign: "SCORPIO",
    text:
      "October 23 - November 2: The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.",
    image: "img/scorpio.png",
  },
  {
    sign: "SAGITTARIUS",
    text:
      "November 22 - December 21: The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.",
    image: "img/sagittarius.png",
  },
  {
    sign: "CAPRICORN",
    text:
      "December 22 - January 19: The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.",
    image: "img/capricorn.png",
  },
  {
    sign: "AQUARIUS",
    text:
      "January 20 - February 18: Aquarius is the 11th sign of the zodiac. Aquarians don't always care what others think about them. They take each opportunity they have and work towards formulating new ideas.",
    image: "img/aquarius.png",
  },
  {
    sign: "PISCES",
    text:
      "February 19 - March 20: Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.",
    image: "img/pisces.png",
  },
];

document.querySelector("button").addEventListener("click", horoscopeMe);

function horoscopeMe() {
  let horoscope = document.getElementById("horoscope").value.toUpperCase();

  for (i = 0; i < zodiac.length; i++) {
    if (horoscope === zodiac[i].sign) {
      document.getElementById("symbols").src = zodiac[i].image;
      document.getElementById("yourSign").innerHTML = zodiac[i].sign;
      document.getElementById("fortune").innerHTML = zodiac[i].text;

      return;
    } else {
      document.getElementById("yourSign").innerHTML = "Unknown";
      document.getElementById("fortune").innerHTML =
        "I don't know about that one buddy!";
    }
  }
}
