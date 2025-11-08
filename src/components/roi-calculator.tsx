'use client';

import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatPrice } from '@/lib/utils';

export function ROICalculator() {
  const [inputs, setInputs] = useState({
    employees: 50,
    locations: 2,
    downtimeHours: 4,
    hourlyRevenue: 10000,
  });

  const [results, setResults] = useState({
    currentCost: 0,
    withMSP: 0,
    savings: 0,
    roi: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newInputs = {
      ...inputs,
      [name]: parseFloat(value) || 0,
    };
    setInputs(newInputs);
    calculateROI(newInputs);
  };

  const calculateROI = (data: typeof inputs) => {
    // Formel for kostnad ved nedetid per måned
    // Nedetid (timer/mnd) * Timeinntekt * Produktivitetstap (estimert 75%)
    const monthlyDowntimeCost = data.downtimeHours * data.hourlyRevenue * 0.75;

    // Estimert reduksjon i nedetid med MSP (70% forbedring)
    const reducedDowntime = data.downtimeHours * 0.3;
    const reducedDowntimeCost = reducedDowntime * data.hourlyRevenue * 0.75;

    // MSP-kostnad basert på størrelse
    const mspMonthlyCost = 
      (data.employees * 200) + // Per ansatt
      (data.locations * 2000); // Per lokasjon

    // Beregning
    const monthlySavings = monthlyDowntimeCost - reducedDowntimeCost - mspMonthlyCost;
    const roiPercentage = (monthlySavings / mspMonthlyCost) * 100;

    setResults({
      currentCost: monthlyDowntimeCost,
      withMSP: reducedDowntimeCost + mspMonthlyCost,
      savings: monthlySavings,
      roi: roiPercentage,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/10 border-white/20">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="employees" className="text-primary-foreground">
                Antall ansatte
              </Label>
              <Input
                id="employees"
                name="employees"
                type="number"
                value={inputs.employees}
                onChange={handleInputChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Label htmlFor="locations" className="text-primary-foreground">
                Antall lokasjoner
              </Label>
              <Input
                id="locations"
                name="locations"
                type="number"
                value={inputs.locations}
                onChange={handleInputChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Label htmlFor="downtimeHours" className="text-primary-foreground">
                Timer nedetid per måned
              </Label>
              <Input
                id="downtimeHours"
                name="downtimeHours"
                type="number"
                step="0.5"
                value={inputs.downtimeHours}
                onChange={handleInputChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Label htmlFor="hourlyRevenue" className="text-primary-foreground">
                Estimert timeinntekt (NOK)
              </Label>
              <Input
                id="hourlyRevenue"
                name="hourlyRevenue"
                type="number"
                value={inputs.hourlyRevenue}
                onChange={handleInputChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/10 border-white/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-foreground/80">
                  Nåværende kostnad ved nedetid
                </p>
                <p className="text-2xl font-bold text-white">
                  {formatPrice(results.currentCost)}/mnd
                </p>
              </div>
              <Calculator className="h-8 w-8 text-white/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-foreground/80">
                  Kostnad med MSP-løsning
                </p>
                <p className="text-2xl font-bold text-white">
                  {formatPrice(results.withMSP)}/mnd
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-white/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings highlight */}
      {results.savings > 0 && (
        <Card className="bg-secondary/20 border-secondary">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-primary-foreground/80 mb-2">
              Estimert månedlig besparelse
            </p>
            <p className="text-3xl font-bold text-white mb-2">
              {formatPrice(results.savings)}
            </p>
            <p className="text-sm text-primary-foreground/80">
              ROI: {results.roi.toFixed(0)}% på MSP-investering
            </p>
          </CardContent>
        </Card>
      )}

      <p className="text-xs text-primary-foreground/60 text-center">
        * Kalkulator basert på gjennomsnittlige tall fra norske SMB-bedrifter. 
        Faktiske resultater vil variere basert på din spesifikke situasjon.
      </p>
    </div>
  );
}
