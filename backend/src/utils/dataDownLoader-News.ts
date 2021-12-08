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

			const {data} = await axios.get("https://api.spotify.com/v1/shows?market=ES&ids=1WErgoXiZwgctkHLzqU6nf%2C3IM0lmZxpFAY7CwMuv9H4g%2C2mTUnDkuKUkhiueKcVWoP0%2C4Kbsy61zJSzPxNZZ3PKbXl%2C6BRSvIBNQnB68GuoXJRCnQ%2C0KxdEdeY2Wb3zr28dMlQva%2C3fQkNGzE1mBF1VrxVTY0oo%2C2HQ0xANSYpBvxvsEMuYxP9%2C3YMFdNqoNtVcCBKSUvjr8n%2C4sftHO603JaFqpuQBEZReL",
				{headers: {Authorization: "Bearer " + "BQAi-MbaOGbz0r02Zq2ANTTugsTNLg14wz2UGxemlUglH5GC3OAFsWaREdmtV9zGNAVLkGy6VG6zy8BL0HrEjuu2hy6e6KPcr5nZvL-qt81ZEkpuWbgkoqo1fHRYgQuVtywaZtrH1L08MahO6cIkfINx2kkoWsjjT5C0MlziHcZVWqXommzAd9ZTFGuRAV1l2W2qGK_7QBxx15DKVg6Hezq98sydzw"}})
			/*console.log(data.shows[5].name)*/

			// @ts-ignore
			const shows = data.shows.map(show => {
				const createShows: Show = {
					podcastId: uuid(),
					podcastName: show.name,
					podcastDescription: show.description,
					podcastImage: show.images[1],
					podcastGenre: "news"
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