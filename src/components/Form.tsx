import './Form.css'

const Form = () => {

	return (
		<div className="form">
			<h2> Användarprofil </h2>
			<section>
				<label>Namn</label>
				<input className="" type="text" placeholder="Ada Lovelace" />
				<span className="error invisible"> Felmeddelande </span>
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

export default Form;
