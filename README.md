# Site da Associação dos Consultores Ambientais de Ponta Grossa

Site institucional estático em **Astro** com gerenciamento de conteúdo via
**Decap CMS** + **Netlify Identity**, hospedado na **Netlify**.

- Guia para os associados: [`GUIA-DO-ASSOCIADO.md`](./GUIA-DO-ASSOCIADO.md)
- Repositório: https://github.com/thilucas/consultores-ambientais-pg

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
```

## Estrutura

```
src/
  content/
    eventos/        # 1 arquivo .md por evento (criados pelo CMS)
    empresas/       # 1 arquivo .md por empresa associada
  assets/uploads/   # fotos enviadas pelo CMS (otimizadas no build)
  pages/
    index.astro         # página única com todas as seções
    eventos/[id].astro  # página de cada evento, com galeria + lightbox
public/
  admin/            # painel do Decap CMS (config.yml + index.html)
  portfolios/       # PDFs dos portfólios das empresas
```

As imagens passam pelo componente `<Image>` do Astro e são convertidas para
WebP em tamanhos responsivos durante o build.

## Estado da configuração na Netlify

O site está **no ar**: https://consultores-ambientais-pg.netlify.app

| Item | Estado |
| --- | --- |
| Projeto na Netlify | ✅ criado (`consultores-ambientais-pg`) |
| Deploy contínuo pelo GitHub | ✅ ativo — todo push na `main` republica |
| Build (`npm run build` → `dist`) | ✅ configurado |
| Netlify Identity | ✅ ativado |
| Registro **apenas por convite** | ✅ ativado |
| **Git Gateway** | ⚠️ **pendente** — ver abaixo |
| Convite dos associados | ⚠️ pendente |

### Falta: ativar o Git Gateway

Sem esse passo o painel `/admin` abre e aceita login, mas **não consegue
salvar** o conteúdo no repositório.

1. Acesse **Project configuration → Identity → Services → Git Gateway**.
2. Clique em **Enable Git Gateway**.
3. Vai abrir uma **janela do GitHub** pedindo autorização para a Netlify —
   confirme nela. É essa janela que trava a automação, por isso o passo é
   manual.
4. Ao terminar, o painel deve mostrar
   `Repository: thilucas/consultores-ambientais-pg`.

> Se aparecer "This Git Gateway appears to be misconfigured", clique em
> **Disable Git Gateway** e ative de novo — o aviso some quando a autorização
> do GitHub é concluída.

### Depois: convidar os associados

Em **Identity → Invite users**, informe os e-mails. Cada pessoa recebe um
convite para criar a senha (ver `GUIA-DO-ASSOCIADO.md`).

### Domínio

O endereço de produção é `https://consultores-ambientais-pg.netlify.app`, já
refletido em `astro.config.mjs` (`site`) e em `public/admin/config.yml`
(`site_url`, `logo_url`). Se for configurado um domínio próprio, atualize os
dois arquivos.

## Conteúdo a confirmar

O `content.md` original marcava dois itens como rascunho. Os textos abaixo
foram aprovados e já estão no site:

- **Visão** — "Ser referência nos Campos Gerais em consultoria e gestão
  ambiental, reconhecida pela excelência técnica dos seus associados e pela
  contribuição ao desenvolvimento sustentável da região."
- **Valores** — Ética e transparência · Excelência técnica · Associativismo e
  cooperação · Sustentabilidade · Valorização profissional

Ainda **a definir** (hoje o site mostra apenas o e-mail):

- Telefone / WhatsApp
- Instagram / LinkedIn

## Evento de exemplo

O evento "Fundação da Associação" usa **3 imagens de espaço reservado**
(`src/assets/uploads/fundacao-0*.png`). Substitua pelas fotos reais pelo painel
`/admin`.
