import { LockKeyhole } from "lucide-react";

export default function Home() {
  return (
    <main className="private-root">
      <div className="private-card">
        <div className="nexo-mark">N</div>
        <p className="eyebrow">NexoDG · Preview Studio</p>
        <h1>Vista conceptual privada</h1>
        <p>
          Este entorno contiene propuestas de rediseño preparadas para empresas
          seleccionadas. Ingresá desde el enlace directo que recibiste.
        </p>
        <div className="private-note">
          <LockKeyhole size={18} />
          <span>No indexado en buscadores</span>
        </div>
      </div>
    </main>
  );
}
