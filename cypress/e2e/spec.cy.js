describe("Pesquisa específica de um item no site: Amazon", () => {
  // Acesso a página da Amazon
  beforeEach(() => {
    cy.visit("https://www.amazon.com.br");
  });

  it("Exibe produto especifico e adiciona ao carrinho", () => {
    // Pesquisar pelo produto "AI Engineering: Building Applications with Foundation Models"
    cy.get("#twotabsearchtextbox")
      .clear() // Limpa o campo, caso haja algo
      .type("AI Engineering: Building Applications with Foundation Models{enter}");

    // Selecionar o produto "AI Engineering: Building Applications with Foundation Models"
    cy.get(".s-main-slot .s-result-item") // Encontra todos os itens de resultado
      .contains("AI Engineering: Building Applications with Foundation Models")
      .click();

    // Verificar idioma: Inglês
    cy.get("#rpi-attribute-language > .a-spacing-none > span")
      .and("contain.text", "Inglês").should("exist");

    //Verificar autor: Chip Huyen
    cy.get(".author > .a-link-normal")
      .and("contains.text", "Chip Huyen").should("exist");

    //Verificar se é livro Novo
    cy.get("#mediaMatrixGridAODPopover > .a-popover-trigger > .a-size-base")
      .and("contains.text", "Novo").click()
      .get("#mm-grid-aod-popover-paperback_meta_binding-entry")
      .and("contains.text", "Capa Comum").click();

    cy.wait(5000)//aguardar 5 segundos

    cy.get(":nth-child(3) > .a-fixed-right-grid-inner > .aod-atc-column")
      .and("contains.text", "Adicionar ao Carrinho").click();

    // Verificar que a mensagem "Adicionado" é exibida
    cy.get("#aod-sticky-pinned-offer-added-to-cart > .a-box-inner > .a-alert-content")
      .should("be.visible")
      .and("contain.text", "Adicionado");
  });
});