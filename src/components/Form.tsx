import { useState } from 'react'
import './Form.css'


const Form = () => {
	// State variables
	const [name, setName] = useState<string>('')
	const [nameIsVisited, setNameIsVisited] = useState<boolean>(false)
	const [image, setImage] = useState<string>('')
	const [imageIsVisited, setImageIsVisited] = useState<boolean>(false)
	
	// Calculated from state variables
	// Validation functions
	const [nameIsValid, nameMessage] = isValidName(name);
	const [imageIsValid, imageMessage] = isValidImage(image);

	// Styling the UI
	const nameInputCss  = !nameIsVisited  ? '' : (nameIsValid  ? 'valid' : 'invalid');
	const imageInputCss = !imageIsVisited ? '' : (imageIsValid ? 'valid' : 'invalid');
	const nameMessageCss  = (nameIsVisited  ? '' : 'invisible') + (nameIsValid  ? '' : ' error')
	const imageMessageCss = (imageIsVisited ? '' : 'invisible') + (imageIsValid ? '' : ' error')


	return (
		<div className="form">
			<h2> Användarprofil </h2>
			<section>
				<label>Namn</label>
				<input
					className={nameInputCss}
					type="text"
					placeholder="Ada Lovelace"
					value={name}
					onChange={e => setName(e.target.value)}
					onBlur={() => setNameIsVisited(true)} />
				<span className={nameMessageCss}> {nameMessage} </span>
			</section>

			<section>
				<label>Profilbild</label>
				<input
					className={imageInputCss}
					type="text"
					placeholder="länk/bild.jpg"
					value={image}
					onChange={e => setImage(e.target.value)}
					onBlur={() => setImageIsVisited(true)} />
				<span className={imageMessageCss}> {imageMessage} </span>
			</section>

			<section>
				<label>Födelseår</label>
				<input className="error invalid" type="text" placeholder="Årtal med fyra siffror" />
				<span className="error"> ❌ Felmeddelande </span>
			</section>
			<section>
				<button>
					Spara ändringar
				</button>
			</section>
		</div>
	)
}


function isValidName(name: string): [boolean, string] {
	if( name.length >= 2 ) {
		return [true, '✔️']
	} else {
		return [false, '❌ Skriv ditt namn, minst två bokstäver.']
	}
}

function isValidImage(url: string): [boolean, string] {
	// Tillåtna format är .jpg och .png
	// Exempel: picture.jpg, PENGUIN.PNG
	let lower: string = url.toLowerCase();
	if( lower.endsWith('.jpg') || lower.endsWith('.png') ) {
		return [true, '✔️']
	} else {
		return [false, '❌ Skriv en länk till en jpg- eller png-bild.']
	}
}


export default Form;
