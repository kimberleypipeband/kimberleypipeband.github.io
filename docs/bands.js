/* ------------------------------------------------------------------
   Kimberley Pipe Band 100th Anniversary Tattoo - the bands
   ------------------------------------------------------------------
   One entry per band, in the order they appear in the program.
   To change a bio, edit the text between the quotes.

   Visiting bands use:
     bio     short biography (2-4 sentences)
     note    optional one-line "Of note" (leave out if none)
     links   optional  [['Button text','https://...']]
     img     optional photo, e.g. 'docs/images/bands/trail.jpg'
     credit  optional photo credit, e.g. 'Photo: Jane Doe'

   The host band has a longer story (see below).
   ------------------------------------------------------------------ */
var HOST={
  id:'kimberley',name:'Kimberley Pipe Band',where:'Kimberley, B.C.',est:'Est. 1927',yr:'1927',
  facts:[['Founded','1927'],['Founders','Angus & Hamish Scott'],['First Pipe Major','Angus Scott'],['Public debut','Kimberley Day Parade, July 1, 1927']],
  story:[
    'Founded in 1927 by brothers Angus and Hamish Scott, the Kimberley Pipe Band has been part of community life in Kimberley for a century. With Angus serving as its first Pipe Major, the band made its public debut leading the Kimberley Day Parade on July 1, 1927.',
    'Through generations of parades, ceremonies and celebrations, it has carried forward Kimberley’s Scottish musical tradition. It is a familiar friend to Royal Canadian Legion Branch 24 in Cranbrook, and a regular at its Remembrance Day services.',
    'In 2027 it welcomes fellow musicians and guests to this centennial Tattoo, celebrating 100 years of piping, drumming, friendship and community service.'],
  timeline:[
    ['1927','Founded by Angus and Hamish Scott; debut in the Kimberley Day Parade, July 1'],
    ['2017','90th anniversary tattoo: a sold-out show with bands from B.C., Alberta and Washington'],
    ['2027','The 100th Anniversary Tattoo at Western Financial Place, Cranbrook']],
  dyk:'The Angus Scott Pipe Band of Spokane, also on this bill, is named for Angus Scott, the Kimberley band’s founding Pipe Major.',
  hero:{src:'docs/images/band-photo.jpg',cap:'The Kimberley Pipe Band today'},
  then:{src:'docs/images/founders-1927.jpg',cap:'Where it began: the early band, photographed at Jas. Crest Studio, Kimberley.'}
};

var BANDS=[
  {id:'bcr',name:'British Columbia Regiment Band',where:'Vancouver, B.C.',est:'Lineage 1883',yr:'1883',kind:'Brass and reed band',
   bio:'Based at Vancouver’s historic Beatty Street Drill Hall, this is the brass-and-reed band of The British Columbia Regiment (Duke of Connaught’s Own). Its musical lineage dates to the regiment’s first authorized band in 1883, and it was revived as a volunteer band in 1987. Today its musicians provide ceremonial and concert music for military occasions, commemorations, parades and public events throughout Greater Vancouver.',
   note:'The only band at this Tattoo without bagpipes: brass, woodwinds and percussion.',
   links:[['bcrband.com','https://www.bcrband.com']]},

  {id:'kootenay',name:'Kootenay Kiltie Pipe Band',where:'Nelson, B.C.',est:'Est. 1919',yr:'1919',
   bio:'Founded in Nelson in 1919, the Kootenay Kiltie Pipe Band is the oldest pipe band in the British Columbia Interior. From its beginnings under Pipe Major William McLeary, it has provided music for generations of parades, ceremonies and celebrations. Wearing MacPherson tartan, the Kilties serve Nelson, the West Kootenay and the wider Interior, and have shared a 100-year association with the Kimberley Pipe Band.',
   note:'Nelson’s Highland Games, first held in 1932, ran as an annual event for 50 years.',
   links:[['Nelson Museum: the Kiltie Band at 100','https://nelsonmuseum.ca/exhibitions/kiltie-band-100-year-anniversary/']]},

  {id:'trail',name:'Trail Pipe Band',where:'Trail, B.C.',est:'Early 1920s',yr:'1920s',
   bio:'The Trail Pipe Band has been part of the cultural life of the West Kootenay since the early 1920s. Once known as the Trail Caledonia Society Pipe Band, it performs at concerts, parades and community events throughout the Kootenays and Pacific Northwest. It also teaches piping and drumming to students of all ages, helping ensure the tradition continues.'},

  {id:'kelowna',name:'Kelowna Pipe Band Society',where:'Kelowna, B.C.',est:'Est. 1923',yr:'1923',
   bio:'Founded in 1923, the Kelowna Pipe Band Society is one of British Columbia’s oldest pipe bands. Originally a community ensemble and later associated with the Royal Canadian Legion, it became an independent society in the early 2000s. Today it performs throughout the Okanagan and beyond, promoting Scottish music, remembrance and fellowship.',
   note:'For its 100th birthday in 2023, ten bands marched together down Bernard Avenue, including Kimberley and Kootenay Kiltie.'},

  {id:'pg',name:'Prince George Pipes & Drums',where:'Prince George, B.C.',est:'Est. 1950s',yr:'1950s',
   bio:'A community band dating to the 1950s, representing Prince George and north-central British Columbia. Its pipers and drummers bring the stirring sound of Highland music to parades, commemorations, festivals and civic celebrations, helping preserve Scottish musical traditions in the north while welcoming chances to perform with bands from across the region.'},

  {id:'angus',name:'Angus Scott Pipe Band',where:'Spokane, Wash.',est:'Est. 1955',yr:'1955',
   bio:'Formed in the Spokane area in 1955, the Angus Scott Pipe Band is among the Pacific Northwest’s longest-serving pipe bands. It is named for Angus Scott, founding Pipe Major of the Kimberley Pipe Band, whose encouragement helped inspire its creation. Wearing Scott tartan, it performs throughout eastern Washington and northern Idaho and keeps a special connection with Kimberley.',
   note:'Kimberley’s band was a regular guest at Spokane’s annual Scottish Picnic, helping make it a success.'},

  {id:'shuswap',name:'Shuswap Pipes ’n Drums',where:'Shuswap, B.C.',est:'Est. 1968',yr:'1968',
   bio:'A community band dedicated to traditional Scottish piping and drumming, formed in 1968. Its members, drawn from Lake Country, Vernon, Enderby, Salmon Arm, Chase, Sicamous and Revelstoke, share their music at parades, competitions, commemorations and community celebrations. The band enjoys a longstanding relationship of mutual support with the Revelstoke Highlanders Pipe Band.'},

  {id:'kamloops',name:'Kamloops Pipe Band Society',where:'Kamloops, B.C.',est:'Society 1978',yr:'1978',
   bio:'The piping tradition in Kamloops reaches back to the 1920s, with a lasting foundation laid by the Kamloops Legion Pipe Band in 1962. The present society was formed in 1978 and has since performed and competed across North America and in Scotland. It remains committed to community service, musical development and the preservation of Scottish tradition.'},

  {id:'cowichan',name:'Cowichan Pipes & Drums',where:'Duncan, B.C.',est:'Est. 1980',yr:'1980',
   bio:'Founded in 1980 and based in Duncan, Cowichan Pipes & Drums is an independent community band serving the Cowichan Valley and Vancouver Island. It presents both traditional and contemporary pipe-band music at parades, ceremonies, festivals and community celebrations, and its supporting society assists with training, uniforms, equipment and travel.'},

  {id:'kalamalka',name:'Kalamalka Highlanders Pipe Band',where:'Vernon, B.C.',est:'Est. 1984',yr:'1984',
   bio:'Founded in Vernon in 1984 under Pipe Major Reg Scott, the Kalamalka Highlanders are an active performance band serving the North Okanagan. The charitable organization promotes Scottish and Celtic culture through piping, drumming and community participation, and wears the maroon and grey Portree tartan of the Isle of Skye.',
   note:'The only band in the B.C. Interior to run both a junior and an adult pipe band.'},

  {id:'cochrane',name:'Cochrane Pipe Band',where:'Cochrane, Alta.',est:'Est. 1999',yr:'1999',
   bio:'A welcoming community band that has represented Cochrane and southern Alberta for more than two decades. Players of all skill levels join from Kananaskis, Cochrane, Calgary and nearby communities, performing at parades, ceremonies, weddings, memorials and other special occasions to preserve Scottish piping and drumming traditions.'},

  {id:'augusta',name:'Augusta Pipes & Drums',where:'Augusta, Ga.',est:'Est. 2024',yr:'2024',
   bio:'Augusta Pipes & Drums began humbly in 2024. In a short time it has revived bagpiping and Scottish heritage in the Augusta, Georgia area. With the Angus Scott Pipe Band of Spokane, it is one of two American bands joining the Tattoo.'},

  {id:'lethbridge',name:'Lethbridge Police Service Pipe Band',where:'Lethbridge, Alta.',est:'Formed 2025',yr:'2025',kind:'Police pipe band',
   bio:'Formed in January 2025, the Lethbridge Police Service Pipe Band united the Lethbridge Legion Pipe Band and the Bridge City Highlanders Pipes and Drums. Made up of police personnel and civilian volunteers, it serves as both a ceremonial unit and a community ambassador at police ceremonies, Remembrance observances, parades and public events across southern Alberta.',
   note:'The Legion band it grew from dates to 1952, when it began as the Army, Navy, Airforce Pipe Band.',
   links:[['Lethbridge Police pipe band page','https://www.lethbridgepolice.ca/lpspipeband']]},

  {id:'boundary',name:'Boundary Pipe Band Society',where:'Boundary region, B.C.',est:'Est. 2026',yr:'2026',
   bio:'Incorporated as a British Columbia non-profit on January 30, 2026, the Boundary Pipe Band Society serves the communities of the Boundary region. It is building a family-friendly program for pipers and drummers of all ages, with a focus on teaching and mentoring young musicians, and performs at parades, Remembrance observances and festivals.'},

  {id:'surrey',name:'Surrey Police Service Pipes and Drums',where:'Surrey, B.C.',est:'New band',yr:'NEW',kind:'Police pipe band',
   bio:'A new ceremonial ensemble representing Surrey’s municipal police service. The band supports official ceremonies, commemorations and community events, building connections between the police service and the people of Surrey. It took part in the historic 2025 ceremony marking the formal transfer of policing authority to the Surrey Police Service.'}
];
