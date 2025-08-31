import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { FilterState } from '../types';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'Go', 'AWS', 'Design', 'Product', 'Marketing', 'Sales'];
  const experiences = ['Entry', 'Mid', 'Senior', 'Lead'];
  const locations = ['San Francisco', 'New York', 'Remote', 'London', 'Austin', 'Seattle', 'Boston'];

  const handleSkillToggle = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter(s => s !== skill)
      : [...filters.skills, skill];
    onFiltersChange({ ...filters, skills: newSkills });
  };

  const hasActiveFilters = filters.skills.length > 0 || filters.experience || filters.location || filters.search;

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-orange-500" />
          <h2 className="text-lg font-bold text-white">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={() => onFiltersChange({
              skills: [],
              experience: '',
              location: '',
              search: '',
              sortBy: 'score'
            })}
            className="p-1 text-gray-400 hover:text-red-400 transition-colors duration-300 hover:scale-110"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-300 mb-3">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFiltersChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
            className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
          >
            <option value="score">Score (High to Low)</option>
            <option value="name">Name (A-Z)</option>
            <option value="experience">Experience Level</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-300 mb-3">Skills</label>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <button
                key={skill}
                onClick={() => handleSkillToggle(skill)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  filters.skills.includes(skill)
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-300 mb-3">Experience Level</label>
          <select
            value={filters.experience}
            onChange={(e) => onFiltersChange({ ...filters, experience: e.target.value })}
            className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
          >
            <option value="">All Levels</option>
            {experiences.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-300 mb-3">Location</label>
          <select
            value={filters.location}
            onChange={(e) => onFiltersChange({ ...filters, location: e.target.value })}
            className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}