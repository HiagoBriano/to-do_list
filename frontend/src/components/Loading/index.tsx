import './Loading.css';

// fonte do carregamento:
// https://www.cupcom.com.br/programacao/15-carregadores-de-paginas-animados-apenas-com-css.html

interface IProps {
  status: string;
}

function Loading({ status }: IProps) {
  return (
    <div className="spinner">
      <div className="ball"></div>
      <p>LOADING</p>
      <p>{status}</p>
    </div>
  );
}

export default Loading;
