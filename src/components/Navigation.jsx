import React from 'react';
import { Home, Plus, Search, ShoppingBag, User } from 'lucide-react';
import { cn } from '../lib/utils';
import '../App.css';

const Navigation = ({ activeTab = 'home', onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'create', icon: Plus, label: 'Criar' },
    { id: 'explore', icon: Search, label: 'Explorar' },
    { id: 'marketplace', icon: ShoppingBag, label: 'Marketplace' },
    { id: 'profile', icon: User, label: 'Perfil' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange?.(id)}
            className={cn(
              'navigation-tab flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300',
              activeTab === id 
                ? 'text-primary active' 
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Icon size={20} className="mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

