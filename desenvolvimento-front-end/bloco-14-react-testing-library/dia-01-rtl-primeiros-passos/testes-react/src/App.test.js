import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('01. Bloco de testes iniciais', () => {
  it('A página tem o titulo "App de Teste".', () => {
    render(<App />);
    const linkElement = screen.getByText(/app de teste/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('Existe uma label Nome e um input associado a ela.', () => {
    render(<App />);
    const link = screen.getByLabelText(/nome/i);
    expect(link).toBeInTheDocument();
    expect(link.type).toBe('text');
  })

  it('Existe um campo de email.', () => {
    render(<App />);
    const email = screen.getByLabelText(/email/i);
    expect(email).toBeInTheDocument();
    expect(email.type).toBe('email');
  })

  it('Campo de email já vem preenchido com valor.', () => {
    render(<App />);
    const email = screen.getByLabelText(/email/i);
    expect(email).toHaveValue('pad@pad.com');
  })

  it('Existe um botão que envia e um botão de voltar.', () => {
    render(<App />);
    const email = screen.getAllByRole('button');
    expect(email).toHaveLength(2);
    expect(email[0]).toHaveValue('enviar');
    expect(email[1]).toHaveValue('voltar');
  })
})

describe('02. Testes de eventos', () => {
    it('Verifica que ao clicar nos botões o estado muda.', () => {
      render(<App />);
      const send = screen.getByTestId('button-send');
      const back = screen.getByTestId('button-back');
      const textRender = screen.getByTestId('render');

      userEvent.click(send);
      expect(textRender).toHaveTextContent(send.value);
      userEvent.click(back);
      expect(textRender).toHaveTextContent(back.value);
    })
})


