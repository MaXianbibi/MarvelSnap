import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

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
    addCard: (card: Card) => void;
    isFull: () => boolean;
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

        setDeck([...deck, card]);
    }

    function isFull() {
        return deck.length >= 15;
    }

    const value: DeckContextValue = {
        deck,
        addCard,
        isFull
    };

    return (
        <DeckContext.Provider value={value}>
            {children}
        </DeckContext.Provider>
    );
};
