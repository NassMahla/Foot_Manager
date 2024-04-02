let formation = [
	{
		nom: "Pauleta",
		poste: "Attaquant"
	},
	{
		nom: "Alonzo",
		poste: "Goal"
	},
	{
		nom: "M'Bami",
		poste: "Def"
	}
	...
]

function countPoste(post, formation) {
	let result = 0
	for (const joueur of formation) {
		if (joueur.poste == post) {
			result ++
		}
	}
	return result
}

function match(formationJoueur, formationAdversaire) {
	let nbAtqJoueur = countPoste("Attaquant", formationJoueur)
	let nbAtqAdversaire = countPoste("Attaquant", formationAdversaire)

	let scoreJoueur = 0
	let scoreAdversaire = 0

	let tiragesJoueur = 3 + (nbAtqJoueur >= 3 ? 1 : 0)
	let tiragesAdversaire = 3 + (nbAtqJoueur >= 3 ? 1 : 0)

	for (const i = 0 ; i < tiragesJoueur ; i++) {
		let score = Math.random... // 0 : 1
		scoreJoueur += score
	}

	for (const i = 0 ; i < tiragesAdversaire ; i++) {
		let score = Math.random... // 0 : 1
		scoreAdversaire += score
	}

	if (scoreJouer > scoreAdversaire) {
		return calculPoint(scoreJoueur - scoreAdversaire)
	} else if (scoreJoueur < scoreAdversaire) {
		return 0
	} else {
		return 20
	}
}

function calculPoint(ecart) {
	if (ecart > 3) {
		return 150
	} else if (ecart > 2) {
		return 70
	} else {
		return 50
	}
}
