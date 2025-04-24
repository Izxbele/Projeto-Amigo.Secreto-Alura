# Projeto de Sorteio de Amigo Secreto 🎁

Este é um projeto simples para realizar sorteios de **Amigo Secreto** de forma interativa utilizando **HTML**, **CSS**, e **JavaScript**. O sistema permite adicionar amigos à lista, realizar sorteios e verificar a duplicação de nomes.

## Funcionalidades ✨

- **Adicionar amigos à lista**: O usuário pode inserir o nome de seus amigos no campo de entrada. É possível adicionar múltiplos amigos à lista.
- **Entrada de nomes com "Enter"**: Ao pressionar a tecla "Enter", o nome inserido no campo de texto será automaticamente adicionado à lista.
- **Conferência de Nomes Idênticos**: Para evitar duplicação, o sistema realiza uma verificação para garantir que nomes idênticos não sejam adicionados à lista. Caso o usuário tente adicionar um nome repetido, será exibida uma mensagem de erro e o nome não será adicionado.
- **Exclusão de Nomes**: O usuário pode excluir um nome da lista antes de acionar o botão de "Sortear". Isso é útil caso o usuário perceba um erro ou queira remover um nome específico antes do sorteio. Após o sorteio, a lista de nomes fica bloqueada para alterações, incluindo exclusões.
- **Sortear um amigo secreto**: Após adicionar os amigos à lista, o usuário pode realizar o sorteio para escolher um ganhador aleatório. O nome do ganhador será exibido na tela.
- **Desabilitação do campo de entrada**: Após realizar o sorteio, o campo de entrada será desabilitado, impedindo que mais nomes sejam adicionados até que a página seja atualizada.

## Como Usar 📝

### Adicionar amigos:

1. Digite o nome de um amigo no campo de entrada.
2. Clique no botão **"Adicionar"** ou pressione a tecla **"Enter"** para adicionar o nome à lista.
3. ⚠️ Se tentar adicionar um nome que já está na lista, uma mensagem de erro será exibida, informando que o nome é duplicado e não será adicionado.

### Excluir amigos:

1. Antes de realizar o sorteio, você pode excluir um nome da lista.
2. Para excluir um nome, basta clicar no ícone de **excluir** ao lado do nome na lista.

### Sortear o amigo secreto:

1. Após adicionar os amigos, clique no botão **"Sortear amigo"** para realizar o sorteio.
2. O nome do ganhador será exibido abaixo do botão.

### Finalização:

1. Após o sorteio, o campo de entrada será desabilitado.
2. Para começar novamente, basta atualizar a página.

## Como Visualizar no Navegador 🌐

Para visualizar o projeto corretamente, siga os passos abaixo:

1. **Baixe ou clone o repositório** no seu computador.
2. **Abra o arquivo `index.html` com um servidor local**:
   - Para isso, você **precisa do Live Server** instalado no **VSCode**. Siga os passos:
     1. Abra o projeto no VSCode.
     2. Instale a extensão **Live Server** (se ainda não tiver). Basta procurar por "Live Server" na seção de extensões do VSCode e clicar em "Install".
     3. Após a instalação, clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
   - Isso abrirá o seu projeto em um servidor local no navegador.

3. **Alternativa**: Você também pode usar qualquer outro servidor local (como XAMPP, WAMP, ou Python HTTP server) para garantir que os arquivos (imagens, CSS, JS) sejam carregados corretamente.

4. **Ou**: Para hospedar online, você pode usar o **GitHub Pages**. Siga os passos abaixo:
   - Vá para **Settings** do seu repositório no GitHub.
   - Encontre a seção **GitHub Pages**.
   - Em **Source**, selecione a branch `main` ou `master`.
   - O GitHub vai gerar um link para acessar o seu projeto online.

## Tecnologias Utilizadas ⚙️

- **HTML** (para estruturação da página)
- **CSS** (para estilização da página)
- **JavaScript** (para interação e funcionalidades)

---
