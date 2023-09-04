export default function RightLayout() {
  return (
    <div>
      <div>
        <div className="card align-items-center bg-light m-4">
          <div className="card-header">Tus Colecciones</div>
          <ul className="list-group list-group-flush">
            {/* Aquí generas dinámicamente la lista de equipos */}
          </ul>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-header">Gráfica</div>
        <div className="card-body">{/* Aquí muestras la gráfica */}</div>
      </div>
    </div>
  );
}
