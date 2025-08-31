import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CandidateCard } from './components/CandidateCard';
import { FilterPanel } from './components/FilterPanel';
import { DiversityDashboard } from './components/DiversityDashboard';
import { SelectedTeam } from './components/SelectedTeam';
import { mockCandidates } from './data/mockCandidates';
import { Candidate, FilterState } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Search, Users, TrendingUp } from 'lucide-react';

function App() {
  const [candidates] = useState<Candidate[]>(mockCandidates);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    experience: '',
    location: '',
    search: '',
    sortBy: 'score'
  });
  const [view, setView] = useState<'candidates' | 'team'>('candidates');

  const filteredCandidates = useMemo(() => {
    let filtered = candidates.filter(candidate => {
      if (filters.search && !candidate.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !candidate.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()))) {
        return false;
      }
      
      if (filters.skills.length > 0 && !filters.skills.some(skill => candidate.skills.includes(skill))) {
        return false;
      }
      
      if (filters.experience && candidate.experience !== filters.experience) {
        return false;
      }
      
      if (filters.location && candidate.location !== filters.location) {
        return false;
      }
      
      return true;
    });

    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'score':
          return b.score - a.score;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'experience':
          const expOrder = { 'Entry': 1, 'Mid': 2, 'Senior': 3, 'Lead': 4 };
          return (expOrder[b.experience as keyof typeof expOrder] || 0) - (expOrder[a.experience as keyof typeof expOrder] || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [candidates, filters]);

  const handleCandidateSelect = (candidateId: string) => {
    setSelectedCandidates(prev => {
      if (prev.includes(candidateId)) {
        return prev.filter(id => id !== candidateId);
      } else if (prev.length < 5) {
        return [...prev, candidateId];
      }
      return prev;
    });
  };

  const selectedCandidateData = candidates.filter(c => selectedCandidates.includes(c.id));

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Curved Earth-like Background Element */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-orange-500/20 via-orange-400/10 to-transparent rounded-t-[100%] transform scale-150 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-600/30 via-orange-500/15 to-transparent rounded-t-[100%] transform scale-125 -translate-y-16"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-orange-700/15 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-300/25 to-orange-500/25 rounded-full blur-xl animate-float-slow"></div>

        <Header />
        
        <div className="relative z-10">
          {view === 'candidates' ? (
            <>
              {/* Hero Section */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="animate-fade-in-up">
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Who should we hire today?
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Discover exceptional talent with AI-powered insights and build diverse, high-performing teams.
                  </p>
                  
                  {/* Search Bar */}
                  <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative group">
                      <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                      <input
                        type="text"
                        placeholder="Search candidates by name or skills..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        className="w-full pl-16 pr-6 py-6 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-gray-800/70"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span>{filteredCandidates.length} candidates available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{selectedCandidates.length}/5 selected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1 space-y-6">
                    <FilterPanel filters={filters} onFiltersChange={setFilters} />
                    <DiversityDashboard candidates={selectedCandidateData} />
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredCandidates.map((candidate, index) => (
                        <div
                          key={candidate.id}
                          className="animate-fade-in-up"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <CandidateCard
                            candidate={candidate}
                            isSelected={selectedCandidates.includes(candidate.id)}
                            onSelect={handleCandidateSelect}
                            disabled={!selectedCandidates.includes(candidate.id) && selectedCandidates.length >= 5}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <SelectedTeam 
                candidates={selectedCandidateData} 
                onRemoveCandidate={handleCandidateSelect}
              />
            </div>
          )}
        </div>

        {/* View Toggle - Fixed Position */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 p-2 rounded-2xl shadow-2xl">
            <div className="flex">
              <button
                onClick={() => setView('candidates')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  view === 'candidates'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Users className="h-4 w-4" />
                Discover Talent
              </button>
              <button
                onClick={() => setView('team')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  view === 'team'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                Your Team ({selectedCandidates.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;