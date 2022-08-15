import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./question";

function App() {
	return (
		<main>
			<div className="container">
				<h3>Questions And Answers About Login</h3>
				<section className="info">
					{questions.map((question) => {
						return <SingleQuestion key={question.id} {...question} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
