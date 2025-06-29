
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const date = document.getElementById('date').value;

  const msg = `
    Terima kasih ${name}!
    Tempahan anda untuk ${quantity} ${product} pada ${date} telah diterima.
    Kami akan hubungi anda melalui WhatsApp untuk pengesahan.
  `;

  document.getElementById('formMsg').innerText = msg;
  document.getElementById('bookingForm').reset();
});
