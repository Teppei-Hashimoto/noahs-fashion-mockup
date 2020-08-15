const msgBadges = document.querySelectorAll('.badge-message');
msgBadges.forEach((badge) => {
  if (Number.parseInt(badge.textContent) === 0) {
    badge.parentNode.removeChild(badge);
  }
  if (Number.parseInt(badge.textContent) > 99) {
    badge.textContent = '99+';
  }
});

const msgsBadge = document.getElementById('badge-messages');
if (Number.parseInt(msgsBadge.textContent) === 0) {
  msgsBadge.parentNode.removeChild(msgsBadge);
}
if (Number.parseInt(msgsBadge.textContent) > 99) {
  msgsBadge.textContent = '99+';
}
