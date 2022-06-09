import Head from "next/head";
import Image from "next/image";
import CurdItem from "../components/CurdItem/CurdItem";
import Header from "../components/Header.js/Header";
import Navbar from "../components/Nav.js/Navbar";
import requests from "../utils/requests";

export default function Home({results}) {
	// console.log(results);
	return (
		<div className="">
			<Head>
				<title>Hulo clone </title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* header */}
				<Header />
				{/* nav */}

				<Navbar />

				{/* results */}
				<CurdItem results={results} />
			</main>
		</div>
	);
}
// get api data
export async function getServerSideProps(context) {
	const genre = context.query.genre;
	//  fetch data
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then((res) => res.json());
	return {
		props: {
			results: request.results,
		},
	};
}
