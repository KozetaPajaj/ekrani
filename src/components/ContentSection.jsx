import React from "react";

const ContentSection = () => {
  const images = [
    {
      id: 1,
      imgURL:
        "https://www.watchmojo.com/uploads/thumbs720/Fi-M-Top10-Beloved-Hollywood-Actors-480p30.jpg",
    },
    {
      id: 2,
      imgURL:
        "https://compote.slate.com/images/fd268400-c348-4021-82bb-3d0a1962e257.jpg",
    },
    {
      id: 3,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2v43kggKrEShQwtnwCLBUki-nKctDI_U0w&s",
    },
    {
      id: 4,
      imgURL:
        "https://source.boomplaymusic.com/buzzgroup1/M00/3D/A7/rBEevGLXpSiAU3jLAAIwlwO9nlo220.jpg",
    },
    {
      id: 5,
      imgURL: "https://sofy.tv/blog/wp-content/uploads/2018/01/1-17.jpg",
    },
    {
      id: 6,
      imgURL:
        "https://www.fortressofsolitude.co.za/wp-content/uploads/2021/10/The-10-Best-Actors-of-All-Time.gif",
    },
    {
      id: 7,
      imgURL:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-539272894-1596728832.jpg?crop=1xw:0.7391590013140604xh;center,top&resize=1200:*",
    },
    {
      id: 8,
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_.jpg",
    },
    {
      id: 9,
      imgURL:
        "https://ygo-assets-entities-us.yougov.net/856705ce-2d00-11e6-8fa2-87887d182df9.jpg",
    },
    {
      id: 10,
      imgURL:
        "https://ciowomenmagazine.com/wp-content/uploads/2024/01/1.1-Scarlett-Johansson-Source-Refinery29.jpg",
    },
    {
      id: 11,
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Emma_Stone_at_the_2024_New_York_Film_Festival_1_%28cropped%29.jpg/220px-Emma_Stone_at_the_2024_New_York_Film_Festival_1_%28cropped%29.jpg",
    },
    {
      id: 12,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGOIs2O16NPRsSj8L3Aw-il76TgOAQzPoXRriqgmmrjeZXuMa1rjRfZjM5qlZdODKRLM&usqp=CAU",
    },
    {
      id: 13,
      imgURL:
        "https://img.buzzfeed.com/buzzfeed-static/static/2024-02/15/4/asset/51ea3d1d652f/sub-buzz-4822-1707970454-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    },
    {
      id: 14,
      imgURL:
        "https://i.pinimg.com/564x/cf/f8/05/cff80597549edd278d7658d7dad477a0.jpg",
    },
    {
      id: 15,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbGcXTsjcp5AjilVstizwJoNEh8EjXwrkahzK7FIymi34nTbDHogjuIBicjBqJDCuf7k&usqp=CAU",
    },
    {
      id: 16,
      imgURL:
        "https://people.com/thmb/hMbaX03AgiOipv9tjLMeJwJXD8g=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(701x314:703x316)/Halle-Berry-32a4bf8a907c421587738bb3bc5a43bc.jpg",
    },
    {
      id: 17,
      imgURL:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Leslie-Nielsen-Cropped.jpg",
    },
    {
      id: 18,
      imgURL:
        "https://www.newsmax.com/CMSPages/GetFile.aspx?guid=1cbe5b65-4969-47f7-a05f-a6a5e0570cdb&SiteName=Newsmax",
    },
    {
      id: 19,
      imgURL:
        "https://s2.r29static.com/bin/entry/d45/720x864,85/1931895/image.webp",
    },
    {
      id: 20,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzz222mSfTDoINPkoDVS4-p6_yuuzrJMEnBg&s",
    },
    {
      id: 21,
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BMTgwMzQ4ODYxMV5BMl5BanBnXkFtZTcwNDAwMTc2NQ@@._V1_.jpg",
    },
    {
      id: 22,
      imgURL:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2022/10/1067px-adamsandlerhwoffeb11.jpg",
    },
    {
      id: 23,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivVISpALcKaaPHi-0toJZSsH87kXvcJOOV1HhLlmkpkFW0y6pKeuvtKtvxfF7DQqSBgw&usqp=CAU",
    },
    {
      id: 24,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35berxl8coaIrfiHM3Ey4rpQ94oscmT83Q3lXH70tF4hcyhPXeUcjPDMTF76vYrbA0Lc&usqp=CAU",
    },
    {
      id: 25,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfH7RwC62hXFEN6OMCtIYisGaZG0IAzYht1uz8mUL9mLEPC489hvn2mUMmHd7VsOtjKg0&usqp=CAU",
    },
    {
      id: 26,
      imgURL:
        "https://preview.redd.it/who-is-the-funniest-comedy-actor-in-hollywood-v0-5js936g0z0gb1.png?width=602&format=png&auto=webp&s=bc320b55a737f8714d33ca194b56c753e9bc02e6",
    },
    {
      id: 27,
      imgURL:
        "https://i.pinimg.com/474x/e8/4d/a4/e84da45044532dc6ff05904b434f8036.jpg",
    },
    {
      id: 28,
      imgURL: "https://ntvb.tmsimg.com/assets/assets/449883_v9_bb.jpg",
    },
    {
      id: 29,
      imgURL:
        "https://ygo-assets-entities-us.yougov.net/8bd98242-2d06-11e6-9dc6-455dca91e85a.jpg",
    },
    {
      id: 30,
      imgURL:
        "https://static.stacker.com/s3fs-public/2024-01/angelina-jolie-mot-famous-actress-born-same-year-as-you.png",
    },
    {
      id: 31,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiafgC7pdtWq8jHXWqvqmTFf4t_oeFGO2Rlg&s",
    },
  ];
  return (
    <div className="bg-gradient-to-tl from-[#00ccb6] to-black p-8 mb-32 mt-26 relative min-h-[500px] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row aligin-start justify-between z-4 realtive">
        <div>
          <h1 className="text-white text-3xl uppercase font-bold mb-6">
            Actors Spotlight
          </h1>
          <p className="text-[#ffffffc2] max-w-md">
            Get to know the faces on screen behind your favorite movies and
            shows.Explore a showcase of actors who bring unforgettable
            characters to life, featured through striking images that capture
            their presence and talent.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 cont m-0 absolute right-46 top-[-13rem] sm:top-0">
        {images.map((item) => (
          <div key={item.id} className="w-[70px] sm:w-[150px] h-[70px] sm:h-[150px] overflow-hidden">
            <img
              src={item.imgURL}
              alt={`pic ${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
