import { Container } from './styles';
import { Tag } from '../../components/Tag';

export function Note({data, ...rest}) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <img 
        src="/src/assets/star.svg"     alt="Desenho de uma estrela" 
      />

      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, 
        <br /> tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
      </p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag =>
              <Tag 
                key = {tag.id}
                title = {tag.name}
              />)
          }
        </footer>
      }

    </Container>
  );
}