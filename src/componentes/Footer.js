export default function Footer() {
  return (
    <footer className="bg-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-white mb-4">Sobre Eclipse</h4>
            <p className="text-white">
              Eclipse es un sitio web que se dedica a mostrar información sobre
              GPUs y su rendimiento. Aquí podrás encontrar comparativas,
              noticias y análisis de las últimas tarjetas gráficas del mercado.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="text-white mb-4">Enlaces útiles</h4>
            <ul className="list-unstyled">
              <li>
                <a href="Comparativas" className="text-white">
                  Comparativas de GPUs
                </a>
              </li>
              <li>
                <a href="x" className="text-white">
                  Análisis de GPUs
                </a>
              </li>
              <li>
                <a href="x" className="text-white">
                  Noticias de GPUs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="text-white mb-4">Redes sociales</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="www.facebook.com" className="text-white">
                  Facebook
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="www.twitter.com" className="text-white">
                  Twitter
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="www.instagram.com" className="text-white">
                  Instagram
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white">
              &copy; 2023 Eclipse. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
