import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Eye, Heart, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';
import '../App.css';

const PortalCard = ({ 
  title, 
  image, 
  artist, 
  views = 0, 
  likes = 0, 
  status = 'active',
  className,
  onClick,
  ...props 
}) => {
  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-500',
    featured: 'bg-accent'
  };

  return (
    <Card 
      className={cn(
        'portal-card glassmorphism cursor-pointer group',
        className
      )}
      onClick={onClick}
      {...props}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image || '/api/placeholder/300/200'} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge 
            className={cn(
              'absolute top-2 right-2',
              statusColors[status]
            )}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 tech-mystic-text">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">
          por {artist}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Eye size={16} />
            <span>{views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart size={16} />
            <span>{likes}</span>
          </div>
        </div>
        <Share2 
          size={16} 
          className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
        />
      </CardFooter>
    </Card>
  );
};

export default PortalCard;

