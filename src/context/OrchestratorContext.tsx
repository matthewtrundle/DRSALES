'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface ContentItem {
  id: string;
  title: string;
  type: 'service' | 'article' | 'video';
  href: string;
}

interface OrchestratorState {
  pagesVisited: string[];
  timeOnPages: Record<string, number>;
  inferredInterests: string[];
  recommendedContent: ContentItem[];
  visitCount: number;
  lastVisit: string | null;
  currentPage: string;
}

type OrchestratorAction =
  | { type: 'VISIT_PAGE'; payload: string }
  | { type: 'UPDATE_TIME'; payload: { page: string; time: number } }
  | { type: 'ADD_INTEREST'; payload: string }
  | { type: 'SET_RECOMMENDATIONS'; payload: ContentItem[] }
  | { type: 'LOAD_STATE'; payload: OrchestratorState };

const initialState: OrchestratorState = {
  pagesVisited: [],
  timeOnPages: {},
  inferredInterests: [],
  recommendedContent: [],
  visitCount: 0,
  lastVisit: null,
  currentPage: '/',
};

const interestMapping: Record<string, string[]> = {
  '/services/corneal-transplant': ['DMEK', 'Corneal Transplant', 'Fuchs Dystrophy'],
  '/services/vision-correction': ['LASIK', 'PRK', 'Vision Correction'],
  '/services/cataract': ['Cataract Surgery', 'IOL', 'Premium Lenses'],
  '/services/dry-eye': ['Dry Eye', 'Meibomian Gland', 'Tear Film'],
  '/innovation': ['Research', 'Innovation', 'Device Development'],
  '/about': ['Background', 'Education', 'Experience'],
};

const contentRecommendations: ContentItem[] = [
  { id: '1', title: 'DMEK Surgery Explained', type: 'service', href: '/services/corneal-transplant' },
  { id: '2', title: 'LASIK Candidacy', type: 'service', href: '/services/vision-correction' },
  { id: '3', title: 'Understanding Fuchs\' Dystrophy', type: 'article', href: '/education' },
  { id: '4', title: 'Dr. Sales\' Surgical Innovations', type: 'article', href: '/innovation' },
  { id: '5', title: 'Cataract Surgery Options', type: 'service', href: '/services/cataract' },
];

function orchestratorReducer(state: OrchestratorState, action: OrchestratorAction): OrchestratorState {
  switch (action.type) {
    case 'VISIT_PAGE': {
      const newPagesVisited = state.pagesVisited.includes(action.payload)
        ? state.pagesVisited
        : [...state.pagesVisited, action.payload];

      // Infer interests based on page visited
      const pageInterests = interestMapping[action.payload] || [];
      const combinedInterests = [...state.inferredInterests, ...pageInterests];
      const newInterests = Array.from(new Set(combinedInterests));

      return {
        ...state,
        pagesVisited: newPagesVisited,
        currentPage: action.payload,
        visitCount: state.visitCount + 1,
        lastVisit: new Date().toISOString(),
        inferredInterests: newInterests,
      };
    }
    case 'UPDATE_TIME':
      return {
        ...state,
        timeOnPages: {
          ...state.timeOnPages,
          [action.payload.page]: (state.timeOnPages[action.payload.page] || 0) + action.payload.time,
        },
      };
    case 'ADD_INTEREST':
      return {
        ...state,
        inferredInterests: state.inferredInterests.includes(action.payload)
          ? state.inferredInterests
          : [...state.inferredInterests, action.payload],
      };
    case 'SET_RECOMMENDATIONS':
      return {
        ...state,
        recommendedContent: action.payload,
      };
    case 'LOAD_STATE':
      return action.payload;
    default:
      return state;
  }
}

interface OrchestratorContextType {
  state: OrchestratorState;
  visitPage: (page: string) => void;
  updateTimeOnPage: (page: string, time: number) => void;
  addInterest: (interest: string) => void;
  getPersonalizedCTA: () => string;
  getRecommendedContent: () => ContentItem[];
}

const OrchestratorContext = createContext<OrchestratorContextType | undefined>(undefined);

export function OrchestratorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(orchestratorReducer, initialState);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('orchestratorState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        dispatch({ type: 'LOAD_STATE', payload: parsed });
      } catch (e) {
        console.error('Error loading orchestrator state:', e);
      }
    }
  }, []);

  // Save state to localStorage on change
  useEffect(() => {
    localStorage.setItem('orchestratorState', JSON.stringify(state));
  }, [state]);

  // Update recommendations based on interests
  useEffect(() => {
    const relevantContent = contentRecommendations.filter(content => {
      // Prioritize content related to user interests
      const contentKeywords = content.title.toLowerCase();
      return state.inferredInterests.some(interest =>
        contentKeywords.includes(interest.toLowerCase())
      );
    });

    // If no matches, show general recommendations
    const recommendations = relevantContent.length > 0
      ? relevantContent
      : contentRecommendations.slice(0, 3);

    dispatch({ type: 'SET_RECOMMENDATIONS', payload: recommendations });
  }, [state.inferredInterests]);

  const visitPage = (page: string) => {
    dispatch({ type: 'VISIT_PAGE', payload: page });
  };

  const updateTimeOnPage = (page: string, time: number) => {
    dispatch({ type: 'UPDATE_TIME', payload: { page, time } });
  };

  const addInterest = (interest: string) => {
    dispatch({ type: 'ADD_INTEREST', payload: interest });
  };

  const getPersonalizedCTA = (): string => {
    if (state.inferredInterests.includes('DMEK') || state.inferredInterests.includes('Corneal Transplant')) {
      return 'Discuss Corneal Options';
    }
    if (state.inferredInterests.includes('LASIK') || state.inferredInterests.includes('Vision Correction')) {
      return 'Explore Vision Correction';
    }
    if (state.visitCount > 3) {
      return 'Schedule Your Consultation';
    }
    return 'Request Consultation';
  };

  const getRecommendedContent = (): ContentItem[] => {
    return state.recommendedContent;
  };

  return (
    <OrchestratorContext.Provider
      value={{
        state,
        visitPage,
        updateTimeOnPage,
        addInterest,
        getPersonalizedCTA,
        getRecommendedContent,
      }}
    >
      {children}
    </OrchestratorContext.Provider>
  );
}

export function useOrchestrator() {
  const context = useContext(OrchestratorContext);
  if (context === undefined) {
    throw new Error('useOrchestrator must be used within an OrchestratorProvider');
  }
  return context;
}
