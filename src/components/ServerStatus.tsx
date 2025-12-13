'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

interface ServiceStatus {
  status: 'connected' | 'disconnected';
  message?: string;
}

interface HealthResponse {
  success: boolean;
  status: string;
  message: string;
  services?: {
    mongodb: ServiceStatus;
    googleSheets: ServiceStatus;
    telegram: ServiceStatus;
    email: ServiceStatus;
  };
}

export default function ServerStatus() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkServerHealth();
    // Check every 30 seconds
    const interval = setInterval(checkServerHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkServerHealth = async () => {
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://quick-server-brown.vercel.app';
      const response = await fetch(`${apiBaseUrl}/api/health/detailed`, {
        cache: 'no-store',
      });
      
      if (!response.ok) {
        throw new Error('Server not responding');
      }
      
      const data = await response.json();
      setHealth(data);
      setError(null);
    } catch (err) {
      setError('Unable to connect to server');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Checking server status...</span>
      </div>
    );
  }

  if (error || !health) {
    return (
      <div className="flex items-center gap-2 text-sm text-red-600">
        <XCircle className="w-4 h-4" />
        <span>{error || 'Server offline'}</span>
      </div>
    );
  }

  const allServicesUp = health.status === 'all_systems_operational';

  return (
    <div className="flex items-center gap-2 text-sm">
      {allServicesUp ? (
        <>
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-green-600 font-medium">All systems operational</span>
        </>
      ) : (
        <>
          <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-yellow-600 font-medium">Partial service</span>
        </>
      )}
    </div>
  );
}

// Compact version for footer
export function ServerStatusBadge() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://quick-server-brown.vercel.app';
        const response = await fetch(`${apiBaseUrl}/api/health/ping`, {
          cache: 'no-store',
        });
        setIsOnline(response.ok);
      } catch {
        setIsOnline(false);
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isOnline === null) return null;

  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${
      isOnline 
        ? 'bg-green-100 text-green-700' 
        : 'bg-red-100 text-red-700'
    }`}>
      <div className={`w-2 h-2 rounded-full ${
        isOnline ? 'bg-green-500' : 'bg-red-500'
      }`} />
      {isOnline ? 'Servers Online' : 'Servers Offline'}
    </div>
  );
}
