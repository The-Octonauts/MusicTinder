import axios from "axios"

interface Show {
    podcastId: string|null;
    podcastName: string;
    podcastGenre: string;
    podcastDescription: string|null;
}

function dataDownloader() : Promise<any> {
    return main()

    async function main() {
        try {
            await downloadShow()

        } catch (e) {
            console.log(e)
        }
    }


    async function downloadShow() {
        try {
            const {data} = await axios.get("https://api.spotify.com/v1/shows?market=ES&ids=0xDEeqWuoMNBUFGNrhIz6L%2C4rOoJ6Egrf8K2IrywzwOMk%2C5vjIQasHl1KJkppWhHWMQQ%2C1cpyLfDHP1cNnyOb478qrt%2C1PgDUTgeyu3FOzK1FcBoqa%2C6kAsbP8pxwaU2kPibKTuHE%2C0Yzd0g8NYmn27k2HFNplv7%2C2X40qLyoj1wQ2qE5FVpA7x%2C0fg35zGJ4E7JKdhrTivXmt%2C7bnjJ7Va1nM07Um4Od55dW", {headers: {Authorization: "Bearer " + "BQAdGJDeP5zL20p_ZVNqJmw8069fEi7XWC-8znCoPnDVkvxDGVy0mP7HGktz-R3R0MofxGBaVVc1qRACqoaIkiSiETD1432Z-IFjAndOCwR_Lgq4GM0ZcS5fmqYmCp8Q-uomVPWyr_78Xl9e3VK5bFadGJpUbVsX7s00e-u3wpiKk-vjc0Hn6f-auIzQFdrqXefbp-0c4VVl-E7q30U"}})
            console.log(data.shows[0].name)
            console.log(data.shows[0].description)
            console.log(data.shows[0].id)

            const createShow = (array: any[]) : Show[] => {
                        const  Shows : Show[] = []
                        for(let currentShow of array) {
                            let show : Show = {podcastId: null, podcastName: currentShow.title, podcastDescription: currentShow.body, podcastGenre: currentShow.genre}
                            Shows.push(show)
                        }
                        return Shows
                    }

                    console.log(createShows(data))

        }catch (error) {
                console.error(error)
            }
    }
}

            dataDownloader().catch(error => console.error(error))
