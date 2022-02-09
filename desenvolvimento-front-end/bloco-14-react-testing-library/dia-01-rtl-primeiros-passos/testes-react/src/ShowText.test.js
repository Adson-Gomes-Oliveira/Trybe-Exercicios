import { render, screen } from '@testing-library/react';
import ShowText from './ShowText';

describe('Testa o texto a ser renderizado na tela pós clique', () => {
  it('Testa se o componente retorna uma string vazia em seu estado incial', () => {
    const textToBeReceived = ''
    render(<ShowText textReceived={textToBeReceived} />);
    const textRender = screen.getByRole('heading');
    expect(textRender).toBeEmptyDOMElement();
  });

  it('Testa se o texto passado é renderizado', () => {
    const textToBeReceived = 'Lucas'
    render(<ShowText textReceived={textToBeReceived} />);
    const textRender = screen.getByRole('heading');
    expect(textRender).toHaveTextContent(textToBeReceived);
  });

  it('Testa se o texto inicial existe no documento', () => {
    const textToBeReceived = 'Nenhum nome existe'
    render(<ShowText textReceived={textToBeReceived} />);
    const textRender = screen.getByRole('heading');
    expect(textRender).toBeInTheDocument();
  })
})