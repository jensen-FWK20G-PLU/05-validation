// Datumfunktioner - i egen fil

function getCurrentYear(): number {
	let yearString = (new Date().toISOString()).substring(0,4)
	return Number(yearString)
	// Alternativa metoder att omvandla string till number: parseInt, Number(), +
}

export { getCurrentYear }
