// Preferência de cookies, compartilhamento e pontos de integração de métricas.
(() => {
  const banner = document.querySelector('.cookie-banner');
  const savedChoice = localStorage.getItem('cookie-choice');
  if (!savedChoice) banner.hidden = false;

  banner.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-cookie-choice]');
    if (!choice) return;
    localStorage.setItem('cookie-choice', choice.dataset.cookieChoice);
    banner.hidden = true;
  });

  const consultDialog = document.querySelector('.consult-dialog');
  document.querySelector('.mobile-modal-trigger')?.addEventListener('click', () => consultDialog.showModal());
  document.querySelector('.dialog-close')?.addEventListener('click', () => consultDialog.close());
  consultDialog?.addEventListener('click', (event) => { if (event.target === consultDialog) consultDialog.close(); });

  document.querySelector('.share-button')?.addEventListener('click', async () => {
    const shareData = { title: document.title, text: 'Dra. Lívia Limeira — cuidado com olhar individualizado.', url: location.href };
    const toast = document.querySelector('.toast');
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(location.href);
        toast.textContent = 'Link copiado para compartilhar';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2400);
      }
    } catch (error) {
      if (error.name !== 'AbortError') console.info('Compartilhamento indisponível neste navegador.');
    }
  });

  // Configure seus IDs de analytics antes de ativar gtag ou fbq no site.
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.addEventListener('click', () => {
      const detail = { event_category: 'agendamento', event_label: link.dataset.whatsapp, transport_type: 'beacon' };
      if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', detail);
      if (typeof window.fbq === 'function') window.fbq('trackCustom', 'WhatsAppClick', { modalidade: link.dataset.whatsapp });
    });
  });
})();
