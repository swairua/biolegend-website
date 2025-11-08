import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchContent, type SearchItem } from '@/lib/searchData';

interface SearchBoxProps {
  className?: string;
  onMobile?: boolean;
}

const SearchBox = ({ className = '', onMobile = false }: SearchBoxProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Global keyboard shortcut to focus search
  useEffect(() => {
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      // Check if user is typing in an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === '/' && !onMobile) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyPress);
    return () => window.removeEventListener('keydown', handleGlobalKeyPress);
  }, [onMobile]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : results.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            handleSelectResult(results[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, results, selectedIndex]);

  const handleSelectResult = (item: SearchItem) => {
    navigate(item.url);
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const getCategoryColor = (category: SearchItem['category']) => {
    switch (category) {
      case 'Service':
        return 'bg-biolegend-purple/10 text-biolegend-purple';
      case 'Industry':
        return 'bg-blue-100 text-blue-700';
      case 'Policy':
        return 'bg-amber-100 text-amber-700';
      case 'Partner':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative group">
        <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search services, industries, partners..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className={`${onMobile ? 'w-full' : 'w-48 sm:w-56 md:w-64'} bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder:text-white/70 rounded-lg pl-8 sm:pl-10 pr-8 sm:pr-10 py-1.5 sm:py-2 transition-all focus:outline-none focus:border-white/40 focus:bg-white/15`}
        />
        {!onMobile && !query && (
          <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <kbd className="hidden group-hover:block text-xs text-white/50 bg-white/10 px-2 py-1 rounded border border-white/20">
              /
            </kbd>
          </div>
        )}
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className={`absolute ${onMobile ? 'top-full left-0 right-0' : 'top-full left-0'} ${onMobile ? 'w-full' : 'w-48 sm:w-56 md:w-96'} mt-2 bg-white rounded-lg shadow-elegant border border-gray-200 z-50 max-h-80 sm:max-h-96 overflow-y-auto`}>
          {/* Group results by category */}
          {['Service', 'Industry', 'Partner', 'Policy'].map((category) => {
            const categoryResults = results.filter(r => r.category === category);
            if (categoryResults.length === 0) return null;

            return (
              <div key={category}>
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {category}s
                  </p>
                </div>
                {categoryResults.map((item, index) => {
                  const globalIndex = results.indexOf(item);
                  const isSelected = selectedIndex === globalIndex;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                      className={`w-full px-4 py-3 text-left transition-colors border-b last:border-b-0 ${
                        isSelected
                          ? 'bg-biolegend-purple/5'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-xl mt-0.5">{item.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-gray-900 truncate">
                              {item.title}
                            </h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${getCategoryColor(item.category)}`}>
                              {item.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {/* No Results State */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-elegant border border-gray-200 z-50 p-8 text-center">
          <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 font-medium mb-1">No results found</p>
          <p className="text-sm text-gray-500">
            Try searching for services, industries, partners, or policies
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
