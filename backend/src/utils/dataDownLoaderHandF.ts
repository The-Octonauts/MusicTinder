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
<<<<<<< HEAD
<<<<<<< HEAD
                {headers: {Authorization: "Bearer " + "BQA2vQ31r2_QeESM3f8oXTvX9xEu3YPQs9Vr8bDwxuxJZUw_ffta8j70a3bElxC3n4QwzJuY2TpLzf8tRm-rLbhbj5wqOG5YlBraXOp4lJ3P-rWt7-0JGVS76ImhCsyzaQI4kzHghpRG3qduG01v4mHOHMmIcQ"}})
=======
                {headers: {Authorization: "Bearer " + "BQBf8DPfMESFuqCYMXkWy69aJflMJVLXfUK3b__FjQpQmz7RD_WmBlpi8f9m3crmgVH6ae4DolTFnIV6wbqbZNyO2-eNJHHni-oNi2zWeBU-vQK7E41Jl65Ru9iNL0Hp27wNojtAs755ntkDeN83TTFvyzVsQ0YyuZbUrumCwDssevv_IjbPFu7FKyxzQl0Yc3yjzm_EZPdwFtFoKkZ9pHc2i546DmfCQFDYOQ"}})
>>>>>>> bc650d20f03eb8768cc407cde5a0e1c8e5feb7a1
=======
                {headers: {Authorization: "Bearer " + "BQAC3M_R9q07aSeVU7L0R2Xj2ugTLkZoo-rzm6ghF6gkmwiEs6xrkR6hFb4rdR1Zr0hnoxv69Z6L0MuQhWgI1zgDhkvaNsITVThDDNMXb8yuRyjeiHVW_qhe2QAFKOU7rgGQ3YkJv0_n6roBTS45qctepcz92R5xI8YZUu4QUugHSAtcOCtbGifn8tU7DnJYGnhtgnkaUWZWOwc5PiNokkaOo30xSw"}})
>>>>>>> 67ccff3015910312530f691c06746f5f2764a1e7
            /*console.log(data.shows[5].name)*/

            // @ts-ignore
            const shows = data.shows.map(show => {
                const createShows: Show = {
                    podcastId: uuid(),
                    podcastName: show.name,
                    podcastDescription: show.description,
                    podcastImage: show.images[1],
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
