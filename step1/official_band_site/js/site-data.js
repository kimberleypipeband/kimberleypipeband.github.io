/* =================================================================
   KIMBERLEY PIPE BAND — EVERYTHING YOU MIGHT NEED TO UPDATE
   -----------------------------------------------------------------
   This is the only file most people will ever need to edit.
   Rules of thumb:
     • Keep the quote marks "like this" around words.
     • Keep the comma at the end of each line or block.
     • To add something, copy an existing block and change the words.
     • To remove something, delete its whole block { ... },
   After saving, refresh the website to check it.
   ================================================================= */

/* Link to the 100th Anniversary Tattoo website (used on every page). */
var TATTOO_URL = "https://www.kimberleypipeband.ca/";

/* Band email address (used for bookings and the join button). */
var BAND_EMAIL = "info@kimberleypipeband.ca";


/* -----------------------------------------------------------------
   UPCOMING EVENTS  (shown on the Home page under "Where we're playing")
   date:  year-month-day, e.g. "2027-06-05"
   Past events disappear from the list by themselves.
   Set big: true to make one event stand out.
   ----------------------------------------------------------------- */
var EVENTS = [
  { date: "2027-07-23", end: "2027-07-24",
    name: "100th Anniversary Tattoo",
    place: "Kimberley, B.C.",
    note: "Two days celebrating 100 years of the band.",
    big: true },
];

/* Parades and events the band plays most years. Shown under the list
   so visitors always see where to find us, even before dates are set. */
var REGULARS = [
  { name: "Creston Blossom Festival", when: "May" },
  { name: "Marysville Daze", when: "June" },
  { name: "Kimberley grad ceremonies", when: "June" },
  { name: "Spirit of the Rockies Parade, Cranbrook", when: "June" },
  { name: "Julyfest Parade, Kimberley", when: "July" },
  { name: "Remembrance Day", when: "November" },
  { name: "Robbie Burns Night", when: "January" },
];


/* -----------------------------------------------------------------
   CURRENT MEMBERS  (Our Story page, "Meet the band")
   group: "lead", "pipes" or "drums"
   photo: file name in the img/members folder ("" shows initials)
   Answers come from the Member Monday posts. Leave any answer as ""
   and that line is simply hidden.
   ----------------------------------------------------------------- */
var MEMBERS = [
  { name: "Jock MacDonald", role: "Pipe Major", group: "lead", since: "1996", photo: "jock-macdonald.jpg",
    first: "Remembrance Day", age: "12 years old", tune: "Highland Laddie",
    hobbies: "Camping, golf & motorcycles", fav: "All of them", least: "Amazing Grace" },
  { name: "Liela Cooper", role: "Pipe Sergeant", group: "lead", since: "1977", photo: "liela-cooper.jpg",
    first: "Robbie Burns Night", age: "15 years old", tune: "Mairi's Wedding",
    hobbies: "Highland dance & hiking", fav: "Banjo Breakdown", least: "High Road to Gairloch" },
  { name: "Jim Feenstra", role: "Pipe Sergeant", group: "lead", since: "1997", photo: "jim-feenstra.jpg",
    first: "Sam Steele Days", age: "24 years old", tune: "March Wings",
    hobbies: "Model railroading", fav: "Fond Memories of Youth", least: "None, love to play them all" },
  { name: "Laura Cooper", role: "Drum Sergeant", group: "lead", since: "2007", photo: "laura-cooper.jpg",
    first: "Celtic Night", age: "Old enough", tune: "Mairi's Wedding",
    hobbies: "Dog walking, sewing & biking", fav: "Changes all the time", least: "Heroes of Kohima" },

  { name: "Lorne MacKinnon", role: "Piper", group: "pipes", since: "1968–73, back in 2019", photo: "lorne-mackinnon.jpg",
    first: "Remembrance Day", age: "11 years old", tune: "Highland Laddie",
    hobbies: "Golf, skiing and hiking", fav: "All of Set Nine", least: "Amazing Grace" },
  { name: "Noah Wesche", role: "Piper", group: "pipes", since: "1998", photo: "noah-wesche.jpg",
    first: "Marysville Daze", age: "9 years old", tune: "Steamboat",
    hobbies: "World domination", fav: "Sandy's New Chanter", least: "Anything with Captain in it" },
  { name: "Steve Maher", role: "Piper", group: "pipes", since: "2005", photo: "steve-maher.jpg",
    first: "Julyfest parade", age: "26 years old", tune: "Chi Min Toman",
    hobbies: "Hiking and kite sailing", fav: "Set Six", least: "The 2010 version of Sailing" },
  { name: "Loreen Wilson", role: "Piper", group: "pipes", since: "2006", photo: "loreen-wilson.jpg",
    first: "Creston Blossom Festival", age: "40 years old", tune: "Steamboat",
    hobbies: "Skiing & cycling", fav: "Cap No More", least: "Cabar Feidh" },
  { name: "Pieter Jansen", role: "Piper", group: "pipes", since: "2008", photo: "pieter-jansen.jpg",
    first: "Robbie Burns Night", age: "10 years old", tune: "Highland Laddie",
    hobbies: "Being a silly grampa", fav: "Jill's Endeavor", least: "Hasn't been written yet" },
  { name: "Jane Pharoah", role: "Piper", group: "pipes", since: "2018", photo: "jane-pharoah.jpg",
    first: "Julyfest parade", age: "Girls don't say their age", tune: "Steamboat",
    hobbies: "Model railroading", fav: "All of them", least: "None" },
  { name: "Niall Boardman", role: "Piper", group: "pipes", since: "2019", photo: "niall-boardman.jpg",
    first: "Julyfest parade", age: "15 years old", tune: "Steamboat",
    hobbies: "My Jeep", fav: "Set Two", least: "Any out of tune" },
  { name: "Ian Marshall", role: "Piper", group: "pipes", since: "2025", photo: "ian-marshall.jpg",
    first: "Julyfest parade", age: "14 years old", tune: "High Road to Gairloch",
    hobbies: "Model railroading", fav: "Set Four", least: "Earl of Errol" },
  { name: "Akira Lane", role: "Piper", group: "pipes", since: "2025", photo: "akira-lane.jpg",
    first: "Remembrance Day", age: "8 years old", tune: "The Brown Haired Maiden",
    hobbies: "Reading and writing", fav: "Sky Bound", least: "Earl of Errol" },
  { name: "Brodie Rice", role: "Piper", group: "pipes", since: "2025", photo: "brodie-rice.jpg",
    first: "Remembrance Day", age: "13 years old", tune: "Green Hills of Tyrol",
    hobbies: "Flying airplanes", fav: "Black Bear", least: "Cabar Feidh" },

  { name: "Gerry Simmonds", role: "Side Drummer", group: "drums", since: "2000", photo: "gerry-simmonds.jpg",
    first: "Julyfest parade", age: "25, with the Ottawa Cameron Highlanders in 1969", tune: "79th's Farewell to Gibraltar",
    hobbies: "Hockey, golf and skiing", fav: "Walter Douglas", least: "They are all good" },
  { name: "Brian Bova", role: "Side Drummer", group: "drums", since: "2025", photo: "brian-bova.jpg",
    first: "Julyfest parade", age: "Top secret", tune: "Top secret",
    hobbies: "Top secret", fav: "Top secret", least: "Top secret" },
  { name: "Allen Kaizer", role: "Side Drummer", group: "drums", since: "2026", photo: "allen-kaizer.jpg",
    first: "Canada Day", age: "20 years old, with the Halifax Citadel regimental band", tune: "",
    hobbies: "Rock climbing", fav: "The Black Bear & Cabar Feidh", least: "To be decided" },
  { name: "Art Morris", role: "Tenor Drummer", group: "drums", since: "2017", photo: "art-morris.jpg",
    first: "Creston Blossom Festival", age: "15 years old", tune: "Scotland the Brave",
    hobbies: "Classic cars and travelling", fav: "The Moonshine set", least: "Captain Norman" },
  { name: "Honor Neve", role: "Tenor Drummer", group: "drums", since: "2024", photo: "honor-neve.jpg",
    first: "Julyfest parade", age: "Old enough", tune: "Angus MacKinnon",
    hobbies: "Sewing & gardening", fav: "Walter Douglas", least: "Hugh Fraser of Saskatoon" },
  { name: "Amanda Martz", role: "Bass Drummer", group: "drums", since: "2025", photo: "amanda-martz.jpg",
    first: "Spirit of the Rockies", age: "19 years old", tune: "Don't remember",
    hobbies: "Golf, camping & family", fav: "Set Nine", least: "Highland Cathedral" },

];


/* -----------------------------------------------------------------
   RECORDINGS  (Listen & Watch page). Files live in the audio folder.
   ----------------------------------------------------------------- */
var TRACKS = [
  { title: "Song for the Smallpipes", players: "J. MacDonald",
    file: "song-for-the-smallpipes.mp3" },
  { title: "Mist Covered Mountains, Going Home & Cailinn Mo Rùin-sa", players: "D. Ekskog",
    file: "mist-covered-mountains-going-home-cailinn-mo-ruinsa.mp3" },
  { title: "Nixon's Wedding March, Ass in the Graveyard & Lucy Cassidy", players: "J. Feenstra & J. MacDonald",
    file: "nixons-wedding-march-set.mp3" },
  { title: "Donald MacLean's Farewell to Oban, Maggie Cameron & The Brown Haired Maid", players: "D. Ekskog, D. MacKinnon, J. MacDonald & A. Beaton",
    file: "donald-macleans-farewell-to-oban-set.mp3" },
];


/* -----------------------------------------------------------------
   VIDEOS  (Listen & Watch page)
   Once a video is on YouTube, paste the part of the link after
   "watch?v=" between the quotes of youtube.
   e.g. https://www.youtube.com/watch?v=abc123XYZ  ->  youtube: "abc123XYZ"
   Until then the poster picture shows with "Video coming soon".
   ----------------------------------------------------------------- */
var VIDEOS = [
  { title: "Amazing Grace, 90th Anniversary Tattoo finale", year: "2017",
    note: "Pipe Major Jock MacDonald", poster: "amazing-grace-finale-2017.jpg", youtube: "" },
  { title: "90th Anniversary Parade", year: "2017",
    note: "Down the main street of Kimberley", poster: "tattoo-parade-2017.jpg", youtube: "" },
  { title: "Ceilidh with the Johnny McCuaig Band", year: "2017",
    note: "It's a Long Way to the Top", poster: "ceilidh-johnny-mccuaig-2017.jpg", youtube: "" },
  { title: "Hornpipe", year: "2017",
    note: "", poster: "hornpipe-2017.jpg", youtube: "" },
];
