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

## Configuração pendente na Netlify

O código está pronto. Faltam estes passos, que exigem login nas contas:

### 1. Conectar o repositório

1. Em https://app.netlify.com/start → **Import from GitHub**.
2. Autorize a Netlify a acessar o GitHub (abre uma janela do GitHub).
3. Selecione o repositório `consultores-ambientais-pg`.
4. Build já vem preenchido pelo `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy**.

### 2. Ativar o Netlify Identity (login dos associados)

Em **Project configuration → Identity**:

1. **Enable Identity**.
2. **Registration preferences → Invite only** ← importante, senão qualquer
   pessoa se cadastra.
3. **Services → Git Gateway → Enable Git Gateway**. É isso que permite ao
   painel gravar no repositório.

### 3. Convidar os associados

Em **Identity → Invite users**, informe os e-mails. Cada pessoa recebe um
convite para criar a senha.

### 4. Ajustar o domínio no código

Se o endereço final for diferente de
`https://consultores-ambientais-pg.netlify.app`, atualize:

- `astro.config.mjs` → campo `site`
- `public/admin/config.yml` → `site_url` e `logo_url`

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
