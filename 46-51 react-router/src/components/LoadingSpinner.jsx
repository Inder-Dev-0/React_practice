const LoadingSpinner = () => {
  return (
    <div className="d-flex align-items-center spinner">
      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
  );
};

export default LoadingSpinner;
