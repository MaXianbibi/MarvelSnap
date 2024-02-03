// MonContexte.js
import React, { createContext, useContext, useState } from 'react';

const MonContexte = createContext({});

export const useMonContexte = () => useContext(MonContexte);



export const MonContexteFournisseur = ({ children }) => {
	const [information, setInformation] = useState({
		name: 'foo',
		description: 'foo',
		image: 'foo',
		power: 0,
		energy: 0,
		rarity: 0,
	});

	const valeur = { information, setInformation };
	return (
		<MonContexte.Provider value={valeur}>
			{children}
		</MonContexte.Provider>
	);
};
