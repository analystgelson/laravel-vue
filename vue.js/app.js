var app = new Vue({
	el: "#app",
	data: {
		title: "Conta a pagar",
		bills: [
			{date_due: '20/08/2016', name: 'Conta de luz', value: 70.99},
			{date_due: '21/08/2016', name: 'Conta de água', value: 55.99},
			{date_due: '22/08/2016', name: 'Conta de telefone', value: 55.99},
			{date_due: '23/08/2016', name: 'Supermercado', value: 625.99},
			{date_due: '24/08/2016', name: 'Cartão de crédito', value: 1500.99},
			{date_due: '25/08/2016', name: 'Empréstimo', value: 2000.99},
			{date_due: '26/08/2016', name: 'Gasolina', value: 200},
		]
	}
})