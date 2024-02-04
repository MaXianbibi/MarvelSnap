import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

// Définissez une interface pour la valeur de votre contexte
interface GameContextType {
    gameState: boolean;
    setGamestate: React.Dispatch<React.SetStateAction<boolean>>;
}

// Créez le contexte avec un type spécifié et une valeur par défaut de undefined
const GameContext = createContext<GameContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGameContext must be used within a GameContextProvider');
    }
    return context;
};

// Composant fournisseur
export const GameContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [gameState, setGamestate] = useState(false);

    const value = {
        gameState,
        setGamestate,
    };
    
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
