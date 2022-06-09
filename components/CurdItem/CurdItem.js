import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import FilpMove from "react-flip-move";
function CurdItem({ results }) {
	return (
		<FilpMove
			className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center
    "
		>
			{results.map((result) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</FilpMove>
	);
}

export default CurdItem;
