
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const date = document.getElementById('date').value;

  const message = `Tempahan dari ${name}%0AProduk: ${product}%0AKuantiti: ${quantity}%0ATarikh: ${date}`;
  const phone = "60195684543";

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});
