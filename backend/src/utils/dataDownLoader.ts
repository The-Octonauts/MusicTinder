import axios from "axios";
import {v4 as uuid} from 'uuid';
import {insertShow} from "./podcast/insertPodcast";
import {Show} from "./interfaces/Podcast";
/*import {config} from "dotenv";
import {Podcast} from '../utils/interfaces/Podcast';*/

/*interface Show {
    podcastId: string|null;
    podcastName: string;
    podcastDescription: string|null;
}*/

function dataDownLoader() : Promise<any> {
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
			const {data} = await axios.get("https://api.spotify.com/v1/shows?market=ES&ids=0xDEeqWuoMNBUFGNrhIz6L%2C4rOoJ6Egrf8K2IrywzwOMk%2C5vjIQasHl1KJkppWhHWMQQ%2C1cpyLfDHP1cNnyOb478qrt%2C1PgDUTgeyu3FOzK1FcBoqa%2C6kAsbP8pxwaU2kPibKTuHE%2C0Yzd0g8NYmn27k2HFNplv7%2C2X40qLyoj1wQ2qE5FVpA7x%2C0fg35zGJ4E7JKdhrTivXmt%2C7bnjJ7Va1nM07Um4Od55dW",
				{headers: {Authorization: "Bearer " + "BQBJtrgnBPEi3VdT4e5Pqa_FE4r3aO1OwH2vkXH9r6z0B8G8ENCtVzHcYE8LbwqogS5ghd37FEt_EpZOiUHlkxREQL7u-hNGsJqt-VmACLwD4aATK-t1F8SrsZtFCG2Ko7bzZfVTKGYSwHqKQirdcnF6XIpiWNvDpszeXI3DRvKxxdRVindxvNt0sclRNqnZUAVMyJn_C3MB7ARrywJ1GFjyAV-z4DoE9-M1Cw"}})
			/*console.log(data.shows[5].name)*/

			// @ts-ignore
			const shows = data.shows.map(show => {
				const createShows: Show = {
					podcastId: uuid(),
					podcastName: show.name,
					podcastDescription: show.description,
					podcastGenre: "comedy"
				}
				console.log(insertShow(createShows))
				return createShows

			})
			console.log(shows);

		/*	const createShows: Show = {
				podcastId: uuid(),
				podcastName: data.shows[0].name,
				podcastDescription: data.shows[0].description

			}
			console.log(createShows)*/
/*			const results: any = []
			for(let createShow of data){
				const createShows: Show = {
					podcastId: uuid(),
					podcastName: data.shows[5].name,
					podcastDescription: data.shows[5].description
				}
				results.push(createShows)
			};
			console.log(results);*/


/*			const createShows = (array: any[]) : Show[] => {
			const shows : Show[] = []
				for(let currentShow of array) {
					let show : Show = {podcastId: null, podcastName: currentShow.name, podcastDescription: currentShow.description}
					shows.push(show)
				}
				return shows;
			}
			console.log(createShows(data))*/

		} catch (error) {
			console.error(error)
		}
	}
}

dataDownLoader().catch(error => console.error(error))