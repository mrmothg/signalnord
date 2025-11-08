export function TrustLogos() {
  const logos = [
    { name: 'Microsoft Partner', placeholder: 'MICROSOFT' },
    { name: 'Cisco Partner', placeholder: 'CISCO' },
    { name: 'ISO 27001', placeholder: 'ISO 27001' },
    { name: 'Fortinet Partner', placeholder: 'FORTINET' },
    { name: 'VMware Partner', placeholder: 'VMWARE' },
    { name: 'Dell Technologies', placeholder: 'DELL' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-12 w-24 items-center justify-center rounded border border-muted-foreground/20 bg-background px-4 py-2 grayscale hover:grayscale-0 transition-all"
          title={logo.name}
        >
          <span className="text-xs font-semibold text-muted-foreground">
            {logo.placeholder}
          </span>
        </div>
      ))}
    </div>
  );
}
