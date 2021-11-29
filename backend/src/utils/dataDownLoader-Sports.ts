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
<<<<<<< HEAD
				{headers: {Authorization: "Bearer " + "BQA2vQ31r2_QeESM3f8oXTvX9xEu3YPQs9Vr8bDwxuxJZUw_ffta8j70a3bElxC3n4QwzJuY2TpLzf8tRm-rLbhbj5wqOG5YlBraXOp4lJ3P-rWt7-0JGVS76ImhCsyzaQI4kzHghpRG3qduG01v4mHOHMmIcQ"}})
=======
				{headers: {Authorization: "Bearer " + "BQBf8DPfMESFuqCYMXkWy69aJflMJVLXfUK3b__FjQpQmz7RD_WmBlpi8f9m3crmgVH6ae4DolTFnIV6wbqbZNyO2-eNJHHni-oNi2zWeBU-vQK7E41Jl65Ru9iNL0Hp27wNojtAs755ntkDeN83TTFvyzVsQ0YyuZbUrumCwDssevv_IjbPFu7FKyxzQl0Yc3yjzm_EZPdwFtFoKkZ9pHc2i546DmfCQFDYOQ"}})
>>>>>>> bc650d20f03eb8768cc407cde5a0e1c8e5feb7a1
			/*console.log(data.shows[5].name)*/

			// @ts-ignore
			const shows = data.shows.map(show => {
				const createShows: Show = {
					podcastId: uuid(),
					podcastName: show.name,
					podcastDescription: show.description,
					podcastImage: show.images[1],
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