"use client";

import { useEffect, useState } from "react";

const quickActions = [
  { label: "Área Pix", icon: "pix" },
  { label: "Pagar", icon: "barcode" },
  { label: "Transferir", icon: "transfer" },
  { label: "Depositar", icon: "deposit" },
  { label: "Recarga", icon: "phone" },
];

const learnCards = [
  {
    title: "Portabilidade de salário",
    text: "Sua liberdade financeira começa com você escolhendo...",
  },
  {
    title: "Portabilidade de salário",
    text: "Sua liberdade financeira começa com você escolhendo...",
  },
  {
    title: "Organize sua vida financeira",
    text: "Acompanhe seu dinheiro de um jeito simples e seguro.",
  },
];

function UiIcon({ name }: { name: string }) {
  return <span className={`ui-icon ui-icon--${name}`} aria-hidden="true" />;
}

export default function Home() {
  const [notice, setNotice] = useState("");
  const [cardRequested, setCardRequested] = useState(false);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const showNotice = (message: string) => setNotice(message);

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="header-tools">
          <button
            className="profile-button"
            type="button"
            aria-label="Abrir perfil"
            onClick={() => showNotice("Perfil aberto")}
          >
            <UiIcon name="person" />
          </button>

          <div className="header-actions">
            <button
              className="header-button"
              type="button"
              aria-label="Ocultar saldo"
              onClick={() => showNotice("Saldo protegido")}
            >
              <UiIcon name="hidden" />
            </button>
            <button
              className="header-button"
              type="button"
              aria-label="Ajuda"
              onClick={() => showNotice("Central de ajuda")}
            >
              <UiIcon name="help" />
            </button>
            <button
              className="header-button"
              type="button"
              aria-label="Mensagens"
              onClick={() => showNotice("Você está em dia")}
            >
              <UiIcon name="mail" />
            </button>
          </div>
        </div>

        <p className="welcome">Olá, Felipe Santana</p>
      </header>

      <section className="account-section" aria-labelledby="account-title">
        <div className="section-padding">
          <h1 id="account-title">Conta</h1>
          <p className="balance">€3.240.221</p>
        </div>

        <div className="quick-scroll" aria-label="Ações rápidas">
          {quickActions.map((action) => (
            <button
              className="quick-action"
              type="button"
              key={action.label}
              onClick={() => showNotice(`${action.label} selecionado`)}
            >
              <span className="quick-circle">
                <UiIcon name={action.icon} />
              </span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>

        <div className="section-padding cards-padding">
          <button
            className="my-cards"
            type="button"
            onClick={() => showNotice("Seus cartões")}
          >
            <UiIcon name="card" />
            <span>Meus Cartões</span>
          </button>
        </div>

        <div className="notices-scroll" aria-label="Avisos">
          <button
            className="notice-card"
            type="button"
            onClick={() => showNotice("Informe de rendimentos disponível")}
          >
            Seu <strong>informe de rendimentos</strong> 2021 já está disponível
          </button>
          <button
            className="notice-card"
            type="button"
            onClick={() => showNotice("Informe de rendimentos disponível")}
          >
            Seu <strong>informe de rendimentos</strong> 2021 já está disponível
          </button>
        </div>
      </section>

      <div className="divider" />

      <section className="credit-section" aria-labelledby="credit-title">
        <UiIcon name="card" />
        <h2 id="credit-title">Cartão de crédito</h2>
        <p>
          Peça seu cartão de crédito sem anuidade e tenha mais controle da sua
          vida financeira.
        </p>
        <button
          className={`primary-button${cardRequested ? " primary-button--done" : ""}`}
          type="button"
          onClick={() => {
            setCardRequested(true);
            showNotice("Pedido de cartão enviado")
          }}
        >
          {cardRequested ? "Pedido enviado" : "Pedir Cartão"}
        </button>
      </section>

      <div className="divider" />

      <section className="discover-section" aria-labelledby="discover-title">
        <h2 id="discover-title">Descubra mais</h2>

        <div className="learn-scroll">
          {learnCards.map((card, index) => (
            <article className="learn-card" key={`${card.title}-${index}`}>
              <div className="learn-art" aria-hidden="true">
                <span className="art-shadow" />
                <span className="art-phone">
                  <i className="phone-copy phone-copy--one" />
                  <i className="phone-copy phone-copy--two" />
                  <i className="phone-copy phone-copy--three" />
                  <b />
                </span>
              </div>
              <div className="learn-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button
                  className="primary-button learn-button"
                  type="button"
                  onClick={() => showNotice(card.title)}
                >
                  Conhecer
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div
        className={`toast${notice ? " toast--visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {notice}
      </div>
    </main>
  );
}
