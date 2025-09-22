import React, { useState } from 'react';
import { Camera, Sparkles, Users, TrendingUp } from 'lucide-react';
import PortalButton from './components/PortalButton';
import PortalCard from './components/PortalCard';
import Navigation from './components/Navigation';
import CosmicLoader from './components/CosmicLoader';
import FloatingParticles from './components/FloatingParticles';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import logoPortales from './assets/LOGO.png';
import './App.css';
import React from 'react';
import PortalManager from './components/PortalManager'; // Importe o componente

function App() {
  return (
    <div className="App">
      {/* Remova ou comente o conteúdo existente da página inicial, se houver */}
      <PortalManager /> {/* Adicione o PortalManager aqui */}
    </div>
  );
}

export default App;

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const mockPortals = [
    {
      id: 1,
      title: "Mona Lisa Digital",
      artist: "Leonardo da Vinci",
      image: "/api/placeholder/300/200",
      views: 1250,
      likes: 89,
      status: "featured"
    },
    {
      id: 2,
      title: "Starry Night Portal",
      artist: "Vincent van Gogh",
      image: "/api/placeholder/300/200",
      views: 987,
      likes: 156,
      status: "active"
    },
    {
      id: 3,
      title: "The Scream AR",
      artist: "Edvard Munch",
      image: "/api/placeholder/300/200",
      views: 743,
      likes: 92,
      status: "active"
    }
  ];

  const handleCreatePortal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Funcionalidade de criação em desenvolvimento!');
    }, 2000);
  };

  const handleExplorePortals = () => {
    alert('Scanner de RA em desenvolvimento!');
  };

  const renderHome = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-8">
        <img 
          src={logoPortales} 
          alt="PORTALES Logo" 
          className="w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold tech-mystic-text mb-2">
          PORTALES
        </h1>
        <p className="text-muted-foreground text-lg">
          Transforme sua arte em portais digitais
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 px-4">
        <PortalButton 
          variant="default" 
          className="h-20 flex-col"
          onClick={handleCreatePortal}
          disabled={isLoading}
        >
          {isLoading ? (
            <CosmicLoader size="sm" />
          ) : (
            <>
              <Camera className="mb-2" size={24} />
              <span>Criar Portal</span>
            </>
          )}
        </PortalButton>
        
        <PortalButton 
          variant="outline" 
          className="h-20 flex-col"
          onClick={handleExplorePortals}
        >
          <Sparkles className="mb-2" size={24} />
          <span>Explorar</span>
        </PortalButton>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-4">
        <Card className="glassmorphism text-center">
          <CardContent className="p-4">
            <Users className="mx-auto mb-2 text-primary" size={24} />
            <p className="text-2xl font-bold">1.2K</p>
            <p className="text-xs text-muted-foreground">Artistas</p>
          </CardContent>
        </Card>
        
        <Card className="glassmorphism text-center">
          <CardContent className="p-4">
            <Sparkles className="mx-auto mb-2 text-accent" size={24} />
            <p className="text-2xl font-bold">5.8K</p>
            <p className="text-xs text-muted-foreground">Portais</p>
          </CardContent>
        </Card>
        
        <Card className="glassmorphism text-center">
          <CardContent className="p-4">
            <TrendingUp className="mx-auto mb-2 text-green-500" size={24} />
            <p className="text-2xl font-bold">98%</p>
            <p className="text-xs text-muted-foreground">Satisfação</p>
          </CardContent>
        </Card>
      </div>

      {/* Featured Portals */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Portais em Destaque</h2>
          <Badge variant="secondary">Novo</Badge>
        </div>
        
        <div className="space-y-4">
          {mockPortals.map((portal) => (
            <PortalCard
              key={portal.id}
              title={portal.title}
              artist={portal.artist}
              image={portal.image}
              views={portal.views}
              likes={portal.likes}
              status={portal.status}
              onClick={() => alert(`Abrindo portal: ${portal.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderCreate = () => (
    <div className="px-4 py-8 text-center">
      <Camera size={64} className="mx-auto mb-4 text-primary" />
      <h2 className="text-2xl font-bold mb-4">Modo Criador</h2>
      <p className="text-muted-foreground mb-6">
        Transforme suas obras de arte em portais digitais interativos
      </p>
      <PortalButton onClick={handleCreatePortal} disabled={isLoading}>
        {isLoading ? <CosmicLoader size="sm" /> : 'Comece a Criar'}
      </PortalButton>
    </div>
  );

  const renderExplore = () => (
    <div className="px-4 py-8 text-center">
      <Sparkles size={64} className="mx-auto mb-4 text-accent" />
      <h2 className="text-2xl font-bold mb-4">Modo Explorador</h2>
      <p className="text-muted-foreground mb-6">
        Use a câmera para descobrir portais ocultos em obras de arte
      </p>
      <PortalButton variant="outline" onClick={handleExplorePortals}>
        Explorar Portais
      </PortalButton>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHome();
      case 'create':
        return renderCreate();
      case 'explore':
        return renderExplore();
      case 'marketplace':
        return (
          <div className="px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
            <p className="text-muted-foreground">Em breve...</p>
          </div>
        );
      case 'profile':
        return (
          <div className="px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Perfil</h2>
            <p className="text-muted-foreground">Em breve...</p>
          </div>
        );
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen cosmic-bg relative">
      <FloatingParticles count={30} />
      
      <main className="pb-20">
        {renderContent()}
      </main>
      
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}

export default App;

