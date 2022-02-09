import { useState } from 'react'
import './Form.css'
import { getCurrentYear } from '../utils/date'


const Form = () => {
	// State variables
	const [name, setName] = useState<string>('')
	const [image, setImage] = useState<string>('')
	const [year, setYear] = useState<number>(0)
	const [nameIsVisited, setNameIsVisited] = useState<boolean>(false)
	const [imageIsVisited, setImageIsVisited] = useState<boolean>(false)
	const [yearIsVisited, setYearIsVisited] = useState<boolean>(false)
	
	// Calculated from state variables
	// Validation functions
	const [nameIsValid, nameMessage] = isValidName(name);
	const [imageIsValid, imageMessage] = isValidImage(image);
	const [yearIsValid, yearMessage] = isValidYear(year);
	const formIsValid = nameIsValid && imageIsValid && yearIsValid

	// Styling the UI
	const nameInputCss  = !nameIsVisited  ? '' : (nameIsValid  ? 'valid' : 'invalid');
	const imageInputCss = !imageIsVisited ? '' : (imageIsValid ? 'valid' : 'invalid');
	const yearInputCss = !yearIsVisited  ? '' : (yearIsValid  ? 'valid' : 'invalid');
	const nameMessageCss  = (nameIsVisited  ? '' : 'invisible') + (nameIsValid  ? '' : ' error')
	const imageMessageCss = (imageIsVisited ? '' : 'invisible') + (imageIsValid ? '' : ' error')
	const yearMessageCss = (yearIsVisited ? '' : 'invisible') + (yearIsValid ? '' : ' error')


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
				<input
					className={yearInputCss}
					type="text"
					placeholder="Årtal med fyra siffror"
					value={"" + year}
					onChange={e => setYear(Number(e.target.value))}
					onBlur={() => setYearIsVisited(true)}
					/>
				<span className={yearMessageCss}> {yearMessage} </span>
			</section>
			<section>
				<button disabled={!formIsValid}>
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

function isValidYear(year: number): [boolean, string] {
	// 18-årsgräns för att använda appen
	const currentYear = getCurrentYear()
	if( year > currentYear ) {
		return [false, '❌ Skriv in det året du föddes, med fyra siffror.']
	} else if( currentYear - year > 150 ) {
		return [false, '❌ Skriv in det året du föddes, med fyra siffror.']
	} else if( currentYear - year >= 18 ) {
		return [true, '✔️']
	} else {
		return [false, '❌ Du måste vara 18 år för att använda appen.']
	}
}


export default Form;
