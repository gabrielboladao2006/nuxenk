"use client";

import { useEffect, useState } from "react";

const quickActions = [
  { label: "Pix", icon: "pix" },
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
    title: "Organize sua vida financeira",
    text: "Acompanhe seu dinheiro de um jeito simples e seguro.",
  },
];

function UiIcon({ name, size = 24 }: { name: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "person") return <svg {...common}><circle cx="12" cy="7.5" r="3.2" /><path d="M5.6 20c.6-4 2.8-6.1 6.4-6.1s5.8 2.1 6.4 6.1" /></svg>;
  if (name === "eye") return <svg {...common}><path d="M2.8 12s3.3-6 9.2-6 9.2 6 9.2 6" /><circle cx="12" cy="12" r="2.2" /></svg>;
  if (name === "help") return <svg {...common}><circle cx="12" cy="12" r="8.3" /><path d="M9.8 9.2a2.4 2.4 0 1 1 3.1 2.3c-.7.3-.9.8-.9 1.5" /><path d="M12 16.5h.01" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="2.8" y="5.2" width="15.2" height="11.2" rx="2.2" /><path d="m4.4 7 6 4.6L16.5 7" /><path d="M20.2 10.8v6M17.2 13.8h6" /></svg>;
  if (name === "pix") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.4 3.6a3.68 3.68 0 0 1 5.2 0l5.8 5.8a3.68 3.68 0 0 1 0 5.2l-5.8 5.8a3.68 3.68 0 0 1-5.2 0l-5.8-5.8a3.68 3.68 0 0 1 0-5.2l5.8-5.8Zm-1.2 2.9-2.6 2.6 2.55 2.55a5.45 5.45 0 0 0 7.7 0L18.4 9.1l-2.6-2.6-2.2 2.2a2.26 2.26 0 0 1-3.2 0L8.2 6.5Zm0 11 2.2-2.2a2.26 2.26 0 0 1 3.2 0l2.2 2.2 2.6-2.6-2.55-2.55a5.45 5.45 0 0 0-7.7 0L5.6 14.9l2.6 2.6Z"
      />
    </svg>
  );
  if (name === "barcode") return <svg {...common} strokeWidth="2.3"><path d="M5 8v8M8 8v8M11.5 8v8M14 8v8M18 8v8" /></svg>;
  if (name === "transfer") return <svg {...common}><rect x="2.5" y="5" width="15" height="10.5" rx="1.2" /><circle cx="10" cy="10.2" r="1.5" /><path d="M15 12.7 21 6.8M16.8 6.8H21V11" /></svg>;
  if (name === "deposit") return <svg {...common}><rect x="2.5" y="5" width="15" height="10.5" rx="1.2" /><circle cx="10" cy="10.2" r="1.5" /><path d="m15 11.5 6 5.8M21 13v4.3h-4.2" /></svg>;
  if (name === "phone") return <svg {...common}><rect x="6.6" y="2.7" width="10.8" height="18.6" rx="2.2" /><path d="M10.2 5h3.6M11.4 18.8h1.2" /></svg>;
  if (name === "cards") return <svg {...common}><rect x="7" y="3" width="11.5" height="17" rx="3" /><path d="M4.5 7v10.2A3.8 3.8 0 0 0 8.3 21" /><path d="M11.5 6.3h2.5" /></svg>;
  if (name === "credit") return <svg {...common}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 5.8h3" /></svg>;
  return <svg {...common}><path d="m9 5 7 7-7 7" /></svg>;
}

export default function Home() {
  const [notice, setNotice] = useState("");

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
          <button className="profile-button" type="button" aria-label="Abrir perfil" onClick={() => showNotice("Perfil aberto")}>
            <UiIcon name="person" size={25} />
            <span className="profile-badge">2</span>
          </button>
          <div className="header-actions">
            <button className="header-button" type="button" aria-label="Mostrar ou ocultar saldo" onClick={() => showNotice("Visibilidade do saldo alterada")}><UiIcon name="eye" size={25} /></button>
            <button className="header-button" type="button" aria-label="Ajuda" onClick={() => showNotice("Central de ajuda")}><UiIcon name="help" size={24} /></button>
            <button className="header-button" type="button" aria-label="Mensagens" onClick={() => showNotice("Você está em dia")}><UiIcon name="mail" size={26} /></button>
          </div>
        </div>
        <p className="welcome">Olá, Gabriela</p>
      </header>

      <section className="account-section" aria-labelledby="account-title">
        <div className="section-padding">
          <button className="section-heading" type="button" onClick={() => showNotice("Detalhes da conta")}>
            <h1 id="account-title">Conta</h1><UiIcon name="chevron" size={20} />
          </button>
          <p className="balance">R$ 0,00</p>
        </div>

        <div className="quick-scroll" aria-label="Ações rápidas">
          {quickActions.map((action) => (
            <button className="quick-action" type="button" key={action.label} onClick={() => showNotice(`${action.label} selecionado`)}>
              <span className="quick-circle"><UiIcon name={action.icon} size={28} /></span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>

        <div className="section-padding cards-padding">
          <button className="my-cards" type="button" onClick={() => showNotice("Seus cartões")}>
            <span className="my-cards-main"><UiIcon name="cards" size={27} /><span>Meus cartões</span></span>
            <span className="card-count">3</span>
          </button>
        </div>

        <div className="notices-scroll" aria-label="Avisos">
          <button className="notice-card" type="button" onClick={() => showNotice("Empréstimo disponível")}>
            Você tem R$ 20.000,00 disponíveis para <strong>empréstimo.</strong>
          </button>
          <button className="notice-card" type="button" onClick={() => showNotice("Conta simples e segura")}>
            Conheça uma conta simples, segura e feita para você.
          </button>
        </div>
      </section>

      <div className="divider" />

      <section className="credit-section" aria-labelledby="credit-title">
        <UiIcon name="credit" size={23} />
        <button className="section-heading credit-heading" type="button" onClick={() => showNotice("Detalhes do cartão de crédito")}>
          <h2 id="credit-title">Cartão de crédito</h2><UiIcon name="chevron" size={20} />
        </button>
        <div className="invoice-block">
          <p>Fatura atual</p><strong>R$ 0,00</strong><span>Limite disponível de R$ 0,00</span>
        </div>
      </section>

      <div className="divider" />

      <section className="discover-section" aria-labelledby="discover-title">
        <h2 id="discover-title">Descubra mais</h2>
        <div className="learn-scroll">
          {learnCards.map((card) => (
            <article className="learn-card" key={card.title}>
              <div className="learn-art" aria-hidden="true"><span className="art-shadow" /><span className="art-phone"><b /></span></div>
              <div className="learn-content">
                <h3>{card.title}</h3><p>{card.text}</p>
                <button className="primary-button" type="button" onClick={() => showNotice(card.title)}>Conhecer</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={`toast${notice ? " toast--visible" : ""}`} role="status" aria-live="polite">{notice}</div>
    </main>
  );
}
