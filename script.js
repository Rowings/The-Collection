

const collection = [
    {
      name: "Medine",
      labels: " Din Records, Because Music, WMI, Stars de rue",
      dateNaissance: "Date de Naissance : 1983",
      picture: "https://upload.wikimedia.org/wikipedia/commons/c/c7/GRANDm%C3%A9dine.jpg",
      genre: ["Hip-hop", "Rap Français", "Rap politique", "Rap Hardcore", "Rap conscient"],
      album : ["11 Septembre, récit du 11e jour", "Jihad, le plus grand combat contre soi-même", "Arabian Panther", "Protest Song", "Storyteller", "Grand Medine"],
      link : "https://www.youtube.com/watch?v=tHUp9Bb9_Sk"
    },

    {
        name: "Josman",
        labels: " Sideline ",
        dateNaissance: "Date de Naissance : 1992 ",
        picture: "https://numero.twic.pics/images/flexible_grid/100/jos_19josman-shooting-fabrice-tayeau-rap-francais-album-split-numero-magzine.jpg",
        genre: ["Hip-hop"],
        album : ["J.O.$", "SPLIT", "M.A.N"],
        link : "https://www.youtube.com/watch?v=ViHXVR6XOSo"
      },

      {
        name: "Ninho",
        labels: " Mal Luné Music, Rec. 118, Warner, TTR ",
        dateNaissance: "Date de Naissance : 1996",
        picture: "https://pbs.twimg.com/media/E74uqzLXEAEzTLU.jpg",
        genre: ["Hip-hop", "Trap", "Pop-rap"],
        album : ["Comme prévu", "Destin", "Jefe"],
        link : "https://www.youtube.com/watch?v=pxjsZK_fkO4"
      },

      {
        name: "Rémy",
        labels: " Def Jam France ",
        dateNaissance: "Date de Naissance : 1997",
        picture: "https://www.booska-p.com/wp-content/uploads/2022/01/Remy-97-Mesures-Visu-News-1024x750.jpg",
        genre: ["Hip-hop", "Rap Old-School", "Rap conscient"],
        album: ["C'est Rémy", "Rémy d'Auber", "Renaissance"],
        link : "https://www.youtube.com/watch?v=u8hj07v8uMA"
      },
      
      {
        name: "Kekra",
        labels: " VRL ",
        dateNaissance: "Date de Naissance : inconnue ",
        picture: "https://images.lesindesradios.fr/fit-in/1500x2000/radios/swigg/importrk/news/original/60378b9b6166c0.87473443.png",
        genre: ["Hip-hop", "Trap", "Grime", "Cloud Rap", "Drill", "2-step garage"],
        album: ["Vréel", "Vréel 2", "Vréel 3", "Land", "VRL", "Kekra"],
        link : "https://www.youtube.com/watch?v=q57tSmAMwSw"
      },

      {
        name: "Booba",
        labels: " 	Tallac Records, 92i, AZ, Capitol, Universal, Because Music, 45 Scientific, Barclay, 7 Corp, Piraterie Music ",
        dateNaissance: 1976,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Festival_des_Vieilles_Charrues_2019_-_Booba_-_038.jpg/1200px-Festival_des_Vieilles_Charrues_2019_-_Booba_-_038.jpg",
        genre: ["Hip-hop français", "Gansta Rap"],
        album: ["Temps mort", "Panthéon", "Ouest Side", "0.9", "Lunatic", "Futur", "D.U.C", "Nero Nemesis", "Trône", "ULTRA"],
        link : "https://www.youtube.com/watch?v=Stet_4bnclk"
      },

      {
        name: "SCH",
        labels: "  Maison Baron Rouge, Warner, Rec. 118 ",
        dateNaissance: 1993,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SCH_en_concert_2.jpg/1200px-SCH_en_concert_2.jpg",
        genre: ["Hip-hop français", "Rap", "Hip-hop", "Trap"],
        album: ["Anarchie", "Deo Favente", "JVLIVS : Tome 1 - Absolue", "Rooftop", "JVLIVS : Tome 2 - Marché Noir" ],
        link : "https://www.youtube.com/watch?v=xXOZiFmjSVE"
      },
      
      {
        name: "Laylow",
        labels: " Digital Mundo ",
        dateNaissance: 1993,
        picture: "https://revrse.fr/wp-content/uploads/2022/03/FNw6-fUWUAAUeb5.jpg",
        genre: ["Rap", "Hip-hop", "Cloud Rap"],
        album: ["Trinity", "L'étrange Histoire de Mr.Anderson" ],
        link : "https://www.youtube.com/watch?v=ZxNUiqd1JUM"
      },
      
      {
        name: "Alpha Wann",
        labels: " Don Dada Records, Universal ",
        dateNaissance: 1989,
        picture: "https://lalogemag.fr/photos/img/alpha-wann-2.jpg",
        genre: ["Hip-hop français"],
        album: ["Une main lave l'autre"],
        link : "https://www.youtube.com/watch?v=es30CeGgPMo"
      },
      
      {
        name: "Lomepal",
        labels: "	Pressing, Pineale Prod, Grand Musique Management ",
        dateNaissance: 1991,
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Festival_des_Vieilles_Charrues_2019_-_Lomepal_-_038.jpg/1200px-Festival_des_Vieilles_Charrues_2019_-_Lomepal_-_038.jpg",
        genre: ["Hip-hop", "Rap français", "Chanson française"],
        album: ["FLIP", "Jeannine"],
        link : "https://www.youtube.com/watch?v=7xx6GWSa5dg"
      },
      
    ]



function displayArtiste ()
{
    let main = document.querySelector("main");
    let fig;
    let figcaption;
    let div;
    let name;
    let labels;
    let dateNaissance;
    let picture;
    let genre;
    let album;
    let link;



    for (const artiste of collection) {


        fig = document.createElement("figure");
        picture = document.createElement("img");
        figcaption = document.createElement("figcaption");
        div = document.createElement("div");
        name = document.createElement("h3");
        genre = document.createElement("p");
        labels = document.createElement("p")
        album = document.createElement("p")
        dateNaissance = document.createElement("p")
        link = document.createElement("a")
        link.className = "button"
        
        name.appendChild(document.createTextNode(artiste.name));
        genre.appendChild(document.createTextNode(artiste.genre));
        labels.appendChild(document.createTextNode(artiste.labels));
        dateNaissance.appendChild(document.createTextNode(artiste.dateNaissance));
        album.appendChild(document.createTextNode(artiste.album));
        link.appendChild(document.createTextNode("Play"));
  
    
        fig.appendChild(picture);
        fig.appendChild(figcaption);
        div.appendChild(name);
        figcaption.appendChild(div);
        figcaption.appendChild(dateNaissance);
        figcaption.appendChild(labels);
        figcaption.appendChild(genre);
        figcaption.appendChild(album);
        figcaption.appendChild(link);
        document.querySelector("main").appendChild(fig);

        picture.setAttribute("src", artiste.picture);
        picture.setAttribute("alt", "artiste image");
        genre.setAttribute("class", "genre");
        link.setAttribute("href", artiste.link);

      

        
    }
}



displayArtiste();
