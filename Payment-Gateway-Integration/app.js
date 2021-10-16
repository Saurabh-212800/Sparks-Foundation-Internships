var options = {
  key: "rzp_test_lugAJMeT8qjJdx",
  amount: "500",
  currency: "INR",
  name: "Sparks Foundation",
  description: "Test Transaction",
  image: "",
  order_id: "",
  handler: function (response) {
    alert("Payment Succesfull");
  },
  prefill: {
    name: "",
    email: "",
    contact: "",
  },
  notes: {
    address: "Sparks Foundation Office",
  },
  theme: {
    color: "#3399cc",
  },
};
var rzp1 = new Razorpay(options);
rzp1.on("payment.failed", function (response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});
document.getElementById("rzp-button1").onclick = function (e) {
  rzp1.open();
  e.preventDefault();
};
