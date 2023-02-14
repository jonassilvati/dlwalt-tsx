const NotFound = () => {
  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="error-page text-center">
              <div className="error-code">
                <h2>
                  <strong>404</strong>
                </h2>
              </div>
              <div className="error-message">
                <h3>Oops... Página não encontrada!</h3>
              </div>
              <div className="error-body">
                Tente usar o botão abaixo para retornar ao site <br />
                <a href="/" className="btn btn-primary">
                  Voltar à página principal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
