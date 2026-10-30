# Adicionando um tema ao site GitHub Pages usando o Jekyll

É possível personalizar o site do Jekyll adicionando e personalizando um tema.

> [!NOTE] Embora o gem `github-pages` continue tendo suporte para alguns fluxos de trabalho, GitHub Actions agora é a abordagem recomendada para implantar e automatizar sites do GitHub Pages.

Pessoas com permissões de gravação para um repositório podem adicionar um tema a um site do GitHub Pages usando Jekyll.

Se você estiver publicando por meio de um branch, as alterações em seu site serão publicadas automaticamente quando as alterações forem mescladas na fonte de publicação do site. Se você estiver publicando por meio de um fluxo de trabalho personalizado de GitHub Actions, as alterações serão publicadas sempre que seu fluxo de trabalho for disparado (normalmente por um push para o branch padrão). Se desejar visualizar as alterações primeiro, faça as alterações localmente em vez de fazê-las no GitHub. Em seguida, teste seu site localmente. Para saber mais, confira [Testando seu site de páginas GitHub localmente com o Jekyll](/pt/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

## Temas com suporte

Os seguintes temas têm suporte sem necessidade de configuração:

* [Architect](https://github.com/pages-themes/architect)
* [Cayman](https://github.com/pages-themes/cayman)
* [Dinky](https://github.com/pages-themes/dinky)
* [Hacker](https://github.com/pages-themes/hacker)
* [Dia bissexto](https://github.com/pages-themes/leap-day)
* [Merlot](https://github.com/pages-themes/merlot)
* [Midnight](https://github.com/pages-themes/midnight)
* [Minima](https://github.com/jekyll/minima)
* [Mínimo](https://github.com/pages-themes/minimal)
* [Modernist](https://github.com/pages-themes/modernist)
* [Slate](https://github.com/pages-themes/slate)
* ```
            [Tactile](https://github.com/pages-themes/tactile)
  ```
* [Computador de tempo](https://github.com/pages-themes/time-machine)

O plugin [`jekyll-remote-theme`](https://github.com/benbalter/jekyll-remote-theme) Jekyll também está disponível e permite que você carregue outros temas.

## Adicionar um tema

1. No GitHub, acesse o repositório do seu site.

2. Navegue até a fonte de publicação do seu site. Para saber mais, confira [Configurando uma fonte de publicação para seu site GitHub Pages](/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

3. Navegue até `_config.yml`.

4. No canto superior direito da exibição de arquivo, clique em <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> para abrir o editor de arquivos.
   ![Captura de tela de um arquivo. No cabeçalho, um botão, rotulado com um ícone de lápis, está contornado em laranja escuro.](/assets/images/help/repository/edit-file-edit-button.png)

   > [!NOTE]
   > Em vez de editar o arquivo e fazer commit dele usando o editor de arquivos padrão, você pode optar por usar o [editor de código github.dev](/pt/codespaces/the-githubdev-web-based-editor) selecionando o menu suspenso <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-triangle-down" aria-label="More edit options" role="img"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg> e clicando em **github.dev**. Você também pode clonar o repositório e editar o arquivo localmente por meio de GitHub Desktop clicando em **GitHub Desktop** .
   >
   > ![Captura de tela de um arquivo. No cabeçalho, um ícone de triângulo para baixo está contornado em laranja escuro.](/assets/images/help/repository/edit-file-edit-dropdown.png)

5. Adicione uma nova linha ao arquivo para o nome do tema.
   * Para usar um tema com suporte, digite `theme: THEME-NAME`, substituindo THEME-NAME pelo nome do tema, conforme mostrado no `_config.yml` do repositório do tema (a maioria dos temas seguem uma convenção de nomenclatura `jekyll-theme-NAME`). Para ver a lista de temas com suporte, confira [Temas com suporte](/pt/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#supported-themes) no site do GitHub Pages. Por exemplo, para selecionar o tema Mínima, digite `theme: jekyll-theme-minimal`.
   * Para usar qualquer outro tema do Jekyll hospedado no GitHub, digite `remote_theme: THEME-NAME`, substituindo THEME-NAME pelo nome do tema, conforme mostrado no LEIAME do repositório do tema.

6. Clique em **Fazer commit das alterações...**

7. No campo "Mensagem do commit", digite uma mensagem curta e relevante que descreva a alteração que você fez no arquivo. Você pode atribuir o commit a mais de um autor na mensagem do commit. Para saber mais, confira [Criar um commit com vários autores ou em nome de uma organização](/pt/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

8. Se você tiver mais de um endereço de e-mail associado à sua conta no GitHub, clique no menu suspenso de endereço de e-mail e selecione o endereço de e-mail a ser usado como endereço de e-mail do autor no Git. Apenas endereços de e-mail verificados aparecem neste menu suspenso. Se você habilitou a privacidade do endereço de email, um email sem resposta será o endereço de email do autor de commit padrão. Para obter mais informações sobre a forma exata que o endereço de email sem resposta pode assumir, confira [Configurar o endereço de e-mail do commit](/pt/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

![Captura de tela de um pull request do GitHub mostrando um menu suspenso com opções para escolher o endereço de e-mail do autor do commit.
octocat@github.com está selecionado.](/assets/images/help/repository/choose-commit-email-address.png)

1. Abaixo dos campos da mensagem de commit, decida se deseja adicionar seu commit ao ramo atual ou a um novo ramo. Se seu branch atual for o branch-padrão, você deverá optar por criar um novo branch para seu commit e, em seguida, criar um pull request. Para saber mais, confira [Como criar uma solicitação de pull](/pt/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Captura de tela de um pull request do GitHub mostrando um botão de opção para fazer commit diretamente na branch principal ou criar uma nova branch. A nova ramificação está selecionada.](/assets/images/help/repository/choose-commit-branch.png)
2. Clique em **Fazer commit de alterações** ou em **Propor alterações**.

## Personalizar o CSS do tema

Estas instruções funcionam melhor com temas que são oficialmente compatíveis com GitHub Pages. Para ver uma lista completa de temas com suporte, confira [Temas com suporte](/pt/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#supported-themes) no site do GitHub Pages.

O repositório de origem do seu tema pode oferecer alguma ajuda na personalização do tema. Por exemplo, confira o [LEIAME da Mínima](https://github.com/pages-themes/minimal#customizing).

1. No GitHub, acesse o repositório do seu site.

2. Navegue até a fonte de publicação do seu site. Para saber mais, confira [Configurando uma fonte de publicação para seu site GitHub Pages](/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

3. Crie um arquivo chamado `/assets/css/style.scss`.

4. Adicione o seguinte conteúdo ao topo do arquivo:

   ```scss
   ---
   ---

   @import "{{ site.theme }}";
   ```

5. Adicione qualquer CSS ou Sass personalizado que desejar (incluindo as importações) imediatamente após a linha `@import`.

## Personalizar o layout HTML do tema

Estas instruções funcionam melhor com temas que são oficialmente compatíveis com GitHub Pages. Para ver uma lista completa de temas com suporte, confira [Temas com suporte](/pt/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#supported-themes) no site do GitHub Pages.

O repositório de origem do seu tema pode oferecer alguma ajuda na personalização do tema. Por exemplo, confira o [LEIAME da Mínima](https://github.com/pages-themes/minimal#customizing).

1. No GitHub, navegue até o repositório de origem do tema. Por exemplo, o repositório de origem do Mínima é `https://github.com/pages-themes/minimal`.
2. Na pasta `_layouts`, navegue até o arquivo`_default.html` do tema.
3. Copie o conteúdo do arquivo.
4. No GitHub, acesse o repositório do seu site.
5. Navegue até a fonte de publicação do seu site. Para saber mais, confira [Configurando uma fonte de publicação para seu site GitHub Pages](/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
6. Crie um ficheiro chamado `_layouts/default.html`.
7. Cole o conteúdo do layout padrão que você copiou anteriormente.
8. Personalize o layout como desejado.

## Leitura adicional

* [Criar novos arquivos](/pt/repositories/working-with-files/managing-files/creating-new-files)
