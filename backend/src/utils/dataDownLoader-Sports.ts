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

function dataDownLoaderNews() : Promise<any> {
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
			const {data} = await axios.get("https://api.spotify.com/v1/shows?market=ES&ids=3xh4Rx9OsD6hbLzggMvaYd%2C5ss1pqMFqWjkOpt6Ag0fZW%2C4WkDOrAK3uASgK2PRF7j9M%2C7CGHhTuknbj5isplUArvns%2C07SjDmKb9iliEzpNcN2xGD%2C7L0OIwF2hNrjauNq8vRCUP%2C1ol0jP8hrNHydiAd38G6B1%2C5RaNsb5sKEBleahQa4MVC5%2C0m646yo5mIm6RD0QZipgy7%2C2FuorRyd1NSURMWW9Ab7lj",
				{headers: {Authorization: "Bearer " + "BQDbJsHa2Q7xJkm_2-def4MGG63IGyTIpUWLdvqKtsN9xdqM3M8RrxuBALjAEEDRRaHn0kOfeXHLV7os6R8EIfkDG7BiSKJKzlZBfW410q-QF9BL4p8R2jYK_lmlrViG-5XXTtevcBH5lB0p1SsyYnsKgqduU5Th4Rog7xepAFEProVt5hlR_7RzPN196P9XfqMgOow487dwoNSpQPQ"}})
			/*console.log(data.shows[5].name)*/

			// @ts-ignore
			const shows = data.shows.map(show => {
				const createShows: Show = {
					podcastId: uuid(),
					podcastName: show.name,
					podcastDescription: show.description,
					podcastGenre: "sports"
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

dataDownLoaderNews().catch(error => console.error(error))