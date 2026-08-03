type Props = {
  className?: string;
  strokeWidth?: number;
};

// Parametrisch erzeugte Eiskristall-Liniengrafik (6-fach symmetrisch,
// mit Verzweigungen je Arm) — nimmt das Schneeflocken-Motiv aus dem
// REGLER-Logo auf und übersetzt es in eine präzise, technische
// Zeichnung. Wiederkehrendes Signature-Element der Seite.
export default function IceCrystal({ className, strokeWidth = 3 }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="100.0" y1="100.0" x2="100.0" y2="22.0" />
      <line x1="100.0" y1="61.0" x2="90.7" y2="47.7" />
      <line x1="100.0" y1="61.0" x2="109.3" y2="47.7" />
      <line x1="100.0" y1="39.2" x2="92.0" y2="27.7" />
      <line x1="100.0" y1="39.2" x2="108.0" y2="27.7" />
      <line x1="100.0" y1="100.0" x2="167.5" y2="61.0" />
      <line x1="133.8" y1="80.5" x2="140.6" y2="65.8" />
      <line x1="133.8" y1="80.5" x2="149.9" y2="81.9" />
      <line x1="152.7" y1="69.6" x2="158.6" y2="56.9" />
      <line x1="152.7" y1="69.6" x2="166.6" y2="70.8" />
      <line x1="100.0" y1="100.0" x2="167.5" y2="139.0" />
      <line x1="133.8" y1="119.5" x2="149.9" y2="118.1" />
      <line x1="133.8" y1="119.5" x2="140.6" y2="134.2" />
      <line x1="152.7" y1="130.4" x2="166.6" y2="129.2" />
      <line x1="152.7" y1="130.4" x2="158.6" y2="143.1" />
      <line x1="100.0" y1="100.0" x2="100.0" y2="178.0" />
      <line x1="100.0" y1="139.0" x2="109.3" y2="152.3" />
      <line x1="100.0" y1="139.0" x2="90.7" y2="152.3" />
      <line x1="100.0" y1="160.8" x2="108.0" y2="172.3" />
      <line x1="100.0" y1="160.8" x2="92.0" y2="172.3" />
      <line x1="100.0" y1="100.0" x2="32.5" y2="139.0" />
      <line x1="66.2" y1="119.5" x2="59.4" y2="134.2" />
      <line x1="66.2" y1="119.5" x2="50.1" y2="118.1" />
      <line x1="47.3" y1="130.4" x2="41.4" y2="143.1" />
      <line x1="47.3" y1="130.4" x2="33.4" y2="129.2" />
      <line x1="100.0" y1="100.0" x2="32.5" y2="61.0" />
      <line x1="66.2" y1="80.5" x2="50.1" y2="81.9" />
      <line x1="66.2" y1="80.5" x2="59.4" y2="65.8" />
      <line x1="47.3" y1="69.6" x2="33.4" y2="70.8" />
      <line x1="47.3" y1="69.6" x2="41.4" y2="56.9" />
    </svg>
  );
}
