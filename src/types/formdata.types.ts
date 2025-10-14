export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  como_nos_conheceu: string;
  mensagem: string;
}

export interface ResponseData {
  message: string;
  error?: string;
}