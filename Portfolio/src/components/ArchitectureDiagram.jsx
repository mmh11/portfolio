const capabilities = [
  {
    className: 'blueprint-card-cloud',
    title: 'Cloud',
    detail: 'AWS, Infrastructure, Architecture',
  },
  {
    className: 'blueprint-card-operations',
    title: 'Operations',
    detail: 'MSP, Monitoring, Automation',
  },
  {
    className: 'blueprint-card-identity',
    title: 'Identity',
    detail: 'IAM, Entra ID, Access Control',
  },
  {
    className: 'blueprint-card-security',
    title: 'Security',
    detail: 'Threat Modelling, Email Security, Testing',
  },
]

const supportingAreas = ['AWS', 'Microsoft 365', 'Email Security', 'MSP Operations']

export default function ArchitectureDiagram() {
  return (
    <div className="architecture-visual" aria-hidden="true">
      <div className="blueprint-map">
        <svg className="blueprint-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M50 22 V39" />
          <path d="M33 50 H40" />
          <path d="M60 50 H67" />
          <path d="M50 61 V78" />
          <circle cx="50" cy="39" r="0.9" />
          <circle cx="40" cy="50" r="0.9" />
          <circle cx="60" cy="50" r="0.9" />
          <circle cx="50" cy="61" r="0.9" />
        </svg>

        <div className="blueprint-core">
          <span>Cloud Security</span>
        </div>

        {capabilities.map((capability) => (
          <div className={`blueprint-card ${capability.className}`} key={capability.title}>
            <span className="blueprint-card-title">{capability.title}</span>
            <span className="blueprint-card-detail">{capability.detail}</span>
          </div>
        ))}
      </div>

      <div className="diagram-support">
        <span className="support-label">Supporting Experience Areas</span>
        <div className="hero-signal-grid">
          {supportingAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
