import { useState } from 'react'
import './Form.css'


const Form = () => {
	const [name, setName] = useState<string>('')
	const [nameIsVisited, setNameIsVisited] = useState<boolean>(false)
	
	const [nameIsValid, nameMessage] = isValidName(name);

	const nameInputCss = !nameIsVisited ? '' : (nameIsValid ? 'valid' : 'invalid');
	const nameMessageCss = (nameIsVisited ? '' : 'invisible') + (nameIsValid ? '' : ' error')


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
				<input className="valid" type="text" placeholder="länk/bild.jpg" />
				<span className=""> ✔️ </span>
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


export default Form;
