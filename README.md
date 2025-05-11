# ZooApi

Sistema de gerenciamento de zoológico, com backend em .NET 8 (Web API) e frontend em React.

## 📦 Tecnologias Utilizadas

- .NET 8 (Web API)
- Entity Framework Core
- SQL Server
- React
- Swagger (documentação da API)

---

## 🚀 Como rodar o projeto

### 1. Backend (.NET)

```sh
cd "C:\Users\******\ZooApi"
dotnet run

tive algumas dificuldades nos codigos e me perdi algumas vezes nos links

💡 Observações
Certifique-se de que o backend está rodando antes de iniciar o frontend.
O Swagger facilita o teste dos endpoints da API.
O projeto pode ser facilmente adaptado para outros bancos suportados pelo Entity Framework Core.

✅ Requisitos
.NET 8 SDK
Node.js e npm
SQL Server (local ou remoto)

🐾 Funcionalidades
Cadastro, edição, listagem e remoção de Animais
Cadastro, edição, listagem e remoção de Cuidados
Relacionamento entre Animais e Cuidados
Validações de dados no backend e frontend
Interface amigável e responsiva

⚙️ Configuração do Banco de Dados
O projeto utiliza SQL Server.
Configure a string de conexão no arquivo appsettings.json do backend.
Execute as migrations (se necessário) para criar as tabelas:
dotnet ef database update

👨‍💻 Autor
Guilherme Diniz
