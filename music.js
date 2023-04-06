class Music {
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Unutma", "Gına", "farazikayra.jpeg", "unutmagına.mp3"),
    new Music("Benim Yerime de Sev", "Ata Demirer", "atademirer.jpeg", "atademirer.mp3"),
    new Music("Küs", "Saian-Gına", "saian.jpeg", "kussaian.mp3")
]
