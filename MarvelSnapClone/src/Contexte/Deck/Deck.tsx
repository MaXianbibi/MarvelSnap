import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Card {
    name: string;
    description: string;
    image: string;
    power: number;
    energy: number;
    rarity: number;
    id: number;
}

interface DeckContextValue {
    deck: Card[];
    addCard: (card: Card) => void;
    isFull: () => boolean;
    removeCard: (id: number) => void;
}
// setDeck: React.Dispatch<React.SetStateAction<Card[]>>;

const DeckContext = createContext<DeckContextValue | undefined>(undefined);

export const useDeckContext = () => {
    const context = useContext(DeckContext);
    if (context === undefined) {
        throw new Error('useDeckContext must be used within a DeckContextProvider');
    }
    return context;
};

export const DeckContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [deck, setDeck] = useState<Card[]>([]);

    function addCard(card: Card) {
        if (deck.length >= 16) {
            console.log('Deck is full');
            return;
        }
        const newCard = { ...card, id: uuidv4() as unknown as number }; // Fix: Convert the expression to 'unknown' first
        setDeck([...deck, newCard]);
    }

    function isFull() {
        return deck.length >= 15;
    }


    function removeCard(id: number) {
        const newDeck = deck.filter((card) => card.id !== id);
        setDeck(newDeck);
    }

    const value: DeckContextValue = {
        deck,
        addCard,
        isFull,
        removeCard,
    };

    return (
        <DeckContext.Provider value={value}>
            {children}
        </DeckContext.Provider>
    );
};
