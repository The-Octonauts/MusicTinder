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
            const {data} = await axios.get("https://api.spotify.com/v1/shows?market=ES&ids=63AWQmsSnFNFHUqnRAOFtD%2C79CkJF3UJTHFV8Dse3Oy0P%2C706hylM6zaDW8LrrYxcggQ%2C5ZIxtIWb16Vr2hFStL4nZK%2C3WdMpEOWYl8Zx8uzzH8rAn%2C5EqqB52m2bsr4k1Ii7sStc%2C3rDR8CfpIEMpITG2UC3w5W%2C3Zq2XDpVrtadTR1xOfzhzo%2C0PAPT0bIKian2QrstzTsiw%2C2bAmrw0xKnOhOx4hqSL7vF",

                {headers: {Authorization: "Bearer " + "BQBzZjUpQXKrXlsQu4b53RbxkvHYsQyGbTJ-sXNwX3_V4rJOSBOJlEoqvmmLQvv65JOOdguzj4nI-GGhVOmJ7nGh4V9PS1W-rzqnhrp0NeUcpeICxg3FLvjSRDFnp9Vht0LFzKzdz6Qpb5WMWndxWhgPERSee-ZujrYTpzg6UsVfSKPqAxc5ly9g9J8yKgYDPXqi5GHR2Lkl3kC9nsVTTTb5RPG-rw"}})
            /*console.log(data.shows[5].name)*/

            // @ts-ignore
            const shows = data.shows.map(show => {
                const createShows: Show = {
                    podcastId: uuid(),
                    podcastName: show.name,
                    podcastDescription: show.description,
                    podcastImage: show.images[2].url,
                    podcastGenre: "Health and Fitness"
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
