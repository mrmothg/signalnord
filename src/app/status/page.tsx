'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SystemStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  description: string;
  uptime: number;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  startTime: string;
  updateTime: string;
  description: string;
  updates: {
    time: string;
    message: string;
  }[];
}

interface MaintenanceWindow {
  id: string;
  title: string;
  scheduledFor: string;
  duration: string;
  affectedServices: string[];
  description: string;
}

export default function StatusPage() {
  const [systems, setSystems] = useState<SystemStatus[]>([
    { name: 'Leide linjer - Oslo', status: 'operational', description: 'Alle systemer operative', uptime: 99.98 },
    { name: 'Leide linjer - Bergen', status: 'operational', description: 'Alle systemer operative', uptime: 99.95 },
    { name: 'Leide linjer - Trondheim', status: 'operational', description: 'Alle systemer operative', uptime: 99.97 },
    { name: 'VPN Gateway - Primær', status: 'operational', description: 'Normal ytelse', uptime: 99.99 },
    { name: 'VPN Gateway - Sekundær', status: 'operational', description: 'Normal ytelse', uptime: 99.99 },
    { name: 'Overvåkingssystem', status: 'operational', description: 'Alle sensorer aktive', uptime: 100 },
    { name: 'Kundeportal', status: 'operational', description: 'Tilgjengelig', uptime: 99.92 },
    { name: 'API-tjenester', status: 'operational', description: 'Normal responstid', uptime: 99.95 },
  ]);

  const [incidents, setIncidents] = useState<Incident[]>([]);
  
  const [maintenance, setMaintenance] = useState<MaintenanceWindow[]>([
    {
      id: '1',
      title: 'Planlagt vedlikehold - VPN Gateway',
      scheduledFor: '2024-03-15T02:00:00',
      duration: '2 timer',
      affectedServices: ['VPN Gateway - Sekundær'],
      description: 'Oppdatering av firmware på sekundær VPN gateway. Primær gateway vil håndtere all trafikk under vedlikeholdet.',
    },
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600';
      case 'degraded':
        return 'text-yellow-600';
      case 'outage':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const allOperational = systems.every(s => s.status === 'operational') && incidents.length === 0;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Systemstatus
            </h1>
            <p className="text-lg text-muted-foreground">
              Sanntidsoversikt over alle våre tjenester og systemer
            </p>
          </div>
        </div>
      </section>

      {/* Overall Status Banner */}
      <section className={`${allOperational ? 'bg-green-50' : 'bg-yellow-50'} border-b`}>
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {allOperational ? (
                <>
                  <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">
                      Alle systemer operative
                    </p>
                    <p className="text-sm text-green-700">
                      Ingen kjente problemer
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="mr-3 h-6 w-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-yellow-900">
                      Pågående hendelser
                    </p>
                    <p className="text-sm text-yellow-700">
                      Se detaljer nedenfor
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Sist oppdatert</p>
              <p className="text-sm font-medium">
                {lastUpdated.toLocaleString('nb-NO')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Incidents */}
      {incidents.length > 0 && (
        <section className="container section-spacing">
          <h2 className="mb-6 text-2xl font-bold">Aktive hendelser</h2>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <Card key={incident.id} className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <AlertCircle className="mr-2 h-5 w-5 text-yellow-600" />
                        {incident.title}
                      </CardTitle>
                      <CardDescription>
                        Status: {incident.status} | Alvorlighetsgrad: {incident.severity}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Startet: {new Date(incident.startTime).toLocaleString('nb-NO')}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{incident.description}</p>
                  {incident.updates.length > 0 && (
                    <div className="space-y-2 border-t pt-4">
                      <p className="font-medium">Oppdateringer:</p>
                      {incident.updates.map((update, index) => (
                        <div key={index} className="text-sm">
                          <span className="font-medium">{update.time}:</span> {update.message}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* System Status Grid */}
      <section className="container section-spacing">
        <h2 className="mb-6 text-2xl font-bold">Systemstatus</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {systems.map((system) => (
            <Card key={system.name}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center">
                  {getStatusIcon(system.status)}
                  <div className="ml-3">
                    <p className="font-medium">{system.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {system.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${getStatusColor(system.status)}`}>
                    {system.status === 'operational' ? 'Operativ' : 
                     system.status === 'degraded' ? 'Degradert' : 'Nede'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {system.uptime}% oppetid
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Scheduled Maintenance */}
      {maintenance.length > 0 && (
        <section className="bg-muted/50">
          <div className="container section-spacing">
            <h2 className="mb-6 text-2xl font-bold">Planlagt vedlikehold</h2>
            <div className="space-y-4">
              {maintenance.map((window) => (
                <Card key={window.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-blue-600" />
                          {window.title}
                        </CardTitle>
                        <CardDescription>
                          {new Date(window.scheduledFor).toLocaleString('nb-NO')} | 
                          Varighet: {window.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">{window.description}</p>
                    <div>
                      <p className="text-sm font-medium">Berørte tjenester:</p>
                      <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                        {window.affectedServices.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Historical Uptime */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Historisk oppetid (siste 90 dager)
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Leide linjer</span>
                  <span className="font-semibold text-green-600">99.97%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>VPN-tjenester</span>
                  <span className="font-semibold text-green-600">99.99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Overvåkingssystem</span>
                  <span className="font-semibold text-green-600">100.00%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kundeportal</span>
                  <span className="font-semibold text-green-600">99.92%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Få varslinger om systemstatus
          </h2>
          <p className="mb-6 text-primary-foreground/90">
            Abonner på statusoppdateringer via e-post eller SMS
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="din@epost.no"
              className="h-10 w-64 rounded-md border-0 bg-white/10 px-4 text-white placeholder:text-white/60"
            />
            <button className="rounded-md bg-secondary px-6 py-2 font-medium text-secondary-foreground hover:bg-secondary/90">
              Abonner
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
