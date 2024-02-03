// Purpose: This file contains the context for the deck of cards.
import React, { createContext, useContext, useState } from 'react';

interface Card {
    name: string;
    description: string;
    image: string;
    power: number;
    energy: number;
    rarity: number;
}

interface DeckContextValue {
    deck: Card[];
    setDeck: React.Dispatch<React.SetStateAction<Card[]>>;
}

const DeckContext = createContext<DeckContextValue | undefined>(undefined);

export const useDeckContext = () => useContext(DeckContext);

export const DeckContextProvider: React.FC = () => {
    const [deck, setDeck] = useState<Card[]>([]);

    const value: DeckContextValue = {
        deck,
        setDeck,
    };

    return (
        <DeckContext.Provider value={value}>
        </DeckContext.Provider>
    );
};
