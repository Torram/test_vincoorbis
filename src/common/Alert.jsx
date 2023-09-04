export default function Alert({ msg, type, onClose }) {
  const classAlert = `alert alert-${type} alert-dismissible fade show w-75 p-0 d-flex justify-content-between`;

  return (
    <div className={classAlert}>
      <b className="m-2">{msg}</b>
      {onClose && (
        <button
          type="button"
          className="btn btn-dark"
          data-dismiss="alert"
          aria-label="Cerrar"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}
