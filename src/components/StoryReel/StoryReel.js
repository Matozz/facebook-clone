import React from "react";
import "./StoryReel.css";
import Story from "../Story/Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://publish.nba.com/lakers/sites/lakers/files/1920_lal_mktg_wallpapers_3.25_v2.jpg"
        profileSrc="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p200x200/108811091_3088119657965544_2499567139542261795_o.jpg?_nc_cat=104&_nc_sid=1eb0c7&_nc_ohc=ye5EDRRNdjAAX9oXQCe&_nc_ht=scontent-lax3-1.xx&tp=6&oh=75c798e09c635808d091d858c8ebe61b&oe=5F7260DF"
        title="Dwight Howard"
      />
      <Story
        image="https://www.nba.com/lakers/sites/lakers/files/1920_lal_mktg_wallpapers_12.04_v2.jpg"
        profileSrc="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p200x200/36233144_10156619032413944_4702289019256438784_o.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=7nU6IbJipd0AX96A9F8&_nc_ht=scontent-lax3-1.xx&tp=6&oh=baf0d41c5323ab68c516e41dceb3e10a&oe=5F713B14"
        title="LeBron James"
      />
      <Story
        image="https://www.nba.com/lakers/sites/lakers/files/1920_lal_mktg_wallpapers_12.04_v1.jpg"
        profileSrc="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p200x200/64333906_2693448927350515_7470393135131000832_o.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=14qTujtsDi8AX-ijNhX&_nc_ht=scontent-lax3-1.xx&tp=6&oh=7a24c6153472a58ff97ef1c784979f26&oe=5F733E74"
        title="Anthony Davis"
      />
      <Story
        image="https://www.nba.com/lakers/sites/lakers/files/1920_lal_mktg_wallpapers_3.25.jpg"
        profileSrc="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c0.10.200.200a/p200x200/23406061_136903670298675_3714153459451919246_o.jpg?_nc_cat=106&_nc_sid=1eb0c7&_nc_ohc=1aq5kugf5jwAX_mFz6S&_nc_ht=scontent-lax3-2.xx&oh=b06ee32405ae4ab19d27da2f67b349cc&oe=5F73EA4A"
        title="Kyle Kuzma"
      />
      <Story
        image="https://www.nba.com/lakers/sites/lakers/files/1920_lal_mktg_ww_103019_04_al.jpg"
        profileSrc="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p200x200/73300734_10156614992895060_1812144438458187776_n.jpg?_nc_cat=105&_nc_sid=1eb0c7&_nc_ohc=wgvggRrC-mcAX-aceDl&_nc_ht=scontent-lax3-1.xx&tp=6&oh=0aad85457a749d4637061beb123701e9&oe=5F7389A0"
        title="Danny Green"
      />
    </div>
  );
}

export default StoryReel;
