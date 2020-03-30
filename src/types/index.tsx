export type Response_GET_transactions = {
	error?: any;
	transactions: {
		accounts: Account[];
		item: any;
		request_id: string;
		total_transactions: number;
		transactions: Transaction[];
		status_code: number;
	};
};

/**
 * example:
 * {
 *    "account_id": "PqNqrKPvARho1DbXJM5BUvR8azRdgdt74ep6d",
 *    "balances": {
 *        "available": 100,
 *        "current": 110,
 *        "iso_currency_code": "USD",
 *        "limit"?: string,
 *        "unofficial_currency_code"?: string
 *    },
 *    "mask": "0000",
 *    "name": "Plaid Checking",
 *    "official_name": "Plaid Gold Standard 0% Interest Checking",
 *    "subtype": "checking",
 *    "type": "depository"
 * }
 */
export type Account = {
	account_id: string;
	balances: {
		available: 100;
		current: 110;
		iso_currency_code: string;
		limit?: number;
		unofficial_currency_code?: string;
	};
	mask: string;
	name: string;
	official_name: string;
	subtype: string;
	type: string;
};

/**
 * example:
 * {
 *   "account_id": "PqNqrKPvARho1DbXJM5BUvR8azRdgdt74ep6d",
 *   "account_owner": null,
 *   "amount": 6.33,
 *   "authorized_date": null,
 *   "category": ["Travel", "Taxi"],
 *   "category_id": "22016000",
 *   "date": "2020-03-29",
 *   "iso_currency_code": "USD",
 *   "location": {
 *       "address": null,
 *       "city": null,
 *       "country": null,
 *       "lat": null,
 *       "lon": null,
 *       "postal_code": null,
 *       "region": null,
 *       "store_number": null
 *   },
 *   "name": "Uber",
 *   "payment_channel": "in store",
 *   "payment_meta": {
 *       "by_order_of": null,
 *       "payee": null,
 *       "payer": null,
 *       "payment_method": null,
 *       "payment_processor": null,
 *       "ppd_id": null,
 *       "reason": null,
 *       "reference_number": null
 *   },
 *   "pending": false,
 *   "pending_transaction_id": null,
 *   "transaction_code": null,
 *   "transaction_id": "z7o7JNjp1Bc8jPMgnxk1i9aWwxqQeoFoGzkwb",
 *   "transaction_type": "special",
 *   "unofficial_currency_code": null
 * }
 */
export type Transaction = {
	account_id: string;
	account_owner?: string | null;
	amount: number;
	// authorized_date?: string;
	category: string[];
	// category_id: string;
	date: string;
	iso_currency_code: string;
	location: {
		address?: string | null;
		city?: string | null;
		country?: string | null;
		lat?: string | null;
		lon?: string | null;
		postal_code?: string | null;
		region?: string | null;
		store_number?: string | null;
	};
	name: string;
	payment_channel: string;
	// payment_meta: {
	// 	by_order_of?: string;
	// 	payee?: string;
	// 	payer?: string;
	// 	payment_method?: string;
	// 	payment_processor?: string;
	// 	ppd_id?: string;
	// 	reason?: string;
	// 	reference_number?: string;
	// };
	pending: boolean;
	// pending_transaction_id?: string;
	// transaction_code?: string;
	transaction_id: string;
	transaction_type: string;
	// unofficial_currency_code?: string;
};
