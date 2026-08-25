export default function ArchitectureDiagram() {
  return (
    <div className="architecture-visual" aria-hidden="true">
      <div className="architecture-diagram">
        <div className="diagram-node node-cloud">Cloud</div>
        <div className="diagram-node node-identity">Identity</div>
        <div className="diagram-node node-security">Security</div>
        <div className="diagram-node node-ops">Operations</div>
        <div className="diagram-core">Cloud Security</div>
        <span className="diagram-link link-a" />
        <span className="diagram-link link-b" />
        <span className="diagram-link link-c" />
        <span className="diagram-link link-d" />
      </div>
      <div className="diagram-support">
        <span className="support-label">Supporting experience areas</span>
        <div className="hero-signal-grid">
          <span>AWS</span>
          <span>Microsoft 365</span>
          <span>Email Security</span>
          <span>MSP Operations</span>
        </div>
      </div>
    </div>
  )
}
